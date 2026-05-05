import { sessionRunbooks } from "@/lib/curriculumData";

export type WorkspaceRoleId = "mentor" | "teacher" | "parent";

export const lessonWorkspaceRunbook = sessionRunbooks.find((runbook) => runbook.sessionId === "S03") ?? sessionRunbooks[2];

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

export const adultLessonSteps = [
  { id: "hook", title: "Hook", window: "0:00-5:00", status: "complete", note: "Show the finished automatic door." },
  { id: "example", title: "Worked Example", window: "5:00-12:00", status: "complete", note: "Model one button-to-door signal path." },
  { id: "core", title: "Core Quest", window: "12:00-28:00", status: "active", note: "Learner builds one starter logic artifact." },
  { id: "fallback", title: "Side Quest / Fallback", window: "28:00-38:00", status: "ready", note: "Stretch if fluent; mini-win if blocked." },
  { id: "exit", title: "Exit Ticket", window: "38:00-45:00", status: "next", note: "Learner explains why the signal works." },
];

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

export const masteryChecks = [
  { gate: "Do", adult: "Starter artifact works", student: "Build it" },
  { gate: "Explain", adult: "Learner states cause/effect", student: "Say why" },
  { gate: "Debug", adult: "Learner fixes one seeded issue", student: "Fix one bug" },
];

export const evidenceItems = [
  "Screenshot of completed build",
  "Short video or live demo proof",
  "Learner explanation in their own words",
];

export const commonFailureSigns = [
  "Circuit does not activate",
  "Signal does not reach output",
  "Delay is too short or loops",
  "Incorrect comparator or repeater use",
];

export const studentLessonActions = [
  { id: "watch", title: "Watch the example", description: "See how the signal works step by step." },
  { id: "build", title: "Build your version", description: "Recreate the automatic door in your world." },
  { id: "test", title: "Test and explain", description: "Make it work and tell why it works." },
];

export const studentChecklist = [
  "Place the button",
  "Connect redstone",
  "Add the repeater",
  "Test the door",
  "Explain the signal",
];

export const fallbackHints = [
  "Look for a missing redstone connection.",
  "Check whether the repeater points toward the door.",
  "Ask your mentor to model one step, then try the next one.",
];
