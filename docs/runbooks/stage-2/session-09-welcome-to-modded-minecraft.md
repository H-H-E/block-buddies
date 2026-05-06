---
session_id: S09
stage: modpack-lab
track: core
fluency_range: 1-2
archetype: A/B/C
duration_minutes: 60
prerequisites:
  - S08 pass or support-pass
  - approved Modpack Lab profile available
mastery_gate_ids:
  - MG-S09-DO
  - MG-S09-EXPLAIN
  - MG-S09-DEBUG
fallback_path: Restore known-good profile and complete the smallest observable version of the lab
approved_profile: Block Buddies Modpack Lab Pilot Profile
minecraft_version: 1.21.1
loader: Fabric
pack_version: pilot-0.1
approved_mods:
  - EMI
  - AppleSkin
  - Xaero Minimap
  - Mod Menu
  - Fabric API
required_files:
  - instance manifest
  - approved mod list
  - vanilla comparison world
  - modded lab world
known_good_test: Open the approved profile, load the prepared lab world, confirm title screen/mod list, and complete the session demo action before learners arrive.
known_broken_state: Optional wrong-profile shortcut for mentor demonstration only.
reset_instructions: Close Minecraft, duplicate the clean `BlockBuddies-ModpackLab-CLEAN` profile, rename the learner copy, and restore the prepared world/config/resource/data files from the reset folder.
technical_risk_level: medium
device_requirements: 8 GB RAM minimum; mentor pretests load time and keeps vanilla fallback world ready.
do_not_troubleshoot_beyond: 10 minutes on planned issue; 5 minutes on profile launch confusion; immediate reset for unsafe download or unknown file source
---

# Session 9: Welcome to Modded Minecraft

## Objective
By end of session, learner can launch the prepared Modpack Lab profile, identify three modded changes, and explain mod versus modpack in plain language.

## Mentor Framing
Today is about mods, modpacks, profiles, safe installs. The mentor names the software idea, keeps the lab bounded, and reminds the learner that one safe change plus one clear test is the win.

## Learner Mission
Launch the lab pack, spot what changed from vanilla Minecraft, and match changes to likely mods.

## Stage 2 Pack Contract
| Field | Value |
|---|---|
| Approved profile | Block Buddies Modpack Lab Pilot Profile |
| Minecraft version | 1.21.1 |
| Loader | Fabric |
| Pack version | pilot-0.1 |
| Known-good test | Open the approved profile, load the prepared lab world, confirm title screen/mod list, and complete the session demo action before learners arrive. |
| Known-broken state | Optional wrong-profile shortcut for mentor demonstration only. |
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
- Core Quest (25m): learner completes `Mod Detective`.
- Side Quest or Fallback (15m): stretch if gates are on track; otherwise restore/narrow.
- Exit Ticket (7m): learner explains evidence and next safe step.
- Intervention limits: Fluency 1 (2m), Fluency 2 (5m); Stage 2 tech-support hard stops apply.

## Early Win
Learner opens the prepared profile and finds three changes from vanilla: one visual/interface change, one item/recipe change, and one behavior or world change.

## Tier 1 Core Quest
Mod Detective:
1. Open the approved Block Buddies Modpack Lab profile from the launcher.
2. Compare the prepared vanilla reference world to the modded lab world.
3. Find one visual/interface change, one item or recipe change, and one behavior change.
4. Use the approved mod list to make a best guess about which mod caused each change.
5. Capture a screenshot or note for each discovered change.
6. Explain mod versus modpack using the session sentence frame.

Expected output: Launch a clean curated modpack and identify what changed.

## Track-Specific Worked Examples (A/B/C)
- `A` Visualist: Focus on textures, blocks, UI icons, map markers, and before/after screenshots. Debug target: confusing visual change or mislabeled observation.
- `B` Mechanist: Focus on new machines, moving parts, redstone interactions, and tool behavior. Debug target: separating one block behavior from the whole pack.
- `C` Operator: Focus on launcher profile, mod list, versions, loader, folders, and startup logs. Debug target: wrong profile or version mismatch.

## Tier 2 Stretch Side Quest
- Unlock: Fluency >= 1 and MG-S09-DO on track.
- Outcome: Create a three-card “what changed?” gallery with screenshots and labels.

## Tier 3 Expert Side Quest
- Unlock: Fluency = 2 and MG-S09-DO plus either MG-S09-EXPLAIN or MG-S09-DEBUG pass.
- Outcome: Sort the approved mod list into interface, content, system, and library/dependency categories.

## Branch Minute Budgets
| Path | Hook | Worked Example | Core Quest | Side/Fallback | Exit Ticket | Total |
|---|---:|---:|---:|---:|---:|---:|
| Core + fallback | 5 | 8 | 25 | 15 | 7 | 60 |
| Core + stretch | 5 | 8 | 25 | 15 | 7 | 60 |
| Core + expert | 5 | 8 | 23 | 17 | 7 | 60 |

## Common Failure Points
- Learner wants to install random mods immediately.
- Learner treats the pack as magic rather than a system.
- Learner gets distracted by too many new blocks.
- Learner cannot separate one mod from the whole pack.

## Fallback Path
Trigger when learner is blocked, unsafe download/source appears, profile confusion exceeds 5 minutes, or planned diagnosis exceeds 10 minutes.

Recovery ladder order:
1. Use a tiny comparison card with vanilla on the left and modded on the right.
2. Hide the full mod list and show only 3-5 candidate mods.
3. Ask “What changed?” before “How does it work?”
4. If launch confusion exceeds 5 minutes, mentor resets to the known-good profile.
5. Restore the known-good profile and complete the smallest observable version of the lab.

## Hint Ladder
1. What changed?
2. What did you expect?
3. Which file/mod/profile part controls that?
4. Compare against the known-good example.
5. Mentor models one safe step; learner completes the next step.

## Mastery Gates
- Do: Learner launches the prepared profile and records at least three modded changes.
- Explain: Learner explains that a mod changes one part of Minecraft and a modpack is a controlled group of mods plus settings/files.
- Debug: Learner names one safe thing to check if the pack does not launch, such as profile, version, loader, or mentor reset copy.
- Pass rule: `Do=pass/support-pass` and at least one of `Explain` or `Debug=pass/support-pass`.

## Session Artifact Checklist
- [ ] Known-good profile check completed before learner starts.
- [ ] Learner work product captured: Launch a clean curated modpack and identify what changed.
- [ ] Screenshot, written note, or mentor transcript captured for Do gate.
- [ ] Plain-language explanation captured for Explain gate.
- [ ] Debug/test evidence captured for Debug gate.
- [ ] Parent-safe summary drafted.

## Evidence Items
- Screenshot or short clip of the working result.
- Learner explanation: `What is one modded change you noticed, and what do you think caused it?`
- Mentor note naming support used and next safe step.
- For file/config/data sessions, before/after diff or copied value table when appropriate.

## Accessibility Notes
- Mentor may read file paths, log clues, or JSON aloud.
- Learner may point, speak, use signs, or use a prepared checklist instead of typing long answers.
- Visual comparison cards and two-choice prompts are allowed.
- Restore profile instead of extending troubleshooting when frustration rises.

## Exit Ticket
What is one modded change you noticed, and what do you think caused it?

## Parent-Safe Summary
Today your child began learning how modded Minecraft works in a controlled lab profile. They compared regular Minecraft to a prepared modpack, identified changes, and practiced safe software observation and systems thinking.

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
