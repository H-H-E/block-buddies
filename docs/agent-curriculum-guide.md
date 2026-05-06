# Agent Curriculum Guide

## 1. Curriculum vision statement

Block Buddies teaches computer science by making ideas visible, playable, and fixable inside Minecraft. Learners build small working systems, explain how those systems behave, and practice debugging without shame. The goal is not to turn Minecraft into school with creepers. The goal is to use Minecraft as a low-pressure engineering sandbox where learners can feel capable, curious, and in control.

The core arc is simple:

Build something.
Explain what it does.
Break or inspect something.
Fix it.
Show evidence that the learner understands the system.

Each session should feel like a guided mission, not a lecture.

## 2. Target learner profile and assumptions

### Target learner

Block Buddies is designed for young learners, roughly ages 7-14, who enjoy Minecraft or game-like building. Learners may have uneven confidence, attention, communication, typing, executive function, or frustration tolerance. Some may be strong visual thinkers. Some may love machines. Some may want to "be the server admin" and control things with commands.

The curriculum assumes learners are capable of real technical thinking when the environment is concrete, forgiving, and mentor-supported.

### Program format assumptions

Sessions are designed for 1:1 or small groups of 2-4 learners.

Recommended session length: 45-60 minutes.

Each session should use a prepared Minecraft world with:

- A safe spawn area.
- A demo station.
- A learner build zone.
- A "broken example" station for debugging.
- Clear boundaries.
- No public-server chaos.
- Optional commands enabled only in controlled zones.
- Mentor reset tools available.

The mentor does not need to be a computer science expert. They need a run sheet, prepared examples, suggested prompts, and a simple way to record evidence.

### Learning model

Each session has three mastery gates:

**Do:** The learner builds or modifies something that works.

**Explain:** The learner describes what the system does using age-appropriate language.

**Debug:** The learner finds, tests, or fixes a problem.

A learner does not need to sound academic. "The button sends power to the lamp, but this block is blocking it" is a valid explanation. So is "this command teleports me to the wrong place because the numbers are wrong." The point is observable reasoning.

### Track model

Tracks are not separate courses. They are different ways to complete the same learning goal.

**Visualist:** Prefers visible builds, layout, decoration, before/after changes, signs, maps, status lights, and spatial organization.

**Mechanist:** Prefers redstone, doors, pistons, rails, circuits, farms, timing, cause/effect machines.

**Operator:** Prefers commands, server logic, automation, teleporters, scoreboards, diagnostics, permissions, and reliability.

A learner can switch tracks. The mentor should treat tracks as "best entry points," not fixed identities.

## 3. Full 8-session curriculum map

| Session | Title | Core concept | Main Minecraft output |
|---|---|---|---|
| S01 | Mission Control: Build, Test, Fix | Safe workflow, coordinates, iteration, debugging mindset | Personal base marker + simple test/fix challenge |
| S02 | Blueprint Builders | Decomposition, patterns, precision | Small structure built from a plan |
| S03 | Algorithm Arena | Sequencing, instructions, procedures | Step-by-step build or movement challenge |
| S04 | Switches, Signals, and If/Then Logic | Inputs, outputs, conditionals | Door, lamp, trap, or command trigger |
| S05 | State, Memory, and Status | Variables, state, counters, memory | Status board, redstone latch, or scoreboard counter |
| S06 | Loops and Automation | Repetition, cycles, efficiency | Auto-farm, repeating mechanism, or command loop |
| S07 | Broken Systems Lab | Debugging, testing, reliability | Fixed broken build with diagnosis notes |
| S08 | Buddy Build Capstone | Systems integration, presentation, reflection | Final learner-designed Minecraft system |

## 4. Eight-session curriculum outline

## S01 - Mission Control: Build, Test, Fix

### Learning goal

Learners understand the basic Block Buddies workflow: build safely, test often, notice problems, fix one thing at a time, and explain what changed.

This session is less about technical depth and more about setting the emotional contract: mistakes are data, not disaster. Very "the bug is the teacher," minus the motivational-poster cringe.

### Early win

The learner claims a personal build plot and creates a visible "Mission Marker" using blocks, signs, banners, or lights.

Example: a small base entrance with their name, a color pattern, and a sign that says "Test Zone."

### Core quest

Build a tiny "safe base" with three required features:

1. A clear entrance.
2. A marker that can be recognized from a distance.
3. One working feature, such as a door, lamp, ladder, bridge, pressure plate, or teleport button depending on setup.

Then the mentor introduces a tiny bug.

Examples:

- Remove one block from the path.
- Put the door facing the wrong direction.
- Break the redstone line.
- Change one coordinate in a command block.
- Hide the marker behind another block.

The learner must notice what changed, test it, and repair it.

### Track variations

| Track | Variation |
|---|---|
| Visualist | Build a clear entrance, color-coded path, and before/after marker. The bug is visual: missing block, blocked sign, mismatched pattern, confusing entrance. |
| Mechanist | Build a button-door or pressure-plate lamp. The bug is mechanical: redstone dust disconnected, button too far away, lamp placed wrong. |
| Operator | Use a prepared command block or mentor-assisted command to teleport from spawn to the base. The bug is operational: wrong coordinate, missing pressure plate, command block not powered. |

### Optional side quests

- Add a "visitor path" from spawn to the base.
- Add a safety sign explaining the build rules.
- Add a second marker that helps someone find the base without help.
- Create a "bug report sign" that says what broke and how it was fixed.

### Mastery gates

**Do:** The learner builds a simple base feature that works.

**Explain:** The learner can say what the feature is supposed to do.

Example: "When I press the button, the door opens."

**Debug:** The learner identifies one problem and fixes it, with mentor support allowed.

Example: "The redstone was not touching the door, so the signal did not reach it."

### Common failure points

- Learner wanders away from the task.
- Learner overbuilds and runs out of time.
- Learner gets upset when the mentor introduces a bug.
- Learner cannot tell whether the system is working.
- Learner uses "it's broken" as a full diagnosis and stops there.

### Mentor fallback moves

- Shrink the task: "Let's make one entrance and one working button."
- Use a two-choice prompt: "Is the problem with the button or the door?"
- Show the working demo, then compare it to the learner's build.
- Ask: "What did you expect? What happened instead?"
- Mark the test path with colored blocks.
- Validate the frustration without making the bug dramatic: "Yep, something changed. Our job is to find the smallest difference."

### Exit ticket

The learner answers:

"What is one thing you built, one thing you tested, and one thing you fixed?"

They may answer verbally, with a sign, or by pointing to the build.

### Parent-safe summary

Today your child created a personal build zone and practiced the basic engineering loop: build, test, notice a problem, and fix it. They worked on staying calm when something did not work the first time and practiced explaining what changed.

## S02 - Blueprint Builders

### Learning goal

Learners practice decomposition: breaking a larger build into smaller parts. They learn that complex builds become easier when you split them into sections, patterns, and repeatable pieces.

### Early win

The learner copies a simple 2D pattern from a sample wall.

Example: blue-yellow-blue-yellow wool pattern, window-frame pattern, or a small pixel-art icon.

### Core quest

Build a small "Buddy Outpost" from a blueprint.

Required parts:

1. Foundation.
2. Walls.
3. Entrance.
4. Window or signal feature.
5. Roof or top marker.

The mentor gives the learner either a visual plan, a partial build, or a checklist. The learner builds one section at a time.

The debugging challenge: one part of the blueprint does not match the final build. The learner must find the mismatch and correct it.

### Track variations

| Track | Variation |
|---|---|
| Visualist | Focus on symmetry, color, readable layout, signs, windows, and visual matching. Debugging means finding pattern breaks or mismatched shapes. |
| Mechanist | Add a simple mechanism into the outpost, such as a hidden door, lamp switch, or piston window. Debugging means finding where the mechanism no longer fits the structure. |
| Operator | Use `/fill`, `/clone`, or prepared command blocks to create repeated sections. Debugging means checking dimensions, coordinates, and whether the copied section lands in the right place. |

### Optional side quests

- Add labels to each part of the outpost.
- Add a second floor using the same pattern.
- Create a "before and after" screenshot station.
- Add a visitor path that uses the same pattern language.

### Mastery gates

**Do:** The learner builds the outpost using at least three planned parts.

**Explain:** The learner can name the parts and describe the order they built them in.

Example: "First I made the base, then the walls, then the windows."

**Debug:** The learner finds one mismatch between the blueprint and the build.

Example: "This side has three windows, but the plan only has two."

### Common failure points

- Learner starts decorating before the structure exists.
- Learner ignores the blueprint and free-builds.
- Learner struggles with spatial orientation.
- Learner becomes stuck copying a pattern exactly.
- Learner does not understand "part" versus "whole."

### Mentor fallback moves

- Give a partial build with only one missing section.
- Use colored blocks to mark each part: foundation, walls, roof.
- Ask: "Which piece are we building right now?"
- Cover part of the blueprint so the learner focuses on one section.
- Let the learner choose style after the required structure is complete.
- Use "same/different" comparison instead of verbal explanation.

### Exit ticket

The learner identifies three parts of their build and says which part was easiest to build and which part needed fixing.

### Parent-safe summary

Today your child practiced breaking a bigger project into smaller steps. They built from a plan, checked their work against the model, and fixed a mismatch. This supports planning, attention to detail, and flexible problem-solving.

## S03 - Algorithm Arena

### Learning goal

Learners understand algorithms as clear step-by-step instructions. They practice sequencing, precision, and testing whether instructions actually produce the intended result.

### Early win

The learner follows a short "build recipe" with 4-6 steps.

Example:

1. Place three stone blocks in a row.
2. Put a torch on the middle block.
3. Add two glass blocks above the sides.
4. Put a sign in front.

The result is a mini "signal post."

### Core quest

Create a "Robot Builder Challenge."

The learner must either:

- Follow mentor instructions to build a small object, then
- Write or say instructions for the mentor to follow.

The twist: the mentor follows the learner's instructions literally. If the learner says "put the block there," the mentor asks, "Where is there?" This makes precision visible without turning the session into grammar jail.

The debugging challenge: fix an instruction that causes the wrong result.

### Track variations

| Track | Variation |
|---|---|
| Visualist | Write instructions for building a small pixel-art shape, statue, path, or room layout. Debugging means finding which step caused the visual mismatch. |
| Mechanist | Write instructions for building a button-lamp circuit or simple door mechanism. Debugging means checking the order of placement and signal path. |
| Operator | Use commands as algorithms: `/give`, `/tp`, `/setblock`, or prepared command blocks. Debugging means checking command order, coordinates, targets, and syntax. |

### Optional side quests

