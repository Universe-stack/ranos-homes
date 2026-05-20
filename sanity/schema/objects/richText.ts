import type { SchemaType } from '../types';

export const richTextObjectSchema: SchemaType = {
  name: 'richText',
  title: 'Rich text',
  type: 'object',
  fields: [
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: ['block', 'image'],
      required: false,
    },
  ],
};
