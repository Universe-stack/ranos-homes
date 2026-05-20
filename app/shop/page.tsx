'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ITEMS_PER_PAGE = 6;

type SortOption = 'featured' | 'name-asc' | 'price-low-high' | 'price-high-low';

interface ProductItem {
  id: number;
  name: string;
  price: string;
  originalPrice?: string;
  img: string;
  badge?: string;
  collection: string;
  category: string;
  color: string;
  featured?: boolean;
}

export default function ShopPage() {
  const searchParams = useSearchParams();
  const [showMoreProducts, setShowMoreProducts] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCollection, setSelectedCollection] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedColor, setSelectedColor] = useState('All');
  const [sortOption, setSortOption] = useState<SortOption>('featured');

  const products: ProductItem[] = [
    { id: 1, name: 'Valborg 80" Oak Media Console', price: '₦959 - ₦1,169', originalPrice: '₦1,299', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=500&fit=crop', badge: 'Best Seller', collection: 'Living', category: 'Storage', color: 'Oak', featured: true },
    { id: 2, name: 'Magnus 47" Lift-Top Coffee Table', price: '₦749 - ₦799', originalPrice: '₦899', img: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=400&h=500&fit=crop', badge: 'Best Seller', collection: 'Living', category: 'Tables', color: 'Walnut', featured: true },
    { id: 3, name: 'Rolf 63" Oak Sideboard', price: '₦1,049 - ₦1,099', img: 'https://images.unsplash.com/photo-1567538096051-b6643b1ea9a4?w=400&h=500&fit=crop', collection: 'Dining', category: 'Storage', color: 'Oak', featured: false },
    { id: 4, name: 'Thorsten 72" Oval Dining Table', price: '₦1,199 - ₦1,699', img: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=400&h=500&fit=crop', collection: 'Dining', category: 'Tables', color: 'Black', featured: true },
    { id: 5, name: 'Rolf 31" Dining Table', price: '₦599 - ₦799', img: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=500&fit=crop', collection: 'Dining', category: 'Tables', color: 'Natural', featured: false },
    { id: 6, name: 'Linear Floor Lamp', price: '₦850', img: 'https://images.unsplash.com/photo-1565636192335-14a9e1c5bd26?w=400&h=500&fit=crop', collection: 'Bedroom', category: 'Lighting', color: 'White', featured: false },
  ];

  const demoProducts: ProductItem[] = [
    { id: 7, name: 'Soren Curved Lounge Chair', price: '₦1,149', img: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&h=500&fit=crop', badge: 'New', collection: 'Living', category: 'Seating', color: 'Beige', featured: true },
    { id: 8, name: 'Kaya Travertine Side Table', price: '₦679', img: 'https://images.unsplash.com/photo-1633505650703-a58d2497f5ff?w=400&h=500&fit=crop', collection: 'Bedroom', category: 'Tables', color: 'Ivory', featured: false },
    { id: 9, name: 'Aster Modular Sofa', price: '₦1,899 - ₦2,199', img: 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=400&h=500&fit=crop', badge: 'Limited', collection: 'Living', category: 'Seating', color: 'Grey', featured: true },
    { id: 10, name: 'Nora Cane Accent Cabinet', price: '₦1,020', img: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=400&h=500&fit=crop', collection: 'Office', category: 'Storage', color: 'Natural', featured: false },
    { id: 11, name: 'Orion Brass Pendant Light', price: '₦540', img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=400&h=500&fit=crop', collection: 'Bathroom', category: 'Lighting', color: 'Gold', featured: false },
    { id: 12, name: 'Eris Sculptural Rug', price: '₦920', img: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=400&h=500&fit=crop', collection: 'Outdoor', category: 'Decor', color: 'Terracotta', featured: false },
  ];

  const getRawSearchQuery = () => {
    const qValue = searchParams.get('q');
    if (qValue) return qValue;

    // Supports odd query formats like /shop?="turkish"+"furniture"
    const keys = Array.from(searchParams.keys());
    const firstKey = keys[0];
    if (firstKey && !searchParams.get(firstKey)) return firstKey;

    return '';
  };

  const rawSearchQuery = getRawSearchQuery();

  const allProducts = useMemo(() => {
    return showMoreProducts ? [...products, ...demoProducts] : products;
  }, [showMoreProducts]);

  const searchTerms = useMemo(() => {
    if (!rawSearchQuery) return [];

    return rawSearchQuery
      .replace(/\+/g, ' ')
      .replace(/"/g, ' ')
      .split(/\s+/)
      .map((term) => term.trim().toLowerCase())
      .filter(Boolean);
  }, [rawSearchQuery]);

  const searchFilteredProducts = useMemo(() => {
    if (searchTerms.length === 0) return allProducts;

    return allProducts.filter((product) => {
      const searchableText = `${product.name} ${product.price}`.toLowerCase();
      return searchTerms.every((term) => searchableText.includes(term));
    });
  }, [allProducts, searchTerms]);

  const filteredByCollectionProducts = useMemo(() => {
    if (selectedCollection === 'All') return searchFilteredProducts;

    return searchFilteredProducts.filter(
      (product) => product.collection === selectedCollection
    );
  }, [searchFilteredProducts, selectedCollection]);

  const filteredByCategoryProducts = useMemo(() => {
    if (selectedCategory === 'All') return filteredByCollectionProducts;

    return filteredByCollectionProducts.filter(
      (product) => product.category === selectedCategory
    );
  }, [filteredByCollectionProducts, selectedCategory]);

  const filteredProducts = useMemo(() => {
    if (selectedColor === 'All') return filteredByCategoryProducts;

    return filteredByCategoryProducts.filter((product) => product.color === selectedColor);
  }, [filteredByCategoryProducts, selectedColor]);

  const extractProductPrice = (priceLabel: string) => {
    const values = priceLabel
      .replace(/[₦,]/g, '')
      .split('-')
      .map((value) => Number(value.trim()))
      .filter((value) => !Number.isNaN(value));

    if (values.length === 0) return 0;
    return Math.min(...values);
  };

  const sortedProducts = useMemo(() => {
    const items = [...filteredProducts];

    switch (sortOption) {
      case 'name-asc':
        return items.sort((a, b) => a.name.localeCompare(b.name));
      case 'price-low-high':
        return items.sort(
          (a, b) => extractProductPrice(a.price) - extractProductPrice(b.price)
        );
      case 'price-high-low':
        return items.sort(
          (a, b) => extractProductPrice(b.price) - extractProductPrice(a.price)
        );
      case 'featured':
      default:
        return items.sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));
    }
  }, [filteredProducts, sortOption]);

  const totalPages = Math.max(1, Math.ceil(sortedProducts.length / ITEMS_PER_PAGE));

  useEffect(() => {
    setCurrentPage(1);
  }, [rawSearchQuery, showMoreProducts, selectedCollection, selectedCategory, selectedColor, sortOption]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return sortedProducts.slice(start, start + ITEMS_PER_PAGE);
  }, [sortedProducts, currentPage]);

  const paginationItems = useMemo(() => {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }, [totalPages]);

  const getWhatsappLink = (productName: string) => {
    const text = encodeURIComponent(`Hello RANOS, I want to buy ${productName}.`);
    return `https://wa.me/2347000000000?text=${text}`;
  };

  const categories = [
    { name: 'All', img: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=150&h=150&fit=crop' },
    { name: 'Clearance', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=150&h=150&fit=crop' },
    { name: 'Living', img: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=150&h=150&fit=crop' },
    { name: 'Dining', img: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=150&h=150&fit=crop' },
    { name: 'Bedroom', img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=150&h=150&fit=crop' },
    { name: 'Office', img: 'https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=150&h=150&fit=crop' },
    { name: 'Bathroom', img: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=150&h=150&fit=crop' },
    { name: 'Outdoor', img: 'https://images.unsplash.com/photo-1600210351133-0ff531893d3d?w=150&h=150&fit=crop' },
  ];

  const categoryOptions = useMemo(() => {
    return ['All', ...new Set(allProducts.map((product) => product.category))];
  }, [allProducts]);

  const colorOptions = useMemo(() => {
    return ['All', ...new Set(allProducts.map((product) => product.color))];
  }, [allProducts]);

  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-8 sm:pt-12">
        {/* Category Navigation */}
        <section className="mb-8 sm:mb-16">
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <h2 className="font-[family:var(--font-body)] text-xs sm:text-sm uppercase font-bold">Shop Collections</h2>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6">
            {categories.map((cat) => (
              <button
                key={cat.name}
                type="button"
                onClick={() => setSelectedCollection(cat.name)}
                className="flex flex-col items-center group cursor-pointer text-left"
              >
                <div className="aspect-square w-full bg-[#f6f3f2] mb-3 overflow-hidden rounded-sm">
                  <img
                    src={cat.img}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <span
                  className={`font-[family:var(--font-body)] text-[10px] sm:text-[11px] uppercase tracking-widest ${
                    selectedCollection === cat.name
                      ? 'text-[#1c1b1b] font-semibold'
                      : 'text-[#4f4441]'
                  }`}
                >
                  {cat.name}
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* Filter Bar */}
        <div className="border-y border-gray-200 py-4 sm:py-6 mb-8 sm:mb-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-[family:var(--font-body)] text-[10px] sm:text-[11px] uppercase tracking-widest">
          <div className="flex items-center gap-4 sm:gap-8 flex-wrap">
            <button className="flex items-center gap-2 hover:text-gray-400">
              <span className="material-symbols-outlined text-[18px]">tune</span>
              <span className="hidden sm:inline">Filter</span>
            </button>
            <label className="flex items-center gap-2">
              <span className="text-[#4f4441]">Category</span>
              <select
                value={selectedCategory}
                onChange={(event) => setSelectedCategory(event.target.value)}
                className="border border-gray-300 px-2 py-1 text-[11px] uppercase tracking-widest bg-white"
              >
                {categoryOptions.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex items-center gap-2">
              <span className="text-[#4f4441]">Collection</span>
              <select
                value={selectedCollection}
                onChange={(event) => setSelectedCollection(event.target.value)}
                className="border border-gray-300 px-2 py-1 text-[11px] uppercase tracking-widest bg-white"
              >
                {categories.map((category) => (
                  <option key={category.name} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex items-center gap-2">
              <span className="text-[#4f4441]">Color</span>
              <select
                value={selectedColor}
                onChange={(event) => setSelectedColor(event.target.value)}
                className="border border-gray-300 px-2 py-1 text-[11px] uppercase tracking-widest bg-white"
              >
                {colorOptions.map((color) => (
                  <option key={color} value={color}>
                    {color}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="flex items-center gap-4 sm:gap-8">
            <span className="text-gray-400 normal-case tracking-normal">{sortedProducts.length} Items</span>
            <label className="flex items-center gap-2">
              <span>Sort:</span>
              <select
                value={sortOption}
                onChange={(event) => setSortOption(event.target.value as SortOption)}
                className="border border-gray-300 px-2 py-1 text-[11px] uppercase tracking-widest bg-white"
              >
                <option value="featured">Featured</option>
                <option value="name-asc">Name A-Z</option>
                <option value="price-low-high">Price Low-High</option>
                <option value="price-high-low">Price High-Low</option>
              </select>
            </label>
          </div>
        </div>

        {selectedCollection !== 'All' && (
          <div className="mb-6 -mt-2">
            <p className="font-[family:var(--font-body)] text-sm text-[#4f4441] normal-case tracking-normal">
              Collection filter: <span className="text-[#1c1b1b] font-semibold">{selectedCollection}</span>
            </p>
          </div>
        )}

        {selectedCategory !== 'All' && (
          <div className="mb-6 -mt-2">
            <p className="font-[family:var(--font-body)] text-sm text-[#4f4441] normal-case tracking-normal">
              Category filter: <span className="text-[#1c1b1b] font-semibold">{selectedCategory}</span>
            </p>
          </div>
        )}

        {selectedColor !== 'All' && (
          <div className="mb-6 -mt-2">
            <p className="font-[family:var(--font-body)] text-sm text-[#4f4441] normal-case tracking-normal">
              Color filter: <span className="text-[#1c1b1b] font-semibold">{selectedColor}</span>
            </p>
          </div>
        )}

        {rawSearchQuery && (
          <div className="mb-6 -mt-2">
            <p className="font-[family:var(--font-body)] text-sm text-[#4f4441] normal-case tracking-normal">
              Showing results for <span className="text-[#1c1b1b] font-semibold">{rawSearchQuery}</span>
            </p>
          </div>
        )}

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {paginatedProducts.map((product) => (
            <div key={product.id} className="group">
              <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden mb-4">
                {product.badge && (
                  <div className="absolute top-4 left-4 z-10 bg-white px-3 py-1 font-[family:var(--font-body)] text-[10px] tracking-widest uppercase">
                    {product.badge}
                  </div>
                )}
                <button className="absolute top-4 right-4 z-10 text-[#4f4441] hover:text-[#a23f00] transition-colors">
                  <span className="material-symbols-outlined">favorite</span>
                </button>
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <Link href={`/products/${product.id}`}>
                <h3 className="font-[family:var(--font-body)] text-[#1c1b1b] mb-2 hover:text-[#a23f00] transition-colors">
                  {product.name}
                </h3>
              </Link>
              <div className="flex items-center gap-3">
                <span className="text-[#a23f00] font-medium text-sm sm:text-base">
                  {product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-gray-400 line-through text-xs sm:text-sm">
                    {product.originalPrice}
                  </span>
                )}
              </div>
              <Link
                href={getWhatsappLink(product.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 text-[11px] sm:text-xs uppercase tracking-wider font-[family:var(--font-body)] hover:brightness-95 transition-all"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 11.5a8.5 8.5 0 0 1-12.1 7.7L4 20l.8-4.5A8.5 8.5 0 1 1 21 11.5Z" />
                  <path d="M9.8 8.8c.2-.5.6-.5.8-.5h.6c.2 0 .4.1.5.4l.6 1.4c.1.2.1.4 0 .6l-.3.5a.5.5 0 0 0 0 .6c.4.8 1 1.4 1.8 1.8a.5.5 0 0 0 .6 0l.5-.3c.2-.1.4-.1.6 0l1.4.6c.3.1.4.3.4.5v.6c0 .2 0 .6-.5.8-.5.2-1.6.2-3.2-.6a8 8 0 0 1-3.4-3.4c-.8-1.6-.8-2.7-.4-3.2Z" />
                </svg>
                Buy on WhatsApp
              </Link>
            </div>
          ))}
        </div>

        {sortedProducts.length > ITEMS_PER_PAGE && (
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-14 sm:mb-16 font-[family:var(--font-body)]">
            <button
              onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
              disabled={currentPage === 1}
              className="px-3 py-2 border border-gray-300 text-[11px] uppercase tracking-widest disabled:opacity-40 disabled:cursor-not-allowed hover:border-[#1c1b1b]"
            >
              Prev
            </button>
            {paginationItems.map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-9 h-9 text-[11px] border transition-colors ${
                  currentPage === page
                    ? 'border-[#1c1b1b] bg-[#1c1b1b] text-white'
                    : 'border-gray-300 text-[#1c1b1b] hover:border-[#1c1b1b]'
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
              disabled={currentPage === totalPages}
              className="px-3 py-2 border border-gray-300 text-[11px] uppercase tracking-widest disabled:opacity-40 disabled:cursor-not-allowed hover:border-[#1c1b1b]"
            >
              Next
            </button>
          </div>
        )}

        {sortedProducts.length === 0 && (
          <div className="text-center mb-16">
            <p className="font-[family:var(--font-body)] text-[#4f4441]">
              No products match the selected search and filters yet. Try another combination.
            </p>
          </div>
        )}

        {/* Load More */}
        {!showMoreProducts && (
          <div className="text-center mb-16">
            <button
              onClick={() => setShowMoreProducts(true)}
              className="px-12 py-3 border border-[#1c1b1b] text-[#1c1b1b] font-[family:var(--font-body)] text-xs sm:text-sm uppercase tracking-widest hover:bg-[#1c1b1b] hover:text-white transition-all"
            >
              Learn More
            </button>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
