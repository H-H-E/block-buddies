import { describe, expect, it } from "vitest";
import fs from "node:fs";
import path from "node:path";

describe("resource hub route", () => {
  const appSource = fs.readFileSync(path.resolve(process.cwd(), "src/App.tsx"), "utf8");

  it("lazy-loads the internal resource hub page", () => {
    expect(appSource).toContain('lazy(() => import("./pages/ResourceHub"))');
  });

  it("exposes the internal resource hub route", () => {
    expect(appSource).toContain('path="/resource-hub"');
  });
});
