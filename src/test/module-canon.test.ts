import { describe, expect, it } from "vitest";
import fs from "node:fs";
import path from "node:path";
import {
  pilotModules,
} from "@/lib/moduleLibrary";

const REPO_ROOT = path.resolve(process.cwd());
const CONTENT_DIR = path.join(REPO_ROOT, "content");
const MODULES_DIR = path.join(CONTENT_DIR, "modules");
const VIDEO_REGISTRY = path.join(CONTENT_DIR, "media", "videos.json");
const MODULE_SCHEMA = JSON.parse(
  fs.readFileSync(
    path.join(CONTENT_DIR, "schemas", "module.schema.json"),
    "utf8",
  ),
) as {
  required: string[];
};

function walkMarkdown(dir: string): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  return entries.flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walkMarkdown(full);
    return entry.isFile() && entry.name.endsWith(".md") ? [full] : [];
  });
}

function walkJson(dir: string): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  return entries.flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walkJson(full);
    return entry.isFile() && entry.name.endsWith(".json") ? [full] : [];
  });
}

function isLegacyDocument(file: string, text: string): boolean {
  if (!file.startsWith(path.join(REPO_ROOT, "docs"))) return false;
  const header = text.slice(0, 1200);
  return /(?:\bV2\b|LEGACY PATHWAY|STATUS:\s*(?:LEGACY|SUPERSEDED))/i.test(
    header,
  );
}

function isCandidateOnlyVideo(segment: Record<string, unknown>): boolean {
  return (
    segment.status === "candidate" &&
    typeof segment.note === "string" &&
    /CANDIDATE ONLY/i.test(segment.note)
  );
}

describe("pilot module library", () => {
  it("exposes exactly six pilot modules with unique ids", () => {
    expect(pilotModules).toHaveLength(6);
    expect(new Set(pilotModules.map((m) => m.id)).size).toBe(6);
  });

  it("satisfies required schema fields", () => {
    for (const mod of pilotModules) {
      const record = mod as unknown as Record<string, unknown>;
      for (const key of MODULE_SCHEMA.required) {
        expect(record[key], `${mod.id} missing ${key}`).toBeDefined();
      }
      expect(typeof mod.title).toBe("string");
      expect(typeof mod.outcome).toBe("string");
      expect(Array.isArray(mod.prerequisites)).toBe(true);
    }
  });

  it("resolves every prerequisite inside the library", () => {
    const ids = new Set(pilotModules.map((m) => m.id));
    for (const mod of pilotModules) {
      for (const prereq of mod.prerequisites ?? []) {
        expect(
          ids.has(prereq),
          `${mod.id} has unresolved prereq ${prereq}`,
        ).toBe(true);
      }
    }
  });
});