- Turn the algorithm into signs placed beside the build.
- Swap instructions with another learner.
- Add "test checkpoints" after every three steps.
- Create a silly intentionally bad instruction and fix it.

### Mastery gates

**Do:** The learner follows or creates a sequence of instructions that produces a Minecraft result.

**Explain:** The learner can describe why order matters.

Example: "If I place the roof before the walls, it has nothing to sit on."

**Debug:** The learner finds one unclear or out-of-order instruction and improves it.

Example: "I forgot to say how many blocks high."

### Common failure points

- Instructions are vague.
- Learner assumes the mentor knows what they mean.
- Learner skips steps because the answer feels obvious.
- Command-oriented learners get stuck on syntax.
- Learner gets irritated when literal instructions produce the wrong build.

### Mentor fallback moves

- Use sentence frames: "Place ___ blocks of ___ starting at ___."
- Ask: "Could a robot understand that?"
- Offer a worked example with one missing instruction.
- Let the learner point first, then translate pointing into words.
- For commands, provide editable templates instead of blank command entry.
- Keep the humor gentle: the mentor is the goofy robot, not the learner as the one "messing up."

### Exit ticket

The learner gives one instruction that is too vague, then improves it.

Example:

Vague: "Build a wall."

Better: "Place five oak planks in a straight line on the ground."

### Parent-safe summary

Today your child practiced algorithmic thinking by creating and testing step-by-step instructions. They learned that computers and systems need precise directions, and they improved instructions when the result did not match the plan.

## S04 - Switches, Signals, and If/Then Logic

### Learning goal

Learners understand input-output logic and simple conditionals. They learn that systems can respond to triggers: if this happens, then that happens.

### Early win

The learner makes a button turn on a redstone lamp.

Input: button.

Output: lamp.

The mentor names it simply: "If button pressed, then lamp turns on."

### Core quest

Build a "Security Gate" for a Minecraft base.

Required features:

1. An input: button, lever, pressure plate, tripwire, item dropper, or command trigger.
2. An output: door, lamp, piston, sound, message, or teleport.
3. A visible test path.
4. A sign that explains the rule.

Example rule:

"If a player steps on the pressure plate, then the door opens."

The debugging challenge: the system fails because the input is not connected to the output, or the wrong trigger is used.

### Track variations

| Track | Variation |
|---|---|
| Visualist | Build a clear security entrance with lights, signs, colored paths, and visible feedback. Debugging focuses on whether the player can understand what the gate is doing. |
| Mechanist | Build a redstone door, piston gate, trapdoor bridge, or lamp signal. Debugging focuses on signal strength, placement, direction, and block interference. |
| Operator | Build a command-triggered gate using a pressure plate and command block. Outputs may include teleporting, giving an item, sending a message, or opening access. Debugging focuses on command target, coordinates, and trigger conditions. |

### Optional side quests

- Add a second input with a different output.
- Add a warning light.
- Build a "wrong way" indicator.
- Make the gate accessible from both sides.
- Add a manual override switch.

### Mastery gates

**Do:** The learner builds a working if/then system.

**Explain:** The learner can name the input, output, and rule.

Example: "If the lever is on, then the lamp turns on."

**Debug:** The learner can test the trigger and identify where the system stops working.

Example: "The button works, but the signal does not reach the piston."

### Common failure points

- Redstone signal does not reach the output.
- Redstone is blocked by an incorrect block placement.
- Learner confuses input and output.
- The mechanism works once but not repeatedly.
- Command block has the wrong target selector or coordinate.
- Learner builds something cool-looking but hard to test.

### Mentor fallback moves

- Use the phrase: "Input, path, output."
- Place colored blocks under each part: green for input, yellow for path, red for output.
- Test the output directly first.
- Then test the input.
- Then test the connection.
- For command users, use prewritten command templates and change only one value at a time.
- Reduce the gate to a lamp before returning to doors or pistons.

### Exit ticket

The learner completes this sentence:

"If ___ happens, then ___ happens."

Then they show the trigger working.

### Parent-safe summary

Today your child built a simple cause-and-effect system in Minecraft. They practiced identifying inputs, outputs, and rules, then tested the system to find where the connection failed. This supports early programming logic and systematic troubleshooting.

## S05 - State, Memory, and Status

### Learning goal

Learners understand state: a system can have a current condition that changes over time.

Examples:

- Door is open or closed.
- Light is on or off.
- Score is 3.
- Farm is ready or not ready.
- Player has permission or does not have permission.

This session introduces the idea behind variables without needing to start with the word "variable."

### Early win

The learner creates a two-state status display.

Example:

- Green wool means "open."
- Red wool means "closed."
- Lamp on means "active."
- Lamp off means "inactive."
- Scoreboard says "Keys: 1."

### Core quest

Build a "Base Status Board."

Required features:

1. At least two possible states.
2. A way to change the state.
3. A visible display of the current state.
4. A short explanation of what each state means.

Examples:

- A redstone lamp panel showing whether a gate is locked or unlocked.
- A two-color signboard showing farm status.
- A scoreboard that counts collected keys.
- A lever-controlled "open/closed" room indicator.

The debugging challenge: the display does not match the real state. The learner must find and fix the mismatch.

Example: the sign says "open," but the door is locked.

### Track variations

| Track | Variation |
|---|---|
| Visualist | Build a large status board with colors, signs, icons, or lights. Debugging focuses on whether the display clearly matches the system. |
| Mechanist | Build a redstone latch, lever memory, lock indicator, or simple toggle. Debugging focuses on whether the system remembers on/off correctly. |
| Operator | Use scoreboards, tags, or command blocks to track a value such as keys collected, checkpoint reached, or access granted. Debugging focuses on whether the value changes correctly. |

### Optional side quests

- Add a third state: "ready," "busy," "needs repair."
- Add a reset button.
- Add a status display outside and inside the base.
- Make the board update from a real action, such as stepping on a plate.
- Add a "diagnostic sign" listing what each color means.

### Mastery gates

**Do:** The learner creates a system with at least two states.

**Explain:** The learner can describe what the current state is and what changes it.

Example: "When the lever is down, the gate is locked. When it is up, it is unlocked."

**Debug:** The learner can identify when the displayed state and actual behavior do not match.

Example: "The lamp says unlocked, but the door did not open, so the display is wrong or the door is disconnected."

### Common failure points

- Learner makes a display but no actual state change.
- Learner changes the system but forgets to update the display.
- Redstone toggle behaves unexpectedly.
- Scoreboard command is too abstract.
- Learner treats "state" as decoration instead of information.

### Mentor fallback moves

- Start with a physical analogy: "Is the door open or closed right now?"
- Use only two states at first.
- Ask: "What should the player see? What should the system do?"
- Use a truth check: display says X, system does Y. Do they match?
- For Operator track, keep scoreboard values visible on screen.
- Provide a reset button so experimentation feels safe.

### Exit ticket

The learner points to or names the current state of their system, then changes it and explains what changed.

### Parent-safe summary

Today your child learned how systems keep track of their current condition, such as open/closed or active/inactive. They built a status display and practiced checking whether the display matched what the system was actually doing.

## S06 - Loops and Automation

### Learning goal

Learners understand loops as repeated actions or cycles. They build a system that performs a repeated task without the learner manually doing every step.

### Early win

The learner creates or observes a repeating cycle.

Examples:

- A redstone clock blinking a lamp.
- A hopper moving items repeatedly.
- A minecart cycling around a track.
- A repeating command block sending a harmless message in a controlled area.
- A simple farm where crops grow, are collected, and replanted manually or semi-automatically.

### Core quest

Build an "Automation Station."

Required features:

1. A repeated action.
2. A clear start condition.
3. A visible output.
4. A way to stop, reset, or safely control the loop.

Examples:

- Blinking lighthouse.
- Minecart delivery loop.
- Repeating dispenser.
- Auto-sorting chest demo.
- Simple crop collection system.
- Repeating command effect in a contained zone.

The debugging challenge: the loop runs too fast, too slow, does not stop, or fails after one cycle.

### Track variations

| Track | Variation |
|---|---|
| Visualist | Build a lighthouse, animated sign, blinking runway, or repeated pattern generator. Debugging focuses on whether the cycle is visible and understandable. |
| Mechanist | Build a redstone clock, minecart loop, hopper/dispenser cycle, or farm mechanism. Debugging focuses on timing, direction, and item flow. |
| Operator | Use repeating command blocks, scheduled actions, or command chains in a controlled area. Debugging focuses on repeat settings, conditions, targets, and safe stop controls. |

### Optional side quests

- Add a manual stop switch.
- Add a counter showing how many cycles happened.
- Add a warning light when the loop is active.
- Add a collection chest.
- Add a "maintenance hatch" so the system can be inspected.

### Mastery gates

**Do:** The learner builds a system with a repeated action.

**Explain:** The learner can describe what repeats and what starts or stops it.

Example: "The minecart keeps going around the track until I break the powered rail or turn it off."

**Debug:** The learner identifies one loop problem and changes one part to improve it.

Example: "The clock was too fast, so we added delay."

### Common failure points

- Loop cannot be stopped.
- Redstone clock burns out or behaves unpredictably.
- Repeating command affects too large an area.
- Items get stuck in the wrong hopper.
- Learner focuses only on making it bigger, not controllable.
- The system works once but does not repeat.

### Mentor fallback moves

- Require a stop switch before adding complexity.
- Ask: "What repeats? What controls it? What could go wrong?"
- Use a slow visible loop before faster mechanisms.
- Build one cycle manually, then automate one part.
- For commands, restrict the command area and use harmless effects.
- Add labels: start, repeat, output, stop.

### Exit ticket

The learner completes:

"My system repeats ___. It starts when ___. It stops when ___."

Then they demonstrate the stop or reset.

### Parent-safe summary

Today your child built an automated Minecraft system that repeated an action. They practiced thinking about cycles, controls, and safety: not just "can it run?" but "can it stop, reset, and behave predictably?"

## S07 - Broken Systems Lab

### Learning goal

Learners practice structured debugging across a larger system. They learn to diagnose problems by testing one part at a time instead of randomly changing everything and praying to the block gods.

### Early win

The learner fixes a tiny broken station in under five minutes.

Examples:

- Missing redstone dust.
- Wrong block in a pattern.
- Door blocked by a slab.
- Command block missing power.
- Minecart track disconnected.

### Core quest

Enter the "Broken Systems Lab."

The learner receives a prebuilt system with 3-5 possible failure points. Their job is to inspect, test, diagnose, and repair.

Example systems:

- Security gate: button works, but door does not open.
- Delivery rail: minecart starts but never reaches the chest.
- Status board: says "ready," but the farm is empty.
- Command teleporter: sends player to the wrong place.
- Lighthouse loop: blinks once, then stops.

