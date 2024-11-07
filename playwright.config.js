import { defineConfig } from "@playwright/test";

export default defineConfig({
  webServer: {
    command: "npx vite --port 8080",
    port: 8080,
    reuseExistingServer: !process.env.CI,
  },
});
