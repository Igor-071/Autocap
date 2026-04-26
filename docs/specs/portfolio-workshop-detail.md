# Specification: Portfolio - Workshop Detail Page

**Author:** Alex Chen (Tech Lead)
**Date:** 2026-04-26
**Status:** Implemented (Retrospective Spec)

---

## 1. Overview

### 1.1 Summary
Dynamic workshop detail page template that displays comprehensive information about individual AutoCap Group workshops, including location, acquisition year, description, and contact information.

### 1.2 Goals
- Provide detailed profile for each portfolio workshop
- Communicate local brand preservation (workshop name, website maintained)
- Showcase AutoCap Group integration benefits
- Drive workshop owner inquiries through CTA
- Optimize for local SEO

### 1.3 Non-Goals
- Does NOT include customer reviews or testimonials
- Does NOT show pricing or service lists
- Does NOT include booking/appointment functionality
- Does NOT display operational metrics or performance data

### 1.4 User Story
As a visitor researching AutoCap Group's portfolio,
I want to see detailed information about individual workshops,
So that I can understand their local identity, history, and integration with AutoCap Group.

---

## 2. Acceptance Criteria

### AC-001: Dynamic Route and Static Generation

GIVEN a valid workshop slug exists
WHEN I navigate to `/portfolio/[slug]`
THEN the page generates statically at build time
  AND the correct workshop information is displayed
  AND the page URL matches the workshop slug format (lowercase, hyphenated)

---

### AC-002: Breadcrumb Navigation

GIVEN I am viewing a workshop detail page
WHEN I look at the top of the page
THEN I see a breadcrumb: Home / Portfolio / [Workshop Name]
  AND each breadcrumb item is clickable (except current page)
  AND breadcrumb is displayed in grey background bar
  AND breadcrumb separator is "/"

---

### AC-003: Back to Portfolio Link

