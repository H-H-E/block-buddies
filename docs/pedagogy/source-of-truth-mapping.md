# Source of Truth Mapping (V2)

This table defines where each V2 rule is authored and where it is consumed.

| Domain | Source of Truth | Dependent Surfaces |
|---|---|---|
| Session loop, pass rules, intervention limits | `docs/pedagogy/engine-v2.md` | Runbooks, mentor docs, curriculum UI copy |
| Runbook contract/sections | `docs/pedagogy/session-template.md` | `docs/runbooks/*.md`, `src/test/runbook-schema.test.ts` |
| Do/Explain/Debug rubric | `docs/pedagogy/mastery-gate-rubric.md` | Runbooks, mentorship operations docs |
| Diagnostic routing policy | `docs/diagnostic-protocol.md` | `src/lib/pedagogyEngine.ts`, forms, mentorship docs |
| Typed curriculum model | `src/lib/curriculumModel.ts` | `src/lib/curriculumData.ts`, curriculum pages/tests |
| Curriculum session/phase content | `src/lib/curriculumData.ts` | `src/pages/Curriculum.tsx`, home preview, public claims |
| Intake contract (mentee/mentor) | `src/pages/apply/MenteeApplication.tsx`, `src/pages/apply/MentorApplication.tsx` | Matching workflow docs and coordinator templates |
| Public language policy | `docs/pedagogy/faq-language-guide.md` | About, Parents, Teens, Mentors, Resources pages |
| Validation gate definitions | `package.json` scripts + CI workflow | Pull request checks and release readiness |

## Change Rule

If a source-of-truth file changes, all listed dependent surfaces must be reviewed and updated in the same PR.

## Canonical Reference

Canonical policy source: [Pedagogy Engine V2](./engine-v2.md)
