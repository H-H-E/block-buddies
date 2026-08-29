---
name: block-buddies-curriculum-quality-auditor
description: Use when reviewing Block Buddies curriculum docs, runbooks, app data, Stage 2 labs, parent summaries, or generated lesson drafts for pedagogical quality, operational readiness, safety, and completion gaps before handoff or merge.
---

## V3 CANON OVERRIDE (2026-08-23)

This skill predates the V3 product canon. Before acting on any instruction above, apply these overrides from [docs/canon/product-canon.md](../../docs/canon/product-canon.md):

- Mentorship-first, Minecraft-first; CS/math are optional connections only.
- Child-facing words: Make / Show / Tell / Try / Fix / Choose. Do/Explain/Debug is an internal mentor tool only - never child-facing.
- Learners begin around age 7 (band 6-8); mentors are 14-18.
- Bedrock-first; never mix Java and Bedrock instructions in one module.
- The fluency-archetype diagnostic, tracks A/B/C, and S01-S08 spine are LEGACY advanced-pathway material. Do not generate new content from them.
- Six pilot modules under content/modules are the current source of truth for new sessions.

# Block Buddies Curriculum Quality Auditor

## Overview

Audit curriculum quality before claiming a session, stage, or data sync is ready. Passing tests is necessary but not sufficient: a lesson can compile and still be unrunnable, unsafe, too vague, or pedagogically hollow.

Core principle: evidence before confidence. A ready Block Buddies lesson is runnable by a mentor, understandable by a learner, safe for families, and testable through Do / Explain / Debug evidence.

## When to Use

Use this skill:
- After creating or modifying curriculum sessions, runbooks, Stage 2 labs, or advanced labs.
- Before syncing curriculum to app UI.
- Before final handoff for long-running curriculum work.
- When reviewing agent-generated curriculum for drift, vague language, or missing fields.
- When a session “looks good” but has not been checked against the Block Buddies quality bar.

## Audit Workflow

1. Confirm repo root and changed files.
2. Identify the source-of-truth file for the changed surface.
3. Select audit mode: session, stage, Stage 2 lab, UI data, public/parent copy, or release sweep.
4. Build a checklist from the relevant sections below.
5. Report PASS / NEEDS FIX / BLOCKED with exact file paths and missing items.
6. Run or request `block-buddies-validation-gatekeeper` for command-level checks.

## Session Quality Checklist

A single session needs:

- Clear one-concept learning goal.
- Early win possible within 5-10 minutes.
- Core quest with concrete steps and success criteria.
- Visualist, Mechanist, Operator variations that serve the same goal.
- Side quests that are optional and gated by readiness.
- Do / Explain / Debug gates with observable evidence.
- Common failure points that match the actual activity.
- Fallback moves that shrink the task without deleting the objective.
- Hint ladder from low support to modeled step.
- Exit ticket in learner-appropriate language.
- Evidence items that prove behavior, not attendance.
- Parent-safe summary.
- Student checklist.

## Stage Quality Checklist

A stage needs:

- Stage promise and prerequisites.
- Ordered session map.
- Concept ladder with no abrupt jumps.
- Capstone that integrates previous skills.
- Safety boundaries and out-of-scope items.
- Completion rubric for docs, data, UI, validation, and handoff.
- No duplicate or contradictory source-of-truth language.

## Stage 2 Modpack Lab Checklist

Stage 2 sessions additionally need:

- Approved launcher/profile workflow.
- Locked Minecraft version, loader, and pack version.
- Approved mod list.
- Required files listed.
- Known-good test.
- Reset instructions.
- Known-broken state only when intentionally used.
- “Do Not Let This Become Tech Support” box.
- Device/performance constraints when relevant.
- Bounded troubleshooting time.
- No random learner downloads.
- No public-server chaos.
- Parent-safe translation of loader/dependency/config concepts.

## UI/Data Quality Checklist

App-facing curriculum changes need:

- Types preserve semantic fields, not only string arrays.
- Canonical titles/objectives match source docs.
- Early win, core quest, gates, fallback, exit ticket, evidence, and parent summary are represented or explicitly deferred.
- Stage 2 operational metadata is represented if Stage 2 appears in UI/data.
- Lesson workspace renders canonical fields when present.
- Tests verify semantics, not just route loads and counts.

## Parent/Public Language Checklist

Family-facing text should:

- Use confidence-first language.
- Explain technical work as safe experimentation, systems thinking, testing, design, and debugging.
- Avoid clinical labels, raw behavior notes, or internal hard-cap language.
- Avoid jargon unless translated.
- Avoid promising mastery beyond observed evidence.

## Gate Decision Format

Return one of:

- `PASS`: quality criteria met; include validation status.
- `NEEDS FIX`: specific missing/weak items; no release claim.
- `BLOCKED`: missing source, unclear scope, environment issue, or human decision needed.

Always include:
1. Files audited.
2. Mode used.
3. Findings by severity.
4. Required fixes.
5. Validation commands run or still needed.

## Common Pitfalls

1. **Green tests, weak lesson.** Tests may not catch missing early wins or vague gates.
2. **Pretty prose, no operations.** Mentor needs setup, fallback, and evidence, not vibes.
3. **Stage 2 safety omitted.** Modding without profile/reset/version boundaries is not pilot-ready.
4. **Tracks diverge.** A/B/C should vary the path, not the learning standard.
5. **Completion overclaim.** If a dependent surface is deferred, say so.

## Verification Checklist

- [ ] Correct audit mode selected.
- [ ] Source-of-truth file identified.
- [ ] Session/stage/data/public checklist applied as relevant.
- [ ] Findings include exact file paths.
- [ ] PASS/NEEDS FIX/BLOCKED decision is explicit.
- [ ] Command validation status is separate from quality decision.
