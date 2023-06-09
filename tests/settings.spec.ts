import { expect, test } from "@playwright/test";
import { loadInitialPage } from "./shared.ts";

test("changed settings are preserved across refresh", async ({ browser }) => {
  let page = await loadInitialPage(browser);
  await page.goto("/scheme.html?authority=Adur");
  await page.getByRole("button", { name: "New route" }).click();
  let expectedToBeChecked = false;
  if (!(await page.getByLabel("Avoid doubling back").isChecked())) {
    await page.getByLabel("Avoid doubling back").check();
    await expect(page.getByLabel("Avoid doubling back")).toBeChecked();
    expectedToBeChecked = true;
  } else {
    await page.getByLabel("Avoid doubling back").uncheck();
    await expect(page.getByLabel("Avoid doubling back")).not.toBeChecked();
    expectedToBeChecked = false;
  }

  page = await loadInitialPage(browser);
  await page.getByRole("button", { name: "New route" }).click();
  if (expectedToBeChecked) {
    await expect(page.getByLabel("Avoid doubling back")).toBeChecked();
  } else {
    await expect(page.getByLabel("Avoid doubling back")).not.toBeChecked();
  }
});
