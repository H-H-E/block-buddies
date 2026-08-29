// Canonical module library - loaded from content/modules/** (single source of truth).
// Legacy curriculum (curriculumData.ts) remains for the advanced pathway only.

import joinMoveLookTalk from "@/../content/modules/foundations/join-move-look-talk.json";
import hotbarInventoryTools from "@/../content/modules/foundations/hotbar-inventory-tools.json";
import tinyTutorialRemix from "@/../content/modules/foundations/tiny-tutorial-remix.json";
import dreamHouseBuild from "@/../content/modules/building/dream-house-build.json";
import animalFarmStarted from "@/../content/modules/survival/animal-farm-started.json";
import storyStageBuild from "@/../content/modules/storytelling/story-stage-build.json";

export interface ModuleAgeBand {
  min: number;
  max: number;
  target: number;
}

export interface ModuleFlowStep {
  phase: string;
  minutes: string;
  mentorMoves: string[];
  childAction: string;
}

export interface LearnerCue {
  cueText: string;
  action: string;
  iconHint?: string;
}

export interface ChoicePoint {
  prompt: string;
  options: string[];
}

export interface CommonProblem {
  problem: string;
  fix: string;
}

export interface ModuleReview {
  playtested: boolean;
  lastReviewed: string;
  notes: string;
}

export interface BBModule {
  id: string;
  revision: number;
  status: "draft" | "needs-assets" | "needs-review" | "published";
  title: string;
  shortChildTitle: string;
  ageBand: ModuleAgeBand;
  durationMinutes: { min: number; max: number };
  outcome: string;
  optionalConnections: string[];
  editions: Array<"bedrock" | "java">;
  platforms: string[];
  inputMethods: Array<"touch" | "controller" | "keyboard-mouse">;
  testedVersions: string[];
  deliveryModes: Array<"solo_guided" | "shared_world">;
  multiplayerRequirements: string;
  knownIncompatibilities: string[];
  prerequisites: string[];
  interests: string[];
  setup: { guardianSteps: string[]; mentorPreflight: string[] };
  flow: ModuleFlowStep[];
  mentorScript: { openingLines: string[]; keyPhrases: string[] };
  learnerCues: LearnerCue[];
  mediaReferences: string[];
  sharedRoles: { childRole: string; mentorRole: string; rotationNotes: string };
  childChoicePoints: ChoicePoint[];
  commonProblems: CommonProblem[];
  hintLadder: string[];
  resetPath: string;
  soloFallback: string;
  evidenceOptions: string[];
  accessibilityOptions: string[];
  safetyRequirements: string[];
  parentSummaryTemplate?: string;
  nextModules: string[];
  review: ModuleReview;
  worldSpecification?: { mode: string; description: string };
}

export const pilotModules: BBModule[] = [
  joinMoveLookTalk,
  hotbarInventoryTools,
  tinyTutorialRemix,
  dreamHouseBuild,
  animalFarmStarted,
  storyStageBuild,
] as BBModule[];

export const foundationModules = pilotModules.filter((m) => m.prerequisites.length === 0 || m.id === "tiny-tutorial-remix");

export function getModule(id: string): BBModule | undefined {
  return pilotModules.find((m) => m.id === id);
}

export function modulesByInterest(interestId: string): BBModule[] {
  return pilotModules.filter((m) => m.interests.includes(interestId));
}
