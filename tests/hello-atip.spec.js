import { afterAll, beforeAll, describe, test } from "vitest";
import { preview } from "vite";
import { chromium } from "playwright";
import { expect } from "@playwright/test";
import { getRandomIntInclusive } from './test-utils';

// unstable in Windows, TODO: investigate
describe.runIf(process.platform !== "win32")("basic", async () => {
  let server;
  let browser;
  let page;

  beforeAll(async () => {
    server = await preview({ preview: { port: getRandomIntInclusive(4000, 5000) } });
    browser = await chromium.launch();
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
    await new Promise((resolve, reject) => {
      server.httpServer.close((error) => (error ? reject(error) : resolve()));
    });
  });

  test("example e2e playwright test", async () => {
    await page.goto(server.resolvedUrls.local[0]);
    const header = page.getByRole("heading", { name: "Welcome to ATIP v1" });
    await expect(header).toBeVisible();
  }, 60_000);
});
