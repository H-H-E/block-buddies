import { describe, expect, it } from "vitest";
import fs from "node:fs";
import path from "node:path";

describe("route loading policy", () => {
  it("lazy-loads page routes instead of statically importing every page into the entry chunk", () => {
    const appSource = fs.readFileSync(path.resolve(process.cwd(), "src/App.tsx"), "utf8");

    expect(appSource).toContain("lazy(() => import(");
    expect(appSource).not.toMatch(/^import\s+\w+\s+from\s+["']\.\/pages\//m);
  });
});
