import { readFile } from "fs/promises";
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

test("Overfilling storage opens an alert", async () => {
    let oneMbOfTheLetterA: string = await readFile("tests/data/a.tx", { encoding: "utf8" });
    await page.getByRole("button", { name: "New polygon (freehand)" }).click();
    await clickMap(page, 500, 500);
    await clickMap(page, 400, 501);
    await clickMap(page, 400, 502);
    await clickMap(page, 400, 503);
    await clickMap(page, 400, 504);
    await clickMap(page, 400, 505);
    await clickMap(page, 400, 506);
    await clickMap(page, 400, 507);
    await clickMap(page, 400, 508);
    await clickMap(page, 400, 600);
    await page.getByLabel('Name').fill(
        oneMbOfTheLetterA + oneMbOfTheLetterA + oneMbOfTheLetterA + oneMbOfTheLetterA + oneMbOfTheLetterA +
        oneMbOfTheLetterA + oneMbOfTheLetterA + oneMbOfTheLetterA + oneMbOfTheLetterA + oneMbOfTheLetterA
    );
    await page.getByRole("button", { name: "Finish" }).click();

    await expect(page.getByText("No name")).toBeVisible();
    await page.getByLabel("Description").click();
});