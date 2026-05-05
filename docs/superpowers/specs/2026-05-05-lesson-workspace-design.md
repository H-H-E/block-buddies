# Lesson Workspace Interface Design

## Objective

Turn the approved curriculum mockups into the first usable interface slice: a lesson workspace that shows the same S03 curriculum in adult-facing and student-facing modes.

## Approved Direction

- Adult mode is a live lesson control surface for mentors, teachers, and parents.
- Student mode is a simplified guided lesson surface for learners.
- Both modes use the same underlying S03 runbook and maintain the Block Buddies V2 rules: early win, core quest, fallback path, exit ticket, and Do/Explain/Debug mastery gates.

## Implementation TODOs

1. Add a `/lesson` route for the adult lesson workspace.
2. Add a `/lesson/student` route for the student lesson workspace.
3. Add a shared lesson data model anchored to `S03 Track Onboarding`.
4. Build the adult view with role tabs, runbook steps, track examples, mastery logging, intervention timer, evidence capture, and parent summary.
5. Build the student view with a short goal, build preview, three action blocks, hints, reflection, and kid-friendly Do/Explain/Debug language.
6. Add navigation entry points from the main navbar and curriculum page.
7. Add tests for route wiring and lesson data alignment.

## Non-Goals

- No persistence, accounts, real scheduling, or uploaded artifacts yet.
- No real Minecraft integration yet.
- No role-based auth yet.

## Acceptance Checks

- `npm run check:contracts`
- `npm run build`
- `npm run lint`
