---
name: block-buddies-curriculum-architect
description: Use when planning, expanding, sequencing, or auditing Block Buddies curriculum stages, session arcs, track variations, post-S08 pathways, or long-running curriculum completion scope.
---

# Block Buddies Curriculum Architect

## Overview

Own the curriculum shape before any single runbook, UI model, or public page changes. This skill keeps Block Buddies curriculum work stage-aware, learner-arc-driven, and bounded enough for repeated agent sessions.

Core principle: Minecraft is the concrete engineering sandbox; the curriculum goal is visible, playable, fixable computer science and systems thinking.

## When to Use

Use this skill when:
- Creating or revising a curriculum stage, session sequence, advanced lab, or post-S08 path.
- Deciding whether a lesson belongs in Stage 1, Stage 2 Modpack Lab, or a later stage.
- Turning a large curriculum idea into a coherent 6-10 session arc.
- Checking whether Visualist / Mechanist / Operator variations still complete the same learning goal.
- Defining what “curriculum complete” means for docs, runbooks, UI data, public pages, operations, tests, and handoff.

Do not use this skill as a replacement for detailed authoring. After architecture decisions, use `block-buddies-session-expander`, `block-buddies-modpack-lab-designer`, `block-buddies-curriculum-data-modeler`, and `block-buddies-curriculum-quality-auditor` as needed.

## Canonical Sources

Always inspect the active git root first:

```bash
git rev-parse --show-toplevel
git status --short
```

Do not rely on hardcoded old paths such as `/Users/hhe/Documents/block-buddies`. Work from the current repository root.

Primary sources:
- `README.md` — public project summary and current key-doc index.
- `docs/agent-curriculum-guide.md` — broad curriculum guide, Stage 1 arc, UI model notes, Stage 2 Modpack Lab.
- `docs/pedagogy/engine-v2.md` — V2 pedagogy canon.
- `docs/pedagogy/source-of-truth-mapping.md` — ownership map for dependent surfaces.
- `docs/curriculum.md` and `docs/curriculum-session-playbook.md` — existing curriculum summaries.
- `docs/runbooks/` — runnable mentor-facing session docs.
- `docs/lessons/post-s08-advanced-labs.md` — optional extension path.
- `src/lib/curriculumModel.ts`, `src/lib/curriculumData.ts`, `src/lib/lessonWorkspaceData.ts` — app-facing curriculum model and derived workspace data.

## Architecture Rules

1. State the work scope before edits:
   - Stage 1 S01-S08 core spine
   - Stage 2 S09-S16 Modpack Lab
   - Post-S08 advanced labs
   - UI/data sync
   - operations/metrics/public copy
   - release sweep

2. Preserve the Block Buddies learning loop:
   - Build something.
   - Explain what it does.
   - Break, inspect, or test something.
   - Fix or document the next fix.
   - Capture evidence of understanding.

3. Keep stages distinct:
   - Stage 1: prepared Minecraft builds, systems, commands/redstone/building, confidence-first debugging.
   - Stage 2: controlled modpack literacy, configs, resource/data packs, dependencies, testing, pack design.
   - Later stages: only introduce full code/mod development after learners can safely handle files, configs, versions, and debugging.

4. Treat tracks as entry points, not identities:
   - Visualist, Mechanist, and Operator variations must complete the same session objective.
   - Track variations may differ in artifact, tool, or metaphor, not in mastery standard.
   - Learners can switch tracks; do not write permanent labels into pass/fail logic.

5. Scope by cognitive load, not coolness:
   - A session should teach one main concept.
   - Add side quests only after the core quest is protected.
   - If a lesson requires mentor improvisation to be safe, it is not ready.

## Stage Arc Checklist

For any stage, define:

| Field | Requirement |
|---|---|
| Stage promise | One sentence: what learners can do by the end |
| Prerequisites | What learners must already handle safely |
| Session map | Ordered session IDs, titles, concept, output |
| Concept ladder | Why each session comes after the previous one |
| Track strategy | How A/B/C variations serve the same goals |
| Capstone | Final artifact, test plan, explanation, debug evidence |
| Safety boundary | What the stage explicitly does not do |
| Product surfaces | Docs, UI data, mentor view, coordinator view, parent view |
| Validation | Tests/checklists required before calling the stage complete |

## Curriculum Completion Definition

For a stage or session packet, “complete” requires evidence across relevant surfaces:

- Canon doc or guide section exists and does not contradict V2.
- Runnable mentor-facing session/runbook exists.
- Do / Explain / Debug gates are behavior-level, not just labels.
- Track variations are parallel and same-goal.
- Fallback moves and hint ladder are concrete.
- Evidence items and parent-safe summary exist.
- UI data model either includes the content or records a deliberate deferral.
- Public copy, if touched, is confidence-first and jargon-safe.
- Validation commands run with fresh output.
- Handoff captures next exact files and unresolved decisions.

## Long-Running Work Protocol

At the start of a curriculum session:
1. Confirm repo root and clean/dirty state.
2. Read the latest handoff or roadmap if present.
3. Declare the current work packet in one sentence.
4. Identify source-of-truth files and dependent surfaces.
5. Choose the smallest useful packet: one session, one stage map, one UI model slice, or one release sweep.

At the end:
1. Run the relevant validation commands.
2. Record exact changed files.
3. Record decisions and rejected alternatives.
4. List next exact files, not vague next steps.
5. Use `block-buddies-handoff-compiler` for continuity.

## Common Pitfalls

1. **Treating completed V2 baseline as completed curriculum.** V2 can be stable while Stage 2, UI data, advanced labs, or pilot feedback remain unfinished.
2. **Expanding by enthusiasm.** “Cool mod” is not a curriculum reason. Every addition needs a concept, evidence item, and fallback.
3. **Blending stages.** Do not let Stage 2 modpack work inherit Stage 1’s thin runbook schema without profile/version/reset fields.
4. **Making tracks into courses.** Tracks are different paths through the same goal.
5. **Skipping dependent surfaces.** A canon change usually implies runbook, UI data, public language, ops, or validation review.

## Verification Checklist

- [ ] Current git root confirmed.
- [ ] Work scope/stage declared.
- [ ] Canon sources inspected.
- [ ] Stage/session concept ladder is explicit.
- [ ] Tracks preserve same learning goal.
- [ ] Completion criteria cover docs, data/UI, validation, and handoff.
- [ ] Out-of-scope work is named.
