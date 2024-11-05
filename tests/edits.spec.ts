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

test("edit a freehand area, then cancel", async () => {
  await page.getByRole("button", { name: "New area (freehand)" }).click();
  await clickMap(page, 500, 500);
  await clickMap(page, 400, 500);
  await clickMap(page, 400, 600);
  await page.getByRole("button", { name: "Finish" }).click();

  await page.getByRole("link", { name: "Untitled area" }).click();
  await clickMap(page, 430, 530);
  // This button indicates the mode is working
  await expect(page.getByRole("button", { name: "Cancel" })).toBeVisible();

  await page.keyboard.down("Escape");
  await expectListMode();
});

test("edit a snapped area, then cancel", async () => {
  await page.getByRole("button", { name: "New area (snapped)" }).click();
  await clickMap(page, 500, 500);
  await clickMap(page, 400, 500);
  await clickMap(page, 400, 600);
  await page.getByRole("button", { name: "Finish" }).click();

  await page.getByRole("link", { name: "Untitled area" }).click();
  await clickMap(page, 430, 515);
  // This button indicates the mode is working
  await expect(page.getByRole("button", { name: "Cancel" })).toBeVisible();

  await page.keyboard.down("Escape");
  await expectListMode();
});

// TODO Edit each type of object without saving, and verify the edits are
// retained. Or cancel and make sure they're reverted. (How to test for
// geometry changes?)

test("edit a route, then cancel", async () => {
  await page.getByRole("button", { name: "New route" }).click();
  await clickMap(page, 500, 500);
  await clickMap(page, 400, 500);
  await page.getByRole("button", { name: "Finish" }).click();

  await page
    .getByRole("link", { name: "Route from ??? and Beach Green to ???" })
    .click();
  await clickMap(page, 442, 492);
  // This button indicates the mode is working
  await expect(page.getByRole("button", { name: "Cancel" })).toBeVisible();

  await page.keyboard.down("Escape");
  await expectListMode();
});

// TODO Flaky only on GH Actions
test.skip("the viewport changes only once when opening a form", async () => {
  let defaultViewport = new URL(page.url()).hash;

  // Create a point, and make sure the viewport hasn't changed
  await page.getByRole("button", { name: "New point" }).click();
  await clickMap(page, 500, 500);
  await expect.soft(new URL(page.url()).hash).toEqual(defaultViewport);

  // Open the form from the sidebar. The viewport should change
  await page.getByRole("link", { name: "Untitled point" }).click();
  // The zoom effect is set to happen over 500ms, so wait a bit
  await page.waitForTimeout(700);
  let pointViewport = new URL(page.url()).hash;
  await expect(pointViewport).not.toEqual(defaultViewport);

  // Zoom in on the map without closing the form. The viewport should again differ.
  await page.getByRole("region", { name: "Map" }).hover();
  await page.mouse.wheel(0, -100);
  // The above scroll doesn't auto-wait for anything
  await page.waitForTimeout(1000);
  let customViewport = new URL(page.url()).hash;
  await expect.soft(customViewport).not.toEqual(pointViewport);

  // Interact with the form, which is already open. The viewport should stay the same.
  await page.getByText("Crossing", { exact: true }).click();
  // If we're incorrectly changing the viewport here, wait for the effect to happen
  await page.waitForTimeout(700);
  await expect(new URL(page.url()).hash).toEqual(customViewport);
});

// Assert the page is in the main list mode.
async function expectListMode() {
  await expect(
    page.getByRole("button", { name: "Zoom to show entire boundary" }),
  ).toBeVisible();
}
