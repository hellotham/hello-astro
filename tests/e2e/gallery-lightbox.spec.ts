import { test, expect } from '@playwright/test'

test.describe('Gallery & Lightbox E2E Tests', () => {
  test('should open lightbox on image thumbnail click', async ({ page }) => {
    await page.goto('./blog/2022-08-22-sample-gallery-post-markdown/')

    // Assert that gallery is rendered
    const gallery = page.locator('lightbox-inner > div').first()
    await expect(gallery).toBeVisible()

    // Assert that thumbnails exist
    const thumbnails = gallery.locator('a')
    await expect(thumbnails.first()).toBeVisible()

    // Click the first thumbnail to launch Photoswipe
    await thumbnails.first().click()

    // Verify lightbox overlay opens
    const lightbox = page.locator('.pswp')
    await expect(lightbox).toBeVisible()
    await expect(lightbox).toHaveClass(/pswp--open/)

    // Wait for transition to stabilize
    await page.waitForTimeout(500)

    // Press Escape to close lightbox
    await page.keyboard.press('Escape')

    // Verify lightbox closes
    await expect(lightbox).not.toBeVisible()
  })
})
