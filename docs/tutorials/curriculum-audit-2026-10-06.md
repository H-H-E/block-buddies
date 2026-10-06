# Block Buddies: curriculum audit and tutorial-production redesign

Audit date: October 6, 2026. Inspected main commit: `44ee1d312193f7a0273fab05305a5ce23b156ba4` (August 29, 2026). Findings below describe that baseline; proposed changes and this implementation are labeled separately. No learner sessions were observed and no Minecraft client was run during this audit.

## A. What exists now

The repo contains six structured session outlines, not six production-ready visual tutorials. The product canon is clear about mentorship, learner agency, Bedrock-first delivery, short demonstrations, private worlds, and natural evidence. The modules have useful adult guidance. The missing layer is executable, platform-specific instruction between those intentions and the screen.

All six baseline modules are revision 1, `needs-review`, and `review.playtested: false`. They all declare Bedrock, six platform IDs, three input methods, and both solo-guided/shared-world delivery. Their `testedVersions` values are broad `1.21.x` strings, sometimes followed by instructions to verify later. These are not exact capture profiles or evidence that the declared device matrix was tested. All six `mediaReferences` arrays are empty. The only entry in `content/media/videos.json` is an explicitly unapproved candidate with a `TBD` URL and null timestamps.

The table totals the written flow durations. These are planned minutes, not measurements of actual child playtime.

| Module | Written flow total | Visible result and choice | Mentor/recovery/evidence/continuation | Actual media gap |
|---|---:|---|---|---|
| join-move-look-talk | 43 | Walk/jump, find a chosen landmark, name a favourite spot; destination and movement choices | Narrate once, follow the child; return to spawn or revisit controls; pointing, speech, demo, screenshot; record next wish | References input control cards, but no linked asset or exact player/view state in the module |
| hotbar-inventory-tools | 45 | Open inventory, choose 2-3 blocks, build a pillar/patch, swap a material; also promises a basic tool | Narrow a menu, model a selection, avoid choosing materials; reopen inventory or restore world; natural evidence; tiny tutorial or house next | Device-specific selection steps are not supplied; tool outcome lacks a matching flow step |
| tiny-tutorial-remix | 40 | Choose house/garden/bridge, follow an unspecified example, change one feature | Pause a video/demo and give hints; repair or start with a prepared floor; tour/screenshot; three project options | No actual build procedure, approved clip, timestamps, picture sequence, or specified materials |
| dream-house-build | 55 | Choose house shape, materials, openings, surprise feature; house may span two sessions | Child assigns helper work; local wall changes or backup restore; house tour; text records roof/furnishing/garden continuation | No bounded first-session deliverable or geometry; 55-minute single flow conflicts with its 30-45-minute declaration |
| animal-farm-started | 46 | Choose animal, pen site and names; lure at least two animals, fence, personalise | Mentor models luring; re-lure/rebuild; farm introduction; more animals/crops/expansion in prose | Four animal choices but wheat-centric instructions; pen, animal availability and naming procedures are not specified |
| story-stage-build | 48 | Choose setting, characters and ending; make a set and tell/act a story | Mentor plays invited supporting roles; story starters, pointing, backup reset; screenshot/title; next chapter in prose | No concrete prop procedure; specific scene and camera states absent; a story is not a static screenshot sequence |

World specifications are prose. They name BB Starter Plains, plots, landmarks and chests but do not bind modules to a versioned world download/checkpoint or capture-ready coordinate/state contract. The farm's enum is `survival-easy` while its text calls for peaceful survival. That discrepancy must be resolved before an operator treats the enum as executable setup.

`src/lib/moduleLibrary.ts` imports the six canonical JSON files. However, its foundation selector uses “no prerequisites OR tiny-tutorial-remix,” which selects movement and remix but drops inventory. The canon says three foundations; the selector returns two. The prerequisite graph also allows interest projects after movement/inventory without remix. That may be reasonable flexibility, but the UI and “common foundations” wording should describe it intentionally rather than accidentally.

