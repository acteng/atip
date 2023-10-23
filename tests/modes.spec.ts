import { expect, test, type Page } from "@playwright/test";
import {
  clearExistingInterventions,
  clickMap,
  loadInitialPageFromBrowser,
} from "./shared.js";

let page: Page;

test.beforeAll(async ({ browser }) => {
  page = await loadInitialPageFromBrowser(browser);
});

test.beforeEach(async () => {
  await clearExistingInterventions(page);
});

test("creating a new point opens a form", async () => {
  await page.getByRole("button", { name: "New point" }).click();
  await clickMap(page, 500, 500);

  await expect(page.getByText("No name")).toBeVisible();
  await page.getByLabel("Description").click();
});

test("creating a new freehand polygon opens a form", async () => {
  await page.getByRole("button", { name: "New polygon (freehand)" }).click();
  await clickMap(page, 500, 500);
  await clickMap(page, 400, 500);
  await clickMap(page, 400, 600);
  await page.getByRole("button", { name: "Finish" }).click();

  await expect(page.getByText("No name")).toBeVisible();
  await page.getByLabel("Description").click();
});

test("creating a new freehand polygon and canceling doesn't save anything", async () => {
  await page.getByRole("button", { name: "New polygon (freehand)" }).click();
  await clickMap(page, 500, 500);
  await clickMap(page, 400, 500);
  await clickMap(page, 400, 600);

  await page.getByRole("button", { name: "Cancel" }).click();
  await expect(
    page.getByRole("link", { name: "Untitled area" })
  ).not.toBeVisible();
});

// TODO Repeat canceling for other draw tools

test("creating a new snapped polygon opens a form", async () => {
  await page.getByRole("button", { name: "New polygon (snapped)" }).click();
  await clickMap(page, 500, 500);
  await clickMap(page, 400, 500);
  await clickMap(page, 400, 600);
  await page.getByRole("button", { name: "Finish" }).click();

  await expect(page.getByText("No name")).toBeVisible();
  await page.getByLabel("Description").click();
});

test("creating a new route opens a form, and auto-fill sets its name", async () => {
  await page.getByRole("button", { name: "New route" }).click();
  await clickMap(page, 500, 500);
  await clickMap(page, 400, 500);
  await page.getByRole("button", { name: "Finish" }).click();

  // The route immediately has a name
  await expect(
    page.getByText("Editing Route from ??? and Beach Green to ???")
  ).toBeVisible();

  // Change it
  await page.locator('input[type="text"]').fill("New route name");
  await expect(page.getByText("Editing New route name")).toBeVisible();

  // Then auto-fill to change it back
  await page.getByText("Auto-fill").click();
  await expect(
    page.getByText("Editing Route from ??? and Beach Green to ???")
  ).toBeVisible();
});

test("editing geometry of a polygon works", async () => {
  // Create a polygon
  await page.getByRole("button", { name: "New polygon (snapped)" }).click();
  await clickMap(page, 241, 509);
  await clickMap(page, 235, 431);
  await clickMap(page, 465, 459);
  await page.getByRole("button", { name: "Finish" }).click();
  await expect(page.getByText("Editing Untitled area")).toBeVisible();
  await page.getByLabel("Description").click();

  // Click off the polygon to close the form
  await clickMap(page, 284, 284);
  // Make sure the form is closed
  await expect(page.getByLabel("Description")).not.toBeVisible();

  // Click the polygon to open the form
  await clickMap(page, 312, 501);
  await page.getByLabel("Description").click();

  // Edit geometry, and click the polygon again
  await page.getByRole("button", { name: "Edit geometry" }).click();
  await clickMap(page, 312, 501);
  // This button indicates the mode is working
  await expect(page.getByRole("button", { name: "Finish" })).toBeVisible();
});

test("adding interventions, then deleting one, then adding another", async () => {
  await page.getByRole("button", { name: "New route" }).click();
  await clickMap(page, 522, 468);
  await clickMap(page, 192, 513);
  await page.getByRole("button", { name: "Finish" }).click();
  await page.getByRole("button", { name: "Save" }).click();
  await page
    .getByRole("link", {
      name: "Route from High Street and West Street to ??? and Silverdale Drive",
    })
    .click();
  await page.getByRole("button", { name: "Delete" }).click();
  await page.getByRole("button", { name: "New route" }).click();
  await clickMap(page, 196, 375);
  await clickMap(page, 481, 399);
  await page.getByRole("button", { name: "Finish" }).click();
  await page.getByRole("button", { name: "Save" }).click();

  await expect(
    page.getByRole("link", {
      name: "Route from Burnside Crescent and Carnforth Road to ??? and Brighton Road",
    })
  ).toBeVisible();
});

