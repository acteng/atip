import { expect, test } from "@playwright/test";
import { clickMap } from "./shared.js";

// This is separate from modes.spec.ts to avoid the common beforeAll
test("other tools work when route tool doesn't load", async ({ page }) => {
  await page.route("https://atip.uk/route-snappers/v2.1/Adur.bin.gz", (route) =>
    route.fulfill({
      status: 404,
    })
  );
  await page.goto("/scheme.html?authority=Adur");

  await page.getByRole("button", { name: "New route" }).click();
  await expect(page.getByText("Failed to load")).toBeVisible();

  // Other tools should still work
  await page.getByRole("button", { name: "New point" }).click();
  await clickMap(page, 500, 500);
  await page.getByRole("button", { name: "1) Untitled point" }).isVisible();
});

test("Redirected to homepage with error when incorrect authority given to scheme page", async ({
  page,
}) => {
  await page.goto("/scheme.html?authority=Adu");

  await expect(page.getByText("Authority name not found:")).toBeVisible();
  await expect(page.url()).toBe(
    "http://localhost:8080/?error=Authority+name+not+found%3A+Adu&style=streets"
  );
});

test("Upload invalid geojson to select authority page", async ({ page }) => {
  await page.goto("/");
  await page
    .getByLabel("Or upload an ATIP GeoJSON file")
    .setInputFiles("tests/data/Adu.json");

  await expect(
    page.getByText(
      "Couldn't load scheme from a file: Error: Unknown authority Adu"
    )
  ).toBeVisible();
});
