import { expect, test } from "@playwright/test";
import { clickMap } from "./shared.js";
import { v4 as uuidv4 } from "uuid";

// TODO The geocoder is covering up the Finish button, because of how the top bar looks with the failure message shown
test.skip("other tools work when route tool doesn't load", async ({ page }) => {
  // Do this first
  await page.route(
    "https://atip.uk/route-snappers/v3/LAD_Adur.bin.gz",
    (route) =>
      route.fulfill({
        status: 404,
      }),
  );

  await page.goto(`/files.html?authority=LAD_Adur`);
  let filename = uuidv4();
  page.on("dialog", (dialog) => dialog.accept(filename));
  await page.getByRole("button", { name: "Create new file" }).click();
  await expect(page).toHaveURL(/.*scheme.html\?authority=LAD_Adur/);

  await expect(page.getByText("Failed to load route snapper")).toBeVisible();

  // Other tools should still work
  await page.getByRole("button", { name: "New point" }).click();
  await page.getByLabel("Name").fill("Pointless");
  await clickMap(page, 500, 500);
  await page.getByRole("button", { name: "Finish" }).first().click();

  await expect(page.getByRole("link", { name: "Pointless" })).toBeVisible();
});

test("Redirected to homepage with error when incorrect params given", async ({
  page,
}) => {
  await page.goto("/files.html?authority=Adu");
  await expect(page.getByText("Authority name not found: Adu")).toBeVisible();

  await page.goto("/scheme.html?authority=LAD_Adur&file=missing");
  await expect(
    page.getByText("File missing in authority LAD_Adur not found"),
  ).toBeVisible();
});

test("Import file with invalid boundary", async ({ page }) => {
  await page.goto("/choose_area.html");
  await page
    .getByLabel("Or import a GeoJSON file")
    .setInputFiles("tests/data/out_of_bounds.geojson");

  await expect(
    page.getByText(
      "Couldn't import file: Error: Can't figure out the authority boundary that fully contains this scheme",
    ),
  ).toBeVisible();
});
