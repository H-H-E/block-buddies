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
