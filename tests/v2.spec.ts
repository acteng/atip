import { expect, test } from "@playwright/test";
import { clickMap, getLocalStorage, resetSketch } from "./shared.js";

test("v2 forms work", async ({ page }) => {
  let filename = await resetSketch(page, "v2");

  await page.getByRole("button", { name: "New point" }).click();
  await clickMap(page, 500, 500);

  await page.getByLabel("Modal Filter").check();
  await page.getByLabel("Only cycling").check();
  await page.getByLabel("Something completely new").check();
  await page.getByLabel("Description").fill("Bus gate");

  await page.getByRole("button", { name: "Finish" }).first().click();

  // Check the data in local storage
  let json = await getLocalStorage(page, `sketch/LAD_Adur/${filename}`);
  let feature = json.features[0] as any;
  expect(feature.properties.v2).toEqual({
    intervention_type: "modal filter",
    intended_uses: "cycling",
    work_type: "new",
  });
  expect(feature.properties.description).toEqual("Bus gate");

  // Edit the point and make sure the forms are still there
  await page.getByRole("link", { name: "Untitled point" }).click();
  await page.getByLabel("Improvements to something already existing").check();
  await page.getByRole("button", { name: "Finish" }).first().click();

  // Check the edit
  await page.getByRole("link", { name: "Untitled point" }).click();
  await expect(
    page.getByLabel("Improvements to something already existing"),
  ).toBeChecked();
});
