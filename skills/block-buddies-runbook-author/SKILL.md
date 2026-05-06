---
name: block-buddies-runbook-author
description: Use when creating or updating Block Buddies session runbooks, stage-aware lesson docs, side quests, fallback logic, mastery gates, mentor-facing session flow, or Stage 2 Modpack Lab runbook fields.
---

# Block Buddies Runbook Author

## Overview

Author runbooks that are structurally valid, pedagogically aligned, and operationally usable by mentors. This skill supports S01-S08 core sessions and stage-aware extensions such as S09-S16 Modpack Lab.

Confirm the active repo root before reading or editing:

```bash
git rev-parse --show-toplevel
git status --short
```

Use relative paths from the repository root.

## Workflow

1. Load current canon:
   - `docs/pedagogy/session-template.md`
   - `docs/pedagogy/engine-v2.md`
   - `docs/agent-curriculum-guide.md` when expanding guide content
2. Identify the stage:
   - Stage 1 Core / S01-S08
   - Stage 2 Modpack Lab / S09-S16
   - Post-S08 advanced lab
3. Use `block-buddies-session-expander` for rough outline-to-session expansion.
4. For Stage 2, use `block-buddies-modpack-lab-designer` before finalizing setup/safety sections.
5. Ensure required base frontmatter or equivalent metadata exists:
   - `session_id`, `stage`, `track`, `duration_minutes`, `prerequisites`, `mastery_gate_ids`, `fallback_path`
6. Ensure required base sections exist:
   - Objective
   - Loop Plan
   - Early Win
   - Tier 1 Core Quest
   - Tier 2 Stretch Side Quest
   - Tier 3 Expert Side Quest
   - Fallback Path
   - Mastery Gates
   - Evidence
   - Parent-Safe Summary
7. Encode unlock logic using fluency and gate IDs where relevant.
8. Keep side quests optional and nested; never replace the core quest.
9. Validate with runbook schema tests and quality audit.

## Stage 1 Runbook Contract

Stage 1 runbooks must preserve:

- Early win by minute 10.
- 45-minute default unless the project changes duration globally.
- Do / Explain / Debug mastery evidence.
- Controlled friction with intervention limits and fallback hard caps.
- Track-specific A/B/C worked examples where relevant.
- Accessibility alternatives.
- Artifact checklist.

## Stage 2 Modpack Lab Additions

Stage 2 runbooks must also include:

| Field/Section | Requirement |
|---|---|
| Required profile | Approved launcher/profile name |
| Minecraft version | Locked version |
| Loader | Fabric/Forge/NeoForge/Quilt/etc. |
| Pack version | Named pack build/date |
| Approved mods | Explicit allowed list |
| Required files | Config/resource/data/world files |
| Known-good test | Mentor pre-session verification |
| Known-broken state | Only if lesson includes planned diagnosis |
| Reset instructions | Restore clean profile quickly |
| Device constraints | RAM/performance notes if relevant |
| Tech-support boundary | “Do Not Let This Become Tech Support” box |
| Pack evidence | Before/after, config diff, screenshot, guide, debug log |

Use Stage 2 only as a controlled lab. Do not let runbooks require learner-downloaded random mods, unmanaged public servers, or full Java mod development by default.

## Guardrails

- Guarantee early win by minute 10.
- Enforce intervention limits and hard caps.
- Keep core quest protected from side-quest sprawl.
- Make mentor setup explicit enough to run without improvising core structure.
- Translate technical ideas into learner-safe and parent-safe language.
- If duration differs from 45 minutes, state why and keep it consistent for that stage.

## Output Contract

Return:
1. Updated runbook files.
2. Stage/session metadata summary.
3. Mastery gate summary table.
4. Stage 2 pack metadata summary if relevant.
5. Quality audit and validation result.
