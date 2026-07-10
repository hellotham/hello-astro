import { test, expect } from '@playwright/test'

test.describe('Diagrams Rendering E2E Tests', () => {
  test('should render PlantUML diagram as raw embedded SVG correctly', async ({ page }) => {
    // Open the PlantUML diagram blog page
    await page.goto('./blog/2022-08-25-plantuml-diagrams/')

    await expect(page).toHaveTitle(/PlantUML Diagrams/)

    // The Satteri diagram plugin injects a figure wrapper with the plantuml-diagram class
    const diagramWrapper = page.locator('figure.plantuml-diagram').first()
    await expect(diagramWrapper).toBeVisible()

    // Assert that it embeds an actual vector SVG element
    const svgElement = diagramWrapper.locator('svg')
    await expect(svgElement).toBeVisible()
  })

  test('should render Mermaid diagram as SVG correctly', async ({ page }) => {
    // Open the Mermaid diagram blog page
    await page.goto('./blog/2022-08-20-mermaid-diagrams/')

    await expect(page).toHaveTitle(/Mermaid Diagrams/)

    // The astro-mermaid package renders mermaid blocks with class "mermaid"
    const mermaidElement = page.locator('.mermaid').first()
    await expect(mermaidElement).toBeVisible()

    // Wait for the SVG to render/hydrate on the page
    const svgElement = mermaidElement.locator('svg')
    await expect(svgElement).toBeVisible()
  })
})
