import { expect, test } from "@playwright/test";

test("choosing a local authority and clicking start changes the url", async ({
  page,
}) => {
  await page.goto("/");
  await page
    .getByTestId("transport-authority")
    .fill("TA_West Yorkshire Combined Authority");
  await page.getByRole("button", { name: "Start" }).click();
  await expect(page).toHaveURL(
    /.*scheme.html\?authority=TA_West%20Yorkshire%20Combined%20Authority/,
  );
});

test("Uploading a valid atip geojson redirects to the appropriate authority scheme page", async ({
  page,
}) => {
  await page.goto("/");
  await page
    .getByLabel("Or upload an ATIP GeoJSON file")
    .setInputFiles("tests/data/LAD_Adur.geojson");

  await expect(page).toHaveURL(/.*scheme.html\?authority=LAD_Adur/);
});

test("schema is plumbed along to the sketch page", async ({ page }) => {
  await page.goto("/index.html?schema=pipeline");
  await page.getByTestId("transport-authority").fill("LAD_Adur");
  await page.getByRole("button", { name: "Start" }).click();
  await expect(page).toHaveURL(
    /.*scheme.html\?authority=LAD_Adur&schema=pipeline/,
  );
});

test("a v1 file with a pipeline hint redirects to pipeline mode", async ({
  page,
}) => {
  await page.goto("/index.html?schema=pipeline");
  await page
    .getByLabel("Or upload an ATIP GeoJSON file")
    .setInputFiles("tests/data/LAD_Adur.geojson");
  await expect(page).toHaveURL(
    /.*scheme.html\?authority=LAD_Adur&schema=pipeline/,
  );
});
