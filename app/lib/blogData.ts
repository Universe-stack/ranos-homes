import { createSanityClient } from '@/sanity/lib/client';
import { hasSanityEnv } from '@/sanity/env';
import {
  BLOG_BY_SLUG_QUERY,
  BLOG_FILTER_OPTIONS_QUERY,
  BLOG_FEATURED_QUERY,
  BLOG_LIST_COUNT_QUERY,
  BLOG_LIST_PAGINATED_QUERY,
  BLOG_LIST_QUERY,
} from '@/sanity/queries';

export type BlogListItem = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categoryValue: string;
  authorName: string;
  authorAvatarUrl: string;
  imageUrl: string;
  publishedLabel: string;
  readTimeLabel: string;
  featured: boolean;
};

export type BlogPageData = {
  filters: Array<{
    label: string;
    value: string;
  }>;
  activeFilter: string;
  featuredPost: BlogListItem;
  posts: BlogListItem[];
  pagination: {
    currentPage: number;
    totalPages: number;
    pageSize: number;
    totalItems: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
  };
  fromCms: boolean;
};

export type BlogPostSection = {
  heading: string;
  paragraphs: string[];
};

export type BlogPostDetail = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  authorName: string;
  authorAvatarUrl: string;
  imageUrl: string;
  publishedLabel: string;
  readTimeLabel: string;
  sections: BlogPostSection[];
  fromCms: boolean;
};

const BLOG_PAGE_SIZE = 3;

type SanityBlogPost = {
  _id: string;
  slug?: {
    current?: string;
  };
  title?: string;
  excerpt?: string;
  publishedAt?: string;
  readTimeMinutes?: number;
  featured?: boolean;
  imageAlt?: string;
  mainImage?: {
    asset?: {
      url?: string;
    };
  };
  author?: {
    name?: string;
    image?: {
      asset?: {
        url?: string;
      };
    };
  };
  categories?: Array<{
    title?: string;
    slug?: {
      current?: string;
    };
  }>;
  body?: Array<{
    _type?: string;
    style?: string;
    children?: Array<{
      _type?: string;
      text?: string;
    }>;
  }>;
};

const DEMO_FILTERS = ['All', 'Living Room', 'Dining', 'Bedroom', 'Craftsmanship'];

const DEMO_POSTS: BlogListItem[] = [
  {
    id: 'hero-atelier',
    slug: 'inside-the-atelier-handcrafted-sofas',
    title: 'Inside the Atelier: How Handcrafted Sofas Are Built to Last',
    excerpt:
      'Step behind the scenes to see how hardwood frames, precision joinery, and layered upholstery shape comfort that stays timeless.',
    category: 'Craftsmanship',
    categoryValue: 'craftsmanship',
    authorName: 'Theodore Adebayo',
    authorAvatarUrl:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=140&q=80',
    imageUrl:
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1800&q=80',
    publishedLabel: '24 Jan 2024',
    readTimeLabel: '10 mins read',
    featured: true,
  },
  {
    id: 'dining-scale',
    slug: 'perfect-dining-table-size-guide',
    title: 'How to Choose the Perfect Dining Table Size for Your Home',
    excerpt:
      'From seat spacing to room clearance, use this guide to pick a dining table that feels balanced for daily meals and hosting.',
    category: 'Dining',
    categoryValue: 'dining',
    authorName: 'Seraphina Isabela',
    authorAvatarUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=140&q=80',
    imageUrl:
      'https://images.unsplash.com/photo-1617104551722-3b2d51366400?auto=format&fit=crop&w=1200&q=80',
    publishedLabel: '30 Jan 2024',
    readTimeLabel: '9 mins read',
    featured: false,
  },
  {
    id: 'texture-layering',
    slug: 'layering-textures-linen-walnut-leather',
    title: 'Layering Textures: Linen, Walnut, and Leather in One Space',
    excerpt:
      'Learn practical combinations of material, tone, and silhouette to create depth in living rooms without visual clutter.',
    category: 'Living Room',
    categoryValue: 'living-room',
    authorName: 'Maximilian Bart',
    authorAvatarUrl:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=140&q=80',
    imageUrl:
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
    publishedLabel: '29 Jan 2024',
    readTimeLabel: '6 mins read',
    featured: false,
  },
  {
    id: 'care-guide',
    slug: 'furniture-care-habits-that-protect',
    title: '5 Furniture Care Habits That Protect Your Investment',
    excerpt:
      'Simple routines for wood, fabric, and leather pieces that preserve finish quality and extend lifespan in busy homes.',
    category: 'Bedroom',
    categoryValue: 'bedroom',
    authorName: 'Anastasia Eze',
    authorAvatarUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=140&q=80',
    imageUrl:
      'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80',
    publishedLabel: '26 Jan 2024',
    readTimeLabel: '8 mins read',
    featured: false,
  },
];

