import getReadingTime from 'reading-time'

export function satteriReadingTime() {
  return {
    name: 'satteri-reading-time',
    root(node, ctx) {
      const textOnPage = ctx.textContent(node)
      const readingTime = getReadingTime(textOnPage)

      const astro = ctx.data.astro
      if (astro) {
        if (!astro.frontmatter) {
          astro.frontmatter = {}
        }
        astro.frontmatter.minutesRead = readingTime.text
      }
    }
  }
}
