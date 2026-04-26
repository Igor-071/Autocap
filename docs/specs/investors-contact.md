# Specification: Investors - Contact Form Page

**Author:** Alex Chen (Tech Lead)
**Date:** 2026-04-26
**Status:** Implemented (Retrospective Spec)

---

## 1. Overview

### 1.1 Summary
Professional contact form for investors, partners, and institutional inquiries about AutoCap Group's investment opportunity.

### 1.2 Goals
- Capture qualified investor leads
- Maintain professional, institutional tone
- Route to investor relations team
- Collect inquiry type for proper routing

### 1.3 Non-Goals
- Does NOT provide financial projections or EBITDA figures
- Does NOT include investment calculator
- Does NOT replace formal investor presentations

### 1.4 User Story
As an institutional investor or potential partner,
I want to request detailed information about AutoCap's investment case,
So that I can evaluate the opportunity and schedule follow-up discussions.

---

## 2. Acceptance Criteria

### AC-001: Page Structure

GIVEN I navigate from /investors/why
WHEN I click "Contact our investor relations team"
THEN I am taken to `/investors/contact`
  AND I see breadcrumb: Home → Investors → Investor Relations
  AND I see page title "Investor Relations"
  AND I see professional subtext about the inquiry process

---

### AC-002: Form Fields - Professional Context

GIVEN I am viewing the investor contact form
WHEN I see the form fields
THEN I see:
  - Full name (required)
  - Organisation (required)
  - Role / Title (required)
  - Enquiry type (required dropdown: Investment / Partnership / Media / Other)
  - Email (required, validated)
  - Message (optional textarea)
  - GDPR consent (required checkbox)

---

### AC-003: Enquiry Type Dropdown

GIVEN I am selecting an enquiry type
WHEN I click the dropdown
THEN I see options: Investment, Partnership, Media, Other
  AND selecting an option pre-fills appropriate routing

---

### AC-004: Form Validation

GIVEN I submit the form with invalid data
WHEN validation runs
THEN I see appropriate error messages
  AND the form does NOT submit
  AND focus moves to first invalid field

---

### AC-005: Successful Submission

GIVEN I submit a valid form
WHEN the submission completes
THEN I see: "Thank you. A member of our investor relations team will respond within two business days."
  AND an email is sent to the investor relations team
  AND the form is cleared

---

### AC-006: Visual Design

GIVEN I am viewing the page
WHEN I observe the design
THEN it uses Fjord blue background (#C9D8E8)
  AND maintains institutional, professional aesthetic
  AND uses AutoCap Red for CTA

---

### AC-007: Responsive Design

GIVEN I view on any device size
WHEN the page renders
THEN the form is centered (max-width 2xl)
  AND all fields are accessible and readable
  AND mobile displays single-column layout

---

## 3. Technical Specifications

### 3.1 Route
- Path: `/investors/contact`
- File: `src/app/investors/contact/page.tsx`

### 3.2 Form Schema
```typescript
{
  fullName: string (required)
  organisation: string (required)
  role: string (required)
  enquiryType: "Investment" | "Partnership" | "Media" | "Other" (required)
  email: string (required, email format)
  message?: string (optional)
  gdprConsent: boolean (required, true)
}
```

### 3.3 Components
- `Breadcrumb`
- `InvestorContactForm`
- React Hook Form + Zod validation

### 3.4 SEO
```typescript
{
  title: 'Investor Relations · AutoCap Group',
  description: 'Interested in the AutoCap opportunity? Contact our investor relations team.'
}
```

---

## 4. Traceability Matrix

| Criterion | Test File | Test Name | Status |
|-----------|-----------|-----------|--------|
| AC-001 | TBD | Page loads correctly | ⏳ Pending |
| AC-002 | TBD | All fields present | ⏳ Pending |
| AC-003 | TBD | Enquiry type dropdown works | ⏳ Pending |
| AC-004 | TBD | Validation works | ⏳ Pending |
| AC-005 | TBD | Submission succeeds | ⏳ Pending |
| AC-006 | TBD | Design matches brand | ⏳ Pending |
| AC-007 | TBD | Responsive design works | ⏳ Pending |

---

## 5. Revision History

| Date | Version | Changes | Author |
|------|---------|---------|--------|
| 2026-04-26 | 1.0 | Retrospective spec created | Alex Chen |
