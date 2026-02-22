---
name: block-buddies-ui-curriculum-sync
description: Synchronize curriculum UI content with canonical pedagogy docs and typed data models. Use when phases, tracks, session objectives, standards, or curriculum messaging change and website surfaces must remain aligned.
---

# Block Buddies UI Curriculum Sync

## Overview

Use a single typed curriculum model to avoid drift between docs and UI copy.

## Workflow

1. Treat these as primary sync points:
   - `/Users/hhe/Documents/block-buddies/src/lib/curriculumModel.ts`
   - `/Users/hhe/Documents/block-buddies/src/lib/curriculumData.ts`
2. Sync dependent pages/components:
   - `/Users/hhe/Documents/block-buddies/src/pages/Curriculum.tsx`
   - `/Users/hhe/Documents/block-buddies/src/components/home/MasteryTreePreview.tsx`
   - any other page rendering curriculum claims
3. Remove hardcoded duplicate curriculum definitions where possible.
4. Run tests and build after sync.

## Guardrails

- Keep public language aligned with language guide.
- Keep app claims consistent with canonical docs.
- Prefer data-model updates over ad-hoc component text edits.

## Output Contract

Return:
1. Model changes
2. UI surfaces updated
3. Consistency checks passed/failed
