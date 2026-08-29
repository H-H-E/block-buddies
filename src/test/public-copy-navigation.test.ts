import { describe, expect, it } from "vitest";
import fs from "node:fs";
import path from "node:path";

const PUBLIC_COPY_FILES = [
  "src/pages/About.tsx",
  "src/pages/ForParents.tsx",
  "src/pages/ForTeens.tsx",
  "src/pages/ForMentors.tsx",
  "src/components/home/ValuePropsSection.tsx",
  "src/components/home/HowItWorksSection.tsx",
  "src/components/home/TestimonialsSection.tsx",
  "src/components/layout/Navbar.tsx",
  "src/components/layout/Footer.tsx",
];

const read = (relativePath: string) =>
  fs.readFileSync(path.resolve(process.cwd(), relativePath), "utf8").toLowerCase();

describe("public copy and navigation guardrails", () => {
  it("does not publish placeholder identities or unsupported outcome promises", () => {
    const copy = PUBLIC_COPY_FILES.map(read).join("\n");

    for (const phrase of [
      "founder name",
      "team member",
      "partner org",
      "100% free",
      "donations and grants",
      "service hours",
      "letter of recommendation",
      "review them weekly",
      "get back to you fast",
      "vetted teen mentors",
    ]) {
      expect(copy, `public copy contains unsupported phrase: ${phrase}`).not.toContain(phrase);
    }
  });

  it("keeps the public promise Minecraft-first and avoids fake controls", () => {
    const copy = PUBLIC_COPY_FILES.map(read).join("\n");

    expect(copy).toContain("minecraft-first");
    expect(copy).toContain("optional coding or math connections");
    expect(copy).not.toContain("learn to code");
    expect(copy).not.toContain("href=\"#\"");
    expect(copy).not.toContain("<form");
    expect(copy).not.toContain("subscribe");
    expect(copy).not.toContain("privacy policy");
    expect(copy).not.toContain("terms of service");
  });

  it("makes current modules discoverable while labeling legacy workspaces", () => {
    const navbar = read("src/components/layout/Navbar.tsx");
    const footer = read("src/components/layout/Footer.tsx");

    expect(navbar).toContain("{ name: 'modules', path: '/modules' }");
    expect(navbar).toContain("legacy curriculum");
    expect(navbar).toContain("legacy lesson workspace");
    expect(navbar.match(/navlinks\.map/g)?.length).toBe(2);
    expect(footer).toContain("{ name: 'modules', path: '/modules' }");
    expect(footer).toContain("legacy lesson workspace");
  });
});
