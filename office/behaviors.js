// behaviors.js — Agent behavior/sitcom engine
// State machine per agent: idle → walking → working → sleeping → chatting → blocked_pacing
// Transitions driven by Paperclip API status + random timers.
// No pathfinding — lerp between positions.
//
// Usage:
//   <script src="behaviors.js"></script>
//   Behaviors.update(agents, tick, env)  // call each animation frame
//   Behaviors.getOffset(agentId)         // → {px, py} canvas pixel offsets
//   Behaviors.getRenderHints(agentId)    // → {state, sleeping, chatting, eurekaTick, ...}
//   Behaviors.getTaskConnections(agents) // → [[id1,id2], ...] pairs sharing parentTaskId
//   Behaviors.clearStaleState(activeIds) // prune state for removed agents

'use strict';

(function () {

  // ── State constants ──────────────────────────────────────────────────────────

  var S_IDLE    = 'idle';
  var S_WALKING = 'walking';
  var S_WORKING = 'working';
  var S_SLEEPING= 'sleeping';
  var S_CHATTING= 'chatting';
  var S_PACING  = 'blocked_pacing';
  var S_VISITING= 'visiting';

  // ── Per-agent state storage ──────────────────────────────────────────────────

  var states = {};

  function get(id) {
    if (!states[id]) {
      states[id] = {
        state:       S_IDLE,
        timer:       0,
        idleAccum:   Math.floor(Math.random() * 300), // stagger agent sleep timers
        px: 0, py: 0,   // current lerp position offset from desk (canvas px)
        tpx: 0, tpy: 0, // lerp target
        chatPartner: null,
        pacePhase:   Math.random() * Math.PI * 2,
        lastStatus:  null,
        lastTask:    null,
        eurekaTick:  0,
        zzzPhase:    0,
        idleAction:  null,
        idleActionTimer: 0,
        visitTx: 0, visitTy: 0,
      };
    }
    return states[id];
  }

  function transition(st, newState) {
    st.state = newState;
    st.timer = 0;
  }

  // ── Idle micro-actions ───────────────────────────────────────────────────────

  var IDLE_ACTIONS = ['stretch', 'look_left', 'look_right', 'fidget'];

  function pickIdleAction() {
    return IDLE_ACTIONS[Math.floor(Math.random() * IDLE_ACTIONS.length)];
  }

  // ── Main update ─────────────────────────────────────────────────────────────
  //
  // @param {Object[]} agents  — placed agents with .id, .status, .tx, .ty,
  //                             .currentTask, .parentTaskId, .role, .name
  // @param {number}   tick    — walkTick (increments each frame)
  // @param {Object}   env     — { ZONE_DEFS, ZONE_DESKS, agentZone,
  //                               sceneOffX, sceneOffY, TS, spawnParticle }

  function update(agents, tick, env) {
    var ZONE_DEFS    = env.ZONE_DEFS;
    var ZONE_DESKS   = env.ZONE_DESKS;
    var agentZone    = env.agentZone;
    var sceneOffX    = env.sceneOffX;
    var sceneOffY    = env.sceneOffY;
    var TS           = env.TS;
    var spawnParticle= env.spawnParticle;

    // Build lookup for social interactions
    var byId   = {};
    var byZone = {};
    for (var i = 0; i < agents.length; i++) {
      var a = agents[i];
      byId[a.id] = a;
      var z = agentZone(a);
      if (!byZone[z]) byZone[z] = [];
      byZone[z].push(a);
    }

    for (var i = 0; i < agents.length; i++) {
      var agent     = agents[i];
      var st        = get(agent.id);
      var apiStatus = agent.status; // 'running' | 'idle' | 'blocked'

      st.timer++;

      // ── API status → state transition ─────────────────────────────────────

      var statusChanged = (apiStatus !== st.lastStatus);
      if (statusChanged) {
        st.lastStatus = apiStatus;
        if (apiStatus === 'running') {
          // End any social interaction with partner
          if (st.chatPartner) {
            var partnerSt = states[st.chatPartner];
            if (partnerSt && partnerSt.state === S_CHATTING) {
              transition(partnerSt, S_IDLE);
              partnerSt.chatPartner = null;
              partnerSt.idleAccum = 0;
            }
            st.chatPartner = null;
          }
          transition(st, S_WORKING);
        } else if (apiStatus === 'blocked') {
          if (st.chatPartner) {
            var partnerSt = states[st.chatPartner];
            if (partnerSt && partnerSt.state === S_CHATTING) {
              transition(partnerSt, S_IDLE);
              partnerSt.chatPartner = null;
              partnerSt.idleAccum = 0;
            }
            st.chatPartner = null;
          }
          transition(st, S_PACING);
          st.pacePhase = 0;
        } else if (apiStatus === 'idle') {
          if (st.state === S_WORKING || st.state === S_PACING) {
            transition(st, S_IDLE);
            st.idleAccum = 0;
          }
        }
      }

      // ── Eureka: trigger on task title change while running ─────────────────

      if (apiStatus === 'running' && agent.currentTask && agent.currentTask !== st.lastTask) {
        if (st.lastTask !== null) {
          // Task changed mid-run → eureka!
          st.eurekaTick = 70;
        }
        st.lastTask = agent.currentTask;
      } else if (apiStatus !== 'running') {
        st.lastTask = null;
      }

      if (st.eurekaTick > 0) {
        st.eurekaTick--;
        if (st.eurekaTick % 5 === 0) {
          var ax = sceneOffX + agent.tx * TS + Math.round(st.px) + 15;
          var ay = sceneOffY + agent.ty * TS + Math.round(st.py) - 22;
          spawnParticle(ax + (Math.random() - 0.5) * 14, ay,
            (Math.random() - 0.5) * 1.8, -1.6 - Math.random() * 0.8,
            28, '#00e676', 3);
          spawnParticle(ax + (Math.random() - 0.5) * 10, ay - 6,
            (Math.random() - 0.5) * 1.2, -1.0 - Math.random() * 0.5,
            20, '#ffd54f', 2);
        }
      }

      // ── State logic ────────────────────────────────────────────────────────

      switch (st.state) {

        // ── Working ─────────────────────────────────────────────────────────
        case S_WORKING: {
          // Subtle typing micro-movement at desk
          st.tpx = Math.sin(tick * 0.19 + st.pacePhase) * 2;
          st.tpy = Math.cos(tick * 0.13 + st.pacePhase) * 1.5;
          st.px += (st.tpx - st.px) * 0.12;
          st.py += (st.tpy - st.py) * 0.12;
          break;
        }

        // ── Blocked pacing ──────────────────────────────────────────────────
        case S_PACING: {
          // Pace left/right ±1.5 tiles around desk position
          st.pacePhase += 0.032;
          st.tpx = Math.sin(st.pacePhase) * TS * 1.4;
          st.tpy = 0;
          st.px += (st.tpx - st.px) * 0.07;
          st.py += (st.tpy - st.py) * 0.07;

          // Red ! particle above head
          if (tick % 35 === 0) {
            var ax = sceneOffX + agent.tx * TS + Math.round(st.px) + 15;
            var ay = sceneOffY + agent.ty * TS + Math.round(st.py) - 26;
            spawnParticle(ax, ay,      0,    -0.9, 32, '#ff5252', 4);
            spawnParticle(ax + 4, ay + 2, 0, -0.7, 22, '#ff5252', 3);
          }
          break;
        }

        // ── Idle ─────────────────────────────────────────────────────────────
        case S_IDLE: {
          st.idleAccum++;

          // Periodic idle micro-actions (stretch, fidget, look around)
          if (st.timer % 150 === 1) {
            st.idleAction      = pickIdleAction();
            st.idleActionTimer = 70;
          }
          if (st.idleActionTimer > 0) {
            st.idleActionTimer--;
            var phase = 1 - (st.idleActionTimer / 70);
            if (st.idleAction === 'stretch') {
              st.tpx = 0;
              st.tpy = -Math.sin(phase * Math.PI) * 7;
            } else if (st.idleAction === 'fidget') {
              st.tpx = Math.sin(tick * 0.5) * 3;
              st.tpy = 0;
            } else {
              st.tpx = 0; st.tpy = 0;
            }
          } else {
            st.tpx = 0; st.tpy = 0;
          }
          st.px += (st.tpx - st.px) * 0.07;
          st.py += (st.tpy - st.py) * 0.07;

          // Fall asleep after extended idle (~10–18s at 60fps)
          if (st.idleAccum > 600 + Math.floor(Math.random() * 480)) {
            transition(st, S_SLEEPING);
            st.zzzPhase = 0;
            break;
          }

          // Occasionally start wandering within zone (~every 5–15s)
          if (st.timer > 300 + Math.floor(Math.random() * 600)) {
            var zone    = agentZone(agent);
            var zoneDef = null;
            for (var z = 0; z < ZONE_DEFS.length; z++) {
              if (ZONE_DEFS[z].id === zone) { zoneDef = ZONE_DEFS[z]; break; }
            }
            if (zoneDef) {
              var maxWander = TS * 2.5;
              var randTx = (zoneDef.tx + Math.random() * zoneDef.tw) | 0;
              var randTy = (zoneDef.ty + Math.random() * zoneDef.th) | 0;
              st.tpx = Math.max(-maxWander, Math.min(maxWander, (randTx - agent.tx) * TS + (Math.random() - 0.5) * TS * 0.6));
              st.tpy = Math.max(-maxWander, Math.min(maxWander, (randTy - agent.ty) * TS + (Math.random() - 0.5) * TS * 0.6));
            } else {
              st.tpx = (Math.random() - 0.5) * TS * 2;
              st.tpy = (Math.random() - 0.5) * TS * 2;
            }
            transition(st, S_WALKING);
            break;
          }

          // CEO floor walk: Puck occasionally visits all zones
          var isCEO = agent.name && agent.name.toLowerCase().indexOf('puck') !== -1;
          if (isCEO && st.timer > 180 && Math.random() < 0.0018) {
            var zoneKeys = Object.keys(ZONE_DESKS);
            var targetZoneKey = zoneKeys[Math.floor(Math.random() * zoneKeys.length)];
            var desks = ZONE_DESKS[targetZoneKey];
            if (desks && desks.length > 0) {
              var desk = desks[Math.floor(Math.random() * desks.length)];
              st.visitTx = desk[0];
              st.visitTy = desk[1];
              transition(st, S_VISITING);
              break;
            }
          }

          // PM check-in: PM agents occasionally walk to IC desks
          var isPM = agent.role === 'pm';
          if (isPM && st.timer > 400 && Math.random() < 0.0012) {
            var ics = [];
            for (var j = 0; j < agents.length; j++) {
              var r = agents[j].role;
              if (r === 'engineer' || r === 'researcher') ics.push(agents[j]);
            }
            if (ics.length > 0) {
              var target = ics[Math.floor(Math.random() * ics.length)];
              st.visitTx = target.tx;
              st.visitTy = target.ty;
              transition(st, S_VISITING);
              break;
            }
          }

          // Social chat: two idle same-zone agents face each other
          if (st.timer > 120 && !st.chatPartner) {
            var myZone = agentZone(agent);
            var zonemates = byZone[myZone] || [];
            for (var j = 0; j < zonemates.length; j++) {
              var mate = zonemates[j];
              if (mate.id === agent.id) continue;
              if (mate.status !== 'idle') continue;
              var mateSt = get(mate.id);
              if (mateSt.state !== S_IDLE || mateSt.chatPartner) continue;
              if (Math.random() < 0.0025) {
                // Start a chat
                var dx = (mate.tx - agent.tx) * TS * 0.25;
                var dy = (mate.ty - agent.ty) * TS * 0.25;
                transition(st, S_CHATTING);
                st.chatPartner = mate.id;
                st.tpx = dx; st.tpy = dy;
                transition(mateSt, S_CHATTING);
                mateSt.chatPartner = agent.id;
                mateSt.tpx = -dx; mateSt.tpy = -dy;
                break;
              }
            }
          }
          break;
        }

        // ── Walking ──────────────────────────────────────────────────────────
        case S_WALKING: {
          st.px += (st.tpx - st.px) * 0.045;
          st.py += (st.tpy - st.py) * 0.045;

          // Return to idle when close enough or timeout
          var distSq = (st.tpx - st.px) * (st.tpx - st.px) + (st.tpy - st.py) * (st.tpy - st.py);
          if (distSq < 16 || st.timer > 200) {
            transition(st, S_IDLE);
            st.idleAccum = 0;
          }
          break;
        }

        // ── Visiting ─────────────────────────────────────────────────────────
        case S_VISITING: {
          // Move toward visitTx/visitTy (tile coords)
          var destPx = (st.visitTx - agent.tx) * TS;
          var destPy = (st.visitTy - agent.ty) * TS;
          st.px += (destPx - st.px) * 0.03;
          st.py += (destPy - st.py) * 0.03;

          var distSq2 = (destPx - st.px) * (destPx - st.px) + (destPy - st.py) * (destPy - st.py);
          if (distSq2 < 25 || st.timer > 350) {
            transition(st, S_IDLE);
            st.idleAccum = 0;
            // Linger briefly at destination before drifting back
            st.tpx = destPx; st.tpy = destPy;
          }
          break;
        }

        // ── Sleeping ─────────────────────────────────────────────────────────
        case S_SLEEPING: {
          // Slight forward droop at desk
          st.tpx = 0; st.tpy = 5;
          st.px += (st.tpx - st.px) * 0.04;
          st.py += (st.tpy - st.py) * 0.04;

          // zzz particles float up in ascending size sequence
          st.zzzPhase += 0.035;
          if (tick % 50 === 0) {
            var ax  = sceneOffX + agent.tx * TS + Math.round(st.px) + 18;
            var ay  = sceneOffY + agent.ty * TS + Math.round(st.py) - 20;
            var seq = Math.floor(st.zzzPhase) % 3;
            spawnParticle(ax + seq * 5, ay - seq * 8,
              0.25 + seq * 0.1, -0.45 - seq * 0.18,
              65, '#a0c8f0', 2 + seq);
          }

          // Wake up after 7–18s
          if (st.timer > 420 + Math.floor(Math.random() * 660)) {
            transition(st, S_IDLE);
            st.idleAccum = 0;
          }
          break;
        }

        // ── Chatting ─────────────────────────────────────────────────────────
        case S_CHATTING: {
          // Hold near partner
          st.px += (st.tpx - st.px) * 0.055;
          st.py += (st.tpy - st.py) * 0.055;

          // End chat after 3–6s
          if (st.timer > 180 + Math.floor(Math.random() * 180)) {
            if (st.chatPartner) {
              var partnerSt = states[st.chatPartner];
              if (partnerSt && partnerSt.state === S_CHATTING) {
                transition(partnerSt, S_IDLE);
                partnerSt.chatPartner = null;
                partnerSt.idleAccum = 0;
              }
            }
            transition(st, S_IDLE);
            st.chatPartner = null;
            st.idleAccum = 0;
          }
          break;
        }
      }
    }
  }

  // ── Public API ───────────────────────────────────────────────────────────────

  /**
   * Get canvas pixel offset for an agent (relative to its desk tile origin).
   * @returns {{ px: number, py: number }}
   */
  function getOffset(agentId) {
    var st = states[agentId];
    if (!st) return { px: 0, py: 0 };
    return { px: Math.round(st.px), py: Math.round(st.py) };
  }

  /**
   * Get render hints for visual effects beyond the basic sprite.
   * @returns {{ state, sleeping, chatting, eurekaTick, idleAction, idleActionTimer }}
   */
  function getRenderHints(agentId) {
    var st = states[agentId];
    if (!st) return { state: S_IDLE, sleeping: false, chatting: false, eurekaTick: 0, idleAction: null, idleActionTimer: 0 };
    return {
      state:           st.state,
      sleeping:        st.state === S_SLEEPING,
      chatting:        st.state === S_CHATTING,
      eurekaTick:      st.eurekaTick,
      idleAction:      st.idleAction,
      idleActionTimer: st.idleActionTimer,
    };
  }

  /**
   * Get pairs of running agents that share a parentTaskId.
   * Requires agents to have a .parentTaskId field.
   * @param {Object[]} agents
   * @returns {Array<[string, string]>} pairs of agent IDs
   */
  function getTaskConnections(agents) {
    var byParent = {};
    for (var i = 0; i < agents.length; i++) {
      var a = agents[i];
      if (a.status === 'running' && a.parentTaskId) {
        if (!byParent[a.parentTaskId]) byParent[a.parentTaskId] = [];
        byParent[a.parentTaskId].push(a.id);
      }
    }
    var pairs = [];
    var parentIds = Object.keys(byParent);
    for (var p = 0; p < parentIds.length; p++) {
      var ids = byParent[parentIds[p]];
      for (var i = 0; i < ids.length; i++) {
        for (var j = i + 1; j < ids.length; j++) {
          pairs.push([ids[i], ids[j]]);
        }
      }
    }
    return pairs;
  }

  /**
   * Remove behavior state for agents no longer in the scene.
   * Call after each data refresh.
   * @param {string[]} activeIds
   */
  function clearStaleState(activeIds) {
    var active = {};
    for (var i = 0; i < activeIds.length; i++) active[activeIds[i]] = true;
    var ids = Object.keys(states);
    for (var i = 0; i < ids.length; i++) {
      if (!active[ids[i]]) delete states[ids[i]];
    }
  }

  window.Behaviors = {
    update:             update,
    getOffset:          getOffset,
    getRenderHints:     getRenderHints,
    getTaskConnections: getTaskConnections,
    clearStaleState:    clearStaleState,
  };

})();
