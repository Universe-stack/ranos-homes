'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#f6f3f2] text-[#1c1b1b] pt-12 sm:pt-24 pb-8 sm:pb-12">
      <div className="max-w-360 mx-auto px-4 sm:px-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-16 mb-12 sm:mb-24">
          {/* Brand Column */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl sm:text-3xl font-(--font-headline) tracking-[0.2em] mb-8 sm:mb-12">
              RANOS
            </h2>
          </div>

          {/* Link Columns */}
          <div className="sm:col-span-2 lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div>
              <h4 className="font-(--font-body) text-[12px] uppercase tracking-widest mb-4 sm:mb-6 font-semibold">Products</h4>
              <ul className="space-y-2 sm:space-y-3 font-(--font-body) text-[13px] sm:text-[14px] text-[#4f4441]">
                <li><Link href="#" className="hover:text-[#1c1b1b] transition-colors">Furniture</Link></li>
                <li><Link href="#" className="hover:text-[#1c1b1b] transition-colors">Lighting</Link></li>
                <li><Link href="#" className="hover:text-[#1c1b1b] transition-colors">Textiles</Link></li>
                <li><Link href="#" className="hover:text-[#1c1b1b] transition-colors">Leather</Link></li>
                <li><Link href="#" className="hover:text-[#1c1b1b] transition-colors">Trim</Link></li>
                <li><Link href="#" className="hover:text-[#1c1b1b] transition-colors">Wallcovering</Link></li>
                <li><Link href="#" className="hover:text-[#1c1b1b] transition-colors">Window Shades</Link></li>
                <li><Link href="#" className="hover:text-[#1c1b1b] transition-colors">Rugs</Link></li>
                <li><Link href="#" className="hover:text-[#1c1b1b] transition-colors">Accessories</Link></li>
                <li><Link href="#" className="hover:text-[#1c1b1b] transition-colors">Fine Art</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-(--font-body) text-[12px] uppercase tracking-widest mb-4 sm:mb-6 font-semibold">About Us</h4>
              <ul className="space-y-2 sm:space-y-3 font-(--font-body) text-[13px] sm:text-[14px] text-[#4f4441]">
                <li><Link href="#" className="hover:text-[#1c1b1b] transition-colors">Company</Link></li>
                <li><Link href="#" className="hover:text-[#1c1b1b] transition-colors">Founder Story</Link></li>
                <li><Link href="/shop" className="hover:text-[#1c1b1b] transition-colors">Our Collections</Link></li>
                <li><Link href="/blog" className="hover:text-[#1c1b1b] transition-colors">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-(--font-body) text-[12px] uppercase tracking-widest mb-4 sm:mb-6 font-semibold">Support</h4>
              <ul className="space-y-2 sm:space-y-3 font-(--font-body) text-[13px] sm:text-[14px] text-[#4f4441]">
                <li><Link href="/faq" className="hover:text-[#1c1b1b] transition-colors">Help Center</Link></li>
                <li><Link href="#" className="hover:text-[#1c1b1b] transition-colors">Shipping</Link></li>
                <li><Link href="#" className="hover:text-[#1c1b1b] transition-colors">Returns</Link></li>
                <li><Link href="#" className="hover:text-[#1c1b1b] transition-colors">Contact Us</Link></li>
                <li><Link href="#" className="hover:text-[#1c1b1b] transition-colors">Terms of Use</Link></li>
                <li><Link href="#" className="hover:text-[#1c1b1b] transition-colors">Showroom Locations</Link></li>
              </ul>
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="sm:col-span-2 lg:col-span-3">
            <p className="font-(--font-body) text-[13px] sm:text-[14px] text-[#4f4441] leading-relaxed mb-6 sm:mb-8">
              Join our newsletter to be the first to know about exclusive new collections, design partnerships, and showroom offerings.
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-transparent border border-[#817470] px-4 py-3 text-xs sm:text-sm focus:outline-none focus:border-[#1c1b1b]"
              />
              <button className="bg-white border border-[#817470] text-[#1c1b1b] px-4 sm:px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-widest hover:bg-[#1c1b1b] hover:text-white transition-all flex items-center justify-center gap-2">
                <span className="leading-none">SIGNUP</span>
                <span className="material-symbols-outlined text-sm leading-none">east</span>
              </button>
            </div>
          </div>
        </div>

        {/* Social Icons Row */}
        <div className="flex justify-end gap-4 sm:gap-6 mb-8 sm:mb-12">
          <Link href="#" className="text-[#4f4441] hover:text-[#1c1b1b] transition-colors">
            <span className="material-symbols-outlined">photo_camera</span>
          </Link>
          <Link href="#" className="text-[#4f4441] hover:text-[#1c1b1b] transition-colors">
            <span className="material-symbols-outlined">bookmark</span>
          </Link>
          <Link href="#" className="text-[#4f4441] hover:text-[#1c1b1b] transition-colors">
            <span className="material-symbols-outlined">face</span>
          </Link>
          <Link href="#" className="text-[#4f4441] hover:text-[#1c1b1b] transition-colors">
            <span className="material-symbols-outlined">play_circle</span>
          </Link>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-[#d3c3be]/30 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
          <div className="text-[10px] sm:text-[12px] text-[#4f4441]">
            © 2024 RANOS. Crafted for the Discerning.
          </div>
          <div className="flex gap-4 sm:gap-8 text-[10px] sm:text-[12px] text-[#4f4441]">
            <Link href="#" className="hover:text-[#1c1b1b] transition-colors">Privacy Notice</Link>
            <Link href="#" className="hover:text-[#1c1b1b] transition-colors">Terms of Use</Link>
          </div>
        </div>

        <div className="mt-8 text-center text-[10px] text-[#4f4441]/50 uppercase tracking-[0.2em]">
          Website built by Residian technologies
        </div>
      </div>
    </footer>
  );
}
