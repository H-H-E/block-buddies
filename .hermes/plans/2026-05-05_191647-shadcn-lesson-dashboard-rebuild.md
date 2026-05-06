# Rebuild Lesson Dashboard with Proper shadcn/ui Usage

## Goal

Rebuild the Block Buddies lesson workspace dashboard so it uses shadcn/ui as the structural foundation instead of hand-rolled card/sidebar/form primitives, while preserving the curriculum contract and mentor/student dashboard behavior.

The target is not to make it look generic shadcn. The target is to keep the Block Buddies neobrutalist / Minecraft-inspired identity while using shadcn components for accessibility, state semantics, layout consistency, and maintainability.

## Current implementation summary

Inspected files:

- `src/pages/lesson/LessonWorkspace.tsx`
- `src/lib/lessonWorkspaceData.ts`
- `src/test/lesson-workspace-route.test.ts`
- `src/test/lesson-workspace-data.test.ts`
- `src/components/ui/*`
- `components.json`
- `tailwind.config.ts`

Current route surfaces:

- Mentor/adult: `/lesson?session=S01` through `/lesson?session=S08`
- Student: `/lesson/student?session=S01` through `/lesson/student?session=S08`

Current data adapter:

- `src/lib/lessonWorkspaceData.ts`
- This is good and should remain the curriculum-to-UI adapter.
- It already carries real Stage 1 details: hints, evidence, parent summary, exit ticket, student checklist, failure signs.

Current tests:

- Route tests assert real content appears and interactive student hints/steps work.
- Data tests assert all S01-S08 sessions resolve and adult/student flows align.

## Main implementation problems

### 1. `LessonWorkspace.tsx` is doing too much

`src/pages/lesson/LessonWorkspace.tsx` is ~600 lines and combines:

- route resolution
- mentor layout shell
- student layout shell
- sidebar navigation
- top command bar
- timeline rendering
- card rendering
- student state machine
- hint reveal state
- mastery/reward state
- Minecraft preview illustration
- visual styling tokens

This makes future dashboard polish expensive and risky.

### 2. shadcn components exist but are mostly bypassed

The repo already has rich shadcn primitives:

- `Sidebar`
- `Card`
- `Badge`
- `Tabs`
- `Progress`
- `RadioGroup`
- `Checkbox`
- `Accordion`
- `ScrollArea`
- `Separator`
- `Sheet`
- `Tooltip`
- `Button`

But the lesson dashboard mostly uses raw `div`, `aside`, `button`, custom borders, custom pills, custom cards, and manual state display.

Examples:

- Cards are `div className="rounded-md border ..."` instead of `Card`, `CardHeader`, `CardContent`.
- Active/current labels are raw `span` instead of `Badge`.
- Mentor sidebar is custom `aside` instead of shadcn `SidebarProvider`, `Sidebar`, `SidebarContent`, `SidebarMenu`, etc.
- Mastery gate choices are visual rows with `Circle` icons, not actual `RadioGroup` options.
- Student checklist is visual squares, not `Checkbox` or a read-only checklist primitive.
- Hint reveal is plain buttons/cards instead of a structured `Accordion` or progressive `Card` set.
- Main dashboard sections do not use `Tabs` or `ScrollArea` to control density.

### 3. Hard-coded colors fight the token system

The page uses many raw colors:

- `#f4f0e6`
- `#0d4a28`
- `#d8ceb5`
- `#d98a0a`
- `#fbf7ed`
- etc.

This makes the dashboard harder to theme, hard to keep consistent, and not aligned with `components.json` where `cssVariables: true` is enabled.

Better: map Block Buddies colors into semantic tokens/classes and use shadcn defaults (`bg-card`, `text-muted-foreground`, `border-border`, `bg-primary`, `bg-muted`) with limited custom accent utilities for Minecraft/Rudnick flavor.

### 4. Interaction state is local and presentation-bound

Student state is currently inside `StudentLessonView`:

- `activeActionIndex`
- `visibleHintCount`
- derived `missingRewardGate`

That is acceptable for a demo, but it is coupled to the layout. If mentor and student dashboards need shared state later, this will get messy.

Better: extract a small hook:

- `useLessonWorkspaceState(workspace)`

Return:

- `activeActionIndex`
- `activeAction`
- `visibleHintCount`
- `revealedHints`
- `masteryProgress`
- `earnedStars`
- `missingGate`
- handlers: `advanceStep`, `selectStep`, `revealNextHint`, `startFallback`

