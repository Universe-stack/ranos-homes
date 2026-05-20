'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { FormEvent, useEffect, useMemo, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumb, { BreadcrumbItem } from '../../components/Breadcrumb';
import { generateProductBreadcrumbs, generateDemoBreadcrumbs } from '../../../sanity/lib/breadcrumbUtils';

type ProductReview = {
  _id: string;
  reviewerName: string;
  rating: number;
  title?: string;
  comment: string;
  submittedAt?: string;
  _createdAt?: string;
};

type ReviewsApiResponse = {
  reviews: ProductReview[];
  sanityReady: boolean;
  message?: string;
};

function formatReviewDate(value?: string): string {
  if (!value) return 'Recently';

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return 'Recently';

  const now = Date.now();
  const diffMs = now - date.getTime();
  const dayMs = 24 * 60 * 60 * 1000;

  const days = Math.floor(diffMs / dayMs);
  if (days <= 0) return 'Today';
  if (days === 1) return '1 day ago';
  if (days < 30) return `${days} days ago`;

  const months = Math.floor(days / 30);
  if (months === 1) return '1 month ago';
  if (months < 12) return `${months} months ago`;

  const years = Math.floor(months / 12);
  return years === 1 ? '1 year ago' : `${years} years ago`;
}

export default function ProductPage() {
  const routeParams = useParams<{ id: string }>();
  const productRouteId = routeParams?.id ?? '';
  const whatsappLink = 'https://wa.me/2347000000000?text=Hello%20RANOS%2C%20I%27d%20like%20to%20inquire%20about%20the%20Rolf%2031%22%20Dining%20Table.';
  
  // Breadcrumb state
  const [breadcrumbItems, setBreadcrumbItems] = useState<BreadcrumbItem[]>([
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
  ]);
  const [isBreadcrumbLoading, setIsBreadcrumbLoading] = useState(true);

  const galleryImages = [
    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1567538096051-b6643b1ea9a4?w=600&h=600&fit=crop',
  ];
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const [reviews, setReviews] = useState<ProductReview[]>([]);
  const [isReviewsLoading, setIsReviewsLoading] = useState(true);
  const [reviewsMessage, setReviewsMessage] = useState<string | null>(null);
  const [sanityReady, setSanityReady] = useState(false);

  const [showReviewForm, setShowReviewForm] = useState(false);
  const [isSubmittingReview, setIsSubmittingReview] = useState(false);
  const [reviewSubmitMessage, setReviewSubmitMessage] = useState<string | null>(null);

  const [reviewForm, setReviewForm] = useState({
    reviewerName: '',
    reviewerEmail: '',
    rating: 5,
    title: '',
    comment: '',
  });

  const loadReviews = async () => {
    if (!productRouteId) {
      setReviews([]);
      setIsReviewsLoading(false);
      return;
    }

    setIsReviewsLoading(true);

    try {
      const response = await fetch(`/api/products/${encodeURIComponent(productRouteId)}/reviews`, {
        cache: 'no-store',
      });

      const data = (await response.json()) as ReviewsApiResponse;

      if (!response.ok) {
        throw new Error(data.message || 'Failed to load reviews.');
      }

      setReviews(data.reviews || []);
      setSanityReady(Boolean(data.sanityReady));
      setReviewsMessage(data.message ?? null);
    } catch {
      setReviews([]);
      setSanityReady(false);
      setReviewsMessage('Reviews are temporarily unavailable.');
    } finally {
      setIsReviewsLoading(false);
    }
  };

  useEffect(() => {
    void loadReviews();
  }, [productRouteId]);

  // Load product data for breadcrumbs
  useEffect(() => {
    const loadBreadcrumbs = async () => {
      if (!productRouteId) {
        setIsBreadcrumbLoading(false);
        return;
      }

      setIsBreadcrumbLoading(true);
      try {
        // Try to fetch from Sanity API
        const response = await fetch('/api/products/breadcrumb', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ productId: productRouteId }),
        });

        if (response.ok) {
          const data = await response.json();
          const breadcrumbs = generateProductBreadcrumbs(data.product);
          setBreadcrumbItems(breadcrumbs);
        } else {
          // Fallback to demo breadcrumbs
          const demoBreadcrumbs = generateDemoBreadcrumbs(
            'Rolf 31" Dining Table',
            'Dining',
            'SKU7190'
          );
          setBreadcrumbItems(demoBreadcrumbs);
        }
      } catch (error) {
        // Fallback to demo breadcrumbs on error
        console.log('Using demo breadcrumbs');
        const demoBreadcrumbs = generateDemoBreadcrumbs(
          'Rolf 31" Dining Table',
          'Dining',
          'SKU7190'
        );
        setBreadcrumbItems(demoBreadcrumbs);
      } finally {
        setIsBreadcrumbLoading(false);
      }
    };

    void loadBreadcrumbs();
  }, [productRouteId]);

  const averageRating = useMemo(() => {
    if (reviews.length === 0) return null;
    const total = reviews.reduce((sum, review) => sum + review.rating, 0);
    return (total / reviews.length).toFixed(1);
  }, [reviews]);

  const handleReviewSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setReviewSubmitMessage(null);

    if (!productRouteId) {
      setReviewSubmitMessage('Product route is not ready yet. Please try again.');
      return;
    }

    if (!reviewForm.reviewerName.trim() || !reviewForm.comment.trim()) {
      setReviewSubmitMessage('Please enter your name and review.');
      return;
    }

    setIsSubmittingReview(true);

    try {
      const response = await fetch(`/api/products/${encodeURIComponent(productRouteId)}/reviews`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reviewForm),
      });

      const data = await response.json();

      if (!response.ok) {
        setReviewSubmitMessage(data.message || 'Could not submit review yet.');
        return;
      }

      setReviewSubmitMessage(data.message || 'Review submitted.');
      setReviewForm({
        reviewerName: '',
        reviewerEmail: '',
        rating: 5,
        title: '',
        comment: '',
      });

      await loadReviews();
    } catch {
      setReviewSubmitMessage('Network error while submitting review.');
    } finally {
      setIsSubmittingReview(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 pt-6">
        {/* Breadcrumbs */}
        {!isBreadcrumbLoading && <Breadcrumb items={breadcrumbItems} />}

        {/* Product Main Section */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 mb-16 sm:mb-20">
          {/* Left Column: Images */}
          <div className="lg:col-span-2 flex flex-col sm:flex-row gap-4 sm:gap-6">
            {/* Thumbnails */}
            <div className="flex sm:flex-col gap-4 sm:gap-4 w-full sm:w-16 flex-shrink-0 order-2 sm:order-1">
              {galleryImages.map((img, idx) => (
                <button
                  key={img}
                  type="button"
                  onClick={() => setSelectedImageIndex(idx)}
                  aria-label={`View image ${idx + 1}`}
                  className={`w-16 h-16 border transition-opacity overflow-hidden ${
                    idx === selectedImageIndex
                      ? 'border-[#1c1b1b] opacity-100'
                      : 'border-gray-300 opacity-50 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="relative flex-1 bg-[#f1f0ec] aspect-square sm:aspect-auto flex items-center justify-center overflow-hidden order-1 sm:order-2">
              <span className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-white text-black px-3 py-1 text-[9px] sm:text-[10px] font-[family:var(--font-body)] uppercase tracking-widest border border-gray-200 z-10">
                Best Seller
              </span>
              <button className="absolute top-4 sm:top-6 right-4 sm:right-6 z-10">
                <span className="material-symbols-outlined text-[#1c1b1b]">favorite</span>
              </button>
              <img
                src={galleryImages[selectedImageIndex]}
                alt="Product"
                className="w-full h-full object-contain mix-blend-multiply px-6 sm:px-12"
              />
            </div>
          </div>

          {/* Right Column: Product Info */}
          <div className="flex flex-col">
            <h1 className="text-2xl sm:text-4xl font-[family:var(--font-headline)] text-[#1c1b1b] mb-4 sm:mb-6 tracking-tight">
              Rolf 31" Dining Table
            </h1>

            {/* Price & Reviews */}
            <div className="flex items-center gap-4 mb-6 sm:mb-10">
              <span className="text-lg sm:text-xl text-[#a23f00] font-medium">₦599</span>
              <span className="text-gray-400 line-through text-sm">₦749</span>
            </div>

            <div className="flex items-center gap-3 mb-8 sm:mb-12">
              <div className="flex text-[#1c1b1b]">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-sm fill">
                    star
                  </span>
                ))}
              </div>
              <Link href="#reviews" className="text-xs sm:text-sm font-[family:var(--font-body)] text-gray-500 underline underline-offset-4">
                {reviews.length > 0 ? `${reviews.length} Reviews` : 'Reviews'}
              </Link>
            </div>

            {/* Options */}
            <div className="space-y-6 sm:space-y-8">
              {/* Collection */}
              <div>
                <p className="text-[10px] sm:text-[11px] font-[family:var(--font-body)] uppercase tracking-widest text-[#1c1b1b] mb-3 sm:mb-4">
                  Collection: <span className="font-normal text-gray-600">Table</span>
                </p>
                <div className="flex gap-3">
                  {['Table', 'Chair', 'Dining Set'].map((opt) => (
                    <button
                      key={opt}
                      className={`px-6 sm:px-8 py-2 sm:py-3 border text-[10px] sm:text-[11px] font-[family:var(--font-body)] uppercase tracking-widest ${
                        opt === 'Table'
                          ? 'border-[#1c1b1b] text-[#1c1b1b]'
                          : 'border-gray-200 text-gray-400'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Top Finish */}
              <div>
                <p className="text-[10px] sm:text-[11px] font-[family:var(--font-body)] uppercase tracking-widest text-[#1c1b1b] mb-3 sm:mb-4">
                  Top Finish: <span className="font-normal text-gray-600">White Engineered Stone</span>
                </p>
                <div className="flex gap-3 sm:gap-4">
                  <div className="w-14 sm:w-16 h-10 border border-gray-200 bg-[#e8e1d5] cursor-pointer hover:border-[#1c1b1b]"></div>
                  <div className="w-14 sm:w-16 h-10 border border-gray-200 bg-[#757575] cursor-pointer hover:border-[#1c1b1b]"></div>
                  <div className="w-14 sm:w-16 h-10 border-2 border-[#1c1b1b] bg-[#f5f5f5] cursor-pointer"></div>
                </div>
              </div>

              {/* Size */}
              <div>
                <p className="text-[10px] sm:text-[11px] font-[family:var(--font-body)] uppercase tracking-widest text-[#1c1b1b] mb-3 sm:mb-4">
                  Size: <span className="font-normal text-gray-600">31"</span>
                </p>
                <div className="flex gap-3">
                  {['31"', '39"'].map((size) => (
                    <button
                      key={size}
                      className={`px-6 sm:px-8 py-2 sm:py-3 border text-[10px] sm:text-[11px] font-[family:var(--font-body)] uppercase tracking-widest ${
                        size === '31"'
                          ? 'border-[#1c1b1b] text-[#1c1b1b]'
                          : 'border-gray-200 text-gray-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 sm:mt-12 space-y-4 sm:space-y-6">
              <Link
                href={whatsappLink}
                target="_blank"
                className="block w-full bg-[#2c1b14] text-white py-4 sm:py-5 font-[family:var(--font-body)] uppercase tracking-[0.2em] text-center hover:bg-black transition-colors text-xs sm:text-sm font-semibold"
              >
                Inquire on WhatsApp
              </Link>
              <div className="bg-gray-50 p-3 sm:p-4 flex items-center justify-between border border-gray-200">
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="material-symbols-outlined text-gray-600 text-lg">local_shipping</span>
                  <span className="text-[10px] sm:text-[11px] font-[family:var(--font-body)] uppercase tracking-widest text-gray-600">
                    Delivery services available
                  </span>
                </div>
                <span className="material-symbols-outlined text-sm text-gray-400">help</span>
              </div>
              <div className="pt-2 border-t border-gray-200 flex items-center justify-between cursor-pointer">
                <span className="text-[10px] sm:text-[11px] font-[family:var(--font-body)] uppercase tracking-widest text-[#1c1b1b]">
                  Our Guarantees
                </span>
                <span className="material-symbols-outlined text-gray-400">add</span>
              </div>
            </div>
          </div>
        </section>

        {/* Product Details Accordion */}
        <section className="max-w-4xl mx-auto mb-16 sm:mb-32">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-[family:var(--font-headline)] mb-6 sm:mb-8">
              Product Details
            </h2>
            <p className="text-gray-600 font-[family:var(--font-body)] leading-relaxed max-w-2xl mx-auto text-sm sm:text-base">
              The Rolf Collection reimagines mid-century proportions through a lens of contemporary craft. Each piece features a signature fluted base, hand-finished to highlight the natural grain of the sustainably sourced oak.
            </p>
          </div>
          <div className="border-t border-gray-200">
            {['Dimensions', 'Assembly & Care', 'Shipping & Returns'].map((item) => (
              <div key={item} className="py-6 sm:py-8 border-b border-gray-200 cursor-pointer group">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] sm:text-[11px] font-[family:var(--font-body)] uppercase tracking-widest text-[#1c1b1b]">
                    {item}
                  </span>
                  <span className="material-symbols-outlined text-gray-400 group-hover:rotate-180 transition-transform">
                    expand_more
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why You'll Love It */}
        <section className="mb-16 sm:mb-32">
          <h2 className="text-lg sm:text-xl font-[family:var(--font-body)] uppercase tracking-[0.1em] mb-6 sm:mb-8">
            Why You'll Love It
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 mb-8">
            {[
              'Fluting underscores the texture and depth of the pedestal base, creating a rhythmic visual interest.',
              'Designed with small spaces in mind, the 31" diameter fits perfectly into urban dining nooks or foyers.',
              'Smooth rounded shape gathers a crowd naturally, removing sharp corners for a more intimate experience.',
            ].map((text, idx) => (
              <div key={idx} className="flex gap-3">
                <span className="text-sm flex-shrink-0">-</span>
                <p className="text-sm sm:text-base font-[family:var(--font-body)] leading-[1.6] text-[#1c1b1b]">
                  {text}
                </p>
              </div>
            ))}
          </div>
          <img
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1000&h=600&fit=crop"
            alt="Room scene"
            className="w-full h-auto object-cover"
          />
        </section>

        {/* Customer Reviews */}
        <section id="reviews" className="mb-16 sm:mb-32">
          <h2 className="text-lg sm:text-xl font-[family:var(--font-body)] uppercase tracking-[0.1em] mb-8 sm:mb-12">
            Customer Reviews
          </h2>
          <div className="flex flex-col sm:flex-row justify-between items-start gap-6 sm:gap-8 mb-12 sm:mb-16">
            <div className="flex items-center gap-4 sm:gap-6">
              <span className="text-4xl sm:text-[64px] font-light leading-none">{averageRating ?? '0.0'}</span>
              <div>
                <div className="flex text-[#1c1b1b] mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-lg fill">
                      star
                    </span>
                  ))}
                </div>
                <span className="text-[10px] sm:text-[11px] font-[family:var(--font-body)] text-gray-400 tracking-wider">
                  {reviews.length} Reviews
                </span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full sm:w-auto">
              <select className="w-full sm:w-auto appearance-none bg-white border border-gray-300 py-2 sm:py-3 px-4 text-[11px] sm:text-[12px] font-[family:var(--font-body)] tracking-wider uppercase focus:outline-none focus:border-[#1c1b1b]">
                <option>Recommended</option>
              </select>
              <button
                onClick={() => setShowReviewForm((prev) => !prev)}
                className="bg-black text-white px-6 sm:px-8 py-2 sm:py-3 text-[11px] sm:text-[12px] font-[family:var(--font-body)] tracking-widest uppercase hover:bg-gray-800 transition-colors"
              >
                Write a Review
              </button>
            </div>
          </div>

          {showReviewForm && (
            <form onSubmit={handleReviewSubmit} className="border border-gray-200 p-4 sm:p-6 mb-8 sm:mb-10 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="flex flex-col gap-2 text-[11px] uppercase tracking-widest font-[family:var(--font-body)] text-[#1c1b1b]">
                  Name
                  <input
                    type="text"
                    value={reviewForm.reviewerName}
                    onChange={(event) => setReviewForm((prev) => ({ ...prev, reviewerName: event.target.value }))}
                    className="border border-gray-300 px-3 py-2 text-sm normal-case tracking-normal"
                    required
                  />
                </label>
                <label className="flex flex-col gap-2 text-[11px] uppercase tracking-widest font-[family:var(--font-body)] text-[#1c1b1b]">
                  Email (optional)
                  <input
                    type="email"
                    value={reviewForm.reviewerEmail}
                    onChange={(event) => setReviewForm((prev) => ({ ...prev, reviewerEmail: event.target.value }))}
                    className="border border-gray-300 px-3 py-2 text-sm normal-case tracking-normal"
                  />
                </label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="flex flex-col gap-2 text-[11px] uppercase tracking-widest font-[family:var(--font-body)] text-[#1c1b1b]">
                  Rating
                  <select
                    value={reviewForm.rating}
                    onChange={(event) => setReviewForm((prev) => ({ ...prev, rating: Number(event.target.value) }))}
                    className="border border-gray-300 px-3 py-2 text-sm normal-case tracking-normal"
                  >
                    {[5, 4, 3, 2, 1].map((value) => (
                      <option key={value} value={value}>{value}</option>
                    ))}
                  </select>
                </label>
                <label className="flex flex-col gap-2 text-[11px] uppercase tracking-widest font-[family:var(--font-body)] text-[#1c1b1b]">
                  Title (optional)
                  <input
                    type="text"
                    value={reviewForm.title}
                    onChange={(event) => setReviewForm((prev) => ({ ...prev, title: event.target.value }))}
                    className="border border-gray-300 px-3 py-2 text-sm normal-case tracking-normal"
                  />
                </label>
              </div>

              <label className="flex flex-col gap-2 text-[11px] uppercase tracking-widest font-[family:var(--font-body)] text-[#1c1b1b]">
                Review
                <textarea
                  rows={4}
                  value={reviewForm.comment}
                  onChange={(event) => setReviewForm((prev) => ({ ...prev, comment: event.target.value }))}
                  className="border border-gray-300 px-3 py-2 text-sm normal-case tracking-normal"
                  required
                />
              </label>

              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  disabled={isSubmittingReview}
                  className="bg-black text-white px-6 py-2 text-[11px] uppercase tracking-widest font-[family:var(--font-body)] disabled:opacity-60"
                >
                  {isSubmittingReview ? 'Submitting...' : 'Submit Review'}
                </button>
                {reviewSubmitMessage && (
                  <p className="text-sm text-[#4f4441]">{reviewSubmitMessage}</p>
                )}
              </div>
            </form>
          )}

          {reviewsMessage && (
            <p className="text-sm text-[#4f4441] mb-6">{reviewsMessage}</p>
          )}

          {isReviewsLoading ? (
            <p className="text-sm text-[#4f4441] mb-8">Loading reviews...</p>
          ) : reviews.length === 0 ? (
            <p className="text-sm text-[#4f4441] mb-8">
              {sanityReady
                ? 'No approved reviews yet. Be the first to write one.'
                : 'Sanity reviews will appear here once your project setup is complete.'}
            </p>
          ) : (
            <div className="space-y-8">
              {reviews.map((review) => (
                <div key={review._id} className="flex flex-col sm:flex-row gap-6 sm:gap-8 border-b border-gray-100 pb-8 sm:pb-10">
                  <div className="sm:w-1/4">
                    <p className="text-[12px] sm:text-[13px] font-bold mb-2">{review.reviewerName}</p>
                    <div className="flex text-[#1c1b1b] mb-2">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="material-symbols-outlined text-sm fill">
                          {i < review.rating ? 'star' : 'star_outline'}
                        </span>
                      ))}
                    </div>
                    <p className="text-[10px] sm:text-[11px] text-gray-400 font-[family:var(--font-body)]">
                      {formatReviewDate(review.submittedAt || review._createdAt)}
                    </p>
                  </div>
                  <div className="flex-1">
                    {review.title && (
                      <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">{review.title}</h3>
                    )}
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl font-[family:var(--font-body)]">
                      {review.comment}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>

      <Footer />
    </main>
  );
}