The mentor provides a debugging checklist:

1. What should happen?
2. What actually happens?
3. What is the first place the system works?
4. Where does it stop working?
5. What is the smallest change to test?
6. Did the fix work?

### Track variations

| Track | Variation |
|---|---|
| Visualist | Debug a build with visual inconsistencies, unclear signs, broken paths, mismatched status lights, or confusing layout. |
| Mechanist | Debug a redstone, rail, piston, hopper, dispenser, or farm mechanism. |
| Operator | Debug command blocks, coordinates, permissions, scoreboard values, target selectors, or command order. |

### Optional side quests

- Write a bug report on a sign or in the mentor workspace.
- Add labels to make the system easier to debug next time.
- Create a "known issues" board.
- Add a reset button.
- Hide a bug for the mentor or another learner to find.

### Mastery gates

**Do:** The learner repairs at least one broken system or subsystem.

**Explain:** The learner can state expected behavior versus actual behavior.

Example: "The pressure plate should open the door, but it only turns on the lamp."

**Debug:** The learner uses a step-by-step test instead of random trial-and-error.

Example: "The button sends power, the dust carries it, but the piston is facing the wrong way."

### Common failure points

- Learner changes too many things at once.
- Learner destroys the system out of frustration.
- Learner cannot describe expected behavior.
- Learner assumes the first visible issue is the only issue.
- Learner wants the mentor to give the answer.
- Learner gets bored if the bug is too hidden.

### Mentor fallback moves

- Freeze building for 60 seconds and only observe.
- Ask: "Before touching it, what should happen?"
- Use the "one change rule": change one thing, then test.
- Give a hint level menu: tiny hint, medium hint, big hint.
- Restore from backup if the learner breaks too much.
- Let the learner debug a smaller subsystem first.
- Praise the diagnostic move, not just the fix.

### Exit ticket

The learner gives a short bug report:

"Expected: ___. Actual: ___. Cause: ___. Fix: ___."

They can say it verbally, type it, or use a mentor-filled template.

### Parent-safe summary

Today your child practiced structured debugging. They compared what a system was supposed to do with what actually happened, tested one part at a time, and fixed a problem. This builds persistence, reasoning, and calmer problem-solving under frustration.

## S08 - Buddy Build Capstone

### Learning goal

Learners design, build, test, debug, and present a small Minecraft system that combines ideas from earlier sessions.

This is not a giant final exam. It is a showcase of competence.

### Early win

The learner chooses a capstone mission card.

Example options:

- Secret Base Security Gate.
- Automated Farm Helper.
- Lighthouse Signal System.
- Minecart Delivery Route.
- Adventure Checkpoint.
- Status Board for a Team Base.
- Teleport Hub.
- Puzzle Door.

The learner picks one required feature and one optional feature.

### Core quest

Build a working "Buddy System" with:

1. A clear purpose.
2. At least one input.
3. At least one output.
4. At least one visible state, repeated action, or sequence.
5. A test path.
6. A debug note.
7. A short demo.

The mentor helps scope the project so it is finishable. The capstone should be small and working, not massive and half-dead.

Good capstone example:

A pressure plate opens a door, turns on a green light, and updates a status sign from "locked" to "open."

Overbuilt capstone example:

A full city with a subway, economy, police system, custom mobs, and "maybe we'll add AI villagers." That is how MVPs go to die.

### Track variations

| Track | Variation |
|---|---|
| Visualist | Design a readable, polished system with clear paths, signs, status lights, and before/after states. |
| Mechanist | Build a functional redstone, rail, piston, farm, or item-flow system with a testable mechanism. |
| Operator | Build a command-based system such as a teleport hub, checkpoint, scoreboard challenge, or admin diagnostic station. |

### Optional side quests

- Add a user guide with signs.
- Add a reset button.
- Add a second mode.
- Add a "maintenance access" path.
- Add a debug station showing what could go wrong.
- Invite another learner or mentor to test it.

### Mastery gates

**Do:** The learner completes a working capstone system with a clear purpose.

**Explain:** The learner can present the system using simple technical language.

Suggested demo script:

"This is my ___. It is for ___. The input is ___. The output is ___. One problem I found was ___. I fixed it by ___."

**Debug:** The learner identifies and fixes one issue during testing, or explains what they would fix next if time runs out.

### Common failure points

- Project scope is too large.
- Learner wants to restart repeatedly.
- Learner decorates before core function works.
- Learner gets nervous presenting.
- Learner copies a demo without understanding it.
- System works only when the mentor secretly supports it.

### Mentor fallback moves

- Use a capstone template with three sizes: tiny, standard, stretch.
- Require "working first, fancy later."
- Ask: "What is the one thing this system must do?"
- Timebox decoration.
- Let the learner present by showing instead of speaking if needed.
- Use mentor prompts during demo but keep the learner as the owner.
- Capture one screenshot or short clip of the working system.

### Exit ticket

The learner completes the final reflection:

"I built ___. It works by ___. I debugged ___. Next I would improve ___."

### Parent-safe summary

Today your child completed a Minecraft capstone project that combined building, logic, testing, and debugging. They created a working system, explained how it behaved, and reflected on a problem they fixed or would improve next. This session showed both technical growth and confidence in presenting their work.

## 5. Post-S08 extension path for advanced learners

After the 8-session core, advanced learners can move into modular extensions. These should not replace the core arc during the pilot. They are post-core pathways for learners who want more challenge.

### Extension Path A - Redstone Engineer

Focus: mechanisms, circuits, timing, signal control.

Possible modules:

- Piston doors and hidden entrances.
- Redstone clocks and delay tuning.
- Item sorters and hopper systems.
- Minecart logistics.
- Simple combination locks.
- Farm automation.
- Debugging signal strength and direction.

Capstone option: build a working redstone-powered base with lights, locks, and maintenance access.

### Extension Path B - Command Operator

Focus: commands, automation, server tools, diagnostics.

Possible modules:

- Command block chains.
- Teleport hubs.
- Scoreboards.
- Tags and teams.
- Checkpoints.
- Adventure-map logic.
- Safe admin tools.
- Debugging target selectors and coordinates.

Capstone option: build a mini adventure map with checkpoints, rewards, and reset commands.

### Extension Path C - Systems Designer

Focus: systems thinking, player experience, reliability, feedback.

Possible modules:

- Designing a player path.
- Making readable signs and signals.
- Building tutorials inside the world.
- Creating test plans.
- Designing fail-safe systems.
- Making systems usable by another player.
- Collecting feedback and improving the build.

Capstone option: build a small Minecraft experience that another learner can use without mentor explanation.

### Extension Path D - Mentor-in-Training

Focus: communication, teaching, peer support.

Possible modules:

- How to give hints without taking over.
- How to make a debugging checklist.
- How to explain a mechanism.
- How to test someone else's build respectfully.
- How to create a challenge card for another learner.

Capstone option: design and run a 10-minute Minecraft challenge for another learner.

## 6. How the curriculum supports confidence, safety, and measurable progress

Block Buddies supports confidence by giving learners early wins before hard tasks. Each session starts with something concrete and achievable: place a marker, copy a pattern, turn on a lamp, fix a missing block. This prevents the learner from entering the session already feeling behind.

Safety comes from predictable structure. Learners know where they build, what the goal is, how to ask for help, and what happens when something breaks. Bugs are intentionally normalized. The mentor does not treat errors as personal failure; the mentor treats errors as signals from the system.

Progress is measurable because every session has observable gates:

- Can the learner build the thing?
- Can the learner explain what it does?
- Can the learner debug or test a problem?

The product should let mentors record evidence at the level of behavior, not vague impressions.

Good evidence:

- "Learner identified that the redstone signal stopped before the lamp."
- "Learner explained input -> path -> output using their own words."
- "Learner used one-change testing instead of replacing the whole system."

Weak evidence:

- "Had fun."
- "Did Minecraft."
- "Was creative."
- "Needs to focus."

The program can still care about fun and creativity, but the progress log should track specific moments of reasoning, communication, persistence, and independence.

## 7. Suggested interface structure

### Mentor view

The mentor view should be a session-running workspace, not a curriculum PDF hidden behind seven clicks.

Recommended layout:

#### 1. Session header

Fields shown:

- Session number.
- Session title.
- Estimated time.
- Learning goal.
- Core concept.
- Required world setup.
- Materials or commands needed.
- Safety notes.

Example:

"S04 - Switches, Signals, and If/Then Logic. Goal: learner builds a working input-output system and explains the rule."

#### 2. Learner profile strip

Show:

- Learner name.
- Current track preference.
- Prior mastery notes.
- Known supports.
- Last session summary.
- Current confidence rating.
- Communication preferences.

Example support note:

"Responds well to visual comparison. Avoid taking the mouse unless requested."

#### 3. Run-of-show cards

Each card should be mentor-runnable.

Cards:

- Welcome and reset.
- Early win.
- Core quest.
- Track variation.
- Side quest.
- Debug challenge.
- Exit ticket.

Each card should include:

- Mentor instructions.
- Suggested prompt.
- Expected learner action.
- Common stuck point.
- Quick fallback.

#### 4. Mastery gate panel

The mentor should be able to mark:

- Do: Not yet / With support / Independent.
- Explain: Not yet / With support / Independent.
- Debug: Not yet / With support / Independent.

Add a small evidence box for each gate.

Example:

Debug evidence: "Tested lamp directly, then traced redstone line and found missing dust."

#### 5. Hint ladder

For each challenge, show progressive hints:

- Hint 1: attention cue.
- Hint 2: narrow the search.
- Hint 3: show comparison.
- Hint 4: partial solution.
- Hint 5: mentor models one step, learner completes next step.

This prevents mentors from either abandoning the learner or solving everything instantly.

#### 6. Evidence capture

Allow:

- Screenshot.
- Short video clip.
- Text note.
- Exit ticket response.
- Mastery gate status.
- Parent-safe summary generation.

#### 7. Parent summary draft

The app should generate a plain-language draft from the session data.

Mentor can edit before sending.

The parent summary should include:

- What the learner built.
- What concept they practiced.
- One strength observed.
- One next step.
- No raw behavioral notes unless the coordinator decides it is appropriate.

### Teacher/coordinator view

The teacher or coordinator view should focus on roster-level progress and program quality.

Recommended sections:

#### 1. Cohort dashboard

Show:

- Learners.
- Current session.
- Attendance.
- Track preference.
- Do / Explain / Debug progress.
- Confidence trend.
- Mentor assigned.
- Last completed session.

#### 2. Progress heatmap

Rows: learners.

Columns: sessions or mastery gates.

Cells: Not started / With support / Independent / Needs review.

This makes it easy to spot patterns.

