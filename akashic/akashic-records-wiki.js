/**
 * Akashic Records Wiki Engine
 * Progressive-unlock wiki for Multiverse Studios games.
 * Self-contained IIFE, no external dependencies.
 */
(function () {
  'use strict';

  // ---------------------------------------------------------------------------
  // Constants
  // ---------------------------------------------------------------------------

  var LORE_API = 'https://play.multiversestudios.xyz/api/lore';

  var TOTAL_SPECIES = 44;
  var TOTAL_BIOMES = 6;

  /** Species that draw from living cultural traditions — attribution shown at ALL tiers. */
  var LIVING_TRADITION_SPECIES = [
    'auki-vel', 'lauma-gale', 'naga-vel',
    'anansi-web', 'zar-vel'
  ];

  /** Attribution text for each living tradition species. */
  var LIVING_TRADITION_ATTRIBUTION = {
    'auki-vel':    'Quechua (Auki) and Aymara (Awki) mountain spirit traditions',
    'lauma-gale':  'Baltic mythological traditions (Lauma / Laume)',
    'naga-vel':    'Hindu and Southeast Asian Nāga traditions',
    'anansi-web':  'West African and Afro-Caribbean Anansi storytelling traditions',
    'zar-vel':     'East African and Middle Eastern Zār spirit traditions'
  };

  /** Display-name overrides for species with diacritics or special capitalisation. */
  var DISPLAY_NAMES = {
    'auki-vel':    'Áuki-Vel',
    'lauma-gale':  'Lauma-Gale',
    'naga-vel':    'Nāga-Vel',
    'anansi-web':  'Anansi-Web',
    'zar-vel':     'Zār-Vel',
    'cher-khan':   'Cher-Khan',
    'baku-ma':     'Baku-Ma',
    'dokkaebi-rin':'Dokkaebi-Rin',
    'selkie-born': 'Selkie-Born',
    'tengu-ra':    'Tengu-Ra',
    'peri-veil':   'Peri-Veil',
    'garuda-vel':  'Garuda-Vel',
    'venthari':    'Ven\'thari'
  };

  /** Game IDs to human-readable names. */
  var GAME_NAMES = {
    precursors:             'Precursors',
    mvee:                   'MVEE',
    'never-ever-land':      'Never Ever Land',
    'cultures-of-the-belt': 'Cultures of the Belt'
  };

  var TIER_LABELS = ['Encountered', 'Observed', 'Cultural', 'Deep Lore'];

  var CATEGORY_TOTALS = {
    species: TOTAL_SPECIES,
    biomes: TOTAL_BIOMES,
    civilizations: 7,
    items: 0,
    events: 13
  };

  // ---------------------------------------------------------------------------
  // State
  // ---------------------------------------------------------------------------

  var currentDiscoveries = null;
  var activeCategory = 'species';
  var discoveryMap = null;

  // ---------------------------------------------------------------------------
  // Auth integration
  // ---------------------------------------------------------------------------

  document.addEventListener('matrixAuthReady', function (e) {
    if (e.detail && e.detail.loggedIn) {
      showSignedInState();
      loadDiscoveries();
    } else {
      showSignedOutState();
    }
  });

  function showSignedInState() {
    var out = document.getElementById('akashic-signed-out');
    var inn = document.getElementById('akashic-signed-in');
    if (out) out.style.display = 'none';
    if (inn) { inn.style.display = ''; inn.removeAttribute('hidden'); }
  }

  function showSignedOutState() {
    var out = document.getElementById('akashic-signed-out');
    var inn = document.getElementById('akashic-signed-in');
    if (out) out.style.display = '';
    if (inn) inn.style.display = 'none';
  }

  // ---------------------------------------------------------------------------
  // Discovery API
  // ---------------------------------------------------------------------------

  async function loadDiscoveryMap() {
    try {
      var resp = await fetch('/akashic/discovery-map.json');
      if (!resp.ok) {
        console.error('[AkashicRecords] Failed to load discovery-map.json: HTTP ' + resp.status);
        return;
      }
      discoveryMap = await resp.json();
    } catch (err) {
      console.error('[AkashicRecords] Error loading discovery-map.json:', err.message || err);
    }
  }

  async function loadDiscoveries() {
    await loadDiscoveryMap();

    var userId = window.matrixAuth && window.matrixAuth.getUserId();
    if (!userId) {
      showApiError('Not signed in. Sign in to view your discoveries.');
      return;
    }

    try {
      var resp = await fetch(
        LORE_API + '/unlocked?userId=' + encodeURIComponent(userId)
      );
      if (!resp.ok) {
        console.error('[AkashicRecords] Lore API /unlocked returned HTTP ' + resp.status);
        showApiError('Could not load your discoveries (HTTP ' + resp.status + '). The Akashic Records service may be unavailable.');
        return;
      }
      var data = await resp.json();
      var grouped = groupUnlockedEntries(data.entries || []);
      renderDiscoveries(grouped);
    } catch (err) {
      console.error('[AkashicRecords] Error fetching discoveries:', err.message || err);
      showApiError('Could not connect to the Akashic Records service. Please try again later.');
    }
  }

  function showApiError(message) {
    var entriesEl = document.getElementById('akashic-entries');
    if (entriesEl) {
      entriesEl.innerHTML =
        '<div class="akashic-error" style="text-align: center; padding: 2rem; color: #ff6b6b;">' +
          '<p style="font-size: 1.1rem;">' + escHtml(message) + '</p>' +
        '</div>';
    }
  }

  /**
   * Transform raw unlocked entries from /api/lore/unlocked into the grouped
   * format expected by renderDiscoveries:
   * { species: { norn: { tier, games } }, biomes: {}, items: {}, events: {}, civilizations: {} }
   */
  function groupUnlockedEntries(entries) {
    var grouped = { species: {}, biomes: {}, items: {}, events: {}, civilizations: {} };
    var entityGames = {}; // "species/norn" -> Set of game IDs
    var entityEvents = {}; // "species/norn" -> [event keys]

    entries.forEach(function (entry) {
      var key = entry.eventKey;
      if (!key) return;

      // Find matching discovery map entries for this event key
      if (discoveryMap) {
        Object.keys(discoveryMap).forEach(function (mapPath) {
          var mapEntry = discoveryMap[mapPath];
          var tiers = ['tier0', 'tier1', 'tier2', 'tier3'];
          for (var t = 0; t < tiers.length; t++) {
            var tierDef = mapEntry[tiers[t]];
            if (!tierDef) continue;
            // Handle both formats: array of events or { events: [...] }
            var events = Array.isArray(tierDef) ? tierDef : (tierDef.events || []);
            if (!events.length) continue;
            var matches = events.some(function (reqEvent) {
              if (reqEvent.endsWith(':*')) {
                return key.startsWith(reqEvent.slice(0, -1));
              }
              var parts = reqEvent.split(':');
              if (parts.length >= 4 && /^\d+$/.test(parts[parts.length - 1])) {
                return key.startsWith(parts.slice(0, -1).join(':'));
              }
              return key === reqEvent;
            });
            if (matches) {
              if (!entityEvents[mapPath]) entityEvents[mapPath] = [];
              entityEvents[mapPath].push(key);
              if (!entityGames[mapPath]) entityGames[mapPath] = {};
              if (entry.gameId) entityGames[mapPath][entry.gameId] = true;
            }
          }
        });
      }
    });

    // Compute tiers for each matched entity
    Object.keys(entityEvents).forEach(function (mapPath) {
      var parts = mapPath.split('/');
      if (parts.length < 2) return;
      var category = parts[0];
      var id = parts.slice(1).join('/');
      var categoryKey = category === 'civilization' ? 'civilizations' : category + 's';
      if (category === 'species') categoryKey = 'species';
      if (!grouped[categoryKey]) categoryKey = 'events';

      var userKeys = entityEvents[mapPath];
      var tier = computeClientTier(mapPath, userKeys, entries);
      var games = Object.keys(entityGames[mapPath] || {});

      grouped[categoryKey][id] = { tier: tier, games: games };
    });

    return grouped;
  }

  /**
   * Client-side tier computation matching lore-api calculateTier logic.
   */
  function computeClientTier(entryPath, _entityKeys, allEntries) {
    if (!discoveryMap || !discoveryMap[entryPath]) return 0;

    var mapEntry = discoveryMap[entryPath];
    var allUserKeys = allEntries.map(function (e) { return e.eventKey; });
    var tiers = ['tier0', 'tier1', 'tier2', 'tier3'];
    var highestTier = -1;

    for (var i = 0; i < tiers.length; i++) {
      var tierDef = mapEntry[tiers[i]];
      if (!tierDef) continue;
      // Handle both formats: array of events or { events: [...] }
      var events = Array.isArray(tierDef) ? tierDef : (tierDef.events || []);
      if (!events.length) continue;

      var satisfied = events.every(function (reqEvent) {
        if (reqEvent.endsWith(':*')) {
          var prefix = reqEvent.slice(0, -1);
          return allUserKeys.some(function (k) { return k.startsWith(prefix); });
        }
        var parts = reqEvent.split(':');
        if (parts.length >= 4 && /^\d+$/.test(parts[parts.length - 1])) {
          var threshold = parseInt(parts[parts.length - 1], 10);
          var pfx = parts.slice(0, -1).join(':');
          var count = allUserKeys.filter(function (k) {
            return k === pfx || k.startsWith(pfx + ':');
          }).length;
          return count >= threshold;
        }
        return allUserKeys.indexOf(reqEvent) !== -1;
      });

      if (satisfied) highestTier = i;
    }

    return highestTier + 1;
  }

  // ---------------------------------------------------------------------------
  // Top-level rendering
  // ---------------------------------------------------------------------------

  function renderDiscoveries(discoveries) {
    currentDiscoveries = discoveries;
    renderStats(discoveries);
    setupCategoryCards(discoveries);
    showCategory('species');
  }

  function renderStats(discoveries) {
    var speciesCount = Object.keys(discoveries.species || {}).length;

    // Update stat numbers in the pre-rendered HTML
    var speciesEl = document.getElementById('akashic-stat-species');
    var completionEl = document.getElementById('akashic-stat-completion');

    if (speciesEl) speciesEl.textContent = speciesCount;
    if (completionEl) {
      var pct = TOTAL_SPECIES > 0 ? Math.round((speciesCount / TOTAL_SPECIES) * 100) : 0;
      completionEl.textContent = pct + '%';
    }
  }

  // ---------------------------------------------------------------------------
  // Category cards
  // ---------------------------------------------------------------------------

  function setupCategoryCards(discoveries) {
    var cards = document.querySelectorAll('[data-category]');
    cards.forEach(function (card) {
      var cat = card.getAttribute('data-category');
      var catData = discoveries[cat] || {};
      var count = Object.keys(catData).length;
      var total = CATEGORY_TOTALS[cat] || 0;

      // Update discovered count badge
      var countEl = card.querySelector('.akashic-category-count');
      if (countEl) countEl.textContent = count;

      // Update progress bar
      var progressFill = card.querySelector('.akashic-progress__fill');
      if (progressFill && total > 0) {
        var pct = Math.round((count / total) * 100);
        // Delay for animation
        setTimeout(function () {
          progressFill.style.width = pct + '%';
          if (pct >= 100) progressFill.classList.add('akashic-progress__fill--complete');
        }, 300);
      }

      // Click handler
      card.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelectorAll('[data-category]').forEach(function (c) {
          c.classList.remove('akashic-category-active');
        });
        card.classList.add('akashic-category-active');
        showCategory(cat);
      });
    });
  }

  function showCategory(cat) {
    activeCategory = cat;
    var entriesEl = document.getElementById('akashic-entries');
    if (!entriesEl) return;

    if (!currentDiscoveries) {
      entriesEl.innerHTML = '<p class="akashic-loading">Consulting the records\u2026</p>';
      return;
    }

    var entries = currentDiscoveries[cat] || {};
    var names = Object.keys(entries);

    if (names.length === 0) {
      var catLabel = cat.charAt(0).toUpperCase() + cat.slice(1);
      entriesEl.innerHTML =
        '<div class="akashic-empty">' +
          '<p>No ' + escHtml(catLabel.toLowerCase()) + ' discovered yet.</p>' +
          '<p style="font-size: var(--text-sm); margin-top: 0.5rem; opacity: 0.6;">Play the games to fill your codex.</p>' +
        '</div>';
      return;
    }

    if (cat === 'species') {
      entriesEl.innerHTML = '<p class="akashic-loading">Consulting the records\u2026</p>';
      renderSpeciesCategory(names, entries, entriesEl);
    } else {
      renderGenericCategory(cat, names, entries, entriesEl);
    }
  }

  // ---------------------------------------------------------------------------
  // Species category
  // ---------------------------------------------------------------------------

  async function renderSpeciesCategory(names, entries, container) {
    var contentMap = {};
    await Promise.all(
      names.map(async function (name) {
        contentMap[name] = await loadSpeciesContent(name);
      })
    );

    // Merge all species from discovery map
    var allSpeciesNames = [];
    if (discoveryMap) {
      Object.keys(discoveryMap).forEach(function (key) {
        if (key.startsWith('species/')) {
          var speciesName = key.replace('species/', '');
          if (allSpeciesNames.indexOf(speciesName) === -1) {
            allSpeciesNames.push(speciesName);
          }
        }
      });
    }
    // Add any discovered species not in map
    names.forEach(function (name) {
      if (allSpeciesNames.indexOf(name) === -1) {
        allSpeciesNames.push(name);
      }
    });

    // Sort: discovered first (tier desc, then alpha), undiscovered after (alpha)
    var discoveredSet = names;
    allSpeciesNames.sort(function (a, b) {
      var aDisc = discoveredSet.indexOf(a) !== -1;
      var bDisc = discoveredSet.indexOf(b) !== -1;
      if (aDisc && !bDisc) return -1;
      if (!aDisc && bDisc) return 1;
      if (aDisc && bDisc) {
        var tierDiff = (entries[b].tier || 0) - (entries[a].tier || 0);
        if (tierDiff !== 0) return tierDiff;
      }
      return formatSpeciesName(a).localeCompare(formatSpeciesName(b));
    });

    var searchHtml =
      '<div class="akashic-search">' +
        '<input type="text" class="akashic-search__input" placeholder="Search ' + activeCategory + '..." aria-label="Filter entries">' +
      '</div>';

    container.innerHTML = searchHtml;

    allSpeciesNames.forEach(function (name, i) {
      var el;
      if (discoveredSet.indexOf(name) !== -1) {
        el = renderSpeciesEntry(name, entries[name], contentMap[name]);
      } else {
        el = renderLockedSpeciesEntry(name);
      }
      el.style.animationDelay = (i * 100) + 'ms';
      container.appendChild(el);
    });

    // Search/filter listener
    var searchInput = container.querySelector('.akashic-search__input');
    if (searchInput) {
      searchInput.addEventListener('input', function () {
        var query = this.value.toLowerCase().trim();
        container.querySelectorAll('.akashic-entry').forEach(function (el) {
          var speciesName = (el.dataset.species || '').toLowerCase();
          var displayName = formatSpeciesName(el.dataset.species || '').toLowerCase();
          var visible = !query || speciesName.indexOf(query) !== -1 || displayName.indexOf(query) !== -1;
          el.style.display = visible ? '' : 'none';
        });
      });
    }

    // Stagger entrance animation
    requestAnimationFrame(function () {
      container.querySelectorAll('.akashic-entry').forEach(function (card, i) {
        setTimeout(function () {
          card.classList.add('akashic-entry-visible');
        }, i * 80);
      });
    });
  }

  function renderLockedSpeciesEntry(name) {
    var entry = document.createElement('div');
    entry.className = 'akashic-entry akashic-entry-locked';
    entry.dataset.species = name;

    var displayName = formatSpeciesName(name);
    // Get origin from discovery map if available
    var mapKey = 'species/' + name;
    var originText = '';
    if (discoveryMap && discoveryMap[mapKey] && discoveryMap[mapKey].folkloreTradition) {
      // Only show the tradition family, not the full detail (no spoilers)
      var tradition = discoveryMap[mapKey].folkloreTradition.split('/')[0].split(' \u2014')[0].trim();
      originText = tradition + ' Origin';
    }

    entry.innerHTML =
      '<div class="akashic-entry-header akashic-entry-header--locked">' +
        '<h3>' +
          '<span class="akashic-silhouette-icon" aria-hidden="true">&#x1F512;</span>' +
          escHtml(displayName) +
        '</h3>' +
        (originText ? '<span class="akashic-origin-tag">' + escHtml(originText) + '</span>' : '') +
      '</div>' +
      '<div class="akashic-redacted" style="margin: 0; border-radius: 0;">' +
        '<p>Species not yet encountered. Explore the multiverse to discover ' + escHtml(displayName) + '.</p>' +
      '</div>';

    return entry;
  }

  // ---------------------------------------------------------------------------
  // Content loading from static markdown files
  // ---------------------------------------------------------------------------

  async function loadSpeciesContent(speciesName) {
    var files = ['culture.md', 'folklore.md', 'art.md'];
    var content = {};
    for (var f = 0; f < files.length; f++) {
      try {
        var resp = await fetch('/akashic-records/species/' + speciesName + '/' + files[f]);
        if (resp.ok) {
          content[files[f].replace('.md', '')] = await resp.text();
        }
      } catch (err) {
        console.error('[AkashicRecords] Failed to load content file ' + files[f] + ' for species ' + speciesName + ':', err.message || err);
      }
    }
    return content;
  }

  // ---------------------------------------------------------------------------
  // Species entry rendering
  // ---------------------------------------------------------------------------

  function renderSpeciesEntry(name, discovery, content) {
    var tier = typeof discovery.tier === 'number' ? discovery.tier : 0;
    var games = Array.isArray(discovery.games) ? discovery.games : [];
    var isLiving = LIVING_TRADITION_SPECIES.indexOf(name) !== -1;
    var displayName = formatSpeciesName(name);

    var entry = document.createElement('div');
    entry.className = 'akashic-entry';
    entry.dataset.species = name;

    // Header with badges
    var badgesHtml = '';
    games.forEach(function (game) {
      var label = GAME_NAMES[game] || game;
      badgesHtml +=
        '<span class="akashic-badge" data-game="' + escAttr(game) + '">' +
          escHtml(label) +
        '</span>';
    });

    var originHtml = '';
    var mapKey = 'species/' + name;
    if (discoveryMap && discoveryMap[mapKey] && discoveryMap[mapKey].folkloreTradition) {
      var tradition = discoveryMap[mapKey].folkloreTradition.split(' \u2014')[0].trim();
      originHtml = '<span class="akashic-origin-tag">' + escHtml(tradition) + '</span>';
    }

    var headerHtml =
      '<div class="akashic-entry-header" role="button" tabindex="0" aria-expanded="false">' +
        '<h3>' + escHtml(displayName) + '</h3>' +
        '<div class="akashic-header-meta">' +
          (badgesHtml ? '<div class="akashic-badges">' + badgesHtml + '</div>' : '') +
          originHtml +
        '</div>' +
      '</div>';

    entry.innerHTML = headerHtml;

    // Living tradition attribution (always visible, never redacted)
    if (isLiving) {
      var tradition = LIVING_TRADITION_ATTRIBUTION[name] || 'living cultural traditions';
      var attrEl = document.createElement('div');
      attrEl.className = 'akashic-attribution';
      attrEl.innerHTML =
        '<span class="akashic-attribution__label">Cultural Attribution</span>' +
        '<p>This species draws from ' + escHtml(tradition) +
        '. Content presented with respect and attribution.</p>';
      entry.appendChild(attrEl);
    }

    // Tiers 0–3
    for (var t = 0; t <= 3; t++) {
      var tierEl = document.createElement('div');
      tierEl.className = 'akashic-tier';
      tierEl.dataset.tier = t;
      tierEl.hidden = true; // collapsed by default

      // Tier label
      var labelEl = document.createElement('span');
      labelEl.className = 'akashic-tier-label';
      labelEl.textContent = 'Tier ' + t + ' \u2014 ' + TIER_LABELS[t];
      tierEl.appendChild(labelEl);

      if (t <= tier) {
        // Unlocked: render content
        var contentEl = document.createElement('div');
        contentEl.className = 'akashic-content';
        contentEl.innerHTML = buildTierContent(t, name, content);
        tierEl.appendChild(contentEl);
      } else {
        // Locked: redacted block
        tierEl.classList.add('akashic-tier-locked');
        var redactEl = document.createElement('div');
        redactEl.className = 'akashic-redacted';
        redactEl.innerHTML =
          '<p>[UNDISCOVERED] \u2014 ' + tierUnlockHint(t) + '</p>';
        tierEl.appendChild(redactEl);
      }

      entry.appendChild(tierEl);
    }

    // Expand/collapse behaviour
    var header = entry.querySelector('.akashic-entry-header');
    var tiers = entry.querySelectorAll('.akashic-tier');
    var attribution = entry.querySelector('.akashic-attribution');

    function toggle() {
      var expanded = header.getAttribute('aria-expanded') === 'true';
      var nowExpanded = !expanded;
      header.setAttribute('aria-expanded', String(nowExpanded));
      tiers.forEach(function (t) { t.hidden = !nowExpanded; });
      if (attribution) attribution.hidden = !nowExpanded;
      if (nowExpanded) {
        // Smooth scroll to entry
        setTimeout(function () {
          entry.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 50);
      }
    }

    // Initially hide attribution too
    if (attribution) attribution.hidden = true;

    header.addEventListener('click', toggle);
    header.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
    });

    return entry;
  }

  /** Build HTML content for a given tier using loaded markdown files. */
  function buildTierContent(tier, _name, content) {
    var culture  = content.culture  || '';
    var folklore = content.folklore || '';
    var art      = content.art      || '';

    switch (tier) {
      case 0: {
        // First paragraph of culture.md or folklore.md
        var src = culture || folklore;
        if (!src) return '<p><em>Basic encounter data recorded.</em></p>';
        return renderMarkdown(firstParagraph(src));
      }
      case 1: {
        // First sections of culture.md (up to second heading)
        if (!culture) return '<p><em>Behavioural data pending analysis.</em></p>';
        return renderMarkdown(firstSections(culture, 2));
      }
      case 2: {
        // Full folklore.md and art.md
        var out = '';
        if (folklore) out += renderMarkdown(folklore);
        if (art) out += renderMarkdown(art);
        return out || '<p><em>Cultural records being compiled.</em></p>';
      }
      case 3: {
        // Everything
        var all = '';
        if (culture)  all += renderMarkdown(culture);
        if (folklore) all += renderMarkdown(folklore);
        if (art)      all += renderMarkdown(art);
        return all || '<p><em>Deep lore archives sealed.</em></p>';
      }
      default:
        return '';
    }
  }

  function tierUnlockHint(tier) {
    switch (tier) {
      case 1: return 'Continue observing this species to unlock behavioural records.';
      case 2: return 'Engage with this species\' cultural practices to unlock folklore and art.';
      case 3: return 'Seek the deep lore \u2014 examine genetics, read ancient texts, uncover hidden connections.';
      default: return 'Continue exploring to unlock deeper knowledge.';
    }
  }

  // ---------------------------------------------------------------------------
  // Generic category rendering (biomes, items, events, civilizations)
  // ---------------------------------------------------------------------------

  function renderGenericCategory(cat, names, entries, container) {
    container.innerHTML = '';
    names.forEach(function (name, i) {
      var discovery = entries[name];
      var tier = typeof discovery.tier === 'number' ? discovery.tier : 0;
      var games = Array.isArray(discovery.games) ? discovery.games : [];

      var entry = document.createElement('div');
      entry.className = 'akashic-entry';

      var badgesHtml = '';
      games.forEach(function (game) {
        var label = GAME_NAMES[game] || game;
        badgesHtml +=
          '<span class="akashic-badge" data-game="' + escAttr(game) + '">' +
            escHtml(label) +
          '</span>';
      });

      entry.innerHTML =
        '<div class="akashic-entry-header">' +
          '<h3>' + escHtml(formatSpeciesName(name)) + '</h3>' +
          (badgesHtml ? '<div class="akashic-badges">' + badgesHtml + '</div>' : '') +
        '</div>' +
        '<div class="akashic-tier" data-tier="' + tier + '">' +
          '<span class="akashic-tier-label">' +
            'Tier ' + tier + ' \u2014 ' + escHtml(TIER_LABELS[Math.min(tier, 3)]) +
          '</span>' +
          '<div class="akashic-content"><p><em>Tier ' + tier + ' data available.</em></p></div>' +
        '</div>';

      entry.style.animationDelay = (i * 100) + 'ms';
      container.appendChild(entry);
    });

    requestAnimationFrame(function () {
      container.querySelectorAll('.akashic-entry').forEach(function (card, i) {
        setTimeout(function () {
          card.classList.add('akashic-entry-visible');
        }, i * 80);
      });
    });
  }

  // ---------------------------------------------------------------------------
  // Markdown renderer (no external deps)
  // ---------------------------------------------------------------------------

  function renderMarkdown(md) {
    if (!md) return '';

    // Normalise line endings
    var html = md.replace(/\r\n/g, '\n').replace(/\r/g, '\n');

    // Tables: pipe-delimited blocks
    html = html.replace(
      /((?:^\|.+\|\n)+)/gm,
      function (block) {
        var lines = block.trim().split('\n');
        if (lines.length < 2) return block;

        var sepIdx = -1;
        for (var i = 0; i < lines.length; i++) {
          if (/^\|[\s\-|:]+\|$/.test(lines[i].trim())) { sepIdx = i; break; }
        }
        if (sepIdx === -1) return block;

        var headerLine = lines[0];
        var bodyLines = lines.slice(sepIdx + 1);

        function rowToHtml(line, tag) {
          var cells = line.replace(/^\||\|$/g, '').split('|');
          return '<tr>' +
            cells.map(function (c) {
              return '<' + tag + '>' + inlineMarkdown(c.trim()) + '</' + tag + '>';
            }).join('') +
          '</tr>';
        }

        return '<table>' +
          '<thead>' + rowToHtml(headerLine, 'th') + '</thead>' +
          '<tbody>' +
            bodyLines.map(function (l) { return rowToHtml(l, 'td'); }).join('') +
          '</tbody>' +
        '</table>\n';
      }
    );

    // Fenced code blocks
    html = html.replace(/```[\w]*\n([\s\S]*?)```/g, function (_, code) {
      return '<pre><code>' + escHtml(code) + '</code></pre>\n';
    });

    // Blockquotes
    html = html.replace(/((?:^> .+\n?)+)/gm, function (block) {
      var inner = block.replace(/^> /gm, '');
      return '<blockquote>' + inner.trim() + '</blockquote>\n';
    });

    // Headings
    html = html.replace(/^#### (.+)$/gm, function (_, t) { return '<h4>' + inlineMarkdown(t) + '</h4>'; });
    html = html.replace(/^### (.+)$/gm,  function (_, t) { return '<h3>' + inlineMarkdown(t) + '</h3>'; });
    html = html.replace(/^## (.+)$/gm,   function (_, t) { return '<h2>' + inlineMarkdown(t) + '</h2>'; });
    html = html.replace(/^# (.+)$/gm,    function (_, t) { return '<h1>' + inlineMarkdown(t) + '</h1>'; });

    // Horizontal rules
    html = html.replace(/^---+$/gm, '<hr>');

    // Unordered lists
    html = html.replace(/((?:^- .+\n?)+)/gm, function (block) {
      var items = block.trim().split('\n').map(function (l) {
        return '<li>' + inlineMarkdown(l.replace(/^- /, '')) + '</li>';
      });
      return '<ul>' + items.join('') + '</ul>\n';
    });

    // Ordered lists
    html = html.replace(/((?:^\d+\. .+\n?)+)/gm, function (block) {
      var items = block.trim().split('\n').map(function (l) {
        return '<li>' + inlineMarkdown(l.replace(/^\d+\. /, '')) + '</li>';
      });
      return '<ol>' + items.join('') + '</ol>\n';
    });

    // Paragraphs
    var BLOCK_TAGS = /^<(h[1-6]|ul|ol|li|blockquote|pre|table|thead|tbody|tr|th|td|hr)/;
    var parts = html.split(/\n{2,}/);
    html = parts.map(function (part) {
      var trimmed = part.trim();
      if (!trimmed) return '';
      if (BLOCK_TAGS.test(trimmed)) return trimmed;
      return '<p>' + inlineMarkdown(trimmed.replace(/\n/g, ' ')) + '</p>';
    }).filter(Boolean).join('\n');

    return html;
  }

  /** Inline markdown: bold, italic, code, links. */
  function inlineMarkdown(text) {
    return text
      .replace(/&(?!(?:amp|lt|gt|quot|#\d+);)/g, '&amp;')
      .replace(/`([^`]+)`/g, function (_, c) { return '<code>' + escHtml(c) + '</code>'; })
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/__(.+?)__/g,     '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/_(.+?)_/g,   '<em>$1</em>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, function (_, label, href) {
        return '<a href="' + escAttr(href) + '" rel="noopener">' + label + '</a>';
      });
  }

  // ---------------------------------------------------------------------------
  // Markdown helpers
  // ---------------------------------------------------------------------------

  function firstParagraph(md) {
    var parts = md.replace(/\r\n/g, '\n').split(/\n{2,}/);
    for (var i = 0; i < parts.length; i++) {
      var p = parts[i].trim();
      if (p && !p.startsWith('#') && !p.startsWith('---')) return p;
    }
    return parts[0] || '';
  }

  function firstSections(md, n) {
    var normalised = md.replace(/\r\n/g, '\n');
    var headingRe = /^#{1,4} /m;
    var blocks = normalised.split('\n\n');

    var sections = [];
    var current = [];
    blocks.forEach(function (part) {
      if (headingRe.test(part) && current.length > 0) {
        sections.push(current.join('\n\n'));
        current = [part];
      } else {
        current.push(part);
      }
    });
    if (current.length > 0) sections.push(current.join('\n\n'));

    if (sections.length <= 1) {
      return blocks.slice(0, n).join('\n\n');
    }
    return sections.slice(0, n).join('\n\n');
  }

  // ---------------------------------------------------------------------------
  // Display name formatting
  // ---------------------------------------------------------------------------

  function formatSpeciesName(name) {
    if (DISPLAY_NAMES[name]) return DISPLAY_NAMES[name];
    return name
      .split('-')
      .map(function (part) {
        return part.charAt(0).toUpperCase() + part.slice(1);
      })
      .join('-');
  }

  // ---------------------------------------------------------------------------
  // HTML utilities
  // ---------------------------------------------------------------------------

  function escHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function escAttr(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;');
  }

  // ---------------------------------------------------------------------------
  // Debug surface
  // ---------------------------------------------------------------------------

  window.AkashicRecords = {
    reload:         loadDiscoveries,
    showCategory:   showCategory,
    renderMarkdown: renderMarkdown,
    formatName:     formatSpeciesName
  };

}());
