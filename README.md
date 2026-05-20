# Ranos Homes — SEO & AEO Master Playbook
### Built for Next.js · Sanity CMS · Cloudinary · WhatsApp

> **Goal:** Rank #1 on Google Nigeria for high-intent furniture and interior design keywords, and surface as the authoritative answer in ChatGPT, Claude, Perplexity, and Gemini.

## DELIVERY SEQUENCE

Use this repository in the same order we intend to win search visibility. The site should launch with a strong SEO/AEO foundation first, then content depth, then authority building.

1. Discovery and keyword mapping.
  - Audit competitor furniture and interior design sites in Nigeria.
  - Build one keyword map per page so each page has a single primary intent.
  - Prioritise high-intent commercial terms first: furniture store in Lagos, buy sofa Lagos, luxury furniture Nigeria, interior designer Lagos.
  - Acceptance check: every page planned for launch has one primary keyword, one search intent, and one internal-link target.

2. Technical foundation.
  - Set global metadata, canonical URLs, robots.txt, sitemap.xml, and llms.txt.
  - Add structured data for Organisation, Product, FAQPage, BreadcrumbList, and Article.
  - Configure Cloudinary image optimisation and WhatsApp CTA links.
  - Acceptance check: pages are indexable, crawlable, and render correct metadata without manual editing.

3. Sanity content model.
  - Model products, categories, interior design services, portfolio projects, blog posts, and FAQs in Sanity.
  - Store SEO fields in the CMS so titles, descriptions, and image alt text are editable.
  - Acceptance check: editorial content can be updated without touching code.

4. Page build order.
  - Launch homepage, shop index, category pages, product pages, interior design pages, portfolio, blog, FAQ, about, and contact.
  - Add WhatsApp-only conversion points; do not implement payments.
  - Acceptance check: every commercial page has one clear CTA and at least one supporting content block.

5. Authority and distribution.
  - Publish cornerstone content, pursue Nigerian citations/backlinks, and maintain Google Business Profile activity.
  - Build internal links so important pages stay within three clicks of the homepage.
  - Acceptance check: new pages are linked from hubs, indexed in Search Console, and referenced from authoritative external sources.

6. Measurement and iteration.
  - Track rankings, impressions, clicks, WhatsApp CTA conversions, and Core Web Vitals.
  - Refresh content monthly based on Search Console query data.
  - Acceptance check: every launch cycle ends with a measurable SEO improvement and a content refresh backlog.

---

## TABLE OF CONTENTS

