"""Validate and compile Bedrock tutorial recipes. This tool never runs Minecraft.

Draft exports are authoring aids, not screenshots or evidence of a playtest.
Packaging requires actual PNGs and explicit human capture/playtest review.
"""
from __future__ import annotations

import argparse
import base64
import hashlib
import html
import json
import os
from pathlib import Path
import re
import shutil
import struct
import sys
import tempfile
from typing import Any

from jsonschema import Draft202012Validator

ROOT = Path(__file__).resolve().parents[1]
CHECKS = ("disposable-studio", "world-blocks", "hotbar", "camera", "ui-settings", "no-personal-data")


class TutorialError(ValueError):
    """An authoring, compatibility, or capture verification failure."""


def load_json(path: Path) -> Any:
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except (OSError, ValueError) as exc:
        raise TutorialError(f"{path}: {exc}") from exc


def json_bytes(value: Any) -> bytes:
    return (json.dumps(value, ensure_ascii=False, sort_keys=True, indent=2) + "\n").encode("utf-8")


def digest(value: Any) -> str:
    return hashlib.sha256(json_bytes(value)).hexdigest()


def schema_check(value: Any, path: Path) -> None:
    schema = load_json(path)
    Draft202012Validator.check_schema(schema)
    errors = sorted(Draft202012Validator(schema).iter_errors(value), key=lambda e: e.json_path)
    if errors:
        raise TutorialError("; ".join(f"{e.json_path}: {e.message}" for e in errors))


def find_module(root: Path, module_id: str) -> dict:
    matches = []
    for path in sorted((root / "content/modules").rglob("*.json")):
        value = load_json(path)
        if isinstance(value, dict) and value.get("id") == module_id:
            matches.append(value)
    if len(matches) != 1:
        raise TutorialError(f"Module '{module_id}' must resolve exactly once, found {len(matches)}")
    module = matches[0]
    schema_check(module, root / "content/schemas/module.schema.json")
    return module


def validate_recipe(spec: dict, root: Path = ROOT) -> dict:
    schema_check(spec, root / "content/schemas/tutorial.schema.json")
    module = find_module(root, spec["moduleId"])
    if f"demo:{spec['id']}" not in module["mediaReferences"]:
        raise TutorialError("Canonical module must reference this recipe as demo:<id>")
    if module["editions"] != ["bedrock"]:
        raise TutorialError("The Bedrock compiler cannot process a mixed-edition module")
    if spec["profile"]["platform"] not in module["platforms"] or spec["profile"]["input"] not in module["inputMethods"]:
        raise TutorialError("Capture profile is not declared by its module")
    skills = {s["id"] for s in load_json(root / "content/taxonomies/minecraft-skills.json")["skills"]}
    if not set(spec["skills"]).issubset(skills):
        raise TutorialError("Unresolved Minecraft skill reference")
    ids = [s["id"] for s in spec["steps"]]
    if len(set(ids)) != len(ids):
        raise TutorialError("Duplicate tutorial step id")
    cues = [c["cueText"] for c in module["learnerCues"]]
    if cues != [s["instruction"] for s in spec["steps"]]:
        raise TutorialError("Canonical learner cues and tutorial instructions have drifted")
    lo, hi = spec["studio"]["bounds"]["min"], spec["studio"]["bounds"]["max"]
    for step in spec["steps"]:
        frame = step["frame"]
        positions = [tuple(b["at"]) for b in frame["blocks"]]
        if len(set(positions)) != len(positions):
            raise TutorialError(f"{step['id']}: duplicate block coordinate")
        for at in positions:
            if not all(lo[i] <= at[i] <= hi[i] for i in range(3)) or at[1] <= lo[1]:
                raise TutorialError(f"{step['id']}: block outside studio air volume")
        for name in ("position", "lookAt"):
            if not all(lo[i] <= frame[name][i] <= hi[i] for i in range(3)):
                raise TutorialError(f"{step['id']}: {name} outside studio")
        if frame["position"][1] < lo[1] + 1:
            raise TutorialError(f"{step['id']}: player is inside the floor")
        if frame["position"] == frame["lookAt"]:
            raise TutorialError(f"{step['id']}: camera has no viewing direction")
        target = frame["target"]
        if target["kind"] == "block" and tuple(target["at"]) not in positions:
            raise TutorialError(f"{step['id']}: annotation targets a missing block")
        if target["kind"] == "hotbar-slot" and target["slot"] != frame["selectedSlot"]:
            raise TutorialError(f"{step['id']}: annotation does not match selected slot")
    return module


