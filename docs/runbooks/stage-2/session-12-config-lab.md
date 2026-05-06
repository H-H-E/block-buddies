---
session_id: S12
stage: modpack-lab
track: core
fluency_range: 1-2
archetype: A/B/C
duration_minutes: 60
prerequisites:
  - S08 pass or support-pass
  - approved Modpack Lab profile available
mastery_gate_ids:
  - MG-S12-DO
  - MG-S12-EXPLAIN
  - MG-S12-DEBUG
fallback_path: Restore known-good profile and complete the smallest observable version of the lab
approved_profile: Block Buddies Modpack Lab Pilot Profile
minecraft_version: 1.21.1
loader: Fabric
pack_version: pilot-0.1
approved_mods:
  - Xaero Minimap
  - AppleSkin
  - configured sample mod
  - Fabric API
required_files:
  - config/block-buddies-safe-values.toml
  - config backup
  - test path checklist
known_good_test: Open the approved profile, load the prepared lab world, confirm title screen/mod list, and complete the session demo action before learners arrive.
known_broken_state: Prepared invalid value copy that mentor can reveal for syntax diagnosis.
reset_instructions: Close Minecraft, duplicate the clean `BlockBuddies-ModpackLab-CLEAN` profile, rename the learner copy, and restore the prepared world/config/resource/data files from the reset folder.
technical_risk_level: medium
device_requirements: 8 GB RAM minimum; mentor pretests load time and keeps vanilla fallback world ready.
do_not_troubleshoot_beyond: 10 minutes on planned issue; 5 minutes on profile launch confusion; immediate reset for unsafe download or unknown file source
---

# Session 12: Config Lab

## Objective
By end of session, learner can change one approved config value, predict its effect, test before/after behavior, and restore or document the result.

## Mentor Framing
Today is about parameters, variables, balance, before/after testing. The mentor names the software idea, keeps the lab bounded, and reminds the learner that one safe change plus one clear test is the win.

## Learner Mission
Change one setting like a scientist: predict, test, observe, and decide whether it improved the experience.

## Stage 2 Pack Contract
| Field | Value |
|---|---|
| Approved profile | Block Buddies Modpack Lab Pilot Profile |
| Minecraft version | 1.21.1 |
| Loader | Fabric |
| Pack version | pilot-0.1 |
| Known-good test | Open the approved profile, load the prepared lab world, confirm title screen/mod list, and complete the session demo action before learners arrive. |
| Known-broken state | Prepared invalid value copy that mentor can reveal for syntax diagnosis. |
| Reset instructions | Close Minecraft, duplicate the clean `BlockBuddies-ModpackLab-CLEAN` profile, rename the learner copy, and restore the prepared world/config/resource/data files from the reset folder. |
| Device requirements | 8 GB RAM minimum; mentor pretests load time and keeps vanilla fallback world ready. |

## Do Not Let This Become Tech Support
- Use the approved profile and prepared files only.
- Do not troubleshoot a random real crash or unknown mod source.
- If profile launch confusion exceeds 5 minutes, mentor restores the known-good copy.
- If the planned issue exceeds 10 minutes, mentor narrows the task or restores the clean profile.
- No learner-selected downloads, public servers, or unmanaged multiplayer.

## Loop Plan
- Hook (5m): connect the lab to the session concept and show the known-good state.
- Worked Example (8m): mentor models the first safe observation/change/test loop.
- Core Quest (25m): learner completes `One-Variable Balance Test`.
- Side Quest or Fallback (15m): stretch if gates are on track; otherwise restore/narrow.
- Exit Ticket (7m): learner explains evidence and next safe step.
- Intervention limits: Fluency 1 (2m), Fluency 2 (5m); Stage 2 tech-support hard stops apply.

## Early Win
Learner views a prepared config card and identifies one setting/value pair such as showMinimap=true or maxWaypoints=3.

## Tier 1 Core Quest
One-Variable Balance Test:
1. Open the prepared config copy or in-game config screen.
2. Record the starting value and prediction.
3. Change exactly one approved value.
4. Relaunch/reload if required by the prepared workflow.
5. Run the known-good test path.
6. Record before/after evidence and decide keep, revert, or adjust later.

