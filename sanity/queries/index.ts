export const PRODUCT_LIST_QUERY = `
*[_type == "product"] | order(_updatedAt desc) {
  _id,
  title,
  slug,
  summary,
  priceLabel,
  collections,
  "colors": coalesce(colors, topFinishes),
  featured,
  inStock,
  "category": category->{_id, title, slug},
  images,
  seo
}
`;

export const PRODUCT_BY_SLUG_QUERY = `
*[_type == "product" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  summary,
  priceLabel,
  collections,
  "colors": coalesce(colors, topFinishes),
  featured,
  inStock,
  "category": category->{_id, title, slug},
  images,
  body,
  seo
}
`;

export const PRODUCT_FILTER_OPTIONS_QUERY = `
{
  "collections": array::unique(*[_type == "product" && defined(collections)]{collections}[].collections[]),
  "categories": array::unique(*[_type == "product" && defined(category->title)]{"value": category->title}[].value),
  "colors": array::unique(*[_type == "product" && (defined(colors) || defined(topFinishes))]{"values": coalesce(colors, topFinishes)}[].values[])
}
`;

export const PRODUCT_ID_BY_ROUTE_PARAM_QUERY = `
*[_type == "product" && (_id == $routeParam || slug.current == $routeParam)][0] {
  _id,
  slug,
  title
}
`;

export const PRODUCT_REVIEWS_BY_PRODUCT_ID_QUERY = `
*[_type == "review" && product._ref == $productId && approved != false]
| order(coalesce(submittedAt, _createdAt) desc) {
  _id,
  reviewerName,
  rating,
  title,
  comment,
  submittedAt,
  _createdAt
}
`;

export const BLOG_LIST_QUERY = `
*[_type == "blogPost"] | order(coalesce(publishedAt, _createdAt) desc) {
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  featured,
  readTimeMinutes,
  imageAlt,
  "mainImage": mainImage{asset->{url}},
  "author": author->{_id, name, slug, "image": image{asset->{url}}},
  "categories": categories[]->{_id, title, slug},
  seo
}
`;

export const BLOG_FEATURED_QUERY = `
*[_type == "blogPost"] | order(featured desc, coalesce(publishedAt, _createdAt) desc)[0] {
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  featured,
  readTimeMinutes,
  imageAlt,
  "mainImage": mainImage{asset->{url}},
  "author": author->{_id, name, slug, "image": image{asset->{url}}},
  "categories": categories[]->{_id, title, slug},
  seo
}
`;

export const BLOG_LIST_PAGINATED_QUERY = `
*[_type == "blogPost" && _id != $featuredId && ($category == "all" || count(categories[@->slug.current == $category]) > 0)]
| order(coalesce(publishedAt, _createdAt) desc)[$start...$end] {
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  featured,
  readTimeMinutes,
  imageAlt,
  "mainImage": mainImage{asset->{url}},
  "author": author->{_id, name, slug, "image": image{asset->{url}}},
  "categories": categories[]->{_id, title, slug},
  seo
}
`;

export const BLOG_LIST_COUNT_QUERY = `
count(*[_type == "blogPost" && _id != $featuredId && ($category == "all" || count(categories[@->slug.current == $category]) > 0)])
`;

export const BLOG_FILTER_OPTIONS_QUERY = `
*[_type == "blogPost" && defined(categories)] {
  "categories": categories[]->{title, slug}
}
`;

export const BLOG_BY_SLUG_QUERY = `
*[_type == "blogPost" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  featured,
  readTimeMinutes,
  imageAlt,
  "mainImage": mainImage{asset->{url}},
  "author": author->{_id, name, slug, role, "image": image{asset->{url}}},
  "categories": categories[]->{_id, title, slug},
  body,
  seo
}
`;

export const SERVICE_LIST_QUERY = `
*[_type == "service"] | order(_updatedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  heroImage,
  seo
}
`;

export const PORTFOLIO_LIST_QUERY = `
*[_type == "portfolioProject"] | order(coalesce(completionDate, _createdAt) desc) {
  _id,
  title,
  slug,
  location,
  completionDate,
  coverImage,
  seo
}
`;

export const FAQ_LIST_QUERY = `
*[_type == "faq"] | order(question asc) {
  _id,
  question,
  slug,
  topic,
  answer,
  seo
}
`;
