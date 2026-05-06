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
  exitTicket: string;
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

interface StageOneRunbookDetails {
  commonFailureSigns: string[];
  hintLadder: string[];
  evidenceItems: string[];
  exitTicket: string;
  parentSummary: string;
  studentChecklist: string[];
}

const stageOneRunbookDetails: Record<string, StageOneRunbookDetails> = {
  S01: {
    commonFailureSigns: [
      "Learner treats the diagnostic like a test instead of a setup mission.",
      "Learner cannot find the Minecraft folder without wandering through unrelated folders.",
      "Learner gives self-report confidence that does not match observed behavior.",
      "Learner gets stuck on typing or file naming instead of the underlying navigation idea.",
    ],
    hintLadder: [
      "What are we trying to find or create right now?",
      "Which folder or filename gives us the strongest clue?",
      "Compare this path to the mentor example. What is different?",
      "Use the prepared path card; read one folder at a time.",
      "Mentor models one safe navigation step; learner repeats the next step.",
    ],
    evidenceItems: [
      "Screenshot or file proof that S01_first_win.txt exists and opens.",
      "Profile code plus confidence rating.",
      "Mentor note with one observed fluency behavior and one observed archetype behavior.",
    ],
    exitTicket: "My profile is __ because __. One thing I can do next time is __.",
    parentSummary:
      "Today your child completed a confidence-first diagnostic session. They created a visible first-win artifact, practiced safe file navigation, and helped the mentor identify the right level of support and project pathway for future sessions.",
    studentChecklist: [
      "I made my first-win file.",
      "I found or followed the correct folder path.",
      "I shared what kind of Minecraft task feels most interesting to me.",
      "I fixed or checked one small mistake.",
      "I know what my next session starts with.",
    ],
  },
  S02: {
    commonFailureSigns: [
      "Learner creates a backup but does not verify it opens.",
      "Backup names are vague, duplicated, or hard to connect to the change.",
      "Learner wants to keep editing after a mistake instead of restoring safely.",
      "Learner confuses backup creation with actual rollback.",
    ],
    hintLadder: [
      "Where is the safe copy?",
      "What name would help Future You understand this backup?",
      "Can we open the archive before trusting it?",
      "What changed after the controlled failure?",
      "Mentor models one restore step; learner completes the verification step.",
    ],
    evidenceItems: [
      "Named backup archive proof.",
      "Restore verification note or screenshot.",
      "Learner explanation of why backup naming and verification matter.",
      "Debug note for a misnamed, missing, or invalid backup.",
    ],
    exitTicket: "I backed up __. I tested the backup by __. I restored it when __.",
    parentSummary:
      "Today your child practiced safe technology habits by creating, checking, and restoring from a backup. They learned that good builders do not avoid mistakes; they prepare a safe recovery path before making changes.",
    studentChecklist: [
      "I made a named backup.",
      "I checked that the backup opens.",
      "I made one controlled change.",
      "I restored the safe version.",
      "I explained why backups matter.",
    ],
  },
  S03: {
    commonFailureSigns: [
      "Learner picks a track because it sounds cool but struggles with the task style.",
      "Learner copies the starter artifact without noticing the cause/effect rule.",
      "Track-specific tools introduce typing, path, wiring, or restart friction.",
      "Learner treats the first failed verification as proof they chose the wrong track.",
    ],
    hintLadder: [
      "Which path are you trying today: Visualist, Mechanist, or Operator?",
      "What is the smallest thing that should change when this works?",
      "Where does your artifact match the example? Where is it different?",
      "Use the starter artifact and change one safe part only.",
      "Mentor models the first verification step; learner runs the next test.",
    ],
    evidenceItems: [
      "Screenshot, state table, or config proof for the chosen starter artifact.",
      "Learner cause/effect explanation in their own words.",
      "Seeded mistake and fix result for path, wiring, or property value.",
    ],
    exitTicket: "My track today was __. My artifact worked when __. One cause/effect rule is __.",
    parentSummary:
      "Today your child tried a personalized Block Buddies pathway and completed a small starter project. They practiced noticing cause and effect in a visual, mechanical, or operator-style task, then fixed one guided mistake.",
    studentChecklist: [
      "I chose a starter path.",
      "I completed one starter artifact.",
      "I tested the artifact.",
      "I explained one cause/effect rule.",
      "I fixed one seeded mistake.",
    ],
  },
  S04: {
    commonFailureSigns: [
      "Learner changes several parts at once and loses the root cause.",
      "The foundation build works once but not repeatably.",
      "Learner can make the artifact work but cannot name the dependency relationship.",
      "Debugging turns into guessing instead of testing one difference.",
    ],
    hintLadder: [
      "What is the expected output?",
      "Which dependency has to be correct before this can work?",
      "What is the first part that still works?",
      "Change one thing, then test again.",
      "Mentor fixes one comparable example; learner fixes the matching issue in their build.",
    ],
    evidenceItems: [
      "Foundation artifact proof for the selected archetype.",
      "Dependency explanation in learner language.",
      "Seeded failure, smallest tested fix, and final verification evidence.",
    ],
    exitTicket: "My build depends on __. The bug was __. I fixed it by __.",
    parentSummary:
      "Today your child built a foundational Minecraft technology artifact and practiced debugging it one step at a time. They learned to connect a working result to the parts it depends on, then repaired a seeded issue with mentor support as needed.",
    studentChecklist: [
      "I built my foundation artifact.",
      "I tested that it works.",
      "I found one dependency.",
      "I fixed one seeded bug.",
      "I recorded proof that the fix worked.",
    ],
  },
  S05: {
    commonFailureSigns: [
      "Learner expands scope before the first extension works.",
      "Learner skips prediction and only reports what happened afterward.",
      "Extension affects a hidden dependency from the prior build.",
      "Learner resists reverting an unsafe or broken change.",
    ],
    hintLadder: [
      "What is the one feature we are adding?",
      "Before changing it, what do you predict will happen?",
      "What stayed the same and what changed?",
      "Can we return to the last working version?",
      "Mentor models one safe revert; learner verifies the restored state.",
    ],
    evidenceItems: [
      "Extension change note and live test proof.",
      "Prediction versus outcome comparison.",
      "Revert or repair evidence when the extension fails.",
    ],
    exitTicket: "I extended __ by changing __. I predicted __. The result was __.",
    parentSummary:
      "Today your child upgraded a prior project with one new feature. They practiced making a prediction, testing the result, and restoring a working state when a change was unsafe or did not behave as expected.",
    studentChecklist: [
      "I chose one extension.",
      "I predicted what it would do.",
      "I tested the extension.",
      "I compared prediction to result.",
      "I restored or fixed the build if needed.",
    ],
  },
  S06: {
    commonFailureSigns: [
      "Learner jumps to fixes before describing the symptom.",
      "Learner treats the first clue as the confirmed root cause.",
      "Open troubleshooting creates too many possible causes.",
      "Learner cannot reproduce the failure after fixing it once.",
    ],
    hintLadder: [
      "What should happen? What actually happened?",
      "Which clue is evidence and which is a guess?",
      "Can we eliminate one false cause?",
      "Can you reproduce the problem before fixing it again?",
      "Mentor models one diagnosis step; learner chooses the next evidence check.",
    ],
    evidenceItems: [
      "Fault scenario, root-cause statement, and fix proof.",
      "One eliminated false-cause note.",
      "Reproduce-and-re-fix evidence or mentor transcript.",
    ],
    exitTicket: "Expected: __. Actual: __. Cause: __. Fix: __.",
    parentSummary:
      "Today your child practiced structured troubleshooting. They compared expected behavior to actual behavior, used evidence to identify a root cause, and explained why their fix worked.",
    studentChecklist: [
      "I described expected vs actual behavior.",
      "I tested one likely cause.",
      "I eliminated one false cause.",
      "I fixed the issue.",
      "I explained why the fix worked.",
    ],
  },
  S07: {
    commonFailureSigns: [
      "Capstone scope grows beyond the session budget.",
      "Learner waits for mentor approval before every step despite readiness.",
      "Core function is unfinished because decoration or polish came first.",
      "Learner struggles to turn a working build into a clear demo story.",
    ],
    hintLadder: [
      "What is the smallest complete slice?",
      "What must work before anything gets fancy?",
      "Which step can you own without mentor help?",
      "What proof will show this slice works?",
      "Mentor helps cut scope once; learner completes the reduced slice.",
    ],
    evidenceItems: [
      "Scoped capstone target statement.",
      "Working slice screenshot, clip, or state proof.",
      "Architecture explanation and live bug/fix note.",
    ],
    exitTicket: "My capstone slice is __. It works by __. The next thing to test is __.",
    parentSummary:
      "Today your child began turning their skills into a small capstone project. They scoped a finishable slice, built evidence that it worked, and practiced taking more ownership while the mentor reduced support.",
    studentChecklist: [
      "I chose a small capstone slice.",
      "I built the core function first.",
      "I tested that it works.",
      "I explained one design choice.",
      "I fixed or noted one live issue.",
    ],
  },
  S08: {
    commonFailureSigns: [
      "Learner has a working artifact but struggles to explain the process.",
      "Presentation anxiety hides evidence of actual understanding.",
      "Learner lists features but not the problem/fix story.",
      "Final reflection becomes too vague to guide continuation.",
    ],
    hintLadder: [
      "What did you build?",
      "What problem did you face?",
      "What did you change to fix it?",
      "What skill from this project can move to a new project?",
      "Mentor asks one prompt at a time; learner completes the demo card.",
    ],
    evidenceItems: [
      "Working artifact proof from the final demo.",
      "Demo transcript or checklist covering goal, steps, problem, fix, and output.",
      "Concept-transfer reflection and independent next-project plan.",
    ],
    exitTicket: "I built __. I debugged __. I can use this skill next by __.",
    parentSummary:
      "Today your child completed their Stage 1 demo and reflection. They showed a working project, explained a problem they solved, and identified a next step for continued Minecraft-powered technology learning.",
    studentChecklist: [
      "I showed my working artifact.",
      "I explained the goal.",
      "I shared one problem I faced.",
      "I described how I fixed or would fix it.",
      "I chose a next project direction.",
    ],
  },
};

