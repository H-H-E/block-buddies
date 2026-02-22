---
name: block-buddies-handoff-compiler
description: Compile standardized handoff artifacts for cross-session and multi-agent continuity in Block Buddies work. Use at the end of substantial changes to capture decisions, changed surfaces, validation status, risks, and next actions for the next agent.
---

# Block Buddies Handoff Compiler

## Overview

Produce a short, decision-complete handoff so the next session can continue without rediscovery.

## Workflow

1. Gather current state:
   - `git status --short`
   - changed file list grouped by surface (docs, UI, forms, tests)
   - last validation results
2. Record decision log:
   - policies adopted
   - assumptions made
   - constraints and exceptions
3. Record unresolved items:
   - blockers
   - risks
   - dependencies
4. Provide ordered next actions with ownership hints.

## Handoff Template

- Objective completed
- Key decisions locked
- Files changed by surface
- Validation status
- Known risks
- Next 3 actions

## Guardrails

- Keep handoff factual and concise.
- Distinguish done vs in-progress vs not started.
- Do not omit failing checks.

## Output Contract

Return one structured handoff note that another agent can execute immediately.
