
import glob
import json
import sys
from pathlib import Path

from jsonschema import Draft202012Validator

ROOT = Path(__file__).resolve().parents[1]
schema_path = ROOT / "content" / "schemas" / "module.schema.json"
module_pattern = str(ROOT / "content" / "modules" / "**" / "*.json")

try:
    with schema_path.open(encoding="utf-8") as schema_file:
        schema = json.load(schema_file)
    Draft202012Validator.check_schema(schema)
except (OSError, json.JSONDecodeError, ValueError) as exc:
    print(f"schema: unable to load valid module schema: {exc}")
    sys.exit(1)

v = Draft202012Validator(schema)

ids = set()
errors = []
mods = []
for f in sorted(glob.glob(module_pattern, recursive=True)):
    relative = Path(f).relative_to(ROOT).as_posix()
    try:
        with open(f, encoding="utf-8") as module_file:
            m = json.load(module_file)
    except (OSError, json.JSONDecodeError) as exc:
        errors.append(f"{relative}: unable to parse JSON: {exc}")
        continue

    module_errors = sorted(v.iter_errors(m), key=lambda error: str(error.json_path))
    for e in module_errors:
        json_path = getattr(e, "json_path", "$")
        errors.append(f"{relative}: {json_path} {e.message}")

    if not isinstance(m, dict):
        continue
    module_id = m.get("id")
    if not isinstance(module_id, str):
        continue
    if module_id in ids:
        errors.append(f"{relative}: duplicate module id '{module_id}'")
    ids.add(module_id)
    mods.append((relative, m))

if not mods:
    errors.append("content/modules: no canonical module JSON files found")

# cross-refs: prerequisites and nextModules resolve; media refs resolve or demo
for f, m in mods:
    prerequisites = m.get("prerequisites", [])
    next_modules = m.get("nextModules", [])
    media_references = m.get("mediaReferences", [])
    for p in prerequisites if isinstance(prerequisites, list) else []:
        if p not in ids:
            errors.append(f"{f}: unresolved prerequisite '{p}'")
    for n in next_modules if isinstance(next_modules, list) else []:
        if n not in ids:
            errors.append(f"{f}: unresolved nextModule '{n}'")
    for mr in media_references if isinstance(media_references, list) else []:
        if isinstance(mr, str) and (mr.startswith("demo:") or mr.startswith("video:")):
            continue
        if isinstance(mr, str):
            errors.append(f"{f}: media ref must start with video: or demo: -> {mr}")

# Cycle check on the prerequisite graph. A three-state DFS reports each cycle
# once while still allowing valid shared prerequisites.
modules_by_id = {m["id"]: m for _, m in mods}
visit_state = {}
reported_cycles = set()


def visit(mid, stack):
    state = visit_state.get(mid, 0)
    if state == 2:
        return
    if state == 1:
        cycle_start = stack.index(mid)
        cycle = tuple(stack[cycle_start:] + [mid])
        if cycle not in reported_cycles:
            errors.append(f"cycle: {' -> '.join(cycle)}")
            reported_cycles.add(cycle)
        return

    visit_state[mid] = 1
    module = modules_by_id.get(mid)
    if module:
        prerequisites = module.get("prerequisites", [])
        for prerequisite in prerequisites if isinstance(prerequisites, list) else []:
            if prerequisite in modules_by_id:
                visit(prerequisite, stack + [mid])
    visit_state[mid] = 2


for module_id in sorted(ids):
    visit(module_id, [])

print(f"modules={len(mods)} ids={sorted(ids)}")
if errors:
    print("ERRORS:")
    [print(' ' + e) for e in errors]
    sys.exit(1)
print("ALL MODULES VALID");
