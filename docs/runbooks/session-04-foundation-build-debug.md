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
Learner completes a foundational build and resolves one realistic failure mode.

## Loop Plan
- Hook (4m): "Today we build it and break it safely."
- Worked Example (6m): mentor reproduces error+fix flow.
- Core Quest (20m): learner builds foundation artifact.
- Side Quest or Fallback (10m): debug drill or reduced scope.
- Exit Ticket (5m): learner narrates debug steps.

## Early Win
Learner executes first successful action in the build stack in <=10 minutes.

## Tier 1 Core Quest
- A: working `pack.mcmeta` + texture path.
- B: working AND gate or toggle memory cell.
- C: verified local connection using correct IP/port concept.

## Tier 2 Stretch Side Quest
- Unlock: Fluency >= 1
- Outcome: optimize one setting (FPS, signal length, or connection clarity).

## Tier 3 Expert Side Quest
- Unlock: Fluency = 2 and MG-S04-DO pass
- Outcome: run binary-search style isolation on a multi-variable failure.

## Fallback Path
Use mentor-supplied minimal project and have learner identify one root cause from two options.

## Mastery Gates
- Do: foundational build functions.
- Explain: learner can explain one dependency relationship.
- Debug: learner fixes seeded issue without direct fix given.
