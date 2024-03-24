import rss from '@astrojs/rss'
import { getImage } from 'astro:assets'
import { getCollection, getEntry } from 'astro:content'
import { SiteMetadata, DefaultImage } from '../config'

export async function GET(context) {
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
    xmlns: {
      media: 'http://search.yahoo.com/mrss/',
      atom: 'http://www.w3.org/2005/Atom'
    },
    // add atom:link to be compatible with atom
    customData: `<atom:link href="${import.meta.env.BASE_URL}rss.xml" rel="self" type="application/rss+xml" />`,
    // list of `<item>`s in output xml
    // simple example: generate items for every md file in /src/pages
    // see "Generating items" section for required data and advanced use cases
    items: await Promise.all(
      posts.map(async (post) => {
        const author = await getEntry(post.data.author)
        const image = await getImage({
          src: post.data.socialImage || post.data.coverImage || DefaultImage,
          width: 1200,
          format: 'jpg'
        })
        return {
          link: import.meta.env.BASE_URL + '/blog/' + post.slug,
          title: post.data.title,
          author: `${author.data.title} (${author.data.contact})`,
          description: post.data.description,
          pubDate: post.data.publishDate.toString(),
          // custom data for media. The url must be the full url (including https://)
          customData: `<media:content
          type="image/jpeg"
          width="${image.width}"
          height="${image.height}"
          medium="image"
          url="${context.site + image.src.slice(1)}" />
      `
        }
      })
    )
  })
}
