import type { SchemaType } from '../types';

export const seoObjectSchema: SchemaType = {
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    {
      name: 'metaTitle',
      title: 'Meta title',
      type: 'string',
      required: false,
    },
    {
      name: 'metaDescription',
      title: 'Meta description',
      type: 'text',
      required: false,
    },
    {
      name: 'noIndex',
      title: 'No index',
      type: 'boolean',
      required: false,
    },
    {
      name: 'ogImage',
      title: 'Open Graph image',
      type: 'image',
      required: false,
    },
  ],
};