GIVEN I am viewing a workshop detail page
WHEN I look below the breadcrumb
THEN I see a "Back to Portfolio" link with left arrow icon
  AND it links to `/portfolio`
  AND it has red text (#C8102E)
  AND it has hover state (darker red)
  AND it appears before the main content

---

### AC-004: Workshop Profile Badge

GIVEN I am viewing a workshop detail page
WHEN the header section renders
THEN I see an icon badge displaying "Workshop Profile"
  AND the badge has a Building2 icon in red
  AND the badge has Linen White background (#F5F0EB)
  AND the badge is rounded-full with padding
  AND the badge appears above the workshop name

---

### AC-005: Workshop Name and Styling

GIVEN I am viewing a workshop detail page
WHEN the header renders
THEN I see the workshop name as the main heading
  AND the name uses 5xl → 6xl → 7xl (responsive) font size
  AND the name uses font-black weight
  AND the name is in Nordic Black color (#1C1C1E)
  AND a decorative red gradient line appears below (1px height, 24px width)

---

### AC-006: Location Display

GIVEN I am viewing a workshop detail page
WHEN I view the workshop metadata
THEN I see the location displayed as "[City], [Region]"
  AND the location has a MapPin icon in red
  AND the location text is xl size
  AND the location text is grey (text-gray-600)
  AND the location appears below the decorative line

---

### AC-007: Year Acquired Badge

GIVEN I am viewing a workshop detail page
WHEN I view the workshop metadata
THEN I see a badge displaying "Part of AutoCap Group since [YEAR]"
  AND the badge has a Calendar icon in red
  AND the badge has Linen White background (#F5F0EB)
  AND the badge is rounded-full with padding
  AND the badge uses font-semibold text
  AND the badge appears below the location

---

### AC-008: Workshop Description

GIVEN I am viewing a workshop detail page
WHEN I view the main content
THEN I see the workshop description paragraph
  AND the description uses xl text size
  AND the description has relaxed line-height (1.625)
  AND the description is in grey color (text-gray-700)
  AND the description contains workshop-specific narrative (not template text)

---

### AC-009: Standard Integration Text

GIVEN I am viewing a workshop detail page
WHEN I view the content below the description
THEN I see a gradient box with standard AutoCap Group integration text
  AND the text explains local brand preservation
  AND the text mentions shared procurement and support services
  AND the box has Linen White gradient background (#F5F0EB to #EDE8E3)
  AND the box is rounded-2xl with generous padding (p-10)
  AND the text uses lg size with relaxed leading

---

### AC-010: Workshop Website Link (Conditional)

GIVEN a workshop has a localWebsite URL in the data
WHEN I view the workshop detail page
THEN I see a "Visit workshop website" link
  AND the link has an ExternalLink icon
  AND the link opens in a new tab (target="_blank")
  AND the link has rel="noopener noreferrer" for security
  AND the link is red (#C8102E) with hover state
  AND the link uses font-semibold and lg text size

GIVEN a workshop does NOT have a localWebsite URL
WHEN I view the workshop detail page
THEN the website link section does NOT appear

---

### AC-011: Entrepreneur CTA Section

GIVEN I am viewing a workshop detail page
WHEN I scroll to the bottom
THEN I see a CTA section with Birch gradient background (#D8E4DC)
  AND I see the heading "Own a tire service workshop?"
  AND I see subtext: "Learn what joining AutoCap Group could mean for you."
  AND I see a CTA button "For Entrepreneurs" linking to `/entrepreneurs`
  AND the CTA has red gradient styling with hover scale effect
  AND the section has subtle dot pattern overlay
  AND the section is bordered above with grey line

---

### AC-012: SEO Metadata

GIVEN I am viewing a workshop detail page
WHEN the page loads
THEN the page has:
  - Title: "[Workshop Name] · AutoCap Group"
  - Meta description: workshop description text
  AND metadata is unique per workshop

---

### AC-013: 404 Handling for Invalid Slug

GIVEN I navigate to `/portfolio/invalid-workshop-slug`
WHEN the page attempts to load
THEN I see a 404 page
  AND the page returns 404 HTTP status
  AND I see a link to return to /portfolio

---

### AC-014: Responsive Design - Mobile

GIVEN I view a workshop page on mobile (320px-767px)
WHEN the page renders
THEN:
  - Workshop name scales down (text-5xl)
  - Content is full-width with padding (px-6)
  - All elements stack vertically
  - CTA button is full-width and touch-friendly
  - All text is readable without horizontal scrolling

---

### AC-015: Responsive Design - Desktop

GIVEN I view a workshop page on desktop (1024px+)
WHEN the page renders
THEN:
  - Content max-width: 5xl (1024px)
  - Content is centered
  - Typography uses larger sizes (title: text-7xl)
  - Adequate whitespace around elements
  - CTA section uses horizontal layout

---

## 3. Technical Specifications

### 3.1 Route
- Path: `/portfolio/[slug]`
- File: `src/app/portfolio/[slug]/page.tsx`
- Type: Dynamic route with static generation

### 3.2 Static Generation
```typescript
export async function generateStaticParams() {
  return workshops.map((workshop) => ({
    slug: workshop.slug,
  }))
}
```

### 3.3 Workshop Data Schema
```typescript
interface Workshop {
  id: number
  name: string
  slug: string // lowercase-hyphenated
  city: string
  region: string
  latitude: number
  longitude: number
  status: 'acquired' | 'pending' | 'target'
  yearAcquired: number
  localWebsite: string
  description: string
}
```

### 3.4 Helper Functions
```typescript
getWorkshopBySlug(slug: string): Workshop | undefined
getWorkshopsByRegion(region: string): Workshop[]
getWorkshopsByYear(year: number): Workshop[]
getTotalWorkshops(): number
getRegions(): string[]
```

### 3.5 SEO Metadata
```typescript
export async function generateMetadata({ params }: WorkshopDetailPageProps) {
  const { slug } = await params
  const workshop = getWorkshopBySlug(slug)

  if (!workshop) {
    return { title: 'Workshop Not Found' }
  }

  return {
    title: `${workshop.name} · AutoCap Group`,
    description: workshop.description,
  }
}
```

### 3.6 Icons Used
- `ArrowLeft` - Back to Portfolio link
- `Building2` - Workshop Profile badge
- `MapPin` - Location display
- `Calendar` - Year acquired badge
- `ExternalLink` - Workshop website link

---

## 4. Design Specifications

### 4.1 Colors
- **Background:** White
- **Breadcrumb Background:** Grey-50 (bg-gray-50)
- **Accent Color:** AutoCap Red (#C8102E)
- **Text Primary:** Nordic Black (#1C1C1E)
- **Text Secondary:** Grey-600 / Grey-700
- **Badge Background:** Linen White (#F5F0EB)
- **Integration Box:** Gradient from #F5F0EB to #EDE8E3
- **CTA Background:** Birch gradient (#D8E4DC to #C8D5CC)

### 4.2 Typography
- **Workshop Name:** 5xl → 6xl → 7xl (responsive), font-black
- **Description:** xl (20px), leading-relaxed (1.625)
- **Integration Text:** lg (18px), leading-relaxed
- **Location:** xl (20px)
- **Year Badge:** base (16px), font-semibold
- **CTA Heading:** 3xl → 4xl (responsive), font-black
- **CTA Text:** lg (18px)

### 4.3 Spacing
- **Page Padding:** py-16 → py-20 (responsive)
- **Content Max Width:** 5xl (1024px)
- **Section Margins:** mb-12, mb-16
- **Badge Padding:** px-4 py-2 (small), px-6 py-3 (large)
- **Integration Box Padding:** p-10

### 4.4 Visual Elements
- **Decorative Line:** 1px height, 24px (96px) width, red gradient
- **Badge:** Rounded-full, Linen White background
- **Integration Box:** Rounded-2xl, gradient background
- **CTA Section:** Rounded-2xl, dot pattern overlay (opacity 3%)

---

## 5. Content Rules

### 5.1 Standard Integration Text Template
```
[Workshop Name] operates independently under its own brand, serving its
local community as it always has. As part of AutoCap Group, the team
benefits from shared procurement, centralised support services, and access
to a growing network of workshops across Sweden.
```

### 5.2 Description Guidelines
- Workshop-specific narrative (not generic template)
- Mentions local area, specialization, or unique characteristics
- May mention year acquired or integration milestone
- Typically 2-3 sentences
- Factual, professional tone

---

## 6. Traceability Matrix

| Criterion | Test File | Test Name | Status |
|-----------|-----------|-----------|--------|
| AC-001 | TBD | Dynamic route generates correctly | ⏳ Pending |
| AC-002 | TBD | Breadcrumb navigation works | ⏳ Pending |
| AC-003 | TBD | Back to Portfolio link works | ⏳ Pending |
| AC-004 | TBD | Workshop profile badge displays | ⏳ Pending |
| AC-005 | TBD | Workshop name displays correctly | ⏳ Pending |
| AC-006 | TBD | Location displays with icon | ⏳ Pending |
| AC-007 | TBD | Year acquired badge displays | ⏳ Pending |
| AC-008 | TBD | Description renders correctly | ⏳ Pending |
| AC-009 | TBD | Integration text box renders | ⏳ Pending |
| AC-010 | TBD | Conditional website link works | ⏳ Pending |
| AC-011 | TBD | Entrepreneur CTA section renders | ⏳ Pending |
| AC-012 | TBD | SEO metadata correct | ⏳ Pending |
| AC-013 | TBD | 404 handling works | ⏳ Pending |
| AC-014-015 | TBD | Responsive design works | ⏳ Pending |

---

## 7. Dependencies

- Workshop data in `src/content/workshops.ts`
- Portfolio index page at `/portfolio`
- Entrepreneurs page at `/entrepreneurs`
- Custom 404 page for invalid workshop slugs
- Lucide React icons (ArrowLeft, Building2, MapPin, Calendar, ExternalLink)

---

## 8. Data Source

Workshop data is sourced from `docs/reference/data-map.csv` and structured in `src/content/workshops.ts`. Each workshop includes:
- Geolocation coordinates (for map integration)
- Acquisition year
- Local website URL
- Unique description

---

## 9. Revision History

| Date | Version | Changes | Author |
|------|---------|---------|--------|
| 2026-04-26 | 1.0 | Retrospective spec created | Alex Chen |