Examples:

- Many learners stuck on S05 state/status means the session may need simplification.
- One learner repeatedly passes Do but not Explain means they may need communication supports, not easier technical work.
- One learner repeatedly passes Explain but not Debug means they may need structured testing practice.

#### 3. Session quality review

For each session, show:

- Completion rate.
- Common failure points.
- Average mentor confidence.
- Common fallback used.
- Evidence quality.
- Parent summary sent or pending.

#### 4. Learner support notes

Coordinator-only notes should be separated from parent-facing notes.

Support notes might include:

- Frustration triggers.
- Best prompt type.
- Attention supports.
- Pairing recommendations.
- Accessibility needs.
- Safety concerns.

These should never be auto-sent to parents.

#### 5. Resource readiness

Show whether each session has:

- World template ready.
- Demo station ready.
- Broken station ready.
- Command permissions checked.
- Mentor guide ready.
- Screenshots/examples ready.

This matters in pilots because "the curriculum is good but the world wasn't ready" is a very avoidable faceplant.

### Parent view

The parent view should be calm, plain, and evidence-based. No fake dashboards pretending a child's Minecraft gate is a PhD defense.

Recommended sections:

#### 1. Current progress snapshot

Show:

- Current session.
- Recent project.
- Skills practiced.
- Confidence or independence trend.
- Next session theme.

Example:

"Your child is currently working on input-output logic and debugging simple systems."

#### 2. Session summaries

Each summary should include:

- What they built.
- What they practiced.
- One concrete success.
- One next step.
- Optional screenshot.

Example:

"Today your child built a pressure-plate door and explained the rule: if the player steps on the plate, the door opens. They debugged a disconnected redstone line by comparing the working demo to their own build."

#### 3. Skill map

Use parent-friendly labels:

- Planning.
- Step-by-step thinking.
- Cause and effect.
- Debugging.
- Explaining ideas.
- Persistence.
- Safe collaboration.

Avoid overloading parents with terms like "conditionals," "state," and "abstraction" unless those are explained simply.

#### 4. At-home conversation prompts

Short prompts only.

Examples:

- "Ask your child what they built today."
- "Ask them what broke and how they fixed it."
- "Ask them what they would improve next."

#### 5. Evidence gallery

Optional screenshots or clips with captions.

Evidence should be curated. Parents do not need a raw dump of every block placed.

### Student view

The student view should feel like a quest board.

Recommended sections:

#### 1. Mission card

Show:

- Session title.
- Goal in kid-friendly language.
- Main build challenge.
- Optional side quest.
- Badge or completion marker.

Example:

"Mission: Build a security gate. Make something happen when a player presses, steps, flips, or triggers something."

#### 2. Track choice

Let the learner choose a flavor:

- Builder path.
- Redstone path.
- Command path.

The UI can map these internally to Visualist, Mechanist, and Operator, but the student-facing language should be simpler.

#### 3. Checklist

Use short, concrete items.

Example for S04:

- I made an input.
- I made an output.
- I connected them.
- I tested it.
- I fixed one problem.
- I explained the rule.

#### 4. Hint button

Hints should be tiered and non-shaming.

Example:

- "Look at the input."
- "Now check the path."
- "Now check the output."
- "Compare it to the demo."
- "Ask your mentor for a rebuild clue."

#### 5. Build proof

Learner can submit:

- Screenshot.
- Sign text.
- Voice explanation.
- Mentor checkoff.

#### 6. Badge language

Keep badges tied to behaviors.

Examples:

- First Fix.
- Signal Solver.
- Blueprint Builder.
- Debug Detective.
- Loop Keeper.
- System Designer.

Avoid badges that imply fixed identity like "genius" or "master coder." The learner should feel proud without the weird gifted-kid curse DLC.

## UI Data Model Notes

Each session should expose reusable fields so the curriculum can become app content rather than hardcoded pages.

A clean MVP data model could look like this:

```json
{
  "sessionId": "S04",
  "sequenceNumber": 4,
  "title": "Switches, Signals, and If/Then Logic",
  "shortTitle": "If/Then Gates",
  "estimatedMinutes": 60,
  "coreConcept": "Input-output logic and conditionals",
  "objective": "Learner builds a working input-output system and explains the rule.",
  "studentMissionText": "Make something happen when a player presses, steps, flips, or triggers something.",
  "mentorFraming": "Today we are building systems that respond to triggers: if this happens, then that happens.",
  "worldSetup": {
    "requiredZones": ["demoStation", "learnerPlot", "brokenStation"],
    "requiredItems": ["button", "lever", "pressure_plate", "redstone_dust", "redstone_lamp", "door"],
    "commandsRequired": false,
    "safetyNotes": ["Use command blocks only in controlled areas.", "Disable destructive items if needed."]
  },
  "earlyWin": {
    "title": "Button to Lamp",
    "steps": [
      "Place a redstone lamp.",
      "Place a button nearby.",
      "Connect the button to the lamp.",
      "Press the button and observe the output."
    ],
    "successCriteria": "The lamp turns on when the button is pressed."
  },
  "coreQuest": {
    "title": "Build a Security Gate",
    "steps": [
      "Choose an input.",
      "Choose an output.",
      "Connect the input to the output.",
      "Add a visible test path.",
      "Add a sign explaining the if/then rule.",
      "Test and fix one issue."
    ],
    "successCriteria": "The system responds correctly to the trigger."
  },
  "trackExamples": {
    "visualist": {
      "label": "Builder Path",
      "example": "Create a clear gate with lights, signs, and colored paths."
    },
    "mechanist": {
      "label": "Redstone Path",
      "example": "Create a piston gate, lamp circuit, or button door."
    },
    "operator": {
      "label": "Command Path",
      "example": "Create a pressure-plate command trigger for a message, teleport, or reward."
    }
  },
  "sideQuests": [
    "Add a warning light.",
    "Add a manual override.",
    "Make the gate work from both sides."
  ],
  "masteryGates": {
    "do": {
      "criteria": "Learner builds a working if/then system.",
      "levels": ["notYet", "withSupport", "independent"]
    },
    "explain": {
      "criteria": "Learner names the input, output, and rule.",
      "levels": ["notYet", "withSupport", "independent"]
    },
    "debug": {
      "criteria": "Learner tests the trigger and identifies where the system stops working.",
      "levels": ["notYet", "withSupport", "independent"]
    }
  },
  "commonFailurePoints": [
    "Input and output are not connected.",
    "Redstone signal does not reach the output.",
    "Learner cannot name the rule.",
    "Command block has wrong coordinates or target."
  ],
  "fallbackSteps": [
    "Reduce the system to a button and lamp.",
    "Use colored blocks to label input, path, and output.",
    "Compare the learner build to the demo.",
    "Test output first, then input, then connection."
  ],
  "hintLadder": [
    "What is the input?",
    "What is the output?",
    "Where does the signal travel?",
    "Where does it stop?",
    "Compare this part to the demo."
  ],
  "exitTicket": {
    "prompt": "If ___ happens, then ___ happens.",
    "acceptedFormats": ["verbal", "typed", "sign", "mentorTranscribed"]
  },
  "evidenceItems": [
    {
      "type": "screenshot",
      "label": "Working gate"
    },
    {
      "type": "text",
      "label": "Learner if/then explanation"
    },
    {
      "type": "mentorNote",
      "label": "Debugging evidence"
    }
  ],
  "parentSummaryTemplate": "Today your child built a simple cause-and-effect system in Minecraft. They practiced identifying inputs, outputs, and rules, then tested the system to find where the connection failed.",
  "studentChecklist": [
    "I chose an input.",
    "I chose an output.",
    "I connected them.",
    "I tested the system.",
    "I fixed one problem.",
    "I explained the rule."
  ],
  "mentorNotesSchema": {
    "strengthObserved": "string",
    "supportUsed": "string",
    "nextStep": "string",
    "privateCoordinatorNote": "string"
  }
}
```

For the full product, each session should have the same reusable field structure:

| Field | Purpose |
|---|---|
| `sessionId` | Stable ID for curriculum logic |
| `sequenceNumber` | Ordering in the 8-session arc |
| `title` | Full mentor-facing title |
| `shortTitle` | Compact UI label |
| `estimatedMinutes` | Session pacing |
| `coreConcept` | Main CS or systems idea |
| `objective` | Mentor-facing learning goal |
| `studentMissionText` | Kid-facing challenge text |
| `mentorFraming` | Short script for introducing the session |
| `worldSetup` | Required Minecraft setup |
| `earlyWin` | First 5-10 minute success task |
| `coreQuest` | Main build challenge |
| `trackExamples` | Visualist / Mechanist / Operator variations |
| `sideQuests` | Optional stretch tasks |
| `masteryGates` | Do / Explain / Debug criteria |
| `commonFailurePoints` | Known places learners get stuck |
| `fallbackSteps` | Mentor moves when stuck |
| `hintLadder` | Progressive hints |
| `exitTicket` | End-of-session check |
| `evidenceItems` | Screenshots, notes, clips, artifacts |
| `parentSummaryTemplate` | Safe summary draft |
| `studentChecklist` | Quest-board checklist |
| `mentorNotesSchema` | Structured notes for progress tracking |

For the pilot, the most important fields are:

`sessionId`, `title`, `objective`, `earlyWin`, `coreQuest`, `trackExamples`, `masteryGates`, `fallbackSteps`, `exitTicket`, `evidenceItems`, `parentSummaryTemplate`, and `studentChecklist`.

Those are enough to run sessions, track progress, and learn from the pilot without building a giant curriculum operating system before the actual learners show up.

## Block Buddies Stage 2: Modpack Lab

Stage 2 should be called something like **Modpack Lab**, **Modcraft Lab**, or **Block Buddies: Systems & Mods**.

The key idea: learners move from building systems inside Minecraft to modifying the rules, tools, interfaces, and behaviors of Minecraft itself.

This is where the curriculum gets richer without becoming "okay kids, welcome to Java dependency hell." Full Java mod development can come later. For this stage, the educational gold is in modpack literacy: choosing mods, reading dependencies, changing configs, testing behavior, balancing systems, documenting changes, and understanding how a bunch of separate parts become one playable experience.

A modpack is not just "a pile of cool mods." In product terms, it is a configured experience. Modrinth describes a modpack as a list of mods bundled with additional files such as configs, essentially a modded game instance ready to play. CurseForge exports modpacks with a `manifest.json` and an `overrides` folder for configs, maps, saves, resources, and other files. That file/folder structure is perfect curriculum material because it turns invisible software packaging into something learners can inspect. ([Modrinth Help Center][1])

## Stage 2 curriculum vision

