import { describe, expect, it } from "vitest";
import {
  canPassSession,
  nextSessionAction,
  profileCodeLabel,
  shouldIntervene,
  shouldSwitchToRecovery,
  struggleLimitMinutes,
  trackFromArchetype,
  unlocksSideQuest,
} from "@/lib/pedagogyEngine";
import { sessionRunbooks } from "@/lib/curriculumData";

describe("pedagogy engine rules", () => {
  it("enforces fluency intervention thresholds", () => {
    expect(struggleLimitMinutes(0)).toBe(0.5);
    expect(struggleLimitMinutes(1)).toBe(2);
    expect(struggleLimitMinutes(2)).toBe(5);

    expect(shouldIntervene(0, 0.5)).toBe(true);
    expect(shouldIntervene(1, 1.5)).toBe(false);
    expect(shouldIntervene(2, 5)).toBe(true);
  });

  it("enforces 7-minute hard cap", () => {
    expect(shouldSwitchToRecovery(6.99)).toBe(false);
    expect(shouldSwitchToRecovery(7)).toBe(true);
  });

  it("enforces mastery pass rule and follow-up behavior", () => {
    expect(canPassSession({ doPass: true, explainPass: false, debugPass: true })).toBe(true);
    expect(canPassSession({ doPass: true, explainPass: true, debugPass: false })).toBe(true);
    expect(canPassSession({ doPass: false, explainPass: true, debugPass: true })).toBe(false);

    expect(nextSessionAction({ doPass: false, explainPass: true, debugPass: true })).toBe(
      "repeat_with_lower_scaffolding"
    );
    expect(nextSessionAction({ doPass: true, explainPass: true, debugPass: false })).toBe(
      "start_with_debug_retrieval"
    );
    expect(nextSessionAction({ doPass: true, explainPass: false, debugPass: true })).toBe("advance");
  });

  it("routes profile archetype to track", () => {
    expect(trackFromArchetype("A")).toBe("visualist");
    expect(trackFromArchetype("B")).toBe("mechanist");
    expect(trackFromArchetype("C")).toBe("operator");
    expect(profileCodeLabel({ fluency: 0, archetype: "A" })).toBe("0-A");
  });

  it("unlocks side quests by fluency and gates", () => {
    const runbook = sessionRunbooks.find((r) => r.sessionId === "S03");
    expect(runbook).toBeTruthy();
    const stretch = runbook!.sideQuests.find((q) => q.tier === "stretch");
    const expert = runbook!.sideQuests.find((q) => q.tier === "expert");

    expect(unlocksSideQuest(stretch!, 1, [])).toBe(true);
    expect(unlocksSideQuest(expert!, 1, ["MG-S03-DO"])).toBe(false);
    expect(unlocksSideQuest(expert!, 2, [])).toBe(false);
    expect(unlocksSideQuest(expert!, 2, ["MG-S03-DO"])).toBe(true);
  });
});