1. [Site Architecture & Pages to Build](#1-site-architecture--pages-to-build)
2. [Keyword Research Strategy](#2-keyword-research-strategy)
3. [On-Page SEO — Page-by-Page Blueprint](#3-on-page-seo--page-by-page-blueprint)
4. [Technical SEO](#4-technical-seo)
5. [Content Strategy & Blog](#5-content-strategy--blog)
6. [Internal Linking System](#6-internal-linking-system)
7. [External Linking & Link Building](#7-external-linking--link-building)
8. [Structured Data / Schema Markup](#8-structured-data--schema-markup)
9. [Local SEO (Nigeria-First)](#9-local-seo-nigeria-first)
10. [WhatsApp CTA Strategy](#10-whatsapp-cta-strategy)
11. [AEO — Answer Engine Optimisation (ChatGPT, Claude, Perplexity)](#11-aeo--answer-engine-optimisation)
12. [FAQs — Master Question Bank](#12-faqs--master-question-bank)
13. [Sanity CMS Content Modelling](#13-sanity-cms-content-modelling)
14. [Cloudinary & Image SEO](#14-cloudinary--image-seo)
15. [Performance & Core Web Vitals](#15-performance--core-web-vitals)
16. [Analytics & Measurement](#16-analytics--measurement)
17. [Month-by-Month Launch Roadmap](#17-month-by-month-launch-roadmap)

---

## 1. SITE ARCHITECTURE & PAGES TO BUILD

### 1.1 Full Route Map

```
/ ................................. Homepage
/about ............................ About Ranos Homes
/shop ............................. Shop Index (all products)
/shop/[category] .................. Category page (sofas, beds, dining, etc.)
/shop/[category]/[productSlug] .... Product Detail Page (PDP)
/interior-design .................. Interior Design Service landing page
/interior-design/[serviceSlug] .... Individual service (living room, bedroom, etc.)
/portfolio ........................ Project portfolio index
/portfolio/[projectSlug] .......... Individual project case study
/blog ............................. Blog index
/blog/[slug] ...................... Individual blog post
/contact .......................... Contact page (WhatsApp CTA)
/faq .............................. FAQ page (AEO powerhouse)
/sitemap.xml ...................... Auto-generated XML sitemap
/robots.txt ....................... Crawl directives
```

### 1.2 URL Slug Conventions

- All lowercase, hyphen-separated: `/shop/sofas/3-seater-l-shaped-sectional-sofa`
- Category slugs must match the keyword targets: `sofas`, `beds`, `wardrobes`, `dining-tables`, `office-chairs`, `TV-units`, `bedroom-sets`, `curtains-and-blinds`
- Never use IDs like `/shop/product?id=123` — always descriptive slugs

### 1.3 Navigation Structure

```
PRIMARY NAV: Logo | Shop ▾ | Interior Design ▾ | Portfolio | Blog | Contact
SHOP DROPDOWN:  Sofas · Beds & Mattresses · Wardrobes · Dining Sets · Office Furniture · TV Units · Bedroom Sets · View All
INTERIOR DESIGN DROPDOWN: Living Room · Bedroom · Kitchen · Office · Full-Home Makeover
FOOTER COL 1: Company (About, Blog, Careers)
FOOTER COL 2: Services (Interior Design, Furniture, Portfolio)
FOOTER COL 3: Contact (WhatsApp, Email, Address, Hours)
FOOTER COL 4: Legal (Privacy Policy, Terms of Service)
```

---

## 2. KEYWORD RESEARCH STRATEGY

### 2.1 How to Do It (Step by Step)

**Tools to use (in order):**
1. **Google Search Console** — after launch, mine real queries
2. **Google Keyword Planner** — free, set location to Nigeria
3. **Ubersuggest** — $29/mo, great for Nigerian markets
4. **Semrush or Ahrefs** — for competitor gap analysis
5. **AnswerThePublic** — for question-based/AEO keywords
6. **Google Autocomplete + "People Also Ask"** — free, daily habit

**Research process:**
1. Start with seed terms: "furniture Lagos", "interior designer Nigeria", "buy sofa Nigeria"
2. Expand with modifiers: price, location, material, style, size, room type
3. Filter by intent (see below)
4. Map each keyword to exactly ONE page
5. Never target the same keyword on two pages (cannibalisation)

### 2.2 Keyword Intent Categories

| Intent Type | Example | Best Page |
|-------------|---------|-----------|
| **Transactional** (buy now) | "buy leather sofa Lagos" | Product or Category Page |
| **Commercial** (comparing) | "best furniture store Lagos" | Homepage or Blog |
| **Navigational** (brand) | "Ranos Homes furniture" | Homepage |
| **Informational** | "how to decorate living room Nigeria" | Blog Post or FAQ |

### 2.3 Priority Keyword Targets

**Tier 1 — Homepage**
- furniture store in Lagos
- furniture company Nigeria
- luxury furniture Lagos
- Nigerian furniture brand

**Tier 2 — Category Pages**
- sofas for sale in Lagos
- buy beds online Nigeria
- wardrobe designs Nigeria
- dining table sets Lagos
- office chairs Lagos Nigeria

**Tier 3 — Product Pages**
- [product name] price Nigeria
- where to buy [product name] in Lagos
- [material] [furniture type] Lagos (e.g., "velvet sofa Lagos")

**Tier 4 — Interior Design**
- interior designer Lagos Nigeria
- interior decoration services Nigeria
- affordable interior design Lagos
- home makeover Lagos

**Tier 5 — Blog / Informational**
- how to furnish a living room in Nigeria
- living room furniture ideas Nigeria
- Nigerian home decor trends
- interior design tips small apartment Lagos

### 2.4 Long-Tail Power Phrases (Low Competition, High Intent)

```
"3 seater sofa price in Lagos"
"where to buy quality furniture in Lagos"
"furniture on credit Nigeria"
"home office setup Nigeria"
"kids bedroom furniture Lagos"
"Nigerian made furniture Lagos"
"custom furniture Lagos"
"interior designer Lekki"
"furniture delivery Lagos"
"affordable luxury furniture Nigeria"
```

---

## 3. ON-PAGE SEO — PAGE-BY-PAGE BLUEPRINT

### 3.1 Homepage (`/`)

**Primary keyword:** `furniture store in Lagos Nigeria`
**Secondary:** `luxury furniture Nigeria`, `Nigerian furniture brand`

```
<title>Ranos Homes | Premium Furniture & Interior Design in Lagos, Nigeria</title>
<meta name="description" content="Shop handcrafted, luxury furniture in Lagos. Ranos Homes delivers premium sofas, beds, wardrobes & full interior design services across Nigeria. Get a free WhatsApp quote today." />
```

**H1:** `Nigeria's Finest Furniture & Interior Design Studio`
**H2 sections:**
- `Shop Our Furniture Collections` → link to /shop categories
- `Interior Design Services` → link to /interior-design
- `Our Recent Projects` → 3 portfolio highlights
- `Why Nigerians Choose Ranos Homes` → trust signals
- `Frequently Asked Questions` → 5 FAQ accordion items

**Content requirements:**
- 600–900 words of body text (not just images)
- Feature testimonials from real Lagos customers
- Include city names: Lagos, Abuja, Port Harcourt
- Embed Google Map or mention address
- CTA to WhatsApp on hero, mid-page, and footer

---

### 3.2 Shop Index (`/shop`)

**Primary keyword:** `furniture shop Nigeria`

```
<title>Shop All Furniture | Sofas, Beds, Wardrobes & More — Ranos Homes Nigeria</title>
<meta name="description" content="Browse Ranos Homes' full furniture catalogue — sofas, beds, wardrobes, dining sets, and office furniture. Premium quality, made for Nigerian homes. Order via WhatsApp." />
```

**Content:** Category grid, filter sidebar (by room, material, price range), featured products, intro paragraph (100–150 words with keyword)

---

### 3.3 Category Pages (`/shop/[category]`)

**Template:** Create a unique title, H1, meta description, and intro paragraph for EACH category. Do NOT copy-paste.

**Example — Sofas:**
```
<title>Buy Sofas in Lagos Nigeria | L-Shaped, 3-Seater, Corner Sofas — Ranos Homes</title>
<meta name="description" content="Shop luxury sofas in Lagos. L-shaped sectionals, 3-seater, fabric & leather options. Ranos Homes delivers quality sofas across Nigeria. WhatsApp for custom orders." />
H1: Sofas & Couches for Nigerian Homes
Intro (150 words): Buying a sofa in Nigeria shouldn't mean settling for cheap imports...
```

**Include on every category page:**
- Breadcrumb: `Home > Shop > Sofas`
- Intro paragraph (150 words min, keyword in first 100 characters)
- Product grid with image, name, WhatsApp CTA button
- Category FAQ section (4–6 questions, see Section 12)
- Related categories internal links

---

### 3.4 Product Detail Page (`/shop/[category]/[productSlug]`)

This is your money page. Every PDP must have:

```
<title>[Product Name] — [Key Feature] | Ranos Homes Nigeria</title>
Example: "Luxe 3-Seater Velvet Sofa — Handcrafted in Lagos | Ranos Homes Nigeria"

<meta name="description" content="[Product Name]: [key benefit]. Available in [colours/sizes]. Delivery to Lagos, Abuja & across Nigeria. Order via WhatsApp — fast response guaranteed." />
```

**PDP Content Sections:**
1. **Image gallery** (min 5 Cloudinary-optimised photos: front, side, detail, room context, size guide)
2. **Product Title + Short Description** (50 words, keyword-rich)
3. **WhatsApp Order Button** (pre-filled message — see Section 10)
4. **Detailed Description** (300–500 words: materials, dimensions, care instructions, delivery info)
5. **Specifications table** (dimensions, weight, colour options, material, origin)
6. **Room Compatibility** ("Perfect for: Living Room, Guest Room")
7. **Customer Reviews** (schema-marked, see Section 8)
8. **Related Products** (internal linking)
9. **Product FAQ** (3–5 questions specific to this product)

---

### 3.5 Interior Design Service Pages (`/interior-design/[serviceSlug]`)

**Services to build pages for:**
- `/interior-design/living-room`
- `/interior-design/bedroom`
- `/interior-design/kitchen`
- `/interior-design/home-office`
- `/interior-design/full-home-makeover`
- `/interior-design/commercial-spaces`

**Template:**
```
<title>[Service] Interior Design in Lagos | Ranos Homes Nigeria</title>
H1: [Service] Interior Design That Transforms Your Space
Content: Problem → Solution → Our Process → Gallery → Testimonial → FAQ → WhatsApp CTA
Length: 800–1,200 words
```

---

### 3.6 Portfolio (`/portfolio/[projectSlug]`)

Each project is a case study. Format:

```
<title>[Project Name] — [Style] Interior Design in [Location] | Ranos Homes</title>
Sections:
- Project overview (client brief)
- Before photos
- Design process and decisions
- Materials and furniture used (link to relevant product pages!)
- After photos
- Client quote
- Related projects
```

Portfolio pages are SEO GOLD — they rank for location + style keywords and they build trust.

---

### 3.7 Blog (`/blog/[slug]`)

See Section 5 for full content strategy. SEO requirements per post:
- Minimum 1,200 words (aim for 1,800–2,500)
- One primary keyword in: title, H1, first paragraph, URL, meta description, one image alt tag
- 3–5 internal links to product/category/service pages
- Author schema markup
- FAQ section at end of each post
- WhatsApp CTA at mid-article and end

---

## 4. TECHNICAL SEO

### 4.1 Next.js Setup Checklist

```javascript
// app/layout.tsx — Global metadata defaults
export const metadata: Metadata = {
  metadataBase: new URL('https://ranoshomes.com'),
  title: {
    default: 'Ranos Homes | Premium Furniture & Interior Design Nigeria',
    template: '%s | Ranos Homes Nigeria'
  },
  description: 'Shop luxury furniture and hire expert interior designers in Lagos, Nigeria.',
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    siteName: 'Ranos Homes',
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://ranoshomes.com' }
}
```

**For every dynamic page (products, categories, blog posts) — generate metadata dynamically:**
```javascript
// app/shop/[category]/[productSlug]/page.tsx
export async function generateMetadata({ params }): Promise<Metadata> {
  const product = await getProduct(params.productSlug)
  return {
    title: `${product.name} — ${product.shortFeature}`,
    description: product.metaDescription,
    alternates: { canonical: `https://ranoshomes.com/shop/${params.category}/${params.productSlug}` },
    openGraph: {
      images: [{ url: product.mainImage.url, width: 1200, height: 630, alt: product.mainImage.alt }]
    }
  }
}
```

### 4.2 Sitemap (`/sitemap.xml`)

Use Next.js `app/sitemap.ts` to auto-generate:

```typescript
// app/sitemap.ts
import { MetadataRoute } from 'next'
import { getAllProducts, getAllCategories, getAllBlogPosts, getAllPortfolioItems } from '@/lib/sanity'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await getAllProducts()
  const categories = await getAllCategories()
  const posts = await getAllBlogPosts()
  const portfolio = await getAllPortfolioItems()

  const staticPages = [
    { url: 'https://ranoshomes.com', changeFrequency: 'weekly', priority: 1.0 },
    { url: 'https://ranoshomes.com/shop', changeFrequency: 'daily', priority: 0.9 },
    { url: 'https://ranoshomes.com/interior-design', changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://ranoshomes.com/portfolio', changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://ranoshomes.com/blog', changeFrequency: 'daily', priority: 0.8 },
    { url: 'https://ranoshomes.com/faq', changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://ranoshomes.com/about', changeFrequency: 'monthly', priority: 0.6 },
    { url: 'https://ranoshomes.com/contact', changeFrequency: 'monthly', priority: 0.6 },
  ]

  const productPages = products.map(p => ({
    url: `https://ranoshomes.com/shop/${p.category.slug}/${p.slug}`,
    lastModified: p._updatedAt,
    changeFrequency: 'weekly',
    priority: 0.85,
  }))

  // ... categories, posts, portfolio similarly

  return [...staticPages, ...productPages, ...categoryPages, ...postPages, ...portfolioPages]
}
```

### 4.3 Robots.txt

```
# app/robots.ts
export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/', disallow: ['/api/', '/admin/'] },
    sitemap: 'https://ranoshomes.com/sitemap.xml',
  }
}
```

### 4.4 Canonical URLs

- Every page must declare its canonical URL
- For paginated pages (`/shop?page=2`), canonical points to `/shop`
- Avoid duplicate content: `www.` redirects to non-www, `http://` → `https://`

### 4.5 301 Redirects

```javascript
// next.config.js
module.exports = {
  async redirects() {
    return [
      { source: '/products/:slug', destination: '/shop/:slug', permanent: true },
      { source: '/furniture/:slug', destination: '/shop/:slug', permanent: true },
    ]
  }
}
```

### 4.6 Breadcrumbs

Implement on every page below the homepage:
```jsx
// Renders as: Home > Shop > Sofas > Luxe 3-Seater Velvet Sofa
// Also outputs BreadcrumbList schema (see Section 8)
<Breadcrumb items={[
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/shop' },
  { label: 'Sofas', href: '/shop/sofas' },
  { label: product.name, href: null }
]} />
```

### 4.7 Hreflang (Optional but future-proof)

```html
<!-- If you ever add Yoruba or Hausa content -->
<link rel="alternate" hreflang="en-NG" href="https://ranoshomes.com/..." />
<link rel="alternate" hreflang="x-default" href="https://ranoshomes.com/..." />
```

---

## 5. CONTENT STRATEGY & BLOG

### 5.1 Blog Content Calendar (First 12 Months)

**Month 1–2: Foundation Posts (High-traffic, evergreen)**
1. "10 Best Furniture Stores in Lagos (2025 Honest Review)" — Rank for competitor terms, position Ranos as the best
2. "How to Furnish a Nigerian Living Room on Any Budget"
3. "The Complete Guide to Buying Furniture in Lagos"
4. "Interior Design Styles That Work in Nigerian Homes"
5. "Sofa Buying Guide for Nigerian Homes: What to Look For"

**Month 3–4: Product-Adjacent Posts**
6. "Velvet vs Fabric Sofas — Which Is Better for Lagos Weather?"
7. "Small Bedroom Furniture Ideas for Lagos Apartments"
8. "How to Choose the Right Dining Table for Your Nigerian Home"
9. "Nigerian Home Decor Trends 2025"
10. "How to Measure Your Space Before Buying Furniture"

**Month 5–6: Local SEO Posts**
11. "Interior Design in Lekki: What to Expect and How to Budget"
12. "Best Furniture Delivery Services in Lagos — A Complete Guide"
13. "How to Decorate a Lagos Duplex on a ₦500,000 Budget"
14. "Abuja Home Decor Guide: Furnishing Your FCT Home"

**Month 7–12: Authority Posts (Link-bait & AEO)**
15. "Nigerian Interior Design History: From Colonial to Contemporary"
16. "How Much Does Interior Design Cost in Nigeria? (2025 Breakdown)"
17. "Custom Furniture vs Ready-Made: What's Better in Nigeria?"
18. "How to Care for Your Wooden Furniture in Nigeria's Climate"
19. "Living Room Colour Psychology: Best Colours for Nigerian Homes"
20. "FAQ: Everything About Buying Furniture Online in Nigeria"

### 5.2 Content Format Requirements

Every blog post must include:
- [ ] Keyword-optimised title and meta description
- [ ] H1, H2s, H3s structuring the content
- [ ] At least 1 image with descriptive alt text per 300 words
- [ ] 3–5 internal links to products, categories, or services
- [ ] 1–2 external links to authoritative sources (Houzz, Architectural Digest, etc.)
- [ ] FAQ section at the end (minimum 4 questions, in FAQ schema)
- [ ] WhatsApp CTA (mid-article and bottom)
- [ ] Author bio with schema markup
- [ ] Published date + Last Updated date

---

## 6. INTERNAL LINKING SYSTEM

### 6.1 The Pillar-Cluster Model

```
PILLAR PAGE             →  CLUSTER PAGES
/shop/sofas             →  /blog/sofa-buying-guide-nigeria
                        →  /blog/velvet-vs-fabric-sofas
                        →  /portfolio/living-room-project-lekki
                        →  /interior-design/living-room

/interior-design        →  /blog/how-to-furnish-nigerian-living-room
                        →  /portfolio/[all projects]
                        →  /shop (furniture CTAs)

/blog (hub)             →  All blog posts
                        →  Each post links back to relevant products
```

### 6.2 Internal Linking Rules

1. **Product pages** must link to: the category page, 2–3 related products, 1–2 relevant blog posts
2. **Category pages** must link to: all product pages in that category, 2–3 relevant blog posts, related interior design service
3. **Blog posts** must link to: 2–3 relevant product/category pages, 1–2 other blog posts, relevant service page
4. **Portfolio pages** must link to: every piece of furniture used in that project, the relevant interior design service page
5. **Homepage** must link to: all main categories, featured products, interior design services, blog, about, contact

### 6.3 Anchor Text Guidelines

- Use descriptive anchor text: `"velvet 3-seater sofas"` not `"click here"`
- Vary anchors: `"our sofa collection"`, `"browse all sofas"`, `"luxury sofas in Lagos"`
- Avoid exact-match overuse — mix branded + descriptive + partial match

### 6.4 Link Depth Rule

No important page should be more than **3 clicks** from the homepage.

---

## 7. EXTERNAL LINKING & LINK BUILDING

### 7.1 Link Building Strategy (Nigeria-First)

**Phase 1 — Foundation (Month 1–3)**
- [ ] Create and verify Google Business Profile
- [ ] List on: VConnect Nigeria, Jumia (as a vendor), Konga, Jiji (for visibility)
- [ ] Submit to Nigerian business directories: BusinessList.com.ng, ConnectNigeria, Nairaland business listings
- [ ] Set up and optimise Instagram, Facebook, LinkedIn pages (all link to website)

**Phase 2 — Content-Based Links (Month 3–6)**
- [ ] Write guest posts for: BellaNaija Homes, Vanguard Homes, The Guardian Nigeria lifestyle
- [ ] Pitch to Nairaland's Home & Garden section (huge Nigerian traffic)
- [ ] Collaborate with Nigerian interior design bloggers (Instablog9ja, etc.)
- [ ] Get listed in "Best Furniture Stores in Lagos" roundup articles

**Phase 3 — Authority Links (Month 6–12)**
- [ ] PR to ThisDay Living, Punch Weekend, The Nation Saturday
- [ ] Partner with Nigerian real estate platforms (Property Pro, Private Property Nigeria) — referral links
- [ ] Sponsor or speak at Lagos design events (Lagos Design Week, Archi+Design Africa)
- [ ] Collaborate with Nigerian architects and post joint content

### 7.2 Where to Outreach (Target Sites)

| Site | Type | Opportunity |
|------|------|-------------|
| BellaNaija.com | Lifestyle | Guest post / product feature |
| Vanguard Ngr | News | Interior design column |
| Nairaland.com | Forum | Expert answers with link |
| Pulse.ng | Lifestyle | Sponsored feature |
| PropertyPro.ng | Real Estate | Partner listing |
| Houzz.com | Design | Pro profile + photos |
| Dezeen.com | Architecture | Nigerian design story pitch |

### 7.3 Outbound Linking (From Your Site)

- Always link to authoritative external sources when citing statistics
- Examples: Nigerian Bureau of Statistics for market data, international design publications for trends
- Opens in new tab (`target="_blank" rel="noopener noreferrer"`)

---

## 8. STRUCTURED DATA / SCHEMA MARKUP

### 8.1 Required Schema Types

**Homepage — Organisation Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "FurnitureStore",
  "name": "Ranos Homes",
  "url": "https://ranoshomes.com",
  "logo": "https://ranoshomes.com/logo.png",
  "description": "Premium furniture and interior design studio in Lagos, Nigeria.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "YOUR STREET ADDRESS",
    "addressLocality": "Lagos",
    "addressCountry": "NG"
  },
  "telephone": "+234XXXXXXXXXX",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "sales",
    "availableLanguage": ["English", "Yoruba"]
  },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Friday"], "opens": "09:00", "closes": "18:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Saturday"], "opens": "10:00", "closes": "16:00" }
  ],
  "sameAs": [
    "https://www.instagram.com/ranoshomes",
    "https://www.facebook.com/ranoshomes"
  ]
}
```

**Product Detail Page — Product Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Luxe 3-Seater Velvet Sofa",
  "description": "Handcrafted velvet sofa with solid wood frame...",
  "image": ["https://res.cloudinary.com/ranoshomes/..."],
  "brand": { "@type": "Brand", "name": "Ranos Homes" },
  "sku": "RH-SF-001",
  "category": "Sofas",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "NGN",
    "price": "350000",
    "availability": "https://schema.org/InStock",
    "seller": { "@type": "Organization", "name": "Ranos Homes" }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "24"
  }
}
```

**FAQ Pages and Blog Posts — FAQPage Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you deliver furniture across Nigeria?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Ranos Homes delivers furniture to all states in Nigeria including Lagos, Abuja, Port Harcourt, Kano, and Ibadan. Delivery timelines vary by location — contact us on WhatsApp for a quote."
      }
    }
  ]
}
```

**Breadcrumbs — BreadcrumbList Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ranoshomes.com" },
    { "@type": "ListItem", "position": 2, "name": "Shop", "item": "https://ranoshomes.com/shop" },
    { "@type": "ListItem", "position": 3, "name": "Sofas", "item": "https://ranoshomes.com/shop/sofas" },
    { "@type": "ListItem", "position": 4, "name": "Luxe 3-Seater Velvet Sofa" }
  ]
}
```

**Blog Posts — Article Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Furnish a Nigerian Living Room on Any Budget",
  "author": { "@type": "Person", "name": "Ranos Homes Team" },
  "publisher": {
    "@type": "Organization",
    "name": "Ranos Homes",
    "logo": { "@type": "ImageObject", "url": "https://ranoshomes.com/logo.png" }
  },
  "datePublished": "2025-01-15",
  "dateModified": "2025-06-10",
  "image": "https://ranoshomes.com/blog/..."
}
```

### 8.2 Schema Implementation in Next.js

```jsx
// components/SchemaOrg.tsx
export function SchemaOrg({ schema }: { schema: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
```

---

## 9. LOCAL SEO (NIGERIA-FIRST)

### 9.1 Google Business Profile (GBP) Setup

1. Go to `business.google.com` — claim and verify your listing
2. Business category: **Furniture Store** (primary) + Interior Designer (secondary)
3. Upload 20+ high-quality photos (showroom, products, team, projects)
4. Add your WhatsApp number as the contact
5. Write a 750-character business description (include: Lagos, Nigeria, furniture, interior design, keywords)
6. Set exact opening hours
7. Enable messaging (Google Messages)
8. Add products directly to GBP (free!)
9. Post weekly updates on GBP (promotions, new arrivals, tips)
10. Respond to EVERY review within 24 hours

### 9.2 Citations — Get Listed Consistently

Ensure your **NAP (Name, Address, Phone)** is IDENTICAL everywhere:

- Google Business Profile
- Facebook Page
- Instagram Business Account  
- VConnect Nigeria
- BusinessList NG
- ConnectNigeria
- Yelp (if available)
- Your website footer

Any inconsistency hurts local rankings. Do a NAP audit every quarter.

### 9.3 Location Pages (If You Serve Multiple Cities)

Create dedicated landing pages for major markets:
- `/lagos` — "Furniture Store in Lagos"
- `/abuja` — "Furniture Delivery to Abuja"
- `/port-harcourt` — "Furniture in Port Harcourt"

Each page needs unique content (not just a find-replace) — at least 300 unique words per location.

### 9.4 Review Strategy

Reviews are a local ranking factor AND social proof:
1. After every delivery, WhatsApp the customer: "We hope you love your [product name]! Would you mind leaving us a Google review? It takes 30 seconds: [link]"
2. Respond to all reviews (positive and negative) professionally
3. Never buy fake reviews — Google detects and penalises this
4. Target: 50+ reviews in Year 1, average 4.5+ stars

---

## 10. WHATSAPP CTA STRATEGY

### 10.1 Pre-Filled Message Templates

For every product page, the WhatsApp button should pre-fill a message:

```javascript
// utils/whatsapp.ts
export function getWhatsAppUrl(productName: string, productUrl: string): string {
  const phone = '234XXXXXXXXXX' // International format, no +
  const message = encodeURIComponent(
    `Hi Ranos Homes! 👋 I'm interested in the *${productName}*.\n\nProduct link: ${productUrl}\n\nCould you please share more details, availability, and pricing? Thank you!`
  )
  return `https://wa.me/${phone}?text=${message}`
}

// For general enquiry (Homepage, Contact page):
export function getGeneralWhatsAppUrl(): string {
  const message = encodeURIComponent(
    `Hi Ranos Homes! 👋 I'd like to learn more about your furniture and interior design services. Please assist me.`
  )
  return `https://wa.me/234XXXXXXXXXX?text=${message}`
}

// For interior design service:
export function getDesignEnquiryUrl(service: string): string {
  const message = encodeURIComponent(
    `Hi! I'm interested in your *${service} Interior Design* service. Could you share your process and pricing? Thank you!`
  )
  return `https://wa.me/234XXXXXXXXXX?text=${message}`
}
```

### 10.2 CTA Placement Rules

| Page Type | CTA Placements |
|-----------|---------------|
| Homepage | Hero section, after "Why Choose Us", footer |
| Category page | Top of page (sticky mobile), after product grid |
| Product page | Below product title (sticky), after description, after reviews |
| Interior Design | Hero, after process section, bottom of page |
| Blog post | After intro (mid-article), bottom of post |
| FAQ page | After FAQ section |
| Contact page | Primary CTA |

### 10.3 WhatsApp Button Design (SEO note)

The button is a regular `<a>` tag — Google can crawl it. Add a title attribute:
```html
<a 
  href="https://wa.me/234XXXXXXXXXX?text=..." 
  target="_blank" 
  rel="noopener noreferrer"
  title="Chat with Ranos Homes on WhatsApp"
  aria-label="Order [Product Name] via WhatsApp"
>
  Chat on WhatsApp
</a>
```

---

## 11. AEO — ANSWER ENGINE OPTIMISATION

AEO means making your content the answer that ChatGPT, Claude, Perplexity, and Google AI Overviews cite when users ask furniture questions.

### 11.1 How LLMs Decide What to Cite

LLMs are trained on web data and rank content by:
1. **Authoritativeness** — does the site have backlinks, mentions, and trust signals?
2. **Structured, clear answers** — concise, factual content that directly answers questions
3. **Entity clarity** — is it clear who you are, what you do, and where?
4. **Coverage depth** — do you comprehensively cover your topic area?
5. **Freshness** — is the content regularly updated?

### 11.2 AEO Implementation Tactics

**1. Answer questions in the first paragraph**
Instead of: "Choosing furniture for a Nigerian home can be an exciting yet challenging process..."
Write: "The best furniture for Nigerian homes balances humidity resistance, durability, and style. For humid coastal cities like Lagos, solid teak, treated hardwood, or high-quality fabric sofas with moisture-resistant treatment perform best."

**2. Create a comprehensive FAQ page (`/faq`)**
- 50+ questions and answers, organised by category
- Each answer: 50–150 words, direct, factual
- Uses natural question phrasing people actually type or speak

**3. Use structured data everywhere** (Section 8 — FAQPage and HowTo schemas)

**4. Build a Brand Knowledge Panel**
- Consistent NAP across all platforms
- Wikipedia-style "About" content on your website (company history, mission, founders)
- LinkedIn company page with full details
- Schema.org Organisation markup with sameAs links to all social profiles

**5. Get mentioned in "Best of" content**
LLMs are heavily influenced by aggregator content. When your brand appears in "Best furniture stores in Lagos" on multiple sites, LLMs learn your brand association.

**6. Create "definitive guide" content**
Long, comprehensive posts like "The Complete Guide to Buying Furniture in Nigeria" signal deep expertise on a topic.

**7. Add an llms.txt file**

```
# /public/llms.txt
# Ranos Homes — AI-Readable Content Guide

## About
Ranos Homes is a premium Nigerian furniture manufacturer and interior design studio based in Lagos, Nigeria. We design, manufacture, and deliver quality furniture across Nigeria.

## What We Do
- Custom and ready-made furniture (sofas, beds, wardrobes, dining sets)
- Full interior design services for residential and commercial spaces
- Furniture delivery across Nigeria

## Contact
WhatsApp: +234XXXXXXXXXX
Website: https://ranoshomes.com

## Key Topics We Cover
- Buying furniture in Nigeria
- Interior design for Nigerian homes
- Lagos furniture stores
- Nigerian home decor trends
```

**8. Ensure Perplexity can crawl you**
Perplexity's bot is `PerplexityBot` — ensure it's not blocked in robots.txt. It powers many AI answers.

### 11.3 AEO Content Templates

**"Best X in Nigeria" template** (LLMs love citing these):
```
Title: "Best [Category] in Lagos Nigeria (2025 Updated)"
Structure:
1. Direct answer paragraph (who is it best for, top pick)
2. Comparison table (5–8 options with key differentiators)
3. Individual reviews (150+ words each)
4. How to choose (buying guide)
5. FAQ section (5+ questions in schema)
6. Conclusion with recommendation
```

**"How to" template** (triggers HowTo schema, AEO goldmine):
```
Title: "How to [Action] in Nigeria: Step-by-Step Guide"
Structure:
1. Direct answer (what the outcome is)
2. What you need (materials/tools)
3. Step-by-step instructions (use HowTo schema)
4. Common mistakes to avoid
5. Pro tips
6. FAQ
```

---

## 12. FAQS — MASTER QUESTION BANK

Implement these across your FAQ page, category pages, product pages, and blog posts with FAQPage schema.

### General Business FAQs
1. **Where is Ranos Homes located?** — We are based in Lagos, Nigeria, with delivery services available nationwide.
2. **How do I place an order?** — Simply tap our WhatsApp button on any product page and we'll guide you through the order process.
3. **Do you deliver outside Lagos?** — Yes, we deliver to all 36 states. Delivery timelines and costs vary by location.
4. **Can I see furniture before buying?** — Yes, you can visit our showroom in Lagos or request a virtual tour via WhatsApp video call.
5. **What is your return policy?** — We accept returns within 7 days for manufacturing defects. Custom orders are non-refundable.

### Furniture FAQs
6. **How long does custom furniture take?** — Custom pieces typically take 2–6 weeks depending on complexity.
7. **Do you make custom sizes?** — Yes, all our furniture can be made to custom dimensions.
8. **What wood types do you use?** — We use hardwoods including teak, mahogany, and engineered wood, all sourced sustainably.
9. **How should I care for wood furniture in Lagos's humidity?** — Apply wood oil every 3–6 months and keep away from direct air conditioning vents.
10. **What sofas are best for Nigerian weather?** — Leather or treated fabric sofas in dark or mid-tones handle humidity and cleaning best.

### Interior Design FAQs
11. **How much does interior design cost in Nigeria?** — Our interior design services start from ₦150,000 for a single room and scale based on scope.
12. **How long does interior design take?** — A single room makeover takes 2–4 weeks; full-home projects 6–12 weeks.
13. **Do you work with clients in Abuja?** — Yes, we handle projects nationwide including Abuja, Port Harcourt, and Ibadan.
14. **What interior design styles do you offer?** — We specialise in Contemporary African, Modern Minimalist, and Afro-Luxe styles.
15. **Do I need to vacate my home during a redesign?** — Usually not for furniture-focused projects. Construction renovations may require it.

### Pricing & Payment FAQs
16. **How much do sofas cost at Ranos Homes?** — Our sofas range from ₦180,000 to ₦1,200,000 depending on size and materials.
17. **Do you offer payment plans?** — Contact us on WhatsApp to discuss flexible payment arrangements.
18. **Are your prices negotiable?** — Our prices reflect quality craftsmanship, but we offer seasonal promotions. Subscribe to our newsletter for deals.
19. **Do you offer bulk discounts?** — Yes, we offer corporate and project discounts. Enquire via WhatsApp.

### Delivery FAQs
20. **How long does furniture delivery take in Lagos?** — Lagos deliveries typically take 3–7 business days for stock items.
21. **Do you assemble furniture after delivery?** — Yes, our team will assemble and set up your furniture at no extra charge within Lagos.
22. **How is furniture protected during delivery?** — All items are wrapped in protective materials and transported in covered vehicles.

---

## 13. SANITY CMS CONTENT MODELLING

### 13.1 Schemas to Create in Sanity

**Product Schema:**
```javascript
// schemas/product.js
export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    { name: 'name', type: 'string', title: 'Product Name', validation: Rule => Rule.required() },
    { name: 'slug', type: 'slug', title: 'Slug', options: { source: 'name' } },
    { name: 'category', type: 'reference', to: [{ type: 'category' }] },
    { name: 'shortDescription', type: 'text', title: 'Short Description (50 words max)', validation: Rule => Rule.max(300) },
    { name: 'description', type: 'array', of: [{ type: 'block' }], title: 'Full Description' },
    { name: 'metaTitle', type: 'string', title: 'SEO Title (55 chars)', validation: Rule => Rule.max(60) },
    { name: 'metaDescription', type: 'text', title: 'SEO Meta Description (160 chars)', validation: Rule => Rule.max(160) },
    { name: 'images', type: 'array', of: [{ type: 'image', fields: [{ name: 'alt', type: 'string', title: 'Alt Text', validation: Rule => Rule.required() }] }] },
    { name: 'price', type: 'number', title: 'Price (NGN)' },
    { name: 'inStock', type: 'boolean', title: 'In Stock', initialValue: true },
    { name: 'dimensions', type: 'object', fields: [
      { name: 'length', type: 'number' }, { name: 'width', type: 'number' }, { name: 'height', type: 'number' }
    ]},
    { name: 'materials', type: 'array', of: [{ type: 'string' }] },
    { name: 'colours', type: 'array', of: [{ type: 'string' }] },
    { name: 'faqs', type: 'array', of: [{ type: 'faq' }] },
    { name: 'relatedProducts', type: 'array', of: [{ type: 'reference', to: [{ type: 'product' }] }] },
  ]
}
```

**Blog Post Schema** (SEO fields built in):
```javascript
export default {
  name: 'post',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'slug', type: 'slug', options: { source: 'title' } },
    { name: 'publishedAt', type: 'datetime' },
    { name: 'updatedAt', type: 'datetime' },
    { name: 'excerpt', type: 'text', validation: Rule => Rule.max(160) },
    { name: 'metaTitle', type: 'string', validation: Rule => Rule.max(60) },
    { name: 'metaDescription', type: 'text', validation: Rule => Rule.max(160) },
    { name: 'coverImage', type: 'image', fields: [{ name: 'alt', type: 'string' }] },
    { name: 'body', type: 'array', of: [{ type: 'block' }, { type: 'image' }] },
    { name: 'categories', type: 'array', of: [{ type: 'reference', to: [{ type: 'category' }] }] },
    { name: 'faqs', type: 'array', of: [{ type: 'faq' }] },
    { name: 'relatedPosts', type: 'array', of: [{ type: 'reference', to: [{ type: 'post' }] }] },
  ]
}
```

---

## 14. CLOUDINARY & IMAGE SEO

### 14.1 Image Requirements for SEO

| Image Type | Dimensions | Format | Max Size |
|------------|-----------|--------|---------|
| Product hero | 1200 × 900px | WebP | 150KB |
| Product thumbnail | 600 × 450px | WebP | 50KB |
| Blog cover | 1200 × 630px | WebP | 100KB |
| Portfolio | 1600 × 1067px | WebP | 200KB |
| OG (social share) | 1200 × 630px | JPG | 100KB |

### 14.2 Cloudinary Transformations in Next.js

```javascript
// utils/cloudinary.ts
export function getOptimisedImageUrl(publicId: string, width: number, height?: number) {
  return `https://res.cloudinary.com/ranoshomes/image/upload/f_webp,q_auto,w_${width}${height ? `,h_${height},c_fill` : ''}/${publicId}`
}

// In your component:
<Image
  src={getOptimisedImageUrl(product.image.publicId, 800)}
  alt={product.image.alt}  // ALWAYS meaningful, keyword-rich alt text
  width={800}
  height={600}
  loading="lazy"    // for below-the-fold images
  priority={isHero} // for hero images only
/>
```

### 14.3 Alt Text Formula

```
Product images: "[Product Name] — [Colour/Material] — Ranos Homes Nigeria"
Example: "3-Seater Velvet Sofa in Emerald Green — Ranos Homes Lagos"

Room/lifestyle: "[Room type] designed by Ranos Homes — [style] interior in [city]"
Example: "Living room designed by Ranos Homes — Contemporary African style in Lagos"

Blog images: "[What the image shows] — [context]"
Example: "Nigerian family choosing sofa at a Lagos furniture showroom"
```

### 14.4 Image Sitemap

Add images to your sitemap:
```typescript
// In your sitemap, include image tags for product pages
{
  url: `https://ranoshomes.com/shop/sofas/${product.slug}`,
  images: product.images.map(img => ({
    url: getOptimisedImageUrl(img.publicId, 1200),
    title: product.name,
    caption: img.alt,
  }))
}
```

---

## 15. PERFORMANCE & CORE WEB VITALS

Google uses Core Web Vitals as ranking signals. Target scores:

| Metric | Target | Implementation |
|--------|--------|---------------|
| LCP (Largest Contentful Paint) | < 2.5s | Use `priority` on hero images, serve WebP, use CDN |
| FID/INP (Interaction to Next Paint) | < 200ms | Minimise JS bundles, use React Server Components |
| CLS (Cumulative Layout Shift) | < 0.1 | Always set width/height on images, avoid dynamic insertions |

### 15.1 Next.js Performance Checklist

- [ ] Enable Next.js Image Optimization (`next/image`)
- [ ] Use React Server Components for all non-interactive pages
- [ ] Implement `loading="lazy"` on all below-fold images
- [ ] Use `priority` prop only on hero/LCP images
- [ ] Code split with dynamic imports: `const Modal = dynamic(() => import('./Modal'))`
- [ ] Enable gzip/brotli compression in your hosting config
- [ ] Use Incremental Static Regeneration (ISR) for product/blog pages
- [ ] Implement font preloading: `<link rel="preload" as="font" href="...">`
- [ ] Minimise third-party scripts (load WhatsApp widget async)

### 15.2 Hosting Recommendation

Use **Vercel** (built for Next.js) — automatic CDN, image optimisation, edge functions, and Nigeria-proximate servers for fastest delivery.

---

## 16. ANALYTICS & MEASUREMENT

### 16.1 Tools to Set Up (Day 1)

1. **Google Search Console** — tracks search rankings, indexing, errors
2. **Google Analytics 4** — tracks traffic, conversions, user behaviour
3. **Google Business Profile Insights** — local search performance
4. **Hotjar or Microsoft Clarity (free)** — heatmaps and session recordings

### 16.2 Key Metrics to Track Weekly

| Metric | Tool | Target (12 months) |
|--------|------|-------------------|
| Organic search traffic | GA4 | 5,000+ sessions/month |
| Keyword rankings (top 20 keywords) | Search Console | #1–3 on 10+ keywords |
| WhatsApp CTA clicks | GA4 events | 200+ clicks/month |
| Bounce rate (product pages) | GA4 | < 60% |
| Page load time | Search Console | < 3s |
| Core Web Vitals pass rate | Search Console | 90%+ |

### 16.3 Set Up WhatsApp Click Tracking

```javascript
// Track WhatsApp CTA clicks in GA4
function trackWhatsAppClick(productName: string, page: string) {
  gtag('event', 'whatsapp_click', {
    product_name: productName,
    page_location: page,
    event_category: 'engagement',
  })
}
```

### 16.4 Search Console Actions (Monthly)

1. Check "Coverage" for indexing errors — fix immediately
2. Review "Performance" — which queries get impressions but low clicks? Optimise those page titles
3. Check "Core Web Vitals" report — fix any "Poor" pages
4. Submit new blog posts/pages for indexing via URL Inspection

---

## 17. MONTH-BY-MONTH LAUNCH ROADMAP

### Month 1 — Foundation
- [ ] Deploy website on Vercel with custom domain + SSL
- [ ] Submit sitemap to Google Search Console and Bing Webmaster Tools
- [ ] Set up Google Analytics 4 and Google Business Profile
- [ ] Publish 4 cornerstone blog posts
- [ ] List on all major Nigerian business directories
- [ ] Ensure all schema markup is implemented and validated (use schema.org validator)
- [ ] Create and optimise Instagram and Facebook pages

### Month 2 — Content & Indexing
- [ ] Publish 4 more blog posts (keyword-targeted)
- [ ] Ensure all product pages are indexed (check Search Console)
- [ ] Begin WhatsApp review request campaign for early customers
- [ ] Set up internal linking audit — ensure all pages are linked correctly
- [ ] Optimise all product image alt texts

### Month 3 — Local & Authority
- [ ] Begin outreach to Nigerian bloggers and publications
- [ ] Publish first guest post on external site
- [ ] Launch "Best Furniture Stores in Lagos" comparison post (include yourself)
- [ ] Post weekly on Google Business Profile
- [ ] Start tracking keyword rankings weekly

### Month 4–6 — Acceleration
- [ ] Publish 2 blog posts/week (increase cadence)
- [ ] Secure 3–5 quality backlinks from Nigerian sites
- [ ] Expand FAQ page to 50+ questions
- [ ] Add portfolio case studies (minimum 5 projects)
- [ ] A/B test WhatsApp CTA copy and placement

### Month 7–12 — Authority Phase
- [ ] Target 100+ backlinks from diverse sources
- [ ] Publish definitive "ultimate guide" content (3,000+ words)
- [ ] Expand to location pages if delivering to Abuja, PH, Ibadan
- [ ] Pursue press coverage in Nigerian lifestyle media
- [ ] Revisit and update all older blog posts with fresh data

---

## QUICK REFERENCE CHECKLIST

### Before Publishing Any Page
- [ ] Unique title tag (max 60 chars)
- [ ] Unique meta description (max 160 chars)
- [ ] Canonical URL set
- [ ] H1 includes primary keyword
- [ ] Images have meaningful alt text
- [ ] Internal links to relevant pages
- [ ] Schema markup appropriate to page type
- [ ] WhatsApp CTA present
- [ ] Page loads in under 3 seconds
- [ ] Mobile responsive

### Before Publishing Any Blog Post
- [ ] Keyword in title, H1, first paragraph, and URL
- [ ] Minimum 1,200 words
- [ ] 3–5 internal links to products/categories
- [ ] FAQ section at end (in FAQPage schema)
- [ ] Author bio with schema
- [ ] Published + Last Updated dates
- [ ] WhatsApp CTA mid and bottom

---

*Last updated: 2025 — Ranos Homes SEO Playbook v1.0*  
*Maintained by: Senior PM & Prompt Engineering, Ranos Homes*