Stage 2 teaches learners that games are systems made of rules, assets, dependencies, settings, constraints, and player experiences. Mods become the medium for learning how software changes behavior.

The learner arc is:

"I can play a modded world."

Then:

"I can understand what changed."

Then:

"I can safely change one thing."

Then:

"I can test whether my change worked."

Then:

"I can design a small modded experience for another person."

This stage should feel like becoming a junior game designer, systems tester, and modpack curator. Not "school computer science wearing a creeper hoodie."

## Stage 2 learner assumptions

This stage assumes learners have finished or mostly finished the 8-session core arc. They should already have some comfort with:

- Building in a prepared Minecraft world.
- Explaining input/output behavior.
- Testing small systems.
- Debugging one part at a time.
- Using mentor prompts without melting into the lava of overwhelm.

They do **not** need to know Java. They do **not** need to understand servers. They do **not** need to manually install random `.jar` files from the internet.

For the pilot, assume:

- Sessions are still 1:1 or small-group.
- Worlds are local/single-player or mentor-controlled LAN-style only.
- No public servers yet.
- No learner-downloaded random mods.
- One approved launcher/profile workflow.
- One locked Minecraft version and one loader for the whole cohort.
- Mentor has a resettable clean profile.
- Every session uses a prepared "known-good" modpack.

The product should treat modding as a controlled lab, not "here's a launcher, enjoy the malware casino."

## Recommended MVP scope

For the first pilot, do not try to teach every kind of Minecraft modding. Use a layered progression.

### Layer 1: Modpack literacy

Learners understand:

- What a mod is.
- What a modpack is.
- What a loader is.
- Why versions matter.
- Why dependencies matter.
- Why configs matter.
- Why testing matters.

Modrinth's `.mrpack` format explicitly tracks Minecraft, Forge, NeoForge, Fabric Loader, or Quilt Loader as dependencies, which makes "loader/version compatibility" a real artifact learners can inspect, not an abstract lecture. Modrinth also labels dependency relationships such as required, optional, incompatible, and embedded. That is basically a dependency graph wearing diamond armor. ([Modrinth Help Center][2])

### Layer 2: Information and interface mods

Start with mods that help learners see the game better.

Examples:

- Recipe viewers such as JEI or EMI.
- Minimap or waypoint tools.
- Tooltip/inventory helper mods.
- Accessibility or quality-of-life mods.

JEI and EMI are recipe/item viewer mods, so they are good early choices because learners can immediately ask "How do I make this?" and use the interface to investigate. ([CurseForge][3])

### Layer 3: Resource packs and data-driven changes

Introduce:

- Textures.
- Sounds.
- Models.
- Recipes.
- Loot tables.
- Advancements.
- Tags.
- Simple functions.

Fabric's documentation describes data packs and resource packs as central to data-driven design in the Minecraft modding scene, which is the exact pedagogical sweet spot here: learners can change behavior/data before writing full mods. ([Fabric Wiki][4])

### Layer 4: Config and balance

Learners change parameters:

- Spawn rates.
- Recipe costs.
- Tool durability.
- UI settings.
- Difficulty values.
- Feature toggles.
- Worldgen options, if safe.

This teaches variables, constraints, experimental design, and unintended consequences.

### Layer 5: Systems mods

Introduce one "big idea" mod at a time.

Good categories:

- Mechanical automation.
- Farming/food/ecology.
- Exploration/worldgen.
- Storage/logistics.
- Programming/robots.
- Decoration/building.
- Quests/progression.

Create is a strong example for mechanical systems because it focuses on visible contraptions, automation, building, decoration, and in-game visual documentation through Ponder. CC: Tweaked is a strong later option because it adds programmable computers and turtles controlled with Lua. ([CurseForge][5])

### Layer 6: Mini-modpack capstone

Learners curate a tiny modpack experience:

- 3-6 approved mods.
- One config change.
- One resource/data pack change.
- One test plan.
- One "player guide."
- One debug log.
- One showcase.

This is the Stage 2 equivalent of the S08 capstone.

## Full 8-session Stage 2 curriculum map

| Session | Title | Core concept | Minecraft output |
|---|---|---|---|
| S09 | Welcome to Modded Minecraft | Mods, modpacks, profiles, safe installs | Launch a clean curated modpack and identify what changed |
| S10 | Recipe Radar | Information systems, UI, search, discoverability | Use JEI/EMI-style tools to solve a crafting scavenger hunt |
| S11 | Resource Pack Remix | Representation, assets, visual design, accessibility | Modify or apply a small visual/sound/text pack |
| S12 | Config Lab | Parameters, variables, balance, before/after testing | Change one safe config value and test its effect |
| S13 | Rules Without Java | Data packs, recipes, loot, tags, simple functions | Add or modify a recipe/reward/challenge rule |
| S14 | Dependency Dungeon | Dependencies, compatibility, versions, crash diagnosis | Fix a missing/incompatible dependency in a prepared profile |
| S15 | Contraption or Automation Mod | Systems, throughput, bottlenecks, mechanical reasoning | Build a small modded machine or automation chain |
| S16 | Mini-Modpack Capstone | Product design, testing, documentation, player experience | Build and present a tiny curated modpack experience |

## Stage 2 session-by-session outline

### S09 - Welcome to Modded Minecraft

#### Learning goal

Learners understand that a modpack is a controlled version of Minecraft with extra rules, tools, blocks, interfaces, or behaviors. They learn the difference between vanilla Minecraft, a mod, a loader, a profile, and a modpack.

The goal is not installation mastery yet. The goal is safe mental models.

#### Early win

Learner launches a prepared Block Buddies modpack profile and finds three things that are different from vanilla Minecraft.

Examples:

- New blocks.
- New inventory tabs.
- New recipe viewer.
- New map.
- New mobs.
- New settings.
- New loading screen.

#### Core quest

"Mod Detective."

The learner receives a simple checklist:

- Find one visual change.
- Find one item or recipe change.
- Find one interface change.
- Find one behavior change.
- Identify which mod probably caused each change.

Mentor shows the mod list but does not explain every mod. Learner makes guesses and tests them.

#### Track variations

| Track | Variation |
|---|---|
| Visualist | Focus on textures, blocks, UI changes, maps, icons, new structures, before/after screenshots. |
| Mechanist | Focus on new machines, moving parts, automation blocks, redstone interactions, tool behavior. |
| Operator | Focus on profile settings, mod list, versions, loader, config folders, logs, and controlled startup. |

#### Do / Explain / Debug gates

**Do:** Learner launches the prepared profile and identifies at least three changes.

**Explain:** Learner can explain "mod" versus "modpack" in plain language.

Good enough: "A mod changes one part of Minecraft. A modpack is a bunch of mods set up together."

**Debug:** Learner can name one thing to check if the modpack does not launch.

Good enough: "Check that we opened the right profile" or "Check the version/loader."

#### Common failure points

- Learner wants to install random mods immediately.
- Learner treats the modpack as magic, not a system.
- Learner gets distracted by all the new blocks.
- Learner cannot separate "one mod" from "the whole pack."
- Learner panics if loading takes longer than vanilla.

#### Mentor fallback moves

- Keep the modpack tiny: 3-5 mods only.
- Use a vanilla comparison world.
- Ask "What changed?" before "How does it work?"
- Use one approved launcher/profile only.
- Do not let the session become tech support theater.
- Show the mod list as a menu, not a wall of doom.

#### Exit ticket

"What is one modded change you noticed, and what do you think caused it?"

#### Parent-safe summary

Today your child began learning how modded Minecraft works. They launched a prepared modpack, compared it to regular Minecraft, and identified changes caused by mods. This introduced safe software experimentation, observation, and systems thinking.

### S10 - Recipe Radar

#### Learning goal

Learners use modded interface tools to investigate information. They practice search, filtering, recipe reading, uses, dependencies, and planning from available data.

This is secretly an information literacy session. The learner thinks they are hunting recipes. You are teaching them how to query a system.

#### Early win

Learner uses a recipe viewer to answer:

"How do I craft this item?"

Then:

"What can this item be used for?"

JEI supports recipe and use lookup controls; EMI is also a recipe/item viewer with a focus on accessible user experience. ([CurseForge][3])

#### Core quest

"Crafting Scavenger Hunt."

Learner receives three target items:

1. Easy item: visible basic recipe.
2. Medium item: requires an ingredient chain.
3. Mystery item: learner must search by mod name, category, or use.

The learner must create a mini production plan.

Example:

"To make the Buddy Lantern, I need glass, torch, copper nugget. To get copper nugget, I need copper ingot. To get copper ingot, I smelt raw copper."

#### Track variations

| Track | Variation |
|---|---|
| Visualist | Build a wall display showing the recipe chain using item frames and signs. |
| Mechanist | Plan a recipe chain that could later be automated with machines or hoppers. |
| Operator | Use search syntax, filters, mod-name search, and interface settings. Create a "recipe query log." |

#### Do / Explain / Debug gates

**Do:** Learner finds a recipe and crafts the item.

**Explain:** Learner can explain the ingredient chain.

Good enough: "This item needs these two parts, and this part has its own recipe."

**Debug:** Learner fixes one failed craft.

Examples:

- Wrong item variant.
- Missing tool.
- Recipe requires a machine.
- Recipe belongs to a different mod.
- Item is disabled or creative-only.

#### Common failure points

- Learner types broad searches and gets overwhelmed.
- Learner sees an item but not the recipe path.
- Learner confuses "recipe" with "uses."
- Learner does not notice machine-required recipes.
- Learner grabs items from creative and skips the logic.

#### Mentor fallback moves

- Use only 2-3 target items.
- Give search terms.
- Ask: "What is the next missing ingredient?"
- Use item frames to make the chain physical.
- Temporarily hide advanced mods from the scavenger hunt.
- Let creative mode support testing, but still require explanation.

#### Exit ticket

"Pick one item and explain how to find its recipe and one use for it."

#### Parent-safe summary

Today your child used modded Minecraft tools to investigate recipes and item uses. They practiced search, planning, and breaking a complex crafting goal into smaller steps.

### S11 - Resource Pack Remix

#### Learning goal

Learners understand that games represent information through visuals, names, sounds, colors, icons, and interface cues. They learn that changing presentation can make a system clearer, cooler, or more confusing.

This is visual design, accessibility, and semiotics, but without making a nine-year-old say "semiotics," because we are not monsters.

#### Early win

Learner applies a prepared resource pack that changes one obvious thing.

Examples:

- A custom Buddy Token texture.
- A clearer red/green status lamp texture.
- A custom sound when a quest is complete.
- A renamed item.
- A high-contrast path marker.

#### Core quest

"Make the System Easier to Read."

Learner chooses one existing build from Stage 1 and improves its readability using visual or audio changes.

