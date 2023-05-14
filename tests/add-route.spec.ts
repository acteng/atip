import { test, expect } from "@playwright/test";

test("testing add a route and save it", async ({ page }) => {
  await page.goto("/scheme.html?authority=Derby#16.84/52.906457/-1.504519");
  // wait for the map to load and interventions panel to appear
  await page
    .getByText("Click an intervention to fill out its attributes")
    .waitFor();
  // wait for router snapper to load so we can use route tool
  await page.getByText("Route tool loading...").waitFor({ state: "hidden" });

  await page.getByRole("button", { name: "New route" }).click();
  await page.getByRole("region", { name: "Map" }).click({
    position: {
      x: 522,
      y: 468,
    },
  });
  await page.getByRole("region", { name: "Map" }).click({
    position: {
      x: 192,
      y: 513,
    },
  });
  await page.getByRole("button", { name: "Finish" }).click();
  // wait to make sure intervention attributes appear
  await page.getByRole("button", { name: "Save" }).waitFor();
  await page.getByRole("button", { name: "Save" }).click();

  await expect(
    page.getByRole("button", { name: "1) Untitled route" })
  ).toBeVisible();
});
