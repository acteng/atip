import { afterAll, beforeAll, describe, test } from "vitest";
import { preview } from "vite";
import { chromium } from "playwright";
import { expect } from "@playwright/test";

// unstable in Windows, TODO: investigate
describe.runIf(process.platform !== "win32")("basic", async () => {
  let server;
  let browser;
  let page;

  beforeAll(async () => {
    server = await preview({ preview: { port: 4173 } });
    browser = await chromium.launch();
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
    await new Promise((resolve, reject) => {
      server.httpServer.close((error) => (error ? reject(error) : resolve()));
    });
  });

  test("test if typing a local authority name and clicking start changes the url", async () => {
    await page.goto("http://localhost:4173");
    const input = page.getByTestId("transport-authority");
    const start = page.getByRole("button", { name: "Start" });
    await input.fill("West Yorkshire Combined Authority");
    await start.click();
    await expect(page).toHaveURL(
      /.*scheme.html\?authority=West%20Yorkshire%20Combined%20Authority/
    );
  }, 60_000);
});
