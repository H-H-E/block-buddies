import { describe, expect, it } from "vitest";
import fs from "node:fs";
import path from "node:path";

const RUNBOOK_DIR = path.resolve(process.cwd(), "docs/runbooks");
const REQUIRED_FRONTMATTER_KEYS = [
  "session_id",
  "track",
  "fluency_range",
  "archetype",
  "duration_minutes",
  "prerequisites",
  "mastery_gate_ids",
  "fallback_path",
];

function readRunbookFiles(): string[] {
  return fs
    .readdirSync(RUNBOOK_DIR)
    .filter((name) => name.endsWith(".md"))
    .sort();
}

function extractFrontmatter(content: string): string {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  return match?.[1] ?? "";
}

describe("runbook schema", () => {
  it("contains exactly 8 canonical runbooks", () => {
    const files = readRunbookFiles();
    expect(files).toHaveLength(8);
  });

  it("enforces required frontmatter keys", () => {
    const files = readRunbookFiles();

    for (const file of files) {
      const content = fs.readFileSync(path.join(RUNBOOK_DIR, file), "utf8");
      const fm = extractFrontmatter(content);

      expect(fm.length, `${file} missing frontmatter`).toBeGreaterThan(0);
      for (const key of REQUIRED_FRONTMATTER_KEYS) {
        expect(fm.includes(`${key}:`), `${file} missing ${key}`).toBe(true);
      }
    }
  });

  it("contains required runbook sections", () => {
    const files = readRunbookFiles();
    const requiredSections = [
      "## Objective",
      "## Loop Plan",
      "## Early Win",
      "## Tier 1 Core Quest",
      "## Tier 2 Stretch Side Quest",
      "## Tier 3 Expert Side Quest",
      "## Fallback Path",
      "## Mastery Gates",
    ];

    for (const file of files) {
      const content = fs.readFileSync(path.join(RUNBOOK_DIR, file), "utf8");
      for (const section of requiredSections) {
        expect(content.includes(section), `${file} missing ${section}`).toBe(true);
      }
    }
  });
});
