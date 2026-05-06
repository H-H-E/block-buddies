import { useMemo, useState } from "react";
import type { LessonWorkspaceContent, StudentLessonAction } from "@/lib/lessonWorkspaceData";

export interface LessonWorkspaceState {
  activeActionIndex: number;
  activeAction: StudentLessonAction;
  visibleHintCount: number;
  revealedHints: string[];
  missingRewardGate: string;
  gate: string;
  canAdvance: boolean;
  advanceStep: () => void;
  selectStep: (index: number) => void;
  revealNextHint: () => void;
}

const INITIAL_ACTION_INDEX = 1;
const INITIAL_VISIBLE_HINT_COUNT = 3;

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

export function useLessonWorkspaceState(workspace: LessonWorkspaceContent): LessonWorkspaceState {
  const maxActionIndex = Math.max(workspace.studentLessonActions.length - 1, 0);
  const [activeActionIndex, setActiveActionIndex] = useState(() => clamp(INITIAL_ACTION_INDEX, 0, maxActionIndex));
  const [visibleHintCount, setVisibleHintCount] = useState(() => Math.min(INITIAL_VISIBLE_HINT_COUNT, workspace.fallbackHints.length));

  const safeActiveActionIndex = clamp(activeActionIndex, 0, maxActionIndex);
  const activeAction = workspace.studentLessonActions[safeActiveActionIndex] ?? workspace.studentLessonActions[0] ?? {
    id: "empty-step",
    title: "Start the quest",
    description: "Open the lesson runbook and begin with the first safe action.",
  };
  const safeVisibleHintCount = clamp(visibleHintCount, 0, workspace.fallbackHints.length);
  const revealedHints = useMemo(
    () => workspace.fallbackHints.slice(0, safeVisibleHintCount),
    [safeVisibleHintCount, workspace.fallbackHints],
  );
  const missingRewardGate = safeActiveActionIndex >= 2 ? "Explain" : "Debug";

  return {
    activeActionIndex: safeActiveActionIndex,
    activeAction,
    visibleHintCount: safeVisibleHintCount,
    revealedHints,
    missingRewardGate,
    gate: missingRewardGate,
    canAdvance: safeActiveActionIndex < maxActionIndex,
    advanceStep: () => setActiveActionIndex((current) => clamp(current + 1, 0, maxActionIndex)),
    selectStep: (index: number) => setActiveActionIndex(clamp(index, 0, maxActionIndex)),
    revealNextHint: () => setVisibleHintCount((current) => clamp(current + 1, 0, workspace.fallbackHints.length)),
  };
}
