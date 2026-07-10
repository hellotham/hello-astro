import { test, expect } from '@playwright/test'

test.describe('Custom 404 Error Page E2E Tests', () => {
  test('should render 404 error page and redirect to home', async ({ page }) => {
    // Navigate to a non-existent route
    await page.goto('./404-nonexistent-page-url')

    // Verify 404 page title
    await expect(page).toHaveTitle(/404: Not [fF]ound/)

    // Assert the error illustration is present
    const errorHeading = page.locator('h2', { hasText: '404: Not found' })
    await expect(errorHeading).toBeVisible()

    // Assert that the navbar exists
    const navBar = page.locator('nav > div').first()
    await expect(navBar).toBeVisible()

    // Click Home link in navbar to return home
    const homeLink = navBar.getByRole('link', { name: 'Home' }).first()
    await expect(homeLink).toBeVisible()
    await homeLink.click()
    await expect(page).toHaveURL(/\/hello-astro\/\??/)
  })
})
