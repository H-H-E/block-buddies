import { sessionRunbooks } from "@/lib/curriculumData";
import type { SessionRunbook } from "@/lib/curriculumModel";

export type WorkspaceRoleId = "mentor" | "teacher" | "parent";

export type LessonWorkspaceStepStatus = "complete" | "active" | "ready" | "next";

export interface LessonWorkspaceStep {
  id: string;
  title: string;
  window: string;
  status: LessonWorkspaceStepStatus;
  note: string;
}

export interface StudentLessonAction {
  id: string;
  title: string;
  description: string;
}

export interface LessonWorkspaceContent {
  sessionId: string;
  sessionNumber: number;
  totalSessions: number;
  title: string;
  shortTitle: string;
  runbook: SessionRunbook;
  adultLessonSteps: LessonWorkspaceStep[];
  materials: string[];
  studentLessonActions: StudentLessonAction[];
  studentChecklist: string[];
  fallbackHints: string[];
  masteryChecks: Array<{ gate: string; adult: string; student: string }>;
  evidenceItems: string[];
  commonFailureSigns: string[];
  parentSummary: string;
  studentBuildTitle: string;
  studentGoal: string;
}

export const defaultLessonWorkspaceSessionId = "S03";

const defaultRunbook = sessionRunbooks.find((runbook) => runbook.sessionId === defaultLessonWorkspaceSessionId) ?? sessionRunbooks[2];

const titleCase = (value: string) =>
  value
    .split(" ")
    .filter(Boolean)
    .map((word) =>
      word.includes("/") ? word.toUpperCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
    )
    .join(" ");

const getSessionNumber = (sessionId: string) => Number.parseInt(sessionId.replace(/\D/g, ""), 10);

const getShortTitle = (runbook: SessionRunbook) => {
  const focusedObjective = runbook.objective
    .replace(/,?\s+and\s+[^,]+$/i, "")
    .replace(/\s+with\s+mentor\s+fade$/i, "")
    .replace(/[^a-z0-9]+/gi, " ");

  return titleCase(focusedObjective);
};

const getActionDescription = (step: string) => step.charAt(0).toUpperCase() + step.slice(1);

const createAdultLessonSteps = (runbook: SessionRunbook): LessonWorkspaceStep[] => {
  const [firstStep, secondStep, thirdStep] = runbook.coreQuestSteps;
  const stretchQuest = runbook.sideQuests.find((quest) => quest.tier === "stretch") ?? runbook.sideQuests[0];

  return [
    { id: "hook", title: "Hook", window: "0:00-5:00", status: "complete", note: runbook.hook },
    {
      id: "example",
      title: "Worked Example",
      window: "5:00-12:00",
      status: "complete",
      note: firstStep ?? "Model the session's first safe action.",
    },
    {
      id: "core",
      title: "Core Quest",
      window: "12:00-28:00",
      status: "active",
      note: runbook.objective,
    },
    {
      id: "fallback",
      title: "Side Quest / Fallback",
      window: "28:00-38:00",
      status: "ready",
      note: stretchQuest?.outcome ?? secondStep ?? "Use the fallback path if the learner is blocked.",
    },
    {
      id: "exit",
      title: "Exit Ticket",
      window: "38:00-45:00",
      status: "next",
      note: thirdStep ?? "Learner explains the session result in their own words.",
    },
  ];
};

const createStudentLessonActions = (runbook: SessionRunbook): StudentLessonAction[] => {
  const actionTitles = ["Watch the example", "Build your version", "Test and explain"];

  return runbook.coreQuestSteps.slice(0, 3).map((step, index) => ({
    id: `step-${index + 1}`,
    title: actionTitles[index] ?? `Step ${index + 1}`,
    description: getActionDescription(step),
  }));
};

const createMasteryChecks = (runbook: SessionRunbook) => [
  { gate: "Do", adult: runbook.masteryGateIds[0] ?? "Core task works", student: "Build it" },
  { gate: "Explain", adult: runbook.masteryGateIds[1] ?? "Learner states cause/effect", student: "Say why" },
  { gate: "Debug", adult: runbook.masteryGateIds[2] ?? "Learner fixes one seeded issue", student: "Fix one bug" },
];

const createEvidenceItems = (runbook: SessionRunbook) => [
  `Proof of ${runbook.coreQuestSteps.at(-1) ?? runbook.objective}`,
  `Learner explanation of ${runbook.objective.toLowerCase()}`,
  `Mastery notes for ${runbook.masteryGateIds.join(", ")}`,
];

const createCommonFailureSigns = (runbook: SessionRunbook) => [
  `Blocked on ${runbook.coreQuestSteps[0] ?? "the first core step"}`,
  `Cannot verify ${runbook.coreQuestSteps.at(-1) ?? "the final output"}`,
  `Needs fallback: ${runbook.fallbackSteps[0] ?? "mentor-guided support"}`,
];

