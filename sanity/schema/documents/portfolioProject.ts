import type { SchemaType } from '../types';

export const portfolioProjectSchema: SchemaType = {
  name: 'portfolioProject',
  title: 'Portfolio project',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', required: true },
    { name: 'slug', title: 'Slug', type: 'slug', required: true },
    { name: 'location', title: 'Location', type: 'string' },
    { name: 'completionDate', title: 'Completion date', type: 'datetime' },
    { name: 'coverImage', title: 'Cover image', type: 'image' },
    {
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: ['image'],
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
