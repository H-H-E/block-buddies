---
session_id: S15
stage: modpack-lab
track: core
fluency_range: 1-2
archetype: A/B/C
duration_minutes: 60
prerequisites:
  - S08 pass or support-pass
  - approved Modpack Lab profile available
mastery_gate_ids:
  - MG-S15-DO
  - MG-S15-EXPLAIN
  - MG-S15-DEBUG
fallback_path: Restore known-good profile and complete the smallest observable version of the lab
approved_profile: Block Buddies Modpack Lab Pilot Profile
minecraft_version: 1.21.1
loader: Fabric
pack_version: pilot-0.1
approved_mods:
  - Create or lightweight prepared automation mod
  - EMI
  - Fabric API/loader equivalent
required_files:
  - prepared demo world
  - tiny factory checklist
  - known-good reset schematic
known_good_test: Open the approved profile, load the prepared lab world, confirm title screen/mod list, and complete the session demo action before learners arrive.
known_broken_state: Prepared machine with one reversed belt, missing power source, or blocked output.
reset_instructions: Close Minecraft, duplicate the clean `BlockBuddies-ModpackLab-CLEAN` profile, rename the learner copy, and restore the prepared world/config/resource/data files from the reset folder.
technical_risk_level: medium
device_requirements: 8 GB RAM minimum; mentor pretests load time and keeps vanilla fallback world ready.
do_not_troubleshoot_beyond: 10 minutes on planned issue; 5 minutes on profile launch confusion; immediate reset for unsafe download or unknown file source
---

# Session 15: Contraption or Automation Mod

## Objective
By end of session, learner can build a small modded automation chain, identify input/process/output, and debug one bottleneck or broken connection.

## Mentor Framing
Today is about systems, throughput, bottlenecks, mechanical reasoning. The mentor names the software idea, keeps the lab bounded, and reminds the learner that one safe change plus one clear test is the win.

## Learner Mission
Build a tiny machine, watch items move through it, and find where flow slows or stops.

## Stage 2 Pack Contract
| Field | Value |
|---|---|
| Approved profile | Block Buddies Modpack Lab Pilot Profile |
| Minecraft version | 1.21.1 |
| Loader | Fabric |
| Pack version | pilot-0.1 |
| Known-good test | Open the approved profile, load the prepared lab world, confirm title screen/mod list, and complete the session demo action before learners arrive. |
| Known-broken state | Prepared machine with one reversed belt, missing power source, or blocked output. |
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
- Core Quest (25m): learner completes `Tiny Factory Test`.
- Side Quest or Fallback (15m): stretch if gates are on track; otherwise restore/narrow.
- Exit Ticket (7m): learner explains evidence and next safe step.
- Intervention limits: Fluency 1 (2m), Fluency 2 (5m); Stage 2 tech-support hard stops apply.

## Early Win
Learner places or activates a prepared demo machine and points to input, process, output, and status cue.

## Tier 1 Core Quest
Tiny Factory Test:
1. Inspect the known-good demo machine.
2. Build or complete a small automation chain from prepared parts.
3. Label input, process, output, and status indicator.
4. Run three test items through the system.
5. Identify one bottleneck, jam, missing power, or wrong direction.
6. Fix or document the issue and capture before/after evidence.

Expected output: Build a small modded machine or automation chain.

## Track-Specific Worked Examples (A/B/C)
- `A` Visualist: Use labels, status lights, colored paths, and clear onboarding signs. Debug target: player cannot read what the machine is doing.
- `B` Mechanist: Focus on moving parts, item flow, timing, throughput, and bottlenecks. Debug target: broken connection or slow step.
- `C` Operator: Focus on checklist, reset, test count, status reporting, and known issue log. Debug target: unreliable restart or unclear procedure.

## Tier 2 Stretch Side Quest
- Unlock: Fluency >= 1 and MG-S15-DO on track.
- Outcome: Add one observability feature such as status lamp, counter, sign, or viewing window.

## Tier 3 Expert Side Quest
- Unlock: Fluency = 2 and MG-S15-DO plus either MG-S15-EXPLAIN or MG-S15-DEBUG pass.
- Outcome: Measure simple throughput before and after a fix.

## Branch Minute Budgets
| Path | Hook | Worked Example | Core Quest | Side/Fallback | Exit Ticket | Total |
|---|---:|---:|---:|---:|---:|---:|
| Core + fallback | 5 | 8 | 25 | 15 | 7 | 60 |
| Core + stretch | 5 | 8 | 25 | 15 | 7 | 60 |
| Core + expert | 5 | 8 | 23 | 17 | 7 | 60 |

## Common Failure Points
- Machine is too large.
- Learner copies without understanding flow.
- Moving parts distract from concept.
- Bug is hidden and hard to observe.

## Fallback Path
Trigger when learner is blocked, unsafe download/source appears, profile confusion exceeds 5 minutes, or planned diagnosis exceeds 10 minutes.

Recovery ladder order:
1. Use a half-built machine with one missing piece.
2. Slow the system down so flow is visible.
3. Ask “Where is the item now? Where should it go next?”
4. Accept documented next fix if time expires.
5. Restore the known-good profile and complete the smallest observable version of the lab.

## Hint Ladder
1. What changed?
2. What did you expect?
3. Which file/mod/profile part controls that?
4. Compare against the known-good example.
5. Mentor models one safe step; learner completes the next step.

## Mastery Gates
- Do: Learner completes a small automation chain that moves or transforms items.
- Explain: Learner identifies input, process, output, and at least one bottleneck or status cue.
- Debug: Learner finds where the chain stops/slows and fixes it or documents the next fix.
- Pass rule: `Do=pass/support-pass` and at least one of `Explain` or `Debug=pass/support-pass`.

## Session Artifact Checklist
- [ ] Known-good profile check completed before learner starts.
- [ ] Learner work product captured: Build a small modded machine or automation chain.
- [ ] Screenshot, written note, or mentor transcript captured for Do gate.
- [ ] Plain-language explanation captured for Explain gate.
- [ ] Debug/test evidence captured for Debug gate.
- [ ] Parent-safe summary drafted.

## Evidence Items
- Screenshot or short clip of the working result.
- Learner explanation: `What went into your machine, what happened inside, what came out, and where did you debug it?`
- Mentor note naming support used and next safe step.
- For file/config/data sessions, before/after diff or copied value table when appropriate.

## Accessibility Notes
- Mentor may read file paths, log clues, or JSON aloud.
- Learner may point, speak, use signs, or use a prepared checklist instead of typing long answers.
- Visual comparison cards and two-choice prompts are allowed.
- Restore profile instead of extending troubleshooting when frustration rises.

## Exit Ticket
What went into your machine, what happened inside, what came out, and where did you debug it?

## Parent-Safe Summary
Today your child built a small modded automation system. They traced inputs, processes, outputs, and bottlenecks, then practiced debugging where the system slowed or stopped.

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
