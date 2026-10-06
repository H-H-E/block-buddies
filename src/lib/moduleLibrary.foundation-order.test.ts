import { describe, expect, it } from "vitest";
import { foundationModules, getModule, pilotModules } from "./moduleLibrary";

describe("canonical beginner foundations", () => {
  it("includes inventory between movement and tutorial remix", () => {
    expect(foundationModules.map((module) => module.id)).toEqual([
      "join-move-look-talk",
      "hotbar-inventory-tools",
      "tiny-tutorial-remix",
    ]);
  });

  it("keeps interest projects outside the foundation group", () => {
    expect(pilotModules).toHaveLength(6);
    expect(foundationModules).not.toContain(getModule("dream-house-build"));
  });

  it("does not publish an uncaptured reference lesson", () => {
    const module = getModule("tiny-tutorial-remix");
    expect(module?.mediaReferences).toContain("demo:meetup-marker");
    expect(module?.status).toBe("needs-assets");
    expect(module?.review.playtested).toBe(false);
  });
});
