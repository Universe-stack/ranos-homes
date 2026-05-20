import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getBlogPageData } from '../lib/blogData';

type BlogPageProps = {
  searchParams?: Promise<{
    page?: string;
    category?: string;
  }>;
};

function parsePageNumber(value?: string): number {
  const parsed = Number(value);

  if (!Number.isFinite(parsed)) return 1;
  return Math.max(1, Math.floor(parsed));
}

function pageHref(page: number, category: string): string {
  const params = new URLSearchParams();

  if (page > 1) {
    params.set('page', String(page));
  }

  if (category !== 'all') {
    params.set('category', category);
  }

  const query = params.toString();
  return query ? `/blog?${query}` : '/blog';
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = (await searchParams) ?? {};
  const requestedPage = parsePageNumber(params.page);
  const activeCategory = params.category;
  const { filters, activeFilter, featuredPost, posts, pagination } = await getBlogPageData(requestedPage, activeCategory);

  return (
    <div className="min-h-screen bg-[#f4f4f4] text-[#1c1b1b]">
      <Header />

      <main className="mx-auto w-full max-w-360 px-4 py-8 sm:px-12 sm:py-10">
        <section className="relative mb-10 overflow-hidden rounded-none border border-black/5 bg-[#222] text-white shadow-[0_8px_30px_rgba(0,0,0,0.14)]">
          <Link href={`/blog/${featuredPost.slug}`} className="block">
            <img
              src={featuredPost.imageUrl}
              alt={featuredPost.title}
              className="h-90 w-full object-cover sm:h-97.5"
            />
          </Link>
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-5 sm:p-7">
            <span className="w-fit rounded-noneg-white/15 px-3 py-1 text-[10px] font-semibold tracking-wide text-white backdrop-blur-sm">
              {featuredPost.category}
            </span>

            <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
              <div className="max-w-152.5">
                <Link href={`/blog/${featuredPost.slug}`} className="inline-block">
                  <h1 className="font-(--font-headline) text-[28px] leading-[1.08] text-white sm:text-[39px] hover:text-white/90 transition-colors">
                    {featuredPost.title}
                  </h1>
                </Link>
                <p className="mt-3 max-w-140 text-[12px] leading-relaxed text-white/80 sm:text-[13px]">
                  {featuredPost.excerpt}
                </p>
              </div>

              <div className="flex items-center gap-3 rounded-noneg-white/10 px-3 py-2 text-[11px] text-white/90 backdrop-blur-sm">
                <img
                  src={featuredPost.authorAvatarUrl}
                  alt={featuredPost.authorName}
                  className="h-8 w-8 rounded-nonebject-cover"
                />
                <div>
                  <p className="font-semibold leading-tight">{featuredPost.authorName}</p>
                  <p className="mt-0.5 text-[10px] text-white/70">{featuredPost.publishedLabel} • {featuredPost.readTimeLabel}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="mb-4 flex items-end justify-between gap-3">
            <div>
              <h2 className="font-(--font-headline) text-[30px] leading-none text-[#1b1b1b]">Blog</h2>
              <p className="mt-2 text-[12px] text-[#686868]">
                Design notes, buying guides, and craftsmanship stories from the Ranos Homes studio.
              </p>
            </div>
            <button
              type="button"
              className="inline-flex items-center gap-1 rounded-noneder border-black/10 bg-white px-3 py-2 text-[11px] font-semibold text-[#444]"
            >
              Sort by
              <span className="text-[#777]">Newest</span>
              <span className="material-symbols-outlined text-sm">keyboard_arrow_down</span>
            </button>
          </div>

          <div className="mb-6 flex flex-wrap gap-2">
            {filters.map((filter) => {
              const active = filter.value === activeFilter;
              return (
                <a
                  key={filter.value}
                  href={pageHref(1, filter.value)}
                  className={`rounded-noneorder px-3 py-1.5 text-[11px] font-medium transition-colors ${
                    active
                      ? 'border-[#d4d4d4] bg-white text-[#111]'
                      : 'border-transparent bg-white/60 text-[#666] hover:bg-white hover:text-[#222]'
                  }`}
                  aria-current={active ? 'true' : undefined}
                >
                  {filter.label}
                </a>
              );
            })}
          </div>

          {posts.length === 0 && (
            <div className="rounded-noneder border-dashed border-black/20 bg-white/70 p-8 text-center">
              <p className="font-(--font-headline) text-xl text-[#1c1b1b]">No posts found for this category</p>
              <p className="mt-2 text-sm text-[#6a6a6a]">Try another filter to discover more furniture stories.</p>
            </div>
          )}

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {posts.map((card) => (
              <article
                key={card.id}
                className="overflow-hidden rounded-noneder border-black/8 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
              >
                <div className="relative">
                  <img src={card.imageUrl} alt={card.title} className="h-45 w-full object-cover" />
                  <span className="absolute left-3 top-3 rounded-noneg-white/90 px-2.5 py-1 text-[10px] font-semibold text-[#444]">
                    {card.category}
                  </span>
                </div>

                <div className="p-4">
                  <p className="text-[10px] text-[#727272]">
                    {card.publishedLabel} • {card.readTimeLabel}
                  </p>
                  <h3 className="mt-2 font-(--font-headline) text-[20px] leading-[1.2] text-[#151515]">
                    <Link href={`/blog/${card.slug}`} className="hover:text-[#5a463d] transition-colors">
                      {card.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-[12px] leading-relaxed text-[#6a6a6a]">{card.excerpt}</p>

                  <div className="mt-5 flex items-center gap-2.5 border-t border-black/8 pt-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-noneg-[#f3e0d7] text-[9px] font-bold text-[#7c4a33]">
                      {card.authorName
                        .split(' ')
                        .map((part) => part.charAt(0))
                        .join('')
                        .slice(0, 2)}
                    </div>
                    <p className="text-[11px] font-semibold text-[#383838]">{card.authorName}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-noneder border-black/10 bg-white px-4 py-3">
            <p className="text-[11px] text-[#5f5f5f]">
              Page {pagination.currentPage} of {pagination.totalPages}
            </p>

            <div className="flex items-center gap-2">
              <a
                href={pageHref(pagination.currentPage - 1, activeFilter)}
                aria-disabled={!pagination.hasPreviousPage}
                className={`inline-flex items-center gap-1 rounded-noneder px-3 py-1.5 text-[11px] font-semibold ${
                  pagination.hasPreviousPage
                    ? 'border-black/15 bg-white text-[#1c1b1b] hover:bg-[#1c1b1b] hover:text-white'
                    : 'pointer-events-none border-black/10 bg-[#f5f5f5] text-[#a1a1a1]'
                }`}
              >
                <span className="material-symbols-outlined text-sm">west</span>
                Previous
              </a>

              {Array.from({ length: pagination.totalPages }, (_, index) => index + 1).map((page) => {
                const active = page === pagination.currentPage;

                return (
                  <a
                    key={page}
                    href={pageHref(page, activeFilter)}
                    className={`inline-flex h-8 w-8 items-center justify-center rounded-noneder text-[11px] font-semibold ${
                      active
                        ? 'border-[#1c1b1b] bg-[#1c1b1b] text-white'
                        : 'border-black/15 bg-white text-[#1c1b1b] hover:bg-[#f1f1f1]'
                    }`}
                    aria-current={active ? 'page' : undefined}
                  >
                    {page}
                  </a>
                );
              })}

              <a
                href={pageHref(pagination.currentPage + 1, activeFilter)}
                aria-disabled={!pagination.hasNextPage}
                className={`inline-flex items-center gap-1 rounded-noneder px-3 py-1.5 text-[11px] font-semibold ${
                  pagination.hasNextPage
                    ? 'border-black/15 bg-white text-[#1c1b1b] hover:bg-[#1c1b1b] hover:text-white'
                    : 'pointer-events-none border-black/10 bg-[#f5f5f5] text-[#a1a1a1]'
                }`}
              >
                Next
                <span className="material-symbols-outlined text-sm">east</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
