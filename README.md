# Active Travel Infrastructure Platform

ATIP lets you design, modify and share active travel infrastructure plans.

It developed by the Alan Turing Institute in collaboration with Active Travel England.

## Using ATIP

The development version of ATIP with data for England is available for use at <https://acteng.github.io/atip>.
Note: this is not a production service and we make no guarantees about the site's uptime or about backwards compatibility of ATIP files.

### Using ATIP in other places

You can build your own hosted instance but will need some technical experience to get started.
Please [file an issue](https://github.com/acteng/atip/issues/new) to start a conversation about using ATIP in other places.

Very roughly, you'd need to:

1.  Replace `assets/authorities.geojson` with appropriate boundaries for your region, and adjust Svelte components using this file
2.  Generate files for the route-snapper tool to work, using <https://github.com/acteng/abstreet-to-atip/>. Right now, this only requires OpenStreetMap data and should work worldwide, but this may change.
3.  Host those files and a compiled version of this Svelte app somewhere. You only need a static file host, like S3.

### Query parameters

The main `scheme.html` page takes a few URL query parameters:

- `authority` is required, and must match a feature's `name` in `assets/authorities.geojson`
- `schema` is `v1`, `v2`, `planning`, `criticals`, etc and determines the data entry form
- `geojsonUrl` will initially load a GeoJSON file from the specified URL. Otherwise, the last file is loaded from local storage, uniquely keyed by (authority, schema).
- `style` can be `streets` (implied default) or `hybrid` (for a satellite basemap)

## Development

See the up-to-date roadmap at on our [Milestones](https://github.com/acteng/atip/milestones?direction=desc&sort=completeness&state=open) page.
Issues, feature requests, and pull requests are welcome.

The stack:

- [Vite](https://vitejs.dev) as the build tool
- [Svelte](https://svelte.dev) as the UI framework
- [MapLibre GL](https://maplibre.org) as the map
- [route-snapper](https://github.com/dabreegster/route_snapper/) to draw routes
  snapped to existing roads

You'll need
[npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) and
[wasm-pack](https://github.com/rustwasm/wasm-pack).

- `npm install` to install dependencies
- `npm run dev` to work locally
- `npm run wasm` to rebuild the `route_info` Rust library quickly (or
  `wasm-release` to build slowly but run quickly)
- `npm run fmt` to auto-format code
- `npm run check` to see TypeScript errors

If you're using Firefox locally to develop and get "import declarations may
only appear at top level" errors, upgrade to at least Firefox 112, go to
`about:config` and enable `dom.workers.modules.enabled`

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
- Within a `.ts` file using classes, use `EventManager` to handle MapLibre and document event handlers. Otherwise as you edit a component, you'll keep running old versions of the callbacks!
- Within a Svelte component, express event handlers using functions and remember to call `map.off()` within `onDestroy`. Refer to existing components.
- When in doubt, Ctrl+Shift+R to hard refresh and get rid of any possible HMR weirdness

### Overall app state

Simple state is isolated to a component when possible. Most of the app-wide state is setup in `stores.js`.

- The `map` store has the MapLibre map. Components everywhere need to do something to it, so it's a global singleton
- The `gjScheme` store is the source-of-truth GeoJSON for the current data. It's automatically synced to local storage.
  - Feature IDs are unique, numeric, and always start at 1. See `newFeatureId`. They are **not** stable over time; if you load a file or refresh the page and load from local storage, some of the IDs may adjust.
  - Each feature has 3 simple fields -- `name`, `description`, and `intervention_type` (`area`, `route`, `crossing`, `other`). Anything produced by the route tool will also have `length_meters`, `waypoints`.
  - Depending on the schema in use, the feature has other nested properties like `v2` and `planning`. This is in flux; the v1 fields above may be reorganized.
  - `InterventionLayer` renders these "finalized" features.
  - When editing geometry of a feature, the `hide_while_editing` property is set. `InterventionLayer` skips drawing these, so something else can draw the actively-being-modified state.

TODO: Visualize the component tree, and how props flow up and down, maybe with [svelte-sight](https://github.com/oslabs-beta/svelte-sight/)

### Modes

Interactions on the map are split into distinct and exclusive modes. `Toolbox.svelte` manages these.

Be very careful with [reactive statements](https://svelte.dev/tutorial/reactive-statements) and modifying `mode` directly. Instead, use `changeMode`, which will call the previous mode's `stop()` and the new's `start()`. The modes share some underlying stateful (and not Svelte-friendly) objects (`point_tool`, `polygon_tool`, and `route-snapper`), and managing these objects and listening to events can get tricky, especially in the middle of switching modes. See [this article](https://blog.thoughtspile.tech/2023/04/22/svelte-state/) to understand Svelte reactive statements better.

TODO: Draw the finite state machine for modes

### Schemas

It's helpful to think of ATIP as a somewhat generic data entry system. Per object ("intervention") drawn on the map, the app has a form to collect properties about the object. Multiple schemas are supported -- v1, v2, and planning are some examples.

At the time of writing, v1 is manually implemented in the form of TypeScript types and a Svelte component for the form. v2 is auto-generated from [`src/schemas/v2.json`](https://github.com/acteng/atip/blob/main/src/schemas/v2.json), and there are other schemas defined there. There's a generic Svelte component that can auto-generate a form from this schema, and `npm run generate-schema-ts` auto-generates the TypeScript types. `v2.json` is written in a bespoke format; see code for more details.