describe("v3 canon guards", () => {
  const staleAgePatterns = [
    { name: "9-12", pattern: /9\s*[-\u2013]\s*12/ },
    { name: "8-12", pattern: /8\s*[-\u2013]\s*12/ },
    { name: "14-17", pattern: /14\s*[-\u2013]\s*17/ },
  ];

  it("keeps non-legacy docs free of retired age bands", () => {
    const files = walkMarkdown(path.join(REPO_ROOT, "docs"));
    for (const file of files) {
      const text = fs.readFileSync(file, "utf8");
      if (isLegacyDocument(file, text)) continue;
      for (const { name, pattern } of staleAgePatterns) {
        expect(
          pattern.test(text),
          `${path.relative(REPO_ROOT, file)} contains stale age band ${name}`,
        ).toBe(false);
      }
    }
  });

  it("keeps the V3 module set strict across canonical JSON and markdown", () => {
    const jsonFiles = walkJson(MODULES_DIR).sort();
    expect(jsonFiles).toHaveLength(6);

    const ids = new Set<string>();
    for (const file of jsonFiles) {
      const module = JSON.parse(fs.readFileSync(file, "utf8")) as Record<
        string,
        unknown
      >;
      const id = module.id;
      expect(typeof id, `${file} must have a string id`).toBe("string");
      expect(ids.has(id as string), `${file} duplicates ${id}`).toBe(false);
      ids.add(id as string);

      const expectedQuestCard = path.join(
        path.dirname(file),
        `${id}-quest-card.md`,
      );
      const expectedRunbook = path.join(
        CONTENT_DIR,
        "pathways",
        `${id}-runbook.md`,
      );
      expect(
        fs.existsSync(expectedQuestCard),
        `${path.relative(REPO_ROOT, file)} missing generated quest card`,
      ).toBe(true);
      expect(
        fs.readFileSync(expectedQuestCard, "utf8"),
        `${expectedQuestCard} must remain generated from canonical JSON`,
      ).toMatch(/^<!-- GENERATED from content\/modules\//);

      expect(
        fs.existsSync(expectedRunbook),
        `${path.relative(REPO_ROOT, file)} missing generated mentor run-sheet`,
      ).toBe(true);

      for (const canonicalFile of [file, expectedQuestCard, expectedRunbook]) {
        const text = fs.readFileSync(canonicalFile, "utf8");
        for (const { name, pattern } of staleAgePatterns) {
          expect(
            pattern.test(text),
            `${path.relative(REPO_ROOT, canonicalFile)} contains stale age band ${name}`,
          ).toBe(false);
        }
        const normalized = text.toLowerCase();
        expect(normalized, `${canonicalFile} contains TBD`).not.toContain("tbd");
        expect(normalized, `${canonicalFile} contains lorem`).not.toContain("lorem");
      }
    }

    expect([...ids].sort()).toEqual([
      "animal-farm-started",
      "dream-house-build",
      "hotbar-inventory-tools",
      "join-move-look-talk",
      "story-stage-build",
      "tiny-tutorial-remix",
    ]);
  });

  it("has no unresolved placeholders in canonical content", () => {
    for (const file of walkMarkdown(MODULES_DIR)) {
      const text = fs.readFileSync(file, "utf8").toLowerCase();
      expect(text.includes("tbd"), `${file} contains TBD`).toBe(false);
      expect(text.includes("lorem"), `${file} contains lorem`).toBe(false);
    }
  });

  it("does not treat an explicitly candidate-only video as publishable", () => {
    const registry = JSON.parse(fs.readFileSync(VIDEO_REGISTRY, "utf8")) as {
      segments: Array<Record<string, unknown>>;
    };
    expect(Array.isArray(registry.segments)).toBe(true);

    for (const segment of registry.segments) {
      const serialized = JSON.stringify(segment).toLowerCase();
      if (isCandidateOnlyVideo(segment)) {
        expect(segment.status).toBe("candidate");
        expect(serialized).toContain("candidate only");
        continue;
      }
      expect(serialized, "publishable video contains unresolved placeholder").not.toMatch(
        /\b(?:tbd|todo)\b/i,
      );
    }
  });

  it("does not teach beginner router/networking setup in pilot content", () => {
    const forbidden = [
      { name: "port forwarding", pattern: /port[- ]forwarding/i },
      { name: "router settings", pattern: /router settings/i },
      { name: "static ip", pattern: /static ip/i },
    ];
    for (const file of walkMarkdown(CONTENT_DIR)) {
      const text = fs.readFileSync(file, "utf8");
      for (const { name, pattern } of forbidden) {
        expect(
          pattern.test(text),
          `${path.relative(REPO_ROOT, file)} matches forbidden term ${name}`,
        ).toBe(false);
      }
    }
    for (const mod of pilotModules) {
      const serialized = JSON.stringify(mod);
      for (const { name, pattern } of forbidden) {
        expect(
          pattern.test(serialized),
          `${mod.id} matches forbidden term ${name}`,
        ).toBe(false);
      }
    }
  });

  it("avoids duplicated long sentences across pilot modules", () => {
    const seen = new Map<string, string>();
    for (const mod of pilotModules) {
      const text = [mod.outcome, ...mod.optionalConnections].join(" ");
      const sentences = text
        .split(/(?<=[.!?])\s+/)
        .map((sentence) => sentence.trim().toLowerCase())
        .filter((sentence) => sentence.split(/\s+/).length >= 12);
      for (const sentence of sentences) {
        const priorModule = seen.get(sentence);
        expect(
          priorModule,
          `boilerplate sentence shared by ${priorModule} and ${mod.id}`,
        ).toBeUndefined();
        seen.set(sentence, mod.id);
      }
    }
  });
});
