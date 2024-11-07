import { expect, test, type Page } from "@playwright/test";
import { resetSketch, clickMap } from "./shared.js";

test.beforeEach(async ({ page }) => {
  await resetSketch(page);
});

test("creating a new point opens a form", async ({ page }) => {
  await page.getByRole("button", { name: "New point" }).click();
  await clickMap(page, 500, 500);
  await page.getByLabel("Name").fill("Point name");
  await page.getByLabel("Description").click();
  await page.getByRole("button", { name: "Finish" }).click();

  await page.getByRole("link", { name: "Point name" }).click();
});

test("creating a new freehand area opens a form", async ({ page }) => {
  await page.getByRole("button", { name: "New area (freehand)" }).click();
  await page.getByLabel("Name").fill("Area name");
  await page.getByLabel("Description").click();

  await clickMap(page, 500, 500);
  await clickMap(page, 400, 500);
  await clickMap(page, 400, 600);
  await page.getByRole("button", { name: "Finish" }).click();

  await page.getByRole("link", { name: "Area name" }).click();
});

test("creating a new freehand area and canceling doesn't save anything", async ({
  page,
}) => {
  await page.getByRole("button", { name: "New area (freehand)" }).click();
  await clickMap(page, 500, 500);
  await clickMap(page, 400, 500);
  await clickMap(page, 400, 600);

  await page.getByRole("button", { name: "Cancel" }).click();
  await expect(
    page.getByRole("link", { name: "Untitled area" }),
  ).not.toBeVisible();
});

// TODO Repeat canceling for other draw tools

test("creating a new snapped area opens a form", async ({ page }) => {
  await page.getByRole("button", { name: "New area (snapped)" }).click();
  await page.getByLabel("Name").fill("Area name");
  await page.getByLabel("Description").click();

  await clickMap(page, 500, 500);
  await clickMap(page, 400, 500);
  await clickMap(page, 400, 600);
  await page.getByRole("button", { name: "Finish" }).click();

  await page.getByRole("link", { name: "Area name" }).click();
});

test("creating a new route opens a form, and auto-fill sets its name", async ({
  page,
}) => {
  await page.getByRole("button", { name: "New route" }).click();
  await clickMap(page, 500, 500);
  await clickMap(page, 400, 500);
  await page.getByRole("button", { name: "Finish" }).click();

  // The route immediately has a name
  await page
    .getByRole("link", { name: "Route from ??? and Beach Green to ???" })
    .click();

  // Change it
  await page.getByLabel("Name").fill("New route name");
  await page.getByRole("button", { name: "Finish" }).click();
  await page.getByRole("link", { name: "New route name" }).click();

  // Then auto-fill to change it back
  await page.getByText("Auto-fill").click();
  await page.getByRole("button", { name: "Finish" }).click();
  await expect(
    page.getByRole("link", { name: "Route from ??? and Beach Green to ???" }),
  ).toBeVisible();
});

test("editing geometry of a area works", async ({ page }) => {
  // Create an area
  await page.getByRole("button", { name: "New area (snapped)" }).click();
  await clickMap(page, 241, 509);
  await clickMap(page, 235, 431);
  await clickMap(page, 465, 459);
  await page.getByRole("button", { name: "Finish" }).click();

  // Make sure the form is closed, back in list mode
  await expect(page.getByRole("link", { name: "Untitled area" })).toBeVisible();
  // Click the area to open the form
  await clickMap(page, 312, 501);
  await page.getByLabel("Description").click();
});

test("adding interventions, then deleting one, then adding another", async ({
  page,
}) => {
  await page.getByRole("button", { name: "New route" }).click();
  await clickMap(page, 522, 468);
  await clickMap(page, 192, 513);
  await page.getByRole("button", { name: "Finish" }).click();

  await page
    .getByRole("link", {
      name: "Route from ???, High Street, and West Street to ??? and Silverdale Drive",
    })
    .click();
  await page.getByRole("button", { name: "Delete" }).click();

  await page.getByRole("button", { name: "New route" }).click();
  await clickMap(page, 196, 375);
  await clickMap(page, 481, 399);
  await page.getByRole("button", { name: "Finish" }).click();

  await expect(
    page.getByRole("link", {
      name: "Route from Burnside Crescent and Carnforth Road to ??? and Brighton Road",
    }),
  ).toBeVisible();
});

test("escape key works from every mode", async ({ page }) => {
  // We start in list mode
  await expectListMode(page);
  // Pressing escape from there shouldn't do anything
  await page.keyboard.down("Escape");
  await expectListMode(page);

  // From each tool, make sure escape goes back to list mode
  for (let mode of [
    "New point",
    "New area (freehand)",
    "New area (snapped)",
    "New route",
    "Split route",
    "StreetView",
  ]) {
    await page.getByRole("button", { name: mode }).click();
    await page.keyboard.down("Escape");
    await expectListMode(page);
  }
});

// Assert the page is in the main list mode.
async function expectListMode(page: Page) {
  await expect(page.getByRole("button", { name: "New point" })).toBeEnabled();
}
