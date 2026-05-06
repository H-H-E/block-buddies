---
session_id: S04
track: core
fluency_range: 0-2
archetype: A/B/C
duration_minutes: 45
prerequisites:
  - S03 pass or support-pass
mastery_gate_ids:
  - MG-S04-DO
  - MG-S04-EXPLAIN
  - MG-S04-DEBUG
fallback_path: Complete one reduced-scope build and one guided debug correction
---

# Session 4: Foundation Build and Debug Drill

## Objective
By end of session, learner can complete a foundational track build and independently resolve one seeded failure mode.

## Loop Plan
- Hook (4m): "Today we build it and break it safely."
- Worked Example (6m): mentor reproduces error+fix flow.
- Core Quest (20m): learner builds foundation artifact.
- Side Quest or Fallback (10m): debug drill or reduced scope.
- Exit Ticket (5m): learner narrates debug steps.
- Intervention limits: Fluency 0 (30s), Fluency 1 (2m), Fluency 2 (5m).

## Early Win
Learner executes first successful action in the build stack in <=10 minutes.

## Tier 1 Core Quest
Build and verify one foundation artifact by archetype:

- `A` Visualist:
  1. Validate `pack.mcmeta` syntax.
  2. Confirm one texture path resolves correctly.
  3. Reload and verify in-game visual output.
  - Expected output: one functional visual asset with valid metadata.
- `B` Mechanist:
  1. Build an AND gate or memory cell with starter constraints.
  2. Test two input/output states.
  3. Record observed state table.
  - Expected output: reliable, repeatable logic behavior.
- `C` Operator:
  1. Validate local host/IP and target port setup.
  2. Apply one connection/config correction.
  3. Confirm successful local connection.
  - Expected output: stable local connection with verified setting.

## Track-Specific Worked Examples (A/B/C)
- `A` Visualist worked example:
  - Seeded fault: broken JSON comma in `pack.mcmeta`.
  - Mentor models error read once; learner applies fix and rechecks load.
  - Evidence: before/after validation note.
- `B` Mechanist worked example:
  - Seeded fault: one misplaced repeater orientation.
  - Mentor models isolate-and-test flow; learner fixes and retests.
  - Evidence: corrected state behavior from two test inputs.
- `C` Operator worked example:
  - Seeded fault: wrong port value.
  - Mentor models config-diff check; learner restores correct port and reconnects.
  - Evidence: successful connection check after correction.

## Tier 2 Stretch Side Quest
- Unlock: Fluency >= 1
- Outcome: optimize one setting (FPS, signal length, or connection clarity).

## Tier 3 Expert Side Quest
- Unlock: Fluency = 2 and MG-S04-DO pass
- Outcome: run binary-search style isolation on a multi-variable failure.

## Branch Minute Budgets
| Path | Hook | Worked Example | Core Quest | Side/Fallback | Exit Ticket | Total |
|---|---:|---:|---:|---:|---:|---:|
| Core + fallback | 4 | 6 | 20 | 10 | 5 | 45 |
| Core + stretch | 4 | 6 | 20 | 10 | 5 | 45 |
| Core + expert | 4 | 6 | 18 | 12 | 5 | 45 |

## Common Failure Points
- Learner changes several parts at once and loses the root cause.
- The foundation build works once but not repeatably.
- Learner can make the artifact work but cannot name the dependency relationship.
- Debugging turns into guessing instead of testing one difference.

## Fallback Path
Trigger when blocked >= 7 total minutes on one build/debug task or when the same failed fix repeats twice.

Use mentor-supplied minimal project and have learner identify one root cause from two options.
Recovery ladder order:
1. Guiding question.
2. Specific hint.
3. Model one step.
4. Fallback mini-win.

Fallback mini-win targets:
- `A`: fix one metadata syntax error and verify pack load.
- `B`: fix one connection gap and show correct output once.
- `C`: fix one config value and confirm reconnect.

## Hint Ladder
1. What is the expected output?
2. Which dependency has to be correct before this can work?
3. What is the first part that still works?
4. Change one thing, then test again.
5. Mentor fixes one comparable example; learner fixes the matching issue in their build.

## Mastery Gates
- Do: foundational build functions.
- Explain: learner can explain one dependency relationship.
- Debug: learner fixes seeded issue without direct fix given.
- Pass rule: `Do=pass/support-pass` and at least one of `Explain` or `Debug=pass/support-pass`.
- If `Debug=fail`: begin S05 with 5-minute debug retrieval.
- If `Do=fail`: repeat S04 foundation theme with reduced scope.

## Session Artifact Checklist
- [ ] One foundation artifact passes verification for selected archetype.
- [ ] One seeded failure and successful fix are documented.
- [ ] One dependency explanation is captured in learner language.
- [ ] One test evidence item is recorded (screenshot, state table, or connection proof).
- [ ] S05 start condition is set (`normal`, `debug retrieval`, or `repeat theme`).

## Evidence Items
- Foundation artifact proof for the selected archetype.
- Dependency explanation in learner language.
- Seeded failure, smallest tested fix, and final verification evidence.

## Exit Ticket
My build depends on __. The bug was __. I fixed it by __.

## Parent-Safe Summary
Today your child built a foundational Minecraft technology artifact and practiced debugging it one step at a time. They learned to connect a working result to the parts it depends on, then repaired a seeded issue with mentor support as needed.

## Student Checklist
- I built my foundation artifact.
- I tested that it works.
- I found one dependency.
- I fixed one seeded bug.
- I recorded proof that the fix worked.

## Accessibility Notes
- Hook: use visual storyboard instead of verbal-only framing when needed.
- Worked Example: provide slowed walkthrough and highlight cursor focus areas.
- Core Quest: allow validated templates/snippets and reduced typing alternatives.
- Side Quest/Fallback: chunk tasks into one-step cards for executive-function support.
- Exit Ticket: accept spoken response, checklist selection, or short written prompt.
- Log all accessibility accommodations with reason and duration impact.

## Session Log Fields
- Archetype path and task variant used.
- Gate outcomes (`Do/Explain/Debug`) and pass-rule decision.
- Debug seed used, fix path taken, and verification evidence.
- Intervention events (fluency triggers, 7-minute hard cap, fallback usage).
- Accessibility accommodations used.
- S05 start condition (`debug retrieval`, `repeat theme`, or `normal`).

## Canonical References
- [Curriculum Matrix](../curriculum.md)
- [Pedagogy Engine V2](../pedagogy/engine-v2.md)
- [Session Runbook Template](../pedagogy/session-template.md)
