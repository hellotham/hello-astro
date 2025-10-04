// 1. Import your utilities and schemas
import { z, defineCollection, reference } from 'astro:content'
import { rssSchema } from '@astrojs/rss'
import { glob, file } from 'astro/loaders'

// 2. Define your collections
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    rssSchema.extend({
      draft: z.boolean().optional(),
      author: reference('author').optional(),
      coverSVG: image().optional(),
      coverImage: image().optional(),
      socialImage: image().optional(),
      images: z.array(image()).optional(),
      gallery: z.string().optional(),
      categories: z.array(reference('category')).optional(),
      tags: z.array(z.string()).optional(),
      extra: z.array(z.enum(['math', 'markmap', 'mermaid', 'gallery'])).optional(),
      minutesRead: z.string().optional()
    })
})

const page = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/page' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      author: reference('author').optional(),
      pubDate: z.date().optional(),
      coverSVG: image().optional(),
      coverImage: image().optional(),
      socialImage: image().optional(),
      images: z.array(image()).optional(),
      gallery: z.string().optional(),
      tags: z.array(z.string()).optional(),
      extra: z.array(z.enum(['math', 'markmap', 'mermaid', 'gallery'])).optional()
    })
})
const doc = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/doc' }),
  schema: ({ image }) =>
    z.object({
      draft: z.boolean().optional(),
      section: z.string(),
      weight: z.number().default(0),
      title: z.string(),
      description: z.string(),
      images: z.array(image()).optional(),
      gallery: z.string().optional()
    })
})

const category = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/category' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      coverSVG: image(),
      socialImage: image()
    })
})

const author = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/author' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image(),
      contact: z.string()
    })
})

const social = defineCollection({
  loader: file('src/social.json', { parser: (text) => JSON.parse(text) })
})

// 3. Export multiple collections to register them
export const collections = {
  blog,
  page,
  doc,
  category,
  author,
  social
}
