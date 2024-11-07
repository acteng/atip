import { expect, test } from "@playwright/test";

test("choosing a local authority and clicking start changes the url", async ({
  page,
}) => {
  await page.goto("/");
  await page
    .getByLabel("Select Transport Authority or Local Authority District")
    .fill("TA_West Yorkshire Combined Authority");
  await page.getByRole("button", { name: "Start" }).click();
  await expect(page).toHaveURL(
    /.*files.html\?authority=TA_West%20Yorkshire%20Combined%20Authority/,
  );
});

test("Importing a valid geojson redirects to the appropriate authority scheme page", async ({
  page,
}) => {
  await page.goto("/");
  await page
    .getByLabel("Or import a GeoJSON file")
    .setInputFiles("tests/data/LAD_Adur.geojson");

  await expect(page).toHaveURL(
    /.*scheme.html\?authority=LAD_Adur&schema=v1&file=LAD_Adur/,
  );
});

test("schema is plumbed along to the sketch page", async ({ page }) => {
  await page.goto("/index.html?schema=pipeline");
  await page
    .getByLabel("Select Transport Authority or Local Authority District")
    .fill("LAD_Adur");
  await page.getByRole("button", { name: "Start" }).click();
  await expect(page).toHaveURL(
    /.*files.html\?authority=LAD_Adur&schema=pipeline/,
  );

  page.on("dialog", (dialog) => dialog.accept("file123"));
  await page.getByRole("button", { name: "Create new file" }).click();
  await expect(page).toHaveURL(
    /.*scheme.html\?authority=LAD_Adur&schema=pipeline&file=file123/,
  );
});
