import { describe, expect, it } from "vitest";
import fs from "node:fs";
import path from "node:path";
import { stageTwoModpackSessions } from "@/lib/curriculumData";

const STAGE_TWO_DIR = path.resolve(process.cwd(), "docs/runbooks/stage-2");
const REQUIRED_STAGE_TWO_FRONTMATTER = [
  "session_id:",
  "stage: modpack-lab",
  "approved_profile:",
  "minecraft_version:",
  "loader:",
  "pack_version:",
  "approved_mods:",
  "required_files:",
  "known_good_test:",
  "known_broken_state:",
  "reset_instructions:",
  "do_not_troubleshoot_beyond:",
];

const REQUIRED_STAGE_TWO_SECTIONS = [
  "## Stage 2 Pack Contract",
  "## Do Not Let This Become Tech Support",
  "## Early Win",
  "## Tier 1 Core Quest",
  "## Track-Specific Worked Examples (A/B/C)",
  "## Fallback Path",
  "## Hint Ladder",
  "## Mastery Gates",
  "## Evidence Items",
  "## Parent-Safe Summary",
  "## Student Checklist",
];

function stageTwoRunbookFiles(): string[] {
  return fs.readdirSync(STAGE_TWO_DIR).filter((name) => name.endsWith(".md")).sort();
}

describe("Stage 2 Modpack Lab curriculum", () => {
  it("has complete S09-S16 canonical runbooks with modpack metadata", () => {
    const files = stageTwoRunbookFiles();
    expect(files).toEqual([
      "session-09-welcome-to-modded-minecraft.md",
      "session-10-recipe-radar.md",
      "session-11-resource-pack-remix.md",
      "session-12-config-lab.md",
      "session-13-rules-without-java.md",
      "session-14-dependency-dungeon.md",
      "session-15-contraption-or-automation-mod.md",
      "session-16-mini-modpack-capstone.md",
    ]);

    for (const file of files) {
      const content = fs.readFileSync(path.join(STAGE_TWO_DIR, file), "utf8");
      for (const required of REQUIRED_STAGE_TWO_FRONTMATTER) {
        expect(content, `${file} missing ${required}`).toContain(required);
      }
      for (const section of REQUIRED_STAGE_TWO_SECTIONS) {
        expect(content, `${file} missing ${section}`).toContain(section);
      }
      expect(content, `${file} allows random downloads`).toContain("No learner-selected downloads");
      expect(content, `${file} missing bounded troubleshooting`).toContain("10 minutes");
    }
  });

  it("exports typed Stage 2 session data without flattening modpack metadata", () => {
    expect(stageTwoModpackSessions.map((session) => session.sessionId)).toEqual([
      "S09",
      "S10",
      "S11",
      "S12",
      "S13",
      "S14",
      "S15",
      "S16",
    ]);

    for (const session of stageTwoModpackSessions) {
      expect(session.stage).toBe("modpack-lab");
      expect(session.trackExamples.visualist.example.length).toBeGreaterThan(0);
      expect(session.trackExamples.mechanist.example.length).toBeGreaterThan(0);
      expect(session.trackExamples.operator.example.length).toBeGreaterThan(0);
      expect(session.modpackLab.minecraftVersion).toBe("1.21.1");
      expect(session.modpackLab.loader).toBe("Fabric");
      expect(session.modpackLab.approvedMods.length).toBeGreaterThanOrEqual(3);
      expect(session.modpackLab.knownGoodTest.length).toBeGreaterThan(20);
      expect(session.modpackLab.resetInstructions.length).toBeGreaterThan(20);
      expect(session.modpackLab.doNotTroubleshootBeyond).toContain("10 minutes");
      expect(session.masteryGates.do.criteria.length).toBeGreaterThan(20);
      expect(session.masteryGates.explain.criteria.length).toBeGreaterThan(20);
      expect(session.masteryGates.debug.criteria.length).toBeGreaterThan(20);
      expect(session.parentSummaryTemplate).not.toMatch(/NeoForge|Fabric API|\.jar|crash log/i);
    }
  });
});
