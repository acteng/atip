import { readFile } from "fs/promises";
import { test, expect } from "@playwright/test";

test("clearing all while a feature is open works", async ({ page }) => {
  await page.goto("/scheme.html?authority=North Somerset");
  await page.getByRole("button", { name: "New point" }).click();
  await page.getByRole("region", { name: "Map" }).click({
    position: {
      x: 500,
      y: 500,
    },
  });
  page.on("dialog", (dialog) => dialog.accept());
  await page.getByRole("button", { name: "Clear all" }).click();
  // Make sure AttributeMode resets to nothing being selected
  await expect(
    page.getByText("Click an intervention to fill out its attributes")
  ).toBeVisible();
});