const DEMO_POST_SECTIONS: Record<string, BlogPostSection[]> = {
  'inside-the-atelier-handcrafted-sofas': [
    {
      heading: '1. Hardwood Frames Are the Foundation',
      paragraphs: [
        'A durable sofa starts with kiln-dried hardwood selected for stability and resistance to warping. In the Ranos atelier, frame components are precision-cut and assembled with reinforced corner blocks to keep shape over years of daily use.',
        'This structural discipline means the sofa keeps its geometry even after repeated movement, family gatherings, and frequent rearrangement in modern living rooms.',
      ],
    },
    {
      heading: '2. Joinery and Suspension Define Comfort',
      paragraphs: [
        'Before upholstery begins, webbing and suspension layers are tested to balance support and softness. The objective is a seat profile that feels comfortable now, but also performs consistently over time.',
        'The right suspension system prevents sagging and protects posture, especially in homes where sofas serve as the centerpiece for both relaxation and entertaining.',
      ],
    },
    {
      heading: '3. Upholstery Layering Impacts Longevity',
      paragraphs: [
        'High-resilience foams, density-balanced wraps, and carefully tensioned textile application help preserve silhouette while improving tactile comfort. Every seam placement is considered for both aesthetics and wear performance.',
      ],
    },
  ],
  'perfect-dining-table-size-guide': [
    {
      heading: '1. Start With Room Clearance',
      paragraphs: [
        'Leave at least 90 cm clearance around the table so chairs can move comfortably and circulation remains easy. This baseline avoids cramped layouts and helps the dining area feel intentional.',
      ],
    },
    {
      heading: '2. Match Table Length to Seating Goals',
      paragraphs: [
        'As a practical rule, allow 60 cm per person along table edges. This gives each seat enough elbow room for everyday dining while still accommodating guests when needed.',
      ],
    },
    {
      heading: '3. Consider Material and Base Style',
      paragraphs: [
        'Pedestal bases improve flexibility for compact spaces, while four-leg structures can frame longer tabletops elegantly. Pairing walnut, stone, or oak finishes with your flooring and lighting creates a cohesive dining composition.',
      ],
    },
  ],
  'layering-textures-linen-walnut-leather': [
    {
      heading: '1. Use One Dominant Material',
      paragraphs: [
        'Choose one primary texture, such as linen upholstery, then support it with secondary accents like walnut side tables and leather accessories. This keeps contrast sophisticated rather than chaotic.',
      ],
    },
    {
      heading: '2. Balance Matte and Sheen',
      paragraphs: [
        'Spaces feel richer when low-sheen textiles meet subtly reflective details. The interaction between matte woven fabrics and finished wood grain adds depth under natural and ambient lighting.',
      ],
    },
    {
      heading: '3. Repeat Tones Across the Room',
      paragraphs: [
        'Echo color families through cushions, rugs, and art to tie materials together. Repetition creates continuity, making mixed textures feel curated and cohesive.',
      ],
    },
  ],
  'furniture-care-habits-that-protect': [
    {
      heading: '1. Keep Surfaces Dust-Free and Dry',
      paragraphs: [
        'Microfiber dusting and immediate spill response preserve finishes and prevent gradual buildup that can dull premium materials. Gentle weekly care reduces the need for aggressive cleaning later.',
      ],
    },
    {
      heading: '2. Rotate Cushions and Move Lightly',
      paragraphs: [
        'Rotating removable cushions distributes wear evenly. When moving furniture, lift instead of drag to protect both joints and flooring, especially for solid wood pieces.',
      ],
    },
    {
      heading: '3. Protect From Direct Sun and Heat',
      paragraphs: [
        'UV exposure and heat vents can dry out leather and fade textiles. Use layered window treatments and thoughtful placement to maintain color fidelity and material integrity.',
      ],
    },
  ],
};