### 5. Dashboard density should be controlled by layout primitives

Mentor view is information-dense by nature. Current implementation lays everything into static grids. This works visually at desktop width, but it needs dashboard patterns:

- sticky right rail
- scrollable main content
- collapsible secondary sections
- tabs for “Run”, “Evidence”, “Notes”
- sidebar session spine
- mobile sheet nav

shadcn already provides the primitives for this.

## Rebuild architecture

### Keep

- `src/lib/lessonWorkspaceData.ts` as the adapter source.
- Existing routes `/lesson` and `/lesson/student`.
- Existing curriculum text and tests.
- Neobrutalist/Minecraft identity.

### Change

Split `src/pages/lesson/LessonWorkspace.tsx` into a small route shell plus focused dashboard components.

Proposed file tree:

```txt
src/pages/lesson/LessonWorkspace.tsx
src/features/lesson-workspace/
  components/
    LessonDashboardShell.tsx
    LessonSidebar.tsx
    LessonTopBar.tsx
    MentorDashboard.tsx
    MentorTimeline.tsx
    MentorRunPanel.tsx
    MentorEvidencePanel.tsx
    MentorMasteryPanel.tsx
    MentorSupportRail.tsx
    TrackLensCards.tsx
    StudentDashboard.tsx
    StudentCurrentStepCard.tsx
    StudentQuestCard.tsx
    StudentStepList.tsx
    StudentHintPanel.tsx
    StudentSuccessRail.tsx
    StudentRewardCard.tsx
    BuildPreviewCard.tsx
  hooks/
    useLessonWorkspaceState.ts
  lessonDashboardTypes.ts
```

`LessonWorkspace.tsx` should become mostly:

```tsx
const LessonWorkspace = ({ mode = "adult" }: LessonWorkspaceProps) => {
  const [searchParams] = useSearchParams();
  const workspace = resolveLessonWorkspaceContent(searchParams.get("session") ?? searchParams.get("sessionId"));

  return mode === "student"
    ? <StudentDashboard workspace={workspace} />
    : <MentorDashboard workspace={workspace} />;
};
```

## shadcn component mapping

### Dashboard shell

Use:

- `SidebarProvider`
- `Sidebar`
- `SidebarHeader`
- `SidebarContent`
- `SidebarGroup`
- `SidebarGroupLabel`
- `SidebarMenu`
- `SidebarMenuItem`
- `SidebarMenuButton`
- `SidebarFooter`
- `SidebarInset`
- `SidebarTrigger`
- `Separator`
- `Breadcrumb` if useful later

Purpose:

- Replace custom mentor `aside`.
- Get mobile drawer behavior for free.
- Get consistent keyboard/sidebar behavior.

### Cards and panels

Use:

- `Card`
- `CardHeader`
- `CardTitle`
- `CardDescription`
- `CardContent`
- `CardFooter`

For:

- Mentor script
- Core quest steps
- Evidence to collect
- Exit ticket
- Common failure signs
- Parent summary preview
- Adult context
- Track lens cards
- Student current step
- Student quest
- Build preview
- Reward
- Checklist

### Labels and state chips

Use:

- `Badge`

For:

- Current Step
- Current learner lens
- Session ID
- Live Instruction
- Support-pass / fail / pass states
- Track labels A/B/C
- Risk/safety tags

### Mentor mastery gates

Use:

- `RadioGroup`
- `RadioGroupItem`
- `Label`
- maybe `Tooltip`

For:

- Do / Explain / Debug gate state selection.

Current visual rows should become actual controls. This also makes tests better because they can query by role.

### Student checklist

Use:

- `Checkbox`
- `Label`

For student checklist progress. If the checklist is currently computed from active step state, disabled/readOnly checkboxes can still represent state semantically.

### Hint ladder

Two good options:

Option A, simpler:

- `Card` list + `Button` “Reveal next hint”
- Keep current reveal behavior but use `Card`/`Badge`/`Button`.

Option B, better UX:

- `Accordion`
- Show first N accordion items as available.
- Later hints are disabled/locked until reveal.

Recommended: Option A for first rebuild; Option B after the dashboard structure is stable.

### Mentor density management

Use:

- `Tabs`
- `TabsList`
- `TabsTrigger`
- `TabsContent`
- `ScrollArea`
- `Accordion`

Mentor center panel should likely become tabs:

