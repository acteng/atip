import { readFile } from "fs/promises";
import { expect, test, type Page } from "@playwright/test";
import { loadInitialPage, clearExistingInterventions } from "./shared.ts";

let page: Page;
let json;

test.beforeAll(async ({ browser }) => {
  page = await loadInitialPage(browser);

  json = JSON.parse(
    await readFile("tests/data/Adur.json", { encoding: "utf8" })
  );
});

test.beforeEach(async () => {
  await clearExistingInterventions(page);
});

test("loading a file with length displays the length", async () => {
  // Note we use a weird styling trick to replace the file input element with a regular button.
  // This will not work: page.getByRole('button', { name: 'Load from GeoJSON' })
  await page.locator("#load-geojson").setInputFiles("tests/data/Adur.json");

  page.on("dialog", (dialog) => dialog.accept());
  await page
    .getByRole("button", {
      name: "1) Route from Dankton Lane and West Street to Cokeham Road and Western Road North",
    })
    .click();
  await expect(page.getByText("Length: 450 m")).toBeVisible();
});

// Some people used ATIP before route-snapper started populating a length
// property. Upload a file with that missing, and make sure it's backfilled.
test("loading a file without length displays the length", async () => {
  // Remove the property from the test data first
  await expect(Math.round(json.features[0].properties.length_meters)).toBe(450);
  const lengthMeters = json.features[0].properties.length_meters;
  let copy = JSON.parse(JSON.stringify(json));
  delete copy.features[0].properties.length_meters;
  let uploadFile = JSON.stringify(copy);

  await page.locator("#load-geojson").setInputFiles({
    name: "Adur.json",
    mimeType: "application/json",
    buffer: Buffer.from(uploadFile),
  });

  await page
    .getByRole("button", {
      name: "1) Route from Dankton Lane and West Street to Cokeham Road and Western Road North",
    })
    .click();
  await expect(page.getByText("Length: 450 m")).toBeVisible();
});

// Handle unusual GeoJSON inputs produced by other tools
test("loading a file with null properties displays the length", async () => {
  // Remove the property from the test data first
  let copy = JSON.parse(JSON.stringify(json));
  copy.features[0].properties = null;
  let uploadFile = JSON.stringify(copy);

  await page.locator("#load-geojson").setInputFiles({
    name: "Adur.json",
    mimeType: "application/json",
    buffer: Buffer.from(uploadFile),
  });

  // We don't attempt to classify intervention_type for non-ATIP inputs
  await page.getByRole("button", { name: "1) Untitled line" }).click();
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

  await page.getByRole("button", { name: "1) Untitled point" }).click();
});

test("loading a file from the homepage goes to the correct page", async ({
  page,
}) => {
  await page.goto("/");
  await page.locator("#load-geojson").setInputFiles("tests/data/Adur.json");

  await expect(page).toHaveURL(/scheme.html\?authority=Adur/);
  await page
    .getByRole("button", {
      name: "1) Route from Dankton Lane and West Street to Cokeham Road and Western Road North",
    })
    .click();
  await expect(page.getByText("Length: 450 m")).toBeVisible();
});
// TODO Test schema detection
// TODO Test loading broken files from the homepage
