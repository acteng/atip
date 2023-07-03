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
