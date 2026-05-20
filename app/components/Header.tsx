'use client';

import Link from 'next/link';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();
  const [searchText, setSearchText] = useState('');
  const [showPromoBanner, setShowPromoBanner] = useState(true);

  const normalizedSearch = searchText.trim();

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!normalizedSearch) return;

    const params = new URLSearchParams({ q: normalizedSearch });
    router.push(`/shop?${params.toString()}`);
  };

  return (
    <>
      {/* Promo Banner */}
      {showPromoBanner && (
        <div className="bg-black text-white py-3 px-4 sm:px-12 flex justify-between items-center text-[11px] font-medium tracking-wider sticky top-0 z-[60]">
          <div className="flex-1"></div>
          <div className="text-center text-xs sm:text-[11px]">
            Online Floor Sample Sale • Additional 10% Off • April 8-May 8 • Explore Lookbooks{' '}
            <Link href="#" className="underline">
              HERE
            </Link>
          </div>
          <div className="flex-1 flex justify-end">
            <button
              onClick={() => setShowPromoBanner(false)}
              aria-label="Close banner"
              className="hover:opacity-70 text-white inline-flex items-center justify-center"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M6 6l12 12" />
                <path d="M18 6L6 18" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Main Header */}
      <header className={`bg-white border-b border-gray-100 sticky ${showPromoBanner ? 'top-[42px]' : 'top-0'} z-50`}>
        <div className="max-w-[1585px] mx-auto px-4 sm:px-6 lg:px-12">
          {/* Top Utility Bar */}
          <div className="flex items-center justify-between py-4 sm:py-6">
            {/* Search (Left) */}
            <form
              onSubmit={handleSearchSubmit}
              className="flex items-center gap-2 sm:gap-3 text-[#1c1b1b] transition-colors flex-1 min-w-0"
              role="search"
            >
              <span className="text-black inline-flex items-center justify-center" aria-hidden="true">
                <svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-5.5 sm:w-5.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="6.5" />
                  <path d="M16 16l5 5" />
                </svg>
              </span>
              <input
                type="search"
                value={searchText}
                onChange={(event) => setSearchText(event.target.value)}
                placeholder="Search"
                aria-label="Search products"
                className="w-full max-w-[220px] sm:max-w-[280px] border-b border-transparent focus:border-[#1c1b1b]/30 outline-none bg-transparent text-xs sm:text-[14px] placeholder:text-[#1c1b1b]/40 font-[family:var(--font-body)]"
              />
            </form>

            {/* Logo (Center) */}
            <div className="text-center">
              <h1 className="text-2xl sm:text-4xl font-[family:var(--font-headline)] tracking-[0.15em] text-[#1c1b1b] select-none">
                RANOS
              </h1>
            </div>

            {/* Account/Support (Right) */}
            <div className="flex items-center justify-end gap-3 sm:gap-8 text-xs sm:text-[14px] font-[family:var(--font-body)] text-[#1c1b1b] flex-1 min-w-0">
              <div className="flex items-center gap-1 sm:gap-2 cursor-pointer">
                <div className="flex w-4 sm:w-5 h-2.5 sm:h-3 border-[0.5px] border-gray-200">
                  <div className="bg-[#008751] h-full flex-1"></div>
                  <div className="bg-white h-full flex-1"></div>
                  <div className="bg-[#008751] h-full flex-1"></div>
                </div>
                <span className="material-symbols-outlined text-sm hidden sm:inline">keyboard_arrow_down</span>
              </div>
              <Link href="#" className="hover:opacity-70 hidden sm:inline">Support</Link>
              <Link href="#" aria-label="Instagram" className="hover:opacity-70 inline-flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 sm:h-6 sm:w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Main Navigation (Bottom) */}
          <nav className="flex items-center justify-center gap-2 sm:gap-4 lg:gap-8 py-3 sm:py-4 font-[family:var(--font-body)] text-[10px] sm:text-[13px] font-semibold text-[#1c1b1b] overflow-x-auto hide-scrollbar">
            <Link href="#" className="hover:text-[#a23f00] transition-colors whitespace-nowrap">Shop By</Link>
            <Link href="#" className="hover:text-[#a23f00] transition-colors whitespace-nowrap">Furniture</Link>
            <Link href="#" className="hover:text-[#a23f00] transition-colors whitespace-nowrap">Lighting</Link>
            <Link href="#" className="hover:text-[#a23f00] transition-colors whitespace-nowrap">Textiles</Link>
            <Link href="#" className="hover:text-[#a23f00] transition-colors whitespace-nowrap">Leather</Link>
            <Link href="#" className="hover:text-[#a23f00] transition-colors whitespace-nowrap">Wallcovering</Link>
            <Link href="#" className="hover:text-[#a23f00] transition-colors whitespace-nowrap">Window Shades</Link>
            <Link href="#" className="hover:text-[#a23f00] transition-colors whitespace-nowrap">Rugs</Link>
            <Link href="#" className="hover:text-[#a23f00] transition-colors whitespace-nowrap">Outdoor</Link>
            <Link href="#" className="hover:text-[#a23f00] transition-colors whitespace-nowrap">Accessories</Link>
            <Link href="#" className="hover:text-[#a23f00] transition-colors whitespace-nowrap">Fine Art</Link>
          </nav>
        </div>
      </header>
    </>
  );
}
