import { getCollection, getEntry } from 'astro:content'
import { SiteMetadata } from '../config'

const docs = await getCollection('doc', (p) => {
  return !p.data.draft
})
const posts = await getCollection('blog', (p) => {
  return !p.data.draft
})
let documents = await Promise.all(
  posts.map(async (post) => {
    const author = await getEntry(post.data.author)
    return {
      url: import.meta.env.BASE_URL + 'blog/' + post.slug,
      title: post.data.title,
      description: post.data.description,
      author: `${author.data.title} (${author.data.contact})`,
      publishDate: post.data.publishDate,
      categories: post.data.categories,
      tags: post.data.tags
    }
  })
)
documents = documents.concat(
  docs.map((doc) => ({
    url: import.meta.env.BASE_URL + 'doc/' + doc.slug,
    title: doc.data.title,
    description: doc.data.description,
    author: `${SiteMetadata.author.name} (${SiteMetadata.author.email})`,
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