- `Run` — mentor script, core quest steps, timeline
- `Evidence` — evidence items, exit ticket, common failures
- `Review` — parent summary, session log fields, track lens

This reduces visual density without hiding mission-critical controls.

### Progress and timers

Use:

- `Progress`
- `Button`
- `Badge`

For:

- session timer progress
- intervention timer
- student reward progress
- session progress through Hook → Example → Core → Side/Fallback → Exit

## Proposed visual system

Keep the Block Buddies feel through a small wrapper layer, not repeated raw classes.

Create component-level variants or helper classes:

- `bb-card` for neobrutalist card shadow treatment
- `bb-panel` for cream card background if needed
- `bb-accent-warning` for orange current-step state
- `bb-minecraft-grid` for preview art only

But first preference should be shadcn semantic tokens:

- `bg-background`
- `bg-card`
- `text-card-foreground`
- `text-muted-foreground`
- `border-border`
- `bg-primary`
- `text-primary-foreground`
- `bg-muted`
- `text-muted-foreground`
- `bg-accent`
- `text-accent-foreground`

If necessary, adjust CSS variables in `src/index.css` rather than hardcoding every component.

## Step-by-step implementation plan

### Phase 1 — Add dashboard component contract tests

Add route tests that assert semantic shadcn behavior, not exact DOM structure:

File: `src/test/lesson-workspace-route.test.ts`

Add assertions:

- Mentor dashboard has navigation landmark/sidebar menu for sessions.
- Mentor mastery choices are actual radio controls:
  - role `radio`, names `Pass`, `Support-Pass`, `Fail` under Do/Explain/Debug groups.
- Student checklist items are actual checkboxes.
- Student hints are buttons with stable labels and proper progressive behavior.
- Current step is represented by a badge or visible label.

Potential new test names:

- `renders mentor mastery gates as accessible radio groups`
- `renders student checklist as accessible checkboxes`
- `keeps shadcn dashboard shell navigation accessible`

Run RED:

```bash
npm test -- src/test/lesson-workspace-route.test.ts
```

### Phase 2 — Extract state hook

Create:

- `src/features/lesson-workspace/hooks/useLessonWorkspaceState.ts`

Move from `StudentLessonView`:

- active action index
- visible hint count
- advancement logic
- missing reward gate

Tests can stay route-level initially. Add hook tests only if logic grows.

### Phase 3 — Extract shared dashboard shell

Create:

- `src/features/lesson-workspace/components/LessonDashboardShell.tsx`
- `src/features/lesson-workspace/components/LessonSidebar.tsx`
- `src/features/lesson-workspace/components/LessonTopBar.tsx`

Use shadcn:

- `SidebarProvider`
- `Sidebar`
- `SidebarInset`
- `SidebarTrigger`
- `SidebarMenu*`
- `Separator`
- `Button`
- `Badge`

Mentor gets full sidebar by default.
Student can use a simpler header, or the same shell with a minimal sidebar disabled/hidden.

### Phase 4 — Rebuild mentor dashboard using cards/tabs/radio groups

Create:

- `MentorDashboard.tsx`
- `MentorTimeline.tsx`
- `MentorRunPanel.tsx`
- `MentorEvidencePanel.tsx`
- `MentorMasteryPanel.tsx`
- `MentorSupportRail.tsx`
- `TrackLensCards.tsx`

Use:

- `Card` for every panel.
- `Tabs` for center content density.
- `RadioGroup` for mastery gate states.
- `Badge` for current step/session/lens state.
- `Progress` for session/fallback timing.
- `ScrollArea` for dense rails if needed.

Keep existing copy/data from `workspace` only. Do not duplicate curriculum prose in component files.

### Phase 5 — Rebuild student dashboard using cards/checklists/progressive hints

Create:

- `StudentDashboard.tsx`
- `StudentCurrentStepCard.tsx`
- `StudentQuestCard.tsx`
- `StudentStepList.tsx`
- `StudentHintPanel.tsx`
- `StudentSuccessRail.tsx`
- `StudentRewardCard.tsx`
- `BuildPreviewCard.tsx`

Use:

- `Card` for sections.
- `Button` for actions.
- `Badge` for current step and track.
- `Checkbox` for checklist state.
- `Progress` for reward/session progress.
- `Accordion` only if hint reveal needs richer behavior.

### Phase 6 — Token cleanup

Replace repeated raw hex values in lesson dashboard components with:

