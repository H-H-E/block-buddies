---
name: block-buddies-form-contract-maintainer
description: Maintain mentor and mentee intake field contracts required for V2 matching and pacing. Use when application steps, required fields, validation rules, profile-code inputs, or onboarding agreements change.
---

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
