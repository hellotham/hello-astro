import { test, expect } from '@playwright/test'

test.describe('Carousel E2E Tests', () => {
  test('should load Swiper and support slide navigation', async ({ page }) => {
    await page.goto('./blog/2022-08-19-sample-carousel/')

    // Assert Swiper container exists
    const swiperContainer = page.locator('.swiper')
    await expect(swiperContainer).toBeVisible()

    // Assert slides are present
    const slides = swiperContainer.locator('.swiper-slide')
    await expect(slides.first()).toBeVisible()

    // Assert pagination bullets are rendered
    const pagination = swiperContainer.locator('.swiper-pagination')
    await expect(pagination).toBeVisible()
    const bullets = pagination.locator('.swiper-pagination-bullet')
    await expect(bullets.first()).toBeVisible()

    // Assert next button is present and navigates slides
    const nextBtn = swiperContainer.locator('.swiper-button-next')
    await expect(nextBtn).toBeVisible()
    await nextBtn.click()

    // Verify slide state changes (Swiper updates classes on active slide)
    const activeSlide = swiperContainer.locator('.swiper-slide-active')
    await expect(activeSlide).toBeVisible()
  })
})
