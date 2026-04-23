# Specification: Leadership & Board Page

**Author:** Alex Chen (Tech Lead)
**Date:** 2026-04-23
**Status:** Draft

---

## 1. Overview

### 1.1 Summary
The Leadership & Board page (`/about/team`) showcases AutoCap Group's management team and board members through professional profile cards. This page is critical for establishing credibility with investors, partners, and potential acquisition targets by highlighting the team's expertise in M&A, finance, operations, and the tire/automotive aftermarket industry.

### 1.2 Goals
- Establish credibility and trust with key stakeholders (investors, workshop owners, partners)
- Showcase team expertise across entrepreneurship, finance, M&A, and industry operations
- Provide professional bios that highlight relevant experience and credentials
- Enable easy access to LinkedIn profiles for professional networking
- Maintain consistent visual language with existing About section

### 1.3 Non-Goals
- Full organizational chart (focus on leadership/board only)
- Detailed work history/resumes (keep to 2-3 sentences per person)
- Team member contact forms (use general contact page)
- Social media links beyond LinkedIn
- Employee directory (leadership team only)

### 1.4 User Story
As a **potential investor, partner, or workshop owner**,
I want **to learn about AutoCap Group's leadership team and their backgrounds**,
So that **I can assess the team's credibility, expertise, and capability to execute the business strategy**.

---

## 2. Acceptance Criteria

### AC-001: Page Layout and Hero Section

