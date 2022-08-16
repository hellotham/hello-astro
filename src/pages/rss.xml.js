import rss from '@astrojs/rss'
import { SiteMetadata } from '../config'

const postImportResult = import.meta.glob('./blog/*.{md,mdx}', { eager: true })
const posts = Object.values(postImportResult)

export const get = () =>
  rss({
    // `<title>` field in output xml
    title: SiteMetadata.title,
    // `<description>` field in output xml
    description: SiteMetadata.description,
    // base URL for RSS <item> links
    // SITE will use "site" from your project's astro.config.
    site: import.meta.env.SITE,
    // list of `<item>`s in output xml
    // simple example: generate items for every md file in /src/pages
    // see "Generating items" section for required frontmatter and advanced use cases
    items: posts.map(post => ({
      link: post.url,
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      pubDate: post.frontmatter.publishDate,
    })),
    // (optional) inject custom xml
    customData: `<language>en</language>`,
  })
