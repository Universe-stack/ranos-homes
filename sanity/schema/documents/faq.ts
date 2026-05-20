import type { SchemaType } from '../types';

export const faqSchema: SchemaType = {
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    { name: 'question', title: 'Question', type: 'string', required: true },
    { name: 'slug', title: 'Slug', type: 'slug', required: true },
    { name: 'topic', title: 'Topic', type: 'string' },
    {
      name: 'answer',
      title: 'Answer',
      type: 'array',
      of: ['block'],
      required: true,
    },
    { name: 'seo', title: 'SEO', type: 'seo' },
  ],
};
