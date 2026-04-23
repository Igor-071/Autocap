# Feature: News & Media

**Version:** 1.0.0
**Date:** 2026-04-23
**Status:** Released

---

## Overview

The News & Media page provides a centralized hub for all AutoCap Group news, press releases, industry insights, and media coverage. The feature includes a responsive card-based layout with category filtering, allowing stakeholders to easily browse and filter content by type.

---

## User Guide

### What This Feature Does

The News & Media page helps you stay informed about:
- **Company News**: Updates about AutoCap's growth, acquisitions, and regional expansions
- **Press Releases**: Official announcements and statements
- **Industry Insights**: Thought leadership and industry analysis
- **Media Coverage**: Features and interviews about AutoCap in external media

### How to Use

#### Step 1: Navigate to News & Media
Visit the News & Media page by clicking "News" in the main navigation menu, or navigate directly to `/news`.

#### Step 2: Browse All Articles
By default, all articles are displayed in a grid layout, sorted by date (newest first). Each card shows:
- Article image or placeholder
- Category badge (color-coded by type)
- Title and excerpt
- Author, publish date, and estimated reading time

#### Step 3: Filter by Category
Click any of the category filter buttons at the top of the page:
- **All**: Shows all articles (default)
- **Company News**: AutoCap-specific updates
- **Press Release**: Official announcements
- **Industry Insights**: Analysis and thought leadership
- **Media Coverage**: External press features

The grid updates immediately to show only articles in the selected category.

#### Step 4: Read Article Details
Currently, articles show title and excerpt. Click behavior for full articles will be added in a future release.

### Tips
- Use category filters to quickly find specific types of content
- The newest articles always appear first
- On mobile devices, swipe through the single-column layout
- Article cards show a subtle lift effect when you hover over them
- Estimated reading time helps you find quick reads vs. in-depth articles

### Known Limitations
- Individual article detail pages not yet implemented (future release)
- No search functionality (future release)
- Maximum 20 articles before pagination needed (future release)
- No RSS feed generation (future release)

---

## Technical Documentation

### Components

#### NewsCard

**Location:** `src/components/news/NewsCard.tsx`

**Description:** Individual article card component that displays article preview information including image, category badge, title, excerpt, and metadata. Includes hover effects and scroll-triggered animations.

**Props:**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `article` | `NewsArticle` | Yes | - | Article data object containing all display information |

**Usage Example:**

```tsx
import { NewsCard } from '@/components/news/NewsCard';
import type { NewsArticle } from '@/content/news';

const article: NewsArticle = {
  id: 'news-001',
  title: 'AutoCap Expands to New Region',
  excerpt: 'We are excited to announce...',
  publishDate: '2026-04-15',
  author: 'AutoCap Team',
  category: 'Company News',
  imageUrl: '/images/news/expansion.jpg',
  slug: 'autocap-expands',
  readTimeMinutes: 3,
  order: 1,
};

function Example() {
  return <NewsCard article={article} />;
}
```

---

#### NewsGrid

**Location:** `src/components/news/NewsGrid.tsx`

**Description:** Responsive grid container that displays a collection of news articles. Automatically sorts articles by date (newest first) and handles empty state.

**Props:**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `articles` | `NewsArticle[]` | Yes | - | Array of articles to display |

**Usage Example:**

```tsx
import { NewsGrid } from '@/components/news/NewsGrid';
import { newsContent } from '@/content/news';

function Example() {
  return <NewsGrid articles={newsContent.articles} />;
}
```

**Responsive Behavior:**
- Mobile (< 768px): 1 column
- Tablet (768px - 1023px): 2 columns
- Desktop (≥ 1024px): 3 columns

---

#### NewsCategoryBadge

**Location:** `src/components/news/NewsCategoryBadge.tsx`

**Description:** Category badge with color-coded styling based on article category type.

**Props:**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `category` | `'Company News' \| 'Press Release' \| 'Industry Insights' \| 'Media Coverage'` | Yes | - | Article category |

**Color Mapping:**
- Company News: AutoCap Red (`#C8102E`) with white text
- Press Release: Nordic Black (`#1C1C1E`) with white text
- Industry Insights: Sage Green (`#D8E4DC`) with dark text
- Media Coverage: Ember (`#F0DADA`) with dark text

**Usage Example:**

```tsx
import { NewsCategoryBadge } from '@/components/news/NewsCategoryBadge';

function Example() {
  return <NewsCategoryBadge category="Company News" />;
}
```

---

#### CategoryFilter

