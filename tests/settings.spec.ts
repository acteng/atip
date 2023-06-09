import { expect, test } from "@playwright/test";
import { loadInitialPage } from "./shared.ts";

test("changed settings are preserved across refresh", async ({ browser }) => {
  let page = await loadInitialPage(browser);
  await page.goto("/scheme.html?authority=Adur");
  await page.getByRole("button", { name: "New route" }).click();
  await expect(page.getByLabel("Avoid doubling back")).not.toBeChecked();
  await page.getByLabel("Avoid doubling back").check();

  page = await loadInitialPage(browser);
  await page.getByRole("button", { name: "New route" }).click();
  await expect(page.getByLabel("Avoid doubling back")).toBeChecked();
});
