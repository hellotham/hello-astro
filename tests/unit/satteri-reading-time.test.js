import { describe, it, expect } from 'vitest'
import { satteriReadingTime } from '../../satteri-plugins/satteri-reading-time.mjs'

describe('satteri-reading-time utility tests', () => {
  it('initializes and calculates reading time correctly', () => {
    const plugin = satteriReadingTime()
    expect(plugin.name).toBe('satteri-reading-time')
    expect(typeof plugin.root).toBe('function')

    const ctx = {
      textContent: () => 'A '.repeat(500), // 500 words
      data: {
        astro: {
          frontmatter: {}
        }
      }
    }

    plugin.root(null, ctx)
    expect(ctx.data.astro.frontmatter.minutesRead).toBe('3 min read')
  })
})
