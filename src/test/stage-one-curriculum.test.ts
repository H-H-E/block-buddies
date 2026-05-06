import { describe, expect, it } from "vitest";
import fs from "node:fs";
import path from "node:path";
import { sessionRunbooks } from "@/lib/curriculumData";

const RUNBOOK_DIR = path.resolve(process.cwd(), "docs/runbooks");
const STAGE_ONE_FILES = [
  "session-01-diagnostic-trust-win.md",
  "session-02-safety-backups-recovery.md",
  "session-03-track-onboarding.md",
  "session-04-foundation-build-debug.md",
  "session-05-extension-sidequest-unlocks.md",
  "session-06-troubleshooting-studio.md",
  "session-07-capstone-build-fade.md",
  "session-08-demo-reflection-verification.md",
];

const REQUIRED_STAGE_ONE_SECTIONS = [
  "## Objective",
  "## Loop Plan",
  "## Early Win",
  "## Tier 1 Core Quest",
  "## Track-Specific Worked Examples (A/B/C)",
  "## Tier 2 Stretch Side Quest",
  "## Tier 3 Expert Side Quest",
  "## Branch Minute Budgets",
  "## Common Failure Points",
  "## Fallback Path",
  "## Hint Ladder",
  "## Mastery Gates",
  "## Session Artifact Checklist",
  "## Evidence Items",
  "## Accessibility Notes",
  "## Exit Ticket",
  "## Parent-Safe Summary",
  "## Student Checklist",
  "## Session Log Fields",
  "## Canonical References",
];

describe("Stage 1 Core curriculum", () => {
  it("has complete S01-S08 mentor runbooks with pilot-ready sections", () => {
    for (const file of STAGE_ONE_FILES) {
      const content = fs.readFileSync(path.join(RUNBOOK_DIR, file), "utf8");

      for (const section of REQUIRED_STAGE_ONE_SECTIONS) {
        expect(content, `${file} missing ${section}`).toContain(section);
      }

      expect(content, `${file} missing 7-minute hard-cap policy`).toContain("7");
      expect(content, `${file} missing pass/support-pass rule`).toContain("pass/support-pass");
      expect(content, `${file} missing parent-safe language`).toContain("Today your child");
    }
  });

  it("exports complete S01-S08 app runbook data with side quests and fallbacks", () => {
    expect(sessionRunbooks.map((session) => session.sessionId)).toEqual([
      "S01",
      "S02",
      "S03",
      "S04",
      "S05",
      "S06",
      "S07",
      "S08",
    ]);

    for (const session of sessionRunbooks) {
      expect(session.track).toBe("core");
      expect(session.objective.length).toBeGreaterThan(20);
      expect(session.coreQuestSteps.length).toBeGreaterThanOrEqual(3);
      expect(session.sideQuests.map((quest) => quest.tier)).toEqual(["stretch", "expert"]);
      expect(session.fallbackSteps.length).toBeGreaterThanOrEqual(2);
      expect(session.masteryGateIds).toEqual([
        `MG-${session.sessionId}-DO`,
        `MG-${session.sessionId}-EXPLAIN`,
        `MG-${session.sessionId}-DEBUG`,
      ]);
    }
  });
});
