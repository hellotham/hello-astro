import { test, expect } from '@playwright/test'

test.describe('Endpoints E2E Tests', () => {
  test('should return valid RSS feed xml', async ({ request }) => {
    const response = await request.get('./rss.xml')
    expect(response.ok()).toBe(true)

    const text = await response.text()
    expect(text).toContain('<rss')
    expect(text).toContain('<channel>')
  })

  test('should return valid sitemap index xml', async ({ request }) => {
    const response = await request.get('./sitemap-index.xml')
    expect(response.ok()).toBe(true)

    const text = await response.text()
    expect(text).toContain('<sitemapindex')
  })
})
