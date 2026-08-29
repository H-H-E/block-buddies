---
name: block-buddies-validation-gatekeeper
description: Execute and enforce Block Buddies validation gates before merge or release. Use when changes affect pedagogy docs, runbooks, curriculum UI, forms, or routing logic and acceptance checks must be run with clear pass/fail reporting.
---

## V3 CANON OVERRIDE (2026-08-23)

This skill predates the V3 product canon. Before acting on any instruction above, apply these overrides from [docs/canon/product-canon.md](../../docs/canon/product-canon.md):

- Mentorship-first, Minecraft-first; CS/math are optional connections only.
- Child-facing words: Make / Show / Tell / Try / Fix / Choose. Do/Explain/Debug is an internal mentor tool only - never child-facing.
- Learners begin around age 7 (band 6-8); mentors are 14-18.
- Bedrock-first; never mix Java and Bedrock instructions in one module.
- The fluency-archetype diagnostic, tracks A/B/C, and S01-S08 spine are LEGACY advanced-pathway material. Do not generate new content from them.
- Six pilot modules under content/modules are the current source of truth for new sessions.

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
