# Curriculum Matrix (V2)

## Purpose

This doc defines how learners move through the same 8-session spine with personalized pacing and nested challenge depth.

## Entry Flow

1. Run [Diagnostic Protocol](./diagnostic-protocol.md)
2. Assign profile code: `fluency-archetype` (for example `1-B`)
3. Start Session 1 at profile-appropriate scaffolding level
4. Progress only by mastery gates

## Profile Dimensions

### Fluency (0/1/2)
- `0`: needs heavy navigation scaffolding
- `1`: can execute with guided prompts
- `2`: can execute independently and explain logic

### Archetype (A/B/C)
- `A`: Visualist (aesthetics and rendering)
- `B`: Mechanist (automation and systems)
- `C`: Operator (networking and admin)

## Progression Policy

- Same session index across program model (`S01`..`S08`)
- Different pacing per learner based on gates
- If `Do` fails -> repeat session theme with lower scaffolding
- If `Debug` fails -> begin next session with 5-minute debug retrieval

## Session Loop Contract

Every session must include:
1. Hook
2. Worked Example
3. Tier 1 Core Quest
4. Tier 2/3 Side Quest or fallback path
5. Exit Ticket

## Side-Quest Disclosure Rules

- Side quests never replace core quest
- Stretch unlock: Fluency >= 1 and prior gate readiness
- Expert unlock: Fluency = 2 and current core quest stability

## Runbook Index

Canonical runbooks are in [`docs/runbooks`](./runbooks/session-01-diagnostic-trust-win.md).

## Track Mapping by Session

| Session | A Visualist | B Mechanist | C Operator |
|---|---|---|---|
| S01 | diagnostic + first win | diagnostic + first win | diagnostic + first win |
| S02 | backups + recovery | backups + recovery | backups + recovery |
| S03 | resource-pack starter | logic/circuit starter | server config starter |
| S04 | JSON/path debug | gate/signal debug | connection/config debug |
| S05 | visual extension | automation extension | permissions extension |
| S06 | texture/shader troubleshooting | redstone/create troubleshooting | network/ACL troubleshooting |
| S07 | visual capstone | automation capstone | admin capstone |
| S08 | demo and verification | demo and verification | demo and verification |

## Required Data Recorded Each Session

- Profile code updates
- Do/Explain/Debug outcomes
- Time-cap events
- Fallback usage
- Accessibility shortcut usage
- Next session start condition
