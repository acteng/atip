import { expect, test } from "@playwright/test";
import { resetSketch, clickMap } from "./shared.js";

test("user can resolve running out of quota", async ({ page }) => {
  let filename = await resetSketch(page);

  // Get super close to the 5MB limit
  await page.evaluate(() =>
    window.localStorage.setItem("huge", "x".repeat(4.999 * 1024 * 1024)),
  );

  // Draw one simple route, causing quota to go over
  await page.getByRole("button", { name: "New route" }).click();
  await clickMap(page, 500, 500);
  await clickMap(page, 400, 500);
  await page.getByRole("button", { name: "Finish" }).first().click();

  // Resolve the problem
  await expect(page).toHaveURL(/.*local_storage.html/);
  await expect(page.getByText("5 MB / 5 MB is used right now")).toBeVisible();
  // There'll be a confirmation prompt, but resetSketch already handles dialogs
  await page.getByRole("button", { name: "Delete" }).first().click();

  // Go back to the sketch and verify it works now
  await page.goto(`/scheme.html?authority=LAD_Adur&file=${filename}`);
  await expect(
    page.getByText("There are no interventions in this scheme"),
  ).toBeVisible();
  await page.getByRole("button", { name: "New route" }).click();
  await clickMap(page, 500, 500);
  await clickMap(page, 400, 500);
  await page.getByRole("button", { name: "Finish" }).first().click();
  await page
    .getByRole("link", { name: "Route from ??? and Beach Green to ???" })
    .click();
});
