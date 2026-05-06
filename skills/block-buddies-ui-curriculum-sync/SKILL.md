---
name: block-buddies-ui-curriculum-sync
description: Use when synchronizing Block Buddies curriculum UI content with canonical docs and typed data models, including phases, tracks, session objectives, lesson workspace content, public curriculum messaging, or Stage 2 app surfaces.
---

# Block Buddies UI Curriculum Sync

## Overview

Keep frontend surfaces aligned with canonical curriculum data and docs. UI sync happens after the data contract is clear; do not paste curriculum prose directly into components when it belongs in typed data.

Confirm the active repo root before reading or editing:

```bash
git rev-parse --show-toplevel
git status --short
```

Use relative paths from the repository root.

## Workflow

1. If models or data shape may change, use `block-buddies-curriculum-data-modeler` first.
2. Treat these as primary sync points:
   - `src/lib/curriculumModel.ts`
   - `src/lib/curriculumData.ts`
   - `src/lib/lessonWorkspaceData.ts`
3. Sync dependent pages/components:
   - `src/pages/Curriculum.tsx`
   - `src/pages/lesson/LessonWorkspace.tsx`
   - `src/pages/ResourceHub.tsx`
   - `src/components/home/MasteryTreePreview.tsx`
   - any other page rendering curriculum claims
4. Remove hardcoded duplicate curriculum definitions where possible.
5. Public or parent-facing changes must run through `block-buddies-public-language-auditor`.
6. Run tests and build after sync.

## Guardrails

- Keep public language aligned with the language guide.
- Keep app claims consistent with canonical docs.
- Prefer data-model updates over ad-hoc component text edits.
- Use canonical fields over generated copy when available.
- Do not flatten Stage 2 Modpack Lab metadata into generic strings.
- If a field is deferred, record the deferral in handoff.

## Output Contract

Return:
1. Source docs/data used.
2. Model/data changes.
3. UI surfaces updated.
4. Public language review status if relevant.
5. Consistency checks passed/failed.
