# Specification: Homepage + Portfolio

**Author:** Alex Chen (Tech Lead)
**Date:** 2026-04-22
**Status:** ✅ COMPLETE - Implemented & Committed

---

## 1. Overview

### 1.1 Summary

This feature delivers the core public-facing pages of the AutoCap Group website: the Homepage and Portfolio section. The Homepage establishes AutoCap's brand identity, communicates value propositions to three distinct audiences (entrepreneurs, investors, general public), and showcases key business metrics. The Portfolio section presents AutoCap's 13 acquired workshops through an interactive map and detailed workshop pages.

**Design Standard:** Top-tier, best-in-class design with premium interactions, sophisticated animations, and flawless responsive behavior. Think Stripe-level polish with Scandinavian design sensibility.

### 1.2 Goals

- Establish AutoCap's premium brand presence with institutional-quality design
- Clearly communicate value propositions to three distinct audiences
- Showcase business credibility through KPI metrics and portfolio
- Demonstrate geographic footprint via interactive workshop map
- Create engaging, delightful user experience with smooth animations
- Structure data to align with future Strapi CMS implementation
- Maintain perfect responsive behavior from 320px to 1440px+

### 1.3 Non-Goals

- Backend CMS implementation (Strapi comes later, using mock data now)
- Contact forms (separate feature)
- News/Media section (separate feature)
- About pages beyond what's needed for navigation (separate feature)
- Authentication or user accounts
- Multi-language support (EN only for prototype)

### 1.4 User Stories

**As a workshop owner (entrepreneur),**
I want to quickly understand what AutoCap offers and how they're different,
So that I can decide if I want to explore selling my business to them.

**As an institutional investor,**
I want to see evidence of AutoCap's portfolio, growth trajectory, and professionalism,
So that I can assess the investment opportunity.

**As a general visitor,**
I want to understand what AutoCap Group does and see their portfolio,
So that I can learn about the company and their business model.

---

## 2. Acceptance Criteria

### AC-001: Homepage Hero Section

