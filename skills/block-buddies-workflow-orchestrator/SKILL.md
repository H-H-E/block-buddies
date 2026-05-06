---
name: block-buddies-workflow-orchestrator
description: Use when coordinating Block Buddies specialized skills into deterministic multi-step workflows across curriculum stages, runbooks, routing, UI/data sync, forms, validation, operations, and long-running handoff continuity.
---

# Block Buddies Workflow Orchestrator

## Overview

Select and sequence Block Buddies skills so multi-surface work stays consistent and repeatable across short tasks and long-running curriculum completion work.

Always confirm the active repository root before edits:

```bash
git rev-parse --show-toplevel
git status --short
```

Use relative paths from the repo root. Do not rely on old hardcoded checkout paths.

## Available Specialized Skills

Core V2 maintenance:
- `block-buddies-v2-canon-guardian`
- `block-buddies-runbook-author`
- `block-buddies-diagnostic-routing`
- `block-buddies-ui-curriculum-sync`
- `block-buddies-public-language-auditor`
- `block-buddies-form-contract-maintainer`
- `block-buddies-validation-gatekeeper`
- `block-buddies-ops-alignment`
- `block-buddies-handoff-compiler`

Long-running curriculum production:
- `block-buddies-curriculum-architect`
- `block-buddies-session-expander`
- `block-buddies-modpack-lab-designer`
- `block-buddies-curriculum-data-modeler`
- `block-buddies-curriculum-quality-auditor`

## Workflow Selection

### A. Pedagogy Rewrite Flow

Use when canon, runbooks, routing, UI, forms, operations, and validation all need a coordinated V2 pass.

1. Canon guardian
2. Runbook author
3. Diagnostic routing
4. UI curriculum sync
5. Public language auditor
6. Form contract maintainer
7. Ops alignment
8. Validation gatekeeper
9. Handoff compiler

### B. Curriculum/UI Drift Fix Flow

Use when docs and app surfaces disagree.

1. Canon guardian
2. Curriculum data modeler
3. UI curriculum sync
4. Public language auditor if public/family-facing copy changed
5. Validation gatekeeper
6. Handoff compiler

### C. Intake/Matching Contract Flow

Use when profile coding, applications, matching, or reassessment logic changes.

1. Diagnostic routing
2. Form contract maintainer
3. Canon guardian
4. Validation gatekeeper
5. Handoff compiler

### D. Release Readiness Flow

Use before release, milestone closure, or pilot handoff.

1. Canon guardian
2. Curriculum quality auditor
3. Ops alignment
4. Validation gatekeeper
5. Handoff compiler

### E. Long-Form Curriculum Expansion Flow

Use for multi-session curriculum buildout where the goal is to keep working until a stage or curriculum area is complete.

1. Curriculum architect — declare scope, stage, source-of-truth files, completion criteria.
2. Session expander — draft or refine one small packet, usually one session or one stage map.
3. Curriculum quality auditor — catch weak gates, missing evidence, missing fallbacks, and parent-copy issues.
4. Curriculum data modeler — translate canonical content into typed app data when needed.
5. UI curriculum sync — update lesson workspace/public/internal surfaces when needed.
6. Public language auditor — review public or parent-facing copy.
7. Validation gatekeeper — run command-level checks.
8. Handoff compiler — record exact continuation state.

### F. Stage 2 Modpack Lab Flow

Use for S09-S16, modpack literacy, configs, resource/data packs, dependencies, or modded Minecraft product surfaces.

1. Curriculum architect — confirm Stage 2 scope and concept ladder.
2. Modpack lab designer — define profile, loader, pack, known-good/broken states, reset, safety boundary.
3. Session expander — produce runnable lesson structure.
4. Curriculum quality auditor — verify Stage 2 safety and pedagogy.
5. Curriculum data modeler — represent Stage 2 fields without flattening.
6. UI curriculum sync — update lesson/coordinator views if needed.
7. Validation gatekeeper — run tests/build/contracts.
8. Handoff compiler — record pack/session status and next exact files.

## Long-Running Execution Rules

- Always state the selected flow before edits.
- Work in packets small enough to validate: one session, one schema slice, one UI sync, or one release sweep.
- Do not start P1/P2 adjacent work until the current P0 curriculum packet has a handoff and validation status.
- For multi-week work, maintain continuity through handoff: active objective, exact next files, decisions, deferred fields, validation freshness, and out-of-scope items.
- If GitHub Project/issue state matters, check it or explicitly report that it was not checked.
- Never treat generated UI copy as canonical curriculum without data-model review.
- Never treat Stage 2 as plain S01-S08 runbook data; use Modpack Lab fields.

## Output Contract

Return:
1. Selected flow and why.
2. Current repo root and working-tree status.
3. Skill-by-skill execution summary.
4. Source-of-truth and dependent surfaces touched.
5. Validation status with exact commands.
6. Handoff note or explicit blocker.
