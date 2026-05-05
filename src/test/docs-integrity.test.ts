import { describe, expect, it } from "vitest";
import fs from "node:fs";
import path from "node:path";

const DOCS_DIR = path.resolve(process.cwd(), "docs");

function readMarkdownFiles(dir: string): Array<{ rel: string; content: string }> {
  const files: Array<{ rel: string; content: string }> = [];

  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const stat = fs.statSync(full);

    if (stat.isDirectory()) {
      files.push(...readMarkdownFiles(full));
    } else if (name.endsWith(".md")) {
      files.push({
        rel: path.relative(process.cwd(), full),
        content: fs.readFileSync(full, "utf8"),
      });
    }
  }

  return files;
}

describe("docs integrity", () => {
  const docs = readMarkdownFiles(DOCS_DIR);

  it("uses repo-relative paths instead of machine-local absolute paths", () => {
    for (const doc of docs) {
      expect(doc.content, `${doc.rel} contains a machine-local absolute path`).not.toMatch(
        /\/Users\/[^/\s)]+\/[^)\s`]*/,
      );
    }
  });

  it("contains at most one canonical-reference section per document", () => {
    for (const doc of docs) {
      const count = doc.content.match(/^## Canonical References?$/gm)?.length ?? 0;

      expect(count, `${doc.rel} repeats its canonical-reference section`).toBeLessThanOrEqual(1);
    }
  });
});
