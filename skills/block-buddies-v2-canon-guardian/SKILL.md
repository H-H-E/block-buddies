---
name: block-buddies-v2-canon-guardian
description: Enforce Pedagogy V2 canonical rules across the Block Buddies repository. Use when any change touches pedagogy, curriculum, runbooks, mentor guidance, intake forms, or public curriculum messaging and consistency against V2 rules must be verified or restored.
---

## V3 CANON OVERRIDE (2026-08-23)

This skill predates the V3 product canon. Before acting on any instruction above, apply these overrides from [docs/canon/product-canon.md](../../docs/canon/product-canon.md):

- Mentorship-first, Minecraft-first; CS/math are optional connections only.
- Child-facing words: Make / Show / Tell / Try / Fix / Choose. Do/Explain/Debug is an internal mentor tool only - never child-facing.
- Learners begin around age 7 (band 6-8); mentors are 14-18.
- Bedrock-first; never mix Java and Bedrock instructions in one module.
- The fluency-archetype diagnostic, tracks A/B/C, and S01-S08 spine are LEGACY advanced-pathway material. Do not generate new content from them.
- Six pilot modules under content/modules are the current source of truth for new sessions.

# Block Buddies V2 Canon Guardian

## Overview

Protect canonical alignment across docs and app surfaces so all changes follow Pedagogy Engine V2.

## Workflow

1. Load canonical sources first:
   - `docs/pedagogy/engine-v2.md`
   - `docs/pedagogy/session-template.md`
   - `docs/pedagogy/mastery-gate-rubric.md`
   - `docs/pedagogy/faq-language-guide.md`
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
