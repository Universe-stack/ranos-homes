import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { getBlogPostDetail } from '../../lib/blogData';
import { notFound } from 'next/navigation';

type BlogPostPageProps = {
  params: Promise<{
    'post-slug': string;
  }>;
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const routeParams = await params;
  const slug = routeParams['post-slug'];
  const post = await getBlogPostDetail(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#f5f4f2] text-[#1f1f1f]">
      <Header />

      <main className="mx-auto w-full max-w-360 px-4 py-10 sm:px-12 sm:py-14">
        <article className="mx-auto w-4/5 border border-black/10 bg-white px-5 py-10 shadow-[0_8px_28px_rgba(0,0,0,0.06)] sm:px-10">
          <header className="border-b border-black/10 pb-7 text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#6e655f]">{post.category}</p>
            <h1 className="mt-3 font-(--font-headline) text-[29px] leading-tight tracking-tight text-[#1b1b1b] sm:text-[42px]">
              {post.title}
            </h1>
            <p className="mx-auto mt-3 max-w-155 text-[13px] leading-7 tracking-wide text-[#6f6762]">{post.excerpt}</p>

            <div className="mt-5 flex items-center justify-center gap-3">
              <img
                src={post.authorAvatarUrl}
                alt={post.authorName}
                className="h-9 w-9 rounded-full object-cover"
              />
              <div className="text-left">
                <p className="text-[12px] font-semibold tracking-wide text-[#2f2f2f]">{post.authorName}</p>
                <p className="text-[11px] tracking-wide text-[#7f7671]">{post.publishedLabel} • {post.readTimeLabel}</p>
              </div>
            </div>
          </header>

          <div className="mt-8 overflow-hidden border border-black/10">
            <img src={post.imageUrl} alt={post.title} className="h-75 w-full object-cover sm:h-96" />
          </div>

          <div className="mt-8 space-y-8">
            {post.sections.map((section, index) => (
              <section key={`${section.heading}-${index}`}>
                <h2 className="font-(--font-headline) text-[28px] leading-tight tracking-tight text-[#1d1d1d]">{section.heading}</h2>

                <div className="mt-4 space-y-4 text-[14px] leading-7 tracking-wide text-[#47403b]">
                  {section.paragraphs.map((paragraph, paragraphIndex) => {
                    const isFirstParagraph = index === 0 && paragraphIndex === 0;

                    if (!isFirstParagraph) {
                      return <p key={paragraphIndex}>{paragraph}</p>;
                    }

                    return (
                      <p key={paragraphIndex}>
                        <span className="float-left mr-2 mt-1 font-(--font-headline) text-[44px] leading-none text-[#1e1e1e]">
                          {paragraph.charAt(0)}
                        </span>
                        {paragraph.slice(1)}
                      </p>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
