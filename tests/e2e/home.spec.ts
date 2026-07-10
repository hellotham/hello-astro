import { test, expect } from '@playwright/test'

test.describe('Home Page E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('./')
  })

  test('should load home page and have correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Hello Astro/)
  })

  test('should display main navigation menu', async ({ page }) => {
    const nav = page.locator('nav > div').first()
    await expect(nav).toBeVisible()
    await expect(nav.getByRole('link', { name: 'About' })).toBeVisible()
    await expect(nav.getByRole('link', { name: 'Blog' })).toBeVisible()
    await expect(nav.getByRole('link', { name: 'Docs' })).toBeVisible()
  })

  test('should toggle dark/light theme correctly', async ({ page }) => {
    const htmlElement = page.locator('html')
    const themeBtn = page.locator('button#menu-button')
    await expect(themeBtn).toBeVisible()

    // Click theme button to open dropdown
    await themeBtn.click()
    const darkOption = page.locator('li', { hasText: 'Dark' })
    await expect(darkOption).toBeVisible()

    // Select Dark mode and reload (triggered automatically by code reload)
    await darkOption.click()
    await expect(htmlElement).toHaveClass(/dark/)

    // Click theme button again, select Light mode
    await themeBtn.click()
    const lightOption = page.locator('li', { hasText: 'Light' })
    await expect(lightOption).toBeVisible()
    await lightOption.click()
    await expect(htmlElement).not.toHaveClass(/dark/)
  })

  test('should execute full-text client search', async ({ page }) => {
    const searchInput = page.locator('input#lunrsearch')
    const searchButton = page.locator('button#lunrbutton')
    const searchResultsModal = page.locator('#lunrsearchresults')

    await expect(searchInput).toBeVisible()
    await expect(searchButton).toBeVisible()

    // Perform search query
    await searchInput.fill('mermaid')
    await searchButton.click()

    // Verify search modal is visible and contains search results
    await expect(searchResultsModal).toBeVisible()
    const resultItem = searchResultsModal.locator('li').first()
    await expect(resultItem).toBeVisible()
    await expect(resultItem).toContainText(/Mermaid/)
  })
})
