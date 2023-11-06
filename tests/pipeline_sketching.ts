import { type Page } from "@playwright/test";
import { clickMap } from "./shared.js";

export async function clearExistingInterventions(page: Page) {
  // We may be in any mode. The escape key always exits. The deepest possible state is editing geometry, so press escape twice to get back to editing the form, then the main mode.
  await page.keyboard.down("Escape");
  await page.keyboard.down("Escape");
  const lcwipNameLabel = "Superscheme:";
  const lcwipName = "LAD_Adur LCWIP";

  await page.getByText(lcwipNameLabel).click();
  let clearButton = page.getByRole("button", { name: "Start new scheme" });
  if (await clearButton.isEnabled()) {
    await clearButton.click();
    await page.getByRole("button", { name: "Clear all work" }).click();
  }

  // rename the superscheme from empty
  await page.getByLabel("Superscheme name").fill(lcwipName);
  await page.getByText(lcwipNameLabel).click();

  // Reset the viewport between tests, since many tests click the map in specific places
  await page
    .getByRole("button", { name: "Zoom to show entire boundary" })
    .click();
}

export async function drawPoint(page: Page, subschemeName?: string) {
  await page.getByRole("button", { name: "New point" }).click();
  await clickMap(page, 500, 500);
  if (subschemeName) {
    await page.getByLabel("Scheme name:").selectOption(subschemeName);
  }
  await page.getByRole("button", { name: "Save" }).click();
}
