import { describe, expect, it } from "vitest";
import fs from "node:fs";
import path from "node:path";

describe("lesson workspace routes", () => {
  const appSource = fs.readFileSync(path.resolve(process.cwd(), "src/App.tsx"), "utf8");

  it("lazy-loads the lesson workspace page", () => {
    expect(appSource).toContain('lazy(() => import("./pages/lesson/LessonWorkspace"))');
  });

  it("exposes adult and student lesson routes", () => {
    expect(appSource).toContain('path="/lesson"');
    expect(appSource).toContain('path="/lesson/student"');
  });
});
