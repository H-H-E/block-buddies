---
name: block-buddies-diagnostic-routing
description: Maintain consistency of fluency-archetype diagnostic routing across docs, engine logic, curriculum data, and intake forms. Use when changing profile-code rules, matching logic, track mapping, or learner/mentor routing fields.
---

## V3 CANON OVERRIDE (2026-08-23)

This skill predates the V3 product canon. Before acting on any instruction above, apply these overrides from [docs/canon/product-canon.md](../../docs/canon/product-canon.md):

- Mentorship-first, Minecraft-first; CS/math are optional connections only.
- Child-facing words: Make / Show / Tell / Try / Fix / Choose. Do/Explain/Debug is an internal mentor tool only - never child-facing.
- Learners begin around age 7 (band 6-8); mentors are 14-18.
- Bedrock-first; never mix Java and Bedrock instructions in one module.
- The fluency-archetype diagnostic, tracks A/B/C, and S01-S08 spine are LEGACY advanced-pathway material. Do not generate new content from them.
- Six pilot modules under content/modules are the current source of truth for new sessions.

# Block Buddies Diagnostic Routing

## Overview

Keep profile-code behavior (`fluency-archetype`) decision-complete and consistent across all routing surfaces.

## Workflow

1. Load routing references:
   - `docs/diagnostic-protocol.md`
   - `src/lib/pedagogyEngine.ts`
   - `src/lib/curriculumModel.ts`
   - `src/pages/apply/MenteeApplication.tsx`
   - `src/pages/apply/MentorApplication.tsx`
2. Verify shared vocabulary for:
   - fluency levels (`0/1/2`)
   - archetypes (`A/B/C`)
   - tracks (`visualist/mechanist/operator`)
3. Ensure form fields are sufficient for matching and pacing.
4. Ensure any routing logic changes are reflected in docs and UI.
5. Validate via tests and compile.

## Guardrails

- Do not introduce alternate profile-code formats.
- Keep mapping deterministic unless user explicitly requests probabilistic matching.

## Output Contract

Return:
1. Routing contract diff
2. Updated files
3. Any unresolved ambiguity requiring policy decision
