import rss from '@astrojs/rss'
import { getImage } from 'astro:assets'
import { getEntries, getEntry } from 'astro:content'
import { SiteMetadata, DefaultImage, getPosts } from '../config'

export async function GET(context) {
  const defaultauthor = await getEntry('author', 'default')

  const posts = await getPosts()
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
    customData: `
      <atom:link href="${import.meta.env.BASE_URL}rss.xml" rel="self" type="application/rss+xml" />
      <language>en</language>
      <pubDate>${SiteMetadata.buildTime.toISOString()}</pubDate>
      <lastBuildDate>${SiteMetadata.buildTime.toISOString()}</lastBuildDate>
      <docs>https://www.rssboard.org/rss-specification</docs>
      <generator>Astro</generator>
      <managingEditor>${SiteMetadata.author.email}</managingEditor>
      <webMaster>${SiteMetadata.author.email}</webMaster>
    `,
    // list of `<item>`s in output xml
    // simple example: generate items for every md file in /src/pages
    // see "Generating items" section for required data and advanced use cases
    items: await Promise.all(
      posts.map(async (post) => {
        const author = post.data.author ? await getEntry(post.data.author) : defaultauthor
        const categories = post.data.categories && (await getEntries(post.data.categories))
        const image = await getImage({
          src:
            post.data.socialImage ||
            post.data.coverSVG ||
            post.data.coverImage ||
            (post.data.images && post.data.images[0]) ||
            (categories && categories[0].data.socialImage) ||
            DefaultImage,
          width: 1200,
          format: 'jpg'
        })

        return {
          link: import.meta.env.BASE_URL + '/blog/' + post.slug,
          title: post.data.title,
          author: `${author.data.title} (${author.data.contact})`,
          description: post.data.description,
          pubDate: post.data.pubDate,
          // custom data for media. The url must be the full url (including https://)
          customData: `
            <media:content
              type="image/jpeg"
              width="${image.attributes.width}"
              height="${image.attributes.height}"
              medium="image"
              url="${context.site + image.src.slice(1)}" />
            ${categories ? categories.map((category) => '<category>' + category.data.title + '</category>').join('\n') : ''}
      `
        }
      })
    )
  })
}
