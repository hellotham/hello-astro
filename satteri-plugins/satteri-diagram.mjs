import axios from 'axios'
import plantumlEncoder from 'plantuml-encoder'

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function addExtra(ctx, feature) {
  const astro = ctx.data.astro
  if (astro) {
    if (!astro.frontmatter) astro.frontmatter = {}
    if (!astro.frontmatter.extra) astro.frontmatter.extra = []
    if (!astro.frontmatter.extra.includes(feature)) {
      astro.frontmatter.extra.push(feature)
    }
  }
}

export function satteriDiagram(options = {}) {
  const serverUrl = options.serverUrl || 'https://www.plantuml.com/plantuml/svg/'
  const timeout = options.timeout || 10000
  const addWrapperClasses = options.addWrapperClasses !== false

  return {
    name: 'satteri-diagram',

    math(_node, ctx) {
      addExtra(ctx, 'math')
    },

    inlineMath(_node, ctx) {
      addExtra(ctx, 'math')
    },

    async code(node, ctx) {
      if (node.lang === 'markmap') {
        addExtra(ctx, 'markmap')
        return /** @type {any} */ ({
          type: 'html',
          value: `<div class="markmap">${node.value}</div>`
        })
      }

      if (node.lang === 'plantuml') {
        try {
          const content = node.value
          if (!content) return

          const encodedContent = plantumlEncoder.encode(content.trim())
          const url = `${serverUrl}${encodedContent}`
          const response = await axios.get(url, {
            responseType: 'text',
            timeout: timeout
          })

          const svgContent = response.data

          return /** @type {any} */ ({
            type: 'html',
            value: `<figure${addWrapperClasses ? ' class="plantuml-diagram"' : ''}>
  ${svgContent}
</figure>`
          })
        } catch (error) {
          console.error('Error processing PlantUML diagram in Satteri:', error)
          const errorHtml = `<div${addWrapperClasses ? ' class="plantuml-error"' : ''}>
  <p>Error generating PlantUML diagram: ${error.message}</p>
  <pre><code class="language-plantuml">${escapeHtml(node.value)}</code></pre>
</div>`
          return /** @type {any} */ ({
            type: 'html',
            value: errorHtml
          })
        }
      }
    }
  }
}
