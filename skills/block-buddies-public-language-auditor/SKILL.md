---
name: block-buddies-public-language-auditor
description: Audit and revise public-facing Block Buddies language for messaging-policy compliance. Use when editing About/Parents/Teens/Mentors/Resources or other external copy to keep tone confidence-first, family-safe, and aligned with the language guide.
---

# Block Buddies Public Language Auditor

## Overview

Keep external messaging clear, respectful, and aligned with V2 language policy while preserving technical honesty.

## Workflow

1. Load language policy:
   - `docs/pedagogy/faq-language-guide.md`
2. Audit public pages first:
   - `src/pages/About.tsx`
   - `src/pages/ForParents.tsx`
   - `src/pages/ForTeens.tsx`
   - `src/pages/ForMentors.tsx`
   - `src/pages/Resources.tsx`
3. Flag or replace restricted phrasing.
4. Ensure pedagogical meaning is retained in family-friendly terms.

## Guardrails

- Keep internal shorthand out of public pages.
- Avoid patronizing, adversarial, or manipulative phrasing.
- Preserve factual claims and remove hype.

## Output Contract

Return:
1. Phrases replaced (before -> after)
2. Files updated
3. Any policy edge cases requiring human decision
