# Feature Documentation: Investors Section

**Feature:** Investors Section
**Version:** 1.0.0
**Status:** ✅ COMPLETE
**Date Completed:** 2026-04-23

---

## Overview

The Investors section is AutoCap's investor relations hub - designed to attract and convert potential investors (institutional, family offices, high-net-worth individuals) by presenting the investment thesis, market opportunity, growth metrics, and providing a contact form for investor enquiries.

### Key Features

- **Landing Page:** Professional hero with clear value proposition
- **Investment Case:** 4 pillars explaining the opportunity
- **Growth Metrics:** Track record and future roadmap
- **Investor Contact:** Qualified lead capture form

---

## User Guide

### For Site Visitors

**Accessing the Investors Section:**
1. Click "Investors" in the main navigation
2. Or visit directly at `/investors`

**Exploring the Investment Opportunity:**

1. **Start at Landing Page** (`/investors`)
   - Read the headline: "A platform built for returns"
   - Understand the consolidation thesis
   - Click "View the investment case →"

2. **Review Investment Pillars** (`/investors/why`)
   - 4 key pillars:
     1. Fragmented market, consolidation opportunity
     2. Resilient, recurring revenue business
     3. Roll-up playbook with proven economics
     4. Founder-led execution
   - Read closing vision: "Built for the long term"

3. **Check Growth Metrics** (`/investors/metrics`)
   - 12 workshops acquired
   - ~50 employees
   - ~200 MSEK revenue run-rate
   - 50+ workshop target by 2028
   - Geographic presence

4. **Contact Investor Relations** (`/investors/contact`)
   - Fill out contact form
   - Provide investment focus (optional)
   - Consent to GDPR
   - Submit enquiry

---

## Technical Documentation

### Architecture

**Content Structure:**
```
src/content/investors.ts
├── landing { headline, subheadline, ctaText, ctaLink }
├── pillars [4] { id, title, description }
├── closingBlock { title, description }
├── metrics { intro, kpis [5], roadmap }
└── contact { title, subtext, successMessage }
```

**Component Hierarchy:**
```
/investors
├── page.tsx (Landing)
├── /why
│   └── page.tsx (Investment Case)
│       └── InvestmentPillar × 4
├── /metrics
│   └── page.tsx (Growth Metrics)
│       └── MetricCard × 5
└── /contact
    └── page.tsx (Contact Form)
        └── InvestorContactForm
```

### Files Created

| File | Purpose | Lines |
|------|---------|-------|
| `src/content/investors.ts` | Content data | 100 |
| `src/lib/validation/investorForm.ts` | Zod schema | 18 |
| `src/components/investors/InvestmentPillar.tsx` | Pillar display | 67 |
| `src/components/investors/MetricCard.tsx` | Metric card | 56 |
| `src/components/investors/InvestorContactForm.tsx` | Contact form | 229 |
| `src/app/investors/page.tsx` | Landing page | 64 |
| `src/app/investors/why/page.tsx` | Investment case | 103 |
| `src/app/investors/metrics/page.tsx` | Metrics page | 103 |
| `src/app/investors/contact/page.tsx` | Contact page | 68 |

**Total:** 9 files, ~808 lines of code

### Data Model

```typescript
interface InvestorsContent {
  landing: {
    headline: string
    subheadline: string
    ctaText: string
    ctaLink: string
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
      value: string
      label: string
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

interface InvestorFormData {
  name: string
  organization: string
  role: string
  email: string
  phone: string
  message?: string
  gdprConsent: boolean
}
```

### Form Validation Rules

| Field | Validation | Error Message |
|-------|------------|---------------|
| name | Required, min 1 char | "Please enter your name" |
| organization | Required, min 1 char | "Please enter your organization or fund name" |
| role | Required, min 1 char | "Please enter your role or title" |
| email | Required, valid email | "Please enter a valid email address" |
| phone | Required, min 1 char | "Please enter your phone number" |
| message | Optional | - |
| gdprConsent | Must be true | "You must consent to data processing to submit this form" |

### Design Tokens Used

```typescript
// Primary Colors
autocapRed: '#C8102E'
nordicBlack: '#1C1C1E'
fjord: '#C9D8E8'        // Primary background
linenWhite: '#F5F0EB'   // Alternating background

// Typography Scales
text-5xl (48px)  // Mobile headlines
text-6xl (60px)  // Tablet headlines
text-7xl (72px)  // Desktop headlines
text-8xl (96px)  // Large desktop headlines

// Spacing
py-16 (64px)     // Mobile sections
py-20 (80px)     // Tablet sections
py-28 (112px)    // Desktop sections
```

