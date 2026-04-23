# Specification: News & Media

**Author:** Alex Chen (Tech Lead)
**Date:** 2026-04-23
**Status:** Implemented

---

## 1. Overview

### 1.1 Summary
The News & Media page displays company news, press releases, industry insights, and media coverage to keep stakeholders informed about AutoCap's growth and activities. The feature includes a responsive card-based layout with category filtering to help users find relevant content quickly.

### 1.2 Goals
- Provide a centralized location for all AutoCap news and media content
- Enable users to filter articles by category (Company News, Press Release, Industry Insights, Media Coverage)
- Maintain design consistency with other sections of the site
- Ensure excellent user experience across all device sizes
- Support future expansion with individual article pages

### 1.3 Non-Goals
- Individual article detail pages (future phase)
- Search functionality (future phase)
- Pagination (not needed for initial 5 articles)
- CMS integration (prototype phase - mock data)
- RSS feed generation (future phase)
- Social media sharing buttons (future phase)

### 1.4 User Story
As a stakeholder (investor, workshop owner, or media contact),
I want to view recent news and updates from AutoCap Group,
So that I can stay informed about company developments, industry insights, and media coverage.

---

## 2. Acceptance Criteria

### AC-001: Hero Section Display

GIVEN I navigate to /news
WHEN the page loads
THEN I see a hero section with:
  AND Icon badge with Newspaper icon in white background
  AND Headline "News & Media" in standard headline style (text-5xl → xl:text-8xl)
  AND Red decorative line (1px height, 96px width)
  AND Subheadline "Company updates, industry insights, and press coverage"
  AND Standard gray-50 background matching site design

---

### AC-002: Article Card Structure

GIVEN I view a news article card
WHEN examining its structure
THEN I see:
  AND Article image (16:9 aspect ratio) or placeholder with Newspaper icon
  AND Category badge with correct color for category type
  AND Title (bold, 2-3 lines max, truncated with ellipsis using line-clamp-2)
  AND Excerpt (3 lines max, truncated with ellipsis using line-clamp-3)
  AND Footer showing "Author • Date • X min read" in gray-600

---

### AC-003: Category Badge Colors

