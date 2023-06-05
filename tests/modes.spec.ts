import { readFile } from "fs/promises";
import { test, expect, type Page } from "@playwright/test";
import { loadInitialPage } from "./shared.ts";

let page: Page;

test.beforeAll(async ({ browser }) => {
  page = await loadInitialPage(browser);
});

test("clearing all while a feature is open works", async () => {
  await page.getByRole("button", { name: "New point" }).click();
  await page.getByRole("region", { name: "Map" }).click({
    position: {
      x: 500,
      y: 500,
    },
  });
  page.on("dialog", (dialog) => dialog.accept());
  await page.getByRole("button", { name: "Clear all" }).click();
  // Make sure AttributeMode resets to nothing being selected
  await expect(
    page.getByText("Click an object to fill out its attributes")
  ).toBeVisible();
});
