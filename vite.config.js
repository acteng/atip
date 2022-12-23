import { defineConfig } from "vite";
import { resolve } from "path";
import topLevelAwait from "vite-plugin-top-level-await";
import wasmPack from "vite-plugin-wasm-pack";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        nested: resolve(__dirname, "scheme.html"),
      },
    },
  },
  base: "/atip/",
  plugins: [
    wasmPack([], ["route-snapper"]),
    // Remove when https://caniuse.com/?search=top%20level%20await is more green
    topLevelAwait({
      promiseExportName: "__tla",
      promiseImportName: (i) => `__tla_${i}`,
    }),
  ],
});
