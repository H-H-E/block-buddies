---
session_id: S14
stage: modpack-lab
track: core
fluency_range: 1-2
archetype: A/B/C
duration_minutes: 60
prerequisites:
  - S08 pass or support-pass
  - approved Modpack Lab profile available
mastery_gate_ids:
  - MG-S14-DO
  - MG-S14-EXPLAIN
  - MG-S14-DEBUG
fallback_path: Restore known-good profile and complete the smallest observable version of the lab
approved_profile: Block Buddies Modpack Lab Pilot Profile
minecraft_version: 1.21.1
loader: Fabric
pack_version: pilot-0.1
approved_mods:
  - Fabric API
  - EMI
  - Mod Menu
  - one prepared missing library example
required_files:
  - known-good manifest card
  - prepared broken profile copy
  - sanitized crash clue
  - reset profile
known_good_test: Open the approved profile, load the prepared lab world, confirm title screen/mod list, and complete the session demo action before learners arrive.
known_broken_state: Missing Fabric API or wrong-loader copy prepared by mentor.
reset_instructions: Close Minecraft, duplicate the clean `BlockBuddies-ModpackLab-CLEAN` profile, rename the learner copy, and restore the prepared world/config/resource/data files from the reset folder.
technical_risk_level: medium
device_requirements: 8 GB RAM minimum; mentor pretests load time and keeps vanilla fallback world ready.
do_not_troubleshoot_beyond: 10 minutes on planned issue; 5 minutes on profile launch confusion; immediate reset for unsafe download or unknown file source
---

# Session 14: Dependency Dungeon

## Objective
By end of session, learner can diagnose one prepared dependency/version problem, explain why compatibility matters, and restore the profile to a working state.

## Mentor Framing
Today is about dependencies, compatibility, versions, crash diagnosis. The mentor names the software idea, keeps the lab bounded, and reminds the learner that one safe change plus one clear test is the win.

## Learner Mission
Solve one planned launch problem by checking version, loader, and dependency clues.

## Stage 2 Pack Contract
| Field | Value |
|---|---|
| Approved profile | Block Buddies Modpack Lab Pilot Profile |
| Minecraft version | 1.21.1 |
| Loader | Fabric |
| Pack version | pilot-0.1 |
| Known-good test | Open the approved profile, load the prepared lab world, confirm title screen/mod list, and complete the session demo action before learners arrive. |
| Known-broken state | Missing Fabric API or wrong-loader copy prepared by mentor. |
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
- Core Quest (25m): learner completes `Prepared Dependency Rescue`.
- Side Quest or Fallback (15m): stretch if gates are on track; otherwise restore/narrow.
- Exit Ticket (7m): learner explains evidence and next safe step.
- Intervention limits: Fluency 1 (2m), Fluency 2 (5m); Stage 2 tech-support hard stops apply.

## Early Win
Learner compares a known-good mod list to a broken-profile card and spots one missing or mismatched item.

## Tier 1 Core Quest
Prepared Dependency Rescue:
1. Open the prepared broken profile notes, not a random real crash.
2. Read the simplified crash clue or launcher message.
3. Compare Minecraft version, loader, and required dependency against the known-good card.
4. Identify the single planned missing or incompatible dependency.
5. Apply the prepared fix or swap to the correct approved file slot.
6. Launch or simulate launch check and record the result.

Expected output: Fix a missing or incompatible dependency in a prepared profile.

## Track-Specific Worked Examples (A/B/C)
- `A` Visualist: Use color-coded dependency cards and before/after profile diagrams. Debug target: misread card or missing visual link.
- `B` Mechanist: Treat dependencies like machine parts: missing library means machine cannot run. Debug target: wrong part in chain.
- `C` Operator: Inspect manifest/mod list, version strings, loader labels, and log excerpt. Debug target: mismatch between mod loader and mod file.

## Tier 2 Stretch Side Quest
- Unlock: Fluency >= 1 and MG-S14-DO on track.
- Outcome: Explain required, optional, incompatible, and library dependency with examples.

## Tier 3 Expert Side Quest
- Unlock: Fluency = 2 and MG-S14-DO plus either MG-S14-EXPLAIN or MG-S14-DEBUG pass.
- Outcome: Create a one-page dependency checklist for S09-S16 mentors.

## Branch Minute Budgets
| Path | Hook | Worked Example | Core Quest | Side/Fallback | Exit Ticket | Total |
|---|---:|---:|---:|---:|---:|---:|
| Core + fallback | 5 | 8 | 25 | 15 | 7 | 60 |
| Core + stretch | 5 | 8 | 25 | 15 | 7 | 60 |
| Core + expert | 5 | 8 | 23 | 17 | 7 | 60 |

## Common Failure Points
- Session becomes real tech support.
- Learner tries to download random files.
- Too many crash lines overwhelm learner.
- Learner changes multiple files at once.

## Fallback Path
Trigger when learner is blocked, unsafe download/source appears, profile confusion exceeds 5 minutes, or planned diagnosis exceeds 10 minutes.

Recovery ladder order:
1. Use printed dependency cards instead of real logs.
2. Reveal two-choice candidate: loader or library?
3. Mentor applies fix after learner identifies cause.
4. Restore known-good profile after 10 minutes.
5. Restore the known-good profile and complete the smallest observable version of the lab.

## Hint Ladder
1. What changed?
2. What did you expect?
3. Which file/mod/profile part controls that?
4. Compare against the known-good example.
5. Mentor models one safe step; learner completes the next step.

## Mastery Gates
- Do: Learner identifies and fixes or documents the planned dependency/version issue.
- Explain: Learner explains that mods depend on correct Minecraft version, loader, and required libraries to work together.
- Debug: Learner uses a clue/log/card comparison to isolate the dependency issue instead of random guessing.
- Pass rule: `Do=pass/support-pass` and at least one of `Explain` or `Debug=pass/support-pass`.

## Session Artifact Checklist
- [ ] Known-good profile check completed before learner starts.
- [ ] Learner work product captured: Fix a missing or incompatible dependency in a prepared profile.
- [ ] Screenshot, written note, or mentor transcript captured for Do gate.
- [ ] Plain-language explanation captured for Explain gate.
- [ ] Debug/test evidence captured for Debug gate.
- [ ] Parent-safe summary drafted.

## Evidence Items
- Screenshot or short clip of the working result.
- Learner explanation: `What was missing or mismatched, and what clue helped you find it?`
- Mentor note naming support used and next safe step.
- For file/config/data sessions, before/after diff or copied value table when appropriate.

## Accessibility Notes
- Mentor may read file paths, log clues, or JSON aloud.
- Learner may point, speak, use signs, or use a prepared checklist instead of typing long answers.
- Visual comparison cards and two-choice prompts are allowed.
- Restore profile instead of extending troubleshooting when frustration rises.

## Exit Ticket
What was missing or mismatched, and what clue helped you find it?

## Parent-Safe Summary
Today your child practiced compatibility reasoning with a prepared modpack problem. They compared versions and dependencies, identified a planned issue, and learned how software parts must match to work safely together.

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
