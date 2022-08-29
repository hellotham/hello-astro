import { visit } from 'unist-util-visit'

export function remarkDiagram() {
  return function (tree, { data }) {
    if (!data.astro.frontmatter['extra']) {
      data.astro.frontmatter.extra = []
    }
    visit(tree, 'inlineMath', (node) => {
      if (!data.astro.frontmatter.extra.includes('math')) {
        data.astro.frontmatter.extra.push('math')
      }
    })
    visit(tree, 'code', (node) => {
      if (node.lang == 'markmap' || node.lang == 'mermaid') {
        node.type = 'html'
        node.value = '<div class ="' + node.lang + '">' + node.value + '</div>'
        if (!data.astro.frontmatter.extra.includes(node.lang)) {
          data.astro.frontmatter.extra.push(node.lang)
        }
      }
    })
  };
}