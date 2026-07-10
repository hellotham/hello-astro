import { test, expect } from '@playwright/test'

test.describe('Leaflet Map E2E Tests', () => {
  test('should load map container and render Leaflet layers', async ({ page }) => {
    await page.goto('./contact/')

    // Assert Leaflet container exists
    const mapContainer = page.locator('.leaflet-container')
    await expect(mapContainer).toBeVisible()

    // Assert marker pins are loaded in the DOM
    const marker = mapContainer.locator('.leaflet-marker-icon').first()
    await expect(marker).toBeAttached()
  })
})
