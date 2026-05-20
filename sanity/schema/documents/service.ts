import type { SchemaType } from '../types';

export const serviceSchema: SchemaType = {
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', required: true },
    { name: 'slug', title: 'Slug', type: 'slug', required: true },
    { name: 'excerpt', title: 'Excerpt', type: 'text' },
    { name: 'heroImage', title: 'Hero image', type: 'image' },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: ['block', 'image'],
    },
    { name: 'seo', title: 'SEO', type: 'seo' },
  ],
};
