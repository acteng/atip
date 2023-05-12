import { test, expect } from '@playwright/test';

test('testing adding interventions, then deleting one, then adding another', async ({ page }) => {
    await page.goto('/scheme.html?authority=Derby#16.84/52.906457/-1.504519');
    await page.getByRole('region', { name: 'Map' }).waitFor();
    await page.getByRole('button', { name: 'New route' }).click();
    await page.getByRole('region', { name: 'Map' }).click({
        position: {
            x: 522,
            y: 468
        }
    });
    await page.getByRole('region', { name: 'Map' }).click({
        position: {
            x: 192,
            y: 513
        }
    });
    await page.getByRole('button', { name: 'Finish' }).click();
    await page.getByRole('button', { name: 'Save' }).click();
    await page.getByRole('button', { name: '1) Untitled route' }).click();
    await page.getByRole('button', { name: 'Delete' }).click();
    await page.getByRole('button', { name: 'New route' }).click();
    await page.getByRole('region', { name: 'Map' }).click({
        position: {
            x: 196,
            y: 375
        }
    });
    await page.getByRole('region', { name: 'Map' }).click({
        position: {
            x: 481,
            y: 399
        }
    });
    await page.getByRole('button', { name: 'Finish' }).click();

    await expect(page.getByRole('button', { name: '1) Untitled point' }).isVisible())
});
