# Specification: About Page

**Author:** Alex Chen (Tech Lead)
**Date:** 2026-04-23
**Status:** Draft

---

## 1. Overview

### 1.1 Summary

The About page is **AutoCap's company story and credibility page** - designed to build trust with all audiences (entrepreneurs, investors, general visitors) by communicating the company's mission, values, approach, and growth story. This page establishes who AutoCap is, why the company exists, and what makes it different from typical consolidators.

**Design Standard:** Professional, authentic tone with alternating backgrounds. Premium design matching site quality with founder-led, operator-focused credibility.

### 1.2 Goals

- Build trust and credibility with all audiences
- Communicate AutoCap's unique approach (preserve local brands)
- Tell the company's growth story
- Differentiate from typical private equity consolidators
- Establish founder-led, operational expertise

### 1.3 Non-Goals

- Individual team member bios (future enhancement)
- Detailed financial history
- Legal/corporate governance details
- Press kit or media resources (that's News & Media)

### 1.4 User Story

**As a visitor (entrepreneur, investor, or general),**
I want to understand who AutoCap is and what they stand for,
So that I can decide if I want to engage with them.

---

## 2. Acceptance Criteria

### AC-001: About Landing Hero

**GIVEN** a user navigates to `/about`
**WHEN** the page loads
**THEN** they see:
  - Headline: "Building Sweden's tire services platform"
  - Subheadline: "We're operators, not financial engineers. AutoCap Group is consolidating the tire workshop industry - but we do it differently. We preserve what makes each workshop special while building the operational scale that creates value for everyone."
  - Dusk background (#EDE4D8)
  - Professional, credible design
  - Full viewport hero (min-h-[85vh])
  - Icon badge (Building2 or Handshake)
  - Trust indicator (optional)

---

### AC-002: Company Story Section

**GIVEN** a user scrolls past the hero
**WHEN** they view the story section
**THEN** they see:
  - Section title: "Our Story"
  - Brief company history (3-4 paragraphs):
    - Founded to consolidate Sweden's fragmented tire services market
    - Different approach: preserve local brands, not rebrand everything
    - Operator-led team with deep industry experience
    - Growth from founding to 12+ workshops
  - Alternating background (Linen White)
  - Proper spacing and readability

---

### AC-003: Mission & Vision Section

**GIVEN** a user views the mission section
**WHEN** they scroll to it
**THEN** they see:
  - Section title: "Our Mission"
  - Mission statement: "To build the leading tire services platform in Sweden by preserving local brands, empowering teams, and delivering operational excellence."
  - Vision statement: "A future where independent workshops thrive as part of a larger network - keeping their identity while gaining the benefits of scale."
  - Dusk background or Birch background
  - Clear, centered layout

---

### AC-004: Values/Principles Section

**GIVEN** a user views the values section
**WHEN** they scroll through it
**THEN** they see:
  - Section title: "How We Work" or "Our Principles"
  - 4-5 core values/principles displayed:
    1. Preserve local brands
    2. Empower local teams
    3. Operational excellence
    4. Long-term thinking
    5. Transparency and trust
  - Each value with icon and description
  - Similar layout to investment pillars (large number + icon badge)
  - Alternating backgrounds

---

### AC-005: Growth Timeline Section

**GIVEN** a user views the timeline
**WHEN** they scroll to it
**THEN** they see:
  - Section title: "Our Journey"
  - Key milestones displayed:
    - Founding year
    - First acquisition
    - Geographic expansion
    - 12+ workshops milestone
    - Target: 50+ workshops by 2028
  - Visual timeline or milestone cards
  - Metrics integrated (12 workshops, ~50 employees, ~200 MSEK)

---

### AC-006: Why Different Section

**GIVEN** a user views the differentiation section
**WHEN** they scroll to it
**THEN** they see:
  - Section title: "What Makes Us Different"
  - Comparison or key differentiators:
    - We preserve brands (vs typical consolidators rebrand)
    - We keep teams intact (vs typical consolidators replace management)
    - We're operators (vs financial buyers)
    - Long-term focus (vs flip-and-sell)
  - Clear, visual presentation
  - Credible tone (not arrogant)

---

### AC-007: Closing CTA Section

**GIVEN** a user reaches the bottom of the page
**WHEN** they view the closing section
**THEN** they see:
  - Dark closing block (like Entrepreneurs/Investors why pages)
  - Headline: "Want to learn more?"
  - Multiple CTAs or links:
    - "For workshop owners" → /entrepreneurs
    - "For investors" → /investors
    - "General enquiries" → /contact
  - Red glow effect
  - Professional design

---

### AC-008: Responsive Layout - Mobile

**GIVEN** a user views the About page on mobile (320-767px)
**WHEN** they navigate through sections
**THEN** all content:
  - Displays in single column
  - Values/principles stack vertically
  - Timeline stacks vertically
  - Text remains readable
  - Touch targets are minimum 44px
  - No horizontal scroll

---

### AC-009: Responsive Layout - Desktop

**GIVEN** a user views the About page on desktop (1024px+)
**WHEN** they navigate through sections
**THEN** content:
  - Uses appropriate max-width (1200px)
  - Values display in readable format
  - Timeline displays horizontally or in grid
  - Proper whitespace and padding

---

### AC-010: Navigation Integration

**GIVEN** a user is anywhere on the site
**WHEN** they click "About" in the header
**THEN** they navigate to `/about`
  AND the header shows "About" as active

---

### AC-011: Animations and Transitions

**GIVEN** a user scrolls through the About page
**WHEN** content comes into view
**THEN** they see:
  - Smooth fade-in animations
  - Staggered reveals for values/timeline
  - Hover effects on CTAs
  - Respects `prefers-reduced-motion`
  - No janky or abrupt transitions

---

### AC-012: SEO and Metadata

**GIVEN** the About page is deployed
**WHEN** search engines or social media crawl it
**THEN** the page has:
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

---

## 4. Technical Design

### 4.1 Components/Files to Create

| File | Action | Description |
|------|--------|-------------|
| `src/app/about/page.tsx` | Create | About page main layout |
| `src/components/about/ValueCard.tsx` | Create | Value/principle display component |
| `src/components/about/TimelineMilestone.tsx` | Create | Timeline milestone component |
| `src/content/about.ts` | Create | Content data |

### 4.2 Data Model

```typescript
// About content
interface AboutContent {
  hero: {
    headline: string
    subheadline: string
  }
  story: {
    title: string
    paragraphs: string[]
  }
  mission: {
    title: string
    statement: string
    vision: string
  }
  values: Array<{
    id: number
    title: string
    description: string
    icon: string
  }>
  timeline: {
    title: string
    milestones: Array<{
      year: string
      title: string
      description: string
    }>
  }
  differentiators: {
    title: string
    items: Array<{
      id: number
      title: string
      description: string
      icon: string
    }>
  }
  closing: {
    title: string
    description: string
    ctas: Array<{
      label: string
      href: string
    }>
  }
}
```

---

## 5. UI/UX Requirements

### 5.1 Design Tokens

**Primary Color:** Dusk (#EDE4D8) - used for hero and alternating sections
**Alternating:** Linen White (#F5F0EB), Birch (#D8E4DC)
**Accents:** AutoCap Red (#C8102E) for CTAs and emphasis

### 5.2 Tone and Voice

- **Authentic, not corporate** - "We're operators, not financial engineers"
- **Confident, not arrogant** - "What makes us different"
- **Clear, not jargon-heavy** - Simple language
- **Operator-focused** - Emphasize hands-on experience

### 5.3 Mobile Requirements

- Single column layouts
- Values/timeline stack vertically
- Touch-friendly (44px min)
- Readable text sizes

### 5.4 Desktop Requirements

- Max-width containers (1200px)
- Values in grid or horizontal layout
- Timeline horizontal or stepped
- Proper whitespace

---

## 6. Content Structure

### 6.1 Company Story (3-4 paragraphs)

1. **The Problem:** Sweden's tire services market is fragmented (~500 independent workshops). Local owners built great businesses but struggle with procurement, back-office, and succession planning.

2. **The Opportunity:** Consolidation makes sense - but most consolidators destroy what makes these workshops special. They rebrand everything, replace teams, and extract value.

3. **Our Approach:** AutoCap does it differently. We preserve local brands, keep teams intact, and add value through shared procurement and operational support. We're operators who understand the business.

4. **The Vision:** Build Sweden's leading tire services platform - one where workshops thrive with their identity intact while gaining the benefits of scale.

### 6.2 Mission & Vision

**Mission:** "To build the leading tire services platform in Sweden by preserving local brands, empowering teams, and delivering operational excellence."

**Vision:** "A future where independent workshops thrive as part of a larger network - keeping their identity while gaining the benefits of scale."

### 6.3 Values/Principles (5)

1. **Preserve Local Brands**
   - We don't rebrand. Your workshop keeps its name, identity, and customer relationships.

2. **Empower Local Teams**
   - We don't replace. Your team stays, and we give them better tools and support.

3. **Operational Excellence**
   - We're operators first. We know tire services inside and out.

4. **Long-Term Thinking**
   - We're building a business, not flipping assets. Sustainable growth over quick exits.

5. **Transparency and Trust**
   - Honest conversations, fair deals, confidential processes.

### 6.4 Timeline Milestones

- **Founding Year:** AutoCap Group founded with a vision to consolidate differently
- **First Acquisition:** Acquired first workshop in Stockholm region
- **Geographic Expansion:** Expanded to Västra Götaland region
- **12 Workshops Milestone:** Reached 12 workshops, ~50 employees, ~200 MSEK revenue
- **Future Target:** 50+ workshops by 2028

### 6.5 What Makes Us Different (4 points)

1. **We Preserve Brands** (vs typical: rebrand everything)
2. **We Keep Teams** (vs typical: replace management)
3. **We're Operators** (vs typical: financial buyers)
4. **We Think Long-Term** (vs typical: flip and sell)

---

## 7. Dependencies

### 7.1 Existing Dependencies

- Framer Motion (already installed)
- Lucide icons (already installed)
- useScrollAnimation hook (already exists)

### 7.2 New Dependencies

None - all requirements met with existing stack

---

## 8. SEO Metadata

| Page | Title | Description |
|------|-------|-------------|
| /about | About AutoCap Group | We're building Sweden's tire services platform - preserving local brands while creating operational scale. Learn our story, mission, and approach. |

---

## 9. Open Questions

- [ ] Do we want to include team photos/bios? (Defer to future)
- [ ] Should we include specific founder names? (TBD)
- [ ] Any specific year for founding? (Use generic "founded to...")
- [ ] Office location/address to display? (Use "Based in Stockholm")

---

## 10. Test Plan

**Quality Lead:** Dr. Priya Patel
**Test Strategy:** TDD (Red-Green-Blue) for each acceptance criterion
**Total Tests:** 54 tests across Unit, Integration, and E2E levels

### 10.1 Test Matrix

| AC | Test Level | Test File | Test Name | Fixtures/Data | Edge Cases |
|---|---|---|---|---|---|
| **AC-001: About Landing Hero** |
| AC-001 | Unit | `src/app/about/page.test.tsx` | should render headline text | about.hero | None |
| AC-001 | Unit | `src/app/about/page.test.tsx` | should render subheadline text | about.hero | None |
| AC-001 | Unit | `src/app/about/page.test.tsx` | should have Dusk background color | about.hero | None |
| AC-001 | Unit | `src/app/about/page.test.tsx` | should render icon badge | about.hero | None |
| AC-001 | E2E | `e2e/about.spec.ts` | should display full viewport hero (min-h-[85vh]) | None | None |
| **AC-002: Company Story Section** |
| AC-002 | Unit | `src/app/about/page.test.tsx` | should render story title | about.story | None |
| AC-002 | Unit | `src/app/about/page.test.tsx` | should render all story paragraphs | about.story.paragraphs | Array length validation |
| AC-002 | Unit | `src/app/about/page.test.tsx` | should have Linen White background | about.story | None |
| AC-002 | E2E | `e2e/about.spec.ts` | should display story section with proper spacing | None | None |
| **AC-003: Mission & Vision Section** |
| AC-003 | Unit | `src/app/about/page.test.tsx` | should render mission title | about.mission | None |
| AC-003 | Unit | `src/app/about/page.test.tsx` | should render mission statement | about.mission.statement | None |
| AC-003 | Unit | `src/app/about/page.test.tsx` | should render vision statement | about.mission.vision | None |
| AC-003 | Unit | `src/app/about/page.test.tsx` | should have centered layout | about.mission | None |
| **AC-004: Values/Principles Section** |
| AC-004 | Unit | `src/app/about/page.test.tsx` | should render values title | about.values | None |
| AC-004 | Unit | `src/app/about/page.test.tsx` | should render all values (4-5) | about.values | Array length 4-5 |
| AC-004 | Unit | `src/components/about/ValueCard.test.tsx` | should render value with number badge | Mock value data | None |
| AC-004 | Unit | `src/components/about/ValueCard.test.tsx` | should render value with icon badge | Mock value data | None |
| AC-004 | Unit | `src/components/about/ValueCard.test.tsx` | should render value title | Mock value data | None |
| AC-004 | Unit | `src/components/about/ValueCard.test.tsx` | should render value description | Mock value data | Long text overflow |
| AC-004 | Unit | `src/components/about/ValueCard.test.tsx` | should alternate background colors | Mock values array | Index 0,1,2,3,4 color checks |
| AC-004 | E2E | `e2e/about.spec.ts` | should show scroll-triggered reveal animations | None | None |
| **AC-005: Growth Timeline Section** |
| AC-005 | Unit | `src/app/about/page.test.tsx` | should render timeline title | about.timeline | None |
| AC-005 | Unit | `src/app/about/page.test.tsx` | should render all milestones | about.timeline.milestones | Array length validation |
| AC-005 | Unit | `src/components/about/TimelineMilestone.test.tsx` | should render milestone year | Mock milestone data | None |
| AC-005 | Unit | `src/components/about/TimelineMilestone.test.tsx` | should render milestone title | Mock milestone data | None |
| AC-005 | Unit | `src/components/about/TimelineMilestone.test.tsx` | should render milestone description | Mock milestone data | None |
| AC-005 | E2E | `e2e/about.spec.ts` | should display timeline visually | None | None |
| **AC-006: Why Different Section** |
| AC-006 | Unit | `src/app/about/page.test.tsx` | should render differentiators title | about.differentiators | None |
| AC-006 | Unit | `src/app/about/page.test.tsx` | should render all differentiators (4) | about.differentiators.items | Array length validation |
| AC-006 | Unit | `src/app/about/page.test.tsx` | should render each differentiator with icon | about.differentiators.items | None |
| AC-006 | E2E | `e2e/about.spec.ts` | should display differentiators clearly | None | None |
| **AC-007: Closing CTA Section** |
| AC-007 | Unit | `src/app/about/page.test.tsx` | should render closing title | about.closing | None |
| AC-007 | Unit | `src/app/about/page.test.tsx` | should render all CTAs | about.closing.ctas | Array length validation |
| AC-007 | Unit | `src/app/about/page.test.tsx` | should link to /entrepreneurs | about.closing.ctas | None |
| AC-007 | Unit | `src/app/about/page.test.tsx` | should link to /investors | about.closing.ctas | None |
| AC-007 | Unit | `src/app/about/page.test.tsx` | should link to /contact | about.closing.ctas | None |
| AC-007 | Unit | `src/app/about/page.test.tsx` | should have dark background with glow | about.closing | None |
| **AC-008: Responsive Layout - Mobile** |
| AC-008 | E2E | `e2e/responsive.spec.ts` | should display about page in single column at 320px | None | None |
| AC-008 | E2E | `e2e/responsive.spec.ts` | should display about page in single column at 375px | None | None |
| AC-008 | E2E | `e2e/responsive.spec.ts` | should stack values vertically on mobile | None | None |
| AC-008 | E2E | `e2e/responsive.spec.ts` | should stack timeline vertically on mobile | None | None |
| AC-008 | E2E | `e2e/responsive.spec.ts` | should have touch targets minimum 44px | None | CTAs, interactive elements |
| **AC-009: Responsive Layout - Desktop** |
| AC-009 | E2E | `e2e/responsive.spec.ts` | should use max-width 1200px at 1024px | None | None |
| AC-009 | E2E | `e2e/responsive.spec.ts` | should use max-width 1200px at 1440px | None | None |
| AC-009 | E2E | `e2e/responsive.spec.ts` | should display values in grid/horizontal on desktop | None | None |
| AC-009 | E2E | `e2e/responsive.spec.ts` | should display timeline horizontally on desktop | None | None |
| **AC-010: Navigation Integration** |
| AC-010 | E2E | `e2e/navigation.spec.ts` | should navigate to /about when clicking header link | None | None |
| AC-010 | E2E | `e2e/navigation.spec.ts` | should show About as active in header on /about | None | None |
| **AC-011: Animations and Transitions** |
| AC-011 | E2E | `e2e/animations.spec.ts` | should show fade-in animations on scroll | None | None |
| AC-011 | E2E | `e2e/animations.spec.ts` | should show staggered reveals for values | None | None |
| AC-011 | E2E | `e2e/animations.spec.ts` | should show staggered reveals for timeline | None | None |
| AC-011 | E2E | `e2e/animations.spec.ts` | should show hover effects on CTAs | None | None |
| AC-011 | E2E | `e2e/animations.spec.ts` | should respect prefers-reduced-motion setting | None | CSS media query |
| **AC-012: SEO and Metadata** |
| AC-012 | Unit | `src/app/about/page.test.tsx` | should have correct title tag | SEO metadata | None |
| AC-012 | Unit | `src/app/about/page.test.tsx` | should have meta description | SEO metadata | None |
| AC-012 | Unit | `src/app/about/page.test.tsx` | should use semantic HTML structure | None | main, section, article tags |

### 10.2 Test Coverage Summary

| Test Level | Count | Purpose |
|---|---|---|
| **Unit** | 40 | Component rendering, content display, layouts |
| **E2E** | 14 | User flows, responsive layouts, animations, navigation |
| **Total** | 54 | Complete coverage of all 12 acceptance criteria |

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
- `about.ts` - Complete content structure
- `mockValue.ts` - Sample value/principle data
- `mockMilestone.ts` - Sample timeline milestone data

**Edge Cases to Cover:**
- Empty/missing content
- Long text overflow in descriptions
- All viewport sizes (320px - 1440px)
- Touch target minimums
- Accessibility (prefers-reduced-motion)

---

## Sign-off

| Role | Name | Date | Approved |
|------|------|------|----------|
| Product Owner | User | | [ ] |
| Tech Lead | Alex Chen | 2026-04-23 | [x] |
| Quality Lead | Dr. Priya Patel | 2026-04-23 | [x] |
