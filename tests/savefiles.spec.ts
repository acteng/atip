import { readFile } from "fs/promises";
import { expect, test } from "@playwright/test";
import { resetSketch, clickMap } from "./shared.js";
import type { Readable } from "stream";

test("loading a file with length displays the length", async ({ page }) => {
  await page.goto("/choose_area.html");
  await page
    .getByLabel("Or import a GeoJSON file")
    .setInputFiles("tests/data/LAD_Adur.geojson");
  await expect(page).toHaveURL(/.*scheme.html/);

  await page
    .getByRole("link", {
      name: "Route from Dankton Lane and West Street to Cokeham Road and Western Road North",
    })
    .click();
  await expect(page.getByText("Length: 450 m")).toBeVisible();
});

test("loading a legacy file with one scheme works", async ({ page }) => {
  await page.goto("/choose_area.html");
  await page
    .getByLabel("Or import a GeoJSON file")
    .setInputFiles("tests/data/legacy_schemeless.geojson");
  await expect(page).toHaveURL(/.*scheme.html/);

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
test("loading a file without length displays the length", async ({ page }) => {
  let json = JSON.parse(
    await readFile("tests/data/LAD_Adur.geojson", { encoding: "utf8" }),
  );
  // Remove the property from the test data first
  await expect(Math.round(json.features[0].properties!.length_meters)).toBe(
    450,
  );
  delete json.features[0].properties.length_meters;
  let uploadFile = JSON.stringify(json);

  await page.goto("/choose_area.html");
  await page.getByLabel("Or import a GeoJSON file").setInputFiles({
    name: "LAD_Adur.geojson",
    mimeType: "application/json",
    buffer: Buffer.from(uploadFile),
  });
  await expect(page).toHaveURL(/.*scheme.html/);

  await page
    .getByRole("link", {
      name: "Route from Dankton Lane and West Street to Cokeham Road and Western Road North",
    })
    .click();
  await expect(page.getByText("Length: 450 m")).toBeVisible();
});

// Handle unusual GeoJSON inputs produced by other tools
test("loading a file with null properties displays the length", async ({
  page,
}) => {
  let json = JSON.parse(
    await readFile("tests/data/LAD_Adur.geojson", { encoding: "utf8" }),
  );
  // Remove the property from the test data first
  json.features[0].properties = null;
  delete json.schemes;
  let uploadFile = JSON.stringify(json);

  await page.goto("/choose_area.html");
  await page.getByLabel("Or import a GeoJSON file").setInputFiles({
    name: "LAD_Adur.geojson",
    mimeType: "application/json",
    buffer: Buffer.from(uploadFile),
  });
  await expect(page).toHaveURL(/.*scheme.html/);

  // We don't attempt to classify intervention_type for non-ATIP inputs
  await page
    .getByRole("link", {
      name: "Untitled line",
    })
    .click();
  await expect(page.getByText("Length: 450 m")).toBeVisible();
});

test("a saved file is loaded when the URL stays the same", async ({ page }) => {
  await resetSketch(page);

  await page.getByRole("button", { name: "New point" }).click();
  await page.getByRole("region", { name: "Map" }).click({
    position: {
      x: 500,
      y: 500,
    },
  });
  await page.getByRole("button", { name: "Finish" }).first().click();

  await page.reload();

  await page.getByRole("link", { name: "Untitled point" }).click();
});

test("loading a file produced by another tool shows fixable errors", async ({
  page,
}) => {
  await page.goto("/choose_area.html");
  await page
    .getByLabel("Or import a GeoJSON file")
    .setInputFiles("tests/data/external_data.geojson");
  await expect(page).toHaveURL(/.*scheme.html/);

  await expect(
    page.getByText("There's a problem with 2 interventions below"),
  ).toBeVisible();

  // Fix the first problem
  await page.getByRole("link", { name: "Untitled undefined" }).click();
  await expect(page.getByText("No name")).toBeVisible();
  await page.locator('input[type="text"]').fill("Square area");
  await expect(page.getByText("No intervention type")).toBeVisible();
  await page.getByText("Area", { exact: true }).click();
  // TODO Click Finish in the map controls, not on the sidebar. They should be
  // the same, but the one on the sidebar appears to be flaky for unknown
  // reasons.
  await page.getByTestId("map").getByRole("button", { name: "Finish" }).click();
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
  await page.getByRole("button", { name: "Finish" }).first().click();
  await expect(
    page.getByText("There's a problem with one intervention below"),
  ).not.toBeVisible();
});

test("old local storage items are detected and renamed", async ({ page }) => {
  // We have to go somewhere to set local storage
  await page.goto("/choose_area.html");
  // Set local storage items using the pre-November 2024 naming scheme
  let v1 = await readFile("tests/data/LAD_Adur.geojson", { encoding: "utf8" });
  let pipeline = await readFile(
    "tests/data/pipeline_before_feb_fields.geojson",
    { encoding: "utf8" },
  );
  await page.evaluate(
    (contents) => window.localStorage.setItem("LAD_Adur", contents),
    v1,
  );
  await page.evaluate(
    (contents) => window.localStorage.setItem("LAD_Adur_pipeline", contents),
    pipeline,
  );

  // Check the first file
  await page.goto("/files.html?authority=LAD_Adur");
  await page.getByRole("link", { name: "v1 sketch" }).click();
  await expect(page).toHaveURL(
    /.*scheme.html\?authority=LAD_Adur&schema=v1&file=v1\+sketch/,
  );

  // And the second
  await page.goto("/files.html?authority=LAD_Adur");
  await page.getByRole("link", { name: "pipeline sketch" }).click();
  await expect(page).toHaveURL(
    /.*scheme.html\?authority=LAD_Adur&schema=pipeline&file=pipeline\+sketch/,
  );
});

test("download a file and then reimport it", async ({ page }) => {
  // Make a file
  let filename = await resetSketch(page);
  await page.getByRole("button", { name: "New point" }).click();
  await page.getByLabel("Name").fill("Pointless");
  await clickMap(page, 500, 500);
  await page.getByRole("button", { name: "Finish" }).first().click();

  // Download it, and check the filename
  let downloadPromise = page.waitForEvent("download");
  await page.getByRole("button", { name: "Export" }).click();
  let download = await downloadPromise;
  let fullFilename = `LAD_Adur_${filename}.geojson`;
  expect(download.suggestedFilename()).toEqual(fullFilename);
  let contents = await readStream(await download.createReadStream());

  // Import it and check the filename is correct
  await page.goto("/choose_area.html");
  await page.getByLabel("Or import a GeoJSON file").setInputFiles({
    name: fullFilename,
    mimeType: "application/json",
    buffer: Buffer.from(contents),
  });
  await expect(page).toHaveURL(
    new RegExp(
      String.raw`.*scheme.html\?authority=LAD_Adur&schema=v1&file=${filename}`,
    ),
  );
  await expect(page.getByRole("link", { name: "Pointless" })).toBeVisible();
});

async function readStream(stream: Readable): Promise<string> {
  let data = "";
  for await (let chunk of stream) {
    data += chunk;
  }
  return data;
}

// TODO Test schema detection
// TODO Test loading broken files from the homepage
