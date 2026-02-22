---
session_id: S06
track: core
fluency_range: 0-2
archetype: A/B/C
duration_minutes: 45
prerequisites:
  - S05 pass or support-pass
mastery_gate_ids:
  - MG-S06-DO
  - MG-S06-EXPLAIN
  - MG-S06-DEBUG
fallback_path: Run a curated two-option diagnosis puzzle when open troubleshooting stalls
---

# Session 6: Troubleshooting Studio

## Objective
Learner applies the troubleshooting algorithm to diagnose and fix a realistic issue.

## Loop Plan
- Hook (3m): "The system broke. You are on-call."
- Worked Example (7m): mentor models logs -> keyword -> isolate -> test.
- Core Quest (20m): learner runs one full diagnosis loop.
- Side Quest or Fallback (10m): additional fault or curated puzzle.
- Exit Ticket (5m): learner summarizes root cause and fix.

## Early Win
Learner finds one meaningful clue from logs/error text by minute 10.

## Tier 1 Core Quest
Use track-aligned error atlas item and resolve it.

## Tier 2 Stretch Side Quest
- Unlock: Fluency >= 1
- Outcome: compare two plausible causes and eliminate one with evidence.

## Tier 3 Expert Side Quest
- Unlock: Fluency = 2 and MG-S06-DO pass
- Outcome: perform binary search on multi-change failure set.

## Fallback Path
Use curated scenario with only two candidate causes and guided elimination.

## Mastery Gates
- Do: issue resolved to working state.
- Explain: learner describes why chosen fix works.
- Debug: learner can reproduce and re-fix the same failure quickly.
