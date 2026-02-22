---
name: block-buddies-v2-canon-guardian
description: Enforce Pedagogy V2 canonical rules across the Block Buddies repository. Use when any change touches pedagogy, curriculum, runbooks, mentor guidance, intake forms, or public curriculum messaging and consistency against V2 rules must be verified or restored.
---

# Block Buddies V2 Canon Guardian

## Overview

Protect canonical alignment across docs and app surfaces so all changes follow Pedagogy Engine V2.

## Workflow

1. Load canonical sources first:
   - `/Users/hhe/Documents/block-buddies/docs/pedagogy/engine-v2.md`
   - `/Users/hhe/Documents/block-buddies/docs/pedagogy/session-template.md`
   - `/Users/hhe/Documents/block-buddies/docs/pedagogy/mastery-gate-rubric.md`
   - `/Users/hhe/Documents/block-buddies/docs/pedagogy/faq-language-guide.md`
2. Identify changed surfaces and classify each change:
   - rule conflict
   - terminology conflict
   - data-contract drift
   - missing validation
3. Resolve conflicts at source-of-truth level first, then dependent files.
4. Re-run consistency checks:
   - runbook contract
   - pedagogy engine tests
   - curriculum consistency tests
5. Produce a concise compliance report.

## Guardrails

- Keep internal pedagogical shorthand only in mentor/internal docs.
- Keep public-facing pages family-friendly and confidence-first.
- Reject any drift from fixed session loop and mastery pass rules.

## Output Contract

Return:
1. Canonical conflicts found (by file and rule)
2. Fixes applied
3. Remaining risks
4. Validation status
