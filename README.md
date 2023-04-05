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

You'll need
[npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm). Run
`npm install` once. Use `npm run dev` to work locally. To auto-format code,
`npm run fmt`.

### Monkey-patching dependencies

If you need to temporarily modify an NPM dependency (like say `route-snapper`), you can:

1.  Manually modify something in `node_modules/`
2.  `rm -rf node_modules/.vite; npm run dev`
3.  The change should take effect. If not, Ctrl+Shift+R in browser to force a refresh

To clean up afterwards, delete `node_modules` and `npm i` again.

## Tests

Run all tests: `npm run test`

To develop a test interactively, `npm run test -- --debug`. You can step
through a test line-by-line with a browser open. Press "record" and then
interact with the page normally, generating the equivalent test code.
