# Never Ever Land — Interactive Architecture Specs

## Section 1: Unreliable Narrator — Divergent Tellings (MUL-1181)

Files 0–6 tell the same story of Wendy breaking Neverland across multiple "tellings". Files 2–4 share Chapters 9–21; files 3–4 share Chapters 22–28. The shared sections must be rewritten to introduce narrative divergence:

- **File 3** (`3_wendy_breaks_neverland_story.md`): Narrator begins questioning its own account. Subtle slippages — events that happened slightly differently, names that don't quite match, parenthetical corrections.
- **File 4** (`4_wendy_breaks_neverland_story.md`): Narrator openly admits it is reconstructing from incomplete records. Passages acknowledge fabrication. The island's will is described as interfering with the narration itself.

Goal: A reader who reads all tellings in sequence should notice the story growing less reliable, not just larger.

---

## Section 2: Margin Annotation System — Readers Interrogate the Narrator (MUL-1182)

After 3+ scenes have been read (tracked via `mvs_nel_chapters_read` in localStorage), readers can highlight text and write in the margins. The narrator (Claude API via Cloudflare Worker) responds in character.

### UI Flow
1. Reader selects/highlights text in a `.story-body` element
2. An ink dot appears at the selection point
3. Clicking the dot opens the margin panel:
   - **Desktop**: right-side panel sliding in from the edge
   - **Mobile**: bottom sheet modal
4. Reader writes their question/annotation
5. Narrator responds (streamed via Worker → Claude API)

### Margin Annotations Visibility
- Other readers who have unlocked the infinite game (`nel_first_playthrough_complete === 'true'`) see annotations as faint ink dots when they hover over that passage
- Clicking another reader's dot shows their annotation and the narrator response (read-only)

### Storage
- Cloudflare Worker: `POST /api/annotate` — stores annotation + narrator response, keyed by chapter + text hash
- `GET /api/annotations?chapter=N&hash=X` — fetch existing annotations for a passage

### Narrator System Prompt (margin annotations)
The narrator is the island itself — ancient, partial, unreliable. It answers as if it remembers but cannot be certain. It does not break character. It does not confirm or deny that it is an AI. When asked about inconsistencies, it attributes them to the nature of memory and the island's interference.

---

## Section 3: Narrator Reply Forks — Story Rewrites (MUL-1183)

When a reader replies to a narrator annotation response (affordance: a subtle `…` below the response), the narrator generates a rewritten version of that chapter section addressing the reader's observations.

### Fork Behavior
- The rewrite appears inline as a **palimpsest**: text written over text (CSS `mix-blend-mode: multiply` or translucent overlay)
- The fork is saved and assigned a unique URL (`?fork=<id>`) that is shareable
- Forks are linked from the annotation panel

### API Spec
- `POST /api/fork` — `{ annotation_id, reader_reply }` → `{ fork_id, rewritten_text }`
- `GET /api/fork/:id` — fetch a specific fork for display

---

## Section 4: Non-Guessable Slug URLs (MUL-1184, part 1)

The numeric URL hashes (`#0`, `#1`, etc.) are replaced with thematic slug URLs. Implemented in `index.html`.

### Slug Map
| Index | Slug |
|-------|------|
| 0 | `the-boy-who-would-not-grow` |
| 1 | `wendy-in-the-night-nursery` |
| 2 | `what-the-map-omits` |
| 3 | `the-names-recovered` |
| 4 | `the-mermaid-lagoon` |
| 5 | `the-deadlock-question` |
| 6 | `the-spreadsheet-of-neverland` |

Legacy numeric hashes redirect silently to their slug equivalents via `window.history.replaceState`.

---

## Section 5: Infinite Game Navigation — Entry from All Tellings (MUL-1184, part 2)

After a reader has unlocked the infinite game (`nel_first_playthrough_complete === 'true'` in localStorage), they can enter the infinite game from the end of **any** telling, not just telling 6.

### Entry Points
- Shown as marginalia at the bottom of each chapter's next-link section
- Rendered as: `*(The infinite game is also available from here, if you know how to look.)*`
- Clicking navigates to `wendy_breaks_neverland.html`
- Implemented via `.infinite-marginalia` CSS class, hidden until `hasUnlockedInfiniteGame()` returns true

### Back-Navigation
- `wendy_breaks_neverland.html` shows a "return to a telling" nav at the restart section
- Each telling is linked by its slug URL to `index.html#<slug>`
- Nav renders as small pill links labeled I, II, III, IV, V, VI, appendix
- Nav appears when `showTellingNav()` is called (on reaching infinite game or story ending)
