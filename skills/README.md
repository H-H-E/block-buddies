# Block Buddies Skills Pack

This repository includes a project-specific skill suite for consistent multi-session agent execution.

## Metaskill

- `block-buddies-workflow-orchestrator`
  - Purpose: sequence the full delivery flow across curriculum architecture, canon docs, runbooks, routing, UI/data, forms, validation, ops, and handoff.
  - Use when you want one orchestrated pass with explicit stage gates.

## Long-Running Curriculum Skills

- `block-buddies-curriculum-architect`: define stage/session arcs, scope, concept ladder, completion criteria, and long-running curriculum boundaries.
- `block-buddies-session-expander`: turn rough outlines into mentor-ready session content with early win, core quest, tracks, gates, fallback, evidence, and parent summary.
- `block-buddies-modpack-lab-designer`: design Stage 2 S09-S16 Modpack Lab sessions with controlled profiles, loader/version/pack metadata, reset paths, and tech-support boundaries.
- `block-buddies-curriculum-data-modeler`: translate curriculum docs into typed app data without flattening semantic fields or losing Stage 2 operational metadata.
- `block-buddies-curriculum-quality-auditor`: review curriculum docs/data for pedagogy, safety, operational readiness, parent-safe language, and completion gaps.

## Specialized Maintenance Skills

- `block-buddies-v2-canon-guardian`: keep pedagogy canon coherent and contradiction-free.
- `block-buddies-runbook-author`: author/refine stage-aware runbooks with side-quest nesting, fallback paths, and mastery gates.
- `block-buddies-diagnostic-routing`: maintain profile coding, routing, reassessment, and rematch logic.
- `block-buddies-ui-curriculum-sync`: keep frontend curriculum content aligned with docs/models.
- `block-buddies-public-language-auditor`: enforce external-safe language and internal/external wording policy.
- `block-buddies-form-contract-maintainer`: keep mentor/mentee intake form contracts aligned to routing needs.
- `block-buddies-validation-gatekeeper`: enforce test and contract checks before merge.
- `block-buddies-ops-alignment`: align MVP/metrics/program operations with V2 rules.
- `block-buddies-handoff-compiler`: produce structured release summaries and transition packets.

## Usage

1. Invoke the metaskill for full-system sweeps.
2. Invoke curriculum skills for long-form curriculum buildout or Stage 2 Modpack Lab work.
3. Invoke maintenance skills for targeted edits in one area.
4. Prefer references to canonical files in `docs/pedagogy/`, `docs/agent-curriculum-guide.md`, and `src/lib/curriculumModel.ts`.
5. Always confirm the active repository root before reading or editing; use relative paths from the repo root.
