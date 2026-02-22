---
session_id: S02
track: core
fluency_range: 0-2
archetype: A/B/C
duration_minutes: 45
prerequisites:
  - S01 pass or support-pass
mastery_gate_ids:
  - MG-S02-DO
  - MG-S02-EXPLAIN
  - MG-S02-DEBUG
fallback_path: Run guided backup and restore drill using a prepared sandbox folder
---

# Session 2: Safety, Backups, and Recovery

## Objective
Learner can create a named backup, intentionally break a small config artifact, and restore safely.

## Loop Plan
- Hook (4m): "Before boss fights, pros create a save point."
- Worked Example (6m): mentor demonstrates zip-and-label once.
- Core Quest (20m): learner performs backup workflow.
- Side Quest or Fallback (10m): controlled break and restore.
- Exit Ticket (5m): learner explains rollback logic.

## Early Win
Learner creates `pre-change_YYYY-MM-DD_v1.zip`.

## Tier 1 Core Quest
1. Select target files.
2. Compress and label.
3. Verify archive exists.

## Tier 2 Stretch Side Quest
- Unlock: Fluency >= 1
- Outcome: compare two backups and pick newest valid restore point.

## Tier 3 Expert Side Quest
- Unlock: Fluency = 2 and MG-S02-DO pass
- Outcome: design a backup naming convention for three future sessions.

## Fallback Path
If blocked >= 7 minutes, use prepared folder and complete one backup+restore cycle with mentor prompts.

## Mastery Gates
- Do: creates and restores backup.
- Explain: describes why backup naming matters.
- Debug: identifies corrupted/misnamed backup and selects safe rollback.

## Accessibility Notes
If compression tooling is inaccessible, platform GUI compression is allowed and logged.