Existing tooling in `scripts/` comprises a docs-link checker, a module validator and a derived-Markdown generator. No Minecraft capture implementation was found in that inspected tooling. The validator checks module schema, module IDs, prerequisites/next-module references and cycles. It accepts any media string beginning `demo:` or `video:` without resolving the referenced resource or its approval status. It does not validate phase-minute totals or exact tested-version evidence.

## B. The roast

The recurring failure is not a shortage of learning objectives. It is asking the teenager to invent the missing instructional design live while a child waits. A field called `worldSpecification` containing “a plot near spawn” is still prose, not a reproducible world. “Follow the tutorial” is not a tutorial step. “Restore from backup” is not a recovery procedure until somebody knows which backup, who can restore it, and what work disappears.

Scores below are adult editorial judgments about the written design, from 1 (weak) to 5 (strong). They are not learner scores, measured outcomes, or playtest results.

| Module | Kid motivation | Agency | Minecraft authenticity | Mentor value | Tutorial readiness | Verdict |
|---|---:|---:|---:|---:|---:|---|
| Join/move/look | 3 | 4 | 4 | 5 | 2 | KEEP; narrow the control cards and prepare actual landmarks |
| Inventory/tools | 2 | 3 | 4 | 3 | 2 | KEEP BUT REBUILD; separate block access from optional tool use |
| Tiny tutorial/remix | 3 | 4 | 4 | 4 | 1 | KEEP BUT REBUILD; supply one actual example |
| Dream house | 5 | 5 | 5 | 5 | 2 | KEEP; split the build into self-contained work chunks, not another course |
| Animal farm | 5 | 4 | 5 | 4 | 1 | KEEP BUT REBUILD; one verified animal route first |
| Story stage | 4 | 5 | 5 | 5 | 2 | KEEP; tutorialise a prop, not the child's story |

Movement: the child leads an adventure, which suits the relationship. But “find the tree/pond/hills” only works when those landmarks exist and are visible. Push-to-talk cannot be represented by an unspecified universal button. Camera movement needs live modelling or a short clip; a static screenshot alone does not show the motor action. Preserve the activity; stop pretending a generic control cue covers three input systems.

Inventory: opening a menu is a useful milestone, not the strongest Minecraft payoff. “Collect blocks” has less purpose than “get the blocks for the place you chose.” The module promises an axe/shovel skill but the flow never creates a task that needs it. Do not make tool trivia the price of using the hotbar. Move tool use to an activity where it changes what the learner can do. Colour preferences can genuinely matter to a child; the problem is not colour choice itself, but treating it as sufficient evidence that the whole activity gives them ownership.

Tiny tutorial: this is the clearest production blocker. The module delegates the key content to a nonexistent approved clip or an improvised whole-build demo. Its fallback risks making the mentor perform the entire interesting task. A single authored example with exact states is more useful than three unprepared menu options. Choice should happen in purpose, place and remix, not in an unsupported promise of three equally ready tutorials.

House: this has the strongest ownership design. The mentor's “build only assigned parts” rule is worth retaining. The 55-minute flow is not a 45-minute session. “One or two sessions” does not fix that without an explicit stopping point. A cottage, tower and underground base also do not share the same construction procedure. Teach one needed technique at a time and let the child's project remain larger than the tutorial.

Farm: the fantasy is excellent; the recipe is not ready. Its four animal routes are not actually authored. The wheat-centred script, optional name tags, unstaged animal availability and luring-before-pen flow all require verification and preparation that the current run-sheet does not supply. Do not invent “animals are shy” as the explanation for an unverified mechanic. Determine the actual cause, or say the mentor does not know. Naming aloud is a complete personalisation option; on-screen name tags need a separate verified procedure.

