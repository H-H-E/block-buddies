import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const DOCS_DIR = path.join(ROOT, "docs");

function walk(dir, out = []) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) walk(full, out);
    else if (name.endsWith(".md")) out.push(full);
  }
  return out;
}

function fileExistsWithMdFallback(target) {
  if (fs.existsSync(target)) return true;
  if (!path.extname(target) && fs.existsSync(`${target}.md`)) return true;
  if (fs.existsSync(path.join(target, "index.md"))) return true;
  return false;
}

const linkRegex = /\[[^\]]+\]\(([^)]+)\)/g;
const files = walk(DOCS_DIR);
const errors = [];

for (const file of files) {
  const content = fs.readFileSync(file, "utf8");
  for (const match of content.matchAll(linkRegex)) {
    const raw = match[1].trim();
    if (!raw || raw.startsWith("http://") || raw.startsWith("https://") || raw.startsWith("mailto:")) {
      continue;
    }
    const clean = raw.split("#")[0].split("?")[0];
    if (!clean) continue;

    const resolved = clean.startsWith("/")
      ? path.join(ROOT, clean)
      : path.resolve(path.dirname(file), clean);

    if (!fileExistsWithMdFallback(resolved)) {
      errors.push(`${path.relative(ROOT, file)} -> ${raw}`);
    }
  }
}

if (errors.length > 0) {
  console.error("Broken docs links found:\n");
  for (const err of errors) console.error(`- ${err}`);
  process.exit(1);
}

console.log(`Docs link check passed for ${files.length} markdown files.`);
