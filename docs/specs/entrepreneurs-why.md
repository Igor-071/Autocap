# Specification: Entrepreneurs - Why AutoCap Page

**Author:** Alex Chen (Tech Lead)
**Date:** 2026-04-26
**Status:** Implemented (Retrospective Spec)

---

## 1. Overview

### 1.1 Summary
The "Why AutoCap" page presents five key benefits that differentiate AutoCap from traditional acquisition firms and workshop chains. This page is critical for converting workshop owners who are considering selling their business.

### 1.2 Goals
- Clearly communicate AutoCap's unique value proposition to workshop owners
- Address common concerns about selling (losing brand, losing team, losing autonomy)
- Build trust through transparency and founder story
- Drive workshop owners to contact form

### 1.3 Non-Goals
- This page does NOT include pricing or valuation information
- Does NOT include specific acquisition case studies (those are in testimonials)
- Does NOT duplicate content from the acquisition process page

### 1.4 User Story
As a workshop owner considering selling my business,
I want to understand how AutoCap is different from chains and private equity firms,
So that I can make an informed decision about whether to engage with AutoCap.

---

## 2. Acceptance Criteria

### AC-001: Page Header and Navigation

GIVEN I am a user navigating from the entrepreneurs landing page
WHEN I click "Learn why workshop owners choose AutoCap"
THEN I am taken to `/entrepreneurs/why`
  AND I see a breadcrumb navigation showing Home → Entrepreneurs → Why AutoCap
  AND I see a page title "Why AutoCap"
  AND I see a badge indicating "5 Key Differences"
  AND I see an introductory paragraph explaining the page context

---

### AC-002: Five Key Benefits Display

GIVEN I am viewing the Why AutoCap page
WHEN the page loads
THEN I see 5 distinct benefit sections displayed sequentially
  AND each benefit has a numbered badge (1-5)
  AND each benefit has a descriptive icon
  AND each benefit has a clear title
  AND each benefit has 2-3 paragraphs of explanation
  AND the sections alternate between light cream and birch green backgrounds

---

### AC-003: Benefit 1 - Brand Preservation

GIVEN I am reading the benefits
WHEN I view Benefit 1
THEN I see the title "Your name stays on the door"
  AND I see an explanation that AutoCap preserves local workshop brands
  AND I see examples of workshops that kept their names
  AND I see a Store icon representing the benefit

---

### AC-004: Benefit 2 - Team Retention

GIVEN I am reading the benefits
WHEN I view Benefit 2
THEN I see the title "Your people stay"
  AND I see an explanation that existing teams remain in place
  AND I see messaging about preserving employee relationships
  AND I see a Users icon representing the benefit

---

### AC-005: Benefit 3 - Owner Reinvestment

GIVEN I am reading the benefits
WHEN I view Benefit 3
THEN I see the title "Stay and grow with us"
  AND I see an explanation that sellers can reinvest and remain operational
  AND I see messaging about co-ownership in the wider group
  AND I see a TrendingUp icon representing the benefit

---

### AC-006: Benefit 4 - Operational Support

GIVEN I am reading the benefits
WHEN I view Benefit 4
THEN I see the title "You gain what you couldn't build alone"
  AND I see an explanation of centralized procurement, HR, and administration
  AND I see messaging about peer network benefits
  AND I see a Building2 icon representing the benefit

---

### AC-007: Benefit 5 - Transparent Process

GIVEN I am reading the benefits
WHEN I view Benefit 5
THEN I see the title "Fair value. Clear process."
  AND I see an explanation of AutoCap's transparent valuation approach
  AND I see typical timeline information (8-12 weeks)
  AND I see a BadgeCheck icon representing the benefit

---

### AC-008: Closing Block - Founder Story

GIVEN I have read all five benefits
WHEN I scroll to the closing section
THEN I see a dark background section with the AutoCap red accent
  AND I see the title "We're entrepreneurs too"
  AND I see a paragraph about the Knape brothers' background
  AND I see messaging positioning AutoCap as partners, not a corporation

---

### AC-009: Call to Action

GIVEN I am at the closing section
WHEN I see the CTA button
THEN it displays "Ready to explore? Start a confidential conversation"
  AND it links to `/entrepreneurs/contact`
  AND it has red gradient styling with hover scale effect