const createFallbackDetails = (runbook: SessionRunbook): StageOneRunbookDetails => ({
  commonFailureSigns: [
    `Blocked on ${runbook.coreQuestSteps[0] ?? "the first core step"}`,
    `Cannot verify ${runbook.coreQuestSteps.at(-1) ?? "the final output"}`,
    `Needs fallback: ${runbook.fallbackSteps[0] ?? "mentor-guided support"}`,
  ],
  hintLadder: runbook.fallbackSteps,
  evidenceItems: [
    `Proof of ${runbook.coreQuestSteps.at(-1) ?? runbook.objective}`,
    `Learner explanation of ${runbook.objective.toLowerCase()}`,
    `Mastery notes for ${runbook.masteryGateIds.join(", ")}`,
  ],
  exitTicket: "Learner explains what they built, tested, fixed, or would improve next.",
  parentSummary: `Today your child worked on ${runbook.objective.toLowerCase()}. They practiced ${runbook.coreQuestSteps[0]?.toLowerCase() ?? "the core task"} and captured evidence for the session goal.`,
  studentChecklist: runbook.coreQuestSteps,
});

const getRunbookDetails = (runbook: SessionRunbook) => stageOneRunbookDetails[runbook.sessionId] ?? createFallbackDetails(runbook);

const createMaterials = (runbook: SessionRunbook) => [
  `${runbook.sessionId} runbook`,
  "Learner workspace",
  "Mastery evidence checklist",
  "Fallback path guide",
];

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
  const details = getRunbookDetails(runbook);
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
    studentChecklist: details.studentChecklist,
    fallbackHints: details.hintLadder,
    masteryChecks: createMasteryChecks(runbook),
    evidenceItems: details.evidenceItems,
    commonFailureSigns: details.commonFailureSigns,
    parentSummary: details.parentSummary,
    exitTicket: details.exitTicket,
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
