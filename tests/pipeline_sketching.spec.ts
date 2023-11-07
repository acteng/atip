import { expect, test, type Page } from "@playwright/test";
import { clearExistingInterventions, drawPoint } from "./pipeline_sketching.js";
import { clickMap, loadPipelineSketchPageFromBrowser } from "./shared.js";

let page: Page;

test.beforeAll(async ({ browser }) => {
  page = await loadPipelineSketchPageFromBrowser(browser);
});

test.beforeEach(async () => {
  await clearExistingInterventions(page);
});

test("creating a new point in pipeline mode opens a form", async () => {
  await page.getByRole("button", { name: "New point" }).click();
  await clickMap(page, 500, 500);

  await expect(page.getByLabel("Description")).toBeVisible();
});

test("creating a new freehand polygon and canceling doesn't save anything", async () => {
  await page.getByRole("button", { name: "New polygon (freehand)" }).click();
  await clickMap(page, 500, 500);
  await clickMap(page, 400, 500);
  await clickMap(page, 400, 600);

  await page.getByRole("button", { name: "Cancel" }).click();
  await page.getByText("Unnamed Scheme").click();

  await expect(
    page.getByRole("button", { name: "Delete scheme" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Untitled area" })
  ).not.toBeVisible();
  await page.getByText("Unnamed Scheme").click();
});

test("deleting the last scheme", async () => {
  await page.getByText("Unnamed Scheme").click();

  await expect(
    page.getByRole("button", { name: "Delete scheme" })
  ).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Delete scheme" })
  ).not.toBeEnabled();
  await page.getByText("Unnamed Scheme").click();
});

test("deleting an empty scheme", async () => {
  await page.getByRole("button", { name: "Add scheme" }).click();
  await page.getByText("Unnamed Scheme 1").click();
  await expect(
    page.getByRole("button", { name: "Delete scheme" })
  ).toBeVisible();
  await page.getByRole("button", { name: "Delete scheme" }).click();
  await page
    .getByRole("button", {
      name: "Delete this scheme and related interventions",
    })
    .click();

  await expect(page.getByText("Unnamed Scheme 1")).not.toBeVisible();
});

test("deleting a non-empty scheme", async () => {
  await page.getByRole("button", { name: "Add scheme" }).click();

  await drawPoint(page);
  await drawPoint(page, "Unnamed Scheme 1");

  await page.getByText("Unnamed Scheme 1").click();

  await expect(
    page.getByRole("button", { name: "Delete scheme" })
  ).toBeVisible();
  await page.getByRole("button", { name: "Delete scheme" }).click();
  await page
    .getByRole("button", {
      name: "Delete this scheme and related interventions",
    })
    .click();

  await expect(page.getByText("Unnamed Scheme 1")).not.toBeVisible();
});

test("split route within scheme", async () => {
  await page.getByRole("button", { name: "Add scheme" }).click();

  await page.getByRole("button", { name: "New route" }).click();
  await clickMap(page, 522, 468);
  await clickMap(page, 192, 513);
  await page.getByRole("button", { name: "Finish" }).click();
  await page.getByLabel("Scheme name:").selectOption("Unnamed Scheme 1");
  await page.getByRole("button", { name: "Save" }).click();

  await page.getByText("Unnamed Scheme 1").click();
  await expect(
    page.getByRole("link", {
      name: "Route from ",
    })
  ).toHaveCount(1);
  await page.getByText("Unnamed Scheme 1").click();

  await page.getByRole("button", { name: "Split route" }).click();
  await clickMap(page, 512, 468);
  await page.getByRole("button", { name: "Finish" }).click();

  await page.getByText("Unnamed Scheme 1").click();
  await expect(
    page.getByRole("link", {
      name: "Route from ",
    })
  ).toHaveCount(2);
  await page.getByText("Unnamed Scheme 1").click();
});

test("renaming a scheme which contains features", async () => {
  await page.getByRole("button", { name: "Add scheme" }).click();

  const defaultName = "Unnamed Scheme 1";
  const newName = "Renamed Scheme 1";

  await drawPoint(page, defaultName);

  await page.getByText(defaultName).click();
  //TODO: make this less flaky by not using 'first'
  await page.getByRole("textbox").first().fill(newName);
  await page.keyboard.down("Tab");

  await expect(
    page.getByRole("link", {
      name: "Untitled point",
    })
  ).toBeAttached();
  await page.getByText(newName).click();
});