def studio_commands(spec: dict, step: dict) -> list[str]:
    """Each shot is absolute and independently resettable, not a replay delta.

    Run only as the adult studio player (@s) in a disposable offline copy.
    Hotbar selection and client settings still require a verified client action.
    """
    frame = step["frame"]
    xyz = lambda v: " ".join(str(n) for n in v)
    commands = [
        "gamemode creative @s", "difficulty peaceful", "time set 6000", "weather clear",
        "gamerule doDaylightCycle false", "gamerule doWeatherCycle false",
        "gamerule doMobSpawning false", "gamerule randomTickSpeed 0",
        "fill 0 63 0 12 63 12 minecraft:stone", "fill 0 64 0 12 74 12 minecraft:air", "clear @s",
    ]
    for slot, item in enumerate(spec["studio"]["hotbar"]):
        commands.append(f"replaceitem entity @s slot.hotbar {slot} {item} 64")
    commands.extend(f"setblock {xyz(b['at'])} {b['item']}" for b in frame["blocks"])
    commands.append(f"tp @s {xyz(frame['position'])} facing {xyz(frame['lookAt'])}")
    return commands


def readiness_blockers(spec: dict, module: dict) -> list[str]:
    blockers = []
    for key in ("version", "guiScale", "settingsSha256"):
        if spec["profile"][key] is None:
            blockers.append(f"profile.{key} is unverified")
    if spec["studio"]["checkpointSha256"] is None:
        blockers.append("studio checkpoint is not hashed")
    if not spec["review"]["technicalVerified"] or not spec["review"]["reviewer"]:
        blockers.append("technical capture review is missing")
    if not module["review"]["playtested"]:
        blockers.append("canonical module is not human-playtested")
    return blockers


def read_captures(spec: dict, module: dict, manifest_path: Path) -> dict[str, tuple[bytes, list[float]]]:
    """Check file integrity and human attestations, NOT Minecraft telemetry."""
    manifest = load_json(manifest_path)
    if not isinstance(manifest, dict) or set(manifest) != {"specSha256", "moduleSha256", "frames"}:
        raise TutorialError("Invalid capture manifest fields")
    if manifest["specSha256"] != digest(spec) or manifest["moduleSha256"] != digest(module):
        raise TutorialError("Capture manifest belongs to different content or settings")
    frames = manifest["frames"]
    expected = {s["id"] for s in spec["steps"]}
    if not isinstance(frames, dict) or set(frames) != expected:
        raise TutorialError("Capture manifest must contain exactly the required frames")
    result = {}
    for sid in sorted(expected):
        receipt = frames[sid]
        fields = {"file", "sha256", "reviewer", "verifiedChecks", "targetBox"}
        if not isinstance(receipt, dict) or set(receipt) != fields:
            raise TutorialError(f"{sid}: invalid capture receipt")
        if not isinstance(receipt["reviewer"], str) or not receipt["reviewer"].strip():
            raise TutorialError(f"{sid}: a human reviewer is required")
        if not isinstance(receipt["verifiedChecks"], list) or any(not isinstance(c, str) for c in receipt["verifiedChecks"]) or sorted(receipt["verifiedChecks"]) != sorted(CHECKS):
            raise TutorialError(f"{sid}: required state/privacy checks are missing")
        name = receipt["file"]
        if not isinstance(name, str) or not re.fullmatch(r"[A-Za-z0-9][A-Za-z0-9_.-]*\.png", name):
            raise TutorialError(f"{sid}: unsafe PNG path")
        file = (manifest_path.parent / name).resolve()
        if not file.is_relative_to(manifest_path.parent.resolve()):
            raise TutorialError(f"{sid}: PNG escapes capture directory")
        raw = file.read_bytes()
        if hashlib.sha256(raw).hexdigest() != receipt["sha256"]:
            raise TutorialError(f"{sid}: PNG hash mismatch")
        if len(raw) < 33 or raw[:8] != b"\x89PNG\r\n\x1a\n" or raw[12:16] != b"IHDR":
            raise TutorialError(f"{sid}: expected PNG image")
        width, height = struct.unpack(">II", raw[16:24])
        if (width, height) != (spec["profile"]["width"], spec["profile"]["height"]):
            raise TutorialError(f"{sid}: image dimensions do not match capture profile")
        box = receipt["targetBox"]
        if not isinstance(box, list) or len(box) != 4 or any(type(x) not in (int, float) for x in box):
            raise TutorialError(f"{sid}: targetBox must be [x, y, width, height]")
        x, y, w, h = box
        if not (0 <= x < 1 and 0 <= y < 1 and 0 < w <= 1 and 0 < h <= 1 and x+w <= 1 and y+h <= 1):
            raise TutorialError(f"{sid}: targetBox falls outside image")
        result[sid] = (raw, box)
    return result


