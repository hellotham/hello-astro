import { getCollection } from 'astro:content'
import lunr from 'lunr'

const posts = await getCollection('blog', (p) => { return !p.data.draft})
const documents = posts.map(post => ({
  url: import.meta.env.BASE_URL + '/blog/' + post.slug,
  title: post.data.title,
  description: post.data.description,
  author: post.data.author,
  categories: post.data.categories && post.data.categories.join(' '),
  tags: post.data.tags && post.data.tags.join(' '),
  content: post.body,
}))
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

export async function get() {
    const body = JSON.stringify(idx)
    return {
      body
    }
  }