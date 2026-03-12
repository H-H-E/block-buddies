import { describe, expect, it } from "vitest";
import fs from "node:fs";
import path from "node:path";

const PUBLIC_PAGES = [
  "src/pages/About.tsx",
  "src/pages/ForParents.tsx",
  "src/pages/ForTeens.tsx",
  "src/pages/ForMentors.tsx",
  "src/pages/Resources.tsx",
  "src/pages/Curriculum.tsx",
];

const RESTRICTED_TERMS = ["cynical", "we engineer failure", "for babies", "trojan horse concept"];

describe("public language policy", () => {
  it("does not use restricted phrases on public pages", () => {
    for (const rel of PUBLIC_PAGES) {
      const full = path.resolve(process.cwd(), rel);
      const content = fs.readFileSync(full, "utf8").toLowerCase();
      for (const term of RESTRICTED_TERMS) {
        expect(content.includes(term), `${rel} contains restricted phrase: ${term}`).toBe(false);
      }
    }
  });
});