- shadcn theme tokens
- project CSS variables
- a tiny set of Block Buddies helper classes

Do not attempt full site-wide theming in the same PR unless required.

### Phase 7 — Visual/browser verification

Run local server and capture mentor/student screenshots:

```bash
npm run dev -- --host 127.0.0.1 --port 5173
```

Open:

- `http://127.0.0.1:5173/lesson?session=S06`
- `http://127.0.0.1:5173/lesson/student?session=S06`

Capture screenshots under:

- `screenshots/mentor-s06-shadcn-dashboard.png`
- `screenshots/student-s06-shadcn-dashboard.png`

Check browser console for JS errors.

### Phase 8 — Verification

Run:

```bash
npm test -- src/test/lesson-workspace-route.test.ts src/test/lesson-workspace-data.test.ts src/test/stage-one-curriculum.test.ts
npm run check:contracts
npm run build
```

Expected result:

- all route/data/curriculum tests pass
- full contracts pass
- build passes
- no browser console errors

## Files likely to change

Primary:

- `src/pages/lesson/LessonWorkspace.tsx`
- `src/test/lesson-workspace-route.test.ts`

New:

- `src/features/lesson-workspace/components/LessonDashboardShell.tsx`
- `src/features/lesson-workspace/components/LessonSidebar.tsx`
- `src/features/lesson-workspace/components/LessonTopBar.tsx`
- `src/features/lesson-workspace/components/MentorDashboard.tsx`
- `src/features/lesson-workspace/components/MentorTimeline.tsx`
- `src/features/lesson-workspace/components/MentorRunPanel.tsx`
- `src/features/lesson-workspace/components/MentorEvidencePanel.tsx`
- `src/features/lesson-workspace/components/MentorMasteryPanel.tsx`
- `src/features/lesson-workspace/components/MentorSupportRail.tsx`
- `src/features/lesson-workspace/components/TrackLensCards.tsx`
- `src/features/lesson-workspace/components/StudentDashboard.tsx`
- `src/features/lesson-workspace/components/StudentCurrentStepCard.tsx`
- `src/features/lesson-workspace/components/StudentQuestCard.tsx`
- `src/features/lesson-workspace/components/StudentStepList.tsx`
- `src/features/lesson-workspace/components/StudentHintPanel.tsx`
- `src/features/lesson-workspace/components/StudentSuccessRail.tsx`
- `src/features/lesson-workspace/components/StudentRewardCard.tsx`
- `src/features/lesson-workspace/components/BuildPreviewCard.tsx`
- `src/features/lesson-workspace/hooks/useLessonWorkspaceState.ts`
- possibly `src/features/lesson-workspace/lessonDashboardTypes.ts`

Maybe:

- `src/index.css` if adding Block Buddies design tokens/helper classes.
- `src/test/lesson-workspace-data.test.ts` only if state/data contract changes.

Avoid changing:

- runbook docs
- curriculum text
- `src/lib/lessonWorkspaceData.ts` unless a missing UI field is discovered

## Risks / tradeoffs

### Risk: shadcn defaults may feel too generic

Mitigation: use shadcn structure but keep Block Buddies identity via tokens, typography, Minecraft preview art, and selective neobrutalist shadows.

### Risk: component extraction breaks route tests

Mitigation: preserve visible text and accessible names. Tests should assert user-facing behavior, not internal components.

### Risk: sidebar component adds mobile behavior that affects snapshots

Mitigation: tests should query content by role/text rather than assuming always-visible sidebar at mobile widths.

### Risk: too-large refactor in one pass

Mitigation: do this in two implementation slices:

1. Mentor shell + mentor panels.
2. Student dashboard + state hook.

Or, if stricter safety is needed:

1. Extract components without visual changes.
2. Swap internals to shadcn primitives.
3. Polish layout and tokens.

## Recommended implementation order

Best next step:

1. Write RED tests for semantic shadcn dashboard behavior.
2. Extract `useLessonWorkspaceState`.
3. Build `LessonDashboardShell` with shadcn `Sidebar`.
4. Rebuild mentor panels with `Card`, `Tabs`, `RadioGroup`, `Badge`, `Progress`.
5. Rebuild student panels with `Card`, `Checkbox`, `Badge`, `Progress`, `Button`.
6. Run browser screenshots and verification.

This gives the dashboard a real product architecture while keeping the curriculum adapter intact.
