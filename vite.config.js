import { defineConfig } from "vite";
import topLevelAwait from "vite-plugin-top-level-await";
import wasmPack from "vite-plugin-wasm-pack";

export default defineConfig({
  plugins: [
    wasmPack([], ["route-snapper"]),
    // Remove when https://caniuse.com/?search=top%20level%20await is more green
    topLevelAwait({
      promiseExportName: "__tla",
      promiseImportName: (i) => `__tla_${i}`,
    }),
  ],
  base: "/atip/",
});
