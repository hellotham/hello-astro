import { describe, it, expect, vi } from 'vitest'
import { satteriEmoji } from './satteri-emoji.mjs'

describe('satteri-emoji utility tests', () => {
  it('initializes correctly', () => {
    const plugin = satteriEmoji()
    expect(plugin.name).toBe('satteri-emoji')
    expect(typeof plugin.text).toBe('function')
  })

  it('converts colon-enclosed emojis in text nodes', () => {
    const plugin = satteriEmoji()
    const node = { value: 'Hello :smile: world!' }
    const ctx = {
      setProperty: vi.fn()
    }

    plugin.text(node, ctx)
    expect(ctx.setProperty).toHaveBeenCalledWith(node, 'value', 'Hello 😄 world!')
  })

  it('does not touch text without colons or valid emojis', () => {
    const plugin = satteriEmoji()
    const node = { value: 'Hello world! :invalid_emoji_name_here:' }
    const ctx = {
      setProperty: vi.fn()
    }

    plugin.text(node, ctx)
    expect(ctx.setProperty).not.toHaveBeenCalled()
  })
})