### Icons Used

| Icon | Component | Usage |
|------|-----------|-------|
| TrendingUp | Landing, Pillar 1 | Growth, upward trajectory |
| DollarSign | Pillar 2 | Revenue, financial stability |
| Target | Pillar 3 | Goals, strategy |
| Users | Pillar 4 | Team, people |
| Building2 | Metrics | Workshops count |
| MapPin | Metrics | Geographic regions |
| ArrowRight | CTAs | Directional navigation |

---

## Testing Guide

### Manual Test Scenarios

**Scenario 1: Landing Page Journey**
1. Navigate to `/investors`
2. Verify headline displays
3. Verify subheadline displays
4. Click CTA button
5. Should navigate to `/investors/why`

**Scenario 2: Investment Case Review**
1. Navigate to `/investors/why`
2. Verify all 4 pillars display
3. Verify each pillar has icon
4. Verify alternating background colors
5. Scroll to observe animations
6. Click CTA at bottom
7. Should navigate to `/investors/contact`

**Scenario 3: Metrics Page**
1. Navigate to `/investors/metrics`
2. Verify all 5 metrics display
3. Verify large numbers visible
4. Verify icons render
5. Scroll to observe animations

**Scenario 4: Form Validation**
1. Navigate to `/investors/contact`
2. Click submit without filling form
3. Verify error messages appear
4. Fill name only, submit
5. Verify other field errors show
6. Enter invalid email ("notanemail")
7. Verify email error shows
8. Fill all fields correctly
9. Leave GDPR unchecked, submit
10. Verify GDPR error shows

**Scenario 5: Form Submission**
1. Fill all required fields correctly
2. Check GDPR consent
3. Click submit
4. Verify loading state shows
5. Verify success message displays
6. Verify form clears
7. Check browser console for logged data

**Scenario 6: Responsive Design**
1. Open DevTools
2. Test at 320px width
3. Verify single column layout
4. Test at 768px width
5. Verify 2-column grid where appropriate
6. Test at 1440px width
7. Verify max-width constraints

**Scenario 7: Navigation**
1. Start at homepage
2. Click "Investors" in header
3. Verify header shows "Investors" as active
4. Navigate between subpages
5. Verify breadcrumbs display correctly
6. Click breadcrumb links
7. Verify navigation works

---

## Maintenance Guide

### Updating Content

**To change headline or subheadline:**
```typescript
// Edit: src/content/investors.ts
export const investorsContent = {
  landing: {
    headline: 'New headline here',
    subheadline: 'New subheadline here',
    // ...
  }
}
```

**To add/edit investment pillars:**
```typescript
// Edit: src/content/investors.ts
pillars: [
  {
    id: 1,
    title: 'New pillar title',
    description: 'Detailed description...'
  }
  // Max 4 pillars recommended for visual balance
]
```

**To update metrics:**
```typescript
// Edit: src/content/investors.ts
metrics: {
  kpis: [
    {
      value: '15',                    // Updated workshop count
      label: 'Workshops acquired',
      icon: 'Building2'
    }
    // Icons: Building2, Users, TrendingUp, Target, MapPin
  ]
}
```

### Modifying Form Fields

**To add a new field:**
1. Update validation schema in `src/lib/validation/investorForm.ts`
2. Add field to `InvestorContactForm.tsx`
3. Update form submission handler

**Example - Adding "Investment Range" field:**

```typescript
// 1. Update schema
export const investorFormSchema = z.object({
  // ... existing fields
  investmentRange: z.string().min(1, 'Please select an investment range'),
})

// 2. Add to form component
<div>
  <label htmlFor="investmentRange">
    Investment Range <span className="text-[#C8102E]">*</span>
  </label>
  <select
    {...register('investmentRange')}
    id="investmentRange"
    className="w-full rounded-xl border-2..."
  >
    <option value="">Select range</option>
    <option value="1-5M">1-5 MSEK</option>
    <option value="5-10M">5-10 MSEK</option>
    {/* ... */}
  </select>
  {errors.investmentRange && (
    <p className="mt-2 text-sm text-[#C8102E]">
      {errors.investmentRange.message}
    </p>
  )}
</div>
```

### Updating Styles

