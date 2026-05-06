import { describe, expect, it } from "vitest";
import fs from "node:fs";
import path from "node:path";

const STAGE_THREE_DIR = path.resolve(process.cwd(), "docs/runbooks/stage-3");
const STAGE_THREE_FILES = [
  "session-17-client-server-or-both.md",
  "session-18-build-the-server-pack.md",
  "session-19-run-a-local-dedicated-server.md",
  "session-20-server-files-world-state-configs.md",
  "session-21-whitelist-operators-player-access.md",
  "session-22-plugins-mods-server-services.md",
  "session-23-console-and-logs.md",
  "session-24-backup-and-restore-drill.md",
  "session-25-private-server-lab-capstone.md",
];

const REQUIRED_FRONTMATTER = [
  "session_id:",
  "stage: server-pack-bridge",
  "track: core",
  "fluency_range:",
  "archetype:",
  "duration_minutes:",
  "prerequisites:",
  "mastery_gate_ids:",
  "fallback_path:",
  "prepared_environment:",
  "allowed_network_scope:",
  "reset_instructions:",
  "do_not_troubleshoot_beyond:",
];

const REQUIRED_SECTIONS = [
  "## Stage 3 Server-Pack Contract",
  "## Safety Boundary",
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

describe("Stage 3 Server-Pack Bridge curriculum", () => {
  it("has complete S17-S25 canonical runbooks with bounded private-server lab rules", () => {
    expect(fs.readdirSync(STAGE_THREE_DIR).filter((name) => name.endsWith(".md")).sort()).toEqual(STAGE_THREE_FILES);

    for (const file of STAGE_THREE_FILES) {
      const content = fs.readFileSync(path.join(STAGE_THREE_DIR, file), "utf8");

      for (const required of REQUIRED_FRONTMATTER) {
        expect(content, `${file} missing ${required}`).toContain(required);
      }
      for (const section of REQUIRED_SECTIONS) {
        expect(content, `${file} missing ${section}`).toContain(section);
      }

      expect(content, `${file} must forbid random downloads`).toContain("No learner-selected downloads");
      expect(content, `${file} must stay local/private`).toMatch(/local|private/i);
      expect(content, `${file} missing bounded troubleshooting`).toContain("10 minutes");
      expect(content, `${file} missing parent-safe language`).toContain("Today your child");
      expect(content, `${file} should not tell learners to open router ports`).not.toMatch(/port forwarding|open router ports/i);
    }
  });
});
