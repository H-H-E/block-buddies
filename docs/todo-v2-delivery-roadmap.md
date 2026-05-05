# V2 Delivery Roadmap (Completion Record)

This roadmap records the V2 work that was expanded into execution-ready epics and tasks for project management.

## Current Status

The Pedagogy V2 baseline is implemented in the repository. As of 2026-05-05:

- S01-S08 runbooks exist with A/B/C worked examples, branch minute budgets, artifact checklists, accessibility notes, fallback paths, and mastery gates.
- Public pages, intake forms, operations docs, metrics templates, and validation gates are aligned to the V2 model.
- The live GitHub Project board should now be used for cleanup and interface/content work, not as the source of truth for unfinished V2 baseline tasks.

## Milestone Objective

Deliver a stable Pedagogy V2 release where docs, UI, forms, validation, and operations are fully aligned and maintainable.

## Tracking Surface (GitHub)

- Project board: https://github.com/users/H-H-E/projects/7
- Milestone: https://github.com/H-H-E/block-buddies/milestone/1
- Board fields:
  - `Status`: `Todo` -> `In Progress` -> `Done`
  - `Priority`: `P0` / `P1` / `P2`
  - `Stream`: `Pedagogy Canon` / `Runbooks` / `Routing` / `UI Messaging` / `Forms` / `Operations` / `Validation`
  - `Work Type`: `Epic` / `Task`

## Priority Legend

- `P0`: blocks safe launch or creates policy drift
- `P1`: should be done before pilot-scale expansion
- `P2`: quality/scale improvements after baseline stability

## Epic 1: Canonical Pedagogy Hardening (`P0`)

### Why
Prevent future drift from V2 rules.

### Completed Work
- [x] Add references to V2 canon in all curriculum docs and remove stale pointers.
- [x] Add a short contributor decision tree for “which doc to edit first”.
- [x] Enforce “single source of truth” mapping table in one canonical location.

### Acceptance Criteria
- Every pedagogy doc points to `docs/pedagogy/engine-v2.md`.
- No contradictory session-loop or pass-rule language exists.
- Tracked by: `#1` (epic), tasks `#9`, `#10`.

## Epic 2: Runbook Completeness and Track Specificity (`P0`)

### Why
S01-S08 are canonical but still need richer track-specific implementation depth.

### Completed Work
- [x] Add track-specific worked examples per session (`A/B/C`).
- [x] Add explicit artifact checklist for each session outcome.
- [x] Add estimated minute budgets per branch path (core/stretch/expert).
- [x] Add accessibility alternatives for each runbook step where relevant.

### Acceptance Criteria
- Each session supports A/B/C execution without mentor improvisation.
- Mentor can run any session with one runbook + checklist only.
- Tracked by: `#2` (epic), tasks `#11`, `#12`.

## Epic 3: Diagnostic and Matching Reliability (`P0`)

### Why
Profile quality determines pacing and mentor fit.

### Completed Work
- [x] Add mentor-side profile confirmation checklist at S01 end.
- [x] Add reassessment trigger rules to coordinator process docs.
- [x] Add mismatch escalation protocol (when mentor fit fails).

### Acceptance Criteria
- Every learner has profile code + confidence level recorded.
- Reassessment and rematch conditions are explicit and operational.
- Tracked by: `#3` (epic), tasks `#13`, `#14`.

## Epic 4: Public Curriculum/Trust Messaging Refinement (`P1`)

### Why
Public pages must stay aligned and parent-trust optimized.

### Completed Work
- [x] Add “How personalized pacing works” explainer on parent-facing pages.
- [x] Add transparent “what happens if a learner struggles” content.
- [x] Add “mentor quality controls” section linked to session logs.

### Acceptance Criteria
- Public copy is confidence-first and policy-compliant.
- Parents can understand progression and safety in under 2 minutes.
- Tracked by: `#4` (epic), task `#15`.

## Epic 5: Intake-to-Operations Data Handoff (`P1`)

### Why
Form data must map directly to matching and first-session planning.

### Completed Work
- [x] Define canonical field-to-operation mapping table.
- [x] Add coordinator quick-view template (who needs extra scaffolding).
- [x] Add mandatory “read-before-match” fields for mentor assignment.

### Acceptance Criteria
- Coordinator can assign pairings using form outputs only.
- No critical routing field is missing from either form.
- Tracked by: `#5` (epic), task `#16`.

## Epic 6: Validation and CI Gate Strengthening (`P1`)

### Why
Prevent regressions and hidden drift.

