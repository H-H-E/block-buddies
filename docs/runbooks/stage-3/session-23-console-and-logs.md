---
session_id: S23
stage: server-pack-bridge
track: core
fluency_range: 1-2
archetype: A/B/C
duration_minutes: 45
prerequisites:
  - Stage 2 Modpack Lab complete or mentor-approved equivalent
  - Prepared local/private server lab folder available
mastery_gate_ids:
  - MG-S23-DO
  - MG-S23-EXPLAIN
  - MG-S23-DEBUG
fallback_path: Use the prepared known-good lab folder and complete one guided evidence step.
prepared_environment:
  - Known-good local/private server profile
  - Matching client pack
  - Reset zip
  - Test world
  - Logs folder
allowed_network_scope: local/private lab only; do not expose services beyond mentor-approved private environment
reset_instructions: Restore the session reset zip, relaunch the known-good profile, and repeat the known-good test.
do_not_troubleshoot_beyond: Stop after 10 minutes of unproductive troubleshooting and switch to the fallback path.
---

# S23 — Console and Logs: The Server Talks Back

## Stage 3 Server-Pack Contract

This session uses a mentor-prepared local/private server lab. No learner-selected downloads, public servers, random server jars, unmanaged multiplayer, or router changes are allowed. Learners inspect and operate prepared artifacts only.

## Safety Boundary

Keep the work inside the local/private lab. Do not publish addresses, invite outside players, expose admin tools, or change household network equipment. If the known-good test fails twice or troubleshooting runs past 10 minutes, restore the reset zip and continue with the fallback path.

## Objective

By end of session, learner can read logs as evidence instead of scary computer confetti.

## Loop Plan

- Hook (3 min): Show the server lab as a real running system with files, logs, and player access.
- Worked Example (7 min): Mentor models one safe inspect-test-explain loop.
- Core Quest (18 min): Use logs to solve a prepared issue: missing file, wrong version, failed plugin load, or denied player.
- Side Quest or Fallback (10 min): Attempt extension only after Do plus Explain are support-pass or better; otherwise use fallback.
- Exit Ticket (5 min): Complete the session sentence starter and record evidence.

## Early Win

Find one normal startup line and one warning line. This must land within the first 7 minutes so the learner feels oriented before touching harder server concepts.

## Tier 1 Core Quest

1. Open the prepared lab folder and name the relevant artifact.
2. Run or inspect the known-good test for this session.
3. Complete the session task with one change or classification at a time.
4. Capture evidence before and after the action.
5. Explain what changed using plain language.

Expected output: a working local/private lab state plus one evidence item that proves the learner understood the server-side concept.

## Track-Specific Worked Examples (A/B/C)

- A Visualist: Draw or color-code the file/service relationship before touching it.
- B Mechanist: Treat the server as a machine: input, process, output, feedback.
- C Operator: Use a checklist: status, files, access, logs, reset.

## Tier 2 Stretch Side Quest

Unlock rule: learner earns Do plus Explain at support-pass or better with at least 10 minutes remaining.

Outcome: learner adds one small documentation note to the lab map or checklist without adding new downloads or new services.

## Tier 3 Expert Side Quest

Unlock rule: learner completes the stretch side quest and independently predicts the likely failure layer.

Outcome: learner creates a tiny before/after comparison that another mentor could use to reproduce the known-good test.

## Branch Minute Budgets

- Core quest: 18 minutes.
- Stretch side quest: 7 minutes.
- Expert side quest: 5 minutes.
- Fallback path: 7 minutes hard cap before returning to exit ticket.

## Common Failure Points

- Learner treats the server as the same thing as a single-player world.
- Learner guesses at fixes before checking status, files, or logs.
- Learner wants to search for downloads instead of using the prepared lab.
- Learner changes multiple things at once and loses the evidence trail.

## Fallback Path

Trigger: the learner is stuck, anxious, or looping for more than 7 minutes, or the known-good state fails twice.

1. Restore the prepared reset zip.
2. Mentor models one evidence step aloud.
3. Learner repeats the same step independently.
4. Record a support-pass if the learner can name expected versus actual with support.

## Hint Ladder

1. What should be true before this server task works?
2. Which folder, file, status line, or access rule is evidence?
3. What is one thing we can check without changing anything?
4. Can we compare the known-good state to the broken state?
5. Mentor models one diagnosis step; learner chooses the next evidence check.

## Mastery Gates

- Do: learner completes the core server-pack action in the prepared lab.
- Explain: learner explains why the action matters for a local/private server.
- Debug: learner resolves or correctly diagnoses the prepared changing files before reading evidence.

Pass rule: Do plus either Explain or Debug earns pass/support-pass; missing Do is not a pass.

## Session Artifact Checklist

- Screenshot or note of known-good state.
- One before/after evidence item.
- One plain-language explanation.
- Reset state confirmed or cleanup note recorded.

## Evidence Items

- Known-good test result.
- Learner explanation: expected, actual, cause, next safe check.
- Mentor note on Do/Explain/Debug gate outcome.

## Accessibility Notes

Use printed folder maps, color-coded cards, zoomed terminal/log text, or mentor narration. Learner can point first and then translate to words. Avoid time pressure after the 7-minute fallback trigger.

## Exit Ticket

“The log helped me find ___.”

## Parent-Safe Summary

Today your child practiced safe private-server reasoning in a prepared Minecraft lab. They used evidence to understand one server-side concept and kept changes bounded with mentor support as needed.

## Student Checklist

- I used the prepared lab files only.
- I checked the known-good state.
- I changed or classified one thing at a time.
- I explained what the evidence showed.
- I recorded what to check next.

## Session Log Fields

- Fluency observed.
- Archetype observed.
- Known-good test outcome.
- 7-minute fallback or 10-minute troubleshooting cap events.
- Do/Explain/Debug gate outcomes.
- Reset or cleanup status.
- Next session start condition.

## Canonical References

- [Agent Curriculum Guide — Stage 3](../../agent-curriculum-guide.md)
- [Pedagogy Engine V2](../../pedagogy/engine-v2.md)
- [Session Runbook Template](../../pedagogy/session-template.md)
- [Mastery Gate Rubric](../../pedagogy/mastery-gate-rubric.md)
