---
session_id: S11
stage: modpack-lab
track: core
fluency_range: 1-2
archetype: A/B/C
duration_minutes: 60
prerequisites:
  - S08 pass or support-pass
  - approved Modpack Lab profile available
mastery_gate_ids:
  - MG-S11-DO
  - MG-S11-EXPLAIN
  - MG-S11-DEBUG
fallback_path: Restore known-good profile and complete the smallest observable version of the lab
approved_profile: Block Buddies Modpack Lab Pilot Profile
minecraft_version: 1.21.1
loader: Fabric
pack_version: pilot-0.1
approved_mods:
  - Fabric API
  - Mod Menu
  - EMI optional for item lookup
required_files:
  - resourcepacks/block-buddies-clarity-remix
  - pack.mcmeta
  - assets/blockbuddies/textures or lang files
known_good_test: Open the approved profile, load the prepared lab world, confirm title screen/mod list, and complete the session demo action before learners arrive.
known_broken_state: Prepared duplicate folder level that prevents pack detection.
reset_instructions: Close Minecraft, duplicate the clean `BlockBuddies-ModpackLab-CLEAN` profile, rename the learner copy, and restore the prepared world/config/resource/data files from the reset folder.
technical_risk_level: medium
device_requirements: 8 GB RAM minimum; mentor pretests load time and keeps vanilla fallback world ready.
do_not_troubleshoot_beyond: 10 minutes on planned issue; 5 minutes on profile launch confusion; immediate reset for unsafe download or unknown file source
---

# Session 11: Resource Pack Remix

## Objective
By end of session, learner can apply or edit a small resource pack, test the before/after result, and explain how assets change representation without changing core rules.

## Mentor Framing
Today is about representation, assets, visual design, accessibility. The mentor names the software idea, keeps the lab bounded, and reminds the learner that one safe change plus one clear test is the win.

## Learner Mission
Change how Minecraft communicates an object, then test whether the change is clearer.

## Stage 2 Pack Contract
| Field | Value |
|---|---|
| Approved profile | Block Buddies Modpack Lab Pilot Profile |
| Minecraft version | 1.21.1 |
| Loader | Fabric |
| Pack version | pilot-0.1 |
| Known-good test | Open the approved profile, load the prepared lab world, confirm title screen/mod list, and complete the session demo action before learners arrive. |
| Known-broken state | Prepared duplicate folder level that prevents pack detection. |
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
- Core Quest (25m): learner completes `Clarity Remix`.
- Side Quest or Fallback (15m): stretch if gates are on track; otherwise restore/narrow.
- Exit Ticket (7m): learner explains evidence and next safe step.
- Intervention limits: Fluency 1 (2m), Fluency 2 (5m); Stage 2 tech-support hard stops apply.

## Early Win
Learner toggles the prepared high-contrast label pack and identifies one visual difference in the world.

## Tier 1 Core Quest
Clarity Remix:
1. Open the prepared resource-pack folder or resource-pack menu.
2. Apply the approved Clarity Remix pack.
3. Find the target block/item/sign that changed.
4. Make one safe edit from a prepared choice: color label, icon, texture swap, or language text.
5. Reload/apply the pack and compare before/after.
6. Capture screenshot evidence and explain whether the change made the object clearer.

Expected output: Modify or apply a small visual/sound/text resource pack.

## Track-Specific Worked Examples (A/B/C)
- `A` Visualist: Change color, texture, icon, label, or signage for clarity. Debug target: asset not visible after reload.
- `B` Mechanist: Use labels/status colors to make a machine state easier to read. Debug target: visual cue does not match system behavior.
- `C` Operator: Inspect pack folder structure, namespace, pack.mcmeta, and file path. Debug target: wrong folder or namespace path.

## Tier 2 Stretch Side Quest
- Unlock: Fluency >= 1 and MG-S11-DO on track.
- Outcome: Add a second visual cue for accessibility, such as high contrast or clearer label.

## Tier 3 Expert Side Quest
- Unlock: Fluency = 2 and MG-S11-DO plus either MG-S11-EXPLAIN or MG-S11-DEBUG pass.
- Outcome: Document the asset path and create a mini style guide for future packs.

## Branch Minute Budgets
| Path | Hook | Worked Example | Core Quest | Side/Fallback | Exit Ticket | Total |
|---|---:|---:|---:|---:|---:|---:|
| Core + fallback | 5 | 8 | 25 | 15 | 7 | 60 |
| Core + stretch | 5 | 8 | 25 | 15 | 7 | 60 |
| Core + expert | 5 | 8 | 23 | 17 | 7 | 60 |

## Common Failure Points
- Learner edits the wrong file or folder.
- Pack is not reloaded.
- Change is decorative but not clearer.
- Learner thinks texture changes also change rules.

## Fallback Path
Trigger when learner is blocked, unsafe download/source appears, profile confusion exceeds 5 minutes, or planned diagnosis exceeds 10 minutes.

Recovery ladder order:
1. Use a prebuilt pack with two toggles.
2. Give a choice between two prepared assets.
3. Mentor models the reload once.
4. Compare before/after screenshots side by side.
5. Restore the known-good profile and complete the smallest observable version of the lab.

## Hint Ladder
1. What changed?
2. What did you expect?
3. Which file/mod/profile part controls that?
4. Compare against the known-good example.
5. Mentor models one safe step; learner completes the next step.

## Mastery Gates
- Do: Learner applies or edits one approved resource-pack element and verifies the change in game.
- Explain: Learner explains that a resource pack changes representation such as texture, sound, text, or model, not the underlying rule by itself.
- Debug: Learner fixes or identifies one reload/path/filename issue that prevented the change from appearing.
- Pass rule: `Do=pass/support-pass` and at least one of `Explain` or `Debug=pass/support-pass`.

## Session Artifact Checklist
- [ ] Known-good profile check completed before learner starts.
- [ ] Learner work product captured: Modify or apply a small visual/sound/text resource pack.
- [ ] Screenshot, written note, or mentor transcript captured for Do gate.
- [ ] Plain-language explanation captured for Explain gate.
- [ ] Debug/test evidence captured for Debug gate.
- [ ] Parent-safe summary drafted.

## Evidence Items
- Screenshot or short clip of the working result.
- Learner explanation: `What did your resource pack change, and how did you test that the change appeared?`
- Mentor note naming support used and next safe step.
- For file/config/data sessions, before/after diff or copied value table when appropriate.

## Accessibility Notes
- Mentor may read file paths, log clues, or JSON aloud.
- Learner may point, speak, use signs, or use a prepared checklist instead of typing long answers.
- Visual comparison cards and two-choice prompts are allowed.
- Restore profile instead of extending troubleshooting when frustration rises.

## Exit Ticket
What did your resource pack change, and how did you test that the change appeared?

## Parent-Safe Summary
Today your child explored how software can change the way information is represented. They applied or edited a small resource pack, compared before and after, and practiced testing whether a visual change was clear.

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