def annotated_svg(raw: bytes, box: list[float], profile: dict, instruction: str) -> bytes:
    width, height = profile["width"], profile["height"]
    x, y, w, h = [v * scale for v, scale in zip(box, [width, height, width, height])]
    image = base64.b64encode(raw).decode("ascii")
    return (f'<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}" viewBox="0 0 {width} {height}" role="img">'
            f'<title>{html.escape(instruction)}</title><image width="{width}" height="{height}" href="data:image/png;base64,{image}"/>'
            f'<rect x="{x:.2f}" y="{y:.2f}" width="{w:.2f}" height="{h:.2f}" fill="none" stroke="#111" stroke-width="7"/>'
            f'<rect x="{x:.2f}" y="{y:.2f}" width="{w:.2f}" height="{h:.2f}" fill="none" stroke="#ffe600" stroke-width="3"/></svg>\n').encode()


def render_bundle(spec: dict, module: dict, captures: dict | None = None) -> dict[str, bytes]:
    """Return deterministic artifacts; never invent an image or completion event."""
    packaged = captures is not None
    banner = "Reviewed capture bundle; not automatically published." if packaged else "DRAFT - screenshots not captured. Authoring review only."
    learner = [f"# {module['shortChildTitle']}", ""] + ([] if packaged else [banner, ""])
    mentor = [f"# {module['title']}", "", banner, "", module["outcome"], "", "## Session flow"]
    mentor.extend(f"- {p['phase']} ({p['minutes']} min): {p['childAction']} Mentor: {' '.join(p['mentorMoves'])}" for p in module["flow"])
    plan = {"id": spec["id"], "specSha256": digest(spec), "moduleSha256": digest(module), "profile": spec["profile"], "studio": spec["studio"], "automaticCaptureImplemented": False, "verificationMethod": "human attestations plus file integrity; not game telemetry", "readinessBlockers": readiness_blockers(spec, module), "frames": []}
    manifest = {"specSha256": digest(spec), "moduleSha256": digest(module), "frames": {}}
    files = {}
    for index, step in enumerate(spec["steps"], 1):
        sid = step["id"]
        learner.extend([f"## {index}. {step['instruction']}", "", f"![{step['instruction']}](assets/{sid}.svg)" if packaged else "[Reference image not captured]", ""])
        mentor.extend([f"\n## {index}. {step['instruction']}", step["mentorNote"], "Hints: " + " / ".join(step["hints"]), "Recovery: " + step["recovery"], "Observe, do not grade: " + step["completion"]])
        commands = studio_commands(spec, step)
        plan["frames"].append({"stepId": sid, "expectedState": step["frame"], "commands": commands, "clientActions": [f"Select hotbar slot {step['frame']['selectedSlot'] + 1} using the verified client binding.", "Apply pinned client settings; close chat, menus, notifications, and tooltips.", "Check the declared camera pose and visible semantic target; wait until the frame is stable.", "Capture a real PNG, resolve the semantic target to a normalized rectangle, and record review checks."], "requiredChecks": list(CHECKS)})
        files[f"studio/{sid}.mcfunction"] = ("# ADULT STUDIO ONLY. Destructive: NEVER run in a learner world.\n# Execute as the studio PLAYER, not an unbound server console.\n" + "\n".join(commands) + "\n").encode()
        manifest["frames"][sid] = {"file": sid + ".png", "sha256": None, "reviewer": None, "verifiedChecks": [], "targetBox": None}
        if packaged:
            raw, box = captures[sid]
            files[f"assets/{sid}.png"] = raw
            files[f"assets/{sid}.svg"] = annotated_svg(raw, box, spec["profile"], step["instruction"])
    learner += ["## Make it yours", "", "Change the shape, move your marker, or add a path toward it.", "", "Show your buddy where to meet you.", "", "What would you like to make here next?", ""]
    mentor += ["\n## Choices"] + [c["prompt"] + " " + " / ".join(c["options"]) for c in module["childChoicePoints"]]
    mentor += ["\n## Recovery and continuation", module["resetPath"], module["soloFallback"], "\n## Safety"] + module["safetyRequirements"]
    mentor += ["\n## Log in under three minutes", "What the learner made; their chosen place/remix; one useful support observation; their next idea. Keep safeguarding notes out of the family summary.", "\n## Guardian summary template", module["parentSummaryTemplate"], "Fill only with observed facts; do not auto-invent pride or independence."]
    files["learner.md"] = ("\n".join(learner) + "\n").encode()
    files["mentor.md"] = ("\n".join(mentor) + "\n").encode()
    files["capture-plan.json"] = json_bytes(plan)
    files["capture-manifest.template.json"] = json_bytes(manifest)
    files["README.txt"] = (banner + "\nNo Minecraft client is launched or controlled by this compiler.\nEach studio shot restores its full declared state independently.\nNo learner creation is compared to fixed studio coordinates.\nMissing or failed checks require resetting that studio shot, not erasing learner work.\n").encode()
    return files


