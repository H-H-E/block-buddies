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