const createMaterials = (runbook: SessionRunbook) => [
  `${runbook.sessionId} runbook`,
  "Learner workspace",
  "Mastery evidence checklist",
  "Fallback path guide",
];

const createParentSummary = (runbook: SessionRunbook) =>
  `Today Maya worked on ${runbook.objective.toLowerCase()}. She practiced ${runbook.coreQuestSteps[0]?.toLowerCase() ?? "the core task"} and captured evidence for the session goal.`;

const createStudentBuildTitle = (runbook: SessionRunbook) => titleCase(runbook.coreQuestSteps[0] ?? runbook.objective);

export const lessonWorkspaceSessions = sessionRunbooks.map((runbook) => {
  const shortTitle = getShortTitle(runbook);

  return {
    sessionId: runbook.sessionId,
    sessionNumber: getSessionNumber(runbook.sessionId),
    title: `${runbook.sessionId} ${shortTitle}`,
    shortTitle,
    objective: runbook.objective,
  };
});

export function resolveLessonWorkspaceRunbook(sessionId?: string | null): SessionRunbook {
  const normalizedSessionId = sessionId?.trim().toUpperCase();

  return sessionRunbooks.find((runbook) => runbook.sessionId === normalizedSessionId) ?? defaultRunbook;
}

export function resolveLessonWorkspaceContent(sessionId?: string | null): LessonWorkspaceContent {
  const runbook = resolveLessonWorkspaceRunbook(sessionId);
  const shortTitle = getShortTitle(runbook);
  const sessionNumber = getSessionNumber(runbook.sessionId);

  return {
    sessionId: runbook.sessionId,
    sessionNumber,
    totalSessions: sessionRunbooks.length,
    title: `${runbook.sessionId} ${shortTitle}`,
    shortTitle,
    runbook,
    adultLessonSteps: createAdultLessonSteps(runbook),
    materials: createMaterials(runbook),
    studentLessonActions: createStudentLessonActions(runbook),
    studentChecklist: runbook.coreQuestSteps,
    fallbackHints: runbook.fallbackSteps,
    masteryChecks: createMasteryChecks(runbook),
    evidenceItems: createEvidenceItems(runbook),
    commonFailureSigns: createCommonFailureSigns(runbook),
    parentSummary: createParentSummary(runbook),
    studentBuildTitle: createStudentBuildTitle(runbook),
    studentGoal: runbook.objective,
  };
}

export const lessonWorkspaceRunbook = resolveLessonWorkspaceRunbook(defaultLessonWorkspaceSessionId);
export const defaultLessonWorkspaceContent = resolveLessonWorkspaceContent(defaultLessonWorkspaceSessionId);

export const workspaceRoles: Array<{
  id: WorkspaceRoleId;
  label: string;
  summary: string;
  emphasis: string;
}> = [
  {
    id: "mentor",
    label: "Mentor",
    summary: "Run the live session and collect mastery evidence.",
    emphasis: "Script prompts, fallback timing, and next-session condition.",
  },
  {
    id: "teacher",
    label: "Teacher",
    summary: "Review curriculum alignment and evidence quality.",
    emphasis: "Standards, artifacts, and intervention notes.",
  },
  {
    id: "parent",
    label: "Parent",
    summary: "See progress in family-safe language.",
    emphasis: "What happened, what was learned, and how to support at home.",
  },
];

export const adultLessonSteps = defaultLessonWorkspaceContent.adultLessonSteps;

export const trackExamples = [
  {
    track: "A",
    name: "Visualist",
    title: "Light Gate Indicator",
    goal: "Create a visible signal that turns on only when input is true.",
    keyBlocks: ["Redstone torch", "Lamp", "Block"],
  },
  {
    track: "B",
    name: "Mechanist",
    title: "Automatic Door",
    goal: "Build a door that opens with a button and closes after delay.",
    keyBlocks: ["Button", "Redstone", "Repeater", "Door"],
  },
  {
    track: "C",
    name: "Operator",
    title: "Timed Dropper",
    goal: "Make an item dropper activate on a controlled cycle.",
    keyBlocks: ["Dropper", "Hopper", "Repeater", "Comparator"],
  },
];

export const masteryChecks = defaultLessonWorkspaceContent.masteryChecks;

export const evidenceItems = defaultLessonWorkspaceContent.evidenceItems;

export const commonFailureSigns = defaultLessonWorkspaceContent.commonFailureSigns;

export const studentLessonActions = defaultLessonWorkspaceContent.studentLessonActions;

export const studentChecklist = defaultLessonWorkspaceContent.studentChecklist;

export const fallbackHints = defaultLessonWorkspaceContent.fallbackHints;