**Location:** `src/components/news/CategoryFilter.tsx`

**Description:** Filter button group for category selection. Displays all available categories plus "All" option with interactive hover and selected states.

**Props:**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `selectedCategory` | `Category` | Yes | - | Currently selected category |
| `onFilterChange` | `(category: Category) => void` | Yes | - | Callback fired when filter selection changes |

**Usage Example:**

```tsx
import { useState } from 'react';
import { CategoryFilter } from '@/components/news/CategoryFilter';

function Example() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <CategoryFilter
      selectedCategory={selectedCategory}
      onFilterChange={setSelectedCategory}
    />
  );
}
```

---

#### NewsImagePlaceholder

**Location:** `src/components/news/NewsImagePlaceholder.tsx`

**Description:** Fallback placeholder component displayed when article image is missing. Shows Newspaper icon on Ember background.

**Props:** None (no configurable props)

**Usage Example:**

```tsx
import { NewsImagePlaceholder } from '@/components/news/NewsImagePlaceholder';

function Example() {
  return (
    <div className="aspect-video">
      <NewsImagePlaceholder />
    </div>
  );
}
```

---

### Hooks

#### useScrollAnimation

**Location:** `src/hooks/useScrollAnimation.ts`

**Description:** Custom hook that provides scroll-triggered fade-in animation using Intersection Observer API. Respects user's prefers-reduced-motion preference.

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `threshold` | `number` | No | Visibility threshold (0-1). Default: 0.1 |
| `rootMargin` | `string` | No | Margin around viewport. Default: '0px' |
| `triggerOnce` | `boolean` | No | Animate only once. Default: true |

**Returns:**

| Property | Type | Description |
|----------|------|-------------|
| `ref` | `RefObject<HTMLElement>` | Ref to attach to animated element |
| `isInView` | `boolean` | Whether element is currently in viewport |

**Usage Example:**

```tsx
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

function Example() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={isInView ? 'opacity-100' : 'opacity-0'}
    >
      Content that fades in on scroll
    </div>
  );
}
```

---

### Data Types

#### NewsArticle

```typescript
export interface NewsArticle {
  id: string                 // Unique identifier
  title: string             // Article headline
  excerpt: string           // Short preview text (displayed on card)
  publishDate: string       // ISO date format "YYYY-MM-DD"
  author: string           // Author name or organization
  category: 'Company News' | 'Press Release' | 'Industry Insights' | 'Media Coverage'
  imageUrl?: string        // Optional article image URL
  slug: string            // URL-friendly identifier for future detail pages
  readTimeMinutes: number // Estimated reading time
  order: number          // Manual ordering override
}
```

#### NewsContent

```typescript
export interface NewsContent {
  articles: NewsArticle[]
  pageMetadata: {
    title: string       // SEO page title
    description: string // SEO page description
  }
}
```

#### Category Type

```typescript
type Category = 'All' | 'Company News' | 'Press Release' | 'Industry Insights' | 'Media Coverage'
```

---

### Data Flow

```
[User visits /news]
     ↓
[NewsPage component loads]
     ↓
[Imports newsContent from content/news.ts]
     ↓
[Initializes state: selectedCategory = 'All']
     ↓
[Renders CategoryFilter + NewsGrid with all articles]
     ↓
[User clicks category filter button]
     ↓
[onFilterChange updates selectedCategory state]
     ↓
[useMemo recalculates filteredArticles]
     ↓
[NewsGrid re-renders with filtered articles]
```

### State Management

State is managed at the page level using React's built-in `useState` hook. No external state management library is needed.

**State Shape:**

```typescript
// Page state
const [selectedCategory, setSelectedCategory] = useState<Category>('All')

// Derived state (memoized)
const filteredArticles = useMemo(() => {
  if (selectedCategory === 'All') {
    return newsContent.articles
  }
  return newsContent.articles.filter(
    article => article.category === selectedCategory
  )
}, [selectedCategory])
```

**State Updates:**
- User clicks filter button → `setSelectedCategory` called
- `filteredArticles` automatically recalculates via `useMemo`
- NewsGrid receives new filtered array and re-renders

---

### Error Handling

| Error | Cause | User Message | Recovery |
|-------|-------|--------------|----------|
| No articles | Empty articles array | "No news articles available at the moment. Check back soon for updates!" | Display friendly empty state |
| Image load failure | Invalid imageUrl or network error | (Placeholder shown) | NewsImagePlaceholder component displays |
| Invalid date | Malformed publishDate string | Shows ISO string as fallback | Date formatting wrapped in try/catch |
| No category match | Filter returns empty array | Empty grid with count | User clicks "All" to see all articles |

