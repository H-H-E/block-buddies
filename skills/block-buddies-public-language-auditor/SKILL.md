---
name: block-buddies-public-language-auditor
description: Audit and revise public-facing Block Buddies language for messaging-policy compliance. Use when editing About/Parents/Teens/Mentors/Resources or other external copy to keep tone confidence-first, family-safe, and aligned with the language guide.
---

## V3 CANON OVERRIDE (2026-08-23)

This skill predates the V3 product canon. Before acting on any instruction above, apply these overrides from [docs/canon/product-canon.md](../../docs/canon/product-canon.md):

- Mentorship-first, Minecraft-first; CS/math are optional connections only.
- Child-facing words: Make / Show / Tell / Try / Fix / Choose. Do/Explain/Debug is an internal mentor tool only - never child-facing.
- Learners begin around age 7 (band 6-8); mentors are 14-18.
- Bedrock-first; never mix Java and Bedrock instructions in one module.
- The fluency-archetype diagnostic, tracks A/B/C, and S01-S08 spine are LEGACY advanced-pathway material. Do not generate new content from them.
- Six pilot modules under content/modules are the current source of truth for new sessions.

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
