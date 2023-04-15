# Active Travel Infrastructure Platform

ATIP lets you sketch new plans for walking and cycling infrastructure with a
low level of detail. See the initial version at
<https://acteng.github.io/atip>.

## Development

The stack:

- [Vite](https://vitejs.dev) as the build tool
- [Svelte](https://svelte.dev) as the UI framework
- [Carbon](https://github.com/carbon-design-system/carbon-components-svelte) as the component library
- [MapLibre GL](https://maplibre.org) as the map
- [route-snapper](https://github.com/dabreegster/route_snapper/) to draw routes
  snapped to existing roads

You'll need
[npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm). Run
`npm install` once. Use `npm run dev` to work locally. To auto-format code,
`npm run fmt`. To see TypeScript errors, `npm run check`.

### Monkey-patching dependencies

If you need to temporarily modify an NPM dependency (like say `route-snapper`), you can:

1.  Manually modify something in `node_modules/`
2.  `rm -rf node_modules/.vite; npm run dev`
3.  The change should take effect. If not, Ctrl+Shift+R in browser to force a refresh

To clean up afterwards, delete `node_modules` and `npm i` again.

### Tests

We use [Playwright](https://playwright.dev). Run all tests: `npm run test`

To develop a test interactively, `npm run test -- --debug`. You can step
through a test line-by-line with a browser open. Press "record" and then
interact with the page normally, generating the equivalent test code.

### HMR best practices

[Hot module replacement](https://vitejs.dev/guide/features.html#hot-module-replacement) means you can edit source code and have just that Svelte component live-reload in the browser, without needing to do anything. It's incredibly useful for rapid iteration, especially for simple things like styling. There are some gotchas to keep it working:

- Use `overwriteSource` and `overwriteLayer` instead of `map.addSource` and `map.addLayer`
- Most event listeners (on `document` and `map`) aren't yet correctly torn down, so as hot-reloading happens, you might wind up firing the same (or older versions) handler many times
- When in doubt, Ctrl+Shift+R to hard refresh and get rid of any possible HMR weirdness

### Overall app state

Simple state is isolated to a component when possible. Most of the app-wide state is setup in `stores.js`.

- The `map` store has the MapLibre map. Components everywhere need to do something to it, so it's a global singleton
- The `gjScheme` store is the source-of-truth GeoJSON for the current data. It's automatically synced to local storage.
  - Feature IDs are unique, numeric, and always start at 1. See `newFeatureId`. They are **not** stable over time; if you load a file or refresh the page and load from local storage, some of the IDs may adjust.
  - Each feature has 3 simple fields -- `name`, `description`, and `intervention_type` (`area`, `route`, `crossing`, `other`). Anything produced by the route tool will also have `length_meters`, `waypoints`.
  - `InterventionLayer` renders these "finalized" features.
  - The `editing` property is temporarily set in `gjScheme` to indicate that a feature is having its attributes edited. The form in the sidebar should be open. There's a derived store `currentlyEditing` and a `setCurrentlyEditing` that should generally be used, instead of manipulating this property directly.
  - When editing geometry of a feature, the `hide_while_editing` property is set. `InterventionLayer` skips drawing these, so something else can draw the actively-being-modified state.

TODO: Visualize the component tree, and how props flow up and down, maybe with [svelte-sight](https://github.com/oslabs-beta/svelte-sight/)

### Modes

Interactions on the map are split into distinct and exclusive modes. `Toolbox.svelte` manages these.

Be very careful with [reactive statements](https://svelte.dev/tutorial/reactive-statements) and modifying `mode` directly. Instead, use `changeMode`, which will call the previous mode's `stop()` and the new's `start()`. The modes share some underlying stateful (and not Svelte-friendly) objects (`point_tool`, `polygon_tool`, and `route-snapper`), and managing these objects and listening to events can get tricky, especially in the middle of switching modes.

TODO: Draw the finite state machine for modes
