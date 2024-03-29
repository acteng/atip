import { expect, test } from "@playwright/test";
import { checkPageLoaded, loadInitialPageFromBrowser } from "./shared.js";

test("changed settings are preserved across refresh", async ({ browser }) => {
  test.slow();
  let page = await loadInitialPageFromBrowser(browser);
  await page.goto("/scheme.html?authority=LAD_Adur");
  await page.getByRole("button", { name: "New route" }).click();
  let expectedToBeChecked = false;

  // It seems that playwright doesn't have separate storage for each browser spawned so we need to be ready for
  // the test to start with it checked or with it unchecked
  if (!(await page.getByText("Avoid doubling back").isChecked())) {
    await page.getByText("Avoid doubling back").check();
    await expect(page.getByText("Avoid doubling back")).toBeChecked();
    expectedToBeChecked = true;
  } else {
    await page.getByText("Avoid doubling back").uncheck();
    await expect(page.getByText("Avoid doubling back")).not.toBeChecked();
    expectedToBeChecked = false;
  }

  await page.reload();
  await checkPageLoaded(page);
  await page.getByRole("button", { name: "New route" }).click();
  if (expectedToBeChecked) {
    await expect(page.getByText("Avoid doubling back")).toBeChecked();
  } else {
    await expect(page.getByText("Avoid doubling back")).not.toBeChecked();
  }
});