Story: the original tale is already creative ownership. It does not need an artificial remix checkbox. The learner should direct; the mentor should not be the director just because one metadata sentence gives them that role. Build a small prop tutorial and let the story happen through play, movement, pointing or speech. “Stories live with the child” is not a backup strategy for their built scene.

## C. Structural problems

First, session structure and tutorial structure are being treated as the same thing. Reconnect, choose and show are relationship phases. They are not Minecraft state transitions. A useful tutorial is usually a short reusable subroutine inside a session, not the entire session captured frame by frame.

Second, the same platform declaration is copied across the library without equivalent per-input instructions. The new capture contract must distinguish intended support from verified support. A version wildcard plus “check at prep” cannot pass a production readiness gate.

Third, learner actions are often too broad to film. “Fill hotbar,” “build walls” and “place platform” contain multiple motor and spatial decisions. The next layer needs one visible action, a relevant reference state and a clear recovery. It should not require a screenshot for every tiny cursor movement.

Fourth, recovery conflates two different worlds. The screenshot studio can be reset aggressively. The child's ongoing world must preserve their work and choices. Whole-world restoration is a last resort, not a default answer to a misplaced block. Creative/peaceful labels do not remove the need to name actual failure modes.

Fifth, generic hints are not consistently tied to the stuck step. The current three-line ladders are useful intentions, but “try the thing again” will not identify the right block face or selected slot. The reference adds step-local recovery and explicit takeover boundaries.

Sixth, continuation is mostly prose. Several modules say “continue the house/farm/story next time” while `nextModules` points elsewhere. Keep those as suggestions, not a mandatory course queue. Preserve the learner's own location, project and next idea in the eventual session run. This change does not pretend that production persistence is already implemented.

Seventh, validation currently confuses structurally present content with usable content. Media-prefix acceptance, loose version strings, no timing check, a skill taxonomy not attached through a module skill field, and an accidental empty-string property in the module schema are gaps. The tutorial validator resolves actual recipe/module/skill references and rejects unsupported capture profiles, without rewriting every existing contract at once.

Eighth, V2 can return through contributor instructions even when the app imports V3 content. At the audited baseline, `CONTRIBUTING.md` directs changes toward V2 and Do/Explain/Debug gates. That is a direct canon conflict, not a reason to reinstate child assessment. This implementation updates contributor guidance to V3. Operational recording/consent policy needs its own adult review; this implementation chooses neither a communications vendor nor a new retention policy.

The existing derived generator also copies adult outcome text and action labels into quest cards and emits outdated source-path comments. The new tutorial learner export separates child instructions from the capture plan. Broad renderer cleanup is deferred rather than silently rewriting the five other activities.

## D. Revised curriculum spine

Keep the six module IDs and the three foundations. Treat the last three as choices, not mandatory sessions four, five and six. Keep the long-range Java/modpack/server/programming material available for interested, ready learners; do not make it beginner prerequisites. Age changes responsibility, not which interests are respectable.

### Movement: “Show your buddy a place”

Fantasy/payoff: lead the mentor to a place the learner picked. Quick win: move to one nearby visible landmark. Obstacle/skill: reaching what they can see requires movement, camera control and communication. Learner actions: face a landmark, move, stop, jump only where useful, point or use the approved call. Choice: which landmark and where to meet. Mentor: follow, model one control, never steer their account. Hints: ask the destination, point at the relevant control, model one motion. Recovery: pause the camera and walk back together; have a nearby mini-route rather than a world-long search. Remix: choose another route. Evidence: a chosen/named spot or demonstration. Next: mark that place. Independence: next time the learner leads with fewer movement cues. Asset needs: one verified control card per input and a very short movement demonstration. Edition/device/version must be pinned for each card; current broad declarations remain unverified. Safety: prepared private world and guardian-visible communication.

### Inventory: “Get the blocks for your place”

