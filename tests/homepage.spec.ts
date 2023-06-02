import { test, expect } from "@playwright/test";

test("front page has welcome text", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: "Welcome to ATIP v2" })
  ).toBeVisible();
});

test("choosing a local authority and clicking start changes the url", async ({
  page,
}) => {
  await page.goto("/");
  await page
    .getByTestId("transport-authority")
    .fill("West Yorkshire Combined Authority");
  await page.getByRole("button", { name: "Start" }).click();
  await expect(page).toHaveURL(
    /.*scheme.html\?authority=West%20Yorkshire%20Combined%20Authority/
  );
});
