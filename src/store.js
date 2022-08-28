import lunr from 'lunr'
import { atom } from 'nanostores'

const postImportResult = import.meta.glob('./pages/blog/*.{md,mdx}', { eager: true })
const posts = Object.values(postImportResult)
const documents = posts.map(post => ({
  url: post.url,
  title: post.frontmatter.title,
  description: post.frontmatter.description,
  author: post.frontmatter.author,
}))
export const PostStore = atom(documents)

export const SearchIndex = atom(lunr(function () {
  this.ref('url')
  this.field('title')
  this.field('description')
  this.field('author')
  this.field('content')

  documents.forEach(function (doc) {
    this.add(doc)
  }, this)
}))