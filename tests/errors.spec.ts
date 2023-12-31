import { expect, test } from "@playwright/test";
import { clickMap } from "./shared.js";

// This is separate from modes.spec.ts to avoid the common beforeAll
test("other tools work when route tool doesn't load", async ({ page }) => {
  await page.route(
    "https://atip.uk/route-snappers/v2.5/LAD_Adur.bin.gz",
    (route) =>
      route.fulfill({
        status: 404,
      })
  );
  await page.goto("/scheme.html?authority=LAD_Adur");

  await expect(page.getByText("Failed to load route snapper")).toBeVisible();

  // Other tools should still work
  await page.getByRole("button", { name: "New point" }).click();
  await clickMap(page, 500, 500);
  await page.locator('input[type="text"]').fill("Pointless");
  await page.getByRole("button", { name: "Save" }).click();
  await expect(page.getByRole("link", { name: "Pointless" })).toBeVisible();
});

test("Redirected to homepage with error when incorrect authority given to scheme page", async ({
  page,
}) => {
  await page.goto("/scheme.html?authority=Adu");

  await expect(page.getByText("Authority name not found:")).toBeVisible();
  await expect(page).toHaveURL(
    /.*\?error=Authority\+name\+not\+found%3A\+Adu&style=streets/
  );
});

test("Upload file with invalid boundary", async ({ page }) => {
  await page.goto("/");
  await page
    .getByLabel("Or upload an ATIP GeoJSON file")
    .setInputFiles("tests/data/out_of_bounds.geojson");

  await expect(
    page.getByText(
      "Couldn't load scheme from a file: Error: Can't figure out the authority boundary that fully contains this scheme"
    )
  ).toBeVisible();
});
