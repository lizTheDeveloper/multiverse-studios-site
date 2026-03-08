/* ============================================
   MULTIVERSE STUDIOS — Community Chat Widget
   Matrix homeserver: matrix.multiversestudios.xyz
   ============================================ */

(function initMatrixChat() {
  const HOMESERVER = 'https://matrix.multiversestudios.xyz';
  const ELEMENT_BASE = 'https://app.element.io/#/room/';

  // Page-specific room routing — set window.MATRIX_CHAT_PAGE before this script loads
  const PAGE = (window.MATRIX_CHAT_PAGE || 'home');

  const ROOM_GROUPS = {
    precursors: [
      { alias: '#mg-precursors-general:matrix.multiversestudios.xyz', label: 'General' },
      { alias: '#mg-precursors-lore:matrix.multiversestudios.xyz',    label: 'Lore' },
      { alias: '#mg-precursors-beta:matrix.multiversestudios.xyz',    label: 'Beta' },
    ],
    mvee: [
      { alias: '#mg-mvee-general:matrix.multiversestudios.xyz', label: 'General' },
      { alias: '#mg-mvee-beta:matrix.multiversestudios.xyz',    label: 'Beta' },
    ],
  };

  const STUDIO_ROOMS = [
    { alias: '#general:matrix.multiversestudios.xyz',          label: 'Studio — General' },
    { alias: '#announcements:matrix.multiversestudios.xyz',    label: 'Announcements' },
    { alias: '#dev-log:matrix.multiversestudios.xyz',          label: 'Dev Log' },
    { alias: '#feature-requests:matrix.multiversestudios.xyz', label: 'Feature Requests' },
  ];

  // ── Inject styles ──────────────────────────────────────────────

  const CSS = `
#mx-chat-btn {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 9000;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: var(--void-elevated, #111118);
  border: 1px solid var(--biolume, #00ffc8);
  box-shadow: 0 0 20px rgba(0,255,200,0.18), 0 4px 16px rgba(0,0,0,0.6);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: box-shadow 0.2s, transform 0.2s;
  color: var(--biolume, #00ffc8);
  font-size: 22px;
  line-height: 1;
  user-select: none;
}
#mx-chat-btn:hover {
  box-shadow: 0 0 36px rgba(0,255,200,0.3), 0 4px 24px rgba(0,0,0,0.7);
  transform: translateY(-2px);
}
#mx-chat-btn[data-open="true"] {
  background: var(--biolume, #00ffc8);
  color: var(--void, #050508);
}
#mx-chat-panel {
  position: fixed;
  bottom: 88px;
  right: 24px;
  z-index: 8999;
  width: 320px;
  max-height: 520px;
  background: var(--void-elevated, #111118);
  border: 1px solid var(--void-border, #1a1a24);
  border-radius: 8px;
  box-shadow: 0 0 40px rgba(0,0,0,0.8), 0 0 20px rgba(0,255,200,0.05);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  opacity: 0;
  transform: translateY(12px) scale(0.97);
  pointer-events: none;
  transition: opacity 0.22s ease, transform 0.22s ease;
}
#mx-chat-panel.open {
  opacity: 1;
  transform: translateY(0) scale(1);
  pointer-events: all;
}
#mx-chat-header {
  padding: 14px 16px 12px;
  border-bottom: 1px solid var(--void-border, #1a1a24);
  display: flex;
  align-items: center;
  gap: 10px;
}
#mx-chat-header-icon {
  width: 28px;
  height: 28px;
  background: rgba(0,255,200,0.1);
  border-radius: 50%;
  border: 1px solid rgba(0,255,200,0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  flex-shrink: 0;
}
#mx-chat-header-title {
  font-family: var(--font-mono, monospace);
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0.12em;
  color: var(--biolume, #00ffc8);
  text-transform: uppercase;
}
#mx-chat-header-sub {
  font-family: var(--font-mono, monospace);
  font-size: 9px;
  color: var(--dust, #8a8694);
  letter-spacing: 0.08em;
  margin-top: 1px;
}
#mx-chat-scroll {
  overflow-y: auto;
  flex: 1;
  scrollbar-width: thin;
  scrollbar-color: rgba(0,255,200,0.2) transparent;
}
#mx-chat-scroll::-webkit-scrollbar { width: 4px; }
#mx-chat-scroll::-webkit-scrollbar-thumb { background: rgba(0,255,200,0.2); border-radius: 2px; }
.mx-section-label {
  font-family: var(--font-mono, monospace);
  font-size: 8px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--ash, #4a4656);
  padding: 10px 16px 4px;
}
.mx-room-card {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px;
  text-decoration: none;
  transition: background 0.15s;
  border-bottom: 1px solid rgba(26,26,36,0.5);
}
.mx-room-card:hover {
  background: rgba(0,255,200,0.04);
  color: var(--star-white, #e8e6f0);
}
.mx-room-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--biolume, #00ffc8);
  flex-shrink: 0;
  opacity: 0.5;
}
.mx-room-card.game-room .mx-room-dot {
  opacity: 1;
  box-shadow: 0 0 6px rgba(0,255,200,0.5);
}
.mx-room-card.game-room[data-page="mvee"] .mx-room-dot {
  background: var(--ember, #ff6b35);
  box-shadow: 0 0 6px rgba(255,107,53,0.5);
}
.mx-room-info { flex: 1; min-width: 0; }
.mx-room-name {
  font-family: var(--font-mono, monospace);
  font-size: 11px;
  color: var(--star-white, #e8e6f0);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.mx-room-card.game-room .mx-room-name {
  color: var(--biolume, #00ffc8);
}
.mx-room-card.game-room[data-page="mvee"] .mx-room-name {
  color: var(--ember, #ff6b35);
}
.mx-room-topic {
  font-family: var(--font-mono, monospace);
  font-size: 9px;
  color: var(--ash, #4a4656);
  margin-top: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.mx-room-members {
  font-family: var(--font-mono, monospace);
  font-size: 9px;
  color: var(--ash, #4a4656);
  flex-shrink: 0;
}
#mx-chat-footer {
  padding: 10px 16px;
  border-top: 1px solid var(--void-border, #1a1a24);
  display: flex;
  flex-direction: column;
  gap: 6px;
}
#mx-chat-join-btn {
  display: block;
  text-align: center;
  font-family: var(--font-mono, monospace);
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 8px;
  border-radius: 4px;
  background: rgba(0,255,200,0.08);
  border: 1px solid rgba(0,255,200,0.2);
  color: var(--biolume, #00ffc8);
  text-decoration: none;
  transition: background 0.15s, border-color 0.15s;
}
#mx-chat-join-btn:hover {
  background: rgba(0,255,200,0.14);
  border-color: rgba(0,255,200,0.4);
  color: var(--biolume, #00ffc8);
}
#mx-chat-powered {
  text-align: center;
  font-family: var(--font-mono, monospace);
  font-size: 8px;
  color: var(--ash, #4a4656);
  letter-spacing: 0.08em;
}
#mx-chat-powered a {
  color: var(--ash, #4a4656);
}
#mx-chat-powered a:hover {
  color: var(--dust, #8a8694);
}
`;

  const style = document.createElement('style');
  style.textContent = CSS;
  document.head.appendChild(style);

  // ── Build DOM ──────────────────────────────────────────────────

  const btn = document.createElement('button');
  btn.id = 'mx-chat-btn';
  btn.setAttribute('aria-label', 'Open community chat');
  btn.setAttribute('data-open', 'false');
  btn.innerHTML = '◈';
  document.body.appendChild(btn);

  const panel = document.createElement('div');
  panel.id = 'mx-chat-panel';
  panel.setAttribute('aria-hidden', 'true');
  panel.innerHTML = `
    <div id="mx-chat-header">
      <div id="mx-chat-header-icon">◈</div>
      <div>
        <div id="mx-chat-header-title">Community</div>
        <div id="mx-chat-header-sub">matrix.multiversestudios.xyz</div>
      </div>
    </div>
    <div id="mx-chat-scroll">
      <div id="mx-rooms-container">
        <div class="mx-section-label">Loading rooms…</div>
      </div>
    </div>
    <div id="mx-chat-footer">
      <a href="https://matrix.to/#/#general:matrix.multiversestudios.xyz" target="_blank" rel="noopener" id="mx-chat-join-btn">
        Join on Matrix ↗
      </a>
      <div id="mx-chat-powered">
        Powered by <a href="https://matrix.org" target="_blank" rel="noopener">Matrix</a>
        · Open &amp; federated
      </div>
    </div>
  `;
  document.body.appendChild(panel);

  // ── Toggle logic ───────────────────────────────────────────────

  let isOpen = false;
  btn.addEventListener('click', () => {
    isOpen = !isOpen;
    btn.setAttribute('data-open', String(isOpen));
    btn.setAttribute('aria-label', isOpen ? 'Close community chat' : 'Open community chat');
    panel.classList.toggle('open', isOpen);
    panel.setAttribute('aria-hidden', String(!isOpen));
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (isOpen && !panel.contains(e.target) && e.target !== btn) {
      isOpen = false;
      btn.setAttribute('data-open', 'false');
      panel.classList.remove('open');
      panel.setAttribute('aria-hidden', 'true');
    }
  });

  // ── Fetch rooms & render ───────────────────────────────────────

  async function loadRooms() {
    let publicRoomMap = {};
    try {
      const res = await fetch(`${HOMESERVER}/_matrix/client/v3/publicRooms`);
      if (res.ok) {
        const data = await res.json();
        for (const room of data.chunk || []) {
          const alias = room.canonical_alias;
          if (alias) publicRoomMap[alias] = room;
        }
      }
    } catch (_) { /* offline or CORS — use static data */ }

    const container = document.getElementById('mx-rooms-container');
    if (!container) return;
    container.innerHTML = '';

    const gameRooms = ROOM_GROUPS[PAGE] || [];
    if (gameRooms.length > 0) {
      const gameName = PAGE === 'precursors' ? 'Precursors: Origins of Folklore'
                     : PAGE === 'mvee'       ? 'Multiverse: The End of Eternity'
                     : 'Community';

      const sectionLabel = document.createElement('div');
      sectionLabel.className = 'mx-section-label';
      sectionLabel.textContent = gameName;
      container.appendChild(sectionLabel);

      for (const roomDef of gameRooms) {
        const roomData = publicRoomMap[roomDef.alias] || {};
        container.appendChild(buildRoomCard(roomDef, roomData, true));
      }
    }

    const studioLabel = document.createElement('div');
    studioLabel.className = 'mx-section-label';
    studioLabel.textContent = gameRooms.length > 0 ? 'Studio' : 'Community Rooms';
    container.appendChild(studioLabel);

    for (const roomDef of STUDIO_ROOMS) {
      const roomData = publicRoomMap[roomDef.alias] || {};
      container.appendChild(buildRoomCard(roomDef, roomData, false));
    }
  }

  function buildRoomCard(roomDef, roomData, isGameRoom) {
    const alias = roomDef.alias;
    const href = `https://matrix.to/#/${encodeURIComponent(alias)}`;
    const topic = roomData.topic || '';
    const members = roomData.num_joined_members || 0;
    const name = roomData.name || roomDef.label;

    const a = document.createElement('a');
    a.className = 'mx-room-card' + (isGameRoom ? ' game-room' : '');
    if (isGameRoom) a.setAttribute('data-page', PAGE);
    a.href = href;
    a.target = '_blank';
    a.rel = 'noopener';
    a.title = topic || name;
    a.innerHTML = `
      <div class="mx-room-dot"></div>
      <div class="mx-room-info">
        <div class="mx-room-name">${escHtml(name)}</div>
        ${topic ? `<div class="mx-room-topic">${escHtml(topic.slice(0, 60))}${topic.length > 60 ? '…' : ''}</div>` : ''}
      </div>
      ${members > 0 ? `<div class="mx-room-members">${members}</div>` : ''}
    `;
    return a;
  }

  function escHtml(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  // Load rooms on first open to avoid unnecessary API calls
  let roomsLoaded = false;
  btn.addEventListener('click', () => {
    if (!roomsLoaded) {
      roomsLoaded = true;
      loadRooms();
    }
  }, { once: false });

  // Pre-fetch after page load for faster first open
  if (document.readyState === 'complete') {
    setTimeout(loadRooms, 2000);
  } else {
    window.addEventListener('load', () => setTimeout(loadRooms, 2000));
  }

})();
