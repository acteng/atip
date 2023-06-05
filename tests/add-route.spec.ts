import { test, expect, type Page } from "@playwright/test";
import { loadInitialPage } from "./shared.ts";

let page: Page;

test.beforeAll(async ({ browser }) => {
  page = await loadInitialPage(browser);
});

test("testing add a route and save it", async () => {
  await page.getByRole("button", { name: "New route" }).click();
  await page.getByRole("region", { name: "Map" }).click({
    position: {
      x: 522,
      y: 468,
    },
  });
  await page.getByRole("region", { name: "Map" }).click({
    position: {
      x: 192,
      y: 513,
    },
  });
  await page.getByRole("button", { name: "Finish" }).click();
  // wait to make sure intervention attributes appear
  await page.getByRole("button", { name: "Save" }).waitFor();
  await page.getByRole("button", { name: "Save" }).click();

  await expect(
    page.getByRole("button", { name: "1) Untitled route" })
  ).toBeVisible();
});
