# Contributor Decision Tree (V2)

Use this quick path before changing any Block Buddies surface.

## 1) What are you changing?

- Pedagogy policy, pass rules, loop timing, or intervention rules:
  - Edit `/Users/hhe/Documents/block-buddies/docs/pedagogy/engine-v2.md` first.
- Session flow, side quests, fallback logic, or gates:
  - Edit runbooks in `/Users/hhe/Documents/block-buddies/docs/runbooks/` using `/Users/hhe/Documents/block-buddies/docs/pedagogy/session-template.md`.
- Profile code, matching, or reassessment behavior:
  - Edit `/Users/hhe/Documents/block-buddies/docs/diagnostic-protocol.md`, `/Users/hhe/Documents/block-buddies/src/lib/pedagogyEngine.ts`, `/Users/hhe/Documents/block-buddies/src/lib/curriculumModel.ts`, and intake forms together.
- Curriculum claims on website pages:
  - Update `/Users/hhe/Documents/block-buddies/src/lib/curriculumData.ts` first, then dependent UI pages.
- Public-facing wording:
  - Align with `/Users/hhe/Documents/block-buddies/docs/pedagogy/faq-language-guide.md`.
- Ops checklists or launch criteria:
  - Update `/Users/hhe/Documents/block-buddies/docs/mvp.md`, `/Users/hhe/Documents/block-buddies/docs/metrics/index.md`, and `/Users/hhe/Documents/block-buddies/docs/mentorship-program.md`.

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