Examples:

- Locked/unlocked textures.
- Warning icon.
- Custom quest item.
- Better sign language.
- Color-coded machine parts.
- Sound cue for success/failure.

The learner then compares before and after.

#### Track variations

| Track | Variation |
|---|---|
| Visualist | Create or choose textures, icons, colors, signs, labels, and layout improvements. |
| Mechanist | Add visual indicators to moving parts, power sources, inputs, outputs, or machine states. |
| Operator | Inspect resource pack folder structure, filenames, pack metadata, and reload behavior. |

#### Do / Explain / Debug gates

**Do:** Learner applies or modifies one resource change.

**Explain:** Learner explains what information the change communicates.

Good enough: "Green means ready. Red means blocked."

**Debug:** Learner fixes one resource pack problem.

Examples:

- Pack not enabled.
- Wrong file name.
- Texture path mismatch.
- Forgot reload.
- Change is too subtle to notice.
- Color choice is confusing.

#### Common failure points

- Learner spends the whole session making pixel art.
- File paths become too abstract.
- Pack applies but change is invisible.
- Learner chooses visuals that look cool but communicate poorly.
- Learner edits the wrong profile.

#### Mentor fallback moves

- Use prepared templates.
- Give three texture/icon choices instead of blank creation.
- Use before/after screenshots.
- Ask: "What should the player understand faster now?"
- Restrict custom art time to 10-15 minutes.
- If file editing is too much, let learner choose from prebuilt resource pack variants.

#### Exit ticket

"What did your resource change help the player notice?"

#### Parent-safe summary

Today your child learned how visuals and sounds can change the way a player understands a system. They applied or modified a resource pack element and explained how it made information clearer.

### S12 - Config Lab

#### Learning goal

Learners understand configuration as controlled rule-changing. They learn that software often exposes settings that change behavior without rewriting the whole program.

Core concepts:

- Parameters.
- Variables.
- Constraints.
- Before/after testing.
- Balance.
- Unintended consequences.

#### Early win

Learner changes one harmless setting and observes the difference.

Examples:

- UI setting.
- Minimap display option.
- Recipe viewer overlay option.
- Tool durability multiplier in a prepared config.
- Spawn frequency in a controlled test world.
- Feature toggle for a specific mod.

#### Core quest

"Change One Rule."

Learner receives a test plan:

1. Observe current behavior.
2. Predict what the config change will do.
3. Change one value.
4. Reload/relaunch if needed.
5. Test again.
6. Record before/after.

Example:

"Before: apples restore X hunger. Change: increase/decrease setting. After: test food behavior."

Or:

"Before: machine speed is slow. Change speed value. After: test production time."

The point is not the specific mod. The point is experimental control.

#### Track variations

| Track | Variation |
|---|---|
| Visualist | Change visual/UI config and compare before/after screenshots. |
| Mechanist | Change machine speed, energy use, processing time, range, or tool behavior. |
| Operator | Open config files, identify keys/values, document the exact value changed, and restore defaults. |

#### Do / Explain / Debug gates

**Do:** Learner changes one config value and tests its effect.

**Explain:** Learner explains the before/after difference.

Good enough: "When the number was higher, the machine worked faster."

**Debug:** Learner fixes one config mistake.

Examples:

- Changed wrong value.
- Value outside accepted range.
- Forgot to save.
- Forgot to restart/reload.
- Broke balance by making a value too extreme.
- Edited the wrong profile.

#### Common failure points

- Learner changes five values at once.
- Learner thinks "bigger number = better design."
- Learner cannot tell whether the change worked.
- Config file syntax breaks.
- Learner forgets the original value.
- Mentor turns into Stack Overflow with legs.

#### Mentor fallback moves

- Use the "one variable rule."
- Always write down the original value.
- Use a before/after table.
- Prepare config files with comments or highlighted safe lines.
- Provide allowed value ranges.
- Keep a reset copy.
- Ask: "What did we change? What stayed the same?"

#### Exit ticket

"I changed ___ from ___ to ___. The effect was ___."

#### Parent-safe summary

Today your child learned how settings can change software behavior. They changed one safe configuration value, made a prediction, tested the result, and compared before and after.

### S13 - Rules Without Java

#### Learning goal

Learners learn that some game behavior can be changed through data files, recipes, loot tables, tags, advancements, or simple functions, without writing a full Java mod.

This session is the bridge between "using mods" and "making mod-like changes."

#### Early win

Learner triggers a prepared data-driven change.

Examples:

- A custom recipe creates a Buddy Token.
- A loot chest gives a custom reward.
- An advancement appears after entering a build zone.
- A function gives a starter kit.
- A custom tag groups items.

For Bedrock/Education-style environments, this maps well to Add-Ons: Microsoft's creator docs describe resource packs and behavior packs, with behavior packs controlling things such as entity behaviors, loot drops, spawn rules, items, recipes, and trade tables. ([Microsoft Learn][6])

#### Core quest

"Add One New Rule."

Learner chooses one rule template:

- New recipe.
- New loot reward.
- New advancement.
- New item group/tag.
- New function command.
- New entity behavior, if using Bedrock Add-Ons.

Then they customize one part.

Examples:

- Change recipe ingredient.
- Change reward item.
- Change advancement name.
- Change function output.
- Change item tag membership.

#### Track variations

| Track | Variation |
|---|---|
| Visualist | Create a custom reward item with name/icon/lore and make it appear in a visible reward station. |
| Mechanist | Add a recipe or loot rule that supports a machine/build progression. |
| Operator | Inspect folder structure, JSON syntax, namespaces, reload commands, and error feedback. |

#### Do / Explain / Debug gates

**Do:** Learner modifies one data-driven rule and sees it work in-game.

**Explain:** Learner explains the rule in if/then or input/output language.

Good enough: "If I craft these items in this shape, I get the token."

**Debug:** Learner fixes one rule problem.

Examples:

- JSON comma error.
- Wrong namespace.
- Wrong file path.
- Recipe does not reload.
- Item ID is wrong.
- Reward is too easy or too overpowered.

#### Common failure points

- JSON syntax is brittle.
- Learner edits the wrong file.
- Learner does not understand namespaces.
- Rule works but is unbalanced.
- Learner expects visual changes from a behavior-only file.
- Reload/restart step gets missed.

#### Mentor fallback moves

- Use fill-in-the-blank templates.
- Change only one field at a time.
- Use a validator or prechecked examples.
- Keep one working sample beside the edited file.
- Use a "known-good restore" button or backup.
- Focus on "What rule did we change?" not file-system trivia.

#### Exit ticket

"What rule did you add or change, and how did you test it?"

#### Parent-safe summary

Today your child changed a Minecraft rule using a prepared template. They learned that software behavior can be controlled through structured data, then tested and debugged their change.

### S14 - Dependency Dungeon

#### Learning goal

Learners understand dependencies and compatibility. They learn that modded systems can fail because one part requires another part, the wrong version is installed, or two parts conflict.

This is one of the most valuable sessions in the whole stage. It teaches a brutally useful real-world idea: sometimes nothing is "broken" morally or magically. The system just has incompatible parts.

#### Early win

Learner sees a prepared "missing dependency" example and matches it to the missing mod from a short list.

Example:

"This mod needs Fabric API."

Or:

"This mod version supports a different Minecraft version."

#### Core quest

"Fix the Pack."

Mentor gives the learner a broken copy of a tiny profile with one intentional issue:

- Missing dependency.
- Wrong loader.
- Wrong Minecraft version.
- Client-only mod placed where it should not be.
- Duplicate incompatible mod.
- Disabled required mod.
- Wrong config file.

Learner uses a checklist:

1. What changed since the working version?
2. What does the error/log say?
3. Is the Minecraft version correct?
4. Is the loader correct?
5. Is a required dependency missing?
6. Is there an incompatible mod?
7. What is the smallest fix to test?

#### Track variations

| Track | Variation |
|---|---|
| Visualist | Use a dependency map with nodes and arrows. Learner draws "this mod needs that mod." |
| Mechanist | Treat the modpack like a machine: loader -> mod -> dependency -> config -> world. Find which gear is missing. |
| Operator | Read simplified logs, compare mod lists, check version numbers, and document the fix. |

#### Do / Explain / Debug gates

**Do:** Learner fixes or identifies the cause of one prepared modpack issue.

**Explain:** Learner explains the dependency relationship.

Good enough: "This mod cannot run alone. It needs that other mod."

**Debug:** Learner uses evidence from the error, mod list, or version info instead of guessing randomly.

#### Common failure points

- Learner sees an error screen and shuts down.
- Learner wants to delete everything.
- Learner updates one mod and creates a new mismatch.
- Learner confuses Minecraft version, loader version, and mod version.
- Learner does not know when to stop changing things.
- The error log is too noisy.

#### Mentor fallback moves

- Use fake/simplified logs before real logs.
- Give only three possible causes.
- Use a visual dependency graph.
- Compare working profile vs broken profile.
- Use the "one change rule."
- Never use a giant real crash report as the first example. That is not pedagogy; that is hazing.

#### Exit ticket

"The pack failed because ___. I found that by checking ___. The fix was ___."

#### Parent-safe summary

Today your child learned about dependencies: how one piece of software may need another piece to work. They diagnosed a prepared modpack problem and practiced fixing it by checking evidence instead of guessing.

### S15 - Contraption / Automation Mod Lab

#### Learning goal

Learners use one deeper mod to build a visible system with inputs, outputs, flow, constraints, and bottlenecks.

Recommended mod category: mechanical automation.

Create is a strong example because its machines and contraptions are visible in-world rather than hidden entirely inside menus, and it includes visual in-game documentation through Ponder. ([CurseForge][5])

#### Early win

Learner places a simple modded machine or mechanism and makes it do one visible action.

Examples:

- Turn a shaft.
- Move an item on a belt.
- Grind or process one material.
- Spin a fan.
- Power a simple machine.
- Use an in-game guide/ponder feature.

#### Core quest

"Build a Tiny Production Line."

Required features:

1. Input item.
2. Processing step.
3. Output item.
4. Visible movement or state change.
5. One test run.
6. One bottleneck or failure identified.

Examples:

- Wheat -> flour.
- Cobblestone -> gravel/sand, depending on available mods.
- Logs -> planks.
- Ore -> processed material.
- Item enters belt -> machine changes it -> chest collects output.

#### Track variations

| Track | Variation |
|---|---|
| Visualist | Build a clean, readable factory display with labels, viewing windows, and before/after item frames. |
| Mechanist | Tune belts, gears, shafts, rotational direction, speed, or mechanical power. |
| Operator | Create a test checklist: input count, output count, failure point, reset step, performance note. |