**Design system is consistent across all pages:**
- Primary color: Fjord (#C9D8E8)
- Accent color: AutoCap Red (#C8102E)
- Typography: Font-black headlines, large scales
- Spacing: Consistent py-16/20/28 patterns

**To change a background color:**
```tsx
// Change from:
className="bg-gradient-to-br from-[#C9D8E8] via-[#B8C7D7] to-[#C9D8E8]"

// To:
className="bg-gradient-to-br from-[#NEW] via-[#COLOR] to-[#NEW]"
```

### Common Tasks

**Task:** Change CTA button text
**File:** `src/content/investors.ts`
**Line:** Update `ctaText` property

**Task:** Modify success message after form submission
**File:** `src/content/investors.ts`
**Line:** Update `contact.successMessage`

**Task:** Add new metric to metrics page
**File:** `src/content/investors.ts`
**Section:** Add to `metrics.kpis` array

**Task:** Change pillar icons
**File:** `src/components/investors/InvestmentPillar.tsx`
**Line:** Update `iconMap` object

---

## Production Readiness

### Current Status (Prototype Mode)

✅ **Ready:**
- Frontend implementation complete
- Form validation working
- Responsive design tested
- Content editable via single file

⏳ **Not Implemented (Production Requirements):**
- Backend API endpoint for form submission
- Email notifications to investor relations team
- CRM integration for lead storage
- Confirmation email to enquirer
- Form submission analytics
- Rate limiting / spam protection

### Production Checklist

When moving to production mode:

- [ ] Create API endpoint `/api/investors/contact`
- [ ] Set up email service (SendGrid, AWS SES, etc.)
- [ ] Configure investor relations email address
- [ ] Implement CRM integration (HubSpot, Salesforce, etc.)
- [ ] Add form submission analytics
- [ ] Implement rate limiting (e.g., 3 submissions per IP per hour)
- [ ] Add reCAPTCHA or honeypot for spam protection
- [ ] Set up monitoring/alerts for new enquiries
- [ ] Create investor relations dashboard
- [ ] Add legal disclaimer if required by Swedish regulations

### Backend Integration Guide

**Expected API Contract:**

```typescript
POST /api/investors/contact

Request Body:
{
  name: string
  organization: string
  role: string
  email: string
  phone: string
  message?: string
  gdprConsent: true
}

Response (Success):
{
  success: true
  message: "Enquiry submitted successfully"
}

Response (Error):
{
  success: false
  error: "Error message"
}
```

**Frontend Changes Needed:**
Replace mock handler in `InvestorContactForm.tsx`:

```typescript
// Replace this:
await new Promise((resolve) => setTimeout(resolve, 1000))
console.log('Investor enquiry submitted:', data)

// With this:
const response = await fetch('/api/investors/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
})

if (!response.ok) throw new Error('Submission failed')
```

---

## SEO Optimization

All pages have proper metadata:

| Page | Title | Description |
|------|-------|-------------|
| `/investors` | For Investors · AutoCap Group | Consolidating Sweden's fragmented tire services market. Proven playbook, resilient business model, founder-led execution. |
| `/investors/why` | Investment Case · AutoCap Group | Discover the AutoCap investment opportunity: market consolidation, recurring revenue, and operational scale. |
| `/investors/metrics` | Growth Metrics · AutoCap Group | Track AutoCap's growth from founding to 12 workshops and beyond. |
| `/investors/contact` | Investor Relations · AutoCap Group | Interested in the AutoCap opportunity? Contact our investor relations team. |

---

## Analytics & Tracking

**Recommended Events to Track:**

1. **Page Views:**
   - Landing page views
   - Investment case page views
   - Metrics page views
   - Contact page views

2. **User Interactions:**
   - CTA button clicks
   - Breadcrumb navigation
   - Cross-page links

3. **Form Events:**
   - Form started (first field filled)
   - Form errors (validation failures)
   - Form submitted (successful submission)
   - Field-level tracking (which fields cause dropoff)

4. **Engagement Metrics:**
   - Time on page
   - Scroll depth
   - Pillar read rate (how many users scroll through all 4)

---

## Related Documentation

- **Specification:** `docs/specs/investors-section.md`
- **Test Plan:** `docs/specs/investors-section.md` (Section 10)
- **Quality Review:** `docs/reviews/investors-section.md`
- **Content Source:** `src/content/investors.ts`

---

## Version History

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 1.0.0 | 2026-04-23 | Initial release | Alex Chen (Tech Lead) |

---

**Status:** ✅ Production-ready (prototype mode)
**Next Steps:** User acceptance testing → Commit to repository → Backend integration (production mode)