test("escape key works from every mode", async () => {
  // We start in list mode
  await expectListMode();
  // Pressing escape from there shouldn't do anything
  await page.keyboard.down("Escape");
  await expectListMode();

  // From each tool, make sure escape goes back to list mode
  for (let mode of [
    "New point",
    "New polygon (freehand)",
    "New polygon (snapped)",
    "New route",
    "Split route",
    "StreetView",
  ]) {
    await page.getByRole("button", { name: mode }).click();
    await page.keyboard.down("Escape");
    await expectListMode();
  }
});

test("edit a point, then cancel", async () => {
  await page.getByRole("button", { name: "New point" }).click();
  await clickMap(page, 500, 500);

  await page.getByRole("button", { name: "Edit geometry" }).click();
  // This button indicates the mode is working
  await expect(page.getByRole("button", { name: "Cancel" })).toBeVisible();

  await page.keyboard.down("Escape");
  await expect(page.getByText("Editing Untitled point")).toBeVisible();
});

test("edit a freehand polygon, then cancel", async () => {
  await page.getByRole("button", { name: "New polygon (freehand)" }).click();
  await clickMap(page, 500, 500);
  await clickMap(page, 400, 500);
  await clickMap(page, 400, 600);
  await page.getByRole("button", { name: "Finish" }).click();

  await page.getByRole("button", { name: "Edit geometry" }).click();
  await clickMap(page, 430, 530);
  // This button indicates the mode is working
  await expect(page.getByRole("button", { name: "Cancel" })).toBeVisible();

  await page.keyboard.down("Escape");
  await expect(page.getByText("Editing Untitled area")).toBeVisible();
});

test("edit a snapped polygon, then cancel", async () => {
  await page.getByRole("button", { name: "New polygon (snapped)" }).click();
  await clickMap(page, 500, 500);
  await clickMap(page, 400, 500);
  await clickMap(page, 400, 600);
  await page.getByRole("button", { name: "Finish" }).click();

  await page.getByRole("button", { name: "Edit geometry" }).click();
  await clickMap(page, 430, 515);
  // This button indicates the mode is working
  await expect(page.getByRole("button", { name: "Cancel" })).toBeVisible();

  await page.keyboard.down("Escape");
  await expect(page.getByText("Editing Untitled area")).toBeVisible();
});

// TODO Edit each type of object without saving, and verify the edits are
// retained. Or cancel and make sure they're reverted. (How to test for
// geometry changes?)

test("edit a route, then cancel", async () => {
  await page.getByRole("button", { name: "New route" }).click();
  await clickMap(page, 500, 500);
  await clickMap(page, 400, 500);
  await page.getByRole("button", { name: "Finish" }).click();

  await page.getByRole("button", { name: "Edit geometry" }).click();
  await clickMap(page, 442, 492);
  // This button indicates the mode is working
  await expect(page.getByRole("button", { name: "Cancel" })).toBeVisible();

  await page.keyboard.down("Escape");
  await expect(
    page.getByText("Editing Route from ??? and Beach Green to ???")
  ).toBeVisible();
});

test("the viewport changes only once when opening a form", async () => {
  let defaultViewport = new URL(page.url()).hash;

  // Create a point, and make sure the viewport hasn't changed
  await page.getByRole("button", { name: "New point" }).click();
  await clickMap(page, 500, 500);
  expect(new URL(page.url()).hash).toEqual(defaultViewport);

  // Close the form
  await page.getByRole("button", { name: "Save" }).click();

  // Open the form from the sidebar. The viewport should change
  await page.getByRole("link", { name: "Untitled point" }).click();
  // The zoom effect is set to happen over 500ms, so wait a bit
  await page.waitForTimeout(700);
  let pointViewport = new URL(page.url()).hash;
  expect(pointViewport).not.toEqual(defaultViewport);

  // Zoom in on the map without closing the form. The viewport should again differ.
  await page.getByRole("region", { name: "Map" }).hover();
  await page.mouse.wheel(0, -100);
  // The above scroll doesn't auto-wait for anything
  await page.waitForTimeout(1000);
  let customViewport = new URL(page.url()).hash;
  expect.soft(customViewport).not.toEqual(pointViewport);

  // Interact with the form, which is already open. The viewport should stay the same.
  await page.getByText("Crossing", { exact: true }).click();
  // If we're incorrectly changing the viewport here, wait for the effect to happen
  await page.waitForTimeout(700);
  expect(new URL(page.url()).hash).toEqual(customViewport);
});

// Assert the page is in the main list mode.
async function expectListMode() {
  await expect(
    page.getByRole("heading", { name: "ATIP Scheme Sketcher" })
  ).toBeVisible();
}
