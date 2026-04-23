# Specification: Investors Section

**Author:** Alex Chen (Tech Lead)
**Date:** 2026-04-22
**Status:** Draft

---

## 1. Overview

### 1.1 Summary

The Investors section is **AutoCap's key investor relations page** - designed to attract potential investors (institutional, family offices, high-net-worth individuals) interested in the consolidation play in Sweden's tire services market. This section presents the investment thesis, market opportunity, growth strategy, and provides a contact form for investor enquiries.

**Design Standard:** Professional, data-driven tone with Fjord (#C9D8E8) as primary background color. Premium design matching site quality with financial credibility.

### 1.2 Goals

- Convert potential investors from awareness to enquiry
- Communicate AutoCap's investment thesis and market opportunity
- Build credibility through metrics and growth story
- Capture qualified investor leads via contact form
- Differentiate from typical consolidation plays

### 1.3 Non-Goals

- Detailed financial statements (investor portal)
- Live share price or cap table
- Legal investment documents
- Workshop-level operational details

### 1.4 User Story

**As a potential investor (institutional or individual),**
I want to understand AutoCap's investment opportunity and growth strategy,
So that I can decide if I want to have a conversation about investing.

---

## 2. Acceptance Criteria

### AC-001: Investors Landing Page

**GIVEN** a user navigates to `/investors`
**WHEN** the page loads
**THEN** they see:
  - Headline: "A platform built for returns"
  - Subheadline: "AutoCap Group is consolidating Sweden's fragmented tire services market - preserving local brands while building operational scale. A proven playbook in an overlooked sector."
  - CTA button: "View the investment case →" linking to `/investors/why`
  - Fjord background (#C9D8E8)
  - Professional, credible design

---

### AC-002: Investment Case Page - 4 Pillars

**GIVEN** a user navigates to `/investors/why`
**WHEN** the page loads
**THEN** they see:
  - Page title: "The Investment Case"
  - Introduction paragraph
  - 4 investment pillars displayed prominently:
    1. Fragmented market, consolidation opportunity
    2. Resilient, recurring revenue business
    3. Roll-up playbook with proven economics
    4. Founder-led execution
  - Each pillar has heading + detailed description
  - Closing block: "Built for the long term" with growth vision
  - CTA: "Interested in learning more? → Contact our investor relations team" linking to `/investors/contact`

---

### AC-003: Investment Pillar Sections Display

**GIVEN** a user views the Investment Case page
**WHEN** they scroll through pillars
**THEN** each pillar:
  - Has a clear heading (h3)
  - Contains the full description
  - Uses Fjord background or Linen White alternating
  - Has proper spacing and readability
  - Includes scroll-triggered reveal animation
  - Has relevant icon (TrendingUp, DollarSign, Target, Users)

---

### AC-004: Key Metrics Page

**GIVEN** a user navigates to `/investors/metrics`
**WHEN** the page loads
**THEN** they see:
  - Page title: "Growth Metrics"
  - Introduction: "Our track record since founding"
  - Key metrics displayed:
    - 12 workshops acquired
    - ~50 employees
    - ~200 MSEK revenue run-rate
    - 50+ workshop target by 2028
    - Geographic coverage (Stockholm, Västra Götaland)
  - Each metric with icon and visual emphasis
  - Growth timeline/roadmap
  - CTA: "Ready to discuss the opportunity? → Contact us" linking to `/investors/contact`

---

### AC-005: Metrics Visualization

**GIVEN** a user views the metrics page
**WHEN** they see the metrics
**THEN** the metrics:
  - Display with large, bold numbers
  - Have relevant icons (Building2, Users, TrendingUp, Target, MapPin)
  - Use Fjord accent color for emphasis
  - Include brief descriptive labels
  - Animate on scroll into view

---

### AC-006: Investor Contact Form

**GIVEN** a user navigates to `/investors/contact`
**WHEN** the page loads
**THEN** they see:
  - Page title: "Investor Relations"
  - Subtext: "Interested in the AutoCap opportunity? We'd like to hear from you. All enquiries are treated confidentially."
  - Contact form with fields:
    - Name (required)
    - Organization/Fund (required)
    - Role/Title (required)
    - Email (required)
    - Phone (required)
    - Investment focus/interest (optional textarea)
    - GDPR consent checkbox (required)
  - Fjord background (#C9D8E8)
  - Submit button in AutoCap Red

---

### AC-007: Form Validation

**GIVEN** a user submits the investor contact form
**WHEN** they have missing required fields
**THEN** the form:
  - Shows validation errors below each field
  - Highlights invalid fields
  - Prevents submission
  - Shows helpful error messages
  - Does not lose entered data

---

### AC-008: Form Submission (Mock)

**GIVEN** a user fills out the form correctly
**WHEN** they submit
**THEN** the form:
  - Shows loading state on submit button
  - Displays success message: "Thank you for your interest. A member of our investor relations team will be in touch within two business days. All enquiries are treated confidentially."
  - Clears the form (or shows on separate success page)
  - In prototype: logs data to console (no real email sent)
  - In production: sends to investor relations email

---

### AC-009: Responsive Layout - Mobile

**GIVEN** a user views investors pages on mobile (320-767px)
**WHEN** they navigate through sections
**THEN** all content:
  - Displays in single column
  - Pillars stack vertically
  - Metrics stack vertically
  - Form is full-width with proper spacing
  - Touch targets are minimum 44px
  - Text remains readable

---

### AC-010: Responsive Layout - Desktop

**GIVEN** a user views investors pages on desktop (1024px+)
**WHEN** they navigate through sections
**THEN** content:
  - Uses appropriate max-width (1200px)
  - Pillars display in readable format
  - Metrics display in grid (2x2 or horizontal)
  - Form has comfortable width (not too wide)
  - Proper whitespace and padding

---

### AC-011: Navigation Integration

**GIVEN** a user is anywhere on the site
**WHEN** they click "Investors" in the header
**THEN** they navigate to `/investors`
  AND the header shows "Investors" as active

**WHEN** they click any audience card "For Investors"
**THEN** they navigate to `/investors`

---

### AC-012: Breadcrumb Navigation

**GIVEN** a user is on any investors subpage
**WHEN** they view the page
**THEN** they see breadcrumbs:
  - `/investors/why` → "Home / Investors / The Investment Case"
  - `/investors/metrics` → "Home / Investors / Growth Metrics"
  - `/investors/contact` → "Home / Investors / Investor Relations"
  - Breadcrumbs are clickable
  - Current page is not a link

---

### AC-013: Cross-linking Between Pages

**GIVEN** a user is on any investors page
**WHEN** they want to navigate within the section
**THEN** they can:
  - From landing → go to "Why" or "Metrics" or "Contact"
  - From "Why" → go to "Contact" (CTA at bottom)
  - From "Metrics" → go to "Contact" (CTA at bottom)
  - Clear CTAs guide the journey

---

### AC-014: Animations and Transitions

**GIVEN** a user scrolls through investors pages
**WHEN** content comes into view
**THEN** they see:
  - Smooth fade-in animations
  - Staggered reveals for lists/metrics
  - Hover effects on CTAs
  - Respects `prefers-reduced-motion`
  - No janky or abrupt transitions

---

### AC-015: SEO and Metadata

**GIVEN** investors pages are deployed
**WHEN** search engines or social media crawl them
**THEN** each page has:
  - Proper title tag
  - Meta description
  - Open Graph tags (future)
  - Semantic HTML structure

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

---

## 4. Technical Design

### 4.1 Components/Files to Create

| File | Action | Description |
|------|--------|-------------|
| `src/app/investors/page.tsx` | Create | Landing page |
| `src/app/investors/why/page.tsx` | Create | Investment case (4 pillars) |
| `src/app/investors/metrics/page.tsx` | Create | Growth metrics |
| `src/app/investors/contact/page.tsx` | Create | Investor contact form |
| `src/components/investors/InvestmentPillar.tsx` | Create | Pillar display component |
| `src/components/investors/MetricCard.tsx` | Create | Metric display component |
| `src/components/investors/InvestorContactForm.tsx` | Create | Contact form with validation |
| `src/content/investors.ts` | Create | Content data |
| `src/lib/validation/investorForm.ts` | Create | Zod validation schema |

### 4.2 Data Model

```typescript
// Investors content
interface InvestorsContent {
  landing: {
    headline: string
    subheadline: string
    ctaText: string
  }
  pillars: Array<{
    id: number
    title: string
    description: string
  }>
  closingBlock: {
    title: string
    description: string
  }
  metrics: {
    intro: string
    kpis: Array<{
      value: number
      label: string
      prefix?: string
      suffix?: string
      icon: string
    }>
    roadmap: string
  }
  contact: {
    title: string
    subtext: string
    successMessage: string
  }
}

// Contact form
interface InvestorEnquiry {
  name: string
  organization: string
  role: string
  email: string
  phone: string
  message?: string
  gdprConsent: boolean
}
```

### 4.3 Form Handling (Prototype)

**Mock Implementation:**
- Form uses React Hook Form + Zod validation
- On submit: log data to console
- Show success message
- No actual email sent (prototype mode)

**Production Ready:**
- Form action endpoint: `/api/investors/contact`
- Email to: investor relations team
- Store in CRM/database
- Send confirmation email to user

---

## 5. UI/UX Requirements

### 5.1 Design Tokens

**Primary Color:** Fjord (#C9D8E8) - used throughout
**Accents:** AutoCap Red (#C8102E) for CTAs and emphasis
**Alternating:** Linen White (#F5F0EB) for pillar sections

### 5.2 Tone and Voice

- **Professional, not stuffy** - "Built for the long term"
- **Data-driven, not dry** - Metrics with context
- **Confident, not arrogant** - "Proven playbook"
- **Clear, not complex** - Simple investment thesis

### 5.3 Mobile Requirements

- Single column layouts
- Metrics/pillars stack vertically
- Form full-width with proper spacing
- Touch-friendly inputs (44px min)

### 5.4 Desktop Requirements

- Max-width containers (1200px)
- Pillars in readable format
- Metrics in 2x2 grid or horizontal
- Form centered, comfortable width (600-700px max)

---

## 6. Content Structure

### 6.1 Investment Pillars (4)

1. **Fragmented market, consolidation opportunity**
   - Sweden has ~500 independent tire workshops
   - Top players have <5% market share
   - Classic roll-up thesis: acquire local leaders, add value through scale

2. **Resilient, recurring revenue business**
   - Tire services are non-discretionary (safety critical)
   - Recurring seasonal demand (winter/summer tire changes)
   - Stable cash flows, predictable business

3. **Roll-up playbook with proven economics**
   - Acquire profitable workshops at reasonable multiples
   - Improve margins through shared procurement and back-office
   - Retain local brands and teams (preserves customer relationships)

4. **Founder-led execution**
   - Operators, not financial engineers
   - Deep industry experience
   - Aligned incentives with long-term value creation

### 6.2 Key Metrics

- 12 workshops acquired
- ~50 employees across Sweden
- ~200 MSEK revenue run-rate
- Target: 50+ workshops by 2028
- Geographic footprint: Stockholm, Västra Götaland (expanding)

---

## 7. Dependencies

### 7.1 Existing Dependencies

- React Hook Form (already installed)
- Zod (already installed)
- Framer Motion (already installed)
- Lucide icons (already installed)

### 7.2 New Dependencies

None - all requirements met with existing stack

---

## 8. SEO Metadata

| Page | Title | Description |
|------|-------|-------------|
| /investors | For Investors · AutoCap Group | Consolidating Sweden's fragmented tire services market. Proven playbook, resilient business model, founder-led execution. |
| /investors/why | Investment Case · AutoCap Group | Discover the AutoCap investment opportunity: market consolidation, recurring revenue, and operational scale. |
| /investors/metrics | Growth Metrics · AutoCap Group | Track AutoCap's growth from founding to 12 workshops and beyond. |
| /investors/contact | Investor Relations · AutoCap Group | Interested in the AutoCap opportunity? Contact our investor relations team. |

---

## 9. Open Questions

- [ ] What specific financial metrics can we disclose publicly?
- [ ] Do we have investor deck/materials to reference?
- [ ] Should we include team bios/photos on this section?
- [ ] Any regulatory/compliance requirements for investor communications?

---

## 10. Test Plan

**Quality Lead:** Dr. Priya Patel
**Test Strategy:** TDD (Red-Green-Blue) for each acceptance criterion
**Total Tests:** 72 tests across Unit, Integration, and E2E levels

### 10.1 Test Matrix

| AC | Test Level | Test File | Test Name | Fixtures/Data | Edge Cases |
|---|---|---|---|---|---|
| **AC-001: Investors Landing Page** |
| AC-001 | Unit | `src/app/investors/page.test.tsx` | should render headline text | investors.landing | None |
| AC-001 | Unit | `src/app/investors/page.test.tsx` | should render subheadline text | investors.landing | None |
| AC-001 | Unit | `src/app/investors/page.test.tsx` | should render CTA button with correct text | investors.landing | None |
| AC-001 | Unit | `src/app/investors/page.test.tsx` | should link CTA to /investors/why | investors.landing | None |
| AC-001 | Unit | `src/app/investors/page.test.tsx` | should have Fjord background color | investors.landing | None |
| AC-001 | E2E | `e2e/investors.spec.ts` | should display landing page correctly at all viewports | None | 320px, 375px, 768px, 1024px, 1440px |
| **AC-002: Investment Case Page - 4 Pillars** |
| AC-002 | Unit | `src/app/investors/why/page.test.tsx` | should render page title | investors content | None |
| AC-002 | Unit | `src/app/investors/why/page.test.tsx` | should render introduction paragraph | investors content | None |
| AC-002 | Unit | `src/app/investors/why/page.test.tsx` | should render all 4 pillars | investors.pillars | Array length validation |
| AC-002 | Unit | `src/app/investors/why/page.test.tsx` | should render each pillar with title and description | investors.pillars | Empty/missing data |
| AC-002 | Unit | `src/app/investors/why/page.test.tsx` | should render closing block | investors.closingBlock | None |
| AC-002 | Unit | `src/app/investors/why/page.test.tsx` | should render CTA linking to /investors/contact | investors content | None |
| **AC-003: Investment Pillar Sections Display** |
| AC-003 | Unit | `src/components/investors/InvestmentPillar.test.tsx` | should render pillar heading as h3 | Mock pillar data | None |
| AC-003 | Unit | `src/components/investors/InvestmentPillar.test.tsx` | should render full description text | Mock pillar data | Long text overflow |
| AC-003 | Unit | `src/components/investors/InvestmentPillar.test.tsx` | should render correct icon for pillar 1 (TrendingUp) | Mock pillar data | None |
| AC-003 | Unit | `src/components/investors/InvestmentPillar.test.tsx` | should render correct icon for pillar 2 (DollarSign) | Mock pillar data | None |
| AC-003 | Unit | `src/components/investors/InvestmentPillar.test.tsx` | should render correct icon for pillar 3 (Target) | Mock pillar data | None |
| AC-003 | Unit | `src/components/investors/InvestmentPillar.test.tsx` | should render correct icon for pillar 4 (Users) | Mock pillar data | None |
| AC-003 | Unit | `src/components/investors/InvestmentPillar.test.tsx` | should alternate background colors (Fjord/Linen) | Mock pillars array | Index 0,1,2,3 color checks |
| AC-003 | E2E | `e2e/investors.spec.ts` | should show scroll-triggered reveal animations | None | None |
| **AC-004: Key Metrics Page** |
| AC-004 | Unit | `src/app/investors/metrics/page.test.tsx` | should render page title | investors.metrics | None |
| AC-004 | Unit | `src/app/investors/metrics/page.test.tsx` | should render intro text | investors.metrics | None |
| AC-004 | Unit | `src/app/investors/metrics/page.test.tsx` | should render 12 workshops metric | investors.metrics.kpis | None |
| AC-004 | Unit | `src/app/investors/metrics/page.test.tsx` | should render ~50 employees metric | investors.metrics.kpis | None |
| AC-004 | Unit | `src/app/investors/metrics/page.test.tsx` | should render ~200 MSEK revenue metric | investors.metrics.kpis | None |
| AC-004 | Unit | `src/app/investors/metrics/page.test.tsx` | should render 50+ workshop target metric | investors.metrics.kpis | None |
| AC-004 | Unit | `src/app/investors/metrics/page.test.tsx` | should render geographic coverage metric | investors.metrics.kpis | None |
| AC-004 | Unit | `src/app/investors/metrics/page.test.tsx` | should render growth timeline/roadmap | investors.metrics | None |
| AC-004 | Unit | `src/app/investors/metrics/page.test.tsx` | should render CTA linking to /investors/contact | investors.metrics | None |
| **AC-005: Metrics Visualization** |
| AC-005 | Unit | `src/components/investors/MetricCard.test.tsx` | should display metric value as large bold number | Mock metric data | Numbers: 12, 50, 200, 50+ |
| AC-005 | Unit | `src/components/investors/MetricCard.test.tsx` | should render Building2 icon | Mock metric | None |
| AC-005 | Unit | `src/components/investors/MetricCard.test.tsx` | should render Users icon | Mock metric | None |
| AC-005 | Unit | `src/components/investors/MetricCard.test.tsx` | should render TrendingUp icon | Mock metric | None |
| AC-005 | Unit | `src/components/investors/MetricCard.test.tsx` | should render Target icon | Mock metric | None |
| AC-005 | Unit | `src/components/investors/MetricCard.test.tsx` | should render MapPin icon | Mock metric | None |
| AC-005 | Unit | `src/components/investors/MetricCard.test.tsx` | should use Fjord accent color | Mock metric | None |
| AC-005 | Unit | `src/components/investors/MetricCard.test.tsx` | should include descriptive label | Mock metric | None |
| AC-005 | E2E | `e2e/investors.spec.ts` | should animate metrics on scroll into view | None | None |
| **AC-006: Investor Contact Form** |
| AC-006 | Unit | `src/app/investors/contact/page.test.tsx` | should render page title | investors.contact | None |
| AC-006 | Unit | `src/app/investors/contact/page.test.tsx` | should render subtext | investors.contact | None |
| AC-006 | Unit | `src/components/investors/InvestorContactForm.test.tsx` | should render name input field | None | None |
| AC-006 | Unit | `src/components/investors/InvestorContactForm.test.tsx` | should render organization field | None | None |
| AC-006 | Unit | `src/components/investors/InvestorContactForm.test.tsx` | should render role/title field | None | None |
| AC-006 | Unit | `src/components/investors/InvestorContactForm.test.tsx` | should render email field | None | None |
| AC-006 | Unit | `src/components/investors/InvestorContactForm.test.tsx` | should render phone field | None | None |
| AC-006 | Unit | `src/components/investors/InvestorContactForm.test.tsx` | should render investment focus textarea | None | None |
| AC-006 | Unit | `src/components/investors/InvestorContactForm.test.tsx` | should render GDPR consent checkbox | None | None |
| AC-006 | Unit | `src/components/investors/InvestorContactForm.test.tsx` | should render submit button with AutoCap Red | None | None |
| AC-006 | E2E | `e2e/investors.spec.ts` | should have Fjord background on contact page | None | None |
| **AC-007: Form Validation** |
| AC-007 | Unit | `src/lib/validation/investorForm.test.ts` | should validate name as required | Zod schema | Empty string, whitespace |
| AC-007 | Unit | `src/lib/validation/investorForm.test.ts` | should validate organization as required | Zod schema | Empty string, whitespace |
| AC-007 | Unit | `src/lib/validation/investorForm.test.ts` | should validate role as required | Zod schema | Empty string, whitespace |
| AC-007 | Unit | `src/lib/validation/investorForm.test.ts` | should validate email format | Zod schema | Invalid formats: no@, @test, test |
| AC-007 | Unit | `src/lib/validation/investorForm.test.ts` | should validate phone as required | Zod schema | Empty string, whitespace |
| AC-007 | Unit | `src/lib/validation/investorForm.test.ts` | should validate GDPR consent as required | Zod schema | False value |
| AC-007 | Unit | `src/lib/validation/investorForm.test.ts` | should allow optional message field | Zod schema | Undefined, empty string |
| AC-007 | Unit | `src/components/investors/InvestorContactForm.test.tsx` | should display error for required name | Form state | Submit without name |
| AC-007 | Unit | `src/components/investors/InvestorContactForm.test.tsx` | should display error for invalid email | Form state | Submit with "notanemail" |
| AC-007 | Unit | `src/components/investors/InvestorContactForm.test.tsx` | should prevent submission with validation errors | Form state | Submit with multiple errors |
| AC-007 | Unit | `src/components/investors/InvestorContactForm.test.tsx` | should preserve entered data on validation error | Form state | Fill form, submit with error |
| **AC-008: Form Submission (Mock)** |
| AC-008 | Unit | `src/components/investors/InvestorContactForm.test.tsx` | should show loading state on submit | Valid form data | None |
| AC-008 | Unit | `src/components/investors/InvestorContactForm.test.tsx` | should display success message after submission | Valid form data | None |
| AC-008 | Unit | `src/components/investors/InvestorContactForm.test.tsx` | should clear form after successful submission | Valid form data | None |
| AC-008 | Unit | `src/components/investors/InvestorContactForm.test.tsx` | should log data to console (mock behavior) | Valid form data | None |
| **AC-009: Responsive Layout - Mobile** |
| AC-009 | E2E | `e2e/responsive.spec.ts` | should display investors landing in single column at 320px | None | None |
| AC-009 | E2E | `e2e/responsive.spec.ts` | should display investors landing in single column at 375px | None | None |
| AC-009 | E2E | `e2e/responsive.spec.ts` | should stack pillars vertically on mobile | None | None |
| AC-009 | E2E | `e2e/responsive.spec.ts` | should stack metrics vertically on mobile | None | None |
| AC-009 | E2E | `e2e/responsive.spec.ts` | should display form full-width on mobile | None | None |
| AC-009 | E2E | `e2e/responsive.spec.ts` | should have touch targets minimum 44px | None | Buttons, inputs |
| **AC-010: Responsive Layout - Desktop** |
| AC-010 | E2E | `e2e/responsive.spec.ts` | should use max-width 1200px at 1024px | None | None |
| AC-010 | E2E | `e2e/responsive.spec.ts` | should use max-width 1200px at 1440px | None | None |
| AC-010 | E2E | `e2e/responsive.spec.ts` | should display metrics in grid on desktop | None | None |
| AC-010 | E2E | `e2e/responsive.spec.ts` | should limit form width on desktop (600-700px) | None | None |
| **AC-011: Navigation Integration** |
| AC-011 | E2E | `e2e/navigation.spec.ts` | should navigate to /investors when clicking header link | None | None |
| AC-011 | E2E | `e2e/navigation.spec.ts` | should show Investors as active in header on /investors | None | None |
| AC-011 | E2E | `e2e/navigation.spec.ts` | should navigate to /investors when clicking audience card | None | None |
| **AC-012: Breadcrumb Navigation** |
| AC-012 | Unit | `src/app/investors/why/page.test.tsx` | should render breadcrumbs on why page | None | None |
| AC-012 | Unit | `src/app/investors/metrics/page.test.tsx` | should render breadcrumbs on metrics page | None | None |
| AC-012 | Unit | `src/app/investors/contact/page.test.tsx` | should render breadcrumbs on contact page | None | None |
| AC-012 | E2E | `e2e/investors.spec.ts` | should have clickable breadcrumb links | None | None |
| AC-012 | E2E | `e2e/investors.spec.ts` | should not link current page in breadcrumb | None | None |
| **AC-013: Cross-linking Between Pages** |
| AC-013 | E2E | `e2e/investors.spec.ts` | should link from landing to why page | None | None |
| AC-013 | E2E | `e2e/investors.spec.ts` | should link from landing to metrics page | None | None |
| AC-013 | E2E | `e2e/investors.spec.ts` | should link from landing to contact page | None | None |
| AC-013 | E2E | `e2e/investors.spec.ts` | should link from why page to contact page | None | None |
| AC-013 | E2E | `e2e/investors.spec.ts` | should link from metrics page to contact page | None | None |
| **AC-014: Animations and Transitions** |
| AC-014 | E2E | `e2e/animations.spec.ts` | should show fade-in animations on scroll | None | None |
| AC-014 | E2E | `e2e/animations.spec.ts` | should show staggered reveals for metrics | None | None |
| AC-014 | E2E | `e2e/animations.spec.ts` | should show hover effects on CTAs | None | None |
| AC-014 | E2E | `e2e/animations.spec.ts` | should respect prefers-reduced-motion setting | None | CSS media query |
| **AC-015: SEO and Metadata** |
| AC-015 | Unit | `src/app/investors/page.test.tsx` | should have correct title tag for landing page | SEO metadata | None |
| AC-015 | Unit | `src/app/investors/page.test.tsx` | should have meta description for landing page | SEO metadata | None |
| AC-015 | Unit | `src/app/investors/why/page.test.tsx` | should have correct title tag for why page | SEO metadata | None |
| AC-015 | Unit | `src/app/investors/why/page.test.tsx` | should have meta description for why page | SEO metadata | None |
| AC-015 | Unit | `src/app/investors/metrics/page.test.tsx` | should have correct title tag for metrics page | SEO metadata | None |
| AC-015 | Unit | `src/app/investors/metrics/page.test.tsx` | should have meta description for metrics page | SEO metadata | None |
| AC-015 | Unit | `src/app/investors/contact/page.test.tsx` | should have correct title tag for contact page | SEO metadata | None |
| AC-015 | Unit | `src/app/investors/contact/page.test.tsx` | should have meta description for contact page | SEO metadata | None |
| AC-015 | Unit | `src/app/investors/page.test.tsx` | should use semantic HTML structure | None | h1, main, section, nav |

### 10.2 Test Coverage Summary

| Test Level | Count | Purpose |
|---|---|---|
| **Unit** | 58 | Component rendering, validation logic, metadata |
| **E2E** | 14 | User flows, responsive layouts, animations, navigation |
| **Total** | 72 | Complete coverage of all 15 acceptance criteria |

### 10.3 Testing Strategy

**Unit Tests:**
- Test components in isolation
- Mock data from content files
- Focus on rendering and logic
- Fast execution, run on every change

**E2E Tests:**
- Test complete user journeys
- Real browser interactions
- Responsive design validation
- Run before quality gates

**TDD Approach:**
1. **RED:** Write failing test for AC
2. **GREEN:** Implement minimum code to pass
3. **BLUE:** Refactor while keeping tests green
4. Update traceability matrix

### 10.4 Test Fixtures

**Required Fixtures:**
- `investors.ts` - Complete content structure
- `mockInvestor.ts` - Valid form data
- `mockMetrics.ts` - Sample KPI data
- `mockPillars.ts` - Sample pillar data

**Edge Cases to Cover:**
- Empty/missing content
- Invalid email formats
- Long text overflow
- All viewport sizes (320px - 1440px)
- Touch target minimums
- Accessibility (prefers-reduced-motion)

---

## Sign-off

| Role | Name | Date | Approved |
|------|------|------|----------|
| Product Owner | User | | [ ] |
| Tech Lead | Alex Chen | 2026-04-22 | [x] |
| Quality Lead | Dr. Priya Patel | 2026-04-22 | [x] |
