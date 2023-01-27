import { getCollection } from 'astro:content'

const posts = await getCollection('blog', (p) => { return !p.data.draft})
const documents = posts.map(post => ({
  url: import.meta.env.BASE_URL + '/blog/' + post.slug,
  title: post.data.title,
  description: post.data.description,
  author: post.data.author,
  publishDate: post.data.publishDate,
  categories: post.data.categories,
  tags: post.data.tags,
}))

export async function get() {
    const body = JSON.stringify(documents)
    return {
      body
    }
  }