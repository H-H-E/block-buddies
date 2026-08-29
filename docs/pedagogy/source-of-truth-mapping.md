# Source of Truth Mapping (V3)

This table defines where each rule is authored and where it is consumed under the V3 mentorship-first canon.

| Domain | Source of Truth | Status | Dependent Surfaces |
|---|---|---|---|
| Product identity, priorities, pedagogy | docs/canon/product-canon.md | **Canonical** | Everything below |
| Module content contract | content/schemas/module.schema.json | **Canonical** | content/modules/**, module UI, validators |
| Canonical modules (pilot) | content/modules/**/*.json | **Canonical** | src/lib/moduleLibrary.ts, modules UI, forms |
| Media/video review registry | content/media/videos.json | **Canonical** | Module media references, resource hub |
| Skill/interest/platform taxonomies | content/taxonomies/*.json | **Canonical** | Module metadata, intake forms, matching docs |
| Safety operations policy | docs/safety-guidelines.md | Canonical (ops layer) | Mentor training, forms, coordinator docs |
| Session loop, pass rules, intervention limits | docs/pedagogy/engine-v2.md | **Legacy - advanced pathway only** | Legacy Stage 1-3 runbooks |
| Diagnostic routing (fluency-archetype) | docs/diagnostic-protocol.md | **Legacy - advanced pathway only** | Legacy pedagogyEngine, legacy tests |
| Runbook contract/sections (legacy) | docs/pedagogy/session-template.md | **Legacy** | docs/runbooks/**, legacy tests |
| Do/Explain/Debug rubric | docs/pedagogy/mastery-gate-rubric.md | **Demoted** - internal mentor observation only | Mentor docs; never child-facing |
| Typed curriculum model (legacy spine) | src/lib/curriculumModel.ts | **Legacy - advanced pathway** | Legacy curriculum data/pages/tests |
| Intake contract (learner/mentor) | src/pages/apply/MenteeApplication.tsx, src/pages/apply/MentorApplication.tsx | Canonical (forms) | Matching workflow docs |
| Public language policy | docs/canon/product-canon.md (Public-Language Rules) + docs/pedagogy/faq-language-guide.md | Canonical | About, Parents, Teens, Mentors, Resources pages |
| Validation gate definitions | package.json scripts + CI workflow | Canonical | Pull request checks and release readiness |

## Change Rule

If a source-of-truth file changes, all listed dependent surfaces must be reviewed and updated in the same PR. Conflicts resolve upward in the hierarchy defined in docs/canon/product-canon.md.

## Canonical Reference

Canonical policy source: [Product & Pedagogy Canon V3](../canon/product-canon.md)
