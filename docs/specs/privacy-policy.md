# Specification: Privacy Policy Page

**Author:** Alex Chen (Tech Lead)
**Date:** 2026-04-26
**Status:** Implemented (Retrospective Spec)

---

## 1. Overview

### 1.1 Summary
Comprehensive privacy policy page explaining AutoCap Group's data collection, usage, and protection practices in compliance with GDPR (General Data Protection Regulation).

### 1.2 Goals
- Provide transparent information about data practices
- Meet GDPR legal requirements for Swedish/EU businesses
- Build trust with website visitors
- Explain user rights under GDPR
- Detail cookie usage and consent management
- Provide contact information for privacy inquiries

### 1.3 Non-Goals
- Does NOT include general terms and conditions (separate page)
- Does NOT include detailed technical security specifications
- Does NOT include third-party privacy policies (those are linked separately)
- Does NOT include data processing agreements for business partners

### 1.4 User Story
As a website visitor concerned about my privacy,
I want to understand how AutoCap Group collects, uses, and protects my personal data,
So that I can make informed decisions about sharing information and exercise my GDPR rights.

---

## 2. Acceptance Criteria

### AC-001: Page Route and Accessibility

GIVEN I navigate to the privacy policy
WHEN I access the page via `/privacy-policy`
THEN the page loads successfully
  AND the page is accessible from footer link "Privacy Policy"
  AND the page is accessible from cookie consent modal link

---

### AC-002: Hero Section - Title and Metadata

GIVEN I am viewing the privacy policy page
WHEN the hero section renders
THEN I see:
  - Page title: "Privacy Policy" (4xl → 5xl → 6xl responsive)
  - Last updated date (text-sm, grey)
  - Introductory description (lg → xl responsive)
  - Decorative red gradient line below content
  AND the hero uses grey background (bg-gray-50)
  AND content is centered with max-width 4xl

---

### AC-003: Structured Sections Display

GIVEN I am viewing the privacy policy page
WHEN the content area renders
THEN I see 10 structured sections in order:
  1. Introduction
  2. Data We Collect
  3. How We Use Your Data
  4. Legal Basis for Processing
  5. Your Rights
  6. Cookie Policy
  7. Data Retention
  8. Data Security
  9. Third-Party Services
  10. Changes to This Policy
  AND each section has a unique ID for anchor linking
  AND sections are separated with vertical spacing (space-y-12)

---

### AC-004: Section Formatting

