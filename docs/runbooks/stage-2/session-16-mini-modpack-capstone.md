---
session_id: S16
stage: modpack-lab
track: core
fluency_range: 1-2
archetype: A/B/C
duration_minutes: 60
prerequisites:
  - S08 pass or support-pass
  - approved Modpack Lab profile available
mastery_gate_ids:
  - MG-S16-DO
  - MG-S16-EXPLAIN
  - MG-S16-DEBUG
fallback_path: Restore known-good profile and complete the smallest observable version of the lab
approved_profile: Block Buddies Modpack Lab Pilot Profile
minecraft_version: 1.21.1
loader: Fabric
pack_version: pilot-0.1
approved_mods:
  - 3-6 approved mods from Stage 2 list
  - EMI
  - Mod Menu
  - Fabric API
  - optional Create for systems theme
required_files:
  - capstone pack template
  - player guide template
  - test plan
  - debug log
  - config/resource/data diff
known_good_test: Open the approved profile, load the prepared lab world, confirm title screen/mod list, and complete the session demo action before learners arrive.
known_broken_state: Learner-created known issue log; no surprise broken profile unless mentor prepares one.
reset_instructions: Close Minecraft, duplicate the clean `BlockBuddies-ModpackLab-CLEAN` profile, rename the learner copy, and restore the prepared world/config/resource/data files from the reset folder.
technical_risk_level: medium
device_requirements: 8 GB RAM minimum; mentor pretests load time and keeps vanilla fallback world ready.
do_not_troubleshoot_beyond: 10 minutes on planned issue; 5 minutes on profile launch confusion; immediate reset for unsafe download or unknown file source
---

# Session 16: Mini-Modpack Capstone

## Objective
By end of session, learner can design, test, document, and present a tiny curated modpack experience with a player promise and evidence of one fixed or documented issue.

## Mentor Framing
Today is about product design, testing, documentation, player experience. The mentor names the software idea, keeps the lab bounded, and reminds the learner that one safe change plus one clear test is the win.

## Learner Mission
Design a tiny modded experience for another player and prove it works.

## Stage 2 Pack Contract
| Field | Value |
|---|---|
| Approved profile | Block Buddies Modpack Lab Pilot Profile |
| Minecraft version | 1.21.1 |
| Loader | Fabric |
| Pack version | pilot-0.1 |
| Known-good test | Open the approved profile, load the prepared lab world, confirm title screen/mod list, and complete the session demo action before learners arrive. |
| Known-broken state | Learner-created known issue log; no surprise broken profile unless mentor prepares one. |
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
- Core Quest (25m): learner completes `Tiny Pack Showcase`.
- Side Quest or Fallback (15m): stretch if gates are on track; otherwise restore/narrow.
- Exit Ticket (7m): learner explains evidence and next safe step.
- Intervention limits: Fluency 1 (2m), Fluency 2 (5m); Stage 2 tech-support hard stops apply.

## Early Win
Learner chooses one theme card and writes a one-sentence player promise: “This pack lets you ___.”

## Tier 1 Core Quest
Tiny Pack Showcase:
1. Choose one approved theme and 3-6 approved mods from the prepared list.
2. State the player promise and intended experience.
3. Make one controlled config change and one resource/data-pack change if appropriate.
4. Create a short player guide with launch, goal, and first task.
5. Run the capstone test plan with a second person or mentor.
6. Present the pack, evidence, known issue/fix, and next improvement.

Expected output: Build and present a tiny curated modpack experience.

## Track-Specific Worked Examples (A/B/C)
- `A` Visualist: Emphasize visual identity, guide signs, screenshots, icons, and onboarding clarity. Debug target: player cannot understand the experience.
- `B` Mechanist: Emphasize machine/system goal, flow, balance, and bottleneck fix. Debug target: system does not produce intended output reliably.
- `C` Operator: Emphasize pack structure, manifest, config diff, reset, test plan, and known issue log. Debug target: launch or setup instructions incomplete.

## Tier 2 Stretch Side Quest
- Unlock: Fluency >= 1 and MG-S16-DO on track.
- Outcome: Add a polished guide sign, screenshot gallery, or second test player note.

## Tier 3 Expert Side Quest
- Unlock: Fluency = 2 and MG-S16-DO plus either MG-S16-EXPLAIN or MG-S16-DEBUG pass.
- Outcome: Write a release note with version, changes, known issues, and rollback instruction.

## Branch Minute Budgets
| Path | Hook | Worked Example | Core Quest | Side/Fallback | Exit Ticket | Total |
|---|---:|---:|---:|---:|---:|---:|
| Core + fallback | 5 | 8 | 25 | 15 | 7 | 60 |
| Core + stretch | 5 | 8 | 25 | 15 | 7 | 60 |
| Core + expert | 5 | 8 | 23 | 17 | 7 | 60 |

## Common Failure Points
- Scope gets too large.
- Learner adds mods because they look cool, not because they fit.
- Pack becomes unstable.
- Documentation is skipped.
- Capstone becomes downloading a big modpack and vibing.

## Fallback Path
Trigger when learner is blocked, unsafe download/source appears, profile confusion exceeds 5 minutes, or planned diagnosis exceeds 10 minutes.

Recovery ladder order:
1. Hard cap mods at three.
2. Use theme cards and a prepared pack template.
3. Require working first, fancy later.
4. Accept “known issue documented” as partial debug mastery.
5. Restore the known-good profile and complete the smallest observable version of the lab.

## Hint Ladder
1. What changed?
2. What did you expect?
3. Which file/mod/profile part controls that?
4. Compare against the known-good example.
5. Mentor models one safe step; learner completes the next step.

## Mastery Gates
- Do: Learner assembles or curates a tiny approved modpack experience and completes a test run.
- Explain: Learner explains who the pack is for, why each mod/change belongs, and how the player should experience it.
- Debug: Learner identifies one issue found during testing and fixes it or documents a specific next fix.
- Pass rule: `Do=pass/support-pass` and at least one of `Explain` or `Debug=pass/support-pass`.

## Session Artifact Checklist
- [ ] Known-good profile check completed before learner starts.
- [ ] Learner work product captured: Build and present a tiny curated modpack experience.
- [ ] Screenshot, written note, or mentor transcript captured for Do gate.
- [ ] Plain-language explanation captured for Explain gate.
- [ ] Debug/test evidence captured for Debug gate.
- [ ] Parent-safe summary drafted.

## Evidence Items
- Screenshot or short clip of the working result.
- Learner explanation: `My modpack is for ___. I chose these mods because ___. I changed ___. I tested ___. One thing I fixed or would fix next is ___.`
- Mentor note naming support used and next safe step.
- For file/config/data sessions, before/after diff or copied value table when appropriate.

## Accessibility Notes
- Mentor may read file paths, log clues, or JSON aloud.
- Learner may point, speak, use signs, or use a prepared checklist instead of typing long answers.
- Visual comparison cards and two-choice prompts are allowed.
- Restore profile instead of extending troubleshooting when frustration rises.

## Exit Ticket
My modpack is for ___. I chose these mods because ___. I changed ___. I tested ___. One thing I fixed or would fix next is ___.

## Parent-Safe Summary
Today your child designed a small modded Minecraft experience. They chose a theme, selected approved mods, made controlled changes, tested the result, documented the player experience, and presented one fix or next improvement.

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