#### Do / Explain / Debug gates

**Do:** Learner builds a working mini-production line.

**Explain:** Learner explains the flow from input to output.

Good enough: "The wheat goes in here, the machine changes it, and the flour comes out there."

**Debug:** Learner finds one bottleneck or broken step.

Examples:

- Item falls off belt.
- Machine lacks power.
- Rotation direction is wrong.
- Output chest is blocked.
- System jams.
- Input rate is too fast.
- Output is not collected.

#### Common failure points

- Learner builds too large too quickly.
- Rotational direction or power source is confusing.
- Learner copies a machine but cannot explain it.
- Items move but do not process.
- Learner ignores output collection.
- System works once but is not repeatable.

#### Mentor fallback moves

- Start with one machine and one item.
- Use transparent blocks and signs.
- Require "input -> process -> output" labels.
- Use the in-game guide before mentor lecture.
- Slow down the system so the learner can see it.
- Ask: "Where is the item right now? Where should it go next?"

#### Exit ticket

"My system changes ___ into ___. The slowest or weakest part is ___."

#### Parent-safe summary

Today your child built a small modded automation system. They practiced tracing how materials move through a process, identifying bottlenecks, and explaining how a system turns inputs into outputs.

### S16 - Mini-Modpack Capstone

#### Learning goal

Learners design a small, playable modded experience for another person. They combine mod selection, configuration, rules, visuals, testing, and documentation.

This is product design disguised as Minecraft. Which is exactly the move.

#### Early win

Learner chooses a capstone theme card.

Examples:

- Cozy Builder Pack.
- Mini Factory Pack.
- Explorer's Field Kit.
- Puzzle Dungeon Pack.
- Farming & Food Pack.
- Robot Helper Pack.
- Base Upgrade Pack.
- Accessibility/Clarity Pack.

#### Core quest

Create a tiny modpack experience with:

1. A theme.
2. 3-6 approved mods.
3. One config change.
4. One visual/resource or data-driven change.
5. One guided challenge.
6. One test checklist.
7. One player-facing guide.
8. One debug note.

This does not have to be published publicly. For the pilot, export or save it as an internal profile only.

Modrinth and CurseForge both use structured modpack packaging concepts: Modrinth `.mrpack` uses a root `modrinth.index.json` plus optional overrides, while CurseForge export uses `manifest.json` and an `overrides` folder. That makes the final capstone exportable, inspectable, and product-friendly. ([Modrinth Help Center][2])

#### Track variations

| Track | Variation |
|---|---|
| Visualist | Make the pack feel readable and polished: icons, screenshots, signs, guidebook, visual identity. |
| Mechanist | Build a playable machine/progression chain using mechanical or automation mods. |
| Operator | Own the pack structure: mod list, version notes, config changes, test plan, known issues. |

#### Do / Explain / Debug gates

**Do:** Learner produces a small playable modded experience.

**Explain:** Learner explains the theme, mods, changes, and intended player experience.

Good enough: "This is a factory starter pack. I added recipe viewing, Create, and a guide. The goal is to make flour from wheat."

**Debug:** Learner identifies at least one issue found during testing and either fixes it or documents the next fix.

#### Common failure points

- Scope gets ridiculous.
- Learner adds mods because they look cool, not because they fit.
- Pack becomes unstable.
- Learner forgets to document changes.
- Config changes are not tested.
- Capstone becomes "download a big modpack and vibe."

#### Mentor fallback moves

- Hard cap the number of mods.
- Use theme cards.
- Require a one-sentence player promise: "This pack lets you ___."
- Use "working first, fancy later."
- Give a capstone template.
- Test with a second person if available.
- Accept "known issue documented" as partial debug mastery.

#### Exit ticket

"My modpack is for ___. I chose these mods because ___. I changed ___. I tested ___. One thing I fixed or would fix next is ___."

#### Parent-safe summary

Today your child designed a small modded Minecraft experience. They chose a theme, selected approved mods, made a controlled change, tested the result, and explained how the pack should feel for another player. This combined creativity with software planning and debugging.

## What education we can squeeze out of modding/modpacks

### Computer science concepts

| Concept | Modpack expression |
|---|---|
| Abstraction | A mod hides complex code behind blocks, items, settings, and rules. |
| Dependencies | Some mods require libraries, loaders, or specific versions. |
| Versioning | Minecraft version, loader version, and mod version must match. |
| Configuration | Settings change behavior without changing source code. |
| Variables | Config values act like parameters. |
| Input/output | Machines, recipes, commands, and automation chains transform inputs into outputs. |
| State | Machines can be powered/unpowered, configured/misconfigured, full/empty, active/idle. |
| Data structures | Recipes, loot tables, tags, configs, and mod lists are structured data. |
| Debugging | Crashes, missing recipes, broken machines, and config mistakes require diagnosis. |
| Testing | Before/after checks and one-change testing become normal practice. |
| Systems integration | A modpack is many subsystems working together. |
| User experience | Interface mods, guidebooks, icons, signs, and progression shape how players understand the world. |

### Systems thinking concepts

| Concept | Minecraft-native example |
|---|---|
| Bottlenecks | A belt moves items faster than a machine can process them. |
| Feedback | A lamp shows machine status. |
| Constraints | A recipe is expensive on purpose to slow progression. |
| Tradeoffs | More mods = more features but also more instability. |
| Emergence | Two mods interact in surprising ways. |
| Robustness | A pack still works after restart, reload, and repeated testing. |
| Balance | A reward should feel useful without deleting all challenge. |
| Observability | Logs, status lights, recipe viewers, maps, and guide signs make systems easier to understand. |

### Executive function skills

| Skill | Modding activity |
|---|---|
| Planning | Choose a theme before choosing mods. |
| Prioritization | Pick 3-6 mods, not 40. |
| Inhibition | Do not change five config values at once. |
| Working memory | Track before/after behavior. |
| Flexible thinking | A failed load is information, not apocalypse. |
| Communication | Explain the pack to another player. |
| Reflection | Record what changed, what broke, and what was fixed. |

### Creative/design skills

| Skill | Modding activity |
|---|---|
| Visual identity | Resource pack icons, colors, screenshots, signs. |
| Player onboarding | Guidebook, tutorial path, quest board. |
| Game balance | Recipe cost, reward timing, difficulty. |
| World feel | Biomes, structures, mobs, sound, lighting. |
| Accessibility | Clearer labels, high-contrast cues, less visual clutter. |
| Product thinking | "Who is this pack for, and what should it help them do?" |

## Mod category ladder

Introduce mods by cognitive load, not by how cool they look on YouTube.

### Level 1: Clarity mods

Purpose: help learners see and understand.

Examples:

- Recipe viewer.
- Map/waypoint.
- Tooltips.
- Inventory sorting.
- Light level overlay.
- Accessibility/visual clarity mods.

Concepts:

- Search.
- Information architecture.
- UI.
- Cognitive load.
- Documentation.

### Level 2: Visual/building mods

Purpose: expand expression without huge logic burden.

Examples:

- Decoration blocks.
- Furniture.
- Building tools.
- Resource packs.
- Chisel/detail mods, depending on version/loader.

Concepts:

- Representation.
- Design systems.
- User feedback.
- Visual communication.
- Before/after comparison.

### Level 3: Configurable gameplay mods

Purpose: teach controlled rule changes.

Examples:

- Food/farming mods.
- Tool mods.
- Mob behavior mods.
- World feature toggles.
- Progression settings.

Concepts:

- Variables.
- Balance.
- Constraints.
- Test design.
- "One change at a time."

### Level 4: Data-driven changes

Purpose: learners create mod-like changes without full programming.

Examples:

- Recipes.
- Loot tables.
- Advancements.
- Tags.
- Functions.
- Bedrock behavior/resource packs.

Concepts:

- Structured data.
- JSON.
- Namespaces.
- Reloading.
- Inputs/outputs.
- Debugging syntax.

### Level 5: Automation and systems mods

Purpose: teach systems, flow, bottlenecks, and optimization.

Examples:

- Create-style mechanical systems.
- Hopper/logistics mods.
- Farming automation.
- Storage networks, later.
- Energy systems, later.

Concepts:

- Throughput.
- Queues.
- Bottlenecks.
- Feedback.
- State.
- System diagrams.

### Level 6: Programming-like mods

Purpose: bridge toward code without leaving Minecraft.

Examples:

- CC: Tweaked-style programmable computers/turtles.
- Command/data-pack functions.
- Later: scripting mods such as KubeJS or CraftTweaker if the mentor team is ready.

CC: Tweaked adds programmable computers and turtles controlled with Lua, so it is a strong advanced bridge from Minecraft systems to actual programming concepts. It should come after learners are comfortable with modded systems, not as the first modded session. ([CC: Tweaked][7])

Concepts:

- Sequencing.
- Loops.
- Functions.
- Conditionals.
- State.
- Automation.
- Debugging code.

## Suggested Stage 2 product structure

### Mentor view

The mentor view should show Stage 2 sessions as controlled labs.

Each session should include:

- Required pack profile.
- Approved mod list.
- Minecraft version.
- Loader.
- Required files.
- Reset instructions.
- Known-good test.
- Known-broken test.
- Safety constraints.
- Session flow.
- Hint ladder.
- Mastery gates.
- Evidence fields.
- Parent summary draft.

Important addition for Stage 2: every lesson needs a **"Do Not Let This Become Tech Support"** box.

Example:

For S14 Dependency Dungeon:

- Do not troubleshoot a random real crash for 45 minutes.
- Use the prepared broken profile.
- Learner should diagnose one intentional issue.
- Restore from clean copy after 10 minutes if stuck.

### Teacher/coordinator view

The coordinator needs pack readiness and risk visibility.

Show:

- Which pack version is approved.
- Which sessions use which mods.
- Which learners completed which modding gates.
- Which profiles are stable.
- Which sessions caused technical issues.
- Which machines/devices can run the pack.
- Which mods have licensing/permission restrictions.
- Which parent summaries were sent.
- Which evidence items were captured.

Add a **Pack Health Dashboard**:

| Field | Example |
|---|---|
| Pack name | Block Buddies Modpack Lab v0.2 |
| Minecraft version | Locked pilot version |
| Loader | Fabric / NeoForge / Forge |
| Approved mods | 5 active |
| Risk level | Low / Medium / High |
| Last tested | Date |
| Launch success | Pass / Fail |
| Average load time | Measured locally |
| Known issues | "Recipe overlay keybind conflict" |
| Reset profile available | Yes / No |

### Parent view

Parent view should not say "your child debugged a NeoForge dependency mismatch" unless the parent is also the kind of person who reads changelogs for fun.

Use plain language:

