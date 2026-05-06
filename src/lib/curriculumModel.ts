export type FluencyLevel = 0 | 1 | 2;
export type Archetype = "A" | "B" | "C";
export type TrackId = "core" | "visualist" | "mechanist" | "operator";
export type ProfileConfidence = "high" | "medium" | "low";

export interface MasteryGate {
  id: string;
  doCriterion: string;
  explainCriterion: string;
  debugCriterion: string;
  passRule: "do_plus_one";
}

export interface SideQuest {
  id: string;
  tier: "stretch" | "expert";
  unlockMinFluency: FluencyLevel;
  unlockGateIds: string[];
  durationMin: number;
  outcome: string;
}

export interface SessionRunbook {
  sessionId: string;
  track: TrackId;
  objective: string;
  prerequisites: string[];
  hook: string;
  coreQuestSteps: string[];
  sideQuests: SideQuest[];
  fallbackSteps: string[];
  masteryGateIds: string[];
}

export type CurriculumStage = "core-v2" | "modpack-lab";
export type EvidenceItemType = "screenshot" | "text" | "mentorNote" | "artifact" | "diff";
export type TechnicalRiskLevel = "low" | "medium" | "high";

export interface StructuredQuest {
  title: string;
  steps: string[];
  successCriteria: string;
}

export interface StructuredTrackExample {
  label: string;
  example: string;
  debugTarget: string;
}

export interface StructuredMasteryGate {
  criteria: string;
  evidence: string;
  levels: Array<"notYet" | "withSupport" | "independent">;
}

export interface StructuredMasteryGates {
  do: StructuredMasteryGate;
  explain: StructuredMasteryGate;
  debug: StructuredMasteryGate;
}

export interface EvidenceItem {
  type: EvidenceItemType;
  label: string;
  gate?: "do" | "explain" | "debug";
}

export interface ModpackLabMetadata {
  requiredProfile: string;
  minecraftVersion: string;
  loader: string;
  packVersion: string;
  approvedMods: string[];
  requiredFiles: string[];
  knownGoodTest: string;
  knownBrokenState: string;
  resetInstructions: string;
  technicalRiskLevel: TechnicalRiskLevel;
  deviceRequirements: string;
  doNotTroubleshootBeyond: string;
  packReadinessChecks: string[];
}

export interface StageTwoModpackSession {
  sessionId: string;
  stage: "modpack-lab";
  sequenceNumber: number;
  title: string;
  shortTitle: string;
  estimatedMinutes: number;
  coreConcept: string;
  objective: string;
  studentMissionText: string;
  mentorFraming: string;
  earlyWin: StructuredQuest;
  coreQuest: StructuredQuest;
  trackExamples: {
    visualist: StructuredTrackExample;
    mechanist: StructuredTrackExample;
    operator: StructuredTrackExample;
  };
  sideQuests: SideQuest[];
  masteryGates: StructuredMasteryGates;
  commonFailurePoints: string[];
  fallbackSteps: string[];
  hintLadder: string[];
  exitTicket: {
    prompt: string;
    acceptedFormats: string[];
  };
  evidenceItems: EvidenceItem[];
  parentSummaryTemplate: string;
  studentChecklist: string[];
  modpackLab: ModpackLabMetadata;
}

export interface CurriculumPhase {
  phase: number;
  title: string;
  subtitle: string;
  color: "primary" | "secondary" | "accent" | "gold";
  description: string;
  objectives: string[];
  activities: { name: string; description: string }[];
  skills: string[];
  standards: string;
}

export interface TrackOverview {
  id: Exclude<TrackId, "core">;
  name: string;
  subtitle: string;
  description: string;
  focus: string[];
}

export interface RoutingProfile {
  profileCode: string;
  fluency: FluencyLevel;
  archetype: Archetype;
  profileConfidence: ProfileConfidence;
  reassessmentTriggerFlags: string[];
  mentorMismatchFlag: boolean;
}
