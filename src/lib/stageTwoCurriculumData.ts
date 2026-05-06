import type { StageTwoModpackSession } from "@/lib/curriculumModel";

export const stageTwoModpackSessions: StageTwoModpackSession[] = [
  {
    "sessionId": "S09",
    "stage": "modpack-lab",
    "sequenceNumber": 9,
    "title": "Welcome to Modded Minecraft",
    "shortTitle": "Modpack Basics",
    "estimatedMinutes": 60,
    "coreConcept": "Mods, modpacks, profiles, safe installs",
    "objective": "Launch a clean curated modpack and identify what changed",
    "studentMissionText": "Launch the lab pack, spot what changed from vanilla Minecraft, and match changes to likely mods.",
    "mentorFraming": "This lab teaches mods, modpacks, profiles, safe installs through one prepared environment, one safe change or observation, and one clear test.",
    "earlyWin": {
      "title": "Find Three Changes",
      "steps": [
        "Learner identifies three differences between vanilla and the approved modpack."
      ],
      "successCriteria": "Learner identifies three differences between vanilla and the approved modpack."
    },
    "coreQuest": {
      "title": "Welcome to Modded Minecraft",
      "steps": [
        "Open the approved profile.",
        "Compare vanilla and modded worlds.",
        "Record one visual/interface, one item/recipe, and one behavior change.",
        "Match each change to a likely mod."
      ],
      "successCriteria": "Launch a clean curated modpack and identify what changed"
    },
    "trackExamples": {
      "visualist": {
        "label": "Builder Path",
        "example": "Use visible layout, labels, screenshots, signs, and clarity cues to complete the same goal.",
        "debugTarget": "Confusing or missing visual evidence."
      },
      "mechanist": {
        "label": "System Path",
        "example": "Use cause/effect, machines, flows, recipes, and bottlenecks to complete the same goal.",
        "debugTarget": "Broken or unclear system behavior."
      },
      "operator": {
        "label": "Operator Path",
        "example": "Use profile, file, version, config, checklist, and reset discipline to complete the same goal.",
        "debugTarget": "Wrong profile, file, version, or procedure."
      }
    },
    "sideQuests": [
      {
        "id": "S09-STRETCH",
        "tier": "stretch",
        "unlockMinFluency": 1,
        "unlockGateIds": [],
        "durationMin": 15,
        "outcome": "Extend the session artifact with one additional evidence-backed improvement."
      },
      {
        "id": "S09-EXPERT",
        "tier": "expert",
        "unlockMinFluency": 2,
        "unlockGateIds": [
          "MG-S09-DO"
        ],
        "durationMin": 15,
        "outcome": "Create a reusable checklist, changelog, or release note for the lab."
      }
    ],
    "masteryGates": {
      "do": {
        "criteria": "Launch a clean curated modpack and identify what changed",
        "evidence": "Screenshot, artifact, or mentor-observed completion of the lab output.",
        "levels": [
          "notYet",
          "withSupport",
          "independent"
        ]
      },
      "explain": {
        "criteria": "Learner explains mods, modpacks, profiles, safe installs in plain language using their artifact as evidence.",
        "evidence": "Verbal, typed, sign-based, or mentor-transcribed explanation.",
        "levels": [
          "notYet",
          "withSupport",
          "independent"
        ]
      },
      "debug": {
        "criteria": "Learner tests one issue, identifies where the system fails or could fail, and fixes it or documents the next fix.",
        "evidence": "Before/after note, reset note, debug log, or known-issue entry.",
        "levels": [
          "notYet",
          "withSupport",
          "independent"
        ]
      }
    },
    "commonFailurePoints": [
      "Learner changes too many things at once.",
      "The lab drifts toward unbounded tech support."
    ],
    "fallbackSteps": [
      "Narrow to one prepared file/profile/card.",
      "Compare against the known-good example.",
      "Restore the clean profile if troubleshooting exceeds the hard stop."
    ],
    "hintLadder": [
      "What changed?",
      "What did you expect?",
      "Which profile, file, mod, or setting controls that?",
      "Compare against the known-good example.",
      "Mentor models one safe step; learner completes the next step."
    ],
    "exitTicket": {
      "prompt": "Launch the lab pack, spot what changed from vanilla Minecraft, and match changes to likely mods.",
      "acceptedFormats": [
        "verbal",
        "typed",
        "sign",
        "mentorTranscribed",
        "screenshotCaption"
      ]
    },
    "evidenceItems": [
      {
        "type": "screenshot",
        "label": "Working result or before/after comparison",
        "gate": "do"
      },
      {
        "type": "text",
        "label": "Learner explanation",
        "gate": "explain"
      },
      {
        "type": "mentorNote",
        "label": "Debug or reset evidence",
        "gate": "debug"
      }
    ],
    "parentSummaryTemplate": "Today your child compared regular Minecraft to a prepared modded profile, identified changes, and practiced safe software observation.",
    "studentChecklist": [
      "I used the approved Modpack Lab profile.",
      "I made or observed one safe change.",
      "I tested what happened.",
      "I explained the result in my own words.",
      "I recorded one thing I fixed or would check next."
    ],
    "modpackLab": {
      "requiredProfile": "Block Buddies Modpack Lab Pilot Profile",
      "minecraftVersion": "1.21.1",
      "loader": "Fabric",
      "packVersion": "pilot-0.1",
      "knownGoodTest": "Open the approved profile, load the prepared lab world, confirm title screen/mod list, and complete the session demo action before learners arrive.",
      "resetInstructions": "Close Minecraft, duplicate the clean BlockBuddies-ModpackLab-CLEAN profile, rename the learner copy, and restore prepared files from the reset folder.",
      "deviceRequirements": "8 GB RAM minimum; mentor pretests load time and keeps vanilla fallback world ready.",
      "doNotTroubleshootBeyond": "10 minutes on planned issue; 5 minutes on profile launch confusion; immediate reset for unsafe download or unknown file source",
      "packReadinessChecks": [
        "Known-good profile launches",
        "Clean reset profile exists",
        "Prepared world opens",
        "Approved mod list matches session",
        "Fallback vanilla world is available"
      ],
      "approvedMods": [
        "EMI",
        "AppleSkin",
        "Xaero Minimap",
        "Mod Menu",
        "Fabric API"
      ],
      "requiredFiles": [
        "instance manifest",
        "approved mod list",
        "vanilla comparison world",
        "modded lab world"
      ],
      "knownBrokenState": "Optional wrong-profile shortcut for mentor demonstration only.",
      "technicalRiskLevel": "medium"
    }
  },
  {
    "sessionId": "S10",
    "stage": "modpack-lab",
    "sequenceNumber": 10,
    "title": "Recipe Radar",
    "shortTitle": "Recipe Radar",
    "estimatedMinutes": 60,
    "coreConcept": "Information systems, UI, search, discoverability",
    "objective": "Use a recipe viewer to solve a crafting scavenger hunt",
    "studentMissionText": "Use the recipe viewer like a detective tool to find how items are made and what they are used for.",
    "mentorFraming": "This lab teaches information systems, ui, search, discoverability through one prepared environment, one safe change or observation, and one clear test.",
    "earlyWin": {
      "title": "First Recipe Lookup",
      "steps": [
        "Learner finds one target recipe and one use for that item."
      ],
      "successCriteria": "Learner finds one target recipe and one use for that item."
    },
    "coreQuest": {
      "title": "Recipe Radar",
      "steps": [
        "Search for the assigned target item.",
        "Read the recipe grid and list missing ingredients.",
        "Use the uses view to find what the target item can make next.",
        "Build or label a recipe chain."
      ],
      "successCriteria": "Use a recipe viewer to solve a crafting scavenger hunt"
    },
    "trackExamples": {
      "visualist": {
        "label": "Builder Path",
        "example": "Use visible layout, labels, screenshots, signs, and clarity cues to complete the same goal.",
        "debugTarget": "Confusing or missing visual evidence."
      },
      "mechanist": {
        "label": "System Path",
        "example": "Use cause/effect, machines, flows, recipes, and bottlenecks to complete the same goal.",
        "debugTarget": "Broken or unclear system behavior."
      },
      "operator": {
        "label": "Operator Path",
        "example": "Use profile, file, version, config, checklist, and reset discipline to complete the same goal.",
        "debugTarget": "Wrong profile, file, version, or procedure."
      }
    },
    "sideQuests": [
      {
        "id": "S10-STRETCH",
        "tier": "stretch",
        "unlockMinFluency": 1,
        "unlockGateIds": [],
        "durationMin": 15,
        "outcome": "Extend the session artifact with one additional evidence-backed improvement."
      },
      {
        "id": "S10-EXPERT",
        "tier": "expert",
        "unlockMinFluency": 2,
        "unlockGateIds": [
          "MG-S10-DO"
        ],
        "durationMin": 15,
        "outcome": "Create a reusable checklist, changelog, or release note for the lab."
      }
    ],
    "masteryGates": {
      "do": {
        "criteria": "Use a recipe viewer to solve a crafting scavenger hunt",
        "evidence": "Screenshot, artifact, or mentor-observed completion of the lab output.",
        "levels": [
          "notYet",
          "withSupport",
          "independent"
        ]
      },
      "explain": {
        "criteria": "Learner explains information systems, ui, search, discoverability in plain language using their artifact as evidence.",
        "evidence": "Verbal, typed, sign-based, or mentor-transcribed explanation.",
        "levels": [
          "notYet",
          "withSupport",
          "independent"
        ]
      },
      "debug": {
        "criteria": "Learner tests one issue, identifies where the system fails or could fail, and fixes it or documents the next fix.",
        "evidence": "Before/after note, reset note, debug log, or known-issue entry.",
        "levels": [
          "notYet",
          "withSupport",
          "independent"
        ]
      }
    },
    "commonFailurePoints": [
      "Learner changes too many things at once.",
      "The lab drifts toward unbounded tech support."
    ],
    "fallbackSteps": [
      "Narrow to one prepared file/profile/card.",
      "Compare against the known-good example.",
      "Restore the clean profile if troubleshooting exceeds the hard stop."
    ],
    "hintLadder": [
      "What changed?",
      "What did you expect?",
      "Which profile, file, mod, or setting controls that?",
      "Compare against the known-good example.",
      "Mentor models one safe step; learner completes the next step."
    ],
    "exitTicket": {
      "prompt": "Use the recipe viewer like a detective tool to find how items are made and what they are used for.",
      "acceptedFormats": [
        "verbal",
        "typed",
        "sign",
        "mentorTranscribed",
        "screenshotCaption"
      ]
    },
    "evidenceItems": [
      {
        "type": "screenshot",
        "label": "Working result or before/after comparison",
        "gate": "do"
      },
      {
        "type": "text",
        "label": "Learner explanation",
        "gate": "explain"
      },
      {
        "type": "mentorNote",
        "label": "Debug or reset evidence",
        "gate": "debug"
      }
    ],
    "parentSummaryTemplate": "Today your child practiced search, filtering, and planning from information by tracing modded recipes and correcting a mistaken search.",
    "studentChecklist": [
      "I used the approved Modpack Lab profile.",
      "I made or observed one safe change.",
      "I tested what happened.",
      "I explained the result in my own words.",
      "I recorded one thing I fixed or would check next."
    ],
    "modpackLab": {
      "requiredProfile": "Block Buddies Modpack Lab Pilot Profile",
      "minecraftVersion": "1.21.1",
      "loader": "Fabric",
      "packVersion": "pilot-0.1",
      "knownGoodTest": "Open the approved profile, load the prepared lab world, confirm title screen/mod list, and complete the session demo action before learners arrive.",
      "resetInstructions": "Close Minecraft, duplicate the clean BlockBuddies-ModpackLab-CLEAN profile, rename the learner copy, and restore prepared files from the reset folder.",
      "deviceRequirements": "8 GB RAM minimum; mentor pretests load time and keeps vanilla fallback world ready.",
      "doNotTroubleshootBeyond": "10 minutes on planned issue; 5 minutes on profile launch confusion; immediate reset for unsafe download or unknown file source",
      "packReadinessChecks": [
        "Known-good profile launches",
        "Clean reset profile exists",
        "Prepared world opens",
        "Approved mod list matches session",
        "Fallback vanilla world is available"
      ],
      "approvedMods": [
        "EMI",
        "JEI-compatible recipe data",
        "AppleSkin",
        "Fabric API"
      ],
      "requiredFiles": [
        "prepared scavenger hunt card",
        "item frame recipe board",
        "approved item list"
      ],
      "knownBrokenState": "Prepared target with one misleading search term.",
      "technicalRiskLevel": "medium"
    }
  },
  {
    "sessionId": "S11",
    "stage": "modpack-lab",
    "sequenceNumber": 11,
    "title": "Resource Pack Remix",
    "shortTitle": "Resource Remix",
    "estimatedMinutes": 60,
    "coreConcept": "Representation, assets, visual design, accessibility",
    "objective": "Modify or apply a small visual/sound/text resource pack",
    "studentMissionText": "Change how Minecraft communicates an object, then test whether the change is clearer.",
    "mentorFraming": "This lab teaches representation, assets, visual design, accessibility through one prepared environment, one safe change or observation, and one clear test.",
    "earlyWin": {
      "title": "Apply Clarity Pack",
      "steps": [
        "Learner toggles the prepared pack and identifies one visual difference."
      ],
      "successCriteria": "Learner toggles the prepared pack and identifies one visual difference."
    },
    "coreQuest": {
      "title": "Resource Pack Remix",
      "steps": [
        "Apply the approved Clarity Remix pack.",
        "Find the changed target block, item, text, or sign.",
        "Make one safe prepared edit.",
        "Reload and compare before/after."
      ],
      "successCriteria": "Modify or apply a small visual/sound/text resource pack"
    },
    "trackExamples": {
      "visualist": {
        "label": "Builder Path",
        "example": "Use visible layout, labels, screenshots, signs, and clarity cues to complete the same goal.",
        "debugTarget": "Confusing or missing visual evidence."
      },
      "mechanist": {
        "label": "System Path",
        "example": "Use cause/effect, machines, flows, recipes, and bottlenecks to complete the same goal.",
        "debugTarget": "Broken or unclear system behavior."
      },
      "operator": {
        "label": "Operator Path",
        "example": "Use profile, file, version, config, checklist, and reset discipline to complete the same goal.",
        "debugTarget": "Wrong profile, file, version, or procedure."
      }
    },
    "sideQuests": [
      {
        "id": "S11-STRETCH",
        "tier": "stretch",
        "unlockMinFluency": 1,
        "unlockGateIds": [],
        "durationMin": 15,
        "outcome": "Extend the session artifact with one additional evidence-backed improvement."
      },
      {
        "id": "S11-EXPERT",
        "tier": "expert",
        "unlockMinFluency": 2,
        "unlockGateIds": [
          "MG-S11-DO"
        ],
        "durationMin": 15,
        "outcome": "Create a reusable checklist, changelog, or release note for the lab."
      }
    ],
    "masteryGates": {
      "do": {
        "criteria": "Modify or apply a small visual/sound/text resource pack",
        "evidence": "Screenshot, artifact, or mentor-observed completion of the lab output.",
        "levels": [
          "notYet",
          "withSupport",
          "independent"
        ]
      },
      "explain": {
        "criteria": "Learner explains representation, assets, visual design, accessibility in plain language using their artifact as evidence.",
        "evidence": "Verbal, typed, sign-based, or mentor-transcribed explanation.",
        "levels": [
          "notYet",
          "withSupport",
          "independent"
        ]
      },
      "debug": {
        "criteria": "Learner tests one issue, identifies where the system fails or could fail, and fixes it or documents the next fix.",
        "evidence": "Before/after note, reset note, debug log, or known-issue entry.",
        "levels": [
          "notYet",
          "withSupport",
          "independent"
        ]
      }
    },
    "commonFailurePoints": [
      "Learner changes too many things at once.",
      "The lab drifts toward unbounded tech support."
    ],
    "fallbackSteps": [
      "Narrow to one prepared file/profile/card.",
      "Compare against the known-good example.",
      "Restore the clean profile if troubleshooting exceeds the hard stop."
    ],
    "hintLadder": [
      "What changed?",
      "What did you expect?",
      "Which profile, file, mod, or setting controls that?",
      "Compare against the known-good example.",
      "Mentor models one safe step; learner completes the next step."
    ],
    "exitTicket": {
      "prompt": "Change how Minecraft communicates an object, then test whether the change is clearer.",
      "acceptedFormats": [
        "verbal",
        "typed",
        "sign",
        "mentorTranscribed",
        "screenshotCaption"
      ]
    },
    "evidenceItems": [
      {
        "type": "screenshot",
        "label": "Working result or before/after comparison",
        "gate": "do"
      },
      {
        "type": "text",
        "label": "Learner explanation",
        "gate": "explain"
      },
      {
        "type": "mentorNote",
        "label": "Debug or reset evidence",
        "gate": "debug"
      }
    ],
    "parentSummaryTemplate": "Today your child explored how software changes representation by applying or editing a small resource pack and comparing before and after.",
    "studentChecklist": [
      "I used the approved Modpack Lab profile.",
      "I made or observed one safe change.",
      "I tested what happened.",
      "I explained the result in my own words.",
      "I recorded one thing I fixed or would check next."
    ],
    "modpackLab": {
      "requiredProfile": "Block Buddies Modpack Lab Pilot Profile",
      "minecraftVersion": "1.21.1",
      "loader": "Fabric",
      "packVersion": "pilot-0.1",
      "knownGoodTest": "Open the approved profile, load the prepared lab world, confirm title screen/mod list, and complete the session demo action before learners arrive.",
      "resetInstructions": "Close Minecraft, duplicate the clean BlockBuddies-ModpackLab-CLEAN profile, rename the learner copy, and restore prepared files from the reset folder.",
      "deviceRequirements": "8 GB RAM minimum; mentor pretests load time and keeps vanilla fallback world ready.",
      "doNotTroubleshootBeyond": "10 minutes on planned issue; 5 minutes on profile launch confusion; immediate reset for unsafe download or unknown file source",
      "packReadinessChecks": [
        "Known-good profile launches",
        "Clean reset profile exists",
        "Prepared world opens",
        "Approved mod list matches session",
        "Fallback vanilla world is available"
      ],
      "approvedMods": [
        "Fabric API",
        "Mod Menu",
        "EMI optional for item lookup"
      ],
      "requiredFiles": [
        "resourcepacks/block-buddies-clarity-remix",
        "pack.mcmeta",
        "assets/blockbuddies files"
      ],
      "knownBrokenState": "Prepared duplicate folder level that prevents pack detection.",
      "technicalRiskLevel": "medium"
    }
  },
  {
    "sessionId": "S12",
    "stage": "modpack-lab",
    "sequenceNumber": 12,
    "title": "Config Lab",
    "shortTitle": "Config Lab",
    "estimatedMinutes": 60,
    "coreConcept": "Parameters, variables, balance, before/after testing",
    "objective": "Change one safe config value and test its effect",
    "studentMissionText": "Change one setting like a scientist: predict, test, observe, and decide whether it improved the experience.",
    "mentorFraming": "This lab teaches parameters, variables, balance, before/after testing through one prepared environment, one safe change or observation, and one clear test.",
    "earlyWin": {
      "title": "Read One Setting",
      "steps": [
        "Learner identifies one setting/value pair on a prepared config card."
      ],
      "successCriteria": "Learner identifies one setting/value pair on a prepared config card."
    },
    "coreQuest": {
      "title": "Config Lab",
      "steps": [
        "Open the prepared config copy or screen.",
        "Record the starting value and prediction.",
        "Change exactly one approved value.",
        "Reload if required.",
        "Run the known-good test and record before/after."
      ],
      "successCriteria": "Change one safe config value and test its effect"
    },
    "trackExamples": {
      "visualist": {
        "label": "Builder Path",
        "example": "Use visible layout, labels, screenshots, signs, and clarity cues to complete the same goal.",
        "debugTarget": "Confusing or missing visual evidence."
      },
      "mechanist": {
        "label": "System Path",
        "example": "Use cause/effect, machines, flows, recipes, and bottlenecks to complete the same goal.",
        "debugTarget": "Broken or unclear system behavior."
      },
      "operator": {
        "label": "Operator Path",
        "example": "Use profile, file, version, config, checklist, and reset discipline to complete the same goal.",
        "debugTarget": "Wrong profile, file, version, or procedure."
      }
    },
    "sideQuests": [
      {
        "id": "S12-STRETCH",
        "tier": "stretch",
        "unlockMinFluency": 1,
        "unlockGateIds": [],
        "durationMin": 15,
        "outcome": "Extend the session artifact with one additional evidence-backed improvement."
      },
      {
        "id": "S12-EXPERT",
        "tier": "expert",
        "unlockMinFluency": 2,
        "unlockGateIds": [
          "MG-S12-DO"
        ],
        "durationMin": 15,
        "outcome": "Create a reusable checklist, changelog, or release note for the lab."
      }
    ],
    "masteryGates": {
      "do": {
        "criteria": "Change one safe config value and test its effect",
        "evidence": "Screenshot, artifact, or mentor-observed completion of the lab output.",
        "levels": [
          "notYet",
          "withSupport",
          "independent"
        ]
      },
      "explain": {
        "criteria": "Learner explains parameters, variables, balance, before/after testing in plain language using their artifact as evidence.",
        "evidence": "Verbal, typed, sign-based, or mentor-transcribed explanation.",
        "levels": [
          "notYet",
          "withSupport",
          "independent"
        ]
      },
      "debug": {
        "criteria": "Learner tests one issue, identifies where the system fails or could fail, and fixes it or documents the next fix.",
        "evidence": "Before/after note, reset note, debug log, or known-issue entry.",
        "levels": [
          "notYet",
          "withSupport",
          "independent"
        ]
      }
    },
    "commonFailurePoints": [
      "Learner changes too many things at once.",
      "The lab drifts toward unbounded tech support."
    ],
    "fallbackSteps": [
      "Narrow to one prepared file/profile/card.",
      "Compare against the known-good example.",
      "Restore the clean profile if troubleshooting exceeds the hard stop."
    ],
    "hintLadder": [
      "What changed?",
      "What did you expect?",
      "Which profile, file, mod, or setting controls that?",
      "Compare against the known-good example.",
      "Mentor models one safe step; learner completes the next step."
    ],
    "exitTicket": {
      "prompt": "Change one setting like a scientist: predict, test, observe, and decide whether it improved the experience.",
      "acceptedFormats": [
        "verbal",
        "typed",
        "sign",
        "mentorTranscribed",
        "screenshotCaption"
      ]
    },
    "evidenceItems": [
      {
        "type": "screenshot",
        "label": "Working result or before/after comparison",
        "gate": "do"
      },
      {
        "type": "text",
        "label": "Learner explanation",
        "gate": "explain"
      },
      {
        "type": "mentorNote",
        "label": "Debug or reset evidence",
        "gate": "debug"
      }
    ],
    "parentSummaryTemplate": "Today your child practiced safe software experimentation by changing one setting, predicting the result, testing before and after, and deciding whether to keep or revert.",
    "studentChecklist": [
      "I used the approved Modpack Lab profile.",
      "I made or observed one safe change.",
      "I tested what happened.",
      "I explained the result in my own words.",
      "I recorded one thing I fixed or would check next."
    ],
    "modpackLab": {
      "requiredProfile": "Block Buddies Modpack Lab Pilot Profile",
      "minecraftVersion": "1.21.1",
      "loader": "Fabric",
      "packVersion": "pilot-0.1",
      "knownGoodTest": "Open the approved profile, load the prepared lab world, confirm title screen/mod list, and complete the session demo action before learners arrive.",
      "resetInstructions": "Close Minecraft, duplicate the clean BlockBuddies-ModpackLab-CLEAN profile, rename the learner copy, and restore prepared files from the reset folder.",
      "deviceRequirements": "8 GB RAM minimum; mentor pretests load time and keeps vanilla fallback world ready.",
      "doNotTroubleshootBeyond": "10 minutes on planned issue; 5 minutes on profile launch confusion; immediate reset for unsafe download or unknown file source",
      "packReadinessChecks": [
        "Known-good profile launches",
        "Clean reset profile exists",
        "Prepared world opens",
        "Approved mod list matches session",
        "Fallback vanilla world is available"
      ],
      "approvedMods": [
        "Xaero Minimap",
        "AppleSkin",
        "configured sample mod",
        "Fabric API"
      ],
      "requiredFiles": [
        "config/block-buddies-safe-values.toml",
        "config backup",
        "test path checklist"
      ],
      "knownBrokenState": "Prepared invalid value copy that mentor can reveal for syntax diagnosis.",
      "technicalRiskLevel": "medium"
    }
  },
  {
    "sessionId": "S13",
    "stage": "modpack-lab",
    "sequenceNumber": 13,
    "title": "Rules Without Java",
    "shortTitle": "Rules Without Java",
    "estimatedMinutes": 60,
    "coreConcept": "Data-driven rules, recipes, loot, tags, simple functions",
    "objective": "Add or modify a recipe/reward/challenge rule",
    "studentMissionText": "Change one game rule using data, not Java, and prove the rule changed.",
    "mentorFraming": "This lab teaches data-driven rules, recipes, loot, tags, simple functions through one prepared environment, one safe change or observation, and one clear test.",
    "earlyWin": {
      "title": "Read a Rule Card",
      "steps": [
        "Learner identifies input, output, namespace, and count in a prepared recipe."
      ],
      "successCriteria": "Learner identifies input, output, namespace, and count in a prepared recipe."
    },
    "coreQuest": {
      "title": "Rules Without Java",
      "steps": [
        "Open the prepared datapack or recipe template.",
        "Identify input, output, namespace, and file name.",
        "Choose one approved edit.",
        "Reload the world/datapack.",
        "Test the rule and record evidence."
      ],
      "successCriteria": "Add or modify a recipe/reward/challenge rule"
    },
    "trackExamples": {
      "visualist": {
        "label": "Builder Path",
        "example": "Use visible layout, labels, screenshots, signs, and clarity cues to complete the same goal.",
        "debugTarget": "Confusing or missing visual evidence."
      },
      "mechanist": {
        "label": "System Path",
        "example": "Use cause/effect, machines, flows, recipes, and bottlenecks to complete the same goal.",
        "debugTarget": "Broken or unclear system behavior."
      },
      "operator": {
        "label": "Operator Path",
        "example": "Use profile, file, version, config, checklist, and reset discipline to complete the same goal.",
        "debugTarget": "Wrong profile, file, version, or procedure."
      }
    },
    "sideQuests": [
      {
        "id": "S13-STRETCH",
        "tier": "stretch",
        "unlockMinFluency": 1,
        "unlockGateIds": [],
        "durationMin": 15,
        "outcome": "Extend the session artifact with one additional evidence-backed improvement."
      },
      {
        "id": "S13-EXPERT",
        "tier": "expert",
        "unlockMinFluency": 2,
        "unlockGateIds": [
          "MG-S13-DO"
        ],
        "durationMin": 15,
        "outcome": "Create a reusable checklist, changelog, or release note for the lab."
      }
    ],
    "masteryGates": {
      "do": {
        "criteria": "Add or modify a recipe/reward/challenge rule",
        "evidence": "Screenshot, artifact, or mentor-observed completion of the lab output.",
        "levels": [
          "notYet",
          "withSupport",
          "independent"
        ]
      },
      "explain": {
        "criteria": "Learner explains data-driven rules, recipes, loot, tags, simple functions in plain language using their artifact as evidence.",
        "evidence": "Verbal, typed, sign-based, or mentor-transcribed explanation.",
        "levels": [
          "notYet",
          "withSupport",
          "independent"
        ]
      },
      "debug": {
        "criteria": "Learner tests one issue, identifies where the system fails or could fail, and fixes it or documents the next fix.",
        "evidence": "Before/after note, reset note, debug log, or known-issue entry.",
        "levels": [
          "notYet",
          "withSupport",
          "independent"
        ]
      }
    },
    "commonFailurePoints": [
      "Learner changes too many things at once.",
      "The lab drifts toward unbounded tech support."
    ],
    "fallbackSteps": [
      "Narrow to one prepared file/profile/card.",
      "Compare against the known-good example.",
      "Restore the clean profile if troubleshooting exceeds the hard stop."
    ],
    "hintLadder": [
      "What changed?",
      "What did you expect?",
      "Which profile, file, mod, or setting controls that?",
      "Compare against the known-good example.",
      "Mentor models one safe step; learner completes the next step."
    ],
    "exitTicket": {
      "prompt": "Change one game rule using data, not Java, and prove the rule changed.",
      "acceptedFormats": [
        "verbal",
        "typed",
        "sign",
        "mentorTranscribed",
        "screenshotCaption"
      ]
    },
    "evidenceItems": [
      {
        "type": "screenshot",
        "label": "Working result or before/after comparison",
        "gate": "do"
      },
      {
        "type": "text",
        "label": "Learner explanation",
        "gate": "explain"
      },
      {
        "type": "mentorNote",
        "label": "Debug or reset evidence",
        "gate": "debug"
      }
    ],
    "parentSummaryTemplate": "Today your child learned that some game rules are controlled by structured data files, then made and tested one safe rule change.",
    "studentChecklist": [
      "I used the approved Modpack Lab profile.",
      "I made or observed one safe change.",
      "I tested what happened.",
      "I explained the result in my own words.",
      "I recorded one thing I fixed or would check next."
    ],
    "modpackLab": {
      "requiredProfile": "Block Buddies Modpack Lab Pilot Profile",
      "minecraftVersion": "1.21.1",
      "loader": "Fabric",
      "packVersion": "pilot-0.1",
      "knownGoodTest": "Open the approved profile, load the prepared lab world, confirm title screen/mod list, and complete the session demo action before learners arrive.",
      "resetInstructions": "Close Minecraft, duplicate the clean BlockBuddies-ModpackLab-CLEAN profile, rename the learner copy, and restore prepared files from the reset folder.",
      "deviceRequirements": "8 GB RAM minimum; mentor pretests load time and keeps vanilla fallback world ready.",
      "doNotTroubleshootBeyond": "10 minutes on planned issue; 5 minutes on profile launch confusion; immediate reset for unsafe download or unknown file source",
      "packReadinessChecks": [
        "Known-good profile launches",
        "Clean reset profile exists",
        "Prepared world opens",
        "Approved mod list matches session",
        "Fallback vanilla world is available"
      ],
      "approvedMods": [
        "Fabric API",
        "optional recipe viewer",
        "vanilla datapack support"
      ],
      "requiredFiles": [
        "datapacks/block-buddies-rules",
        "known-good JSON template",
        "reload checklist"
      ],
      "knownBrokenState": "Prepared JSON with missing comma or wrong namespace for planned diagnosis.",
      "technicalRiskLevel": "medium"
    }
  },
  {
    "sessionId": "S14",
    "stage": "modpack-lab",
    "sequenceNumber": 14,
    "title": "Dependency Dungeon",
    "shortTitle": "Dependency Dungeon",
    "estimatedMinutes": 60,
    "coreConcept": "Dependencies, compatibility, versions, crash diagnosis",
    "objective": "Fix a missing or incompatible dependency in a prepared profile",
    "studentMissionText": "Solve one planned launch problem by checking version, loader, and dependency clues.",
    "mentorFraming": "This lab teaches dependencies, compatibility, versions, crash diagnosis through one prepared environment, one safe change or observation, and one clear test.",
    "earlyWin": {
      "title": "Spot the Mismatch",
      "steps": [
        "Learner compares a known-good card to a broken-profile card and spots one missing or mismatched item."
      ],
      "successCriteria": "Learner compares a known-good card to a broken-profile card and spots one missing or mismatched item."
    },
    "coreQuest": {
      "title": "Dependency Dungeon",
      "steps": [
        "Open the prepared broken profile notes.",
        "Read the simplified crash clue or launcher message.",
        "Compare version, loader, and dependency against known-good card.",
        "Identify the planned issue.",
        "Apply the prepared fix or document it."
      ],
      "successCriteria": "Fix a missing or incompatible dependency in a prepared profile"
    },
    "trackExamples": {
      "visualist": {
        "label": "Builder Path",
        "example": "Use visible layout, labels, screenshots, signs, and clarity cues to complete the same goal.",
        "debugTarget": "Confusing or missing visual evidence."
      },
      "mechanist": {
        "label": "System Path",
        "example": "Use cause/effect, machines, flows, recipes, and bottlenecks to complete the same goal.",
        "debugTarget": "Broken or unclear system behavior."
      },
      "operator": {
        "label": "Operator Path",
        "example": "Use profile, file, version, config, checklist, and reset discipline to complete the same goal.",
        "debugTarget": "Wrong profile, file, version, or procedure."
      }
    },
    "sideQuests": [
      {
        "id": "S14-STRETCH",
        "tier": "stretch",
        "unlockMinFluency": 1,
        "unlockGateIds": [],
        "durationMin": 15,
        "outcome": "Extend the session artifact with one additional evidence-backed improvement."
      },
      {
        "id": "S14-EXPERT",
        "tier": "expert",
        "unlockMinFluency": 2,
        "unlockGateIds": [
          "MG-S14-DO"
        ],
        "durationMin": 15,
        "outcome": "Create a reusable checklist, changelog, or release note for the lab."
      }
    ],
    "masteryGates": {
      "do": {
        "criteria": "Fix a missing or incompatible dependency in a prepared profile",
        "evidence": "Screenshot, artifact, or mentor-observed completion of the lab output.",
        "levels": [
          "notYet",
          "withSupport",
          "independent"
        ]
      },
      "explain": {
        "criteria": "Learner explains dependencies, compatibility, versions, crash diagnosis in plain language using their artifact as evidence.",
        "evidence": "Verbal, typed, sign-based, or mentor-transcribed explanation.",
        "levels": [
          "notYet",
          "withSupport",
          "independent"
        ]
      },
      "debug": {
        "criteria": "Learner tests one issue, identifies where the system fails or could fail, and fixes it or documents the next fix.",
        "evidence": "Before/after note, reset note, debug log, or known-issue entry.",
        "levels": [
          "notYet",
          "withSupport",
          "independent"
        ]
      }
    },
    "commonFailurePoints": [
      "Learner changes too many things at once.",
      "The lab drifts toward unbounded tech support."
    ],
    "fallbackSteps": [
      "Narrow to one prepared file/profile/card.",
      "Compare against the known-good example.",
      "Restore the clean profile if troubleshooting exceeds the hard stop."
    ],
    "hintLadder": [
      "What changed?",
      "What did you expect?",
      "Which profile, file, mod, or setting controls that?",
      "Compare against the known-good example.",
      "Mentor models one safe step; learner completes the next step."
    ],
    "exitTicket": {
      "prompt": "Solve one planned launch problem by checking version, loader, and dependency clues.",
      "acceptedFormats": [
        "verbal",
        "typed",
        "sign",
        "mentorTranscribed",
        "screenshotCaption"
      ]
    },
    "evidenceItems": [
      {
        "type": "screenshot",
        "label": "Working result or before/after comparison",
        "gate": "do"
      },
      {
        "type": "text",
        "label": "Learner explanation",
        "gate": "explain"
      },
      {
        "type": "mentorNote",
        "label": "Debug or reset evidence",
        "gate": "debug"
      }
    ],
    "parentSummaryTemplate": "Today your child practiced compatibility reasoning with a prepared modpack problem by comparing versions and dependencies and identifying one planned issue.",
    "studentChecklist": [
      "I used the approved Modpack Lab profile.",
      "I made or observed one safe change.",
      "I tested what happened.",
      "I explained the result in my own words.",
      "I recorded one thing I fixed or would check next."
    ],
    "modpackLab": {
      "requiredProfile": "Block Buddies Modpack Lab Pilot Profile",
      "minecraftVersion": "1.21.1",
      "loader": "Fabric",
      "packVersion": "pilot-0.1",
      "knownGoodTest": "Open the approved profile, load the prepared lab world, confirm title screen/mod list, and complete the session demo action before learners arrive.",
      "resetInstructions": "Close Minecraft, duplicate the clean BlockBuddies-ModpackLab-CLEAN profile, rename the learner copy, and restore prepared files from the reset folder.",
      "deviceRequirements": "8 GB RAM minimum; mentor pretests load time and keeps vanilla fallback world ready.",
      "doNotTroubleshootBeyond": "10 minutes on planned issue; 5 minutes on profile launch confusion; immediate reset for unsafe download or unknown file source",
      "packReadinessChecks": [
        "Known-good profile launches",
        "Clean reset profile exists",
        "Prepared world opens",
        "Approved mod list matches session",
        "Fallback vanilla world is available"
      ],
      "approvedMods": [
        "Fabric API",
        "EMI",
        "Mod Menu",
        "one prepared missing library example"
      ],
      "requiredFiles": [
        "known-good manifest card",
        "prepared broken profile copy",
        "sanitized crash clue",
        "reset profile"
      ],
      "knownBrokenState": "Missing Fabric API or wrong-loader copy prepared by mentor.",
      "technicalRiskLevel": "medium"
    }
  },
  {
    "sessionId": "S15",
    "stage": "modpack-lab",
    "sequenceNumber": 15,
    "title": "Contraption or Automation Mod",
    "shortTitle": "Automation Mod",
    "estimatedMinutes": 60,
    "coreConcept": "Systems, throughput, bottlenecks, mechanical reasoning",
    "objective": "Build a small modded machine or automation chain",
    "studentMissionText": "Build a tiny machine, watch items move through it, and find where flow slows or stops.",
    "mentorFraming": "This lab teaches systems, throughput, bottlenecks, mechanical reasoning through one prepared environment, one safe change or observation, and one clear test.",
    "earlyWin": {
      "title": "Point to Flow",
      "steps": [
        "Learner activates a prepared demo and points to input, process, output, and status cue."
      ],
      "successCriteria": "Learner activates a prepared demo and points to input, process, output, and status cue."
    },
    "coreQuest": {
      "title": "Contraption or Automation Mod",
      "steps": [
        "Inspect the known-good demo machine.",
        "Build or complete a small automation chain.",
        "Label input, process, output, and status indicator.",
        "Run three test items through it.",
        "Identify and fix/document one bottleneck."
      ],
      "successCriteria": "Build a small modded machine or automation chain"
    },
    "trackExamples": {
      "visualist": {
        "label": "Builder Path",
        "example": "Use visible layout, labels, screenshots, signs, and clarity cues to complete the same goal.",
        "debugTarget": "Confusing or missing visual evidence."
      },
      "mechanist": {
        "label": "System Path",
        "example": "Use cause/effect, machines, flows, recipes, and bottlenecks to complete the same goal.",
        "debugTarget": "Broken or unclear system behavior."
      },
      "operator": {
        "label": "Operator Path",
        "example": "Use profile, file, version, config, checklist, and reset discipline to complete the same goal.",
        "debugTarget": "Wrong profile, file, version, or procedure."
      }
    },
    "sideQuests": [
      {
        "id": "S15-STRETCH",
        "tier": "stretch",
        "unlockMinFluency": 1,
        "unlockGateIds": [],
        "durationMin": 15,
        "outcome": "Extend the session artifact with one additional evidence-backed improvement."
      },
      {
        "id": "S15-EXPERT",
        "tier": "expert",
        "unlockMinFluency": 2,
        "unlockGateIds": [
          "MG-S15-DO"
        ],
        "durationMin": 15,
        "outcome": "Create a reusable checklist, changelog, or release note for the lab."
      }
    ],
    "masteryGates": {
      "do": {
        "criteria": "Build a small modded machine or automation chain",
        "evidence": "Screenshot, artifact, or mentor-observed completion of the lab output.",
        "levels": [
          "notYet",
          "withSupport",
          "independent"
        ]
      },
      "explain": {
        "criteria": "Learner explains systems, throughput, bottlenecks, mechanical reasoning in plain language using their artifact as evidence.",
        "evidence": "Verbal, typed, sign-based, or mentor-transcribed explanation.",
        "levels": [
          "notYet",
          "withSupport",
          "independent"
        ]
      },
      "debug": {
        "criteria": "Learner tests one issue, identifies where the system fails or could fail, and fixes it or documents the next fix.",
        "evidence": "Before/after note, reset note, debug log, or known-issue entry.",
        "levels": [
          "notYet",
          "withSupport",
          "independent"
        ]
      }
    },
    "commonFailurePoints": [
      "Learner changes too many things at once.",
      "The lab drifts toward unbounded tech support."
    ],
    "fallbackSteps": [
      "Narrow to one prepared file/profile/card.",
      "Compare against the known-good example.",
      "Restore the clean profile if troubleshooting exceeds the hard stop."
    ],
    "hintLadder": [
      "What changed?",
      "What did you expect?",
      "Which profile, file, mod, or setting controls that?",
      "Compare against the known-good example.",
      "Mentor models one safe step; learner completes the next step."
    ],
    "exitTicket": {
      "prompt": "Build a tiny machine, watch items move through it, and find where flow slows or stops.",
      "acceptedFormats": [
        "verbal",
        "typed",
        "sign",
        "mentorTranscribed",
        "screenshotCaption"
      ]
    },
    "evidenceItems": [
      {
        "type": "screenshot",
        "label": "Working result or before/after comparison",
        "gate": "do"
      },
      {
        "type": "text",
        "label": "Learner explanation",
        "gate": "explain"
      },
      {
        "type": "mentorNote",
        "label": "Debug or reset evidence",
        "gate": "debug"
      }
    ],
    "parentSummaryTemplate": "Today your child built a small modded automation system, traced inputs/processes/outputs, and debugged where the system slowed or stopped.",
    "studentChecklist": [
      "I used the approved Modpack Lab profile.",
      "I made or observed one safe change.",
      "I tested what happened.",
      "I explained the result in my own words.",
      "I recorded one thing I fixed or would check next."
    ],
    "modpackLab": {
      "requiredProfile": "Block Buddies Modpack Lab Pilot Profile",
      "minecraftVersion": "1.21.1",
      "loader": "Fabric",
      "packVersion": "pilot-0.1",
      "knownGoodTest": "Open the approved profile, load the prepared lab world, confirm title screen/mod list, and complete the session demo action before learners arrive.",
      "resetInstructions": "Close Minecraft, duplicate the clean BlockBuddies-ModpackLab-CLEAN profile, rename the learner copy, and restore prepared files from the reset folder.",
      "deviceRequirements": "8 GB RAM minimum; mentor pretests load time and keeps vanilla fallback world ready.",
      "doNotTroubleshootBeyond": "10 minutes on planned issue; 5 minutes on profile launch confusion; immediate reset for unsafe download or unknown file source",
      "packReadinessChecks": [
        "Known-good profile launches",
        "Clean reset profile exists",
        "Prepared world opens",
        "Approved mod list matches session",
        "Fallback vanilla world is available"
      ],
      "approvedMods": [
        "Create or lightweight prepared automation mod",
        "EMI",
        "Fabric API"
      ],
      "requiredFiles": [
        "prepared demo world",
        "tiny factory checklist",
        "known-good reset schematic"
      ],
      "knownBrokenState": "Prepared machine with one reversed belt, missing power source, or blocked output.",
      "technicalRiskLevel": "medium"
    }
  },
  {
    "sessionId": "S16",
    "stage": "modpack-lab",
    "sequenceNumber": 16,
    "title": "Mini-Modpack Capstone",
    "shortTitle": "Mini-Pack Capstone",
    "estimatedMinutes": 60,
    "coreConcept": "Product design, testing, documentation, player experience",
    "objective": "Build and present a tiny curated modpack experience",
    "studentMissionText": "Design a tiny modded experience for another player and prove it works.",
    "mentorFraming": "This lab teaches product design, testing, documentation, player experience through one prepared environment, one safe change or observation, and one clear test.",
    "earlyWin": {
      "title": "Choose Player Promise",
      "steps": [
        "Learner chooses a theme card and writes \u201cThis pack lets you ___.\u201d"
      ],
      "successCriteria": "Learner chooses a theme card and writes \u201cThis pack lets you ___.\u201d"
    },
    "coreQuest": {
      "title": "Mini-Modpack Capstone",
      "steps": [
        "Choose one approved theme and 3-6 approved mods.",
        "State the player promise.",
        "Make one controlled config change and one resource/data-pack change if appropriate.",
        "Create a short player guide.",
        "Run the capstone test plan and present evidence."
      ],
      "successCriteria": "Build and present a tiny curated modpack experience"
    },
    "trackExamples": {
      "visualist": {
        "label": "Builder Path",
        "example": "Use visible layout, labels, screenshots, signs, and clarity cues to complete the same goal.",
        "debugTarget": "Confusing or missing visual evidence."
      },
      "mechanist": {
        "label": "System Path",
        "example": "Use cause/effect, machines, flows, recipes, and bottlenecks to complete the same goal.",
        "debugTarget": "Broken or unclear system behavior."
      },
      "operator": {
        "label": "Operator Path",
        "example": "Use profile, file, version, config, checklist, and reset discipline to complete the same goal.",
        "debugTarget": "Wrong profile, file, version, or procedure."
      }
    },
    "sideQuests": [
      {
        "id": "S16-STRETCH",
        "tier": "stretch",
        "unlockMinFluency": 1,
        "unlockGateIds": [],
        "durationMin": 15,
        "outcome": "Extend the session artifact with one additional evidence-backed improvement."
      },
      {
        "id": "S16-EXPERT",
        "tier": "expert",
        "unlockMinFluency": 2,
        "unlockGateIds": [
          "MG-S16-DO"
        ],
        "durationMin": 15,
        "outcome": "Create a reusable checklist, changelog, or release note for the lab."
      }
    ],
    "masteryGates": {
      "do": {
        "criteria": "Build and present a tiny curated modpack experience",
        "evidence": "Screenshot, artifact, or mentor-observed completion of the lab output.",
        "levels": [
          "notYet",
          "withSupport",
          "independent"
        ]
      },
      "explain": {
        "criteria": "Learner explains product design, testing, documentation, player experience in plain language using their artifact as evidence.",
        "evidence": "Verbal, typed, sign-based, or mentor-transcribed explanation.",
        "levels": [
          "notYet",
          "withSupport",
          "independent"
        ]
      },
      "debug": {
        "criteria": "Learner tests one issue, identifies where the system fails or could fail, and fixes it or documents the next fix.",
        "evidence": "Before/after note, reset note, debug log, or known-issue entry.",
        "levels": [
          "notYet",
          "withSupport",
          "independent"
        ]
      }
    },
    "commonFailurePoints": [
      "Learner changes too many things at once.",
      "The lab drifts toward unbounded tech support."
    ],
    "fallbackSteps": [
      "Narrow to one prepared file/profile/card.",
      "Compare against the known-good example.",
      "Restore the clean profile if troubleshooting exceeds the hard stop."
    ],
    "hintLadder": [
      "What changed?",
      "What did you expect?",
      "Which profile, file, mod, or setting controls that?",
      "Compare against the known-good example.",
      "Mentor models one safe step; learner completes the next step."
    ],
    "exitTicket": {
      "prompt": "Design a tiny modded experience for another player and prove it works.",
      "acceptedFormats": [
        "verbal",
        "typed",
        "sign",
        "mentorTranscribed",
        "screenshotCaption"
      ]
    },
    "evidenceItems": [
      {
        "type": "screenshot",
        "label": "Working result or before/after comparison",
        "gate": "do"
      },
      {
        "type": "text",
        "label": "Learner explanation",
        "gate": "explain"
      },
      {
        "type": "mentorNote",
        "label": "Debug or reset evidence",
        "gate": "debug"
      }
    ],
    "parentSummaryTemplate": "Today your child designed a small modded Minecraft experience by choosing a theme, selecting approved mods, making controlled changes, testing, documenting, and presenting one fix or next improvement.",
    "studentChecklist": [
      "I used the approved Modpack Lab profile.",
      "I made or observed one safe change.",
      "I tested what happened.",
      "I explained the result in my own words.",
      "I recorded one thing I fixed or would check next."
    ],
    "modpackLab": {
      "requiredProfile": "Block Buddies Modpack Lab Pilot Profile",
      "minecraftVersion": "1.21.1",
      "loader": "Fabric",
      "packVersion": "pilot-0.1",
      "knownGoodTest": "Open the approved profile, load the prepared lab world, confirm title screen/mod list, and complete the session demo action before learners arrive.",
      "resetInstructions": "Close Minecraft, duplicate the clean BlockBuddies-ModpackLab-CLEAN profile, rename the learner copy, and restore prepared files from the reset folder.",
      "deviceRequirements": "8 GB RAM minimum; mentor pretests load time and keeps vanilla fallback world ready.",
      "doNotTroubleshootBeyond": "10 minutes on planned issue; 5 minutes on profile launch confusion; immediate reset for unsafe download or unknown file source",
      "packReadinessChecks": [
        "Known-good profile launches",
        "Clean reset profile exists",
        "Prepared world opens",
        "Approved mod list matches session",
        "Fallback vanilla world is available"
      ],
      "approvedMods": [
        "3-6 approved mods from Stage 2 list",
        "EMI",
        "Mod Menu",
        "Fabric API",
        "optional Create for systems theme"
      ],
      "requiredFiles": [
        "capstone pack template",
        "player guide template",
        "test plan",
        "debug log",
        "config/resource/data diff"
      ],
      "knownBrokenState": "Learner-created known issue log; no surprise broken profile unless mentor prepares one.",
      "technicalRiskLevel": "medium"
    }
  }
];
