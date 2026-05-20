import { BreadcrumbItem } from '../../app/components/Breadcrumb';
import { BreadcrumbProduct } from '../queries/breadcrumb';

/**
 * Generate breadcrumb items from product data
 * Supports dynamic category hierarchy for SEO
 *
 * @example
 * // With category
 * // Output: [
 * //   { label: 'Home', href: '/' },
 * //   { label: 'Shop', href: '/shop' },
 * //   { label: 'Dining', href: '/shop?category=dining' },
 * //   { label: 'Modern Dining Chair', href: undefined }
 * // ]
 */
export function generateProductBreadcrumbs(
  product: BreadcrumbProduct | null,
  options?: {
    includeSku?: boolean;
    categoryBaseUrl?: string;
  }
): BreadcrumbItem[] {
  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
  ];

  if (product) {
    // Add category if available
    if (product.category?.title) {
      const categorySlug = product.category.slug?.current || '';
      const categoryUrl = options?.categoryBaseUrl
        ? `${options.categoryBaseUrl}/${categorySlug}`
        : `/shop/${categorySlug}`;

      breadcrumbs.push({
        label: product.category.title,
        href: categoryUrl,
      });
    }

    // Add product name as final breadcrumb
    breadcrumbs.push({
      label: product.title,
      // No href for current page (best practice for breadcrumbs)
    });
  }

  return breadcrumbs;
}

/**
 * Generate demo breadcrumbs for testing
 * Useful when Sanity data isn't available yet
 */
export function generateDemoBreadcrumbs(
  productName: string,
  category?: string,
  sku?: string
): BreadcrumbItem[] {
  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
  ];

  if (category) {
    breadcrumbs.push({
      label: category,
      href: `/shop?category=${category.toLowerCase()}`,
    });
  }

  breadcrumbs.push({
    label: productName,
  });

  return breadcrumbs;
}