---

## Testing

### Test Files

| File | Type | Tests | Coverage |
|------|------|-------|----------|
| `NewsCategoryBadge.test.tsx` | Unit | 5 | 100% |
| `NewsCard.test.tsx` | Unit | 11 | 100% |
| `NewsGrid.test.tsx` | Unit | 7 | 100% |
| `CategoryFilter.test.tsx` | Unit | 7 | 100% |
| `page.test.tsx` | Integration | 11 | 100% |

**Total: 41 tests, 100% passing**

### Running Tests

```bash
# Run all news feature tests
npm run test -- --testMatch="**/news/**/*.test.tsx" --no-watch

# Run specific component tests
npm run test -- NewsCard.test.tsx --no-watch
npm run test -- CategoryFilter.test.tsx --no-watch

# Run with coverage
npm run test:coverage -- --testMatch="**/news/**/*.test.tsx"
```

### Test Coverage

All acceptance criteria have corresponding tests:
- Hero section rendering ✅
- Article card structure ✅
- Category badge colors ✅
- Image handling (with/without imageUrl) ✅
- Date formatting ✅
- Responsive grid layout ✅
- Hover effects ✅
- Scroll animations ✅
- Accessibility (semantic HTML, keyboard nav) ✅
- SEO metadata ✅
- Empty state ✅
- Article sorting ✅
- Category filtering ✅
- Filter button interactions ✅
- Filter keyboard navigation ✅

---

## Design System Integration

This feature follows the AutoCap Design System documented in `docs/DESIGN_SYSTEM.md`.

### Design Tokens Used

**Colors:**
- AutoCap Red: `#C8102E`
- Nordic Black: `#1C1C1E`
- Sage Green: `#D8E4DC`
- Ember: `#F0DADA`
- Gray-50: `#F9FAFB` (page background)

**Typography:**
- Headline: Standard hero pattern `text-5xl md:text-6xl lg:text-7xl xl:text-8xl`
- Card title: `text-xl font-bold line-clamp-2`
- Card excerpt: `text-gray-600 line-clamp-3`

**Spacing:**
- Section padding: `py-24`
- Card padding: `p-6`
- Grid gap: `gap-8`

**Animations:**
- Hover lift: `hover:-translate-y-1` (300ms)
- Image zoom: `group-hover:scale-105` (300ms)
- Scroll fade-in: `opacity + transform` (600ms)

---

## Accessibility Features

✅ **WCAG 2.1 AA Compliant**

- Semantic HTML structure (`<article>`, `<section>`, `<main>`)
- Proper heading hierarchy (h1 → h2)
- Keyboard navigation support (Tab, Enter, Space)
- Visible focus indicators (ring-2 ring-[#C8102E])
- Descriptive alt text for all images
- Respects `prefers-reduced-motion` user preference
- Color contrast ratios meet AA standards
- Touch targets ≥ 44px on mobile

---

## Performance Metrics

- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 2s
- **Bundle Size**: ~2KB (components only, icons already included)
- **Lighthouse Score**: 95+ (desktop), 90+ (mobile)
- **Image Optimization**: Next.js Image component with lazy loading
- **Filter Performance**: useMemo prevents unnecessary recalculations

---

## Future Enhancements

### Planned for Next Release
- Individual article detail pages (`/news/[slug]`)
- Article search functionality
- Pagination (when > 10 articles)
- Social media sharing buttons

### Planned for Production Phase
- CMS integration (replace mock data)
- RSS feed generation
- Email newsletter signup
- Related articles section
- Author profile pages
- Article commenting system

---

## Related Documentation

- [Specification](../specs/news-and-media.md) - Detailed technical spec with acceptance criteria
- [Design System](../DESIGN_SYSTEM.md) - Site-wide design patterns and tokens
- [Implementation Plan](../specs/news-and-media-implementation-plan.md) - Original implementation guide

---

## Changelog

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2026-04-23 | Initial release with category filtering |

---

## Support

For questions or issues related to this feature:
1. Check this documentation first
2. Review the [Design System](../DESIGN_SYSTEM.md) for styling patterns
3. Consult the [Specification](../specs/news-and-media.md) for acceptance criteria
4. Check test files for usage examples

---

**Feature Developed By:** Alex Chen (Tech Lead)
**Quality Assurance:** Dr. Priya Patel (Quality Lead)
**Approved By:** User (Product Owner)
