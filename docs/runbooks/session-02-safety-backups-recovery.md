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
By end of session, learner can create a named backup, run one controlled failure, and restore to a safe state.

## Loop Plan
- Hook (4m): "Before boss fights, pros create a save point."
- Worked Example (6m): mentor demonstrates zip-and-label once.
- Core Quest (20m): learner performs backup workflow.
- Side Quest or Fallback (10m): controlled break and restore.
- Exit Ticket (5m): learner explains rollback logic.
- Intervention limits: Fluency 0 (30s), Fluency 1 (2m), Fluency 2 (5m).

## Early Win
Learner creates `pre-change_YYYY-MM-DD_v1.zip` by minute 10.

## Tier 1 Core Quest
1. Select target files for backup.
2. Compress and label archive.
3. Verify archive exists and opens.
4. Perform one controlled change.
5. Restore from backup and verify recovery.

Expected output:
- One valid named backup.
- One completed restore with verification note.

## Track-Specific Worked Examples (A/B/C)
- `A` Visualist: backup and restore a resource-pack folder after intentional texture edit.
- `B` Mechanist: backup and restore a logic build world/state after intentional wiring break.
- `C` Operator: backup and restore a config snapshot after intentional invalid value.

## Tier 2 Stretch Side Quest
- Unlock: Fluency >= 1
- Outcome: compare two backups and pick newest valid restore point.

## Tier 3 Expert Side Quest
- Unlock: Fluency = 2 and MG-S02-DO pass
- Outcome: design a backup naming convention for three future sessions.

## Branch Minute Budgets
| Path | Hook | Worked Example | Core Quest | Side/Fallback | Exit Ticket | Total |
|---|---:|---:|---:|---:|---:|---:|
| Core + fallback | 4 | 6 | 20 | 10 | 5 | 45 |
| Core + stretch | 4 | 6 | 20 | 10 | 5 | 45 |
| Core + expert | 4 | 6 | 18 | 12 | 5 | 45 |

## Fallback Path
Trigger when blocked >= 7 total minutes on one backup/restore task.

Recovery ladder order:
1. Guiding question.
2. Specific hint.
3. Model one step.
4. Fallback mini-win.

Fallback mini-win: complete one full backup+restore loop in prepared sandbox folder.

## Mastery Gates
- Do: creates and restores backup.
- Explain: describes why backup naming and verification matter.
- Debug: identifies corrupted or misnamed backup and chooses safe rollback.
- Pass rule: `Do=pass/support-pass` and at least one of `Explain` or `Debug=pass/support-pass`.
- If `Debug=fail`: start S03 with 5-minute debug retrieval.
- If `Do=fail`: repeat S02 theme with reduced complexity.

## Session Artifact Checklist
- [ ] Named backup archive exists.
- [ ] Restore verification evidence captured.
- [ ] Backup naming rationale captured.
- [ ] Debug failure/fix pair logged.
- [ ] S03 start condition set.

## Accessibility Notes
- GUI compression is allowed and logged.
- Reduced typing templates for naming are allowed.
- Spoken exit-ticket response is valid.

## Session Log Fields
- Backup artifact path and verification status.
- Gate outcomes (`Do/Explain/Debug`) and pass result.
- Recovery ladder steps used and hard-cap events.
- Accessibility supports used.
- S03 start condition (`normal`, `debug retrieval`, `repeat theme`).