def write_bundle(files: dict[str, bytes], out: Path) -> None:
    out = out.resolve()
    if out.exists():
        raise TutorialError(f"Refusing to overwrite existing output: {out}; choose a new directory")
    out.parent.mkdir(parents=True, exist_ok=True)
    temporary = Path(tempfile.mkdtemp(prefix=".bb-tutorial-", dir=out.parent))
    try:
        for relative, raw in sorted(files.items()):
            path = temporary / relative
            path.parent.mkdir(parents=True, exist_ok=True)
            path.write_bytes(raw)
        os.rename(temporary, out)
    finally:
        if temporary.exists():
            shutil.rmtree(temporary)


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("command", choices=["validate", "build", "package"])
    parser.add_argument("--id", default=None)
    parser.add_argument("--out", type=Path)
    parser.add_argument("--captures", type=Path)
    args = parser.parse_args(argv)
    try:
        selected = []
        seen = set()
        for path in sorted((ROOT / "content/tutorials").rglob("*.json")):
            spec = load_json(path)
            module = validate_recipe(spec)
            if spec["id"] in seen:
                raise TutorialError("Duplicate tutorial id across files")
            seen.add(spec["id"])
            if args.id is None or args.id == spec["id"]:
                selected.append((spec, module))
        if not selected:
            raise TutorialError("No matching tutorial recipes")
        if args.command == "validate":
            print(f"VALID: {len(selected)} recipe(s). Validation is not capture or playtest approval.")
            return 0
        if len(selected) != 1 or args.out is None:
            raise TutorialError("Build/package requires one --id and a fresh --out directory")
        spec, module = selected[0]
        captures = None
        if args.command == "package":
            blockers = readiness_blockers(spec, module)
            if blockers:
                raise TutorialError("Packaging blocked: " + "; ".join(blockers))
            if args.captures is None:
                raise TutorialError("Packaging requires --captures <manifest.json>")
            captures = read_captures(spec, module, args.captures)
        write_bundle(render_bundle(spec, module, captures), args.out)
        print(f"Created {args.command} output: {args.out}")
        return 0
    except (TutorialError, OSError, ValueError) as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        return 1


if __name__ == "__main__":
    raise SystemExit(main())
