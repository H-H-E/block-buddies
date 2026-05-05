# Contributor Decision Tree (V2)

Use this quick path before changing any Block Buddies surface.

## 1) What are you changing?

- Pedagogy policy, pass rules, loop timing, or intervention rules:
  - Edit `docs/pedagogy/engine-v2.md` first.
- Session flow, side quests, fallback logic, or gates:
  - Edit runbooks in `docs/runbooks/` using `docs/pedagogy/session-template.md`.
- Profile code, matching, or reassessment behavior:
  - Edit `docs/diagnostic-protocol.md`, `src/lib/pedagogyEngine.ts`, `src/lib/curriculumModel.ts`, and intake forms together.
- Curriculum claims on website pages:
  - Update `src/lib/curriculumData.ts` first, then dependent UI pages.
- Public-facing wording:
  - Align with `docs/pedagogy/faq-language-guide.md`.
- Ops checklists or launch criteria:
  - Update `docs/mvp.md`, `docs/metrics/index.md`, and `docs/mentorship-program.md`.

## 2) Does the change affect more than one surface?

- Yes:
  - Ship docs + code + tests in one PR.
- No:
  - Still run validation gates before merge.

## 3) Required checks before merge

1. `npm test`
2. `npm run build`
3. `npm run check:docs-links`

## Canonical Reference

Canonical policy source: [Pedagogy Engine V2](./engine-v2.md)
