import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/posts" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    slug: z.string(),
    author: z.string(),
    publishDate: z.date(),
    chapter: z.string().optional(),
  }),
});

export const collections = { posts };
