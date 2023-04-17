import { readFile } from "fs/promises";
import { test, expect } from "@playwright/test";

test("loading a file with length displays the length", async ({ page }) => {
  await page.goto("/scheme.html?authority=North Somerset");
  // Note we use a weird styling trick to replace the file input element with a regular button.
  // This will not work: page.getByRole('button', { name: 'Load from GeoJSON' })
  await page.locator("#load_geojson").setInputFiles("tests/data/route.json");

  await page.getByRole("button", { name: "1) Untitled route" }).click();
  await expect(page.getByText("Length: 8.5km")).toBeVisible();
});

// Some people used ATIP before route-snapper started populating a length
// property. Upload a file with that missing, and make sure it's backfilled.
test("loading a file without length displays the length", async ({ page }) => {
  // Remove the property from the test data first
  let json = JSON.parse(
    await readFile("tests/data/route.json", { encoding: "utf8" })
  );
  await expect(Math.round(json.features[0].properties.length_meters)).toBe(
    8520
  );
  delete json.features[0].properties.length_meters;
  let uploadFile = JSON.stringify(json);

  await page.goto("/scheme.html?authority=North Somerset");
  await page.locator("#load_geojson").setInputFiles({
    name: "route.json",
    mimeType: "application/json",
    buffer: Buffer.from(uploadFile),
  });

  await page.getByRole("button", { name: "1) Untitled route" }).click();
  await expect(page.getByText("Length: 8.5km")).toBeVisible();
});
