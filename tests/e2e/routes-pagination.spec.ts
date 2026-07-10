import { test, expect } from '@playwright/test'

test.describe('Routes & Pagination E2E Tests', () => {
  test('should load blog index page and navigate pagination', async ({ page }) => {
    await page.goto('./blog/')

    await expect(page).toHaveTitle(/Blog/)

    // Assert blog post cards are visible
    const blogCards = page.locator('section')
    await expect(blogCards.first()).toBeVisible()

    // Assert pagination element exists
    const pagination = page.locator('nav[aria-label="Pagination"]')
    await expect(pagination).toBeVisible()

    // Locate and click Next page link
    const nextBtn = pagination.getByRole('link', { name: 'Next' })
    await expect(nextBtn).toBeVisible()
    await nextBtn.click()

    // Verify page changed
    await expect(page).toHaveURL(/\/blog\/\d+\/?/)
    const blogCardsPage2 = page.locator('section')
    await expect(blogCardsPage2.first()).toBeVisible()
  })

  test('should render categories index and category detail page', async ({ page }) => {
    await page.goto('./categories/')
    await expect(page).toHaveTitle(/Categories/)

    const categoryLink = page.getByRole('link', { name: 'Instructions' }).first()
    await expect(categoryLink).toBeVisible()
    await categoryLink.click()

    await expect(page).toHaveURL(/\/category\/instructions\/?/)
    const blogCards = page.locator('section')
    await expect(blogCards.first()).toBeVisible()
  })

  test('should render tags index and tag detail page', async ({ page }) => {
    await page.goto('./tags/')
    await expect(page).toHaveTitle(/Tags/)

    const tagLink = page.getByRole('link', { name: 'Astro' }).first()
    await expect(tagLink).toBeVisible()
    await tagLink.click()

    await expect(page).toHaveURL(/\/tag\/astro\/?/)
    const blogCards = page.locator('section')
    await expect(blogCards.first()).toBeVisible()
  })

  test('should render authors index and author profile page', async ({ page }) => {
    await page.goto('./authors/')
    await expect(page).toHaveTitle(/Authors/)

    const authorLink = page.getByRole('link', { name: 'Chris Tham' }).first()
    await expect(authorLink).toBeVisible()
    await authorLink.click()

    await expect(page).toHaveURL(/\/author\/chris-tham\/?/)
    const blogCards = page.locator('section')
    await expect(blogCards.first()).toBeVisible()
  })
})
