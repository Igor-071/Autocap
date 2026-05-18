# Specification: Coming Soon Page

**Author:** Alex Chen (Tech Lead)
**Date:** 2026-05-18
**Status:** Approved

---

## 1. Overview

### 1.1 Summary
A standalone, full-screen Coming Soon page that replaces the entire website pre-launch. The page hides all existing site content (no Header, Footer, or navigation) and presents a clean branded holding page with the AutoCap logo, a "Coming Soon" message, and basic company contact information.

### 1.2 Goals
- Present a professional, branded placeholder for the entire website
- Hide all existing site content and navigation until launch
- Be easily togglable via a single environment variable (`NEXT_PUBLIC_COMING_SOON=true`)

### 1.3 Non-Goals
- Email signup / newsletter subscription
- Countdown timer
- Social media links
- Any interactive elements beyond basic display
- Backend / API integration

### 1.4 User Story
As a site visitor,
I want to see a professional Coming Soon page when visiting the AutoCap website,
So that I know the site is under development and can find basic company contact info.

---

## 2. Acceptance Criteria

### AC-001: Coming Soon page renders as full-screen standalone

GIVEN the `NEXT_PUBLIC_COMING_SOON` env variable is set to `"true"`
WHEN a visitor navigates to any route on the site
THEN the Coming Soon page is displayed as a full-screen page
  AND the site Header is NOT rendered
  AND the site Footer is NOT rendered
  AND the BackToTop button is NOT rendered
  AND the CookieConsent banner is NOT rendered

---

### AC-002: Page displays brand identity

GIVEN the Coming Soon page is active
WHEN the page loads
THEN the AutoCap logo is displayed prominently
  AND a "Coming Soon" heading is displayed
  AND a brief subtitle/tagline is displayed
  AND the company contact email is displayed

---

### AC-003: Page is responsive across breakpoints

GIVEN the Coming Soon page is active
WHEN viewed at 320px, 375px, 768px, 1024px, and 1440px widths
THEN the layout adapts gracefully with centered content
  AND the logo scales appropriately
  AND text remains readable at all sizes

---

### AC-004: Normal site renders when feature is disabled

GIVEN the `NEXT_PUBLIC_COMING_SOON` env variable is NOT set or set to `"false"`
WHEN a visitor navigates to any route on the site
THEN the normal site renders with Header, Footer, and all page content

---

### AC-005: Page uses brand colors and typography

GIVEN the Coming Soon page is active
WHEN the page loads
THEN the page uses the Inter font (project font)
  AND the page uses AutoCap brand colors (Nordic Black `#1C1C1E`, AutoCap Red `#C8102E`)
  AND the background is Nordic Black or a tasteful dark treatment
  AND text contrast meets WCAG AA standards

---

### AC-006: Page has correct metadata

GIVEN the Coming Soon page is active
WHEN a search engine or social platform crawls the page
THEN the page title is "AutoCap Group · Coming Soon"
  AND a relevant meta description is present

---

## 3. Traceability Matrix

| Criterion | Test File | Test Name | Status |
|-----------|-----------|-----------|--------|
| AC-001 | ComingSoon.test.tsx | renders as a full-screen page with min-h-screen | ✅ |
| AC-001 | ComingSoon.test.tsx | does not render Header, Footer, BackToTop, or CookieConsent | ✅ |
| AC-002 | ComingSoon.test.tsx | displays AutoCap logo with descriptive alt text | ✅ |
| AC-002 | ComingSoon.test.tsx | displays Coming Soon heading as h1 | ✅ |
| AC-002 | ComingSoon.test.tsx | displays a subtitle or tagline | ✅ |
| AC-002 | ComingSoon.test.tsx | displays contact email as a mailto link | ✅ |
| AC-003 | — | Manual responsive check at 320/375/768/1024/1440px | ⏳ |
| AC-004 | — | Verified via env var toggle (layout.tsx conditional) | ✅ |
| AC-005 | ComingSoon.test.tsx | has dark background using Nordic Black | ✅ |
| AC-005 | ComingSoon.test.tsx | displays decorative red accent line | ✅ |
| AC-005 | ComingSoon.test.tsx | uses white text for readability on dark background | ✅ |
| AC-006 | ComingSoon.test.tsx | exports metadata with correct title | ✅ |
| AC-006 | ComingSoon.test.tsx | exports metadata with a description | ✅ |

**Status:** ⏳ Pending | ✅ Passed | ❌ Failed

---

## 4. Technical Design

### 4.1 Components/Files to Create or Modify

| File | Action | Description |
|------|--------|-------------|
| `src/components/coming-soon/ComingSoon.tsx` | Create | Full-screen Coming Soon page component |
| `src/app/layout.tsx` | Modify | Conditionally render ComingSoon instead of normal layout |
| `.env.local` | Modify | Add `NEXT_PUBLIC_COMING_SOON=true` |
| `.env.example` | Create/Modify | Document the env variable |

