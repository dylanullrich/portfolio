// 1. Import utilities from `astro:content`
import { defineCollection, z} from 'astro:content';
// 2. Define your collection(s)
const blogCollection = defineCollection({ type: 'content',   schema: z.object({
    layout: z.string(),
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    tags: z.array(z.string()),
    image: z.object({
      url: z.string(),
      alt: z.string().optional()
    }).optional(),
 })
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'blog': blogCollection,
};
