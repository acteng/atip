import { expect, test } from "@playwright/test";

test("front page has welcome text", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: "Welcome to ATIP Scheme Sketcher v2" })
  ).toBeVisible();
});

test("choosing a local authority and clicking start changes the url", async ({
  page,
}) => {
  await page.goto("/");
  await page
    .getByTestId("transport-authority")
    .fill("TA_West Yorkshire Combined Authority");
  await page.getByRole("button", { name: "Start" }).click();
  await expect(page).toHaveURL(
    /.*scheme.html\?authority=TA_West%20Yorkshire%20Combined%20Authority/
  );
});

test("Uploading a valid atip geojson redirects to the appropriate authority scheme page", async ({
  page,
}) => {
  await page.goto("/");
  await page
    .getByLabel("Or upload an ATIP GeoJSON file")
    .setInputFiles("tests/data/Adur.json");

  await expect(page).toHaveURL(/.*scheme.html\?authority=LAD_Adur/);
});
