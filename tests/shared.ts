import { expect, type Page } from "@playwright/test";
import { v4 as uuidv4 } from "uuid";

// Starts a blank file with a unique name, and waits for everything to be ready. Returns the filename.
export async function resetSketch(
  page: Page,
  schema: string = "v1",
): Promise<string> {
  await page.goto(`/files.html?authority=LAD_Adur&schema=${schema}`);

  let filename = uuidv4();
  page.on("dialog", (dialog) => dialog.accept(filename));
  await page.getByRole("button", { name: "Create new file" }).click();
  await expect(page).toHaveURL(/.*scheme.html\?authority=LAD_Adur/);

  // Wait for the route snapper to load
  await expect(page.getByRole("button", { name: "New route" })).toBeEnabled();

  return filename;
}

export async function clickMap(page: Page, x: number, y: number) {
  await page.getByRole("region", { name: "Map" }).click({
    position: { x, y },
  });
}

export async function getLocalStorage(page: Page, key: string): Promise<any> {
  let string = await page.evaluate(
    (key) => window.localStorage.getItem(key),
    key,
  );
  return JSON.parse(string!);
}
