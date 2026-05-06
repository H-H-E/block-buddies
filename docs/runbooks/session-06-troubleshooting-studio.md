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
By end of session, learner can run one full diagnosis loop and justify the chosen fix.

## Loop Plan
- Hook (3m): "The system broke. You are on-call."
- Worked Example (7m): mentor models logs -> keyword -> isolate -> test.
- Core Quest (20m): learner runs one full diagnosis loop.
- Side Quest or Fallback (10m): additional fault or curated puzzle.
- Exit Ticket (5m): learner summarizes root cause and fix.
- Intervention limits: Fluency 0 (30s), Fluency 1 (2m), Fluency 2 (5m).

## Early Win
Learner finds one meaningful clue from logs or error text by minute 10.

## Tier 1 Core Quest
Use a track-aligned error atlas item and resolve it.

Expected output: issue resolved plus root-cause statement.

## Track-Specific Worked Examples (A/B/C)
- `A` Visualist: diagnose missing/invalid texture path and restore proper load.
- `B` Mechanist: diagnose logic failure from missing power or wrong orientation.
- `C` Operator: diagnose configuration/network mismatch and restore connectivity.

## Tier 2 Stretch Side Quest
- Unlock: Fluency >= 1
- Outcome: compare two plausible causes and eliminate one with evidence.

## Tier 3 Expert Side Quest
- Unlock: Fluency = 2 and MG-S06-DO pass
- Outcome: perform binary search on multi-change failure set.

## Branch Minute Budgets
| Path | Hook | Worked Example | Core Quest | Side/Fallback | Exit Ticket | Total |
|---|---:|---:|---:|---:|---:|---:|
| Core + fallback | 3 | 7 | 20 | 10 | 5 | 45 |
| Core + stretch | 3 | 7 | 20 | 10 | 5 | 45 |
| Core + expert | 3 | 7 | 18 | 12 | 5 | 45 |

## Common Failure Points
- Learner jumps to fixes before describing the symptom.
- Learner treats the first clue as the confirmed root cause.
- Open troubleshooting creates too many possible causes.
- Learner cannot reproduce the failure after fixing it once.

## Fallback Path
Trigger when blocked >= 7 total minutes in open troubleshooting.

Recovery ladder order:
1. Guiding question.
2. Specific hint.
3. Model one step.
4. Fallback mini-win.

Fallback mini-win: curated scenario with only two candidate causes and guided elimination.

## Hint Ladder
1. What should happen? What actually happened?
2. Which clue is evidence and which is a guess?
3. Can we eliminate one false cause?
4. Can you reproduce the problem before fixing it again?
5. Mentor models one diagnosis step; learner chooses the next evidence check.

## Mastery Gates
- Do: issue resolved to working state.
- Explain: learner describes why chosen fix works.
- Debug: learner reproduces and re-fixes the same failure.
- Pass rule: `Do=pass/support-pass` and at least one of `Explain` or `Debug=pass/support-pass`.
- If `Debug=fail`: start S07 with debug retrieval.
- If `Do=fail`: repeat S06 with constrained fault set.

## Session Artifact Checklist
- [ ] Fault scenario and root cause logged.
- [ ] Fix and verification evidence captured.
- [ ] One eliminated false-cause note recorded.
- [ ] Repro/re-fix check recorded.
- [ ] S07 start condition set.

## Evidence Items
- Fault scenario, root-cause statement, and fix proof.
- One eliminated false-cause note.
- Reproduce-and-re-fix evidence or mentor transcript.

## Exit Ticket
Expected: __. Actual: __. Cause: __. Fix: __.

## Parent-Safe Summary
Today your child practiced structured troubleshooting. They compared expected behavior to actual behavior, used evidence to identify a root cause, and explained why their fix worked.

## Student Checklist
- I described the problem before fixing it.
- I checked evidence.
- I eliminated one false cause.
- I fixed the issue.
- I explained why the fix worked.

## Accessibility Notes
- Read-aloud error text and simplified clue cards are allowed.
- Reduced-option diagnosis cards are allowed.
- Alternate verbal explanation accepted for exit ticket.

## Session Log Fields
- Fault type, root cause, and fix evidence.
- Gate outcomes and pass result.
- Intervention and fallback events.
- Accessibility supports used.
- S07 start condition.

## Canonical References
- [Curriculum Matrix](../curriculum.md)
- [Pedagogy Engine V2](../pedagogy/engine-v2.md)
- [Session Runbook Template](../pedagogy/session-template.md)
