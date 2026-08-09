# play/creatures/ — generated files

## `sw.js` and `workbox-4367cb6e.js`

These two files are **generated build output** from
[Workbox](https://developer.chrome.com/docs/workbox) (Google's service-worker
tooling), produced by the game's build pipeline. Do not hand-edit them —
changes will be silently overwritten the next time the build runs, and
hand-edits to a service worker can also break offline caching in subtle,
hard-to-debug ways for already-installed clients.

### Endor Labs SAST suppression: dynamic/non-literal `require()` (issue #4)

`sw.js` contains Workbox's generated AMD module loader:

```js
self.define = (depsNames, factory) => {
  ...
  registry[uri] = Promise.all(depsNames.map(
    depName => specialDeps[depName] || require(depName)
  )).then(deps => {
    ...
  });
};
```

The Endor Labs scan flags `require(depName)` here as a dynamic/non-literal
`require()` (SAST class: non-literal module specifier). This is a **false
positive for exploitability purposes**:

- `depName` is drawn from `depsNames`, an array that Workbox's build step
  bakes into the `define([...])` call at the top of the generated file
  (e.g. `define(['./workbox-4367cb6e'], ...)`)  — it is fixed at build time,
  not derived from any runtime request, user input, or network response.
- There is no code path from an HTTP request, query string, message-event
  payload, or any other attacker-influenced input into `depName`. It is only
  ever populated from the literal array Workbox writes into this same file.
- This is third-party generated code (Apache-2.0 licensed, Copyright Google
  Inc., see file header), not hand-written first-party logic.

**Resolution:** left as-is, documented here as an accepted/suppressed
finding rather than hand-patched. If Workbox's generated shape ever changes
to accept a dynamic specifier from a non-build-time source, this
justification would need to be revisited.
