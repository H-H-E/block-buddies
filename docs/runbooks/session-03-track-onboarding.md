---
session_id: S03
track: core
fluency_range: 0-2
archetype: A/B/C
duration_minutes: 45
prerequisites:
  - S02 pass or support-pass
mastery_gate_ids:
  - MG-S03-DO
  - MG-S03-EXPLAIN
  - MG-S03-DEBUG
fallback_path: Return to a simplified archetype starter challenge with mentor-guided steps
---

# Session 3: Track Onboarding

## Objective
By end of session, learner can complete one archetype-specific starter build and explain one track-specific cause/effect rule.

## Loop Plan
- Hook (5m): show finished artifact from selected track.
- Worked Example (7m): mentor performs first three steps.
- Core Quest (18m): learner completes starter build.
- Side Quest or Fallback (10m): stretch or simplified recovery.
- Exit Ticket (5m): learner names what they built and why it works.
- Intervention limits: Fluency 0 (30s), Fluency 1 (2m), Fluency 2 (5m).

## Early Win
One visible track artifact appears by minute 10.

## Tier 1 Core Quest
Complete one starter artifact by archetype:

- `A` Visualist:
  1. Open `resourcepacks/<pack>/assets/minecraft/textures`.
  2. Replace one texture file from starter kit.
  3. Reload assets and verify visible change.
  - Expected output: modified texture appears in-game.
- `B` Mechanist:
  1. Build one NOT or OR logic artifact from starter diagram.
  2. Trigger input and observe output state.
  3. Record one rule ("if input X, output Y").
  - Expected output: circuit produces repeatable result.
- `C` Operator:
  1. Open starter `server.properties`.
  2. Change one low-risk key/value.
  3. Restart/verify value application.
  - Expected output: configuration change is confirmed.

## Track-Specific Worked Examples (A/B/C)
- `A` Visualist worked example:
  - Start with a provided texture pair (`before/after`).
  - Mentor models file path once; learner applies second texture independently.
  - Seeded debug: wrong directory depth; learner fixes path.
- `B` Mechanist worked example:
  - Start with pre-marked three-block logic lane.
  - Mentor models one gate placement; learner completes the remaining lane.
  - Seeded debug: one unpowered segment; learner traces and repairs.
- `C` Operator worked example:
  - Start with a starter config and one target behavior.
  - Mentor models editing one safe key; learner edits a second key and verifies.
  - Seeded debug: malformed key spelling; learner restores valid key.

## Tier 2 Stretch Side Quest
- Unlock: Fluency >= 1
- Outcome: add one additional setting/component.

## Tier 3 Expert Side Quest
- Unlock: Fluency = 2 and MG-S03-DO pass
- Outcome: perform same task from memory with no prompt.

## Branch Minute Budgets
| Path | Hook | Worked Example | Core Quest | Side/Fallback | Exit Ticket | Total |
|---|---:|---:|---:|---:|---:|---:|
| Core + fallback | 5 | 7 | 18 | 10 | 5 | 45 |
| Core + stretch | 5 | 7 | 18 | 10 | 5 | 45 |
| Core + expert | 5 | 7 | 16 | 12 | 5 | 45 |

## Common Failure Points
- Learner picks a track because it sounds cool but struggles with the task style.
- Learner copies the starter artifact without noticing the cause/effect rule.
- Track-specific tools introduce typing, path, wiring, or restart friction.
- Learner treats the first failed verification as proof they chose the wrong track.

## Fallback Path
Trigger when blocked >= 7 total minutes on a single task or when two verification attempts fail.

Use a prebuilt starter artifact and complete one low-risk edit with recovery ladder order:
1. Guiding question.
2. Specific hint.
3. Model one step.
4. Fallback mini-win.

Fallback mini-win by archetype:
- `A`: swap one texture file and confirm one visual change.
- `B`: repair one missing redstone connection and verify output.
- `C`: correct one broken key/value and verify server load.

## Hint Ladder
1. Which path are you trying today: Visualist, Mechanist, or Operator?
2. What is the smallest thing that should change when this works?
3. Where does your artifact match the example? Where is it different?
4. Use the starter artifact and change one safe part only.
5. Mentor models the first verification step; learner runs the next test.

## Mastery Gates
- Do: starter build works.
- Explain: learner states one cause/effect rule in track.
- Debug: fixes one seeded mistake (path, wiring, or property value).
- Pass rule: `Do=pass/support-pass` and at least one of `Explain` or `Debug=pass/support-pass`.
- If `Debug=fail`: begin S04 with 5-minute debug retrieval.
- If `Do=fail`: repeat S03 track onboarding with reduced scope.

## Session Artifact Checklist
- [ ] One working starter artifact verified for selected archetype (`A/B/C`).
- [ ] One screenshot or short proof note captured.
- [ ] One cause/effect explanation captured in learner words.
- [ ] One debug seed and fix result logged.
- [ ] Next-session start condition set (`normal`, `debug retrieval`, or `repeat theme`).

## Evidence Items
- Screenshot, state table, or config proof for the chosen starter artifact.
- Learner cause/effect explanation in their own words.
- Seeded mistake and fix result for path, wiring, or property value.

## Exit Ticket
My track today was __. My artifact worked when __. One cause/effect rule is __.

## Parent-Safe Summary
Today your child tried a personalized Block Buddies pathway and completed a small starter project. They practiced noticing cause and effect in a visual, mechanical, or operator-style task, then fixed one guided mistake.

## Student Checklist
- I chose a starter path.
- I completed one starter artifact.
- I tested the artifact.
- I explained one cause/effect rule.
- I fixed one seeded mistake.

## Accessibility Notes
- Hook: show artifact screenshots/video if verbal framing is insufficient.
- Worked Example: provide zoomed or slowed demonstration; replay allowed.
- Core Quest: copy-ready snippets/templates may replace manual typing when needed.
- Side Quest/Fallback: reduce motor load via prepared blocks or prefilled config lines.
- Exit Ticket: spoken, typed, or sentence-starter responses are valid.
- Log every accessibility shortcut and reason.

## Session Log Fields
- Selected archetype path (`A/B/C`) and confidence level.
- Core artifact status (`pass/support-pass/fail`) and evidence.
- Gate outcomes (`Do/Explain/Debug`) + pass-rule result.
- Intervention events (fluency-limit triggers, hard-cap trigger, fallback use).
- Accessibility supports used.
- S04 start condition (`debug retrieval needed` or `normal start`).

## Canonical References
- [Curriculum Matrix](../curriculum.md)
- [Pedagogy Engine V2](../pedagogy/engine-v2.md)
- [Session Runbook Template](../pedagogy/session-template.md)
