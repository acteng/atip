import { expect, test } from "@playwright/test";
import { resetSketch, clickMap } from "./shared.js";

test("other tools work when route tool doesn't load", async ({ page }) => {
  // Do this first
  await page.route(
    "https://atip.uk/route-snappers/v3/LAD_Adur.bin.gz",
    (route) =>
      route.fulfill({
        status: 404,
      }),
  );
  await resetSketch(page);

  await expect(page.getByText("Failed to load route snapper")).toBeVisible();

  // Other tools should still work
  await page.getByRole("button", { name: "New point" }).click();
  await page.getByLabel("Name").fill("Pointless");
  await clickMap(page, 500, 500);
  await page.getByRole("button", { name: "Finish" }).click();

  await expect(page.getByRole("link", { name: "Pointless" })).toBeVisible();
});

test("Redirected to homepage with error when incorrect params given to scheme page", async ({
  page,
}) => {
  await page.goto("/scheme.html?authority=Adu");

  await expect(page.getByText("Authority name not found:")).toBeVisible();
  await expect(page).toHaveURL(
    /.*\?error=Authority\+name\+not\+found%3A\+Adu&style=streets/,
  );

  await page.goto("/scheme.html?authority=LAD_Adur&file=missing");

  await expect(
    page.getByText("File missing in authority LAD_Adur not found:"),
  ).toBeVisible();
});

test("Import file with invalid boundary", async ({ page }) => {
  await page.goto("/");
  await page
    .getByLabel("Or import a GeoJSON file")
    .setInputFiles("tests/data/out_of_bounds.geojson");

  await expect(
    page.getByText(
      "Couldn't load scheme from a file: Error: Can't figure out the authority boundary that fully contains this scheme",
    ),
  ).toBeVisible();
});
