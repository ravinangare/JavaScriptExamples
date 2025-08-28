// playwright-annotations.spec.js
const { test, expect } = require('@playwright/test');

// Grouping tests with describe
test.describe('Login Feature Tests', () => {
  
  // Runs before each test in this group
  test.beforeEach(async ({ page }) => {
    await page.goto('https://example.com/login');
  });

  // Normal test
  test('@sanity should login with valid credentials', async ({ page }) => {
    await page.fill('#username', 'admin');
    await page.fill('#password', 'password123');
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL(/dashboard/);
  });

  // Skipped test
  test.skip('should not login with invalid credentials', async ({ page }) => {
    // This test is skipped
  });

  // Only this test will run
  // test.only('should check forgot password link', async ({ page }) => {
  //   await expect(page.locator('text=Forgot Password')).toBeVisible();
  // });

  // Marked as fixme
  test.fixme('should display error message on failed login');

  // Slow test (e.g., for mobile or large DOMs)
  test('@regression slow test example', async ({ page }) => {
    test.slow(); // increases timeout
    await page.waitForTimeout(5000); // simulate slow test
    expect(true).toBe(true);
  });

});
