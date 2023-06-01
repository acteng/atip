import { readFile } from "fs/promises";
import { test, expect, type Page } from "@playwright/test";
import { loadInitialPage } from "./shared.ts";

let page: Page;

test.beforeAll(async ({ browser }) => {
  page = await loadInitialPage(browser);
});

test("clearing all while a feature is open works", async () => {
  await page.getByRole("button", { name: "New point" }).click();

async function clickMap(page, x, y) {
  await page.getByRole("region", { name: "Map" }).click({
    position: { x, y },
  });
}

test("clearing all while a feature is open works", async ({ page }) => {
  await page.goto("/scheme.html?authority=Adur");
  await page.getByRole("button", { name: "New point" }).click();
  await clickMap(page, 500, 500);
  page.on("dialog", (dialog) => dialog.accept());
  await page.getByRole("button", { name: "Clear all" }).click();
  // Make sure AttributeMode resets to nothing being selected
  await expect(
    page.getByText("Click an object to fill out its attributes")
  ).toBeVisible();
});

test("creating a new point opens a form", async ({ page }) => {
  await page.goto("/scheme.html?authority=Adur");
  await page.getByRole("button", { name: "New point" }).click();
  await clickMap(page, 500, 500);

  await page.getByRole("button", { name: "1) Untitled point" }).isVisible();
  await page.getByLabel("Description:").click();
});

test("creating a new freehand polygon opens a form", async ({ page }) => {
  await page.goto("/scheme.html?authority=Adur");
  await page.getByRole("button", { name: "New polygon (freehand)" }).click();
  await clickMap(page, 500, 500);
  await clickMap(page, 600, 500);
  await clickMap(page, 600, 600);
  await page.getByRole("button", { name: "Finish" }).click();

  await page.getByRole("button", { name: "1) Untitled area" }).isVisible();
  await page.getByLabel("Description:").click();
});

test("creating a new snapped polygon opens a form", async ({ page }) => {
  await page.goto("/scheme.html?authority=Adur");
  await page.getByRole("button", { name: "New polygon (snapped)" }).click();
  await clickMap(page, 500, 500);
  await clickMap(page, 600, 500);
  await clickMap(page, 600, 600);
  await page.getByRole("button", { name: "Finish" }).click();

  await page.getByRole("button", { name: "1) Untitled area" }).isVisible();
  await page.getByLabel("Description:").click();
});

test("creating a new route opens a form", async ({ page }) => {
  await page.goto("/scheme.html?authority=Adur");
  await page.getByRole("button", { name: "New route" }).click();
  await clickMap(page, 500, 500);
  await clickMap(page, 600, 500);
  await page.getByRole("button", { name: "Finish" }).click();

  await page.getByRole("button", { name: "1) Untitled route" }).isVisible();
  await page.getByLabel("Description:").click();
});
