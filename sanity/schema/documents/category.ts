import type { SchemaType } from '../types';

export const categorySchema: SchemaType = {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', required: true },
    { name: 'slug', title: 'Slug', type: 'slug', required: true },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'seo', title: 'SEO', type: 'seo' },
  ],
};
