import { test, expect } from '@playwright/test';

test.describe('Homepage language selection', () => {
  test('default homepage loads', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Django Girls Tutorial/i);
  });

  test('user can pick English and is redirected to /en/', async ({ page }) => {
    await page.goto('/');

    // Adjust selector to match your actual language picker element
    const englishLink = page.getByRole('link', { name: /English/i });
    await englishLink.click();

    // Assert that the URL changes to /en/
    await expect(page).toHaveURL(/\/en\/$/);

    // Assert that the English homepage heading is visible
   await expect(
  page.getByRole('heading', { name: 'Welcome', exact: true })).toBeVisible();
  });
});