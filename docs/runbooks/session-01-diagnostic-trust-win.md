---
session_id: S01
track: core
fluency_range: 0-2
archetype: A/B/C
duration_minutes: 45
prerequisites:
  - intake submitted
mastery_gate_ids:
  - MG-S01-DO
  - MG-S01-EXPLAIN
  - MG-S01-DEBUG
fallback_path: Switch to mentor-led setup scavenger with one guaranteed mini-win and confirmed profile capture
---

# Session 1: Diagnostic, Trust, and First Win

## Objective
By end of session, learner can complete baseline diagnostic tasks, record a profile code (`fluency-archetype`) with evidence, and produce one visible success artifact.

## Loop Plan
- Hook (5m): "We are going to unlock a hidden pro setting."
- Worked Example (5m): mentor demonstrates one tiny safe file navigation action.
- Core Quest (20m): run diagnostic tasks and produce profile code.
- Side Quest or Fallback (10m): short archetype mini-challenge.
- Exit Ticket (5m): learner explains their profile and next-session goal.
- Intervention limits: Fluency 0 (30s), Fluency 1 (2m), Fluency 2 (5m) before the next recovery-ladder step.

## Early Win
Learner creates `BlockBuddies/S01_first_win.txt` and confirms the file opens correctly by minute 10.

## Tier 1 Core Quest
1. Screenshot scavenger hunt.
2. Locate Minecraft folder with support as needed.
3. Archetype motivation prompt.
4. Record profile code `fluency-archetype` and confidence (`high`, `medium`, or `low`).
5. Capture one behavior evidence note for fluency and one for archetype.

Expected output:
- `S01_first_win.txt` in the learner folder.
- Profile code entry with confidence and evidence notes.

## Track-Specific Worked Examples (A/B/C)
- `A` Visualist example:
  - Mentor demonstrates opening `resourcepacks` and locating one texture path.
  - Learner repeats the same path and explains what visual change the file controls.
  - Debug seed: wrong folder name (`texture` vs `textures`); learner corrects it.
- `B` Mechanist example:
  - Mentor demonstrates a one-switch one-lamp circuit to show cause/effect.
  - Learner recreates the micro-circuit and narrates input/output behavior.
  - Debug seed: removed redstone dust segment; learner restores continuity.
- `C` Operator example:
  - Mentor demonstrates reading one safe `server.properties` key/value.
  - Learner edits one low-risk setting and verifies load behavior.
  - Debug seed: typo in key name; learner spots and fixes invalid key.

## Tier 2 Stretch Side Quest
- Unlock: Fluency >= 1
- Outcome: rename file with semantic version format (`S01_v1`).

## Tier 3 Expert Side Quest
- Unlock: Fluency = 2 and MG-S01-DO pass
- Outcome: use terminal/command prompt to reach folder path.

## Branch Minute Budgets
| Path | Hook | Worked Example | Core Quest | Side/Fallback | Exit Ticket | Total |
|---|---:|---:|---:|---:|---:|---:|
| Core + fallback | 5 | 5 | 20 | 10 | 5 | 45 |
| Core + stretch | 5 | 5 | 20 | 10 | 5 | 45 |
| Core + expert | 5 | 5 | 18 | 12 | 5 | 45 |

## Common Failure Points
- Learner treats the diagnostic like a test instead of a setup mission.
- Learner cannot find the Minecraft folder without wandering through unrelated folders.
- Learner gives self-report confidence that does not match observed behavior.
- Learner gets stuck on typing or file naming instead of the underlying navigation idea.

## Fallback Path
Trigger when blocked >= 7 total minutes on one task or after two repeated wrong edits.

Recovery ladder order (fixed):
1. Guiding question.
2. Specific hint.
3. Mentor models one step.
4. Fallback mini-win: learner completes one guaranteed path step independently.

Fallback mini-win target:
- Learner navigates to the correct folder once and records profile code before exit ticket.

## Hint Ladder
1. What are we trying to find or create right now?
2. Which folder or filename gives us the strongest clue?
3. Compare this path to the mentor example. What is different?
4. Use the prepared path card; read one folder at a time.
5. Mentor models one safe navigation step; learner repeats the next step.

## Mastery Gates
- Do: completes file task and profile capture with evidence.
- Explain: states the difference between file name and extension and why naming clarity helps recovery.
- Debug: corrects one intentional filename typo and re-verifies file access.
- Pass rule: `Do=pass/support-pass` and at least one of `Explain` or `Debug=pass/support-pass`.
- If `Debug=fail`: next session starts with a 5-minute debug retrieval.
- If `Do=fail`: repeat S01 theme with lower complexity scaffolding.

## Session Artifact Checklist
- [ ] `S01_first_win.txt` exists in learner `BlockBuddies` folder.
- [ ] Profile code (`fluency-archetype`) recorded.
- [ ] Confidence rating (`high/medium/low`) recorded.
- [ ] One evidence note for fluency and one for archetype recorded.
- [ ] Exit ticket statement captured ("my profile is __ because __").

## Evidence Items
- Screenshot or file proof that `S01_first_win.txt` exists and opens.
- Profile code (`fluency-archetype`) plus confidence rating.
- Mentor note with one observed fluency behavior and one observed archetype behavior.

## Exit Ticket
My profile is __ because __. One thing I can do next time is __.

## Parent-Safe Summary
Today your child completed a confidence-first diagnostic session. They created a visible first-win artifact, practiced safe file navigation, and helped the mentor identify the right level of support and project pathway for future sessions.

## Student Checklist
- I made my first-win file.
- I found or followed the correct folder path.
- I shared what kind of Minecraft task feels most interesting to me.
- I fixed or checked one small mistake.
- I know what my next session starts with.

## Accessibility Notes
- Hook: learner may use visual cue cards instead of verbal response.
- Worked Example: mentor may zoom UI and provide high-contrast cursor trail.
- Core Quest: GUI navigation, OS search, and copy-path shortcuts are allowed when needed.
- Side Quest/Fallback: reduce typing load with prepared snippet cards when motor or language support is needed.
- Exit Ticket: spoken response, sentence starter, or short typed response are all valid.
- Any accessibility shortcut must be logged with reason.

## Session Log Fields
- Fluency observed (`0/1/2`) + evidence.
- Archetype observed (`A/B/C`) + evidence.
- Gate outcomes (`Do/Explain/Debug`) and session pass status.
- Intervention timeline (fluency-limit triggers, hard-cap trigger, fallback used).
- Accessibility shortcuts used + reason.
- Next session start condition (`debug retrieval required`, `repeat theme required`).

Mentor-side profile confirmation checklist:
- [ ] Captured profile code matches observed task behavior (not only self-report).
- [ ] Confidence level is set and justified in one sentence.
- [ ] Any mismatch signal is flagged for coordinator review.

Reassessment trigger flags for S02 planning:
- Profile confidence is `low`.
- Learner behavior conflicts with chosen archetype in two or more tasks.
- `Do` passes but both `Explain` and `Debug` need heavy prompting.

## Canonical References
- [Curriculum Matrix](../curriculum.md)
- [Pedagogy Engine V2](../pedagogy/engine-v2.md)
- [Session Runbook Template](../pedagogy/session-template.md)
