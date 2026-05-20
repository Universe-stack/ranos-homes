import type { SchemaType } from '../types';

export const blogPostSchema: SchemaType = {
  name: 'blogPost',
  title: 'Blog post',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', required: true },
    { name: 'slug', title: 'Slug', type: 'slug', required: true },
    { name: 'excerpt', title: 'Excerpt', type: 'text' },
    { name: 'publishedAt', title: 'Published at', type: 'datetime' },
    { name: 'featured', title: 'Featured post', type: 'boolean' },
    { name: 'readTimeMinutes', title: 'Read time (minutes)', type: 'number' },
    { name: 'mainImage', title: 'Main image', type: 'image' },
    { name: 'imageAlt', title: 'Image alt text', type: 'string' },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: ['author'],
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: ['reference'],
      to: ['category'],
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: ['block', 'image'],
    },
    { name: 'seo', title: 'SEO', type: 'seo' },
  ],
};
