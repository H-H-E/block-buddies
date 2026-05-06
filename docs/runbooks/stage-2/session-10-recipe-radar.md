---
session_id: S10
stage: modpack-lab
track: core
fluency_range: 1-2
archetype: A/B/C
duration_minutes: 60
prerequisites:
  - S08 pass or support-pass
  - approved Modpack Lab profile available
mastery_gate_ids:
  - MG-S10-DO
  - MG-S10-EXPLAIN
  - MG-S10-DEBUG
fallback_path: Restore known-good profile and complete the smallest observable version of the lab
approved_profile: Block Buddies Modpack Lab Pilot Profile
minecraft_version: 1.21.1
loader: Fabric
pack_version: pilot-0.1
approved_mods:
  - EMI
  - JEI-compatible recipe data
  - AppleSkin
  - Fabric API
required_files:
  - prepared scavenger hunt card
  - item frame recipe board
  - approved item list
known_good_test: Open the approved profile, load the prepared lab world, confirm title screen/mod list, and complete the session demo action before learners arrive.
known_broken_state: Prepared target with one misleading search term.
reset_instructions: Close Minecraft, duplicate the clean `BlockBuddies-ModpackLab-CLEAN` profile, rename the learner copy, and restore the prepared world/config/resource/data files from the reset folder.
technical_risk_level: medium
device_requirements: 8 GB RAM minimum; mentor pretests load time and keeps vanilla fallback world ready.
do_not_troubleshoot_beyond: 10 minutes on planned issue; 5 minutes on profile launch confusion; immediate reset for unsafe download or unknown file source
---

# Session 10: Recipe Radar

## Objective
By end of session, learner can use a recipe viewer to search, inspect uses, identify missing ingredients, and plan a crafting path.

## Mentor Framing
Today is about information systems, ui, search, discoverability. The mentor names the software idea, keeps the lab bounded, and reminds the learner that one safe change plus one clear test is the win.

## Learner Mission
Use the recipe viewer like a detective tool to find how items are made and what they are used for.

## Stage 2 Pack Contract
| Field | Value |
|---|---|
| Approved profile | Block Buddies Modpack Lab Pilot Profile |
| Minecraft version | 1.21.1 |
| Loader | Fabric |
| Pack version | pilot-0.1 |
| Known-good test | Open the approved profile, load the prepared lab world, confirm title screen/mod list, and complete the session demo action before learners arrive. |
| Known-broken state | Prepared target with one misleading search term. |
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
- Core Quest (25m): learner completes `Crafting Scavenger Hunt`.
- Side Quest or Fallback (15m): stretch if gates are on track; otherwise restore/narrow.
- Exit Ticket (7m): learner explains evidence and next safe step.
- Intervention limits: Fluency 1 (2m), Fluency 2 (5m); Stage 2 tech-support hard stops apply.

## Early Win
Learner searches one target item in EMI and answers “How do I craft this?” using the displayed recipe.

## Tier 1 Core Quest
Crafting Scavenger Hunt:
1. Open EMI/recipe viewer from the prepared world.
2. Search for the assigned target item.
3. Read the recipe grid and list missing ingredients.
4. Use the uses view to find what the target item can make next.
5. Choose the next missing ingredient and repeat once.
6. Build or label a small recipe chain with item frames/signs.

Expected output: Use a recipe viewer to solve a crafting scavenger hunt.

## Track-Specific Worked Examples (A/B/C)
- `A` Visualist: Represent the recipe chain as item frames, signs, icons, and arrows. Debug target: wrong visual order or missing ingredient label.
- `B` Mechanist: Connect recipes to machine or crafting flow: input, process, output. Debug target: bottleneck or wrong processing step.
- `C` Operator: Use search terms, filters, bookmarks, and mod/source labels. Debug target: search query too broad or wrong item namespace.

## Tier 2 Stretch Side Quest
- Unlock: Fluency >= 1 and MG-S10-DO on track.
- Outcome: Create a two-step recipe dependency chain for another learner to follow.

## Tier 3 Expert Side Quest
- Unlock: Fluency = 2 and MG-S10-DO plus either MG-S10-EXPLAIN or MG-S10-DEBUG pass.
- Outcome: Compare two recipe paths and choose the simpler one with evidence.

## Branch Minute Budgets
| Path | Hook | Worked Example | Core Quest | Side/Fallback | Exit Ticket | Total |
|---|---:|---:|---:|---:|---:|---:|
| Core + fallback | 5 | 8 | 25 | 15 | 7 | 60 |
| Core + stretch | 5 | 8 | 25 | 15 | 7 | 60 |
| Core + expert | 5 | 8 | 23 | 17 | 7 | 60 |

## Common Failure Points
- Learner clicks randomly through UI.
- Search terms are too broad.
- Learner reads item art but not quantities.
- Learner forgets that recipes can have alternate paths.

## Fallback Path
Trigger when learner is blocked, unsafe download/source appears, profile confusion exceeds 5 minutes, or planned diagnosis exceeds 10 minutes.

Recovery ladder order:
1. Give exact search term.
2. Use one target item and one missing ingredient only.
3. Ask “What is the next missing ingredient?”
4. Make the recipe chain physical with item frames.
5. Restore the known-good profile and complete the smallest observable version of the lab.

## Hint Ladder
1. What changed?
2. What did you expect?
3. Which file/mod/profile part controls that?
4. Compare against the known-good example.
5. Mentor models one safe step; learner completes the next step.

## Mastery Gates
- Do: Learner uses the recipe viewer to solve at least one target recipe and one uses lookup.
- Explain: Learner explains search, recipe, uses, and missing ingredient in plain language.
- Debug: Learner corrects one wrong search, wrong ingredient, or mistaken recipe path.
- Pass rule: `Do=pass/support-pass` and at least one of `Explain` or `Debug=pass/support-pass`.

## Session Artifact Checklist
- [ ] Known-good profile check completed before learner starts.
- [ ] Learner work product captured: Use a recipe viewer to solve a crafting scavenger hunt.
- [ ] Screenshot, written note, or mentor transcript captured for Do gate.
- [ ] Plain-language explanation captured for Explain gate.
- [ ] Debug/test evidence captured for Debug gate.
- [ ] Parent-safe summary drafted.

## Evidence Items
- Screenshot or short clip of the working result.
- Learner explanation: `What did you search for, what ingredient was missing, and how did the viewer help?`
- Mentor note naming support used and next safe step.
- For file/config/data sessions, before/after diff or copied value table when appropriate.

## Accessibility Notes
- Mentor may read file paths, log clues, or JSON aloud.
- Learner may point, speak, use signs, or use a prepared checklist instead of typing long answers.
- Visual comparison cards and two-choice prompts are allowed.
- Restore profile instead of extending troubleshooting when frustration rises.

## Exit Ticket
What did you search for, what ingredient was missing, and how did the viewer help?

## Parent-Safe Summary
Today your child used a modded recipe viewer to practice search, filtering, and planning from information. They traced crafting requirements, identified missing pieces, and corrected one mistaken search or recipe path.

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
