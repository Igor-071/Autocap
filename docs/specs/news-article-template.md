# Specification: News - Article Detail Page Template

**Author:** Alex Chen (Tech Lead)
**Date:** 2026-04-26
**Status:** Implemented (Retrospective Spec)

---

## 1. Overview

### 1.1 Summary
Dynamic article detail page template that renders individual news articles with rich content blocks, metadata, related articles, and comprehensive SEO optimization.

### 1.2 Goals
- Provide engaging, readable article layout
- Support rich content types (paragraphs, headings, images, quotes, lists, callouts)
- Optimize for SEO with structured data and Open Graph
- Enable content discovery through related articles
- Maintain consistent brand aesthetic

### 1.3 Non-Goals
- Does NOT include commenting system
- Does NOT include social sharing (beyond Open Graph)
- Does NOT include article bookmarking/saving
- Does NOT include newsletter signup within article

### 1.4 User Story
As a visitor interested in AutoCap's news and updates,
I want to read individual articles with rich formatting and context,
So that I can understand AutoCap's activities, insights, and media coverage in detail.

---

## 2. Acceptance Criteria

### AC-001: Dynamic Route and Static Generation

GIVEN the article slug is valid
WHEN I navigate to `/news/[slug]`
THEN the page generates statically at build time
  AND the correct article content is displayed
  AND the page URL matches the article slug

---

### AC-002: Breadcrumb Navigation

GIVEN I am viewing an article
WHEN I look at the top of the page
THEN I see a breadcrumb: Home / News & Media / [Article Title]
  AND each breadcrumb item is clickable
  AND the current article title is highlighted (not a link)
  AND breadcrumbs are displayed in a light grey background bar

---

### AC-003: Article Header - Metadata Display

GIVEN I am viewing an article
WHEN the article header renders
THEN I see the following metadata in order:
  - Category badge (color-coded by category)
  - Article title (5xl → 6xl → 7xl responsive)
  - Author name
  - Publish date (formatted as "Month DD, YYYY")
  - Read time estimate ("[N] min read")
  - Red decorative line (1px height, 24px width)
  AND metadata items are separated by bullet points (•)

---

### AC-004: Article Header - Styling

