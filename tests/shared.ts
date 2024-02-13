import { expect, type Browser, type Page } from "@playwright/test";

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

export async function clearExistingInterventions(page: Page) {
  // We may be in any mode. The escape key always exits. The deepest possible state is editing geometry, so press escape twice to get back to editing the form, then the main mode.
  await page.keyboard.down("Escape");
  await page.keyboard.down("Escape");

  await page.getByText("Manage files").click();
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
