import { expect, test, type Page } from "@playwright/test";
import { clickMap } from "./shared.js";

let page: Page;

test.beforeEach(async ({ browser }) => {
  page = await loadInitialPageFromBrowser(browser);
  await page.evaluate(() => window.localStorage.clear());
});

test("exceeding local storage quota displays an error", async () => {
  // Get super close to the 5MB limit
  await page.evaluate(() =>
    window.localStorage.setItem("huge", "x".repeat(4.999 * 1024 * 1024)),
  );

  // Draw one simple route, causing quota to go over
  await page.getByRole("button", { name: "New route" }).click();
  await clickMap(page, 500, 500);
  await clickMap(page, 400, 500);
  await page.getByRole("button", { name: "Finish" }).click();

  await expect(page.getByText("Local Storage Quota Exceeded")).toBeVisible();
});

test("exceeding local storage quota allows user to clear local storage", async () => {
  // Get super close to the 5MB limit
  await page.evaluate(() =>
    window.localStorage.setItem("huge", "x".repeat(4.999 * 1024 * 1024)),
  );

  // Draw one simple route, causing quota to go over
  await page.getByRole("button", { name: "New route" }).click();
  await clickMap(page, 500, 500);
  await clickMap(page, 400, 500);
  await page.getByRole("button", { name: "Finish" }).click();

  await page.getByText("Delete All Sketch Data From Browser").click();

  // See that we're now able to set the item without surpassing the quota
  await page.evaluate(() =>
    window.localStorage.setItem("huge", "x".repeat(4.999 * 1024 * 1024)),
  );
  await expect(
    page.getByText("Local Storage Quota Exceeded"),
  ).not.toBeVisible();
});

test("exceeding local storage quota allows user to clear specific local storage items, including other LAs", async () => {
  // Get super close to the 5MB limit
  await page.evaluate(() =>
    window.localStorage.setItem("huge", "x".repeat(4.999 * 1024 * 1024)),
  );

  await page.goto("/scheme.html?authority=LAD_Worthing");

  await checkPageLoaded(page);

  // Draw one simple route, causing quota to go over
  await page.getByRole("button", { name: "New route" }).click();
  await clickMap(page, 500, 500);
  await clickMap(page, 400, 500);
  await page.getByRole("button", { name: "Finish" }).click();

  await page
    .getByRole("button", { name: "Remove stored item for huge" })
    .click();
  await page.getByRole("button", { name: "X" }).click();

  // Check that the previous route still exists
  await expect(
    page.getByRole("link", {
      name: "Route from Henty Road and South Farm Road to Canterbury Road and Cranmer Road",
    }),
  ).toBeVisible();

  // Create a second route and make sure quota isn't exceeded
  await page.getByRole("button", { name: "New route" }).click();
  await clickMap(page, 450, 450);
  await clickMap(page, 490, 490);
  await page.getByRole("button", { name: "Finish" }).click();

  await expect(
    page.getByText("Local Storage Quota Exceeded"),
  ).not.toBeVisible();
});

test("exceeding local storage quota allows user to clear local storage, including other LAs", async () => {
  // Get super close to the 5MB limit
  await page.evaluate(() =>
    window.localStorage.setItem("huge", "x".repeat(4.999 * 1024 * 1024)),
  );

  await page.goto("/scheme.html?authority=LAD_Worthing");

  await checkPageLoaded(page);

  // Draw one simple route, causing quota to go over
  await page.getByRole("button", { name: "New route" }).click();
  await clickMap(page, 500, 500);
  await clickMap(page, 400, 500);
  await page.getByRole("button", { name: "Finish" }).click();

  await page.getByText("Delete All Sketch Data From Browser").click();

  // See that we're now able to set the item without exceeding the quota
  await page.evaluate(() =>
    window.localStorage.setItem("huge", "x".repeat(4.999 * 1024 * 1024)),
  );
  await expect(
    page.getByText("Local Storage Quota Exceeded"),
  ).not.toBeVisible();
});
