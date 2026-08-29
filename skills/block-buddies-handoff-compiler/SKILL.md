---
name: block-buddies-handoff-compiler
description: Use when ending substantial Block Buddies work, especially cross-session or long-running curriculum work, to capture decisions, changed surfaces, validation freshness, exact next files, blockers, and duplicate-work prevention notes.
---

## V3 CANON OVERRIDE (2026-08-23)

This skill predates the V3 product canon. Before acting on any instruction above, apply these overrides from [docs/canon/product-canon.md](../../docs/canon/product-canon.md):

- Mentorship-first, Minecraft-first; CS/math are optional connections only.
- Child-facing words: Make / Show / Tell / Try / Fix / Choose. Do/Explain/Debug is an internal mentor tool only - never child-facing.
- Learners begin around age 7 (band 6-8); mentors are 14-18.
- Bedrock-first; never mix Java and Bedrock instructions in one module.
- The fluency-archetype diagnostic, tracks A/B/C, and S01-S08 spine are LEGACY advanced-pathway material. Do not generate new content from them.
- Six pilot modules under content/modules are the current source of truth for new sessions.

# Block Buddies Handoff Compiler

## Overview

Compile handoff artifacts that let the next agent resume without rediscovering the project, redoing completed work, or trusting stale validation.

Core principle: a handoff is not a victory lap; it is an operational state packet.

## Workflow

1. Confirm repo state:
   ```bash
   git rev-parse --show-toplevel
   git status --short
   git log --oneline -1
   ```
2. List changed files and why each changed.
3. Identify source-of-truth files touched and dependent surfaces reviewed or pending.
4. Record decisions, rejected alternatives, and “do not redo” notes.
5. Record exact validation commands, results, and whether failures are new or pre-existing.
6. Record next exact files/actions, not vague next steps.
7. Mark blockers and human decisions separately.

## Standard Handoff Template

```markdown
# Block Buddies Handoff - YYYY-MM-DD - <work-packet>

## Repo State
- Repo root:
- Branch:
- HEAD:
- Working tree:

## Active Objective
- Scope/stage:
- Selected workflow:
- Current work packet:
- Out of scope:

## Changed Files
| File | Why it changed | Source/dependent |
|---|---|---|

## Decisions Made
- Decision:
  - Reason:
  - Affects:

## Rejected / Do Not Redo
- Rejected approach:
  - Why:

## Source-of-Truth Impact
| Canon/source file | Dependents reviewed | Dependents pending |
|---|---|---|

## Validation Freshness
| Command | Result | Notes |
|---|---|---|

## Open Blockers / Human Decisions
- Blocker:
  - Needed decision:

## Next Exact Actions
1. File/action:
2. File/action:
3. File/action:

## Risks
- Risk:
  - Mitigation:
```

## Curriculum-Specific Additions

For long-running curriculum work, include:

| Field | Purpose |
|---|---|
| Stage/session coverage | Which Sxx sessions are complete, partial, untouched |
| Canonicalization status | Draft guide vs canonical runbook vs UI data |
| Deferred fields | Missing data/model fields intentionally postponed |
| Pack readiness | Stage 2 profile/version/loader/reset status |
| Quality status | PASS/NEEDS FIX/BLOCKED from quality auditor |
| Next exact files | Prevents next agent from rereading everything |

## Validation Recording Rules

Do not write “tests pass” unless fresh output was read. Record exact commands such as:

- `npm test`
- `npm run check:docs-links`
- `npm run build`
- `npm run check:contracts`

If validation was not run, say `NOT RUN` and why.

## Guardrails

- Keep handoff factual and specific.
- Do not hide partial work behind broad completion language.
- Do not trust agent reports without checking git diff and command output.
- Distinguish completed work from recommended next work.
- Include exact repo path/HEAD because long-running curriculum work may span multiple sessions or checkouts.

## Output Contract

Return:
1. Handoff note using the template or a concise equivalent.
2. Validation status with exact commands.
3. Next exact files/actions.
4. Explicit blockers or deferred fields.
