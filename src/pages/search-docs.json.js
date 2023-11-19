import { getCollection } from 'astro:content'
import { SiteMetadata } from '../config'

const docs = await getCollection('doc', (p) => {
  return !p.data.draft
})
const posts = await getCollection('blog', (p) => {
  return !p.data.draft
})
const documents = posts
  .map((post) => ({
    url: import.meta.env.BASE_URL + 'blog/' + post.slug,
    title: post.data.title,
    description: post.data.description,
    author: post.data.author,
    publishDate: post.data.publishDate,
    categories: post.data.categories,
    tags: post.data.tags
  }))
  .concat(
    docs.map((doc) => ({
      url: import.meta.env.BASE_URL + 'doc/' + doc.slug,
      title: doc.data.title,
      description: doc.data.description,
      author: SiteMetadata.author.name,
      publishDate: SiteMetadata.buildTime,
      categories: 'documentation',
      tags: ['documentation']
    }))
  )

export async function GET() {
  return new Response(JSON.stringify(documents), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