Fantasy/payoff: obtain and use materials for a chosen tiny landmark or project. Quick win: place one wanted block. Obstacle/skill: the desired material is not selected; navigate a bounded inventory category and hotbar. Actions: open the correct screen, choose one item, place it in a slot, close the screen, select, place. Choices: a bounded material set plus what the material will be used for. Mentor: point to one category, not select the child's palette. Hints: identify desired item, locate category, cue the actual input action. Recovery: reselect one slot; use a pre-staged material only when menu friction blocks play. Remix: return for a new material that serves the build. Evidence: selected materials used in the world. Next: follow or design a tiny structure. Independence: the learner makes the next material trip with less help. Asset needs: exact device/version-specific inventory states and target slots; this is the next capture expansion after the first slice. Tool use is optional and deferred until the activity needs it. Safety: no downloads/accounts during the session.

### Tiny tutorial: “Make a marker your buddy can find”

This is the implemented reference described in F. It reuses movement and hotbar skills and adds matching a visual step to a game action. It is the only tutorial promoted to machine-readable production work in this change; the remaining activities are design sketches, not falsely finished capture specs.

### House: “Make your first room”

Fantasy/payoff: a place belonging to the learner. Quick win: choose the entrance and place the first useful part. Obstacle/skill: a room needs openings and a usable shape; practise decomposition, placement and spatial planning. Actions: choose two materials, place corners/walls, leave an opening, add a roof only when ready. Choices: room purpose, entrance and shape. Mentor: complete only a supporting section explicitly assigned by the child; do not finish the roof as a showcase. Hints: ask which part is missing, point at a gap, model one placement. Recovery: alter one wall or retain an unfinished but usable room; save before any adult restore. Remix: change how the room is used or connected. Evidence: walk inside and show a feature. Next: continue this same house or add an adjacent project. Independence: child plans the next wall/opening. Asset needs: separate micro-techniques for wall, opening and simple roof, pinned per input; no 30-step universal house tutorial. Safety: private saved world and scoped adult intervention.

### Animals: “Bring one animal home”

Fantasy/payoff: a chosen animal in a learner-shaped home. Quick win: interact with a pre-staged, verified animal near a safe prepared area. Obstacle/skill: containment and the correct interaction matter; use cause/effect, navigation and recovery. Actions: choose the pen site, close a perimeter/gate, use the verified species-specific interaction, secure the gate. Choices: location, animal from the actually prepared options, home layout/name. Mentor: prepare availability before the session, model once, avoid chasing across the world or taking over the interesting interaction. Hints: inspect held item, distance and gate; do not make up a behavioural explanation. Recovery: adjacent holding area or a prebuilt pen with learner-controlled final action. Remix: change the home layout or add a feature the child wants. Evidence: animal inside and a shown/named detail; explanation is optional. Next: a second animal or a crop that serves the chosen activity. Independence: learner notices the next open gate or wrong selection. Asset needs: species/item verification, a before/after pen diagram, and a short motion clip/live demo for luring. Actual animal motion is not promised to be pixel-deterministic. Safety: adult-prepared private environment; revise the contradictory difficulty metadata before use.

### Story: “Give your character a place”

Fantasy/payoff: a small scene where the learner's story can happen. Quick win: place a main prop or character. Obstacle/skill: the story needs a setting or an action; arrange space and use a prop. Actions: select a prop, place it, build a small setting, act/point/narrate. Choices: character, setting, event and mentor's invited role. Mentor: stagehand/supporting actor, never plot author by default. Hints: concrete scene choices, one prop demo, an optional story starter. Recovery: simplify to one character and one place; preserve the built scene. Remix: the learner's own story/scene change, not a compulsory assessment task. Evidence: scene screenshot or performance/pointing. Next: another scene in the same story. Independence: learner assigns the mentor a role and arranges the next scene. Asset needs: one platform-verified prop technique; a story itself needs live play, not generated screenshot assertions. Safety: approved communication and appropriate content, no default recording.

## E. Tutorial specification model

