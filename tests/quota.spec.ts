import { expect, test, type Page } from "@playwright/test";
import { clickMap, loadInitialPageFromBrowser } from "./shared.js";

let page: Page;

test.beforeAll(async ({ browser }) => {
  page = await loadInitialPageFromBrowser(browser);
});

test("exceeding local storage quota displays an error", async () => {
  // Get super close to the 5MB limit
  await page.evaluate(() =>
    window.localStorage.setItem("huge", "x".repeat(4.999 * 1024 * 1024)),
  );

  // Draw one simple route, causing quota to go over
  await page.getByRole("button", { name: "New route" }).click();
  await clickMap(page, 500, 500);
  await clickMap(page, 400, 500);
  await page.getByRole("button", { name: "Finish" }).click();

  await expect(page.getByText("Local Storage Quota Exceeded")).toBeVisible();
});
