import { test, expect } from '@playwright/test'

test.describe('Documentation Pages E2E Tests', () => {
  test('should load documentation and display sidebar navigation', async ({ page }) => {
    await page.goto('./doc/introduction/')

    // Page title verification
    await expect(page).toHaveTitle(/Introduction/)

    // Check main layout areas
    const sidebar = page.locator('aside#grid-left')
    await expect(sidebar).toBeVisible()

    // Check sidebar navigation item exists
    const introLink = sidebar.getByRole('link', { name: 'Introduction' })
    await expect(introLink).toBeVisible()

    // Assert that standard documentation article structure is visible
    const article = page.locator('article')
    await expect(article).toBeVisible()
    await expect(article.locator('h1')).toContainText(/Introduction/)
  })
})
