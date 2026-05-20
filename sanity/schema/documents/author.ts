import type { SchemaType } from '../types';

export const authorSchema: SchemaType = {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string', required: true },
    { name: 'slug', title: 'Slug', type: 'slug', required: true },
    { name: 'role', title: 'Role', type: 'string' },
    { name: 'image', title: 'Image', type: 'image' },
    {
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: ['block'],
    },
    { name: 'seo', title: 'SEO', type: 'seo' },
  ],
};
