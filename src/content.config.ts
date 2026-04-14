import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string().max(65),
    description: z.string().max(160),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('PODIUMEX'),
    category: z.enum([
      'Guías',
      'Comparativas',
      'Consejos',
      'Tendencias',
      'Organización de Eventos',
      'Personalización',
    ]),
    tags: z.array(z.string()),
    image: z.string(),
    imageAlt: z.string(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
