import type { SchemaType } from '../types';

export const reviewSchema: SchemaType = {
  name: 'review',
  title: 'Product Review',
  type: 'document',
  fields: [
    {
      name: 'product',
      title: 'Product',
      type: 'reference',
      to: ['product'],
      required: true,
    },
    { name: 'productSlug', title: 'Product slug', type: 'string' },
    { name: 'reviewerName', title: 'Reviewer name', type: 'string', required: true },
    { name: 'reviewerEmail', title: 'Reviewer email', type: 'string' },
    { name: 'rating', title: 'Rating', type: 'number', required: true },
    { name: 'title', title: 'Review title', type: 'string' },
    { name: 'comment', title: 'Comment', type: 'text', required: true },
    { name: 'approved', title: 'Approved', type: 'boolean' },
    { name: 'submittedAt', title: 'Submitted at', type: 'datetime' },
  ],
};
