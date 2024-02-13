import { readFile } from "fs/promises";
import { expect, test, type Page } from "@playwright/test";
import {
  checkPageLoaded,
  clearExistingInterventions,
  loadInitialPageFromBrowser,
} from "./shared.js";

let page: Page;

test.beforeAll(async ({ browser }) => {
  page = await loadInitialPageFromBrowser(browser);
});

test.beforeEach(async () => {
  await clearExistingInterventions(page);
});

test("loading a file with length displays the length", async () => {
  await page
    .getByLabel("Load GeoJSON file")
    .setInputFiles("tests/data/LAD_Adur.geojson");

  page.on("dialog", (dialog) => dialog.accept());
  await page
    .getByRole("link", {
      name: "Route from Dankton Lane and West Street to Cokeham Road and Western Road North",
    })
    .click();
  await expect(page.getByText("Length: 450 m")).toBeVisible();
});

test("loading a legacy file with one scheme works", async () => {
  await page
    .getByLabel("Load GeoJSON file")
    .setInputFiles("tests/data/legacy_schemeless.geojson");

  page.on("dialog", (dialog) => dialog.accept());
  // The file should behave the same as data/LAD_Adur.geojson
  await page
    .getByRole("link", {
      name: "Route from Dankton Lane and West Street to Cokeham Road and Western Road North",
    })
    .click();
  await expect(page.getByText("Length: 450 m")).toBeVisible();
});

// Some people used ATIP before route-snapper started populating a length
// property. Upload a file with that missing, and make sure it's backfilled.
test("loading a file without length displays the length", async () => {
  let json = JSON.parse(
    await readFile("tests/data/LAD_Adur.geojson", { encoding: "utf8" }),
  );
  // Remove the property from the test data first
  await expect(Math.round(json.features[0].properties!.length_meters)).toBe(
    450,
  );
  delete json.features[0].properties.length_meters;
  let uploadFile = JSON.stringify(json);

  await page.getByLabel("Load GeoJSON file").setInputFiles({
    name: "LAD_Adur.geojson",
    mimeType: "application/json",
    buffer: Buffer.from(uploadFile),
  });

  await page
    .getByRole("link", {
      name: "Route from Dankton Lane and West Street to Cokeham Road and Western Road North",
    })
    .click();
  await expect(page.getByText("Length: 450 m")).toBeVisible();
});

// Handle unusual GeoJSON inputs produced by other tools
test("loading a file with null properties displays the length", async () => {
  let json = JSON.parse(
    await readFile("tests/data/LAD_Adur.geojson", { encoding: "utf8" }),
  );
  // Remove the property from the test data first
  json.features[0].properties = null;
  delete json.schemes;
  let uploadFile = JSON.stringify(json);

  await page.getByLabel("Load GeoJSON file").setInputFiles({
    name: "LAD_Adur.geojson",
    mimeType: "application/json",
    buffer: Buffer.from(uploadFile),
  });

  // We don't attempt to classify intervention_type for non-ATIP inputs
  await page
    .getByRole("link", {
      name: "Untitled line",
    })
    .click();
  await expect(page.getByText("Length: 450 m")).toBeVisible();
});

test("the previous file from local storage is loaded by default", async () => {
  await page.getByRole("button", { name: "New point" }).click();
  await page.getByRole("region", { name: "Map" }).click({
    position: {
      x: 500,
      y: 500,
    },
  });
  await page.getByRole("button", { name: "Save" }).click();

  await page.reload();

  await page.getByRole("link", { name: "Untitled point" }).click();
});

test("loading a file from the homepage goes to the correct page", async () => {
  await page.goto("/");
  await page
    .getByLabel("Or upload an ATIP GeoJSON file")
    .setInputFiles("tests/data/LAD_Adur.geojson");

  await expect(page).toHaveURL(/scheme.html\?authority=LAD_Adur/);
  await checkPageLoaded(page);
  await page
    .getByRole("link", {
      name: "Route from Dankton Lane and West Street to Cokeham Road and Western Road North",
    })
    .click();
  await expect(page.getByText("Length: 450 m")).toBeVisible();
});

test("loading a file produced by another tool shows fixable errors", async () => {
  await page
    .getByLabel("Load GeoJSON file")
    .setInputFiles("tests/data/external_data.geojson");
  page.on("dialog", (dialog) => dialog.accept());
  await expect(
    page.getByText("There's a problem with 2 interventions below"),
  ).toBeVisible();

  // Fix the first problem
  await page.getByRole("link", { name: "Untitled undefined" }).click();
  await expect(page.getByText("No name")).toBeVisible();
  await page.locator('input[type="text"]').fill("Square area");
  await expect(page.getByText("No intervention type")).toBeVisible();
  await page.getByText("Area", { exact: true }).click();
  await page.getByRole("button", { name: "Save" }).click();
  await expect(
    page.getByText("There's a problem with one intervention below"),
  ).toBeVisible();

  // Fix the second problem
  await page.getByRole("link", { name: "Untitled invalid" }).click();
  await expect(page.getByText("No name")).toBeVisible();
  await page.locator('input[type="text"]').fill("Weird route");
  await expect(page.getByText("No intervention type")).toBeVisible();
  await page.getByText("Route", { exact: true }).click();
  await expect(page.getByText("Extra GeoJSON properties: extra")).toBeVisible();
  await page
    .getByRole("button", { name: "Handle extra GeoJSON properties" })
    .click();
  await page.getByRole("button", { name: "Remove these properties" }).click();
  await page.getByRole("button", { name: "Save" }).click();
  await expect(
    page.getByText("There's a problem with one intervention below"),
  ).not.toBeVisible();
});

// TODO Test schema detection
// TODO Test loading broken files from the homepage
