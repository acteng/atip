import { defineConfig } from "vite";
import { resolve } from "path";
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
  plugins: [wasmPack([], ["route-snapper"])],
});
