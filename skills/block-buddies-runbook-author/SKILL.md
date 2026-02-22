---
name: block-buddies-runbook-author
description: Create or update Block Buddies session runbooks (S01-S08) using the required V2 contract. Use when drafting new lessons, revising session flow, adding side quests, changing fallback logic, or modifying mastery gates.
---

# Block Buddies Runbook Author

## Overview

Author runbooks that are structurally valid, pedagogically aligned, and operationally usable by mentors.

## Workflow

1. Start from:
   - `/Users/hhe/Documents/block-buddies/docs/pedagogy/session-template.md`
   - `/Users/hhe/Documents/block-buddies/docs/pedagogy/engine-v2.md`
2. Ensure required frontmatter keys exist:
   - `session_id`, `track`, `fluency_range`, `archetype`, `duration_minutes`, `prerequisites`, `mastery_gate_ids`, `fallback_path`
3. Ensure required sections exist:
   - Objective
   - Loop Plan
   - Early Win
   - Tier 1 Core Quest
   - Tier 2 Stretch Side Quest
   - Tier 3 Expert Side Quest
   - Fallback Path
   - Mastery Gates
4. Encode unlock logic using fluency and gate IDs.
5. Keep side quests optional and nested; never replace core quest.
6. Validate with runbook schema tests.

## Guardrails

- Guarantee early win by minute 10.
- Enforce intervention limits and 7-minute hard cap.
- Keep session duration at 45 minutes unless explicitly changed project-wide.

## Output Contract

Return:
1. Updated runbook files
2. Frontmatter/gate summary table
3. Validation result
