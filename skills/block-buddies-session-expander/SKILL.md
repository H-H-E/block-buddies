---
name: block-buddies-session-expander
description: Use when turning Block Buddies curriculum outlines, guide sections, rough lesson ideas, or session maps into complete mentor-ready session content and runbook-ready lesson structures.
---

# Block Buddies Session Expander

## Overview

Expand one Block Buddies session at a time into runnable curriculum. The output should be clear enough for a teen mentor to run without inventing the core lesson live.

Core principle: every session needs a guaranteed early win, one protected core quest, track-specific variations, behavior-level mastery gates, concrete fallback moves, evidence capture, and parent-safe summary language.

## When to Use

Use this skill when:
- Converting a session outline from `docs/agent-curriculum-guide.md` into canonical docs.
- Filling missing pieces in S01-S08, S09-S16, or post-S08 advanced labs.
- Creating mentor-facing runbook content from a stage map.
- Rewriting a weak lesson that lacks fallback paths, evidence, or mastery gates.

For Stage 2 Modpack Lab sessions, also use `block-buddies-modpack-lab-designer` before finalizing setup, safety, and tech-support boundaries.

## Required Session Contract

Every expanded session must include:

| Section | Required content |
|---|---|
| Session identity | ID, title, stage, sequence number, estimated minutes |
| Learning goal | One main concept and one plain-language learner outcome |
| Mentor framing | Short script for why this matters |
| Setup | World/profile/materials/files required before learner arrives |
| Early win | 5-10 minute success that proves the session has started safely |
| Core quest | The protected main activity; should work without side quests |
| Track variations | Visualist, Mechanist, Operator variants of the same goal |
| Side quests | Optional stretch/expert branches that never replace the core |
| Mastery gates | Do / Explain / Debug criteria with acceptable evidence |
| Common failure points | Realistic places learners get stuck |
| Fallback moves | Concrete mentor moves with time boundaries |
| Hint ladder | Progressive prompts from question to partial model |
| Exit ticket | End-of-session check in verbal, sign, typed, or mentor-transcribed form |
| Evidence items | Screenshot/text/mentor note/artifact, tied to gates where possible |
| Parent-safe summary | Family-safe, confidence-first summary with no raw behavior labels |
| Student checklist | Short quest-board checklist the learner can understand |

## Expansion Workflow

1. Confirm current repo root and source section.
2. Read the session outline plus nearby stage/arc context.
3. Identify the one main concept. If there are two, split or demote one to side quest.
4. Draft the early win first; it must succeed quickly and visibly.
5. Draft the core quest with 3-6 concrete steps.
6. Draft A/B/C track variations that still satisfy the same mastery gates.
7. Add one intentional debug/test moment; do not rely on accidental failure.
8. Add fallback moves for overwhelm, overbuilding, syntax/file errors, and inability to explain.
9. Add evidence and parent summary.
10. Run quality review with `block-buddies-curriculum-quality-auditor`.

## Mastery Gate Rules

Do / Explain / Debug gates must be observable.

Good:
- Do: learner builds a working input-output system.
- Explain: learner names the input, output, and rule in plain language.
- Debug: learner tests the trigger and identifies where the signal stops.

Weak:
- Do: complete the activity.
- Explain: understand conditionals.
- Debug: debug if needed.

Pass language should allow support-pass where appropriate, but must preserve evidence of reasoning.

## Track Variation Rules

Each track variation must answer:

- What artifact does the learner build or change?
- What is the same underlying concept?
- What is the track-specific debug target?
- What evidence proves the same gate?

Do not write three unrelated lessons under one session ID.

## Fallback and Hint Ladder Pattern

Use a ladder from least to most support:

1. Observation prompt: “What changed?”
2. Choice prompt: “Is the problem before or after the button?”
3. Comparison: “Check the demo against your build.”
4. Partial structure: “Label input, path, output.”
5. Mentor model one step, then learner completes the next step.

Fallback moves should shrink the task without erasing the learning goal.

## Parent-Safe Summary Pattern

Use:
- “Today your child practiced...”
- “They built/tested/fixed...”
- “This supports...”

Avoid:
- clinical labels
- raw frustration/behavior notes
- internal shorthand like hard-cap/fallback unless translated
- technical jargon without parent-friendly meaning

## Output Contract

Return:
1. Source section used.
2. Expanded session content or changed file paths.
3. Gate summary table.
4. Known assumptions or deferred fields.
5. Quality/validation status.

## Common Pitfalls

1. **Lecture disguised as Minecraft.** If the learner mostly listens, rewrite as a mission.
2. **No intentional debug moment.** Debugging must be designed, not accidental.
3. **Side quest steals the session.** Stretch work unlocks only after core success.
4. **Evidence is vague.** “Learner participated” is not mastery evidence.
5. **Parent summary overclaims.** Say what happened and what skill it practiced, not that mastery is permanent.

## Verification Checklist

- [ ] One main concept only.
- [ ] Early win by minute 10.
- [ ] Core quest can run without side quests.
- [ ] Visualist/Mechanist/Operator variations are same-goal.
- [ ] Do / Explain / Debug gates are behavior-level.
- [ ] Fallback moves are concrete and time-bounded.
- [ ] Evidence items are tied to learner behavior.
- [ ] Parent summary is safe and clear.
