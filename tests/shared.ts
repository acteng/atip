import { type Page, type Browser } from "playwright";

export const loadInitialPage = async (browser: Browser): Promise<Page> => {
  const page: Page = await browser.newPage();
  await page.goto("/scheme.html?authority=Adur");
  // wait for the map to load and interventions panel to appear
  await page.getByText("Click an object to fill out its attributes").waitFor();
  // wait for router snapper to load so we can use route tool
  await page.getByText("Route tool loading...").waitFor({ state: "hidden" });
  return page;
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
  }

  if (!(await editAttributesLocator.isDisabled())) {
    await editAttributesLocator.click();
  }
};