function formatDateLabel(value?: string): string {
  if (!value) return 'Recently';

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return 'Recently';

  return date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

function toReadTimeLabel(minutes?: number, fallbackText?: string): string {
  if (typeof minutes === 'number' && Number.isFinite(minutes) && minutes > 0) {
    return `${Math.round(minutes)} mins read`;
  }

  if (fallbackText && fallbackText.trim().length > 0) {
    const words = fallbackText.trim().split(/\s+/).length;
    const estimate = Math.max(3, Math.round(words / 180));
    return `${estimate} mins read`;
  }

  return '5 mins read';
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function normalizeFilter(value?: string): string {
  if (!value || value.trim().length === 0) return 'all';
  return slugify(value);
}

function mapSanityPost(post: SanityBlogPost): BlogListItem {
  const firstCategory = post.categories?.find((item) => item.title);
  const category = firstCategory?.title ?? 'Furniture';
  const categoryValue = firstCategory?.slug?.current ?? slugify(category);

  return {
    id: post._id,
    slug: post.slug?.current?.trim() || slugify(post.title?.trim() || post._id),
    title: post.title?.trim() || 'Untitled Story',
    excerpt: post.excerpt?.trim() || 'Explore design ideas, material insights, and furniture craftsmanship stories from Ranos Homes.',
    category,
    categoryValue,
    authorName: post.author?.name?.trim() || 'Ranos Editorial Team',
    authorAvatarUrl:
      post.author?.image?.asset?.url ||
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=140&q=80',
    imageUrl:
      post.mainImage?.asset?.url ||
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    publishedLabel: formatDateLabel(post.publishedAt),
    readTimeLabel: toReadTimeLabel(post.readTimeMinutes, post.excerpt),
    featured: Boolean(post.featured),
  };
}

function getDemoSectionsForPost(slug: string): BlogPostSection[] {
  return (
    DEMO_POST_SECTIONS[slug] ?? [
      {
        heading: '1. Design Insight',
        paragraphs: ['Discover practical furniture guidance rooted in craftsmanship, scale, and material performance.'],
      },
    ]
  );
}

function mapSanityBodyToSections(post: SanityBlogPost): BlogPostSection[] {
  const blocks = post.body ?? [];
  const sections: BlogPostSection[] = [];
  let currentHeading = '1. Article';
  let currentParagraphs: string[] = [];

  const flush = () => {
    if (currentParagraphs.length > 0) {
      sections.push({
        heading: currentHeading,
        paragraphs: currentParagraphs,
      });
      currentParagraphs = [];
    }
  };

  for (const block of blocks) {
    if (block._type !== 'block') continue;
    const text = (block.children ?? [])
      .filter((child) => child._type === 'span' && typeof child.text === 'string')
      .map((child) => child.text)
      .join('')
      .trim();

    if (!text) continue;

    if (block.style === 'h2' || block.style === 'h3') {
      flush();
      currentHeading = text;
      continue;
    }

    currentParagraphs.push(text);
  }

  flush();

  if (sections.length === 0) {
    return [
      {
        heading: '1. Overview',
        paragraphs: [
          post.excerpt?.trim() || 'This article will be populated with rich editorial content from your Sanity Studio.',
        ],
      },
    ];
  }

  return sections;
}

function normalizePage(page?: number): number {
  if (!page || !Number.isFinite(page)) return 1;
  return Math.max(1, Math.floor(page));
}

function getDemoBlogPageData(page?: number, activeFilter?: string): BlogPageData {
  const normalizedFilter = normalizeFilter(activeFilter);
  const featuredPost = DEMO_POSTS.find((post) => post.featured) || DEMO_POSTS[0];
  const listing = DEMO_POSTS.filter(
    (post) => post.id !== featuredPost.id && (normalizedFilter === 'all' || post.categoryValue === normalizedFilter)
  );
  const totalItems = listing.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / BLOG_PAGE_SIZE));
  const currentPage = Math.min(normalizePage(page), totalPages);
  const start = (currentPage - 1) * BLOG_PAGE_SIZE;
  const posts = listing.slice(start, start + BLOG_PAGE_SIZE);

  return {
    filters: DEMO_FILTERS.map((label) => ({
      label,
      value: label === 'All' ? 'all' : slugify(label),
    })),
    activeFilter: normalizedFilter,
    featuredPost,
    posts,
    pagination: {
      currentPage,
      totalPages,
      pageSize: BLOG_PAGE_SIZE,
      totalItems,
      hasPreviousPage: currentPage > 1,
      hasNextPage: currentPage < totalPages,
    },
    fromCms: false,
  };
}

function buildFilters(posts: BlogListItem[]): string[] {
  const unique = new Set<string>();

  posts.forEach((post) => {
    if (post.category.trim().length > 0) {
      unique.add(post.category.trim());
    }
  });

  return ['All', ...Array.from(unique)].slice(0, 6);
}

function buildFilterOptions(posts: BlogListItem[]): Array<{ label: string; value: string }> {
  return buildFilters(posts).map((label) => ({
    label,
    value: label === 'All' ? 'all' : slugify(label),
  }));
}

function buildFilterOptionsFromSanity(
  rows: Array<{ categories?: Array<{ title?: string; slug?: { current?: string } }> }>
): Array<{ label: string; value: string }> {
  const unique = new Map<string, string>();

  for (const row of rows) {
    for (const category of row.categories ?? []) {
      const label = category.title?.trim();
      if (!label) continue;

      const value = category.slug?.current?.trim() || slugify(label);
      if (!unique.has(value)) unique.set(value, label);
    }
  }

  return [
    { label: 'All', value: 'all' },
    ...Array.from(unique.entries()).map(([value, label]) => ({ label, value })),
  ].slice(0, 7);
}

