import type {
  Archetype,
  FluencyLevel,
  ProfileConfidence,
  RoutingProfile,
  SideQuest,
  TrackId,
} from "@/lib/curriculumModel";

export interface ProfileCode {
  fluency: FluencyLevel;
  archetype: Archetype;
}

export interface MasteryResult {
  doPass: boolean;
  explainPass: boolean;
  debugPass: boolean;
}

export type NextSessionAction =
  | "advance"
  | "repeat_with_lower_scaffolding"
  | "start_with_debug_retrieval";

export const STRUGGLE_LIMIT_MINUTES: Record<FluencyLevel, number> = {
  0: 0.5,
  1: 2,
  2: 5,
};

export function struggleLimitMinutes(fluency: FluencyLevel): number {
  return STRUGGLE_LIMIT_MINUTES[fluency];
}

export function shouldIntervene(fluency: FluencyLevel, blockedMinutes: number): boolean {
  return blockedMinutes >= struggleLimitMinutes(fluency);
}

export function shouldSwitchToRecovery(blockedMinutes: number): boolean {
  return blockedMinutes >= 7;
}

export function canPassSession(result: MasteryResult): boolean {
  return result.doPass && (result.explainPass || result.debugPass);
}

export function nextSessionAction(result: MasteryResult): NextSessionAction {
  if (!result.doPass) {
    return "repeat_with_lower_scaffolding";
  }

  if (!result.debugPass) {
    return "start_with_debug_retrieval";
  }

  return "advance";
}

export function unlocksSideQuest(sideQuest: SideQuest, fluency: FluencyLevel, passedGateIds: string[]): boolean {
  if (fluency < sideQuest.unlockMinFluency) {
    return false;
  }

  return sideQuest.unlockGateIds.every((gateId) => passedGateIds.includes(gateId));
}

export function trackFromArchetype(archetype: Archetype): Exclude<TrackId, "core"> {
  if (archetype === "A") return "visualist";
  if (archetype === "B") return "mechanist";
  return "operator";
}

export function profileCodeLabel(profile: ProfileCode): string {
  return `${profile.fluency}-${profile.archetype}`;
}

export function createRoutingProfile(
  profile: ProfileCode,
  profileConfidence: ProfileConfidence,
  reassessmentTriggerFlags: string[] = [],
  mentorMismatchFlag = false
): RoutingProfile {
  return {
    profileCode: profileCodeLabel(profile),
    fluency: profile.fluency,
    archetype: profile.archetype,
    profileConfidence,
    reassessmentTriggerFlags,
    mentorMismatchFlag,
  };
}

export function needsReassessment(profile: RoutingProfile): boolean {
  return profile.profileConfidence === "low" || profile.reassessmentTriggerFlags.length > 0;
}
