---
name: block-buddies-curriculum-data-modeler
description: Use when translating Block Buddies curriculum docs into typed app data, extending curriculum schemas, syncing lesson workspace content, or preventing docs-to-UI semantic drift across Stage 1 and Stage 2.
---

## V3 CANON OVERRIDE (2026-08-23)

This skill predates the V3 product canon. Before acting on any instruction above, apply these overrides from [docs/canon/product-canon.md](../../docs/canon/product-canon.md):

- Mentorship-first, Minecraft-first; CS/math are optional connections only.
- Child-facing words: Make / Show / Tell / Try / Fix / Choose. Do/Explain/Debug is an internal mentor tool only - never child-facing.
- Learners begin around age 7 (band 6-8); mentors are 14-18.
- Bedrock-first; never mix Java and Bedrock instructions in one module.
- The fluency-archetype diagnostic, tracks A/B/C, and S01-S08 spine are LEGACY advanced-pathway material. Do not generate new content from them.
- Six pilot modules under content/modules are the current source of truth for new sessions.

# Block Buddies Curriculum Data Modeler

## Overview

Translate curriculum docs into typed, reusable app content without losing instructional meaning. This skill protects against the common failure where rich lessons become thin string arrays and the UI appears synced while pedagogy drifts.

Core principle: canonical fields beat generated guesses. Derived copy is fallback-only unless intentionally approved.

## When to Use

Use this skill when:
- Updating `src/lib/curriculumModel.ts`, `src/lib/curriculumData.ts`, or `src/lib/lessonWorkspaceData.ts`.
- Adding S09-S16 or Stage 2 Modpack Lab content to app data.
- Converting `docs/agent-curriculum-guide.md` or runbooks into UI-facing fields.
- Changing lesson workspace, resource hub, curriculum pages, or tests that depend on curriculum data.

Pair with `block-buddies-ui-curriculum-sync` for UI surfaces after the data contract is clear.

## Source Precedence

1. Canon docs and runbooks define instructional truth.
2. Typed data models represent canon for the app.
3. UI components render typed data.
4. Procedural generators fill temporary gaps only when explicitly documented.

If a field exists in the guide/runbook, do not regenerate it from a weaker field such as `objective`.

## Required Base Session Fields

Stage-aware sessions should preserve these concepts where relevant:

| Field | Meaning |
|---|---|
| `sessionId` | Stable ID such as S04 or S12 |
| `stage` | Stage 1 Core, Stage 2 Modpack Lab, etc. |
| `sequenceNumber` | Ordering inside total arc |
| `title` / `shortTitle` | Canonical full and compact labels |
| `estimatedMinutes` | Pacing expectation |
| `coreConcept` | Main CS/systems concept |
| `objective` | Mentor-facing learning goal |
| `studentMissionText` | Kid-facing mission language |
| `mentorFraming` | Short script for why this matters |
| `setup` | World/profile/material/files readiness |
| `earlyWin` | First success task |
| `coreQuest` | Structured main activity |
| `trackExamples` | Visualist/Mechanist/Operator variations |
| `sideQuests` | Optional stretch/expert branches |
| `masteryGates` | Do/Explain/Debug criteria |
| `commonFailurePoints` | Expected learner/system failure points |
| `fallbackSteps` | Mentor moves when blocked |
| `hintLadder` | Progressive hints |
| `exitTicket` | End check and accepted formats |
| `evidenceItems` | Screenshot/text/artifact/mentor-note requirements |
| `parentSummaryTemplate` | Family-safe summary copy |
| `studentChecklist` | Learner-facing checklist |
| `mentorNotesSchema` | Structured capture fields |

## Stage 2 Additional Fields

Do not force Modpack Lab into the thin Stage 1 runbook shape. Stage 2 needs fields such as:

- `requiredProfile`
- `minecraftVersion`
- `loader`
- `packVersion`
- `approvedMods`
- `requiredFiles`
- `knownGoodTest`
- `knownBrokenState`
- `resetInstructions`
- `technicalRiskLevel`
- `deviceRequirements`
- `doNotTroubleshootBeyond`
- `packReadinessChecks`
- `designFitPrompt` for capstone/advanced sessions when relevant

## Mapping Rules

Use explicit mapping, not vibes:

| Guide/runbook source | App field |
|---|---|
| Learning goal | `objective` plus `coreConcept` when concept is named |
| Early win | `earlyWin`, not first core quest step |
| Core quest | `coreQuest.title`, `coreQuest.steps`, `coreQuest.successCriteria` |
| Track variations table | `trackExamples.visualist/mechanist/operator` |
| Mastery gates | `masteryGates.do/explain/debug.criteria` |
| Common failure points | `commonFailurePoints` |
| Mentor fallback moves | `fallbackSteps` |
| Hint ladder | `hintLadder` |
| Exit ticket | `exitTicket.prompt` and accepted formats |
| Parent-safe summary | `parentSummaryTemplate` |
| Evidence list | `evidenceItems` with type and label |

## Migration Workflow

1. Confirm repo root and clean/dirty state.
2. Identify exact source doc/runbook section.
3. List target model fields before editing.
4. Add or adjust TypeScript types first.
5. Add one session or one slice of data.
6. Update lesson workspace to prefer canonical fields over generated copy.
7. Add tests for semantic fields, not just array length.
8. Run `npm test`, `npm run check:docs-links`, and `npm run build` when relevant.
9. Document intentionally deferred fields in handoff.

## Test Requirements

Data/UI sync changes should add or update tests that catch semantic drift:

- Canonical session IDs and titles.
- Required fields for every session in a stage.
- Visualist/Mechanist/Operator examples present when expected.
- Do/Explain/Debug criteria present as text, not only IDs.
- Parent summaries do not hardcode learner names.
- Stage 2 sessions include profile/version/loader/reset/tech-support fields.
- Lesson workspace renders canonical mission, fallback, evidence, and parent summary when present.

## Common Pitfalls

1. **Flattening rich lessons into string arrays.** This loses gates, evidence, and setup semantics.
2. **Keeping procedural generators as primary source.** Generated titles/summaries are fallback only.
3. **Hybrid old/new sessions.** Do not mix old objectives with new guide titles and call it synced.
4. **Adding S09-S16 as plain S01-S08-style runbooks.** Stage 2 requires operational metadata.
5. **Tests that only count sessions.** Count tests pass while curriculum quality fails.

## Output Contract

Return:
1. Source sections mapped.
2. Type/model changes.
3. Data fields added or deferred.
4. UI surfaces updated.
5. Tests/validation run.
6. Remaining drift risks.

## Verification Checklist

- [ ] Source doc/runbook section identified.
- [ ] Typed model preserves required curriculum fields.
- [ ] Canonical fields are preferred over generated copy.
- [ ] Stage 2 fields are not squeezed into thin Stage 1 shape.
- [ ] Semantic tests cover the new/changed fields.
- [ ] Deferred fields are explicit.
