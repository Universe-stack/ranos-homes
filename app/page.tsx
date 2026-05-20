'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  const whatsappLink = 'https://wa.me/2347000000000?text=Hello%20RANOS%2C%20I%27d%20like%20to%20inquire%20about%20your%20furniture%20collection.';
  const [bestsellerIndex, setBestsellerIndex] = useState(0);
  const [bestsellersPerView, setBestsellersPerView] = useState(3);
  const [isBestsellerHovered, setIsBestsellerHovered] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [isTestimonialHovered, setIsTestimonialHovered] = useState(false);

  const bestsellers = [
    { name: 'Linear Task Lamp', price: '₦450', img: 'https://images.unsplash.com/photo-1565636192335-14a9e1c5bd26?w=350&h=350&fit=crop', tag: 'New Arrival' },
    { name: 'Walnut Trestle Chair', price: '₦890', img: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=350&h=350&fit=crop', tag: 'Timeless' },
    { name: 'Stone Earth Vase Set', price: '₦220', img: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=350&h=350&fit=crop', tag: 'Heritage' },
    { name: 'Ash Tripod Stool', price: '₦340', img: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=350&h=350&fit=crop', tag: 'Limited Edition' },
  ];

  const logos = ['HUNKER', 'tasting table', 'dwell', 'REFINERY29', 'Vogue'];

  const testimonials = [
    {
      title: 'Excellent',
      reviews: '1,248 reviews',
      quote:
        "The craftsmanship is unparalleled. My Ranos table isn't just furniture, it's an heirloom that defines the room.",
      author: 'Julianne K., New York',
    },
    {
      title: 'Amazing Quality',
      reviews: '1,331 reviews',
      quote:
        'From consultation to delivery, everything felt premium. The custom finish matched my interior perfectly.',
      author: 'Aisha O., Lagos',
    },
    {
      title: 'Worth Every Naira',
      reviews: '1,402 reviews',
      quote:
        'The sofa transformed our living room. You can feel the attention to detail in every stitch and joint.',
      author: 'Tunde E., Abuja',
    },
  ];

  useEffect(() => {
    const updateBestsellersPerView = () => {
      if (window.innerWidth >= 1024) {
        setBestsellersPerView(3);
        return;
      }

      if (window.innerWidth >= 640) {
        setBestsellersPerView(2);
        return;
      }

      setBestsellersPerView(1);
    };

    updateBestsellersPerView();
    window.addEventListener('resize', updateBestsellersPerView);

    return () => window.removeEventListener('resize', updateBestsellersPerView);
  }, []);

  const maxBestsellerIndex = Math.max(0, bestsellers.length - bestsellersPerView);
  const safeBestsellerIndex = Math.min(bestsellerIndex, maxBestsellerIndex);

  useEffect(() => {
    if (isBestsellerHovered) return;

    const interval = window.setInterval(() => {
      setBestsellerIndex((current) => {
        if (current >= maxBestsellerIndex) return 0;
        return current + 1;
      });
    }, 4500);

    return () => window.clearInterval(interval);
  }, [isBestsellerHovered, maxBestsellerIndex]);

  useEffect(() => {
    if (isTestimonialHovered) return;

    const interval = window.setInterval(() => {
      setTestimonialIndex((current) => (current + 1) % testimonials.length);
    }, 6000);

    return () => window.clearInterval(interval);
  }, [isTestimonialHovered, testimonials.length]);

  const activeTestimonial = testimonials[testimonialIndex];

  const goToPreviousTestimonial = () => {
    setTestimonialIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  const goToNextTestimonial = () => {
    setTestimonialIndex((current) => (current + 1) % testimonials.length);
  };

  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[500px] sm:h-[700px] lg:h-[921px] w-full flex items-center justify-center overflow-hidden bg-[#2c1b14]">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-60 mix-blend-overlay"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&h=900&fit=crop')`,
          }}
        />
        <div className="relative z-10 text-center flex flex-col items-center gap-6 sm:gap-8 max-w-4xl px-4 sm:px-6 lg:px-12">
          <h2 className="font-[family:var(--font-headline)] text-3xl sm:text-4xl lg:text-6xl xl:text-[84px] text-white italic leading-tight tracking-tight">
            The Onward Collection
          </h2>
          <p className="font-[family:var(--font-body)] text-base sm:text-lg text-white/80 max-w-xl mx-auto">
            Exploring the intersection of architectural heritage and contemporary comfort through curated materials.
          </p>
          <Link
            href={whatsappLink}
            target="_blank"
            className="mt-4 px-8 sm:px-12 py-3 sm:py-4 bg-white text-[#2c1b14] font-[family:var(--font-body)] font-semibold text-xs sm:text-sm uppercase tracking-widest hover:bg-[#a23f00] hover:text-white transition-all duration-500"
          >
            Explore Now
          </Link>
        </div>
      </section>

      {/* Collections Section */}
      <section className="py-12 sm:py-16 lg:py-32 px-4 sm:px-12 bg-[#fcf9f8]">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-16 gap-4">
            <h3 className="font-[family:var(--font-headline)] text-3xl sm:text-4xl text-[#1c1b1b]">
              Explore The Collection
            </h3>
            <Link
              href="/shop"
              className="font-[family:var(--font-body)] text-xs sm:text-sm text-[#a23f00] border-b border-[#a23f00] pb-1 flex items-center gap-2 hover:opacity-70"
            >
              View All Collections{' '}
              <span className="material-symbols-outlined text-sm">east</span>
            </Link>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
            {[
              {
                title: 'Dent Cabinet',
                desc: 'Sculptural storage in solid white oak.',
                img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=500&fit=crop',
                label: 'Casegoods',
              },
              {
                title: 'Selina Arm Chair',
                desc: 'Organic curves meet tactile bouclé.',
                img: 'https://images.unsplash.com/photo-1567538096051-b6643b1ea9a4?w=400&h=500&fit=crop',
                label: 'Seating',
              },
              {
                title: 'Isley Sofa',
                desc: 'Architectural comfort for the modern home.',
                img: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=400&h=500&fit=crop',
                label: 'Upholstery',
              },
            ].map((item, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative aspect-[3/4] mb-4 sm:mb-6 overflow-hidden bg-[#f6f3f2]">
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 z-10">
                    <span className="font-[family:var(--font-body)] text-xs uppercase tracking-tighter">
                      {item.label}
                    </span>
                  </div>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <h4 className="font-[family:var(--font-headline)] text-xl sm:text-2xl text-[#1c1b1b]">
                  {item.title}
                </h4>
                <p className="font-[family:var(--font-body)] text-sm sm:text-base text-[#4f4441] mt-2">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section
        className="py-12 sm:py-16 lg:py-32 bg-[#f6f3f2] overflow-hidden"
        onMouseEnter={() => setIsBestsellerHovered(true)}
        onMouseLeave={() => setIsBestsellerHovered(false)}
      >
        <div className="px-4 sm:px-12 max-w-[1440px] mx-auto mb-8 sm:mb-12 flex items-end justify-between gap-6">
          <div>
            <h3 className="font-[family:var(--font-body)] text-xs sm:text-sm text-[#4f4441] uppercase mb-4 tracking-[0.3em]">
              The Bestsellers
            </h3>
            <h2 className="font-[family:var(--font-headline)] text-3xl sm:text-4xl text-[#1c1b1b]">
              Curated Favorites
            </h2>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => setBestsellerIndex((current) => (Math.min(current, maxBestsellerIndex) <= 0 ? maxBestsellerIndex : Math.min(current, maxBestsellerIndex) - 1))}
              aria-label="Previous bestseller"
              className="h-10 w-10 rounded-full border border-[#d3c3be] bg-white text-[#1c1b1b] hover:border-[#1c1b1b] transition-colors"
            >
              <span className="material-symbols-outlined text-lg">west</span>
            </button>
            <button
              type="button"
              onClick={() => setBestsellerIndex((current) => (Math.min(current, maxBestsellerIndex) >= maxBestsellerIndex ? 0 : Math.min(current, maxBestsellerIndex) + 1))}
              aria-label="Next bestseller"
              className="h-10 w-10 rounded-full border border-[#d3c3be] bg-white text-[#1c1b1b] hover:border-[#1c1b1b] transition-colors"
            >
              <span className="material-symbols-outlined text-lg">east</span>
            </button>
          </div>
        </div>
        <div className="px-4 sm:px-12 pb-12 sm:pb-16 overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${(100 / bestsellersPerView) * safeBestsellerIndex}%)` }}
          >
            {bestsellers.map((product, idx) => (
              <div key={idx} className="w-full sm:w-1/2 lg:w-1/3 flex-none px-3 sm:px-4 group">
              <div className="bg-white aspect-square mb-6 flex items-center justify-center p-8 transition-shadow duration-500 group-hover:shadow-xl">
                <img
                  src={product.img}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain mix-blend-multiply"
                />
              </div>
              <div className="space-y-2">
                <p className="font-[family:var(--font-body)] text-xs sm:text-sm text-[#a23f00] uppercase tracking-widest">
                  {product.tag}
                </p>
                <h5 className="font-[family:var(--font-headline)] text-lg sm:text-xl text-[#1c1b1b]">
                  {product.name}
                </h5>
                <p className="font-[family:var(--font-body)] text-sm text-[#4f4441]">
                  {product.price}
                </p>
                <Link
                  href="/shop"
                  className="inline-block mt-4 text-xs sm:text-sm font-semibold border-b border-[#1c1b1b]/20 hover:border-[#1c1b1b] transition-all"
                >
                  Discover Now →
                </Link>
              </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-12 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="font-[family:var(--font-headline)] text-3xl sm:text-4xl text-[#1c1b1b] mb-4 italic">
              #LiveWithRANOS
            </h2>
            <p className="font-[family:var(--font-body)] text-base sm:text-lg text-[#4f4441]">
              Sharing moments of architectural serenity from our global community.
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-2 sm:gap-4 h-[400px] sm:h-[600px] lg:h-[800px]">
            <div className="col-span-2 row-span-2 relative overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=800&fit=crop"
                alt="Interior"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            {[
              'https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=400&h=400&fit=crop',
              'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=400&fit=crop',
              'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop',
              'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop',
            ].map((img, idx) => (
              <div key={idx} className="relative overflow-hidden group">
                <img
                  src={img}
                  alt="Gallery"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        className="py-12 sm:py-16 lg:py-24 px-4 sm:px-12 bg-[#f6f3f2] border-y border-[#d3c3be]/30"
        onMouseEnter={() => setIsTestimonialHovered(true)}
        onMouseLeave={() => setIsTestimonialHovered(false)}
      >
        <div className="max-w-[1440px] mx-auto flex flex-col items-center">
          <h4 className="font-[family:var(--font-body)] text-xs sm:text-sm text-[#4f4441] uppercase tracking-[0.4em] mb-8 sm:mb-12">
            As Seen On
          </h4>
          <div className="logo-marquee w-[90%] mx-auto mb-12 sm:mb-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
            <div className="logo-marquee-track">
              {logos.map((pub) => (
                <div key={`logo-a-${pub}`} className="logo-marquee-item font-[family:var(--font-headline)] text-lg sm:text-2xl italic whitespace-nowrap">
                  {pub}
                </div>
              ))}
            </div>
            <div className="logo-marquee-track" aria-hidden="true">
              {logos.map((pub) => (
                <div key={`logo-b-${pub}`} className="logo-marquee-item font-[family:var(--font-headline)] text-lg sm:text-2xl italic whitespace-nowrap">
                  {pub}
                </div>
              ))}
            </div>
          </div>

          {/* Review Card */}
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 bg-white p-6 sm:p-12 w-full max-w-4xl shadow-sm border border-[#d3c3be]/10">
            <div className="flex flex-col items-center lg:items-start flex-1 border-b lg:border-b-0 lg:border-r border-[#d3c3be]/20 pb-8 lg:pb-0 lg:pr-12">
              <div className="flex gap-1 text-[#a23f00] mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-lg fill">
                    star
                  </span>
                ))}
              </div>
              <p className="font-[family:var(--font-headline)] text-xl sm:text-2xl italic mb-2 text-[#0f0401]">
                &quot;{activeTestimonial.title}&quot;
              </p>
              <p className="font-[family:var(--font-body)] text-xs sm:text-sm text-[#4f4441]">
                Based on <span className="font-bold underline">{activeTestimonial.reviews}</span>
              </p>
            </div>
            <div className="flex-1 text-center lg:text-left">
              <p className="font-[family:var(--font-body)] text-base sm:text-lg italic text-[#4f4441] leading-relaxed">
                &quot;{activeTestimonial.quote}&quot;
              </p>
              <p className="font-[family:var(--font-body)] text-xs sm:text-sm text-[#4f4441] mt-4 uppercase tracking-widest">
                — {activeTestimonial.author}
              </p>
              <div className="mt-6 flex items-center justify-center lg:justify-start gap-3">
                <button
                  type="button"
                  onClick={goToPreviousTestimonial}
                  aria-label="Previous testimonial"
                  className="h-9 w-9 rounded-full border border-[#d3c3be] text-[#1c1b1b] hover:border-[#1c1b1b] transition-colors"
                >
                  <span className="material-symbols-outlined text-lg">west</span>
                </button>
                <button
                  type="button"
                  onClick={goToNextTestimonial}
                  aria-label="Next testimonial"
                  className="h-9 w-9 rounded-full border border-[#d3c3be] text-[#1c1b1b] hover:border-[#1c1b1b] transition-colors"
                >
                  <span className="material-symbols-outlined text-lg">east</span>
                </button>
              </div>
              <div className="mt-5 flex items-center justify-center lg:justify-start gap-2">
                {testimonials.map((item, idx) => (
                  <button
                    key={item.author}
                    type="button"
                    onClick={() => setTestimonialIndex(idx)}
                    aria-label={`Go to testimonial ${idx + 1}`}
                    className={`h-1.5 rounded-full transition-all ${
                      idx === testimonialIndex ? 'w-8 bg-[#a23f00]' : 'w-4 bg-[#d3c3be]'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showrooms Section */}
      <section className="relative h-[400px] sm:h-[600px] w-full flex items-center justify-center overflow-hidden bg-[#1a1a1a]">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-60"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1400&h=900&fit=crop')`,
          }}
        />
        <div className="relative z-10 text-center flex flex-col items-center gap-4 sm:gap-6 px-4 max-w-2xl">
          <h2 className="font-[family:var(--font-headline)] text-2xl sm:text-3xl lg:text-4xl text-white italic tracking-wide">
            Visit Our Showrooms
          </h2>
          <p className="font-[family:var(--font-body)] text-white/80 text-sm sm:text-base max-w-md mx-auto">
            Experience the texture and scale of our collection in person at our flagship locations.
          </p>
          <Link
            href={whatsappLink}
            target="_blank"
            className="mt-4 px-8 sm:px-10 py-3 sm:py-4 border border-white text-white font-[family:var(--font-body)] text-xs sm:text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-[#1a1a1a] transition-all duration-500"
          >
            Find A Location
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
