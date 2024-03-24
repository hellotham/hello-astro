import { getCollection, getEntry } from 'astro:content'
import lunr from 'lunr'
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
      categories: post.data.categories && post.data.categories.join(' '),
      tags: post.data.tags && post.data.tags.join(' '),
      content: post.body
    }
  })
)
documents = documents.concat(
  docs.map((doc) => ({
    url: import.meta.env.BASE_URL + 'doc/' + doc.slug,
    title: doc.data.title,
    description: doc.data.description,
    author: `${SiteMetadata.author.name} (${SiteMetadata.author.email})`,
    categories: 'documentation',
    tags: ['documentation'],
    content: doc.body
  }))
)

const idx = lunr(function () {
  this.ref('url')
  this.field('title')
  this.field('description')
  this.field('author')
  this.field('categories')
  this.field('tags')
  this.field('content')

  documents.forEach(function (doc) {
    this.add(doc)
  }, this)
})

export async function GET() {
  return new Response(JSON.stringify(idx), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
