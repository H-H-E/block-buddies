import { describe, expect, it } from "vitest";
import { curriculumPhases, sessionRunbooks, trackOverviews } from "@/lib/curriculumData";

describe("curriculum consistency", () => {
  it("keeps canonical counts", () => {
    expect(curriculumPhases).toHaveLength(4);
    expect(trackOverviews).toHaveLength(3);
    expect(sessionRunbooks).toHaveLength(8);
  });

  it("contains a complete S01-S08 session set", () => {
    const ids = sessionRunbooks.map((item) => item.sessionId);
    expect(ids).toEqual(["S01", "S02", "S03", "S04", "S05", "S06", "S07", "S08"]);
  });

  it("requires mastery gate references per runbook", () => {
    for (const runbook of sessionRunbooks) {
      expect(runbook.masteryGateIds.length).toBeGreaterThanOrEqual(3);
      expect(runbook.fallbackSteps.length).toBeGreaterThan(0);
      expect(runbook.coreQuestSteps.length).toBeGreaterThan(0);
    }
  });
});
