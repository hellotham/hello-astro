import { test, expect } from '@playwright/test'

test.describe('KaTeX Math Rendering E2E Tests', () => {
  test('should compile and render math formulas correctly', async ({ page }) => {
    await page.goto('./blog/2022-08-24-math-equations/')

    await expect(page).toHaveTitle(/Math Equations/)

    // Assert math formulas are rendered as code blocks on the page
    const mathFormula = page.locator('code.math-inline')
    await expect(mathFormula.first()).toBeVisible()
  })
})