The implemented draft-2020-12 schema separates: module identity and skill references; brief learner instruction and machine action; mentor note, hint ladder, recovery and natural completion observation; fixed studio profile; world blocks; player position/look target; selected hotbar slot and screen; semantic annotation target; and technical review metadata.

Each shot describes its complete reference state. It does not depend on successfully replaying the preceding shot. The compiler emits a complete bounded studio reset/placement recipe, explicit manual client actions, and required state/privacy checks for each frame. Reference coordinates never become learner success criteria.

V1 intentionally supports one narrow profile: Bedrock Windows, keyboard/mouse, classic UI, HUD screenshots, stone/glowstone examples and a small fixed studio. Unsupported editions, inputs, blocks and off-plot coordinates fail validation rather than passing through a pretend universal adapter. Exact version/GUI scale/settings/checkpoint are null until recorded on a real client, and packaging is blocked while they remain unknown.

The capture manifest binds PNG files to hashes of the recipe and canonical module. It records reviewer attestations, the required checks and the semantic target's resolved normalized rectangle. Packaging checks integrity and dimensions and makes an SVG highlight around the real PNG. It does not infer target pixels, control the client or verify world state through telemetry. Those capabilities remain explicit next steps.

## F. Rebuilt example

`tiny-tutorial-remix` revision 2 is now a concrete meetup-marker activity with a 35-minute core and up to ten minutes of buffer, still inside a flexible 30-45-minute session. The module stays `needs-assets` and `playtested: false`.

The learner chooses a meaningful meeting location near their existing work. They select stone, place a base, stack another block, switch to a glowing block, cap the marker and look back. That is six visible one-action instructions, not “follow a tutorial.” They then change its silhouette, location or approach path and test whether their buddy can find the place. In solo-guided delivery the learner points it out from another location while the mentor follows through the approved screen-share.

The six-frame example uses a two-stone stem with a glowstone cap. It is a reference shape, not the required child artifact. Glowstone is not described as a functioning beacon. The child may prefer a different material or complete a one-block version. The mentor never places the interesting final block for them. Wrong placements are repaired locally; intentional differences remain theirs.

Natural evidence is a shown marker, a screenshot with consent, a pointed-out location or a short observation. The mentor records what was made, where it is, a useful support note and the learner's next idea in under three minutes. The guardian template uses observed facts and does not manufacture pride or independence.

## G. First tutorial vertical slice

Choose tiny-tutorial-remix before the movement lesson for the first capture job. Curriculum order is not engineering order. Movement belongs first for a novice, but temporal control demonstrations are a harder first still-image test. Inventory would test the UI well, but a whole inventory screen adds layout, scale, selection and drag/tap variation before the world-state seam is proven.

The marker tests both hotbar and world frames, two materials, placement, camera pose, semantic targets, independent resets, learner/mentor separation, receipt validation and annotation. Full inventory-screen automation is deliberately deferred rather than faked.

Studio starting state: disposable offline flat world, seed `0`, adult studio player, creative/peaceful, time 6000, clear/frozen weather/time, no mobs/add-ons/packs, fixed 1280x720 profile and FOV 70. A stone floor spans x/z 0..12 at y=63; the air volume y=64..74 is reset. Slots 0/1 contain stone/glowstone. The base example is at (4,64,4), its stem at (4,65,4), and its cap at (4,66,4). Each frame has an explicit player position and look target; the final viewpoint moves farther to the side. Version, actual GUI scale and settings/checkpoint hashes remain unverified blockers.

Six required frames: selected stone slot; first placed block; two-block stem; selected glowstone slot; completed cap; landmark seen from the second viewpoint. Each is an after-state with either a hotbar-slot or existing-world-block target. The compiler emits the exact bounded commands and manual client checks. It never executes them.

Success for engineering: re-running compilation gives identical artifacts; every frame recipe stands alone; unsupported inputs and stale/corrupt receipts are rejected; actual game frames can be captured, reviewed and highlighted. The software checks are implemented. Actual six-frame capture, repeated live-state verification and a child/mentor pilot have not occurred.

