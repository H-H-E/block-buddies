---
name: block-buddies-validation-gatekeeper
description: Execute and enforce Block Buddies validation gates before merge or release. Use when changes affect pedagogy docs, runbooks, curriculum UI, forms, or routing logic and acceptance checks must be run with clear pass/fail reporting.
---

# Block Buddies Validation Gatekeeper

## Overview

Run a deterministic validation suite and return actionable release readiness.

## Workflow

1. Run core checks in order:
   - `npm test`
   - `npm run build`
2. If requested or needed, run:
   - `npm run lint`
3. Confirm runbook schema and pedagogy tests pass.
4. Summarize failures by category:
   - environment/setup
   - regression introduced by current diff
   - pre-existing repo baseline issue
5. Return gate decision.

## Guardrails

- Do not hide failures behind partial success.
- Distinguish new failures from existing baseline failures.
- Include exact failing file/command for every blocker.

## Output Contract

Return:
1. Gate status (`PASS` or `BLOCKED`)
2. Command results summary
3. Blocking issues and suggested next fixes