---

### AC-010: Scroll Animations

GIVEN I am scrolling through the page
WHEN each benefit section enters the viewport
THEN it animates with a fade-in and slide-up effect (Framer Motion)
  AND the animation has a 0.7s duration
  AND the animation only triggers once per section

---

### AC-011: Responsive Design - Mobile

GIVEN I am viewing the page on a mobile device (320px-767px)
WHEN the page loads
THEN the benefit sections display in a single column
  AND the numbered badges and icons remain clearly visible
  AND text is readable without horizontal scrolling
  AND the CTA button is full-width and easily tappable

---

### AC-012: Responsive Design - Desktop

GIVEN I am viewing the page on a desktop device (1024px+)
WHEN the page loads
THEN each benefit section displays in a horizontal layout
  AND the numbered badge + icon is on the left
  AND the content text is on the right
  AND sections use full page width with appropriate padding

---

### AC-013: Color Consistency

GIVEN I am viewing the page
WHEN I observe the color scheme
THEN the header uses Birch gradient (#D8E4DC to #C8D5CC)
  AND benefit sections alternate between Linen White (#F5F0EB) and Birch (#D8E4DC)
  AND the closing block uses Nordic Black (#1C1C1E) with red accent
  AND all CTAs use AutoCap Red gradient (#C8102E to #A00D25)

---

## 3. Technical Specifications

### 3.1 Route
- Path: `/entrepreneurs/why`
- File: `src/app/entrepreneurs/why/page.tsx`

### 3.2 Content Source
- Content file: `src/content/entrepreneurs.ts`
- Benefits array: `entrepreneursContent.benefits` (5 items)
- Closing block: `entrepreneursContent.closingBlock`

### 3.3 Components
- `Breadcrumb` - Navigation breadcrumb
- `BenefitSection` - Individual benefit display with icon, number, and animation
- Uses Framer Motion for scroll animations
- Icons from Lucide React: Store, Users, TrendingUp, Building2, BadgeCheck

### 3.4 SEO Metadata
```typescript
{
  title: 'Why AutoCap · For Workshop Owners',
  description: 'Discover what makes AutoCap different from selling to a chain.'
}
```

---

## 4. Design Specifications

### 4.1 Typography
- Page title: 5xl → 6xl → 7xl (responsive), font-black
- Benefit titles: 3xl → 4xl → 5xl (responsive), font-bold
- Body text: xl → 2xl (responsive)

### 4.2 Spacing
- Section padding: py-20 → py-28 (responsive)
- Maximum content width: 5xl (1280px)

### 4.3 Visual Elements
- Numbered badges: 24x24 (mobile) → 28x28 (desktop), red gradient
- Icon badges: 14x14 (56px), white background, positioned bottom-right of number
- Decorative line: 1px height, 24px (96px) width, red gradient

---

## 5. Traceability Matrix

| Criterion | Test File | Test Name | Status |
|-----------|-----------|-----------|--------|
| AC-001 | TBD | Page loads and displays header correctly | ⏳ Pending |
| AC-002 | TBD | Displays 5 benefit sections | ⏳ Pending |
| AC-003-007 | TBD | Each benefit displays correct content | ⏳ Pending |
| AC-008 | TBD | Closing block displays founder story | ⏳ Pending |
| AC-009 | TBD | CTA links to contact page | ⏳ Pending |
| AC-010 | TBD | Scroll animations trigger correctly | ⏳ Pending |
| AC-011-012 | TBD | Responsive design works correctly | ⏳ Pending |
| AC-013 | TBD | Color scheme matches brand guidelines | ⏳ Pending |

---

## 6. Dependencies

- Entrepreneurs landing page (`/entrepreneurs`) must link to this page
- Entrepreneurs contact page (`/entrepreneurs/contact`) must exist for CTA
- Content file `entrepreneurs.ts` must contain 5 benefits
- Breadcrumb component must be implemented
- BenefitSection component must be implemented

---

## 7. Open Questions

None - feature is implemented.

---

## 8. Revision History

| Date | Version | Changes | Author |
|------|---------|---------|--------|
| 2026-04-26 | 1.0 | Retrospective spec created for implemented feature | Alex Chen |