- Your child tested how add-ons change Minecraft.
- Your child changed one setting and compared before/after.
- Your child learned that software parts must be compatible.
- Your child built a small automation system.
- Your child designed a small playable modded experience.

Parent summary should include:

- What they changed.
- What concept they practiced.
- What they tested.
- What debugging skill they used.
- One next step.

### Student view

Student view should feel like a modder's lab notebook plus quest board.

Show:

- Mission title.
- Pack loaded.
- "What changed?" prompt.
- Track choice.
- Checklist.
- Hint button.
- Debug card.
- Screenshot/proof upload.
- Badge.

Example S12 checklist:

- I tested the original behavior.
- I changed one setting.
- I tested again.
- I compared before and after.
- I restored or saved the final version.
- I explained what changed.

Badges:

- Mod Detective.
- Recipe Hacker.
- Config Tuner.
- Dependency Fixer.
- Contraption Builder.
- Pack Designer.
- One-Change Tester.
- Bug Whisperer.

## Stage 2 mastery model

Keep the same three gates: **Do / Explain / Debug**.

But add a fourth optional internal product signal: **Design Fit**.

Do not make Design Fit required for every learner. It is useful for capstones and advanced learners.

### Do

Can the learner make the modded change or build the modded system?

Examples:

- Launches profile.
- Finds recipe.
- Applies resource pack.
- Changes config.
- Adds recipe.
- Fixes dependency.
- Builds automation line.
- Creates tiny modpack.

### Explain

Can the learner explain what changed and why?

Examples:

- "This mod adds recipe search."
- "This config changes machine speed."
- "This dependency is required."
- "This item goes through the machine and becomes another item."

### Debug

Can the learner test and fix one issue?

Examples:

- Wrong version.
- Missing dependency.
- Broken JSON.
- Wrong recipe ingredient.
- Machine jam.
- Config not saved.
- Pack not launching.

### Design Fit

Can the learner explain why this change belongs in the experience?

Examples:

- "I added this map mod because the pack is about exploration."
- "I made this recipe harder because the reward was too easy."
- "I used brighter icons because players were missing the status display."

That fourth gate is where the product-minded learning architecture gets spicy. It turns "I added a mod" into "I made a design decision."

## MVP pack recommendation

For the pilot, create one tiny internal pack, not a kitchen-sink mega-pack.

Recommended pack structure:

### Block Buddies Modpack Lab v0.1

Include:

1. One recipe viewer.
2. One visual/building or resource-pack-friendly tool.
3. One small configurable gameplay mod.
4. One automation/system mod.
5. One optional programming bridge mod for advanced learners only.
6. Prepared worlds for each lesson.
7. Prepared broken profiles for S14.
8. Prepared templates for config/data/resource changes.

Avoid at first:

- Huge quest packs.
- Heavy shaders.
- Combat overhaul mods.
- Horror mods.
- Public multiplayer mods.
- Economy/server plugins.
- Voice chat.
- Dozens of dependencies.
- Mods with unstable version support.
- Anything that requires account linking, external chat, or online communities.

The boring constraint is the magic: one loader, one version, one approved source path, one reset workflow. Otherwise, the pilot gets eaten by setup chaos like a villager walking directly into a cactus.

## Extension modules after S16

These are optional post-Stage-2 paths, still before networking/servers.

### A. Pack Designer Path

Learner designs themed modpacks.

Modules:

- Theme and player promise.
- Mod selection.
- Progression balance.
- Visual identity.
- Screenshots and pack description.
- Onboarding guide.
- Playtest and revise.

Final project:

A 5-mod themed pack with a one-page player guide.

### B. Automation Engineer Path

Learner focuses on systems mods.

Modules:

- Power generation.
- Item movement.
- Processing chains.
- Bottlenecks.
- Storage.
- Fail-safes.
- Reset systems.
- Production dashboard.

Final project:

A small factory that turns one input into one useful output reliably.

### C. Data Pack / Add-On Creator Path

Learner focuses on data-driven rules.

Modules:

- Recipes.
- Loot.
- Advancements.
- Tags.
- Functions.
- Custom challenge rooms.
- Reward balance.
- Debugging JSON.

Final project:

A custom challenge map with rewards and progression rules.

### D. Programming Bridge Path

Learner uses programmable Minecraft tools.

Modules:

- Basic Lua or command functions.
- Turtle movement.
- Loops.
- Conditions.
- Inventory checks.
- Error messages.
- Refactoring repeated commands.
- Testing scripts safely.

Final project:

A turtle/helper/computer system that performs a small useful task and reports its status.

### E. QA Tester Path

Learner becomes the bug hunter.

Modules:

- Test plans.
- Reproduction steps.
- Expected vs actual.
- Screenshots.
- Crash triage.
- Compatibility matrix.
- Regression testing.
- Known issues list.

Final project:

A test report for another learner's mini-modpack.

This path is excellent for learners who like precision, checklists, and being professionally annoying in the best possible way.

## UI Data Model Notes for Stage 2

Stage 2 needs the original session fields, plus modpack-specific fields.

Recommended reusable fields:

```json
{
  "sessionId": "S12",
  "stage": "Modpack Lab",
  "title": "Config Lab",
  "sequenceNumber": 12,
  "estimatedMinutes": 60,
  "coreConcept": "Configuration, variables, before/after testing",
  "objective": "Learner changes one safe config value and tests its effect.",
  "studentMissionText": "Change one Minecraft rule, test it, and prove what changed.",
  "requiredProfile": {
    "profileId": "bb-modlab-v0-1",
    "minecraftVersion": "locked-pilot-version",
    "loader": "locked-pilot-loader",
    "packVersion": "0.1.0",
    "resetAvailable": true
  },
  "approvedMods": [
    {
      "modId": "recipe-viewer",
      "displayName": "Recipe Viewer",
      "purpose": "Information lookup",
      "required": true
    }
  ],
  "filesUsed": {
    "configFiles": ["config/examplemod.toml"],
    "resourcePacks": [],
    "dataPacks": [],
    "worldTemplates": ["S12_ConfigLab_World"]
  },
  "safetyConstraints": [
    "Learner changes only one prepared value.",
    "Mentor keeps a reset copy.",
    "No external mod downloads during session."
  ],
  "earlyWin": {
    "title": "Change One Visible Setting",
    "successCriteria": "Learner observes a clear before/after difference."
  },
  "coreQuest": {
    "title": "Change One Rule",
    "steps": [
      "Observe original behavior.",
      "Predict the effect of one config change.",
      "Change one value.",
      "Save and reload if needed.",
      "Test again.",
      "Record before/after."
    ]
  },
  "trackExamples": {
    "visualist": "Change a visual/UI setting and compare screenshots.",
    "mechanist": "Change a machine speed or processing value.",
    "operator": "Document the exact config key, old value, new value, and test result."
  },
  "masteryGates": {
    "do": "Learner changes one config value and tests it.",
    "explain": "Learner explains the before/after difference.",
    "debug": "Learner fixes one config mistake or identifies why the change did not apply.",
    "designFit": "Learner explains whether the change improved the experience."
  },
  "commonFailurePoints": [
    "Changed too many values.",
    "Forgot to save.",
    "Forgot to restart or reload.",
    "Edited the wrong profile.",
    "Used a value outside the allowed range."
  ],
  "fallbackSteps": [
    "Restore the original config.",
    "Use a highlighted template.",
    "Change only one number.",
    "Test a smaller visible effect.",
    "Compare with the known-good profile."
  ],
  "evidenceItems": [
    "Before screenshot",
    "After screenshot",
    "Config value changed",
    "Learner explanation",
    "Debug note"
  ],
  "exitTicket": "I changed ___ from ___ to ___. The effect was ___.",
  "parentSummaryTemplate": "Today your child learned how software settings can change behavior. They changed one safe configuration value, tested the result, and compared before and after."
}
```

Additional Stage 2 fields the product should support:

| Field | Purpose |
|---|---|
| `requiredProfile` | Links session to exact pack/profile version |
| `loader` | Fabric / Forge / NeoForge / etc. |
| `minecraftVersion` | Prevents version mismatch chaos |
| `packVersion` | Tracks which curriculum pack was used |
| `approvedMods` | Shows mods allowed in the session |
| `modPurpose` | Explains why each mod is educationally included |
| `configFiles` | Lists editable config files |
| `dataPackFiles` | Lists editable data-driven files |
| `resourcePackFiles` | Lists editable visual/audio files |
| `knownGoodState` | Expected working baseline |
| `brokenState` | Prepared debugging scenario |
| `resetInstructions` | How mentor restores clean profile |
| `technicalRiskLevel` | Low / Medium / High |
| `deviceRequirements` | RAM, launcher, controls, accessibility notes |
| `evidenceItems` | Screenshots, config diff, test result, debug note |
| `designFitPrompt` | Why this mod/change belongs in the experience |
| `knownIssues` | Expected technical problems |
| `doNotTroubleshootBeyond` | Scope boundary for mentors |

## What not to do yet

Do not make Stage 2 about servers.

Do not make Stage 2 about public multiplayer.

Do not make Stage 2 about publishing packs publicly.

Do not make Stage 2 about full Java mod development as the default path.

Do not let learners install arbitrary mods.

Do not run a huge modpack.

Do not make the mentor debug real unknown crash logs during paid learner time.

The right Stage 2 MVP is:

Small pack.
Big ideas.
Controlled changes.
Visible results.
One bug at a time.
Evidence captured.

That gives you a clean runway into the later networking/server stage, where learners can then ask much better questions: What runs on the client? What runs on the server? Why does this mod need to be installed on both? What is latency? What is permission logic? Why did the server reject this client? That stage will hit harder if Stage 2 first teaches them what a modded system even is.

[1]: https://support.modrinth.com/en/articles/8802250-modpacks-on-modrinth "Modpacks on Modrinth | Modrinth Help Center"
[2]: https://support.modrinth.com/en/articles/8802351-modrinth-modpack-format-mrpack "Modrinth Modpack Format (.mrpack) | Modrinth Help Center"
[3]: https://www.curseforge.com/minecraft/mc-mods/emi "EMI - Minecraft Mods - CurseForge"
[4]: https://wiki.fabricmc.net/tutorial%3Acustom_resources "Custom Data/Resource pack Resources [Fabric Wiki]"
[5]: https://www.curseforge.com/minecraft/mc-mods/create "Create - Minecraft Mods - CurseForge"
[6]: https://learn.microsoft.com/en-us/minecraft/creator/documents/behaviorpackfromscratch?view=minecraft-bedrock-stable "Create an Angry Cow: An Introduction To Behavior Packs (from scratch) | Microsoft Learn"
[7]: https://tweaked.cc/ "CC: Tweaked"
