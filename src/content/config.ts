// 1. Import your utilities and schemas
import { z, defineCollection } from 'astro:content'

// 2. Define your collections
const blogCollection = defineCollection({
    schema: z.object({
      draft: z.boolean().optional(),
      title: z.string(),
      description: z.string(),
      author: z.string().optional(),
      publishDate: z.date(),
      coverSVG: z.string().optional(),
      coverImage: z.string().optional(),
      socialImage: z.string().optional(),
      images: z.array(z.string()).optional(),
      gallery: z.string().optional(),
      categories: z.array(z.string()).optional(),
      tags: z.array(z.string()).optional(),
      extra: z.array(z.enum(["math", "markmap", "mermaid", "gallery"])).optional(),
      minutesRead: z.string().optional(),
    }),
  })

const docCollection = defineCollection({
    schema: z.object({
      draft: z.boolean().optional(),
      section: z.string(),
      weight: z.number().default(0),
      title: z.string(),
      description: z.string(),
      images: z.array(z.string()).optional(),
      gallery: z.string().optional(),
    }),
  })

// 3. Export multiple collections to register them
export const collections = {
  'blog': blogCollection,
  'doc': docCollection,
}
