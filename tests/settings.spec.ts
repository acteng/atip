import { expect, test } from "@playwright/test";

test("changed settings are preserved across refresh", async ({ page }) => {
  await page.goto("/scheme.html?authority=Adur");
  await page.getByRole("button", { name: "New route" }).click();
  await expect(page.getByLabel("Avoid doubling back")).not.toBeChecked();
  await page.getByLabel("Avoid doubling back").check();

  await page.reload();
  await page.getByRole("button", { name: "New route" }).click();
  await expect(page.getByLabel("Avoid doubling back")).toBeChecked();
});
