import { describe, it, expect, vi } from 'vitest'
import axios from 'axios'
import { escapeHtml, satteriDiagram } from '../../satteri-plugins/satteri-diagram.mjs'

vi.mock('axios')

describe('satteri-diagram utility tests', () => {
  describe('escapeHtml', () => {
    it('escapes special HTML characters correctly', () => {
      const input = '<div>"Hello" & \'World\'</div>'
      const expected = '&lt;div&gt;&quot;Hello&quot; &amp; &#39;World&#39;&lt;/div&gt;'
      expect(escapeHtml(input)).toBe(expected)
    })
  })

  describe('satteriDiagram factory', () => {
    it('initializes with default options', () => {
      const plugin = satteriDiagram()
      expect(plugin.name).toBe('satteri-diagram')
      expect(typeof plugin.math).toBe('function')
      expect(typeof plugin.inlineMath).toBe('function')
      expect(typeof plugin.code).toBe('function')
    })

    it('adds math to frontmatter when math hook is triggered', () => {
      const plugin = satteriDiagram()
      const ctx = {
        data: {
          astro: {
            frontmatter: {}
          }
        }
      }
      plugin.math(null, ctx)
      expect(ctx.data.astro.frontmatter.extra).toContain('math')
    })

    it('transforms markmap code block and adds markmap frontmatter', async () => {
      const plugin = satteriDiagram()
      const ctx = {
        data: {
          astro: {
            frontmatter: {}
          }
        }
      }
      const node = {
        lang: 'markmap',
        value: '# Topic A\n## Subtopic 1'
      }

      const result = await plugin.code(node, ctx)
      expect(ctx.data.astro.frontmatter.extra).toContain('markmap')
      expect(result.type).toBe('html')
      expect(result.value).toBe('<div class="markmap"># Topic A\n## Subtopic 1</div>')
    })

    it('fetches plantuml SVG and wraps it correctly', async () => {
      const mockSvg = '<svg>plantuml-rendering</svg>'
      vi.mocked(axios.get).mockResolvedValueOnce({ data: mockSvg })

      const plugin = satteriDiagram()
      const ctx = { data: { astro: { frontmatter: {} } } }
      const node = { lang: 'plantuml', value: '@startuml\nBob -> Alice\n@enduml' }

      const result = await plugin.code(node, ctx)
      expect(result.type).toBe('html')
      expect(result.value).toContain('class="plantuml-diagram"')
      expect(result.value).toContain(mockSvg)
    })

    it('returns error HTML box if PlantUML server fetch fails', async () => {
      const errMsg = 'Network Error'
      vi.mocked(axios.get).mockRejectedValueOnce(new Error(errMsg))

      const plugin = satteriDiagram()
      const ctx = { data: { astro: { frontmatter: {} } } }
      const node = { lang: 'plantuml', value: 'invalid plantuml code' }

      const result = await plugin.code(node, ctx)
      expect(result.type).toBe('html')
      expect(result.value).toContain('class="plantuml-error"')
      expect(result.value).toContain(errMsg)
    })
  })
})