Expected output: Change one safe config value and test its effect.

## Track-Specific Worked Examples (A/B/C)
- `A` Visualist: Change a UI clarity or waypoint/display setting. Debug target: visual result does not match prediction.
- `B` Mechanist: Change a safe machine speed, range, or visible feedback setting in a prepared config. Debug target: effect too large or hard to measure.
- `C` Operator: Inspect config file format, key/value syntax, backup, and restore path. Debug target: invalid value or wrong config file.

## Tier 2 Stretch Side Quest
- Unlock: Fluency >= 1 and MG-S12-DO on track.
- Outcome: Try a second value for the same setting and compare results.

## Tier 3 Expert Side Quest
- Unlock: Fluency = 2 and MG-S12-DO plus either MG-S12-EXPLAIN or MG-S12-DEBUG pass.
- Outcome: Design a tiny test table with value, prediction, observed result, and decision.

## Branch Minute Budgets
| Path | Hook | Worked Example | Core Quest | Side/Fallback | Exit Ticket | Total |
|---|---:|---:|---:|---:|---:|---:|
| Core + fallback | 5 | 8 | 25 | 15 | 7 | 60 |
| Core + stretch | 5 | 8 | 25 | 15 | 7 | 60 |
| Core + expert | 5 | 8 | 23 | 17 | 7 | 60 |

## Common Failure Points
- Learner changes multiple values at once.
- File syntax breaks.
- Learner cannot tell what changed.
- Config requires restart and learner assumes it failed.

## Fallback Path
Trigger when learner is blocked, unsafe download/source appears, profile confusion exceeds 5 minutes, or planned diagnosis exceeds 10 minutes.

Recovery ladder order:
1. Use in-game config screen if file editing overwhelms.
2. Use a prepared before/after pair.
3. Revert from clean config backup.
4. Ask “What was the one thing we changed?”
5. Restore the known-good profile and complete the smallest observable version of the lab.

## Hint Ladder
1. What changed?
2. What did you expect?
3. Which file/mod/profile part controls that?
4. Compare against the known-good example.
5. Mentor models one safe step; learner completes the next step.

## Mastery Gates
- Do: Learner changes exactly one approved config value and completes the known-good test.
- Explain: Learner explains config values as parameters/variables that change behavior without editing source code.
- Debug: Learner identifies whether a failed result came from wrong file, invalid value, missing reload, or expectation mismatch.
- Pass rule: `Do=pass/support-pass` and at least one of `Explain` or `Debug=pass/support-pass`.

## Session Artifact Checklist
- [ ] Known-good profile check completed before learner starts.
- [ ] Learner work product captured: Change one safe config value and test its effect.
- [ ] Screenshot, written note, or mentor transcript captured for Do gate.
- [ ] Plain-language explanation captured for Explain gate.
- [ ] Debug/test evidence captured for Debug gate.
- [ ] Parent-safe summary drafted.

## Evidence Items
- Screenshot or short clip of the working result.
- Learner explanation: `What value did you change, what did you predict, and what happened after testing?`
- Mentor note naming support used and next safe step.
- For file/config/data sessions, before/after diff or copied value table when appropriate.

## Accessibility Notes
- Mentor may read file paths, log clues, or JSON aloud.
- Learner may point, speak, use signs, or use a prepared checklist instead of typing long answers.
- Visual comparison cards and two-choice prompts are allowed.
- Restore profile instead of extending troubleshooting when frustration rises.

## Exit Ticket
What value did you change, what did you predict, and what happened after testing?

## Parent-Safe Summary
Today your child practiced safe software experimentation by changing one setting, predicting the result, testing before and after, and deciding whether to keep or revert the change.

## Student Checklist
- I used the approved Modpack Lab profile.
- I made or observed one safe change.
- I tested what happened.
- I explained the result in my own words.
- I recorded one thing I fixed or would check next.

## Session Log Fields
- Profile/pack version used.
- Do/Explain/Debug gate outcomes.
- Evidence captured.
- Fallback or reset used.
- Accessibility support used.
- Next session start condition.

## Canonical References
- [Stage 2 Modpack Lab](../../stage-2-modpack-lab.md)
- [Agent Curriculum Guide](../../agent-curriculum-guide.md)