GIVEN I am viewing a policy section
WHEN the section renders
THEN each section displays:
  - Section number and title (2xl → 3xl responsive, font-bold)
  - Multiple content paragraphs with spacing (space-y-4)
  - Bullet points rendered as bullet lists (where applicable)
  - Leading-relaxed line height for readability
  AND section title is Nordic Black (#1C1C1E)
  AND body text is grey (text-gray-700)

---

### AC-005: Placeholder Content Styling

GIVEN a section contains placeholder content (marked "LEGAL CONTENT PENDING")
WHEN that section renders
THEN placeholder paragraphs are styled in italic
  AND placeholder text is lighter grey (text-gray-600)
  AND this visual distinction indicates content pending legal review

---

### AC-006: Section Content - Introduction

GIVEN I am viewing the Introduction section
WHEN the section renders
THEN I see:
  - AutoCap Group identified as data controller
  - Commitment to privacy statement
  - Scope of the policy
  AND content explains GDPR compliance

---

### AC-007: Section Content - Data We Collect

GIVEN I am viewing the Data We Collect section
WHEN the section renders
THEN I see bullet list of data types:
  - Contact information (name, email, phone)
  - Business information (company, workshop details)
  - Website usage data (cookies, analytics)
  - Communication records (emails, forms)
  AND each type is clearly listed

---

### AC-008: Section Content - How We Use Your Data

GIVEN I am viewing the How We Use Your Data section
WHEN the section renders
THEN I see bullet list of purposes:
  - Responding to enquiries
  - Evaluating workshop acquisition opportunities
  - Communicating with investors
  - Improving website and UX
  - Complying with legal obligations

---

### AC-009: Section Content - Legal Basis for Processing

GIVEN I am viewing the Legal Basis for Processing section
WHEN the section renders
THEN I see GDPR Article 6 legal bases:
  - Consent (marketing, optional cookies)
  - Legitimate interests (business communications, analytics)
  - Contract performance (requested services)
  - Legal obligation (compliance)

---

### AC-010: Section Content - Your Rights

GIVEN I am viewing the Your Rights section
WHEN the section renders
THEN I see bullet list of GDPR rights:
  - Right to access
  - Right to rectification
  - Right to erasure ("right to be forgotten")
  - Right to restrict processing
  - Right to data portability
  - Right to object
  - Right to withdraw consent
  AND I see contact email for exercising rights

---

### AC-011: Section Content - Cookie Policy

GIVEN I am viewing the Cookie Policy section
WHEN the section renders
THEN I see:
  - Explanation of cookie usage
  - Cookie categories (Necessary, Analytics, Marketing)
  - Reference to cookie consent banner
  - Explanation that necessary cookies are always active

---

### AC-012: Contact Section

GIVEN I scroll to the bottom of the policy
WHEN the contact section renders
THEN I see:
  - Heading "Contact Us" (2xl → 3xl responsive)
  - Description text about privacy inquiries
  - Email link: kontakt@autocapgroup.se
  AND the email is clickable (mailto: link)
  AND the email has red color (#C8102E) with hover state
  AND the section has grey background (bg-gray-50)

---

### AC-013: Back to Top Link

GIVEN I am at the bottom of the privacy policy page
WHEN I view the footer area
THEN I see a "Back to top ↑" link
  AND clicking it scrolls to the top of the page (href="#")
  AND the link has grey text with red hover state
  AND the link is centered below the contact section

---

### AC-014: SEO Metadata

GIVEN I am viewing the privacy policy page
WHEN the page loads
THEN the page has:
  - Title: "Privacy Policy · AutoCap Group"
  - Meta description: "AutoCap Group privacy policy - how we collect, use, and protect your personal data in compliance with GDPR."
  AND metadata is appropriate for search engines

---

### AC-015: Anchor Link Navigation

GIVEN a section has an ID (e.g., "your-rights")
WHEN I navigate to `/privacy-policy#your-rights`
THEN the page scrolls to that specific section
  AND the section ID is unique and matches the section

---

### AC-016: Responsive Design - Mobile

GIVEN I view the privacy policy on mobile (320px-767px)
WHEN the page renders
THEN:
  - Title scales down (text-4xl)
  - Content is full-width with padding (px-6)
  - All text is readable without horizontal scrolling
  - Sections stack vertically with adequate spacing
  - Back to top link is easily tappable

---

### AC-017: Responsive Design - Desktop

GIVEN I view the privacy policy on desktop (1024px+)
WHEN the page renders
THEN:
  - Content max-width: 4xl (896px)
  - Content is centered
  - Typography uses larger sizes (title: text-6xl, section: text-3xl)
  - Adequate whitespace around content
  - Sections have comfortable reading width

---

### AC-018: Typography and Readability

GIVEN I am reading the privacy policy
WHEN I view the content
THEN:
  - Body text is comfortable to read (leading-relaxed)
  - Paragraphs have spacing between them (space-y-4)
  - Headings create clear visual hierarchy
  - Maximum line length optimized for readability
  - Bullet lists are properly indented and spaced

---

## 3. Technical Specifications

### 3.1 Route
- Path: `/privacy-policy`
- File: `src/app/privacy-policy/page.tsx`
- Type: Static page

### 3.2 Content Structure
```typescript
interface PrivacySection {
  id: string // for anchor links
  title: string // e.g., "1. Introduction"
  content: string[] // array of paragraphs
}

interface PrivacyPolicyContent {
  metadata: {
    title: string
    description: string
  }
  hero: {
    title: string
    lastUpdated: string
    description: string
  }
  sections: PrivacySection[] // 10 sections
  contact: {
    title: string
    description: string
    email: string
  }
}
```

### 3.3 Content Source
- File: `src/content/privacyPolicy.ts`
- Content is structured for easy updates by legal team
- Placeholder content marked as "LEGAL CONTENT PENDING"

### 3.4 SEO Metadata
```typescript
export const metadata: Metadata = {
  title: 'Privacy Policy · AutoCap Group',
  description: 'AutoCap Group privacy policy - how we collect, use, and protect your personal data in compliance with GDPR.',
}
```

---

## 4. Design Specifications

### 4.1 Colors
- **Hero Background:** Grey-50 (bg-gray-50)
- **Content Background:** White
- **Contact Background:** Grey-50 (bg-gray-50)
- **Text Primary:** Nordic Black (#1C1C1E)
- **Text Body:** Grey-700
- **Text Placeholder:** Grey-600 (italic)
- **Accent:** AutoCap Red (#C8102E)
- **Links:** Red (#C8102E) with darker hover (#A00D25)

### 4.2 Typography
- **Page Title:** 4xl → 5xl → 6xl (responsive), font-black
- **Section Titles:** 2xl → 3xl (responsive), font-bold
- **Last Updated:** sm (14px), grey-500
- **Hero Description:** lg → xl (responsive)
- **Body Text:** base (16px), leading-relaxed
- **Email Link:** lg (18px), font-semibold

### 4.3 Spacing
- **Hero Padding:** py-16 → py-20 (responsive)
- **Content Padding:** py-16 → py-20 (responsive)
- **Section Spacing:** space-y-12
- **Paragraph Spacing:** space-y-4
- **Content Max Width:** 4xl (896px)

### 4.4 Visual Elements
- **Decorative Line:** 1px height, 24px (96px) width, red gradient (from transparent via red to transparent)
- **Section IDs:** Lowercase with hyphens (e.g., "your-rights", "data-we-collect")

---

## 5. GDPR Compliance Requirements

### 5.1 Required Sections (GDPR Article 13/14)
- ✅ Data controller identification
- ✅ Types of data collected
- ✅ Purposes of processing
- ✅ Legal basis for processing
- ✅ Data retention periods
- ✅ User rights (access, erasure, portability, etc.)
- ✅ Right to lodge complaint with supervisory authority
- ✅ Cookie policy

### 5.2 Legal Review Status
**Note:** Current content is marked as placeholder ("LEGAL CONTENT PENDING"). Final legal content must be reviewed and approved by:
- Legal counsel specializing in GDPR
- AutoCap Group management
- Data Protection Officer (if appointed)

---

## 6. Traceability Matrix

| Criterion | Test File | Test Name | Status |
|-----------|-----------|-----------|--------|
| AC-001 | `privacy-policy/page.test.tsx` | Page loads correctly | ✅ Exists |
| AC-002 | `privacy-policy/page.test.tsx` | Hero section renders | ✅ Exists |
| AC-003 | TBD | All 10 sections display | ⏳ Pending |
| AC-004 | TBD | Section formatting correct | ⏳ Pending |
| AC-005 | TBD | Placeholder content italic | ⏳ Pending |
| AC-006-011 | TBD | Section content accurate | ⏳ Pending |
| AC-012 | TBD | Contact section renders | ⏳ Pending |
| AC-013 | TBD | Back to top link works | ⏳ Pending |
| AC-014 | TBD | SEO metadata correct | ⏳ Pending |
| AC-015 | TBD | Anchor links work | ⏳ Pending |
| AC-016-017 | TBD | Responsive design works | ⏳ Pending |
| AC-018 | TBD | Typography readable | ⏳ Pending |

---

## 7. Dependencies

- Cookie consent banner component (links to privacy policy)
- Footer component (links to privacy policy)
- Contact form GDPR checkboxes (link to privacy policy)
- Legal review and approval of final content

---

## 8. Content Update Process

### 8.1 When Content Updates Are Required
- GDPR regulation changes
- New data collection practices
- Changes to third-party services
- Changes to data retention policies
- User feedback or regulator feedback

### 8.2 Update Workflow
1. Legal team provides updated content
2. Update `src/content/privacyPolicy.ts`
3. Update "Last updated" date in hero section
4. Test all sections render correctly
5. Deploy to production
6. Notify affected users if required by GDPR

---

## 9. Accessibility Requirements

- All sections must have semantic HTML headings (h1, h2)
- Section IDs enable keyboard navigation via anchor links
- Email link must be keyboard accessible
- Color contrast must meet WCAG 2.1 AA standards
- Screen readers must properly announce section structure

---

## 10. Revision History

| Date | Version | Changes | Author |
|------|---------|---------|--------|
| 2026-04-26 | 1.0 | Retrospective spec created | Alex Chen |

---

## 11. Notes

**Legal Content Status:** The current implementation uses placeholder content marked as "LEGAL CONTENT PENDING". This structure is production-ready, but the actual legal content must be reviewed and approved by qualified legal counsel before the website goes live to ensure full GDPR compliance.

**Swedish Requirements:** As a Swedish company, AutoCap Group must comply with both GDPR and Swedish data protection law (Dataskyddslagen). The privacy policy should be reviewed for compliance with both.
