export type Slug = {
  current: string;
};

export type SanityReference = {
  _type: 'reference';
  _ref: string;
};

export type SanityImage = {
  _type: 'image';
  asset: SanityReference;
  alt?: string;
};

export type PortableTextSpan = {
  _type: 'span';
  _key: string;
  text: string;
  marks: string[];
};

export type PortableTextBlock = {
  _type: 'block';
  _key: string;
  style: string;
  markDefs: Array<Record<string, unknown>>;
  children: PortableTextSpan[];
};

export type SeoFields = {
  metaTitle?: string;
  metaDescription?: string;
  noIndex?: boolean;
  ogImage?: SanityImage;
};

export type BaseDocument = {
  _id: string;
  _type: string;
  _createdAt: string;
  _updatedAt: string;
  seo?: SeoFields;
};

export type CategoryDocument = BaseDocument & {
  _type: 'category';
  title: string;
  slug: Slug;
  description?: string;
};

export type ProductDocument = BaseDocument & {
  _type: 'product';
  title: string;
  slug: Slug;
  sku?: string;
  summary?: string;
  description?: string;
  badge?: string;
  price?: number;
  compareAtPrice?: number;
  priceLabel?: string;
  currency?: string;
  inStock?: boolean;
  featured?: boolean;
  ratingAverage?: number;
  ratingCount?: number;
  collections?: string[];
  topFinishes?: string[];
  colors?: string[];
  sizes?: string[];
  category?: SanityReference;
  heroImage?: SanityImage;
  images?: SanityImage[];
  roomSceneImage?: SanityImage;
  dimensions?: string;
  assemblyAndCare?: string;
  shippingAndReturns?: string;
  whyYouWillLoveIt?: string[];
  guarantees?: string[];
  body?: PortableTextBlock[];
};

export type ReviewDocument = BaseDocument & {
  _type: 'review';
  product: SanityReference;
  productSlug?: string;
  reviewerName: string;
  reviewerEmail?: string;
  rating: number;
  title?: string;
  comment: string;
  approved?: boolean;
  submittedAt?: string;
};

export type ServiceDocument = BaseDocument & {
  _type: 'service';
  title: string;
  slug: Slug;
  excerpt?: string;
  heroImage?: SanityImage;
  body?: PortableTextBlock[];
};

export type PortfolioProjectDocument = BaseDocument & {
  _type: 'portfolioProject';
  title: string;
  slug: Slug;
  location?: string;
  completionDate?: string;
  coverImage?: SanityImage;
  gallery?: SanityImage[];
  body?: PortableTextBlock[];
};

export type AuthorDocument = BaseDocument & {
  _type: 'author';
  name: string;
  slug: Slug;
  role?: string;
  image?: SanityImage;
  bio?: PortableTextBlock[];
};

export type BlogPostDocument = BaseDocument & {
  _type: 'blogPost';
  title: string;
  slug: Slug;
  excerpt?: string;
  publishedAt?: string;
  featured?: boolean;
  readTimeMinutes?: number;
  mainImage?: SanityImage;
  imageAlt?: string;
  author?: SanityReference;
  categories?: SanityReference[];
  body?: PortableTextBlock[];
};

export type FaqDocument = BaseDocument & {
  _type: 'faq';
  question: string;
  slug: Slug;
  answer: PortableTextBlock[];
  topic?: string;
};
