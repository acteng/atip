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

test("clearing all is disabled while a feature is in use", async () => {
  await page.getByRole("button", { name: "New point" }).click();
  expect(
    await page.getByRole("button", { name: "Clear all" }).isDisabled()
  ).toBe(true);
});

test("clearing all resets to nothing being selected", async () => {
  await page.getByRole("button", { name: "New point" }).click();
  await clickMap(page, 500, 500);

  await expect(
    page.getByText("Edit attributes to the left, or click another object")
  ).toBeVisible();

  await clearExistingInterventions(page);

  await expectNeutralAttributeMode();
});

test("creating a new point opens a form", async () => {
  await page.getByRole("button", { name: "New point" }).click();
  await clickMap(page, 500, 500);

  await page.getByRole("button", { name: "1) Untitled point" }).isVisible();
  await page.getByLabel("Description:").click();
});

test("creating a new freehand polygon opens a form", async () => {
  await page.getByRole("button", { name: "New polygon (freehand)" }).click();
  await clickMap(page, 500, 500);
  await clickMap(page, 400, 500);
  await clickMap(page, 400, 600);
  await page.getByRole("button", { name: "Finish" }).click();

  await page.getByRole("button", { name: "1) Untitled area" }).isVisible();
  await page.getByLabel("Description:").click();
});

test("creating a new freehand polygon and switching modes doesn't lose changes", async () => {
  await page.getByRole("button", { name: "New polygon (freehand)" }).click();
  await clickMap(page, 500, 500);
  await clickMap(page, 400, 500);
  await clickMap(page, 400, 600);

  // Switch modes without finishing
  await page.getByRole("button", { name: "New point" }).click();

  await page.getByRole("button", { name: "1) Untitled area" }).click();
  await page.getByLabel("Description:").click();
});

test("creating a new freehand polygon and canceling doesn't save anything", async () => {
  await page.getByRole("button", { name: "New polygon (freehand)" }).click();
  await clickMap(page, 500, 500);
  await clickMap(page, 400, 500);
  await clickMap(page, 400, 600);

  await page.getByRole("button", { name: "Cancel" }).click();
  await expect(page.getByText("0 objects")).toBeVisible();
});

// TODO Repeat switching modes and canceling for other draw tools

test("creating a new snapped polygon opens a form", async () => {
  await page.getByRole("button", { name: "New polygon (snapped)" }).click();
  await clickMap(page, 500, 500);
  await clickMap(page, 400, 500);
  await clickMap(page, 400, 600);
  await page.getByRole("button", { name: "Finish" }).click();

  await page.getByRole("button", { name: "1) Untitled area" }).isVisible();
  await page.getByLabel("Description:").click();
});

test("creating a new route opens a form, and auto-fill sets its name", async () => {
  await page.getByRole("button", { name: "New route" }).click();
  await clickMap(page, 500, 500);
  await clickMap(page, 400, 500);
  await page.getByRole("button", { name: "Finish" }).click();

  await page.getByRole("button", { name: "1) Untitled route" }).isVisible();
  await page.getByLabel("Description:").click();

  // This button only works after RouteInfo is loaded. And note because the
  // button is located inside a label, getByRole doesn't seem to work.
  await page.getByText("Auto-fill").click();
  await page
    .getByRole("button", {
      name: "1) Route from ??? and Brighton Road to Emerald Quay and Harbour Way",
    })
    .isVisible();
});

test("editing geometry of a polygon works", async () => {
  // Create a polygon
  await page.getByRole("button", { name: "New polygon (snapped)" }).click();
  await clickMap(page, 241, 579);
  await clickMap(page, 235, 431);
  await clickMap(page, 465, 459);
  await page.getByRole("button", { name: "Finish" }).click();
  await page.getByRole("button", { name: "1) Untitled area" }).isVisible();
  await page.getByLabel("Description:").click();

  // Click off the polygon to close the form
  await clickMap(page, 284, 284);
  // Make sure the form is closed
  await expect(page.getByLabel("Description:")).not.toBeVisible();

  // Click the polygon to open the form
  await clickMap(page, 312, 501);
  await page.getByLabel("Description:").click();

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
  await page.getByRole("button", { name: "1) Untitled route" }).click();
  await page.getByRole("button", { name: "Delete" }).click();
  await page.getByRole("button", { name: "New route" }).click();
  await clickMap(page, 196, 375);
  await clickMap(page, 481, 399);
  await page.getByRole("button", { name: "Finish" }).click();

  await page.getByRole("button", { name: "1) Untitled route" }).isVisible();
});

test("add a route and save it", async () => {
  await page.getByRole("button", { name: "New route" }).click();
  await clickMap(page, 522, 468);
  await clickMap(page, 192, 513);
  await page.getByRole("button", { name: "Finish" }).click();
  // wait to make sure intervention attributes appear
  await page.getByRole("button", { name: "Save" }).waitFor();
  await page.getByRole("button", { name: "Save" }).click();

  await expect(
    page.getByRole("button", { name: "1) Untitled route" })
  ).toBeVisible();
});

test("escape key works from every mode", async () => {
  // We start in edit attrbute mode
  await expectNeutralAttributeMode();
  // Pressing escape from there shouldn't do anything
  await page.keyboard.down("Escape");
  await expectNeutralAttributeMode();

  // From each tool, make sure escape goes back to attribute mode
  for (let mode of [
    "New point",
    "New polygon (freehand)",
    "New polygon (snapped)",
    "New route",
    "Split route",
    "Street View",
  ]) {
    await page.getByRole("button", { name: mode }).click();
    await page.keyboard.down("Escape");
    await expectNeutralAttributeMode();
  }

  // Edit geometry is different -- escape there should return to this mode, not attribute mode
  await page.getByRole("button", { name: "Edit geometry" }).click();
  await expectEditGeometryMode();
  await page.keyboard.down("Escape");
  await expectEditGeometryMode();
});

test("edit a point, then cancel", async () => {
  await page.getByRole("button", { name: "New point" }).click();
  await clickMap(page, 500, 500);

  await page.getByRole("button", { name: "Edit geometry" }).click();
  await clickMap(page, 500, 500);
  // This button indicates the mode is working
  await expect(page.getByRole("button", { name: "Cancel" })).toBeVisible();

  await page.keyboard.down("Escape");
  await expectEditGeometryMode();
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
  await expectEditGeometryMode();
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
  await expectEditGeometryMode();
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
  await expectEditGeometryMode();
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
  await page.getByRole("button", { name: "1) Untitled point" }).click();
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

test("switching between modes saves, doesn't save anything if no actions taken", async () => {
  await page.getByRole("button", { name: "New polygon (snapped)" }).click();
  await clickMap(page, 500, 500);
  await clickMap(page, 400, 500);
  await clickMap(page, 400, 600);

  await page.getByRole("button", { name: "New route" }).click();
  await expect(
    page.getByRole("button", { name: "1) Untitled area" })
  ).toBeVisible();

  await page.getByRole("button", { name: "New polygon (snapped)" }).click();
  await expect(
    page.getByRole("button", { name: "2) Untitled route" })
  ).not.toBeVisible();
});

// Assert the page is in attribute mode with nothing selected.
async function expectNeutralAttributeMode() {
  await expect(
    page.getByText("Click an object to fill out its attributes")
  ).toBeVisible();
}

// Assert the page is in edit geometry mode with nothing selected.
async function expectEditGeometryMode() {
  await expect(
    page.getByText("Click an object to edit its geometry")
  ).toBeVisible();
}