### Completed Work
- [x] Add a docs-link checker for pedagogy/runbook references.
- [x] Add test for public-language restricted terms on public pages.
- [x] Add a CI workflow running test + build + contract checks.

### Acceptance Criteria
- Validation catches schema, logic, and messaging drift before merge.
- CI status is a reliable release gate.
- Tracked by: `#6` (epic), tasks `#17`, `#18`.

## Epic 7: Pilot Readiness Operations (`P1`)

### Why
Translate V2 docs into runnable pilot operations.

### Completed Work
- [x] Create pilot runbook for coordinators (week-by-week operations).
- [x] Define minimum mentor calibration session protocol.
- [x] Define incident drill and parent communication templates.

### Acceptance Criteria
- Pilot can run without undocumented coordinator knowledge.
- Safety and escalation actions are rehearsable.
- Tracked by: `#7` (epic), task `#19`.

## Epic 8: Reporting and Scale Foundations (`P2`)

### Why
Enable evidence-based iteration after first cohorts.

### Completed Work
- [x] Add session-level KPI rollup template.
- [x] Add fallback-rate and hard-cap dashboards.
- [x] Add track outcome comparisons by profile code.

### Acceptance Criteria
- Team can identify weak sessions and adjust quickly.
- Data supports decisions for post-MVP scaling.
- Tracked by: `#8` (epic), task `#20`.

## Epic and Task Index

| Work Type | Issue | Title | Priority | Stream |
|---|---|---|---|---|
| Epic | #1 | Canonical Pedagogy Hardening | P0 | Pedagogy Canon |
| Epic | #2 | Runbook Completeness and Track Specificity | P0 | Runbooks |
| Epic | #3 | Diagnostic and Matching Reliability | P0 | Routing |
| Epic | #4 | Public Curriculum & Trust Messaging Refinement | P1 | UI Messaging |
| Epic | #5 | Intake-to-Operations Data Handoff | P1 | Forms |
| Epic | #6 | Validation and CI Gate Strengthening | P1 | Validation |
| Epic | #7 | Pilot Readiness Operations | P1 | Operations |
| Epic | #8 | Reporting and Scale Foundations | P2 | Operations |
| Task | #9 | Canon reference map + contradiction sweep | P0 | Pedagogy Canon |
| Task | #10 | Contributor decision-tree + ownership flow | P0 | Pedagogy Canon |
| Task | #11 | S01-S08 track-specific worked examples (A/B/C) | P0 | Runbooks |
| Task | #12 | Minute budgets + accessibility alternatives | P0 | Runbooks |
| Task | #13 | S01 profile confirmation + reassessment triggers | P0 | Routing |
| Task | #14 | Mentor mismatch escalation protocol | P0 | Routing |
| Task | #15 | Public pacing/struggle/quality-controls copy pass | P1 | UI Messaging |
| Task | #16 | Intake field-to-operations mapping + quick-view template | P1 | Forms |
| Task | #17 | Docs link checker + language policy tests | P1 | Validation |
| Task | #18 | CI workflow for tests/build/contracts | P1 | Validation |
| Task | #19 | Pilot coordinator runbook + mentor calibration protocol | P1 | Operations |
| Task | #20 | KPI/fallback dashboard and reporting templates | P2 | Operations |

## Execution Rules

- WIP cap: maximum 2 issues in `In Progress` per stream.
- Start rule: no `P1` issue starts before all open `P0` issues have owners and planned dates.
- Merge rule: docs and UI changes must ship with corresponding validation updates where relevant.
- Closure rule: close tasks first, then close parent epic only after acceptance criteria are evidenced in PR links.

## Suggested Execution Order

Completed in baseline delivery order:

1. Epic 1
2. Epic 2
3. Epic 3
4. Epic 6
5. Epic 4
6. Epic 5
7. Epic 7
8. Epic 8

## Interface-Content Readiness

The next product workstream can now focus on the content interface:

- Translate `src/lib/curriculumData.ts`, `docs/runbooks/`, and `docs/operations/` into browsable internal UI surfaces.
- Keep the public site confidence-first while moving operational detail into mentor/coordinator-facing views.
- Preserve validation coverage for docs integrity, public language, route loading, runbook schema, and curriculum consistency.

## Dependency Notes

- Epic 2 depends on Epic 1 policy lock.
- Epic 5 depends on Epic 3 routing clarity.
- Epic 7 depends on Epics 2, 3, and 6.
- Epic 8 depends on Epic 6 instrumentation.
