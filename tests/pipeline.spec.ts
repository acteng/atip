import { expect, test, type Page } from "@playwright/test";
import {
  checkPageLoaded,
  clearExistingInterventions,
  getLocalStorage,
} from "./shared.js";

let page: Page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto("/scheme.html?authority=LAD_Adur&schema=pipeline");
  await checkPageLoaded(page);
});

test.beforeEach(async () => {
  await clearExistingInterventions(page);
});

test("scheme validations are updated", async () => {
  // Blank schemes aren't valid
  await expect(page.getByText("Missing some required data")).toBeVisible();
  await page.getByRole("button", { name: "Scheme details" }).click();

  // Check for validation errors on a specific field
  await expect(
    page
      .getByRole("group", { name: "Scheme type" })
      .getByText("Error: Required")
  ).toBeVisible();
  await page.getByText("Shared-use route").click();
  await expect(
    page
      .getByRole("group", { name: "Scheme type" })
      .getByText("Error: Required")
  ).not.toBeVisible();

  // Fix the rest of the errors
  await page.getByLabel("Scheme name").fill("Corridor 1");
  await page.getByLabel("In development").click();
  await page.getByLabel("Medium (3-6 years)").check();

  // Fill in some optional data
  await page.getByLabel("Cost (GBP)").fill("9001");
  await page.getByLabel("ATF2").click();
  // exact=true needed because "ATF4E" also matches
  await page.getByLabel("ATF4", { exact: true }).click();
  await page.getByLabel("Other funding sources").fill("Local tax");

  await page.getByRole("button", { name: "Save" }).click();
  await expect(page.getByText("Missing some required data")).not.toBeVisible();

  // Check the data in local storage
  let json = await getLocalStorage(page, "LAD_Adur_pipeline");
  let scheme = Object.values(json.schemes)[0] as any;
  expect(scheme.scheme_name).toEqual("Corridor 1");
  expect(scheme.pipeline).toEqual(
    expect.objectContaining({
      scheme_type: "shared-use route",
      status: "in development",
      timescale: "medium",
      budget: 9001,
      funding_sources: expect.objectContaining({
        atf2: true,
        atf4: true,
        other: "Local tax",
      }),
    })
  );

  // Refresh and make sure there are no warnings
  await page.reload();
  await checkPageLoaded(page);
  await expect(page.getByText("Missing some required data")).not.toBeVisible();
});