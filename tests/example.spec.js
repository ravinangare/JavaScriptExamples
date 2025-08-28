// @ts-check
import { test, expect } from '@playwright/test';

test('@regression has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('@sanity get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('test',{tag: '@sanity'}, async ({ page }) => {
  await page.goto('https://utkarshaaacademy.com/');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Book Your Demo Session' }).click();
  const page1 = await page1Promise;
  await expect(page1.getByRole('heading', { name: 'Software Testing Demo Session' })).toBeVisible();
});