Final artifacts are draft or reviewed learner/mentor Markdown, capture-plan JSON, studio command files, capture receipts, and actual PNG/SVG assets when supplied. No image-generation model substitutes for a game screenshot. No automatic public publishing occurs.

## H. Delete / keep / defer

Keep: the six stable module IDs; mentorship and private-world model; natural evidence; choice/remix; prepared scripts; progressive hints; safe local recovery; advanced technical material clearly outside beginner requirements.

Rewrite now: the generic tiny tutorial as one concrete reference; the erroneous foundation selector; contributor instructions that revive V2; readiness claims that confuse structured drafts with completed tutorials. Resolve the new recipe references through a narrow validator, not a replacement LMS.

Remove from this reference: the unapproved-video dependency, the whole-build fallback demonstration, unsupported claims of tested platforms and the idea that the child's build must match studio coordinates. The existing unapproved video candidate can remain in the registry explicitly as a candidate; it is not linked by this revised module.

Defer: the other five full module rewrites, all-input screenshot coverage, atomic reusable prop/tool tutorials, generic app session persistence, cloud/server automation, universal capture DSLs, automatically locating pixels, richer asset lifecycle schema, and the advanced Java/modpack/server routes. Also defer global derived-renderer cleanup rather than disguising it as completed here.

Do not delete legacy material merely for being detailed. Hide or label it where it would otherwise govern the beginner experience. Do not silently change recording consent/retention or other operational decisions.

## I. Immediate build queue

1. Review the reference module, its explicit Windows-only capture profile, and the source-backed critique. Keep it unapproved until verified.
2. Pin a real Bedrock client version, GUI scale and settings; prepare and hash the disposable empty-world checkpoint.
3. Run the six absolute studio recipes manually; verify commands and player-facing camera results on that client.
4. Capture the six real PNGs, resolve the six semantic rectangles, and fill the state/privacy receipts without fictional evidence.
5. Repeat the capture job from the checkpoint. Fix camera/UI instability before implementing an automation adapter.
6. Run one mentor-child session using the marker activity and correct input guidance. Note time to a meaningful result, takeover moments, wrong-step recoveries and the learner's next wish; do not grade the child.
7. Revise based on that evidence, record real review status, regenerate matching receipts, and package the reviewed assets.
8. Add one inventory-screen profile on the actual pilot device/input. Keep unsupported combinations blocked; do not advertise a complete device matrix.
9. Rebuild the next activity the pilot actually needs, likely one room or one animal-home route, rather than expanding all pathways at once.

## Inspected source index

All paths below refer to the pinned baseline commit unless describing a proposed change. This is source inspection, not evidence of runtime behavior or a pilot.

- `docs/canon/product-canon.md`: priorities, roles, session rhythm, media/platform rules, source hierarchy.
- `README.md`: six-module beginner claim and optional advanced pathway.
- `CONTRIBUTING.md`: conflicting V2/gate requirements.
- `content/schemas/module.schema.json`: strict field contract, free-form timing/version values, accidental empty-string property.
- All six JSON files under `content/modules/{foundations,building,survival,storytelling}/`: goals, flow totals, status, gaps, roles, recovery and next-module data.
- `content/media/videos.json`: candidate-only video entry, no approved segment.
- `content/taxonomies/{interests,minecraft-skills,platforms}.json`: vocabulary and platform IDs.
- `src/lib/moduleLibrary.ts`: canonical imports and erroneous foundation predicate.
- `scripts/validate-modules.py`: schema and graph checks; media-prefix acceptance without approval resolution.
- `scripts/generate-derived.py` and generated quest-card excerpts: prose exports and source-header pattern.
- `content/media/` and `scripts/` directory trees: inspected media/tooling boundary.

Baseline repository: https://github.com/H-H-E/block-buddies/tree/44ee1d312193f7a0273fab05305a5ce23b156ba4
