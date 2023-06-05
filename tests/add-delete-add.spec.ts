import { test, expect, type Page } from "@playwright/test";
import { loadInitialPage } from "./shared.ts";

let page: Page;

test.beforeAll(async ({ browser }) => {
  page = await loadInitialPage(browser);
});

test("testing adding interventions, then deleting one, then adding another", async () => {
  await page.getByRole("region", { name: "Map" }).waitFor();
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
  await page.getByRole("button", { name: "Save" }).click();
  await page.getByRole("button", { name: "1) Untitled route" }).click();
  await page.getByRole("button", { name: "Delete" }).click();
  await page.getByRole("button", { name: "New route" }).click();
  await page.getByRole("region", { name: "Map" }).click({
    position: {
      x: 196,
      y: 375,
    },
  });
  await page.getByRole("region", { name: "Map" }).click({
    position: {
      x: 481,
      y: 399,
    },
  });
  await page.getByRole("button", { name: "Finish" }).click();

  await page.getByRole("button", { name: "1) Untitled route" }).isVisible();
});
