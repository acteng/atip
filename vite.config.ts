import { defineConfig } from "vite";
import { resolve } from "path";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import wasmPack from "vite-plugin-wasm-pack";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        nested: resolve(__dirname, "files.html"),
        nested2: resolve(__dirname, "scheme.html"),
        nested3: resolve(__dirname, "browse.html"),
      },
    },
    /* To debug production builds:
    sourcemap: true,
    minify: false,*/
  },
  plugins: [svelte(), tsconfigPaths(), wasmPack([], ["route-snapper"])],
});
