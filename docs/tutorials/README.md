# Tutorial authoring and capture seam

Status: implemented draft compiler and reviewed-file packager; Minecraft capture is not automated. The first recipe and revised module are NOT game-verified or human-playtested.

## What owns what

`docs/canon/product-canon.md` still owns the pedagogy. `content/modules/` owns sessions, relationships, choices, recovery, and continuity. `content/tutorials/bedrock/meetup-marker.json` owns the exact micro-instructions and reference capture states. `content/schemas/tutorial.schema.json` is the narrow first-slice contract. It does not replace the existing module schema or create another curriculum.

The tutorial identifies its canonical module by `moduleId`; the module identifies it through the existing `demo:meetup-marker` media-reference convention. The new validator resolves both sides, checks skill taxonomy references, and rejects drift between the tutorial instructions and the module's learner cues.

The Windows keyboard/mouse capture profile is an authoring test target, not a decision to move the beginner pilot away from family devices. Touch and controller pictures require separate verified profiles. Java frames must not be substituted.

## Run

Use the repository's existing Python `jsonschema` dependency; no new npm or Python package is needed.

```sh
npm run validate:tutorials
npm run test:tutorials
npm run build:tutorials -- --out ../bb-tutorial-review-01
```

The output directory must not already exist. The compiler refuses to overwrite it.

Draft output contains `learner.md`, `mentor.md`, `capture-plan.json`, a capture-manifest template, and six independent `.mcfunction` studio recipes. It deliberately contains no fake screenshots. Its learner sheet is marked as an uncaptured authoring draft, not a finished child-facing resource.

`npm run check:contracts` also runs tutorial validation and the Python tests before the existing Vitest suite.

## The capture job that remains

1. On an adult-owned Bedrock Windows client, create a disposable offline studio world. Never use a learner world, family Realm, or shared production server. Create and hash an empty checkpoint.
2. Record the installed exact version, actual GUI scale, full client-settings hash, FOV, resolution, language, and UI profile in the recipe. The null values are intentional blockers, not defaults to guess. Use no packs/add-ons; check that no entities or personal information are visible.
3. Rebuild the draft and its manifest template after pinning those values. Receipts are tied to hashes of both the recipe and the canonical module, so later content/settings changes invalidate them.
4. For each shot, apply its complete studio recipe as the studio PLAYER. `@s` is not bound to a player in an ordinary server console. The files are not an installed behavior pack and are not executed by this Python tool. An operator may run the commands individually or load them through a separately prepared, verified studio function pack.
5. Select the required hotbar slot through the real client, apply/verify the pinned client settings, close overlays, and capture the real PNG. No server command is presented as inventory-screen or screenshot automation.
6. Resolve the semantic block/slot target to a normalized `[x, y, width, height]` rectangle on that exact PNG. Complete each state/privacy check and identify the reviewer. If a shot fails, reset only that studio shot; do not edit the learner's creation to match it.
7. Review the six actual frames and their annotations. Repeat the studio capture to check state reproducibility. Pixel-identical rendering across hardware is not promised.
8. Run a mentor-child playtest separately. Only record `review.playtested: true` after it actually occurs. Update the canonical module and rebuild/review receipts as needed; do not fabricate hashes, reviewers, captures, or test results.

After the technical and human checks have actually been completed:

```sh
python scripts/tutorials.py package --id meetup-marker \
  --captures ../bb-captures/manifest.json \
  --out ../bb-tutorial-reviewed-01
```

Packaging checks content hashes, PNG signature/dimensions/hash, target rectangles, required human attestations, pinned settings, technical review, and the module's human-playtest flag. It then embeds the actual PNG in an annotated SVG and connects the learner sheet to it. It does not publish content or set review flags.

These checks are integrity checks plus human attestations. They do not prove that an image came from Minecraft, inspect the world through telemetry, or validate all PNG pixel data. A trusted human must inspect the real image and game state. Synthetic PNGs in unit tests are explicitly test fixtures, not game evidence.

## Reset boundaries

The generated studio commands replace only the fixed 13-by-13 plot at the declared heights, reset the studio player's inventory, and establish each shot independently. They are destructive inside that studio volume. They must never be run in a learner session.

Learner recovery is different: undo one accidental placement, reselect a slot, walk back together, or preserve a smaller finished result. Never restore the studio sample over a child's remix. Sample coordinates, colors, silhouettes, and block counts are reference-image assertions, not child assessment criteria.

## Deliberately not implemented

No Minecraft process launcher, Bedrock client/input adapter, live world-state telemetry, automatic semantic-to-pixel projection, inventory-screen capture, tablet/controller assets, production session persistence, or public publishing. These are explicit boundaries, not hidden stubs presented as working integrations.

Next engineering step: run and document the six-frame manual studio job, then automate the already-proven client actions behind this contract. Do not start by inventing a universal Minecraft bot.

## Command references

The recipes use the documented Bedrock command families below. Documentation review is not an installed-version playtest.

- [Bedrock replaceitem](https://learn.microsoft.com/en-us/minecraft/creator/commands/commands/replaceitem?view=minecraft-bedrock-stable)
- [Bedrock fill](https://learn.microsoft.com/en-us/minecraft/creator/commands/commands/fill?view=minecraft-bedrock-stable)
- [Bedrock setblock](https://learn.microsoft.com/en-us/minecraft/creator/commands/commands/setblock?view=minecraft-bedrock-stable)

The fixed camera pose uses player teleport/facing plus client settings. Verify the exact client result before capturing; no free-camera API is assumed.