**GIVEN** a user visits the homepage
**WHEN** the page loads
**THEN** they see a full-viewport hero section with:
  - Large, confident headline: "The Nordic Tire Services Platform"
  - Subheadline: "We acquire, operate and grow independent tire service centres across Sweden — preserving the brands that customers trust and the entrepreneurs who built them."
  - High-quality background image or video (workshop footage if available, otherwise premium photo)
  - Dark gradient overlay ensuring text readability
  - Two prominent CTAs: "For Entrepreneurs →" and "For Investors →" styled in AutoCap Red (#C8102E)
  - Smooth fade-in animation on page load
  - Perfect centering and spacing on all screen sizes

---

### AC-002: KPI Ticker with Animated Counters

**GIVEN** a user scrolls down the homepage
**WHEN** the KPI ticker section comes into view
**THEN** they see:
  - Dark background (Nordic Black #1C1C1E)
  - Four metric cards displaying: "12 Workshops", "~50 People", "~200 MSEK Revenue", "50 Target by 2028"
  - Numbers animate from 0 to target value with smooth count-up animation
  - Animation triggers once when scrolled into view (not on every scroll)
  - Red accent (#C8102E) on unit labels or icons
  - Responsive grid: 4 columns on desktop (1024px+), 2x2 grid on tablet (768-1023px), single column on mobile (320-767px)
  - Consistent card sizing and spacing
  - Large, readable typography with clear hierarchy

---

### AC-003: Three Audience Path Cards

**GIVEN** a user views the homepage
**WHEN** they scroll to the audience section
**THEN** they see three distinct cards:
  - **Card 1 (Entrepreneurs)**: Birch background (#D8E4DC), headline "Thinking of selling your workshop?", description, CTA "Learn more →"
  - **Card 2 (Investors)**: Fjord background (#C9D8E8), headline "A platform built for returns", description, CTA "View investment case →"
  - **Card 3 (Portfolio)**: Stone background (#E4E2DE), headline "12 workshops. One shared ambition.", description, CTA "See our portfolio →"
  - Cards have equal width and spacing
  - Hover effect: subtle lift (translateY -4px) and shadow increase
  - Smooth transitions (200-300ms) on hover
  - Text is Nordic Black (#1C1C1E) for readability
  - CTAs are clickable links to respective pages
  - Responsive: 3 columns on desktop, single column on mobile with full-width cards

---

### AC-004: CEO Vision Quote Block

**GIVEN** a user scrolls through the homepage
**WHEN** they reach the vision section
**THEN** they see:
  - Linen White background (#F5F0EB)
  - CEO quote: "We're building something that didn't exist in this industry — a group where local workshop owners keep their identity, gain real operational support, and share in the upside of building something bigger together."
  - Attribution: "— David Knape, CEO & Co-Founder, AutoCap Group"
  - Large, elegant typography for quote (serif or high-quality sans-serif)
  - CEO photo (circular crop or left-aligned) if available, otherwise clean layout without photo
  - Generous whitespace and padding
  - Responsive: photo and text stack vertically on mobile

---

### AC-005: Homepage Footer CTA

**GIVEN** a user reaches the bottom of the homepage
**WHEN** they see the footer CTA section
**THEN** they see:
  - Headline: "Ready to start a conversation?"
  - Subtext: "Whether you're a workshop owner, an investor, or simply curious — we'd like to hear from you."
  - CTA button: "Get in touch →" linking to contact page
  - Distinct background color or styling to separate from content
  - Button follows primary CTA styling (AutoCap Red)
  - Centered layout with generous padding
  - Responsive spacing adjusts appropriately

---

### AC-006: Portfolio Page with Interactive Map

**GIVEN** a user navigates to /portfolio
**WHEN** the page loads
**THEN** they see:
  - Page title: "Our Portfolio"
  - Introductory text: "AutoCap Group's portfolio spans 12 tire service centres across Sweden — from Stockholm's northern suburbs to Gothenburg's industrial zones. Every workshop keeps its local name, its team, and its customer relationships."
  - Interactive map (Google Maps or Mapbox) showing all 13 workshop locations
  - Red markers (#C8102E) for each workshop location
  - Map is responsive and takes full width
  - Map height is appropriate (min 400px on mobile, 500px+ on desktop)
  - Smooth loading state while map initializes
  - Map controls are accessible and functional

---

### AC-007: Workshop Map Markers with Tooltips

**GIVEN** a user views the portfolio map
**WHEN** they hover over or click a workshop marker
**THEN** they see:
  - Tooltip/popup appears with workshop name and city
  - Tooltip includes link: "View details →"
  - Smooth tooltip animation (fade in, slight scale)
  - Tooltip is positioned to not go off-screen
  - Click on tooltip link navigates to workshop detail page
  - Marker has hover state (scale increase or color change)
  - On mobile (touch), tap marker to show tooltip, tap again or tap elsewhere to close

---

### AC-008: Workshop Grid Below Map

**GIVEN** a user scrolls down the portfolio page
**WHEN** they view the workshop grid section
**THEN** they see:
  - Stone background (#E4E2DE) for the grid section
  - Grid of workshop cards (all 13 workshops)
  - Each card displays: workshop name, city, "Part of AutoCap Group since [year]"
  - Cards have consistent size, spacing, and styling
  - Card hover effect: subtle lift and shadow
  - Cards are clickable and link to workshop detail page
  - Responsive grid: 3 columns on desktop (1024px+), 2 columns on tablet (768-1023px), 1 column on mobile (320-767px)
  - Workshop data loaded from `src/content/workshops.ts`

---

### AC-009: Workshop Detail Page

**GIVEN** a user clicks on a workshop from the portfolio
**WHEN** the workshop detail page loads
**THEN** they see:
  - Workshop name as page heading
  - City and region information
  - Badge: "Part of AutoCap Group since [year]"
  - Workshop description (from copy deck or workshops data)
  - Text: "[Workshop name] operates independently under its own brand, serving its local community as it always has. As part of AutoCap Group, the team benefits from shared procurement, centralised support services, and access to a growing network of workshops across Sweden."
  - Link to workshop's local website (if available)
  - CTA at bottom: "Own a tire service workshop? Learn what joining AutoCap Group could mean for you. [Link to /entrepreneurs]"
  - Clean, readable layout with appropriate spacing
  - Breadcrumb navigation: Home > Portfolio > [Workshop Name]

---

### AC-010: Homepage Navigation Header

**GIVEN** a user is on any page
**WHEN** they view the top of the page
**THEN** they see:
  - AutoCap logo (white variant on dark header, or dark variant on light header)
  - Navigation links: Home, About, Our Portfolio, Entrepreneurs, Investors, News & Media, Contact
  - Active page is visually indicated
  - Hover states on navigation links
  - Responsive: hamburger menu on mobile (< 768px), full nav on desktop
  - Header is sticky/fixed on scroll (optional but recommended for premium feel)
  - Smooth transitions on scroll behavior

---

### AC-011: Footer with Company Information

**GIVEN** a user scrolls to the bottom of any page
**WHEN** they view the footer
**THEN** they see:
  - Footer tagline: "AutoCap Group Sweden AB · Nybrogatan 7, Stockholm - The Nordic Tire Services Platform"
  - Navigation links organized by section
  - Contact email or link
  - Language toggle placeholder (EN / SV) - non-functional for prototype
  - Dark background (Nordic Black #1C1C1E) with white text
  - Clean, organized layout
  - Responsive: stacked sections on mobile

---

### AC-012: Responsive Layout - Mobile (320px - 767px)

**GIVEN** a user views the site on a mobile device
**WHEN** they navigate through homepage and portfolio
**THEN** all content:
  - Displays in single column layout
  - Has appropriate touch targets (min 44x44px)
  - Maintains readability without horizontal scroll
  - Images and videos scale appropriately
  - Text is readable without zooming (min 16px base font)
  - Spacing is appropriate for smaller screens
  - Navigation is accessible via hamburger menu
  - Map has appropriate height and controls for touch

---

### AC-013: Responsive Layout - Tablet (768px - 1023px)

**GIVEN** a user views the site on a tablet device
**WHEN** they navigate through homepage and portfolio
**THEN** content:
  - Uses 2-column layouts where appropriate (KPI cards, workshop grid)
  - Maintains appropriate spacing and padding
  - Images and content scale appropriately
  - Navigation shows full menu or abbreviated version
  - Touch targets remain accessible

---

### AC-014: Responsive Layout - Desktop (1024px+)

**GIVEN** a user views the site on a desktop device
**WHEN** they navigate through homepage and portfolio
**THEN** content:
  - Uses full multi-column layouts (3-4 columns for grids)
  - Maximizes screen real estate without becoming too wide (max-width constraint)
  - Shows hover effects on interactive elements
  - Navigation is full horizontal menu
  - Typography scales up appropriately for larger screens

---

### AC-015: Smooth Scroll Animations

**GIVEN** a user scrolls through any page
**WHEN** content sections come into view
**THEN** they see:
  - Elements fade in with subtle upward movement (translateY)
  - Animations are smooth and performant (60fps)
  - Animations trigger once when scrolled into view
  - No animation on initial viewport load (to avoid overwhelming user)
  - Animations respect user's `prefers-reduced-motion` setting
  - Animation duration is appropriate (300-500ms)

---

### AC-016: Page Loading States

**GIVEN** a user navigates between pages
**WHEN** content is loading
**THEN** they see:
  - Smooth page transitions
  - Loading indicators for map or dynamic content
  - Skeleton loaders or shimmer effects for content that takes time
  - No flash of unstyled content (FOUC)
  - No layout shift as content loads

---

### AC-017: Error Handling - Map Fails to Load

**GIVEN** the portfolio page is loaded
**WHEN** the map API fails to initialize or load
**THEN** the user sees:
  - Error message: "We're having trouble loading the map. Please try refreshing the page."
  - Fallback to workshop grid below (still functional)
  - Optional: static map image or simple list view of locations
  - Error doesn't break the rest of the page functionality

---

### AC-018: Error Handling - Workshop Data Not Found

**GIVEN** a user navigates to a workshop detail page
**WHEN** the workshop ID doesn't exist in the data
**THEN** they see:
  - 404-style message: "Workshop not found"
  - Helpful text: "This workshop page doesn't exist. View our complete portfolio."
  - CTA button: "View Portfolio →" linking to /portfolio
  - Clean error page matching site design

---

### AC-019: Edge Case - No JavaScript Enabled

**GIVEN** a user has JavaScript disabled
**WHEN** they view the homepage or portfolio
**THEN** they see:
  - Core content is still readable (progressive enhancement)
  - Static map image or text list of locations (no interactive map)
  - No animations, but content is accessible
  - Navigation still works
  - CTAs are standard links

---

### AC-020: Performance - Fast Page Load

**GIVEN** a user visits the homepage or portfolio
**WHEN** the page loads
**THEN** it:
  - Loads above-the-fold content within 1.5 seconds on 3G connection
  - Uses optimized images (Next.js Image component with proper sizing)
  - Lazy loads below-the-fold images and map
  - Minimizes layout shift (CLS < 0.1)
  - Achieves Lighthouse performance score > 85 (target for prototype)

---

## 3. Traceability Matrix

| Criterion | Test File | Test Name | Status |
|-----------|-----------|-----------|--------|
| AC-001 | | | ⏳ |
| AC-002 | | | ⏳ |
| AC-003 | | | ⏳ |
| AC-004 | | | ⏳ |
| AC-005 | | | ⏳ |
| AC-006 | | | ⏳ |
| AC-007 | | | ⏳ |
| AC-008 | | | ⏳ |
| AC-009 | | | ⏳ |
| AC-010 | | | ⏳ |
| AC-011 | | | ⏳ |
| AC-012 | | | ⏳ |
| AC-013 | | | ⏳ |
| AC-014 | | | ⏳ |
| AC-015 | | | ⏳ |
| AC-016 | | | ⏳ |
| AC-017 | | | ⏳ |
| AC-018 | | | ⏳ |
| AC-019 | | | ⏳ |
| AC-020 | | | ⏳ |

**Status:** ⏳ Pending | ✅ Passed | ❌ Failed

---

## 4. Technical Design

### 4.1 Components/Files to Create or Modify

| File | Action | Description |
|------|--------|-------------|
| `src/app/page.tsx` | Create | Homepage route with all sections |
| `src/app/portfolio/page.tsx` | Create | Portfolio page with map and grid |
| `src/app/portfolio/[slug]/page.tsx` | Create | Dynamic workshop detail page |
| `src/components/layout/Header.tsx` | Create | Site header with navigation |
| `src/components/layout/Footer.tsx` | Create | Site footer |
| `src/components/home/Hero.tsx` | Create | Homepage hero section |
| `src/components/home/KpiTicker.tsx` | Create | Animated KPI metrics |
| `src/components/home/AudienceCards.tsx` | Create | Three audience path cards |
| `src/components/home/CeoQuote.tsx` | Create | CEO vision quote block |
| `src/components/home/FooterCta.tsx` | Create | Homepage footer CTA |
| `src/components/portfolio/WorkshopMap.tsx` | Create | Interactive map component |
| `src/components/portfolio/WorkshopGrid.tsx` | Create | Workshop cards grid |
| `src/components/portfolio/WorkshopCard.tsx` | Create | Individual workshop card |
| `src/components/ui/Button.tsx` | Create/Use | Primary button component (may exist in shadcn) |
| `src/hooks/useScrollAnimation.ts` | Create | Custom hook for scroll-triggered animations |
| `src/hooks/useCountUp.ts` | Create | Custom hook for counter animation |
| `src/lib/api/workshops.ts` | Create | Mock API functions (Strapi-ready structure) |
| `src/types/strapi.ts` | Create | TypeScript types for Strapi responses |
| `src/content/workshops.ts` | Exists | Workshop data (already created) |
| `src/content/homepage.ts` | Create | Homepage content (hero, KPIs, etc.) |

### 4.2 Data Model

```typescript
// Strapi-ready response structure
interface StrapiResponse<T> {
  data: T
  meta?: StrapiMeta
}

interface StrapiEntity<T> {
  id: number
  attributes: T
}

interface StrapiMeta {
  pagination?: {
    page: number
    pageSize: number
    pageCount: number
    total: number
  }
}

// Homepage content (Strapi single type)
interface HomepageContent {
  hero: {
    headline: string
    subheadline: string
    backgroundImage?: string
    backgroundVideo?: string
    cta1Text: string
    cta1Link: string
    cta2Text: string
    cta2Link: string
  }
  kpis: Array<{
    value: number
    label: string
    prefix?: string
    suffix?: string
  }>
  ceoQuote: {
    text: string
    attribution: string
    photoUrl?: string
  }
  footerCta: {
    headline: string
    subtext: string
    ctaText: string
    ctaLink: string
  }
}

// Workshop (Strapi collection type) - extends existing
interface Workshop {
  id: number
  name: string
  city: string
  region: string
  latitude: number
  longitude: number
  status: 'acquired' | 'pending' | 'target'
  yearAcquired: number
  localWebsite: string
  description: string
  slug: string // for URL
}

// Audience card content
interface AudienceCard {
  headline: string
  description: string
  ctaText: string
  ctaLink: string
  backgroundColor: string // Birch, Fjord, or Stone
}
```

### 4.3 API Endpoints (Mock - Strapi-ready)

| Method | Endpoint | Description | Returns |
|--------|----------|-------------|---------|
| GET | `/api/homepage` | Get homepage content | `StrapiResponse<StrapiEntity<HomepageContent>>` |
| GET | `/api/workshops` | Get all workshops | `StrapiResponse<StrapiEntity<Workshop>[]>` |
| GET | `/api/workshops/:slug` | Get single workshop | `StrapiResponse<StrapiEntity<Workshop>>` |

Mock implementations will return data structured exactly as Strapi would, making the transition seamless.

### 4.4 State Management

- **Homepage content**: Fetched on server-side (Next.js App Router), passed as props
- **Workshop data**: Fetched on server-side, cached
- **Client-side state**: Minimal - only for UI interactions (map tooltips, animations)
- **No global state needed** - each page is self-contained
- Animation states managed by custom hooks

---

## 5. UI/UX Requirements

### 5.1 Design System

**Colors (from Copy Deck):**
- Primary: AutoCap Red `#C8102E`
- Dark: Nordic Black `#1C1C1E`
- Backgrounds:
  - Entrepreneurs: Birch `#D8E4DC`
  - Investors: Fjord `#C9D8E8`
  - Portfolio: Stone `#E4E2DE`
  - News: Ember `#F0DADA`
  - About: Dusk `#EDE4D8`
  - Light sections: Linen White `#F5F0EB`
- Text: Nordic Black for main text, white for dark backgrounds

**Typography:**
- Headings: Large, confident (48-72px on desktop for hero)
- Body: Readable, generous line-height (1.6-1.8)
- Hierarchy: Clear distinction between h1, h2, h3
- Font: Modern sans-serif (Inter, Helvetica Neue, or similar)
- Optional: Serif for quotes (Playfair Display, Georgia, or similar)

**Spacing:**
- Generous whitespace (padding/margin in 4px/8px increments)
- Section padding: 80-120px vertical on desktop, 40-60px on mobile
- Component spacing: consistent 16px/24px/32px

**Shadows:**
- Subtle: `0 2px 8px rgba(0,0,0,0.08)`
- Hover: `0 4px 16px rgba(0,0,0,0.12)`
- Cards: `0 1px 3px rgba(0,0,0,0.06)`

### 5.2 Mobile Requirements (320px - 767px)

- Single column layouts
- Hero: full viewport height, text centered, stacked CTAs
- KPI cards: single column, full width
- Audience cards: stacked, full width with padding
- Workshop grid: single column
- Map: min-height 400px, touch-friendly controls
- Navigation: hamburger menu with slide-out drawer
- Touch targets: minimum 44x44px
- Font sizes: scale down appropriately but maintain readability

### 5.3 Tablet Requirements (768px - 1023px)

- 2-column layouts for KPIs, workshop grid
- Hero: maintain full viewport, adjust text size
- Audience cards: 2 cards in first row, 1 in second (or all 3 if space allows)
- Map: height 500px
- Navigation: abbreviated or full depending on space
- Maintain touch-friendly interactions

### 5.4 Desktop Requirements (1024px+)

- Multi-column layouts (3-4 columns)
- Hero: full viewport, large typography
- KPI cards: 4 columns in single row
- Audience cards: 3 equal columns
- Workshop grid: 3 columns
- Map: height 600px, full-width with constraints (max 1400px container)
- Navigation: full horizontal menu
- Hover effects: enabled and polished
- Maximum content width: 1400-1600px (centered)

### 5.5 Interactions & Animations

**Hover States:**
- Cards: lift (translateY -4px) + shadow increase
- Buttons: slight scale (1.02) or color darken
- Links: underline or color change
- Map markers: scale increase (1.1)

**Scroll Animations:**
- Fade in + translateY (20-30px upward)
- Stagger animations for lists/grids (50-100ms delay between items)
- Use Intersection Observer API for triggering
- Respect `prefers-reduced-motion`

**Counter Animation:**
- Count from 0 to target value over 1.5-2 seconds
- Easing: ease-out for natural deceleration
- Trigger once on scroll into view

**Page Transitions:**
- Smooth fade between pages (Next.js page transitions)
- Loading states for async content

### 5.6 Accessibility

- Semantic HTML: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- Heading hierarchy: proper h1 → h6 structure
- Alt text for all images
- ARIA labels for interactive elements without text
- Keyboard navigation: all interactive elements focusable
- Focus indicators: visible and styled
- Skip to main content link
- Color contrast: WCAG AA minimum (4.5:1 for text, 3:1 for large text)
- Map: keyboard accessible controls, ARIA labels for markers

---

## 6. Error Handling

| Error Scenario | User Message | Technical Handling |
|----------------|--------------|-------------------|
| Map API fails to load | "We're having trouble loading the map. Please try refreshing the page." | Catch map initialization error, show fallback UI, grid still works |
| Workshop not found | "Workshop not found. View our complete portfolio." | Check if slug exists, show 404 page with link to portfolio |
| Image fails to load | Show placeholder or gradient background | Use Next.js Image onError handler, fallback to solid color |
| Slow network | Show loading skeletons | Use Suspense boundaries, progressive loading |

---

## 7. Performance Considerations

**Optimization Strategy:**
- **Images**: Next.js Image component with automatic optimization
  - Responsive srcset for different screen sizes
  - Lazy loading for below-the-fold images
  - WebP format with fallbacks
- **Video**: Use poster image, lazy load video on interaction
- **Map**: Load map library only when needed (dynamic import)
- **Fonts**: Preload critical fonts, use font-display: swap
- **Code splitting**: Automatic with Next.js App Router
- **Caching**: Static generation where possible, ISR for workshop data

**Targets:**
- First Contentful Paint (FCP): < 1.5s
- Largest Contentful Paint (LCP): < 2.5s
- Cumulative Layout Shift (CLS): < 0.1
- Time to Interactive (TTI): < 3.5s
- Lighthouse Performance: > 85 (prototype), > 90 (production goal)

---

## 8. Security Considerations

**For Prototype:**
- No user input (forms are separate feature)
- No authentication needed
- Environment variables for map API keys (not committed to git)
- Content Security Policy headers
- No XSS risk (static content)

**For Production (future):**
- Strapi API authentication tokens
- Rate limiting on API endpoints
- Input sanitization if forms added
- HTTPS only

---

## 9. Testing Strategy

### 9.1 Unit Tests

- Component rendering tests (React Testing Library)
- Custom hooks tests (useCountUp, useScrollAnimation)
- Data transformation functions
- Responsive utilities

### 9.2 Integration Tests

- Homepage sections render correctly
- Navigation links work
- Workshop grid populates from data
- Map markers match workshop data
- Workshop detail pages route correctly

### 9.3 E2E Tests

- Full user journey: Homepage → Portfolio → Workshop Detail
- Responsive behavior at breakpoints (320px, 768px, 1024px, 1440px)
- Scroll animations trigger
- Map interactions work (hover, click markers)
- Navigation menu works on mobile

### 9.4 Visual Regression Tests (Optional)

- Screenshot comparison for key pages
- Detect unintended layout changes

---

## 10. Dependencies

### 10.1 New Dependencies

- **Map Library** (choose one):
  - `react-google-maps` or `@react-google-maps/api` - if using Google Maps
  - `react-map-gl` - if using Mapbox (recommended for better styling control)
- **Animation Library** (optional, Tailwind may suffice):
  - `framer-motion` - for advanced animations if needed
- **Intersection Observer**:
  - `react-intersection-observer` - for scroll animations
- **Counter Animation**:
  - `react-countup` OR custom implementation

### 10.2 Existing Dependencies (Already Available)

- `next` - Framework
- `react` & `react-dom` - UI library
- `tailwindcss` - Styling
- `typescript` - Type safety
- `@radix-ui/*` - UI primitives
- `lucide-react` - Icons

---

## 11. Map Implementation Notes

**Recommended: Mapbox GL**

Why Mapbox over Google Maps:
- Better custom styling (matches brand colors)
- More affordable for prototype
- Better mobile performance
- Modern API

**API Key Setup:**
```env
NEXT_PUBLIC_MAPBOX_TOKEN=your_token_here
```

**Map Configuration:**
- Center: Approximate center of Sweden (59.3293° N, 18.0686° E - Stockholm area)
- Zoom: Start at level that shows all workshops
- Markers: Custom SVG with AutoCap Red color
- Clustering: Not needed (only 13 workshops)
- Style: Custom Mapbox style matching AutoCap brand

---

## 12. Content Source Files

**Mock Data Files to Create:**

`src/content/homepage.ts`:
```typescript
export const homepageContent: HomepageContent = {
  hero: {
    headline: "The Nordic Tire Services Platform",
    subheadline: "We acquire, operate and grow independent tire service centres...",
    cta1Text: "For Entrepreneurs →",
    cta1Link: "/entrepreneurs",
    cta2Text: "For Investors →",
    cta2Link: "/investors",
  },
  kpis: [
    { value: 12, label: "Service centres and growing", suffix: " Workshops" },
    { value: 50, label: "People across Sweden", prefix: "~" },
    { value: 200, label: "Regions from Mälardalen to Västra Götaland", suffix: " MSEK" },
    { value: 50, label: "Targeted workshops by 2028", suffix: " Ambition" },
  ],
  ceoQuote: {
    text: "We're building something that didn't exist...",
    attribution: "David Knape, CEO & Co-Founder, AutoCap Group",
  },
  footerCta: {
    headline: "Ready to start a conversation?",
    subtext: "Whether you're a workshop owner...",
    ctaText: "Get in touch →",
    ctaLink: "/contact",
  },
}
```

**Workshop Data**: Already exists in `src/content/workshops.ts` - add `slug` field for URLs

---

## 13. Rollout Plan

- [ ] Implementation complete
- [ ] All 20 acceptance criteria met with tests
- [ ] Quality gates passed (5 for prototype mode)
- [ ] Responsive tested at all breakpoints
- [ ] Animations smooth and performant
- [ ] Map interactive and functional
- [ ] User testing approved
- [ ] Documentation generated
- [ ] Ready for commit

---

## 14. Open Questions

- [x] Do we have video footage for hero background? If not, what's the fallback image? **→ Use image background**
- [x] CEO photo available for quote block? Or ship without it initially? **→ Ship without photo initially**
- [x] Mapbox vs Google Maps preference? (Recommend Mapbox) **→ Use Mapbox**
- [x] Should header be sticky/fixed on scroll? **→ Yes, sticky header**
- [x] Any specific animation library preference, or use CSS/Tailwind? **→ Tailwind + tw-animate-css + Framer Motion**

---

---

## TEST PLAN

**Prepared by:** Dr. Priya Patel (Quality Lead)
**Date:** 2026-04-22

### Test Strategy Overview

This test plan covers all 20 acceptance criteria with a combination of unit, integration, and E2E tests. Given the visual and interactive nature of this feature (top-tier design requirement), we emphasize visual regression and responsive testing.

**Test Distribution:**
- **Unit Tests:** 15 tests (component rendering, hooks, utilities)
- **Integration Tests:** 12 tests (page composition, data flow, navigation)
- **E2E Tests:** 8 tests (full user journeys, responsive behavior, animations)
- **Visual Regression:** 5 snapshots (key pages at different breakpoints)

**Total:** 40 tests planned

---

### Test Matrix

| AC | Level | Test File | Test Name | Fixtures | Edge Cases |
|----|-------|-----------|-----------|----------|------------|
| **AC-001** | Unit | `src/components/home/__tests__/Hero.test.tsx` | `should render hero with headline and subheadline` | Mock homepage content | - Missing image URL<br>- Long headline text |
| AC-001 | Integration | `src/app/__tests__/page.test.tsx` | `should render hero section on homepage` | Full homepage data | |
| AC-001 | E2E | `e2e/homepage.spec.ts` | `hero section displays with correct styling and CTAs` | | - Mobile viewport<br>- Desktop viewport |
| **AC-002** | Unit | `src/components/home/__tests__/KpiTicker.test.tsx` | `should render KPI cards with correct values` | Mock KPI data (4 cards) | - Missing values<br>- Zero values<br>- Large numbers (>1000) |
| AC-002 | Unit | `src/hooks/__tests__/useCountUp.test.ts` | `should animate counter from 0 to target` | | - Negative numbers<br>- Decimal numbers |
| AC-002 | E2E | `e2e/homepage.spec.ts` | `KPI counters animate on scroll into view` | | - Animation triggers only once<br>- Respects prefers-reduced-motion |
| **AC-003** | Unit | `src/components/home/__tests__/AudienceCards.test.tsx` | `should render three audience cards with correct colors` | Mock audience card data | - Missing CTA link<br>- Long description text |
| AC-003 | Integration | `src/app/__tests__/page.test.tsx` | `audience cards navigate to correct pages` | | |
| AC-003 | E2E | `e2e/homepage.spec.ts` | `audience cards show hover effects and are clickable` | | - Test at 320px, 768px, 1024px |
| **AC-004** | Unit | `src/components/home/__tests__/CeoQuote.test.tsx` | `should render CEO quote without photo` | Mock quote data (no photo) | - Very long quote text<br>- Missing attribution |
| AC-004 | Integration | `src/app/__tests__/page.test.tsx` | `CEO quote section renders on homepage` | | |
| **AC-005** | Unit | `src/components/home/__tests__/FooterCta.test.tsx` | `should render footer CTA with button` | Mock CTA data | - Missing link |
| AC-005 | Integration | `src/app/__tests__/page.test.tsx` | `footer CTA button links to contact page` | | |
| **AC-006** | Unit | `src/components/portfolio/__tests__/WorkshopMap.test.tsx` | `should render map container with correct dimensions` | Mock workshops data | - Empty workshops array<br>- Single workshop |
| AC-006 | Integration | `src/app/portfolio/__tests__/page.test.tsx` | `portfolio page renders with intro text and map` | 13 workshops | |
| AC-006 | E2E | `e2e/portfolio.spec.ts` | `map loads and displays all workshop markers` | | - Map initialization<br>- Markers positioned correctly |
| **AC-007** | Unit | `src/components/portfolio/__tests__/WorkshopMap.test.tsx` | `should render tooltip on marker hover` | Single workshop | - Tooltip positioning<br>- Long workshop names |
| AC-007 | E2E | `e2e/portfolio.spec.ts` | `clicking marker shows tooltip with workshop details` | | - Desktop hover<br>- Mobile tap<br>- Close tooltip behavior |
| **AC-008** | Unit | `src/components/portfolio/__tests__/WorkshopGrid.test.tsx` | `should render grid with all workshop cards` | 13 workshops | - Odd number of workshops<br>- Empty array |
| AC-008 | Unit | `src/components/portfolio/__tests__/WorkshopCard.test.tsx` | `should render workshop card with correct data` | Single workshop | - Missing year<br>- Long workshop name |
| AC-008 | Integration | `src/app/portfolio/__tests__/page.test.tsx` | `workshop cards link to detail pages` | 13 workshops | |
| AC-008 | E2E | `e2e/portfolio.spec.ts` | `workshop grid displays in correct columns per breakpoint` | | - 1 col @ 320px<br>- 2 col @ 768px<br>- 3 col @ 1024px |
| **AC-009** | Integration | `src/app/portfolio/[slug]/__tests__/page.test.tsx` | `workshop detail page renders with correct data` | Single workshop | - Missing local website<br>- Missing description |
| AC-009 | E2E | `e2e/portfolio.spec.ts` | `navigating to workshop detail shows full information` | | - Breadcrumb navigation<br>- CTA link works |
| **AC-010** | Unit | `src/components/layout/__tests__/Header.test.tsx` | `should render header with navigation links` | Mock nav data | - Active page highlighting<br>- Long nav labels |
| AC-010 | Integration | `src/app/__tests__/layout.test.tsx` | `header navigation links work across pages` | | |
| AC-010 | E2E | `e2e/navigation.spec.ts` | `header is sticky on scroll and shows mobile menu` | | - Desktop: full nav<br>- Mobile: hamburger<br>- Sticky behavior |
| **AC-011** | Unit | `src/components/layout/__tests__/Footer.test.tsx` | `should render footer with tagline and links` | | - Missing links<br>- Long tagline |
| AC-011 | Integration | `src/app/__tests__/layout.test.tsx` | `footer appears on all pages` | | |
| **AC-012** | E2E | `e2e/responsive.spec.ts` | `mobile layout displays correctly at 320px and 375px` | | - Single column<br>- Touch targets 44px min<br>- No horizontal scroll |
| AC-012 | E2E | `e2e/responsive.spec.ts` | `mobile navigation works with hamburger menu` | | |
| **AC-013** | E2E | `e2e/responsive.spec.ts` | `tablet layout displays correctly at 768px` | | - 2-column grids<br>- Spacing appropriate |
| **AC-014** | E2E | `e2e/responsive.spec.ts` | `desktop layout displays correctly at 1024px and 1440px` | | - Multi-column layouts<br>- Max-width constraints<br>- Hover states work |
| **AC-015** | Unit | `src/hooks/__tests__/useScrollAnimation.test.ts` | `should trigger animation on scroll into view` | | - Respects prefers-reduced-motion<br>- Triggers only once |
| AC-015 | E2E | `e2e/animations.spec.ts` | `scroll animations are smooth and performant` | | - 60fps target<br>- No jank |
| **AC-016** | Integration | `src/app/__tests__/loading.test.tsx` | `shows loading states for async content` | | |
| AC-016 | E2E | `e2e/performance.spec.ts` | `page transitions are smooth without FOUC` | | - Navigate between pages<br>- Check layout shift |
| **AC-017** | Unit | `src/components/portfolio/__tests__/WorkshopMap.test.tsx` | `should show error message when map fails to load` | Error state | |
| AC-017 | Integration | `src/app/portfolio/__tests__/page.test.tsx` | `portfolio page works when map fails` | Map error | - Grid still renders<br>- Error message shown |
| **AC-018** | Integration | `src/app/portfolio/[slug]/__tests__/page.test.tsx` | `shows 404 for non-existent workshop` | Invalid slug | |
| AC-018 | E2E | `e2e/errors.spec.ts` | `404 page displays with link back to portfolio` | | |
| **AC-019** | E2E | `e2e/progressive-enhancement.spec.ts` | `core content accessible without JavaScript` | | - Disable JS<br>- Content readable<br>- Links work |
| **AC-020** | E2E | `e2e/performance.spec.ts` | `homepage loads in under 1.5s FCP` | Throttled 3G | - Lighthouse score >85<br>- CLS < 0.1 |
| AC-020 | E2E | `e2e/performance.spec.ts` | `images are optimized and lazy loaded` | | - Check Next/Image usage<br>- Below-fold lazy load |

---

### Cross-Cutting Tests

**Responsive Design Tests:**
- Test all pages at breakpoints: 320px, 375px, 768px, 1024px, 1440px
- Verify layout doesn't break at edge cases (319px, 769px)
- Check orientation changes (portrait/landscape) on tablet

**Animation Tests:**
- Verify all animations respect `prefers-reduced-motion`
- Check animation performance (no dropped frames)
- Ensure animations don't block interactions

**Accessibility Tests:**
- Keyboard navigation through all interactive elements
- Focus indicators visible and styled
- Semantic HTML structure
- ARIA labels where needed
- Color contrast meets WCAG AA (4.5:1)

**Performance Tests:**
- Lighthouse audit on all pages
- Bundle size check
- Image optimization verification
- Lazy loading implementation check

**Error Handling Tests:**
- Network errors (offline mode)
- API failures (mock API errors)
- Image load failures
- Map API failures

---

### Fixtures Required

**Mock Data Files:**

1. **`__fixtures__/homepage.ts`**
   ```typescript
   export const mockHomepageContent = {
     hero: { headline: "...", subheadline: "...", ... },
     kpis: [...],
     ceoQuote: { text: "...", attribution: "..." },
     footerCta: { ... }
   }
   ```

2. **`__fixtures__/workshops.ts`**
   ```typescript
   export const mockWorkshops = [ /* 13 workshops */ ]
   export const mockSingleWorkshop = { /* 1 workshop */ }
   export const mockEmptyWorkshops = []
   ```

3. **`__fixtures__/navigation.ts`**
   ```typescript
   export const mockNavLinks = [
     { label: "Home", href: "/" },
     // ...
   ]
   ```

**Visual Regression Snapshots:**
1. Homepage @ 1440px (desktop)
2. Homepage @ 375px (mobile)
3. Portfolio @ 1024px (desktop with map)
4. Portfolio @ 768px (tablet)
5. Workshop detail page @ 1440px

---

### Test Environment Setup

**Tools:**
- **Unit/Integration:** Vitest + React Testing Library
- **E2E:** Playwright
- **Visual Regression:** Playwright screenshots or Percy
- **Performance:** Lighthouse CI

**Test Commands:**
```bash
npm run test              # Unit + Integration
npm run test:e2e          # E2E tests
npm run test:visual       # Visual regression
npm run test:performance  # Lighthouse
npm run test:all          # All tests
```

---

### Special Testing Considerations

**Map Testing:**
- Mock Mapbox GL library for unit tests
- Use actual map in E2E with test API key
- Verify marker clustering disabled (only 13 workshops)
- Test map controls work on touch devices

**Animation Testing:**
- Use Playwright's `waitForFunction` to verify animation completion
- Check CSS transform values after animation
- Verify IntersectionObserver triggers correctly

**Responsive Testing:**
- Test at exact breakpoints: 767px, 768px, 1023px, 1024px
- Verify no layout shift when resizing
- Check touch targets on mobile (min 44x44px)

**Performance Testing:**
- Throttle network to 3G
- Lighthouse scores: Performance >85, Accessibility >90 (minimum for prototype)
- Check bundle size doesn't exceed 500KB (initial JS)

---

### Test Execution Order

**Phase 1:** Unit tests (fast feedback loop)
**Phase 2:** Integration tests (component composition)
**Phase 3:** E2E tests (user journeys)
**Phase 4:** Visual regression (UI consistency)
**Phase 5:** Performance tests (optimization verification)

---

### Definition of Done for Testing

- [ ] All 40 tests written and passing
- [ ] Test coverage >80% for components and hooks
- [ ] All 5 visual snapshots approved
- [ ] Lighthouse performance score >85
- [ ] No accessibility violations in axe-core scan
- [ ] Responsive behavior verified at all breakpoints
- [ ] Animation performance verified (60fps)
- [ ] Error states tested and handled gracefully

---

### Risk Areas & Mitigation

| Risk Area | Mitigation |
|-----------|------------|
| **Map API costs** | Use test API key with limited usage, mock in unit tests |
| **Animation performance on low-end devices** | Test on throttled CPU, provide reduced motion fallbacks |
| **Large image sizes** | Enforce Next/Image usage, test lazy loading |
| **Map rendering on mobile** | Extensive touch device testing, fallback to list view |
| **Layout shift during animations** | Reserve space with min-height, test CLS metric |

---

## Test Plan Summary

**Total Tests:** 40
- Unit: 15
- Integration: 12
- E2E: 8
- Visual Regression: 5

**Key Focus Areas:**
1. Premium design implementation (visual regression)
2. Responsive behavior (5 breakpoints)
3. Smooth animations (60fps, reduced motion)
4. Map functionality (13 markers, tooltips, touch)
5. Performance (< 1.5s FCP, bundle size)

**Next Step:** Approve test plan to proceed to implementation phase (TDD).

---

## Sign-off

| Role | Name | Date | Approved |
|------|------|------|----------|
| Product Owner | User | 2026-04-22 | [x] |
| Tech Lead | Alex Chen | 2026-04-22 | [x] |
| Quality Lead | Dr. Priya Patel | 2026-04-22 | [x] |
