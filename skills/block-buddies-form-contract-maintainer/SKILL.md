---
name: block-buddies-form-contract-maintainer
description: Maintain mentor and mentee intake field contracts required for V2 matching and pacing. Use when application steps, required fields, validation rules, profile-code inputs, or onboarding agreements change.
---

## V3 CANON OVERRIDE (2026-08-23)

This skill predates the V3 product canon. Before acting on any instruction above, apply these overrides from [docs/canon/product-canon.md](../../docs/canon/product-canon.md):

- Mentorship-first, Minecraft-first; CS/math are optional connections only.
- Child-facing words: Make / Show / Tell / Try / Fix / Choose. Do/Explain/Debug is an internal mentor tool only - never child-facing.
- Learners begin around age 7 (band 6-8); mentors are 14-18.
- Bedrock-first; never mix Java and Bedrock instructions in one module.
- The fluency-archetype diagnostic, tracks A/B/C, and S01-S08 spine are LEGACY advanced-pathway material. Do not generate new content from them.
- Six pilot modules under content/modules are the current source of truth for new sessions.

# Block Buddies Form Contract Maintainer

## Overview

Keep forms complete enough for deterministic matching, routing, and session planning.

## Workflow

1. Review required data contract:
   - mentee: fluency, archetype preference, goals, availability, accessibility notes
   - mentor: preferred track, supported fluency levels, availability, safety/commitment agreements, mastery logging agreement
2. Update form state and validators in:
   - `src/pages/apply/MenteeApplication.tsx`
   - `src/pages/apply/MentorApplication.tsx`
3. Ensure `canProceed` logic matches required fields.
4. Ensure profile-code preview/derivation remains consistent.
5. Run tests/build.

## Guardrails

- Do not collect unnecessary sensitive data.
- Keep consent language explicit and plain-language.
- Keep step-by-step completion behavior predictable.

## Output Contract

Return:
1. Field contract checklist (met/missing)
2. Validation logic updates
3. Compatibility notes for matching workflows