export async function getBlogPageData(page?: number, activeFilter?: string): Promise<BlogPageData> {
  const requestedPage = normalizePage(page);
  const normalizedFilter = normalizeFilter(activeFilter);

  if (!hasSanityEnv()) {
    return getDemoBlogPageData(requestedPage, normalizedFilter);
  }

  try {
    const client = createSanityClient();
    const featuredRaw = await client.fetch<SanityBlogPost | null>(BLOG_FEATURED_QUERY);

    if (!featuredRaw?._id) {
      const result = await client.fetch<SanityBlogPost[]>(BLOG_LIST_QUERY);

      if (!Array.isArray(result) || result.length === 0) {
        return getDemoBlogPageData(requestedPage, normalizedFilter);
      }

      const mapped = result.map(mapSanityPost);
      const featuredPost = mapped[0];
      const listing = mapped
        .slice(1)
        .filter((post) => normalizedFilter === 'all' || post.categoryValue === normalizedFilter);
      const totalItems = listing.length;
      const totalPages = Math.max(1, Math.ceil(totalItems / BLOG_PAGE_SIZE));
      const currentPage = Math.min(requestedPage, totalPages);
      const start = (currentPage - 1) * BLOG_PAGE_SIZE;
      const posts = listing.slice(start, start + BLOG_PAGE_SIZE);

      return {
        filters: buildFilterOptions(mapped),
        activeFilter: normalizedFilter,
        featuredPost,
        posts,
        pagination: {
          currentPage,
          totalPages,
          pageSize: BLOG_PAGE_SIZE,
          totalItems,
          hasPreviousPage: currentPage > 1,
          hasNextPage: currentPage < totalPages,
        },
        fromCms: true,
      };
    }

    const featuredPost = mapSanityPost(featuredRaw);
    const totalItems = await client.fetch<number>(BLOG_LIST_COUNT_QUERY, {
      featuredId: featuredRaw._id,
      category: normalizedFilter,
    });

    const totalPages = Math.max(1, Math.ceil(totalItems / BLOG_PAGE_SIZE));
    const currentPage = Math.min(requestedPage, totalPages);
    const start = (currentPage - 1) * BLOG_PAGE_SIZE;
    const end = start + BLOG_PAGE_SIZE - 1;

    const pagePostsRaw = await client.fetch<SanityBlogPost[]>(BLOG_LIST_PAGINATED_QUERY, {
      featuredId: featuredRaw._id,
      category: normalizedFilter,
      start,
      end,
    });

    const filterRows = await client.fetch<Array<{ categories?: Array<{ title?: string; slug?: { current?: string } }> }>>(
      BLOG_FILTER_OPTIONS_QUERY
    );

    const posts = pagePostsRaw.map(mapSanityPost);

    return {
      filters: buildFilterOptionsFromSanity(filterRows),
      activeFilter: normalizedFilter,
      featuredPost,
      posts,
      pagination: {
        currentPage,
        totalPages,
        pageSize: BLOG_PAGE_SIZE,
        totalItems,
        hasPreviousPage: currentPage > 1,
        hasNextPage: currentPage < totalPages,
      },
      fromCms: true,
    };
  } catch {
    return getDemoBlogPageData(requestedPage, normalizedFilter);
  }
}

export async function getBlogPostDetail(slug: string): Promise<BlogPostDetail | null> {
  const normalizedSlug = slug.trim();
  if (!normalizedSlug) return null;

  const demoMatch = DEMO_POSTS.find((post) => post.slug === normalizedSlug);

  if (!hasSanityEnv()) {
    if (!demoMatch) return null;

    return {
      ...demoMatch,
      sections: getDemoSectionsForPost(demoMatch.slug),
      fromCms: false,
    };
  }

  try {
    const client = createSanityClient();
    const result = await client.fetch<SanityBlogPost | null>(BLOG_BY_SLUG_QUERY, {
      slug: normalizedSlug,
    });

    if (result?._id) {
      const mapped = mapSanityPost(result);

      return {
        ...mapped,
        sections: mapSanityBodyToSections(result),
        fromCms: true,
      };
    }

    if (!demoMatch) return null;

    return {
      ...demoMatch,
      sections: getDemoSectionsForPost(demoMatch.slug),
      fromCms: false,
    };
  } catch {
    if (!demoMatch) return null;

    return {
      ...demoMatch,
      sections: getDemoSectionsForPost(demoMatch.slug),
      fromCms: false,
    };
  }
}
