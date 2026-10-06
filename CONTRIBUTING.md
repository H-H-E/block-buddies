# Contributing to Block Buddies

## Contribution principles

Mission first. Safety always. Preserve the mentor relationship and the learner as maker. Prefer one usable, reviewed slice over speculative curriculum expansion.

## Canonical sources

For the beginner product, follow this order:

1. [Product and Pedagogy Canon V3](./docs/canon/product-canon.md).
2. Machine-readable contracts in `content/schemas/`.
3. Canonical content in `content/modules/`, `content/media/`, `content/tutorials/`, and `content/taxonomies/`.
4. Operational policies consistent with the canon.
5. Derived run-sheets, quest cards, and UI surfaces.

See the [Source of Truth Mapping](./docs/pedagogy/source-of-truth-mapping.md). V2 diagnostic routing, mastery gates, and technical stages are legacy/advanced material. Do/Explain/Debug is not a mandatory beginner assessment or child-facing requirement.

## Contribution flow

Describe the observed problem and proposed change in an issue or pull request. Cite the source paths and distinguish observed evidence from design assumptions. Update affected canonical content and derived surfaces together. Preserve existing module IDs unless migration is intentional.

## Quality gates

Beginner activities must have an authentic Minecraft outcome, meaningful choice, a small early win, short learner actions, mentor support without takeover, a recoverable failure path, natural evidence, and a next-session hook. Planned phase durations must fit the stated session budget; allow room for recovery.

Declare edition, intended platform/input support, and review status honestly. Broad compatibility claims are not tests. A schema-valid module is not a playtested module. No fabricated screenshots, reviews, testimonials, or impact measures.

Tutorial recipes must resolve their module/media/skill references. Learner instructions and recipe instructions must agree. Keep studio setup, commands, capture assertions, and review notes out of learner instructions. Never apply destructive studio resets to learner worlds. See [Tutorial authoring](./docs/tutorials/README.md).

Run `npm run check:contracts` and `npm run build` in a complete checkout. For tutorial-only checks, run `npm run validate:tutorials` and `npm run test:tutorials`. Record checks that could not be run. Regenerate affected run-sheets and quest cards with `python scripts/generate-derived.py`.

## Human review

Humans must review safety-critical guidance, participant-facing promises, consent/legal content, actual Minecraft instructions and captures, and pilot readiness. Never mark content human-playtested until that has occurred. Changes to recording, consent, permissions, or retention policy require explicit adult review, not an inferred implementation decision.
