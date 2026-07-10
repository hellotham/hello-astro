import { test, expect } from '@playwright/test'

test.describe('Markmap Mindmap E2E Tests', () => {
  test('should render Markmap dynamic container and svg elements', async ({ page }) => {
    await page.goto('./blog/2022-08-26-markmap-diagrams/')

    await expect(page).toHaveTitle(/Mind Map Diagram/)

    // Assert the container created by satteri-diagram exists
    const markmapContainer = page.locator('.markmap')
    await expect(markmapContainer.first()).toBeVisible()

    // Assert that the Markmap script renders the vector svg element
    const svgElement = markmapContainer.locator('svg').first()
    await expect(svgElement).toBeVisible()
  })
})
