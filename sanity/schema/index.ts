import { authorSchema } from './documents/author';
import { blogPostSchema } from './documents/blogPost';
import { categorySchema } from './documents/category';
import { faqSchema } from './documents/faq';
import { portfolioProjectSchema } from './documents/portfolioProject';
import { productSchema } from './documents/product';
import { reviewSchema } from './documents/review';
import { serviceSchema } from './documents/service';
import { richTextObjectSchema } from './objects/richText';
import { seoObjectSchema } from './objects/seo';

export const documentSchemas = [
  categorySchema,
  productSchema,
  serviceSchema,
  portfolioProjectSchema,
  authorSchema,
  blogPostSchema,
  faqSchema,
  reviewSchema,
] as const;

export const objectSchemas = [seoObjectSchema, richTextObjectSchema] as const;

export const sanitySchemaBlueprint = [...objectSchemas, ...documentSchemas] as const;
