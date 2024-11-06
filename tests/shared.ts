import { expect, type Browser, type Page } from "@playwright/test";
import { v4 as uuidv4 } from "uuid";

// Starts a blank file with a unique name, and waits for everything to be ready. Returns the filename.
export async function resetSketch(
  page: Page,
  schema: string = "v1",
): Promise<string> {
  await page.goto(`/files.html?authority=LAD_Adur&schema=${schema}`);

  let filename = uuidv4();
  page.on("dialog", (dialog) => dialog.accept(filename));
  await page.getByRole("button", { name: "Create new file" }).click();
  await expect(page).toHaveURL(/.*scheme.html\?authority=LAD_Adur/);

  // Wait for the route snapper to load
  await expect(page.getByRole("button", { name: "New route" })).toBeEnabled();

  return filename;
}

// TODO Deprecated
export async function loadInitialPageFromBrowser(
  browser: Browser,
): Promise<Page> {
  let page = await browser.newPage();
  await page.goto("/scheme.html?authority=LAD_Adur");
  await checkPageLoaded(page);
  return page;
}

export async function checkPageLoaded(page: Page) {
  // Wait for the map to load by looking for controls
  await expect(
    page.getByRole("button", { name: "Zoom to show entire boundary" }),
  ).toBeVisible();
  // Wait for the route snapper to load
  await expect(page.getByRole("button", { name: "New route" })).toBeEnabled();
}

// TODO Deprecated
export async function clearExistingInterventions(page: Page) {
  // We may be in any mode. The escape key always exits back to list mode.
  await page.keyboard.down("Escape");
  // But the test runner is flaky, so always wait a bit and try again
  await page.waitForTimeout(100);
  await page.keyboard.down("Escape");

  // A test may leave the "Manage files" panel open
  if (!(await page.getByRole("button", { name: "Clear all" }).isVisible())) {
    await page.getByText("Manage files").click();
  }
  await page.getByRole("button", { name: "Clear all" }).click();
  await page.getByRole("button", { name: "Clear all work" }).click();
  // Close the panel
  await page.getByText("Manage files").click();

  // Reset the viewport between tests, since many tests click the map in specific places
  await page
    .getByRole("button", { name: "Zoom to show entire boundary" })
    .click();
}

export async function clickMap(page: Page, x: number, y: number) {
  await page.getByRole("region", { name: "Map" }).click({
    position: { x, y },
  });
}

export async function getLocalStorage(page: Page, key: string): Promise<any> {
  let string = await page.evaluate(
    (key) => window.localStorage.getItem(key),
    key,
  );
  return JSON.parse(string!);
}
