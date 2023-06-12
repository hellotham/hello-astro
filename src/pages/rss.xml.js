import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import { SiteMetadata } from '../config'

export async function get() {
  const posts = await getCollection('blog', ({ data }) => {
    return data.draft !== true
  })
  return rss({
    // `<title>` field in output xml
    title: SiteMetadata.title,
    // `<description>` field in output xml
    description: SiteMetadata.description,
    // base URL for RSS <item> links
    // SITE will use "site" from your project's astro.config.
    site: import.meta.env.SITE,
    // list of `<item>`s in output xml
    // simple example: generate items for every md file in /src/pages
    // see "Generating items" section for required data and advanced use cases
    items: posts.map((post) => ({
      link: import.meta.env.BASE_URL + '/blog/' + post.slug,
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishDate.toString()
    })),
    // (optional) inject custom xml
    customData: `<language>en</language>`
  })
}
