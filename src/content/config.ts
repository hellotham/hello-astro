// 1. Import your utilities and schemas
import { z, defineCollection } from 'astro:content'

// 2. Define your collections
const blogCollection = defineCollection({
    schema: z.object({
      draft: z.boolean().optional(),
      layout: z.string().optional(),
      title: z.string(),
      description: z.string(),
      author: z.string().optional(),
      publishDate: z.date(),
      // publishDate: z.string().datetime({ offset: true }),
      // publishDate: z.string().transform((str: string) => new Date(str)),
      // publishDate: z.string().transform((str: string | Date) => new Date(str)),
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
      layout: z.string(),
      section: z.string(),
      weight: z.number().optional(),
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
