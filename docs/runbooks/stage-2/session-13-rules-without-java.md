---
session_id: S13
stage: modpack-lab
track: core
fluency_range: 1-2
archetype: A/B/C
duration_minutes: 60
prerequisites:
  - S08 pass or support-pass
  - approved Modpack Lab profile available
mastery_gate_ids:
  - MG-S13-DO
  - MG-S13-EXPLAIN
  - MG-S13-DEBUG
fallback_path: Restore known-good profile and complete the smallest observable version of the lab
approved_profile: Block Buddies Modpack Lab Pilot Profile
minecraft_version: 1.21.1
loader: Fabric
pack_version: pilot-0.1
approved_mods:
  - Fabric API
  - optional recipe viewer
  - vanilla datapack support
required_files:
  - datapacks/block-buddies-rules/data/blockbuddies/recipes
  - known-good JSON template
  - reload checklist
known_good_test: Open the approved profile, load the prepared lab world, confirm title screen/mod list, and complete the session demo action before learners arrive.
known_broken_state: Prepared JSON with missing comma or wrong namespace for planned diagnosis.
reset_instructions: Close Minecraft, duplicate the clean `BlockBuddies-ModpackLab-CLEAN` profile, rename the learner copy, and restore the prepared world/config/resource/data files from the reset folder.
technical_risk_level: medium
device_requirements: 8 GB RAM minimum; mentor pretests load time and keeps vanilla fallback world ready.
do_not_troubleshoot_beyond: 10 minutes on planned issue; 5 minutes on profile launch confusion; immediate reset for unsafe download or unknown file source
---

# Session 13: Rules Without Java

## Objective
By end of session, learner can inspect a simple data-driven rule, make one approved JSON/template change, reload, and test the new behavior.

## Mentor Framing
Today is about data-driven rules, recipes, loot, tags, simple functions. The mentor names the software idea, keeps the lab bounded, and reminds the learner that one safe change plus one clear test is the win.

## Learner Mission
Change one game rule using data, not Java, and prove the rule changed.

## Stage 2 Pack Contract
| Field | Value |
|---|---|
| Approved profile | Block Buddies Modpack Lab Pilot Profile |
| Minecraft version | 1.21.1 |
| Loader | Fabric |
| Pack version | pilot-0.1 |
| Known-good test | Open the approved profile, load the prepared lab world, confirm title screen/mod list, and complete the session demo action before learners arrive. |
| Known-broken state | Prepared JSON with missing comma or wrong namespace for planned diagnosis. |
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
- Core Quest (25m): learner completes `Recipe or Reward Rule Change`.
- Side Quest or Fallback (15m): stretch if gates are on track; otherwise restore/narrow.
- Exit Ticket (7m): learner explains evidence and next safe step.
- Intervention limits: Fluency 1 (2m), Fluency 2 (5m); Stage 2 tech-support hard stops apply.

## Early Win
Learner opens a prepared recipe card and identifies input, output, and count.

## Tier 1 Core Quest
Recipe or Reward Rule Change:
1. Open the prepared datapack or recipe template.
2. Identify input, output, namespace, and file name.
3. Choose one approved edit: output count, ingredient swap, reward item, or tag membership.
4. Apply the edit using the template.
5. Reload the world or datapack through the prepared workflow.
6. Test the rule and record success or error evidence.

Expected output: Add or modify a recipe/reward/challenge rule.

## Track-Specific Worked Examples (A/B/C)
- `A` Visualist: Change display names, advancement text, or resource/data pairing for a clear reward. Debug target: visible text or icon does not match rule.
- `B` Mechanist: Modify a recipe or loot rule that feeds a machine/build loop. Debug target: wrong input/output relationship.
- `C` Operator: Inspect namespace, JSON shape, reload command, and error output. Debug target: syntax, path, or namespace issue.

## Tier 2 Stretch Side Quest
- Unlock: Fluency >= 1 and MG-S13-DO on track.
- Outcome: Create a second related rule that keeps the same theme.

## Tier 3 Expert Side Quest
- Unlock: Fluency = 2 and MG-S13-DO plus either MG-S13-EXPLAIN or MG-S13-DEBUG pass.
- Outcome: Write a mini changelog entry explaining the design reason and test result.

## Branch Minute Budgets
| Path | Hook | Worked Example | Core Quest | Side/Fallback | Exit Ticket | Total |
|---|---:|---:|---:|---:|---:|---:|
| Core + fallback | 5 | 8 | 25 | 15 | 7 | 60 |
| Core + stretch | 5 | 8 | 25 | 15 | 7 | 60 |
| Core + expert | 5 | 8 | 23 | 17 | 7 | 60 |

## Common Failure Points
- JSON syntax typo.
- Wrong namespace or folder path.
- Rule changes too much at once.
- Learner expects Java-level behavior from data-only changes.

## Fallback Path
Trigger when learner is blocked, unsafe download/source appears, profile confusion exceeds 5 minutes, or planned diagnosis exceeds 10 minutes.

Recovery ladder order:
1. Use fill-in-the-blank JSON template.
2. Change only output count.
3. Mentor runs reload while learner observes evidence.
4. Compare with known-good file.
5. Restore the known-good profile and complete the smallest observable version of the lab.

## Hint Ladder
1. What changed?
2. What did you expect?
3. Which file/mod/profile part controls that?
4. Compare against the known-good example.
5. Mentor models one safe step; learner completes the next step.

## Mastery Gates
- Do: Learner changes one approved data-driven rule and tests it in the prepared world.
- Explain: Learner explains that structured data can change rules without writing Java code.
- Debug: Learner uses error output, file path, or before/after test to identify why a rule did not load or behave as expected.
- Pass rule: `Do=pass/support-pass` and at least one of `Explain` or `Debug=pass/support-pass`.

## Session Artifact Checklist
- [ ] Known-good profile check completed before learner starts.
- [ ] Learner work product captured: Add or modify a recipe/reward/challenge rule.
- [ ] Screenshot, written note, or mentor transcript captured for Do gate.
- [ ] Plain-language explanation captured for Explain gate.
- [ ] Debug/test evidence captured for Debug gate.
- [ ] Parent-safe summary drafted.

## Evidence Items
- Screenshot or short clip of the working result.
- Learner explanation: `What rule changed, what file controlled it, and how did you test it?`
- Mentor note naming support used and next safe step.
- For file/config/data sessions, before/after diff or copied value table when appropriate.

## Accessibility Notes
- Mentor may read file paths, log clues, or JSON aloud.
- Learner may point, speak, use signs, or use a prepared checklist instead of typing long answers.
- Visual comparison cards and two-choice prompts are allowed.
- Restore profile instead of extending troubleshooting when frustration rises.

## Exit Ticket
What rule changed, what file controlled it, and how did you test it?

## Parent-Safe Summary
Today your child learned that some game rules are controlled by structured data files. They made one safe rule change, reloaded the world, tested the behavior, and used evidence to debug if it did not work.

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
