// 1. Import your utilities and schemas
import { z, defineCollection } from 'astro:content'

const docCollection = defineCollection({
    schema: z.object({
      draft: z.boolean().optional(),
      layout: z.string(),
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
  'doc': docCollection,
}
