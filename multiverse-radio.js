/* ============================================
   MULTIVERSE STUDIOS — Multiverse Radio
   Self-contained music player widget
   ============================================ */

(function initMultiverseRadio() {
  'use strict';

  const PLAYLIST_URL = '/akashic-records/audio/playlist.json';
  const AUDIO_BASE   = '/akashic-records/audio/';
  const CHANNEL_NAME = 'mv-radio';
  const LS_COLLAPSED = 'mv-radio-collapsed';
  const LS_VOLUME    = 'mv-radio-volume';
  const LS_TRACK_IDX = 'mv-radio-track-idx';

  // ── Utilities ──────────────────────────────────────────────

  function storageGet(key, fallback) {
    try { const v = localStorage.getItem(key); return v !== null ? v : fallback; }
    catch (_) { return fallback; }
  }

  function storageSet(key, value) {
    try { localStorage.setItem(key, String(value)); } catch (_) { /* noop */ }
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // ── State ──────────────────────────────────────────────────

  // Priority tiers — game tabs always outrank the website widget
  const WIDGET_PRIORITY = 1;
  const tabId = 'widget-radio-' + Date.now() + '-' + Math.random().toString(36).slice(2, 6);

  let allTracks    = [];
  let playlist     = [];
  let trackIdx     = parseInt(storageGet(LS_TRACK_IDX, '0'), 10) || 0;
  let isLeader     = false;
  let currentLeaderPriority = -1;
  let gameContext  = null;
  let collapsed    = storageGet(LS_COLLAPSED, 'false') === 'true';
  let heartbeatTimer = null;

  const audio = new Audio();
  audio.volume = parseFloat(storageGet(LS_VOLUME, '0.7'));
  audio.preload = 'metadata';

  // ── BroadcastChannel ──────────────────────────────────────

  let channel;
  try { channel = new BroadcastChannel(CHANNEL_NAME); } catch (_) { channel = null; }

  function broadcast(type, data) {
    if (channel) {
      try { channel.postMessage({ type, tabId, role: 'widget', priority: WIDGET_PRIORITY, ...data }); } catch (_) { /* noop */ }
    }
  }

  function startHeartbeat() {
    clearInterval(heartbeatTimer);
    heartbeatTimer = setInterval(() => broadcast('leader-heartbeat'), 3000);
  }

  function becomeLeader() {
    isLeader = true;
    currentLeaderPriority = WIDGET_PRIORITY;
    broadcast('leader-claim');
    startHeartbeat();
    updateLeaderUI();
  }

  function syncState() {
    const track = playlist[trackIdx];
    broadcast('sync-state', {
      trackIdx,
      path: track ? track.path : null,
      playing: !audio.paused,
      position: audio.currentTime,
    });
  }

  if (channel) {
    channel.onmessage = (e) => {
      const { type } = e.data;
      if (e.data.tabId === tabId) return; // ignore own messages
      if (type === 'leader-claim') {
        const claimPriority = e.data.priority ?? 0;
        currentLeaderPriority = claimPriority;
        if (isLeader && claimPriority >= WIDGET_PRIORITY) {
          // Higher-priority tab (game) claimed — yield and pause
          isLeader = false;
          clearInterval(heartbeatTimer);
          doPause();
          updateLeaderUI();
        } else if (!isLeader) {
          updateLeaderUI();
        }
      } else if (type === 'leader-resign') {
        // Previous leader left; start election with delay
        currentLeaderPriority = -1;
        setTimeout(() => {
          if (currentLeaderPriority < 0) {
            becomeLeader();
            resumePlayback();
          }
        }, 200);
      } else if (type === 'leader-heartbeat') {
        if (e.data.priority !== undefined) {
          currentLeaderPriority = e.data.priority;
        }
      } else if (type === 'sync-state' && !isLeader) {
        applySyncState(e.data);
      } else if (type === 'play' && isLeader) {
        doPlay();
      } else if (type === 'pause' && isLeader) {
        doPause();
      } else if (type === 'skip' && isLeader) {
        doSkip(e.data.direction);
      } else if (type === 'context-change' && isLeader) {
        applyContext(e.data.game);
      }
    };
  }

  function applySyncState(data) {
    if (data.path) {
      if (audio.src !== AUDIO_BASE + data.path) {
        audio.src = AUDIO_BASE + data.path;
        audio.currentTime = data.position || 0;
      }
    }
    updateNowPlaying();
    updatePlayPauseButton(data.playing);
  }

  window.addEventListener('beforeunload', () => {
    if (isLeader) {
      clearInterval(heartbeatTimer);
      broadcast('leader-resign', { tabId });
    }
  });

  // ── Playlist management ────────────────────────────────────

  function loadPlaylist() {
    fetch(PLAYLIST_URL)
      .then(r => r.ok ? r.json() : [])
      .then(data => {
        allTracks = (data && Array.isArray(data.tracks)) ? data.tracks : [];
        applyContext(gameContext, /* restoreIdx */ true);
        if (isLeader) resumePlayback();
      })
      .catch(() => { allTracks = []; });
  }

  function applyContext(game, restoreIdx, autoplay) {
    gameContext = game || null;
    let filtered = allTracks;
    if (game && game !== 'website') {
      filtered = allTracks.filter(t => t.game === game);
      if (!filtered.length) filtered = allTracks;
    }
    playlist = shuffle(filtered);
    if (restoreIdx) {
      trackIdx = Math.min(parseInt(storageGet(LS_TRACK_IDX, '0'), 10) || 0, Math.max(0, playlist.length - 1));
    } else {
      trackIdx = 0;
    }
    loadTrack(!!autoplay);
  }

  function loadTrack(autoplay) {
    const track = playlist[trackIdx];
    if (!track) return;
    audio.src = AUDIO_BASE + track.path;
    storageSet(LS_TRACK_IDX, trackIdx);
    updateNowPlaying();
    if (autoplay) {
      doPlay();
    }
    if (isLeader) syncState();
  }

  // ── Audio controls ─────────────────────────────────────────

  function doPlay() {
    audio.play().then(() => {
      updatePlayPauseButton(true);
      dispatchStateChange();
      if (isLeader) syncState();
    }).catch(() => {
      // Autoplay blocked — UI stays at paused state
      updatePlayPauseButton(false);
    });
  }

  function doPause() {
    audio.pause();
    updatePlayPauseButton(false);
    dispatchStateChange();
    if (isLeader) syncState();
  }

  function doSkip(direction) {
    if (!playlist.length) return;
    trackIdx = (trackIdx + (direction === 'prev' ? -1 : 1) + playlist.length) % playlist.length;
    loadTrack(true);
  }

  function resumePlayback() {
    if (playlist.length) doPlay();
  }

  audio.addEventListener('ended', () => {
    if (isLeader) doSkip('next');
  });

  // ── Public API ─────────────────────────────────────────────

  function dispatchStateChange() {
    window.dispatchEvent(new CustomEvent('multiverseRadioStateChange', {
      detail: { playing: !audio.paused, context: gameContext }
    }));
  }

  window.multiverseRadio = {
    isActive() { return !audio.paused; },
    getContext() { return gameContext; },
    setContext(game) {
      const shouldAutoplay = !!(game && game !== 'website');
      applyContext(game, false, shouldAutoplay);
      broadcast('context-change', { game });
    },
  };

  window.addEventListener('mvRadioContext', (e) => {
    const game = e.detail && e.detail.game;
    window.multiverseRadio.setContext(game);
  });

  // ── CSS ────────────────────────────────────────────────────

  const style = document.createElement('style');
  style.textContent = `
    #mv-radio-widget {
      position: fixed;
      bottom: 18px;
      right: 18px;
      z-index: 10000;
      font-family: system-ui, ui-monospace, monospace;
      font-size: 13px;
      color: #e0e0f0;
      user-select: none;
    }
    #mv-radio-panel {
      background: rgba(15, 15, 25, 0.92);
      border: 1px solid rgba(100, 100, 255, 0.3);
      border-radius: 10px;
      padding: 10px 14px 10px 14px;
      min-width: 280px;
      max-width: 340px;
      box-shadow: 0 4px 24px rgba(0,0,0,0.5), 0 0 0 0 rgba(123,111,255,0);
      transition: box-shadow 0.2s;
    }
    #mv-radio-panel:hover {
      box-shadow: 0 4px 28px rgba(0,0,0,0.6), 0 0 12px rgba(123,111,255,0.18);
    }
    #mv-radio-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 4px;
    }
    #mv-radio-title {
      font-weight: 600;
      font-size: 12px;
      letter-spacing: 0.04em;
      color: #7b6fff;
      text-transform: uppercase;
    }
    #mv-radio-collapse-btn {
      background: none;
      border: none;
      color: #7b6fff;
      cursor: pointer;
      font-size: 14px;
      padding: 0 2px;
      line-height: 1;
      opacity: 0.7;
      transition: opacity 0.15s;
    }
    #mv-radio-collapse-btn:hover { opacity: 1; }
    #mv-radio-track-name {
      font-size: 12px;
      color: #c0b8ff;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-bottom: 8px;
      min-height: 15px;
    }
    #mv-radio-controls {
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .mv-radio-btn {
      background: none;
      border: 1px solid rgba(123,111,255,0.3);
      border-radius: 5px;
      color: #c0b8ff;
      cursor: pointer;
      font-size: 13px;
      padding: 3px 8px;
      transition: background 0.15s, color 0.15s;
      line-height: 1.4;
    }
    .mv-radio-btn:hover {
      background: rgba(123,111,255,0.18);
      color: #fff;
    }
    #mv-radio-seek {
      flex: 1;
      height: 4px;
      appearance: none;
      -webkit-appearance: none;
      background: rgba(123,111,255,0.25);
      border-radius: 2px;
      outline: none;
      cursor: pointer;
      accent-color: #7b6fff;
    }
    #mv-radio-seek::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: #7b6fff;
      cursor: pointer;
    }
    #mv-radio-volume {
      width: 56px;
      height: 4px;
      appearance: none;
      -webkit-appearance: none;
      background: rgba(123,111,255,0.25);
      border-radius: 2px;
      outline: none;
      cursor: pointer;
      accent-color: #7b6fff;
    }
    #mv-radio-volume::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #7b6fff;
      cursor: pointer;
    }
    #mv-radio-icon-btn {
      display: none;
      background: rgba(15, 15, 25, 0.92);
      border: 1px solid rgba(100, 100, 255, 0.3);
      border-radius: 50%;
      width: 44px;
      height: 44px;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 20px;
      color: #7b6fff;
      box-shadow: 0 2px 12px rgba(0,0,0,0.4);
      transition: box-shadow 0.2s;
    }
    #mv-radio-icon-btn:hover {
      box-shadow: 0 2px 16px rgba(123,111,255,0.35);
    }
    #mv-radio-follower-badge {
      font-size: 10px;
      color: rgba(123,111,255,0.5);
      text-align: right;
      margin-top: 4px;
      min-height: 12px;
    }
  `;
  document.head.appendChild(style);

  // ── DOM ────────────────────────────────────────────────────

  const widget = document.createElement('div');
  widget.id = 'mv-radio-widget';

  widget.innerHTML = `
    <button id="mv-radio-icon-btn" title="Multiverse Radio">🎵</button>
    <div id="mv-radio-panel">
      <div id="mv-radio-header">
        <span id="mv-radio-title">Multiverse Radio</span>
        <button id="mv-radio-collapse-btn" title="Collapse">−</button>
      </div>
      <div id="mv-radio-track-name">Loading…</div>
      <div id="mv-radio-controls">
        <button class="mv-radio-btn" id="mv-radio-prev" title="Previous">◄◄</button>
        <button class="mv-radio-btn" id="mv-radio-play" title="Play/Pause">▶</button>
        <button class="mv-radio-btn" id="mv-radio-next" title="Next">►►</button>
        <input type="range" id="mv-radio-seek" min="0" max="100" value="0" step="0.1">
        <input type="range" id="mv-radio-volume" min="0" max="1" value="${audio.volume}" step="0.01" title="Volume">
      </div>
      <div id="mv-radio-follower-badge"></div>
    </div>
  `;

  document.body.appendChild(widget);

  const panel       = widget.querySelector('#mv-radio-panel');
  const iconBtn     = widget.querySelector('#mv-radio-icon-btn');
  const collapseBtn = widget.querySelector('#mv-radio-collapse-btn');
  const trackName   = widget.querySelector('#mv-radio-track-name');
  const playBtn     = widget.querySelector('#mv-radio-play');
  const prevBtn     = widget.querySelector('#mv-radio-prev');
  const nextBtn     = widget.querySelector('#mv-radio-next');
  const seekBar     = widget.querySelector('#mv-radio-seek');
  const volumeBar   = widget.querySelector('#mv-radio-volume');
  const followerBadge = widget.querySelector('#mv-radio-follower-badge');

  // ── UI helpers ─────────────────────────────────────────────

  const GAME_LABELS = {
    'cultures-of-the-belt': 'Cultures of the Belt',
    'precursors': 'Precursors',
    'mvee': 'MVEE',
  };

  function updateNowPlaying() {
    const track = playlist[trackIdx];
    if (track) {
      const title  = track.title  || track.path;
      const game   = GAME_LABELS[track.game] || track.game || '';
      trackName.textContent = game ? `"${title}" — ${game}` : title;
    } else {
      trackName.textContent = allTracks.length ? 'No tracks' : 'No playlist';
    }
  }

  function updatePlayPauseButton(playing) {
    playBtn.textContent = playing ? '❚❚' : '▶';
    playBtn.title = playing ? 'Pause' : 'Play';
  }

  function updateLeaderUI() {
    followerBadge.textContent = isLeader ? '' : '(synced)';
  }

  function setCollapsed(val) {
    collapsed = val;
    storageSet(LS_COLLAPSED, collapsed);
    if (collapsed) {
      panel.style.display = 'none';
      iconBtn.style.display = 'flex';
      collapseBtn.textContent = '+';
    } else {
      panel.style.display = '';
      iconBtn.style.display = 'none';
      collapseBtn.textContent = '−';
    }
  }

  setCollapsed(collapsed);

  // ── Seek bar ───────────────────────────────────────────────

  audio.addEventListener('timeupdate', () => {
    if (audio.duration && !seekBar._dragging) {
      seekBar.value = (audio.currentTime / audio.duration) * 100;
    }
  });

  seekBar.addEventListener('mousedown', () => { seekBar._dragging = true; });
  seekBar.addEventListener('mouseup',   () => { seekBar._dragging = false; });
  seekBar.addEventListener('input', () => {
    if (audio.duration) {
      audio.currentTime = (parseFloat(seekBar.value) / 100) * audio.duration;
    }
  });

  // ── Control events ─────────────────────────────────────────

  playBtn.addEventListener('click', () => {
    if (isLeader) {
      audio.paused ? doPlay() : doPause();
    } else {
      broadcast(audio.paused ? 'play' : 'pause');
    }
  });

  prevBtn.addEventListener('click', () => {
    if (isLeader) doSkip('prev');
    else broadcast('skip', { direction: 'prev' });
  });

  nextBtn.addEventListener('click', () => {
    if (isLeader) doSkip('next');
    else broadcast('skip', { direction: 'next' });
  });

  collapseBtn.addEventListener('click', () => setCollapsed(true));
  iconBtn.addEventListener('click',     () => setCollapsed(false));

  volumeBar.addEventListener('input', () => {
    audio.volume = parseFloat(volumeBar.value);
    storageSet(LS_VOLUME, audio.volume);
  });

  // ── Leader election ────────────────────────────────────────

  // Broadcast a "are you there?" — if no leader-claim reply within 200ms, become leader
  // Widget uses a longer delay so game tabs (higher priority) can claim first
  let leaderCheckTimer = setTimeout(() => becomeLeader(), 250);
  if (channel) {
    const origHandler = channel.onmessage;
    channel.onmessage = (e) => {
      if (e.data.tabId === tabId) return;
      if (e.data.type === 'leader-claim' || e.data.type === 'leader-heartbeat') {
        clearTimeout(leaderCheckTimer);
        isLeader = false;
        currentLeaderPriority = e.data.priority ?? 0;
        updateLeaderUI();
        // Request state sync from current leader
        broadcast('sync-state-request');
      }
      origHandler && origHandler(e);
    };
    // Ask existing leader for sync
    broadcast('sync-state-request');
  }

  // ── Init ───────────────────────────────────────────────────

  updateNowPlaying();
  updatePlayPauseButton(false);
  updateLeaderUI();
  loadPlaylist();

})();
