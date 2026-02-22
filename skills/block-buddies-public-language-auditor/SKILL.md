---
name: block-buddies-public-language-auditor
description: Audit and revise public-facing Block Buddies language for messaging-policy compliance. Use when editing About/Parents/Teens/Mentors/Resources or other external copy to keep tone confidence-first, family-safe, and aligned with the language guide.
---

# Block Buddies Public Language Auditor

## Overview

Keep external messaging clear, respectful, and aligned with V2 language policy while preserving technical honesty.

## Workflow

1. Load language policy:
   - `/Users/hhe/Documents/block-buddies/docs/pedagogy/faq-language-guide.md`
2. Audit public pages first:
   - `/Users/hhe/Documents/block-buddies/src/pages/About.tsx`
   - `/Users/hhe/Documents/block-buddies/src/pages/ForParents.tsx`
   - `/Users/hhe/Documents/block-buddies/src/pages/ForTeens.tsx`
   - `/Users/hhe/Documents/block-buddies/src/pages/ForMentors.tsx`
   - `/Users/hhe/Documents/block-buddies/src/pages/Resources.tsx`
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
