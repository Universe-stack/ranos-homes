import { createSanityClient } from '../lib/client';

const client = createSanityClient();

export interface BreadcrumbProduct {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  category?: {
    _id: string;
    title: string;
    slug?: {
      current: string;
    };
  };
}

/**
 * Fetch product data for breadcrumb generation
 * Includes category reference for hierarchical breadcrumbs
 */
export async function getProductForBreadcrumb(
  productId: string
): Promise<BreadcrumbProduct | null> {
  try {
    const product = await client.fetch<BreadcrumbProduct>(
      `*[_id == $id][0] {
        _id,
        title,
        slug,
        category-> {
          _id,
          title,
          slug
        }
      }`,
      { id: productId }
    );

    return product || null;
  } catch (error) {
    console.error('Error fetching product for breadcrumb:', error);
    return null;
  }
}

/**
 * Fetch category data for breadcrumb
 */
export async function getCategoryForBreadcrumb(categoryId: string) {
  try {
    const category = await client.fetch(
      `*[_id == $id][0] {
        _id,
        title,
        slug
      }`,
      { id: categoryId }
    );

    return category || null;
  } catch (error) {
    console.error('Error fetching category for breadcrumb:', error);
    return null;
  }
}
