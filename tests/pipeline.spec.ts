import { expect, test } from "@playwright/test";
import { clickMap, getLocalStorage, resetSketch } from "./shared.js";

test("scheme validations are updated", async ({ page }) => {
  let filename = await resetSketch(page, "pipeline");

  await page.getByRole("button", { name: "Edit" }).click();
  // Blank schemes aren't valid
  await expect(page.getByText("Missing some required data")).toBeVisible();

  // Check for validation errors on a specific field
  await expect(
    page
      .getByRole("group", { name: "Scheme type" })
      .getByText("Error: Required"),
  ).toBeVisible();
  await page.getByText("Shared-use route").click();
  await expect(
    page
      .getByRole("group", { name: "Scheme type" })
      .getByText("Error: Required"),
  ).not.toBeVisible();

  // Fix the rest of the errors
  await page.getByLabel("Scheme name").fill("Corridor 1");
  await page.getByText("In development").click();
  await page.getByText("Medium (3-6 years)").check();

  // Fill in some optional data
  await page.getByLabel("Cost (GBP)").fill("9001");
  await page.getByText("ATF2").click();
  // exact=true needed because "ATF4E" also matches
  await page.getByText("ATF4", { exact: true }).click();
  await page.getByLabel("Other funding sources").fill("Local tax");

  await expect(page.getByText("Missing some required data")).not.toBeVisible();
  await page.getByRole("button", { name: "Save changes" }).click();

  // Check the data in local storage
  let json = await getLocalStorage(page, `sketch/LAD_Adur/${filename}`);
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
    }),
  );

  // Refresh and make sure there are no warnings
  await page.reload();
  await expect(page.getByRole("button", { name: "New route" })).toBeEnabled();
  await page.getByRole("button", { name: "Edit" }).click();
  await expect(page.getByText("Missing some required data")).not.toBeVisible();
});

test("file started with v1 can be edited by adding", async ({ page }) => {
  await resetSketch(page, "pipeline");

  // Load a file with no pipeline data, using the v1 schema
  await page
    .getByLabel("Add scheme from file")
    .setInputFiles("tests/data/LAD_Adur.geojson");
  // The first is for the blank default scheme; the second is the file we just loaded
  await page.getByRole("button", { name: "Edit" }).nth(1).click();
  // Make sure a pipeline-specific form shows up
  await page
    .getByRole("group", { name: "Scheme type" })
    .getByText("Shared-use route")
    .click();
});

// Check compatibility of old files with new per-feature fields introduced 14 February 2024
test("file without new budget/timing forms can be edited by loading", async ({
  page,
}) => {
  await page.goto("/choose_area.html");
  await page
    .getByLabel("Or import a GeoJSON file")
    .setInputFiles("tests/data/pipeline_before_feb_fields.geojson");

  await expect(page).toHaveURL(
    /.*scheme.html\?authority=LAD_Adur&schema=pipeline&file=pipeline_before_feb_fields/,
  );
  await expect(page.getByRole("button", { name: "New route" })).toBeEnabled();

  await page.getByRole("link", { name: "POI" }).click();
  await page.getByLabel("Cost (GBP)").fill("1.2");
  await page.getByRole("button", { name: "multiply by 1 million" }).click();
  await page.getByText("Is the construction fully funded?").check();
  await page.getByText("CRSTS").check();
  await page.getByRole("button", { name: "Finish" }).first().click();

  // Check the data in local storage
  let json = await getLocalStorage(
    page,
    "sketch/LAD_Adur/pipeline_before_feb_fields",
  );
  let feature = json.features[0] as any;
  expect(feature.properties.name).toEqual("POI");
  expect(feature.properties.pipeline).toEqual(
    expect.objectContaining({
      budget: 1_200_000,
      construction_funded: true,
      funding_sources: expect.objectContaining({
        crsts: true,
      }),
    }),
  );
});

test("file from another tool can be edited", async ({ page }) => {
  await resetSketch(page, "pipeline");

  // Load a file produced with another tool
  await page
    .getByLabel("Add scheme from file")
    .setInputFiles("tests/data/external_data.geojson");

  // The first feature has no properties at all
  await page.getByRole("link", { name: "Untitled area" }).click();
  await expect(page.getByText("No name")).toBeVisible();
  await page.getByLabel("Name").fill("Square area");
  // This warning should't apppear, because it gets backfilled
  await expect(page.getByText("No intervention type")).not.toBeVisible();
  await expect(page.getByText("Accuracy not specified")).toBeVisible();
});

test("new feature has pipeline forms", async ({ page }) => {
  let filename = await resetSketch(page, "pipeline");

  await page.getByRole("button", { name: "New point" }).click();
  await clickMap(page, 500, 500);
  // Make sure pipeline fields like Accuracy show up immediately
  await page.getByLabel("High").check();
  await page.getByRole("button", { name: "Finish" }).first().click();

  // Check the data in local storage
  let json = await getLocalStorage(page, `sketch/LAD_Adur/${filename}`);
  let feature = json.features[0] as any;
  expect(feature.properties.pipeline).toEqual(
    expect.objectContaining({
      accuracy: "high",
    }),
  );

  // Edit the point and make sure the forms are still there
  await page.getByRole("link", { name: "Untitled point" }).click();
  await page.getByLabel("Low").check();
  await page.getByRole("button", { name: "Finish" }).first().click();

  // Check the edit
  await page.getByRole("link", { name: "Untitled point" }).click();
  await expect(page.getByLabel("Low")).toBeChecked();
});