GIVEN I am navigating to `/about/team`
WHEN the page loads
THEN I see a hero section with:
  AND page title "Leadership & Board"
  AND introductory text: "AutoCap Group is led by a team with deep experience in M&A, company building, automotive aftermarket, and operational execution. Our board brings additional expertise in investment, governance, and strategic growth."
  AND Dusk (#EDE4D8) background color

---

### AC-002: Profile Grid Display

GIVEN I am on the leadership & board page
WHEN I view the page content
THEN I see profile cards displayed in a grid layout
  AND the grid shows 2 columns on tablet/desktop (md:grid-cols-2)
  AND the grid shows 1 column on mobile
  AND the grid has consistent spacing and alignment

---

### AC-003: Profile Card Structure - Management Team

GIVEN I am viewing the leadership section
WHEN I view a management team member's card
THEN I see the following information:
  AND professional headshot photo (or placeholder if not available)
  AND full name
  AND title/role
  AND 2-3 sentence bio highlighting relevant experience
  AND education credentials
  AND LinkedIn link icon (if available)

---

### AC-004: David Knape - CEO & Co-Founder Profile

GIVEN I am viewing the leadership section
WHEN I see David Knape's profile card
THEN it displays:
  AND name: "David Knape"
  AND title: "CEO & Co-Founder"
  AND bio: "Serial entrepreneur with extensive experience in company building, finance, acquisition strategy, and brand development. Previously CEO of a Nasdaq First North-listed company. Has built and managed investments across e-commerce, FMCG, and technology. David leads AutoCap's overall strategy, capital structure, and stakeholder relationships."
  AND education: "B.Sc. Business Economics, M.Sc. Marketing"

---

### AC-005: Niklas Norén - CFO Profile

GIVEN I am viewing the leadership section
WHEN I see Niklas Norén's profile card
THEN it displays:
  AND name: "Niklas Norén"
  AND title: "CFO"
  AND bio: "Seasoned financial executive with two decades of experience as CFO and Group Controller across listed companies, PE-backed groups, and high-growth platforms. Track record includes building financial reporting infrastructure, preparing companies for PE exit (Adven/EQT), and coordinating M&A integration (Eltel Networks, Cybercom). Previous roles span IBM, Nobina, Eniro, and JNE Invest. Niklas leads AutoCap's financial operations, reporting, and banking relationships."
  AND education: "M.Sc. Business Economics (Civilekonom), Stockholm University. Graduate studies at HEC Lausanne."

---

### AC-006: Nicklas Knape - COO & Head of M&A Profile

GIVEN I am viewing the leadership section
WHEN I see Nicklas Knape's profile card
THEN it displays:
  AND name: "Nicklas Knape"
  AND title: "COO & Head of M&A"
  AND bio: "Over fifteen years in the Nordic tire and automotive aftermarket. Career spans Pirelli, Goodyear (managing key Nordic accounts), and Gundlach Automotive (European aftermarket responsibility for Volvo Cars, Polestar, Ford, and Nio). Nicklas leads AutoCap's acquisition pipeline, operational integration, and supplier relationships - combining deep industry knowledge with hands-on commercial execution."
  AND education: "B.Sc. Business Economics"

---

### AC-007: Gustav Berggren - Chairman Profile

GIVEN I am viewing the board section
WHEN I see Gustav Berggren's profile card
THEN it displays:
  AND name: "Gustav Berggren"
  AND title: "Chairman of the Board"
  AND bio: "Entrepreneur with a background in financing, property management, M&A, and real estate development across residential and commercial segments. Active investor and company builder with multiple board positions."
  AND education: "B.Sc. Business Economics"

---

### AC-008: Thomas Petrén - Board Member Profile

GIVEN I am viewing the board section
WHEN I see Thomas Petrén's profile card
THEN it displays:
  AND name: "Thomas Petrén"
  AND title: "Board Member & Partner"
  AND bio: "Owner and CEO of Seved Invest AB. Entrepreneurial background building and supporting multiple companies, including the publicly listed FMCG group Humble Group."
  AND education: (not specified in spec)

---

### AC-009: Mats Johansson - Partner & Board Advisor Profile

GIVEN I am viewing the board section
WHEN I see Mats Johansson's profile card
THEN it displays:
  AND name: "Mats Johansson"
  AND title: "Partner & Board Advisor"
  AND bio: "Entrepreneur and investor based in Falköping. Former Partner at PwC with specialist expertise in corporate structuring and tax. Extensive board experience and co-owner of companies across property, IT, and agriculture."
  AND education: (not specified in spec)

---

### AC-010: Photo Placeholder Handling

GIVEN a team member does not have a professional headshot available
WHEN their profile card is displayed
THEN I see a branded placeholder:
  AND AutoCap Red (#C8102E) circle background
  AND white initials of the person's name
  AND placeholder maintains same dimensions as photos
  AND never shows a generic avatar icon

---

### AC-011: LinkedIn Link Interaction

GIVEN a profile card has a LinkedIn link available
WHEN I click the LinkedIn icon
THEN the link opens in a new tab
  AND the link uses `target="_blank"`
  AND the link uses `rel="noopener noreferrer"` for security

---

### AC-012: Section Organization

GIVEN I am viewing the page
WHEN I scroll through the content
THEN I see profiles organized into clear sections:
  AND "Management Team" section header
  AND 3 management profiles (David, Niklas N., Nicklas K.)
  AND "Board of Directors" section header
  AND 3 board profiles (Gustav, Thomas, Mats)

---

### AC-013: Responsive Design - Mobile (320px - 767px)

GIVEN I am viewing the page on a mobile device
WHEN the viewport is between 320px and 767px wide
THEN profile cards display in a single column
  AND photos are appropriately sized (not too large)
  AND text remains readable
  AND padding is optimized (px-6)
  AND cards stack with consistent spacing

---

### AC-014: Responsive Design - Tablet/Desktop (768px+)

GIVEN I am viewing the page on a tablet or desktop
WHEN the viewport is 768px or wider
THEN profile cards display in a 2-column grid
  AND cards have equal height within rows
  AND spacing is generous (gap-8)
  AND content is centered with max-width constraint

---

### AC-015: Email Contact Information

GIVEN the spec states all team emails should use @autocapgroup.se
WHEN viewing the page
THEN no email addresses are directly displayed on profile cards
  AND users are directed to general contact page for inquiries
  AND spec note acknowledged for future email integration if needed

---

### AC-016: Accessibility - Keyboard Navigation

GIVEN I am navigating with keyboard only
WHEN I press Tab to navigate
THEN focus moves through LinkedIn links in logical order
  AND all interactive elements have visible focus indicators
  AND images have appropriate alt text with person's name and role

---

### AC-017: Accessibility - Screen Reader Support

GIVEN I am using a screen reader
WHEN navigating the page
THEN headings announce section structure (h1, h2)
  AND profile cards have semantic markup
  AND LinkedIn links announce as "LinkedIn profile for [Name]"
  AND education information is properly associated with each profile

---

### AC-018: Content Structure and Styling

GIVEN I am viewing any profile card
WHEN I examine the visual design
THEN the card has:
  AND white background with subtle shadow
  AND rounded corners for modern feel
  AND consistent padding (p-6 or p-8)
  AND photo at top (or placeholder)
  AND name in bold, larger text
  AND title in medium weight, AutoCap Red color
  AND bio in body text, gray color
  AND education in smaller, lighter text

---

## 3. Traceability Matrix

| Criterion | Test File | Test Name | Status |
|-----------|-----------|-----------|--------|
| AC-001 | src/app/about/team/page.test.tsx | renders hero section with correct title and description | ✅ |
| AC-002 | src/app/about/team/page.test.tsx | renders profile cards in a grid layout | ✅ |
| AC-003 | src/components/team/ProfileCard.test.tsx | renders all profile card elements when all data provided | ✅ |
| AC-004 | src/content/team.test.ts | has correct David Knape profile | ✅ |
| AC-005 | src/content/team.test.ts | has correct Niklas Norén profile | ✅ |
| AC-006 | src/content/team.test.ts | has correct Nicklas Knape profile | ✅ |
| AC-007 | src/content/team.test.ts | has correct Gustav Berggren profile | ✅ |
| AC-008 | src/content/team.test.ts | has correct Thomas Petrén profile | ✅ |
| AC-009 | src/content/team.test.ts | has correct Mats Johansson profile | ✅ |
| AC-010 | src/components/team/PhotoPlaceholder.test.tsx | renders branded placeholder with AutoCap Red background | ✅ |
| AC-011 | src/components/team/ProfileCard.test.tsx | opens LinkedIn link in new tab with security attributes | ✅ |
| AC-012 | src/app/about/team/page.test.tsx | organizes profiles into Management and Board sections | ✅ |
| AC-013 | src/app/about/team/page.test.tsx | renders mobile-friendly layout | ✅ |
| AC-014 | src/app/about/team/page.test.tsx | renders 2-column grid with appropriate spacing | ✅ |
| AC-015 | src/content/team.test.ts | does not include email addresses | ✅ |
| AC-016 | src/components/team/ProfileCard.test.tsx | allows keyboard focus on LinkedIn link | ✅ |
| AC-017 | src/components/team/ProfileCard.test.tsx | provides accessible labels for all elements | ✅ |
| AC-018 | | | ⏳ |

**Status:** ⏳ Pending | ✅ Passed | ❌ Failed

---

## 4. Technical Design

### 4.1 Components/Files to Create or Modify

| File | Action | Description |
|------|--------|-------------|
| `src/app/about/team/page.tsx` | Create | Main team page with metadata |
| `src/components/team/ProfileCard.tsx` | Create | Reusable profile card component |
| `src/components/team/PhotoPlaceholder.tsx` | Create | Branded placeholder for missing photos |
| `src/content/team.ts` | Create | Team member data and TypeScript interfaces |

### 4.2 Data Model

```typescript
// Team Member Profile
interface TeamMember {
  id: string
  name: string
  title: string
  bio: string
  education?: string
  photoUrl?: string // optional - use placeholder if not provided
  linkedInUrl?: string
  category: 'management' | 'board'
  order: number // for display ordering
}

// Team Page Content
interface TeamContent {
  hero: {
    title: string
    description: string
  }
  managementTeam: TeamMember[]
  board: TeamMember[]
}
```

### 4.3 API Endpoints (if applicable)

Not applicable for prototype mode. All content is static.

### 4.4 State Management

- **No state management needed:** Static content page
- **No forms:** Display-only page
- **Data source:** Static content file `src/content/team.ts`

---

## 5. UI/UX Requirements

### 5.1 Mobile Requirements (320px - 767px)

- Single column layout (1 card per row)
- Photo size: 120px x 120px circular
- Card padding: p-6
- Text size: name (text-xl), title (text-base), bio (text-sm)
- Stack spacing: gap-6

### 5.2 Tablet Requirements (768px - 1023px)

- 2-column grid (md:grid-cols-2)
- Photo size: 160px x 160px circular
- Card padding: p-8
- Grid gap: gap-8
- Maximum width: max-w-6xl

### 5.3 Desktop Requirements (1024px+)

- 2-column grid maintained
- Photo size: 160px x 160px circular
- Content centered
- Maximum width: max-w-6xl
- Generous spacing

### 5.4 Interactions

- **LinkedIn links:** Hover shows underline, blue color
- **Profile cards:** Subtle hover effect (shadow increase)
- **Photo placeholders:** Static (no hover effect)
- **Page load:** Smooth fade-in animation optional

### 5.5 Accessibility

- All images have descriptive alt text: "[Name], [Title]"
- Heading hierarchy: h1 (page title), h2 (section headers), h3 (names)
- LinkedIn links have aria-label: "LinkedIn profile for [Name]"
- Keyboard navigation: Tab order follows visual order
- Focus indicators: Visible on all interactive elements
- Color contrast: WCAG AA compliant (text on backgrounds)

---

## 6. Error Handling

| Error Scenario | User Message | Technical Handling |
|----------------|--------------|-------------------|
| Missing photo | N/A (show placeholder) | Render PhotoPlaceholder component with initials |
| No LinkedIn URL | N/A (hide icon) | Conditionally render LinkedIn link only if URL exists |
| Missing education | N/A (hide field) | Conditionally render education only if provided |

---

## 7. Performance Considerations

- Photos loaded with Next.js `<Image>` component for optimization
- Lazy loading for images below fold
- Static page - no API calls, fast initial load
- Minimal JavaScript - mostly static content
- Bundle size impact: Negligible (1-2 KB for components)

---

## 8. Security Considerations

- **External links:** LinkedIn links use `rel="noopener noreferrer"`
- **XSS prevention:** React automatically escapes content
- **No user input:** Static display page, no form data
- **Image sources:** All images served from trusted sources (local or verified CDN)

---

## 9. Testing Strategy

### 9.1 Unit Tests
- PhotoPlaceholder component generates correct initials
- ProfileCard renders all fields when provided
- ProfileCard hides optional fields when not provided
- LinkedIn link rendering conditional logic

### 9.2 Integration Tests
- Page renders all 6 team members correctly
- Management and board sections display separately
- Responsive grid layout at different breakpoints
- LinkedIn links open in new tab

### 9.3 Manual Testing
- Visual review of all profile cards
- Test on physical devices (iPhone, iPad, Android)
- Verify all breakpoints (320px, 768px, 1024px)
- Keyboard navigation test
- Screen reader test (VoiceOver/NVDA)

---

## 10. Dependencies

### 10.1 New Dependencies
None required. Using existing:
- Next.js (Image component, Link component)
- Tailwind CSS
- lucide-react (for LinkedIn icon)

### 10.2 Feature Dependencies
- Requires professional headshots for Gustav Berggren and Mats Johansson
- Can launch with placeholders per spec note
- Team member approval of bio content recommended

---

## 11. Rollout Plan

- [ ] Implementation complete
- [ ] All tests passing
- [ ] Quality gates passed (5 prototype gates)
- [ ] User testing approved
- [ ] Professional photos obtained (or placeholders approved)
- [ ] Bio content approved by team members
- [ ] Documentation generated
- [ ] Ready for commit

---

## 12. Open Questions

- [ ] Are professional headshots available for all 6 team members?
- [ ] Have team members reviewed and approved their bio text?
- [ ] Should we include email addresses on profile cards or direct to contact page?
- [ ] LinkedIn URLs for all team members available?

---

## 13. Test Plan

| AC | Level | File | Test Name | Fixtures | Edge Cases |
|----|-------|------|-----------|----------|------------|
| AC-001 | integration | `src/app/about/team/page.test.tsx` | `renders hero section with title and intro text` | team content mock | none |
| AC-002 | integration | `src/app/about/team/page.test.tsx` | `renders profile grid with responsive layout` | team content mock | none |
| AC-003 | integration | `src/components/team/ProfileCard.test.tsx` | `renders all profile card elements` | single team member | missing optional fields |
| AC-004 | unit | `src/content/team.test.ts` | `David Knape profile has correct data` | none | none |
| AC-005 | unit | `src/content/team.test.ts` | `Niklas Norén profile has correct data` | none | none |
| AC-006 | unit | `src/content/team.test.ts` | `Nicklas Knape profile has correct data` | none | none |
| AC-007 | unit | `src/content/team.test.ts` | `Gustav Berggren profile has correct data` | none | none |
| AC-008 | unit | `src/content/team.test.ts` | `Thomas Petrén profile has correct data` | none | none |
| AC-009 | unit | `src/content/team.test.ts` | `Mats Johansson profile has correct data` | none | none |
| AC-010 | integration | `src/components/team/PhotoPlaceholder.test.tsx` | `renders branded placeholder with initials` | name string | single name, multi-word names |
| AC-011 | integration | `src/components/team/ProfileCard.test.tsx` | `LinkedIn link opens in new tab with security attrs` | profile with LinkedIn | none |
| AC-012 | integration | `src/app/about/team/page.test.tsx` | `organizes profiles into management and board sections` | team content mock | none |
| AC-013 | integration | `src/app/about/team/page.test.tsx` | `displays mobile layout at 320px` | matchMedia mock (320px) | 767px viewport |
| AC-014 | integration | `src/app/about/team/page.test.tsx` | `displays 2-column grid at 768px+` | matchMedia mock (768px) | 1024px viewport |
| AC-015 | unit | `src/content/team.test.ts` | `validates no email addresses in content` | none | none |
| AC-016 | integration | `src/components/team/ProfileCard.test.tsx` | `supports keyboard navigation to LinkedIn link` | profile with LinkedIn | none |
| AC-017 | integration | `src/components/team/ProfileCard.test.tsx` | `provides screen reader accessible labels` | team member mock | none |
| AC-018 | integration | `src/components/team/ProfileCard.test.tsx` | `applies consistent card styling` | team member mock | none |

**Cross-cutting:**
- **Content validation:** `src/content/team.test.ts` - validates all 6 team member profiles have required fields (name, title, bio)
- **Photo placeholder logic:** `src/components/team/PhotoPlaceholder.test.tsx` - tests initial generation for various name formats
- **Component exports:** Ensure all new components export correctly

**Test Coverage Targets (Prototype Mode):**
- Unit tests: 8 (content validation, data structure)
- Integration tests: 10 (component behavior, page layout, accessibility)
- Total: 18 tests minimum (one per AC)

**Notes:**
- Responsive tests use `window.matchMedia` mocks
- Profile content tests validate exact text from spec
- Photo placeholder tests cover edge cases (initials from various name formats)
- No E2E tests needed for prototype mode (static display page)

---

## Sign-off

| Role | Name | Date | Approved |
|------|------|------|----------|
| Product Owner | User | | [ ] |
| Tech Lead | Alex Chen | 2026-04-23 | [x] |
| Quality Lead | Dr. Priya Patel | | [ ] |
