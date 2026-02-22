---
name: block-buddies-workflow-orchestrator
description: Coordinate Block Buddies specialized skills into deterministic multi-step workflows across sessions. Use when tasks span pedagogy policy, runbooks, routing, UI sync, forms, validation, ops docs, and handoff continuity and require reliable sequencing.
---

# Block Buddies Workflow Orchestrator

## Overview

Select and sequence Block Buddies skills so multi-surface work stays consistent and repeatable.

## Available Specialized Skills

- `block-buddies-v2-canon-guardian`
- `block-buddies-runbook-author`
- `block-buddies-diagnostic-routing`
- `block-buddies-ui-curriculum-sync`
- `block-buddies-public-language-auditor`
- `block-buddies-form-contract-maintainer`
- `block-buddies-validation-gatekeeper`
- `block-buddies-ops-alignment`
- `block-buddies-handoff-compiler`

## Workflow Selection

### A. Pedagogy Rewrite Flow

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

1. Canon guardian
2. UI curriculum sync
3. Public language auditor
4. Validation gatekeeper
5. Handoff compiler

### C. Intake/Matching Contract Flow

1. Diagnostic routing
2. Form contract maintainer
3. Canon guardian
4. Validation gatekeeper
5. Handoff compiler

### D. Release Readiness Flow

1. Canon guardian
2. Ops alignment
3. Validation gatekeeper
4. Handoff compiler

## Execution Rules

- Always state selected flow before edits.
- Run canon checks before large rewrites.
- Run validation before handoff.
- Do not skip handoff for cross-session work.
- If gatekeeper is blocked by environment or auth, report blocker and fallback path.

## Output Contract

Return:
1. Selected flow and why
2. Skill-by-skill execution summary
3. Validation status
4. Handoff note or explicit blocker
