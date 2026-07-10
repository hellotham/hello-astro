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

  test('should return valid search docs json payload', async ({ request }) => {
    const response = await request.get('./search-docs.json')
    expect(response.ok()).toBe(true)
    expect(response.headers()['content-type']).toContain('application/json')

    const data = await response.json()
    expect(Array.isArray(data)).toBe(true)
    expect(data.length).toBeGreaterThan(0)
    expect(data[0]).toHaveProperty('title')
    expect(data[0]).toHaveProperty('url')
  })

  test('should return valid search index json payload', async ({ request }) => {
    const response = await request.get('./search-index.json')
    expect(response.ok()).toBe(true)
    expect(response.headers()['content-type']).toContain('application/json')

    const data = await response.json()
    expect(typeof data).toBe('object')
    expect(data).toHaveProperty('version')
    expect(data).toHaveProperty('fields')
  })
})
