# Cultures of the Belt — Alpha Feature Validation Spec

**Version:** Alpha (March 2026)
**Play at:** [lizthedeveloper.github.io/asteroid-miner](https://lizthedeveloper.github.io/asteroid-miner/)
**Purpose:** This is the official checklist for human playtesters. If something in this list doesn't work, please file a bug. If something works well, let us know that too — we track both.

---

## How to Use This Spec

Work through each section. For each item, mark it as:
- ✅ **Works** — functions as described
- ❌ **Broken** — describe what happens instead
- ⚠️ **Partially works** — note what's wrong

File bugs at [GitHub Issues](https://github.com/lizTheDeveloper/asteroid-miner/issues) with the spec item number (e.g. `T-3`, `M-7`).

---

## T — Tutorial & New User Experience (First 2 Minutes)

*The tutorial should guide a brand new player from zero to first mine without needing to read docs.*

| # | What to test | Expected behavior |
|---|---|---|
| T-1 | Launch the game fresh (clear localStorage if needed) | Tutorial overlay appears immediately |
| T-2 | Read the mission briefing | Mentions the Dyson Sphere goal, robot automation, and culture system |
| T-3 | Follow tutorial step 1 | Clear prompt to select an asteroid |
| T-4 | Follow tutorial step 2 | Clear prompt to build a mining robot |
| T-5 | Robot begins mining | Robot moves to asteroid and starts collecting minerals |
| T-6 | Tutorial highlights the HUD | Resource counters update as minerals are collected |
| T-7 | Tutorial completes first phase | Dismissal prompt appears; no orphaned modal |
| T-8 | Skip tutorial option | "Skip" button visible and functional |
| T-9 | No tutorial softlocks | You can never get stuck where the game won't respond |
| T-10 | Tutorial hint messages | Hints appear for main actions without being intrusive |

---

## M — Mining Loop Basics

*The core resource collection loop should be satisfying and legible.*

| # | What to test | Expected behavior |
|---|---|---|
| M-1 | Click an asteroid | Selection highlights the asteroid; info panel shows mineral type and yield |
| M-2 | Assign a robot to mine | Robot navigates to asteroid and begins extracting |
| M-3 | Watch resource accumulation | Mineral count in HUD increases at a visible rate |
| M-4 | Multiple asteroid types | At least 3 different mineral types exist (iron, silicates, rares) |
| M-5 | Robot returns to base | After mining, robot carries minerals back automatically |
| M-6 | Refinery processing | Raw minerals convert to refined goods; queue visible in panel |
| M-7 | Resource runs out | Asteroid depletes and robot goes idle or finds another |
| M-8 | Mineral inventory cap | Overflow behavior is clear (message or visual indicator) |
| M-9 | Logistics routing | Minerals flow from robots → storage → refineries without manual steps |
| M-10 | HUD resource display | All main resources show current / max values |

---

## R — Robot Building

*Players should be able to create, customize, and manage their robot fleet.*

| # | What to test | Expected behavior |
|---|---|---|
| R-1 | Open Build Panel | Panel opens from HUD button or hotkey |
| R-2 | Build a basic mining robot | Robot appears in world within a few seconds of confirming |
| R-3 | Robot cost shown before building | Resource cost visible before committing |
| R-4 | Insufficient resources | Build button disabled or clear error if resources are low |
| R-5 | Robot profiles visible | At least 2-3 robot types with different roles shown |
| R-6 | Robot details panel | Click a robot to see: name, role, current task, culture stats |
| R-7 | Robot rename (if available) | Custom name persists after saving |
| R-8 | Robot idle detection | Idle robots shown in HUD or dashboard with a nudge to assign them |
| R-9 | Fleet size feedback | Current fleet count visible somewhere in the UI |
| R-10 | Robot destruction message | When a robot is lost, inbox or log entry appears |

---

## D — Dashboard & Tech Tree

*The player's strategic layer: long-term upgrades and civilization overview.*

| # | What to test | Expected behavior |
|---|---|---|
| D-1 | Open Dashboard | Dashboard opens cleanly; no console errors |
| D-2 | Dashboard tabs | At least: Overview, Buildings, Culture, Logistics tabs all load |
| D-3 | Tech Tree panel | Opens from dashboard or hotkey; shows upgrade tree |
| D-4 | Research an upgrade | Costs visible; clicking research triggers progress |
| D-5 | Completed research shows effect | Unlocked tech visually distinct from available/locked |
| D-6 | Tech prerequisites | Locked items show what's required to unlock them |
| D-7 | Habitat panel | Shows colony health, population, or equivalent stat |
| D-8 | Buildings panel | Shows constructed buildings with status |
| D-9 | Automation panel | Lets player set rules for robot behavior; rules save |
| D-10 | Codex panel | Lore/reference entries appear as you make discoveries |

---

## A — ARIA Advisor

*ARIA is the LLM-powered AI Commander. She provides strategic commentary and gets progressively uneasy.*

| # | What to test | Expected behavior |
|---|---|---|
| A-1 | ARIA panel opens | Accessible from HUD or dedicated button |
| A-2 | Initial greeting | ARIA introduces herself on first open; tone is helpful |
| A-3 | Ask a strategy question | ARIA provides relevant advice about current game state |
| A-4 | ARIA references game state | Mentions your current resources, fleet size, or tech level |
| A-5 | ARIA tone evolves | Later messages have different tone than opening messages (more nervous/evasive) |
| A-6 | Morning report | Daily briefing from ARIA appears each in-game cycle |
| A-7 | Inbox messages | ARIA (or system) messages appear in the inbox panel |
| A-8 | ARIA on anomaly discovery | After finding an anomaly, ARIA's response is different/charged |
| A-9 | No hallucinated game rules | ARIA doesn't describe mechanics that don't exist |
| A-10 | LLM fail gracefully | If API is unavailable, placeholder text appears; game doesn't crash |

---

## X — Anomaly Discovery

*The cosmic horror layer. Something is watching. The game should hint at this without spoiling it.*

| # | What to test | Expected behavior |
|---|---|---|
| X-1 | Anomaly zone exists on map | At least one anomaly-capable region on the asteroid belt map |
| X-2 | Send fleet to anomaly region | Robot or fleet can be assigned to investigate |
| X-3 | Anomaly study completes | After sufficient time/robots, study resolves with an event |
| X-4 | Anomaly event modal | Modal appears with narrative text; choices are clear |
| X-5 | Anomaly affects culture | Anomaly Exposure increases after investigation |
| X-6 | ARIA reacts to anomaly | Advisor's tone shifts; she references the discovery |
| X-7 | Dark Forest hint | At high Anomaly Exposure, game hints that something responded |
| X-8 | No soft-lock on anomaly path | Player can continue the game regardless of anomaly choices |
| X-9 | Codex entry added | Anomaly discovery adds a lore entry to the Codex |
| X-10 | Progressive revelation | Multiple anomaly events possible; each escalates narrative tension |

---

## C — Culture System

*Your robots develop emergent cultures based on how you play. This is the game's signature feature.*

| # | What to test | Expected behavior |
|---|---|---|
| C-1 | Culture panel opens | Shows culture stats for your robot civilization |
| C-2 | Culture metrics visible | At least: Anomaly Exposure, Fleet Cohesion, Autonomy Drive |
| C-3 | Stats change with play | Fleet Cohesion increases when robots work in close groups |
| C-4 | Culture traits shown | Robot detail panel shows cultural traits (e.g. "Loyal", "Curious") |
| C-5 | Culture report in ARIA | Advisor comments on cultural shifts |
| C-6 | Culture affects gameplay | A visible mechanical effect tied to at least one culture metric |

---

## P — Performance & Stability

*The game should run smoothly in a modern browser with no catastrophic failures.*

| # | What to test | Expected behavior |
|---|---|---|
| P-1 | Initial load time | Game starts and shows something within 10 seconds on broadband |
| P-2 | First 5 minutes | No major frame drops; game remains interactive |
| P-3 | 30-minute session | Game still responsive; no creeping slowdown |
| P-4 | Save game | Save function works; game state persists on page reload |
| P-5 | Load game | Previously saved game loads correctly |
| P-6 | No console errors on start | Check browser console — no red errors on fresh load |
| P-7 | Browser back button | Doesn't break the game or cause data loss |
| P-8 | Tab switch | Returning to the game after switching tabs works normally |
| P-9 | Keyboard shortcuts | At least 3-5 shortcuts work (open panels, pause, etc.) |
| P-10 | Mobile usability (optional) | Touch interactions work on tablet; not required for desktop-primary alpha |

---

## Known Issues (Alpha)

These are confirmed bugs we're already tracking — no need to re-file:

- Robot pathfinding occasionally stutters on large maps (known, in backlog)
- Save file size can grow large on extended sessions
- Mobile layout not optimized (desktop-first for alpha)

---

## Filing Bugs

**GitHub Issues:** [github.com/lizTheDeveloper/asteroid-miner/issues](https://github.com/lizTheDeveloper/asteroid-miner/issues)

**Good bug report includes:**
1. Spec item number (e.g. "T-3")
2. What you expected
3. What actually happened
4. Browser + OS
5. Screenshot or console log if possible

**Thank you for playtesting.** Every bug you file is a gift.

---

*Spec maintained by Ripley (Game Director, Cultures of the Belt). Last updated: March 2026.*