GIVEN an article has category "Company News"
WHEN the card renders
THEN the badge shows AutoCap Red (#C8102E) background with white text

GIVEN an article has category "Press Release"
THEN the badge shows Nordic Black (#1C1C1E) background with white text

GIVEN an article has category "Industry Insights"
THEN the badge shows Sage Green (#D8E4DC) background with dark text

GIVEN an article has category "Media Coverage"
THEN the badge shows Ember (#F0DADA) background with dark text

---

### AC-004: Image Handling

GIVEN an article has imageUrl defined
WHEN the card renders
THEN the image displays using Next.js Image component
  AND has alt text matching the article title
  AND maintains 16:9 aspect ratio
  AND scales 5% on hover (group-hover:scale-105)

GIVEN an article is missing imageUrl
WHEN the card renders
THEN NewsImagePlaceholder displays with:
  AND Newspaper icon
  AND Ember background
  AND Same dimensions as image (16:9 aspect)

---

### AC-005: Date Formatting

GIVEN an article has publishDate "2026-04-15"
WHEN the footer renders
THEN the date displays as "April 15, 2026" (human-readable format)
  AND format is consistent across all cards

---

### AC-006: Responsive Grid Layout

GIVEN I view the page on mobile (< 768px)
THEN articles display in 1 column, full width

GIVEN I view the page on tablet (768px-1023px)
THEN articles display in 2 columns with balanced spacing

GIVEN I view the page on desktop (≥ 1024px)
THEN articles display in 3 columns with max-width container

---

### AC-007: Hover Effects

GIVEN I hover over an article card
WHEN my cursor is over the card
THEN the card lifts slightly (translateY: -4px via hover:-translate-y-1)
  AND border color transitions to AutoCap Red
  AND image scales to 105%
  AND transition is smooth (300ms duration)

---

### AC-008: Scroll Animation

GIVEN I scroll down the news page
WHEN article cards enter the viewport
THEN they fade in with opacity transition using useScrollAnimation hook
  AND animation respects prefers-reduced-motion user preference
  AND transition duration is 600ms

---

### AC-009: Accessibility

GIVEN I navigate the news page with keyboard
THEN all interactive elements (filter buttons, cards) are keyboard accessible
  AND article cards use semantic <article> elements
  AND images have descriptive alt text
  AND heading hierarchy is correct (h1 → h2)
  AND focus states are visible with ring-2 ring-[#C8102E]

---

### AC-010: SEO Metadata

GIVEN I view the /news page
WHEN I inspect page metadata
THEN title is "News & Media · AutoCap Group"
  AND description includes relevant keywords about news, press releases, and insights
  AND metadata follows site-wide pattern

---

### AC-011: Empty State

GIVEN the articles array is empty
WHEN the NewsGrid renders
THEN a friendly message displays "No news articles available at the moment."
  AND suggests "Check back soon for updates!"
  AND maintains page layout structure

---

### AC-012: Article Ordering

GIVEN there are multiple articles with different publishDate values
WHEN the NewsGrid renders
THEN articles display ordered by publishDate descending (newest first)
  AND sorting happens client-side using Array.sort()

---

### AC-013: Category Filtering

GIVEN I am viewing all news articles
WHEN I click on a category filter button (e.g., "Company News")
THEN only articles matching that category are displayed
  AND the selected filter button is highlighted in AutoCap Red
  AND unselected buttons show white background with gray text
  AND article grid updates smoothly

---

### AC-014: Filter Button Interaction

GIVEN I view the category filter buttons
WHEN I hover over an unselected button
THEN the button scales to 105%
  AND border color changes to AutoCap Red
  AND transition is smooth (200ms)

GIVEN I click "All" after filtering by a specific category
THEN all articles are displayed again
  AND "All" button is highlighted
  AND previous category button returns to unselected state

---

### AC-015: Filter Keyboard Navigation

GIVEN I am navigating with keyboard
WHEN I tab through filter buttons
THEN each button receives focus with visible focus ring
  AND pressing Enter or Space activates the filter
  AND filter change updates the article grid

---

## 3. Traceability Matrix

| Criterion | Test File | Test Name | Status |
|-----------|-----------|-----------|--------|
| AC-001 | page.test.tsx | Hero Section Display (5 tests) | ✅ |
| AC-002 | NewsCard.test.tsx | renders article image, category badge, title, excerpt, footer | ✅ |
| AC-003 | NewsCategoryBadge.test.tsx | Category Badge Colors (4 tests) | ✅ |
| AC-004 | NewsCard.test.tsx | Image Handling (2 tests) | ✅ |
| AC-005 | NewsCard.test.tsx | formats publishDate in human-readable format | ✅ |
| AC-006 | NewsGrid.test.tsx | Responsive Grid Layout (3 tests) | ✅ |
| AC-007 | NewsCard.test.tsx | applies hover transition classes | ✅ |
| AC-008 | NewsCard.tsx | useScrollAnimation integration (manual testing) | ✅ |
| AC-009 | NewsCard.test.tsx | Accessibility (2 tests) | ✅ |
| AC-010 | page.test.tsx | exports metadata with correct title and description | ✅ |
| AC-011 | NewsGrid.test.tsx | Empty State (2 tests) | ✅ |
| AC-012 | NewsGrid.test.tsx | Article Ordering (2 tests) | ✅ |
| AC-013 | page.test.tsx | filters articles when category is changed | ✅ |
| AC-014 | CategoryFilter.test.tsx | highlights selected category, hover effects | ✅ |
| AC-015 | CategoryFilter.test.tsx | is keyboard accessible | ✅ |

**Total Tests:** 41/41 passing ✅

---

## 4. Technical Design

### 4.1 Components/Files Created

| File | Action | Description |
|------|--------|-------------|
| `src/content/news.ts` | Create | Data structure with NewsArticle interface and 5 mock articles |
| `src/components/news/NewsCategoryBadge.tsx` | Create | Category badge with color-coded styling |
| `src/components/news/NewsImagePlaceholder.tsx` | Create | Fallback component for missing article images |
| `src/components/news/NewsCard.tsx` | Create | Individual article card with hover effects and scroll animation |
| `src/components/news/NewsGrid.tsx` | Create | Responsive grid container with article sorting |
| `src/components/news/CategoryFilter.tsx` | Create | Filter buttons for category selection |
| `src/app/news/page.tsx` | Modify | Client component with filter state management |
| `src/app/news/layout.tsx` | Create | SEO metadata for news section |
| `docs/DESIGN_SYSTEM.md` | Create | Comprehensive design system documentation |

### 4.2 Data Model

```typescript
export interface NewsArticle {
  id: string
  title: string
  excerpt: string
  publishDate: string // ISO format "2026-04-15"
  author: string
  category: 'Company News' | 'Press Release' | 'Industry Insights' | 'Media Coverage'
  imageUrl?: string
  slug: string // for future individual pages
  readTimeMinutes: number
  order: number
}

export interface NewsContent {
  articles: NewsArticle[]
  pageMetadata: {
    title: string
    description: string
  }
}

type Category = 'All' | 'Company News' | 'Press Release' | 'Industry Insights' | 'Media Coverage'
```

### 4.3 API Endpoints
Not applicable - prototype phase uses mock data in `src/content/news.ts`

### 4.4 State Management

**Client-side state management:**
```typescript
const [selectedCategory, setSelectedCategory] = useState<Category>('All')

const filteredArticles = useMemo(() => {
  if (selectedCategory === 'All') {
    return newsContent.articles
  }
  return newsContent.articles.filter(
    (article: NewsArticle) => article.category === selectedCategory
  )
}, [selectedCategory])
```

---

## 5. UI/UX Requirements

### 5.1 Mobile Requirements (320px - 767px)

- Single column article grid (grid-cols-1)
- Filter buttons wrap to multiple rows (flex-wrap)
- Headline scales from text-5xl (48px)
- Icon badge: 48px × 48px
- Card padding: p-6 (24px)
- Touch-friendly tap targets (min 44px height for buttons)

### 5.2 Tablet Requirements (768px - 1023px)

- Two column article grid (md:grid-cols-2)
- Filter buttons display in single row
- Headline scales to text-6xl (60px)
- Icon badge: 64px × 64px
- Balanced spacing between cards (gap-8)

### 5.3 Desktop Requirements (1024px+)

- Three column article grid (lg:grid-cols-3)
- Maximum content width: max-w-7xl
- Headline scales to text-7xl (72px) and xl:text-8xl (96px at 1280px+)
- Hover effects enabled (card lift, image zoom, border color)

### 5.4 Interactions

**Hover States:**
- Cards: -translate-y-1 (4px lift) + border-[#C8102E]
- Images: scale-105 (5% zoom)
- Filter buttons: scale-105 + border-[#C8102E]

**Click/Tap Behavior:**
- Filter buttons: Update selectedCategory state
- Cards: No click action (future: navigate to article detail)

**Animations/Transitions:**
- Scroll animation: 600ms opacity + transform fade-in
- Hover effects: 300ms duration
- Filter button transitions: 200ms duration

### 5.5 Accessibility

- **Keyboard Navigation:** All interactive elements (filter buttons) accessible via Tab
- **Screen Reader:** Semantic HTML (article, section, h1, h2)
- **Focus Management:** Visible focus rings (ring-2 ring-[#C8102E] ring-offset-2)
- **Alt Text:** All images have descriptive alt text
- **Reduced Motion:** Respects prefers-reduced-motion media query
- **Color Contrast:** All text meets WCAG 2.1 AA standards

---

## 6. Error Handling

| Error Scenario | User Message | Technical Handling |
|----------------|--------------|-------------------|
| No articles in data | "No news articles available at the moment. Check back soon for updates!" | Conditional render in NewsGrid |
| Image fails to load | (Placeholder shown) | NewsImagePlaceholder fallback component |
| Invalid date format | Fallback to ISO string | try/catch in formatDate function |

---

## 7. Performance Considerations

- **Loading Strategy:** Static content, no API calls needed
- **Caching:** Built-in Next.js static optimization
- **Bundle Size:** ~2KB for components (lucide-react icons already included)
- **Lazy Loading:** Next.js Image component handles lazy loading automatically
- **Optimization:** useMemo for filtered articles prevents unnecessary re-filtering

---

## 8. Security Considerations

- **Authentication:** Not required - public page
- **Authorization:** Not required - public content
- **Input Validation:** Not applicable - no user input except filter selection
- **Data Sanitization:** Mock data is pre-sanitized
- **XSS Protection:** React escapes all content by default

---

## 9. Testing Strategy

### 9.1 Unit Tests
- NewsCategoryBadge: Color mapping for all categories (5 tests)
- NewsCard: Card structure, image handling, date formatting (11 tests)
- NewsGrid: Grid layout, sorting, empty state (7 tests)
- CategoryFilter: Filter buttons, selection, keyboard nav (7 tests)
- Page: Hero section, metadata, filtering integration (11 tests)

### 9.2 Integration Tests
- End-to-end filtering: Click filter → articles update
- Scroll animation: Cards fade in on scroll
- Responsive behavior: Grid columns adjust at breakpoints

### 9.3 Manual Testing
- Visual verification at all breakpoints (320px, 768px, 1024px, 1440px)
- Hover effects on desktop
- Touch interactions on mobile/tablet
- Keyboard navigation through all interactive elements
- Screen reader testing with VoiceOver/NVDA

---

## 10. Dependencies

### 10.1 New Dependencies
None - all dependencies already in project:
- lucide-react (Newspaper icon)
- Next.js (Image, routing)
- Tailwind CSS (styling)

### 10.2 Feature Dependencies
- useScrollAnimation hook (already implemented)
- Design system tokens (established in DESIGN_SYSTEM.md)
- Navigation integration (already in Header/Footer)

---

## 11. Rollout Plan

- [x] Implementation complete
- [x] All tests passing (41/41)
- [x] Quality gates passed (prototype mode: 5 gates)
- [x] User testing approved
- [x] Documentation generated (this spec + features doc)
- [x] Design consistency verified
- [ ] Ready for commit (awaiting user instruction)

---

## 12. Open Questions

- [x] ~~Background color for news page~~ → Resolved: Use bg-gray-50 (matches Contact page)
- [x] ~~Headline styling consistency~~ → Resolved: Use xl:text-8xl (matches all pages)
- [ ] Individual article pages - when to implement? (Future phase)
- [ ] CMS integration timeline? (Production phase)

---

## Sign-off

| Role | Name | Date | Approved |
|------|------|------|----------|
| Product Owner | User | 2026-04-23 | [x] |
| Tech Lead | Alex Chen | 2026-04-23 | [x] |
| Quality Lead | Dr. Priya Patel | 2026-04-23 | [x] |
