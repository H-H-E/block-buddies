# Curriculum Matrix (V2 - LEGACY)

> **LEGACY PATHWAY (superseded by V3):** This document describes the retired V2 fluency-archetype model. It is preserved for advanced-pathway history only. Do not use it for new learner placement; use [Product Canon](./canon/product-canon.md) and the pilot modules instead.

## Purpose

This doc defines how learners move through the same 8-session spine with personalized pacing and nested challenge depth.

## Entry Flow

1. Run [Diagnostic Protocol](./diagnostic-protocol.md)
2. Assign profile code: `fluency-archetype` (for example `1-B`)
3. Assign profile confidence: `high` | `medium` | `low`
4. Start Session 1 at profile-appropriate scaffolding level
5. Progress only by mastery gates

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

### Standard Minute Budget

Unless a runbook specifies a session-specific split, use this default:

| Segment | Minutes |
|---|---:|
| Hook | 3-5 |
| Worked Example | 5-7 |
| Core Quest | 18-20 |
| Side Quest or Fallback | 8-12 |
| Exit Ticket | 5 |

### Recovery Ladder (fixed order)

1. Guiding question
2. Specific hint
3. Model one step
4. Fallback mini-win (required at 7-minute hard cap)

## Side-Quest Disclosure Rules

- Side quests never replace core quest
- Stretch unlock: Fluency >= 1 and prior gate readiness
- Expert unlock: Fluency = 2 and current core quest stability

## Session Artifact Contract (all sessions)

Every session log must include:

- One objective-completion artifact (file/screenshot/state proof)
- Do/Explain/Debug gate outcomes
- Any fallback/hard-cap event
- Any accessibility support used
- Next-session start condition (`normal`, `debug retrieval`, `repeat theme`)

## Runbook Index

Canonical Stage 1 runbooks are in [`docs/runbooks`](./runbooks/session-01-diagnostic-trust-win.md).
Stage 2 Modpack Lab runbooks are in [`docs/runbooks/stage-2`](./runbooks/stage-2/session-09-welcome-to-modded-minecraft.md).
Stage 3 Server-Pack Bridge runbooks are in [`docs/runbooks/stage-3`](./runbooks/stage-3/session-17-client-server-or-both.md).
Mentor quick-reference companion: [Curriculum Session Playbook](./curriculum-session-playbook.md).
Optional extension set: [Post-S08 Advanced Labs](./lessons/post-s08-advanced-labs.md).

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

## Accessibility Baseline

All sessions allow accessibility alternatives when needed and logged:

- GUI-first workflow when terminal/typing is a barrier
- Visual cue cards or sentence starters for explanations
- Reduced motor-load options (prepared snippets/checklists)
- Spoken responses as valid exit-ticket evidence

## Canonical Reference

Canonical policy source: [Pedagogy Engine V2](./pedagogy/engine-v2.md)
