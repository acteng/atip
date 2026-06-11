import { defineConfig } from "@playwright/test";

export default defineConfig({
  workers: 1,
  webServer: [
    {
    command: "npx vite --port 8080",
    url: "http://localhost:8080",
    env: {
      "VITE_RESOURCE_BASE": "http://localhost:8001"
    },
    reuseExistingServer: !process.env.CI,
  },
    {
      command: "npm run test-server",
      url: "http://localhost:8001",
    },
  ],
  use: {
    baseURL: 'http://localhost:8080',
  },
  reporter: [["list"], ["playwright-ctrf-json-reporter", {}]],
});