### 4.2 Implementation Approach

The root layout (`layout.tsx`) will check the `NEXT_PUBLIC_COMING_SOON` env variable. When `"true"`, it renders the `ComingSoon` component directly instead of the Header/children/Footer layout. This ensures **every route** on the site shows the Coming Soon page with no way to bypass it.

```tsx
// layout.tsx - simplified logic
const isComingSoon = process.env.NEXT_PUBLIC_COMING_SOON === 'true'

if (isComingSoon) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <ComingSoon />
      </body>
    </html>
  )
}

// else render normal layout...
```

### 4.3 API Endpoints
None required.

### 4.4 State Management
None required. Pure static rendering controlled by env variable.

---

## 5. UI/UX Requirements

### 5.1 Layout
- Full viewport height (`min-h-screen`)
- Vertically and horizontally centered content
- Dark background (Nordic Black `#1C1C1E`)
- Content stack: Logo → Decorative line → "Coming Soon" heading → Subtitle → Contact email

### 5.2 Mobile Requirements (320px - 767px)
- Logo max-width: ~180px
- Heading: `text-3xl` / `text-4xl`
- Adequate padding: `px-6`

### 5.3 Tablet Requirements (768px - 1023px)
- Logo max-width: ~220px
- Heading: `text-4xl` / `text-5xl`

### 5.4 Desktop Requirements (1024px+)
- Logo max-width: ~260px
- Heading: `text-5xl` / `text-6xl`
- Generous whitespace

### 5.5 Interactions
- Contact email is a clickable `mailto:` link
- Subtle fade-in animation on page load (Framer Motion)

### 5.6 Accessibility
- Semantic HTML: `<main>`, `<h1>`, `<p>`, `<a>`
- Logo has descriptive `alt` text
- Color contrast: White text on dark background meets WCAG AA
- Page is fully keyboard navigable (email link focusable)

---

## 6. Error Handling

No error states — this is a static page with no user input.

---

## 7. Performance Considerations

- No JavaScript bundle beyond minimal Framer Motion animation
- Static rendering (no API calls, no dynamic data)
- Single image asset (logo)
- Very fast LCP and FCP

---

## 8. Security Considerations

- No user input to sanitize
- No API calls
- `mailto:` link uses hardcoded company email from constants

---

## 9. Testing Strategy

### 9.1 Unit Tests
- ComingSoon component renders logo, heading, subtitle, contact email
- Layout renders ComingSoon when env variable is `"true"`
- Layout renders normal site when env variable is `"false"` or unset

### 9.2 Manual Testing
- Verify appearance at all responsive breakpoints
- Verify all existing routes show Coming Soon when enabled
- Verify normal site works when disabled

---

## 10. Dependencies

### 10.1 New Dependencies
None. Uses existing Framer Motion and Tailwind.

### 10.2 Feature Dependencies
None.

---

## 11. Rollout Plan

- [ ] Implementation complete
- [ ] All tests passing
- [ ] Quality gates passed
- [ ] User testing approved
- [ ] Documentation generated
- [ ] Ready for commit

---

## 12. Open Questions

None.

---

## Test Plan

### Test Matrix

| # | AC | Level | File | Test Name | Fixtures/Notes |
|---|------|-------|------|-----------|----------------|
| T1 | AC-001 | Unit | `ComingSoon.test.tsx` | renders full-screen Coming Soon page | Mock env var |
| T2 | AC-001 | Unit | `ComingSoon.test.tsx` | does not render Header, Footer, BackToTop, or CookieConsent | Verify absence |
| T3 | AC-002 | Unit | `ComingSoon.test.tsx` | displays AutoCap logo with alt text | Check img element |
| T4 | AC-002 | Unit | `ComingSoon.test.tsx` | displays Coming Soon heading | Check h1 |
| T5 | AC-002 | Unit | `ComingSoon.test.tsx` | displays subtitle/tagline | Check paragraph |
| T6 | AC-002 | Unit | `ComingSoon.test.tsx` | displays contact email as mailto link | Check anchor href |
| T7 | AC-003 | Manual | — | Layout adapts at 320/375/768/1024/1440px | Visual check |
| T8 | AC-004 | Unit | `layout.test.tsx` | renders normal layout when env var is false | Mock env var to "false" |
| T9 | AC-004 | Unit | `layout.test.tsx` | renders normal layout when env var is unset | No env var |
| T10 | AC-005 | Unit | `ComingSoon.test.tsx` | uses brand colors (dark background, red accent) | Check classes |
| T11 | AC-006 | Unit | `ComingSoon.test.tsx` | page has correct metadata title and description | Check metadata export |

---

## Sign-off

| Role | Name | Date | Approved |
|------|------|------|----------|
| Product Owner | [User] | | [ ] |
| Tech Lead | Alex Chen | | [ ] |
| Quality Lead | Dr. Priya Patel | | [ ] |