GIVEN I am viewing the article header
WHEN the page renders
THEN the header uses a Linen White gradient background (#F5F0EB to #EDE8E3)
  AND the title is font-black weight
  AND metadata text is grey (text-gray-600)
  AND the header has appropriate vertical padding (py-16)

---

### AC-005: Article Actions

GIVEN I am viewing an article
WHEN I scroll past the header
THEN I see action buttons:
  - "Back to News" (with left arrow icon, links to /news)
  - "Print" (with printer icon, triggers window.print())
  AND both buttons have hover states
  AND buttons are positioned before the article body

---

### AC-006: Rich Content - Paragraph Blocks

GIVEN an article contains paragraph blocks
WHEN the article body renders
THEN each paragraph displays with:
  - Text size: xl (20px)
  - Line height: relaxed (1.625)
  - Text color: Nordic Black (#1C1C1E)
  - Bottom margin: mb-6
  AND paragraphs render in sequence

---

### AC-007: Rich Content - Heading Blocks

GIVEN an article contains heading blocks (H2 or H3)
WHEN the article body renders
THEN headings display with:
  - H2: text-3xl, font-bold, mb-4, mt-12
  - H3: text-2xl, font-bold, mb-3, mt-8
  - Optional anchor ID for deep linking
  AND headings provide visual hierarchy

---

### AC-008: Rich Content - Image Blocks

GIVEN an article contains image blocks
WHEN the article body renders
THEN images display with:
  - Full-width within content container
  - Rounded corners (rounded-lg)
  - Optional caption below image (text-sm, italic, grey)
  - Optional photo credit (text-xs, grey)
  - Proper alt text for accessibility

---

### AC-009: Rich Content - Quote Blocks

GIVEN an article contains quote blocks
WHEN the article body renders
THEN quotes display with:
  - Large text size (2xl)
  - Font-bold weight
  - Left border accent (4px red gradient)
  - Light background (bg-gray-50)
  - Padding for visual separation
  - Optional attribution (name and role below quote)

---

### AC-010: Rich Content - List Blocks

GIVEN an article contains list blocks (bullet or numbered)
WHEN the article body renders
THEN lists display with:
  - Bullet lists: disc markers, indented
  - Numbered lists: decimal markers, indented
  - Text size: xl
  - Proper spacing between items (space-y-3)
  - Margin above and below list (my-6)

---

### AC-011: Rich Content - Callout Blocks

GIVEN an article contains callout blocks
WHEN the article body renders
THEN callouts display with:
  - Two variants: 'info' (blue) and 'highlight' (red)
  - Background color matching variant
  - Icon indicator (info icon or star icon)
  - Padding for visual prominence (p-6)
  - Rounded corners (rounded-xl)
  - Font-medium weight text

---

### AC-012: Related Articles Section

GIVEN I am viewing an article
WHEN I scroll to the bottom
THEN I see a "Related Articles" section
  AND it displays up to 3 related articles
  AND related articles are determined by:
    1. Manual curation (relatedArticleIds in content)
    2. Same category (if no manual curation)
  AND each related article shows: image, category badge, title, excerpt, read time
  AND clicking a related article navigates to that article

---

### AC-013: SEO - Metadata

GIVEN I am viewing an article
WHEN the page loads
THEN the page has:
  - Title: "[Article Title] · AutoCap Group"
  - Meta description: article excerpt
  - Open Graph title: article title
  - Open Graph description: article excerpt
  - Open Graph type: "article"
  - Open Graph published time: article publish date
  - Open Graph image: article image URL (if present)

---

### AC-014: SEO - JSON-LD Structured Data

GIVEN I am viewing an article
WHEN the page HTML is inspected
THEN I see JSON-LD script tag with:
  - @type: "Article"
  - headline: article title
  - description: article excerpt
  - image: article image URL
  - datePublished: article publish date
  - author: { @type: "Person", name: author name }
  - publisher: { @type: "Organization", name: "AutoCap Group", logo: logo URL }

---

### AC-015: 404 Handling - Invalid Slug

GIVEN I navigate to `/news/invalid-slug-that-does-not-exist`
WHEN the page attempts to load
THEN I am shown a custom 404 page
  AND the 404 page says "The article you're looking for doesn't exist or has been removed"
  AND I see a link to return to /news
  AND the page returns 404 HTTP status

---

### AC-016: Responsive Design - Mobile

GIVEN I view an article on mobile (320px-767px)
WHEN the page renders
THEN:
  - Article title scales down (text-5xl)
  - Content width is full-width with padding (px-4)
  - Images are full-width
  - Metadata stacks vertically if needed
  - Related articles display in single column
  AND all text is readable without horizontal scrolling

---

### AC-017: Responsive Design - Desktop

GIVEN I view an article on desktop (1024px+)
WHEN the page renders
THEN:
  - Article body max-width: 3xl (768px)
  - Article header max-width: 4xl (896px)
  - Content is centered
  - Related articles display in 3-column grid
  - Typography uses larger sizes (title: text-7xl)

---

### AC-018: Typography and Readability

GIVEN I am reading an article
WHEN I view the content
THEN:
  - Body text uses 20px (xl) size for comfortable reading
  - Line height is relaxed (1.625)
  - Paragraphs have sufficient spacing (mb-6)
  - Headings create clear visual hierarchy
  - Maximum line length is optimized for readability (~75 characters)

---

## 3. Technical Specifications

### 3.1 Route
- Path: `/news/[slug]`
- File: `src/app/news/[slug]/page.tsx`
- Type: Dynamic route with static generation

### 3.2 Static Generation
```typescript
export async function generateStaticParams() {
  return newsContent.articles.map((article) => ({
    slug: article.slug,
  }))
}
```

### 3.3 Article Content Schema
```typescript
interface NewsArticle {
  id: string
  title: string
  excerpt: string
  publishDate: string // ISO format "2026-04-15"
  author: string
  category: 'Company News' | 'Press Release' | 'Industry Insights' | 'Media Coverage'
  imageUrl?: string
  slug: string
  readTimeMinutes: number
  order: number
  fullContent?: ArticleContentBlock[]
  tags?: string[]
  relatedArticleIds?: string[]
}

type ArticleContentBlock =
  | { type: 'paragraph'; content: string }
  | { type: 'heading'; level: 2 | 3; content: string; id?: string }
  | { type: 'image'; src: string; alt: string; caption?: string; credit?: string }
  | { type: 'quote'; content: string; attribution?: string; role?: string }
  | { type: 'list'; style: 'bullet' | 'numbered'; items: string[] }
  | { type: 'callout'; variant: 'info' | 'highlight'; content: string }
```

### 3.4 Components
- `ArticleHeader` - Hero section with title and metadata
- `ArticleActions` - Back to news and print buttons
- `ArticleBody` - Rich content renderer (dispatches to content components)
- `ContentParagraph` - Paragraph block renderer
- `ContentHeading` - Heading block renderer (H2/H3)
- `ContentImage` - Image block renderer with caption
- `ContentQuote` - Quote block renderer with attribution
- `ContentList` - List block renderer (bullet/numbered)
- `ContentCallout` - Callout block renderer (info/highlight variants)
- `RelatedArticles` - Related articles grid
- `NewsCategoryBadge` - Category indicator badge

### 3.5 Helper Functions
```typescript
getArticleBySlug(slug: string): NewsArticle | undefined
getRelatedArticles(articleId: string, limit?: number): NewsArticle[]
```

### 3.6 SEO Metadata
```typescript
export async function generateMetadata({ params }: ArticleDetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    return { title: 'Article Not Found' }
  }

  return {
    title: `${article.title} · AutoCap Group`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.publishDate,
      images: article.imageUrl ? [article.imageUrl] : [],
    },
  }
}
```

---

## 4. Design Specifications

### 4.1 Colors
- **Header Background:** Gradient from Linen White (#F5F0EB) to (#EDE8E3)
- **Body Background:** White
- **Text:** Nordic Black (#1C1C1E)
- **Metadata:** Grey (text-gray-600)
- **Accent:** AutoCap Red (#C8102E)
- **Callout Info:** Blue background
- **Callout Highlight:** Red/pink background

### 4.2 Typography
- **Article Title:** 5xl → 6xl → 7xl (responsive), font-black
- **Body Text:** xl (20px), line-height relaxed (1.625)
- **H2:** 3xl, font-bold
- **H3:** 2xl, font-bold
- **Metadata:** base (16px)
- **Caption:** sm (14px), italic
- **Photo Credit:** xs (12px)

### 4.3 Spacing
- **Header Padding:** py-16
- **Article Body Padding:** py-12
- **Paragraph Margin:** mb-6
- **H2 Top Margin:** mt-12
- **H3 Top Margin:** mt-8
- **Content Max Width:** 3xl (768px)

### 4.4 Category Badge Colors
- **Company News:** Blue background
- **Press Release:** Green background
- **Industry Insights:** Purple background
- **Media Coverage:** Orange background

---

## 5. Traceability Matrix

| Criterion | Test File | Test Name | Status |
|-----------|-----------|-----------|--------|
| AC-001 | TBD | Dynamic route generates correctly | ⏳ Pending |
| AC-002 | TBD | Breadcrumb navigation works | ⏳ Pending |
| AC-003 | `ArticleHeader.test.tsx` | Displays all metadata correctly | ✅ Exists |
| AC-004 | `ArticleHeader.test.tsx` | Header styling correct | ✅ Exists |
| AC-005 | `ArticleActions.test.tsx` | Action buttons work | ✅ Exists |
| AC-006 | `ContentParagraph.test.tsx` | Paragraph blocks render | ✅ Exists |
| AC-007 | `ContentHeading.test.tsx` | Heading blocks render | ✅ Exists |
| AC-008 | `ContentImage.test.tsx` | Image blocks render | ✅ Exists |
| AC-009 | `ContentQuote.test.tsx` | Quote blocks render | ✅ Exists |
| AC-010 | `ContentList.test.tsx` | List blocks render | ✅ Exists |
| AC-011 | `ContentCallout.test.tsx` | Callout blocks render | ✅ Exists |
| AC-012 | `RelatedArticles.test.tsx` | Related articles display | ✅ Exists |
| AC-013 | TBD | SEO metadata correct | ⏳ Pending |
| AC-014 | TBD | JSON-LD structured data correct | ⏳ Pending |
| AC-015 | TBD | 404 handling works | ⏳ Pending |
| AC-016-017 | TBD | Responsive design works | ⏳ Pending |
| AC-018 | TBD | Typography readable | ⏳ Pending |

---

## 6. Dependencies

- Next.js dynamic routes and static generation
- Article content in `src/content/news.ts`
- Category badge component
- Content block components (6 types)
- Related articles algorithm
- Custom 404 page for news articles

---

## 7. Revision History

| Date | Version | Changes | Author |
|------|---------|---------|--------|
| 2026-04-26 | 1.0 | Retrospective spec created | Alex Chen |
