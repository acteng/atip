import { type Browser, type Page } from "playwright";

export const loadInitialPageFromBrowser = async (
  browser: Browser
): Promise<Page> => {
  const page: Page = await browser.newPage();
  await gotoInitialPage(page);
  return page;
};

export const gotoInitialPage = async (page: Page): Promise<void> => {
  await page.goto("/scheme.html?authority=Adur");
  await checkPageLoaded(page);
};

export const checkPageLoaded = async (page: Page): Promise<void> => {
  // wait for the map to load and interventions panel to appear
  await page
    .getByText("Click an intervention to fill out its attributes")
    .waitFor();
  // wait for router snapper to load so we can use route tool
  await page.getByText("Route tool loading...").waitFor({ state: "hidden" });
};

export const clearExistingInterventions = async (page: Page) => {
  const editAttributesLocator = page.getByRole("button", {
    name: "Edit attributes",
  });
  if (!(await editAttributesLocator.isDisabled())) {
    await editAttributesLocator.click();
  }

  const clearAllLocator = page.getByRole("button", { name: "Clear all" });
  if (!(await clearAllLocator.isDisabled())) {
    await clearAllLocator.click();
    await page.getByRole("button", { name: "Confirm" }).click();
  }

  if (!(await editAttributesLocator.isDisabled())) {
    await editAttributesLocator.click();
  }

  // Reset the viewport between tests, since many tests click the map in specific places
  await page
    .getByRole("button", { name: "Zoom to show entire boundary" })
    .click();
};

export async function clickMap(page: Page, x: number, y: number) {
  await page.getByRole("region", { name: "Map" }).click({
    position: { x, y },
  });
}
