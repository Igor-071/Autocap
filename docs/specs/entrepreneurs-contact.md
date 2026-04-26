# Specification: Entrepreneurs - Contact Form Page

**Author:** Alex Chen (Tech Lead)
**Date:** 2026-04-26
**Status:** Implemented (Retrospective Spec)

---

## 1. Overview

### 1.1 Summary
A dedicated contact form for workshop owners interested in learning more about selling to AutoCap. This form collects essential information for initial qualification and routes inquiries to the M&A team.

### 1.2 Goals
- Capture qualified leads from workshop owners
- Collect enough information for initial assessment (workshop size, location, revenue)
- Provide a confidential, low-pressure inquiry process
- Route submissions to nicklas.knape@autocapgroup.se

### 1.3 Non-Goals
- Does NOT commit the workshop owner to any agreement
- Does NOT request financial details beyond approximate revenue
- Does NOT include valuation calculators or pricing

### 1.4 User Story
As a workshop owner who is interested in exploring options,
I want to submit a confidential inquiry without obligation,
So that I can start a conversation with AutoCap about potentially selling my business.

---

## 2. Acceptance Criteria

### AC-001: Page Structure and Navigation

GIVEN I navigate from /entrepreneurs/why
WHEN I click "Start a confidential conversation"
THEN I am taken to `/entrepreneurs/contact`
  AND I see a breadcrumb: Home → Entrepreneurs → Let's Talk
  AND I see the page title "Let's Talk"
  AND I see reassuring subtext about confidentiality and no obligation

---

### AC-002: Form Fields - Required Information

GIVEN I am on the entrepreneur contact page
WHEN I view the form
THEN I see the following required fields:
  - Your name (text input)
  - Workshop name (text input)
  - City / region (text input)
  - Approximate annual revenue (dropdown: <5 / 5-15 / 15-50 / >50 MSEK)
  - Email (email input with validation)
  - Phone (tel input)
  AND all fields are clearly marked as required

---

### AC-003: Form Fields - Optional Message

GIVEN I am filling out the form
WHEN I view the optional fields
THEN I see a textarea labeled "Anything you'd like us to know"
  AND it is clearly marked as optional
  AND it allows multi-line text entry

---

### AC-004: GDPR Consent Checkbox

GIVEN I am completing the form
WHEN I scroll to the bottom
THEN I see a required checkbox for GDPR consent
  AND it includes text about data processing and privacy
  AND it links to the privacy policy
  AND I cannot submit without checking it

---

### AC-005: Form Validation - Required Fields

GIVEN I attempt to submit the form with empty required fields
WHEN I click the submit button
THEN the form does NOT submit
  AND I see validation error messages for each empty required field
  AND the first invalid field receives focus

---

### AC-006: Form Validation - Email Format

GIVEN I enter an invalid email address (e.g., "notanemail")
WHEN I attempt to submit
THEN I see an error message "Please enter a valid email address"
  AND the form does NOT submit

---

### AC-007: Form Validation - Phone Format

GIVEN I enter a phone number
WHEN I type in the phone field
THEN it accepts numbers, spaces, hyphens, and +
  AND it validates Swedish phone number format

---

### AC-008: Form Submission - Success

GIVEN I have filled out all required fields correctly
WHEN I click "Send enquiry"
THEN the form submits successfully
  AND I see a success message: "Thank you. Your enquiry has been received. A member of our team will be in touch within two business days. Everything you've shared is treated in strict confidence."
  AND the form fields are cleared
  AND an email notification is sent to nicklas.knape@autocapgroup.se

---

### AC-009: Form Submission - Error Handling

GIVEN the form submission fails (network error, server error)
WHEN the error occurs
THEN I see a user-friendly error message
  AND my form data is preserved (not lost)
  AND I can retry the submission

---

### AC-010: Privacy and Confidentiality Messaging

GIVEN I am viewing the form page
WHEN I read the page header
THEN I see prominent messaging about confidentiality
  AND I see "no obligation" messaging
  AND I see "strict confidence" guarantees

---

### AC-011: Responsive Design - Mobile

GIVEN I am on a mobile device (320px-767px)
WHEN I view the form
THEN all form fields display in a single column
  AND inputs are full-width and easily tappable
  AND the submit button is full-width
  AND all text is readable without zooming

---

### AC-012: Responsive Design - Desktop

GIVEN I am on a desktop device (1024px+)
WHEN I view the form
THEN the form is centered with max-width of 2xl (672px)
  AND fields have appropriate spacing
  AND the layout is clean and professional

---

### AC-013: Accessibility

GIVEN I am using assistive technology
WHEN I interact with the form
THEN all fields have proper labels
  AND error messages are announced to screen readers
  AND the form is keyboard navigable
  AND focus states are clearly visible

---

## 3. Technical Specifications

### 3.1 Route
- Path: `/entrepreneurs/contact`
- File: `src/app/entrepreneurs/contact/page.tsx`

### 3.2 Form Fields Schema
```typescript
{
  name: string (required, min 2 chars)
  workshopName: string (required, min 2 chars)
  city: string (required, min 2 chars)
  annualRevenue: "<5 MSEK" | "5-15 MSEK" | "15-50 MSEK" | ">50 MSEK" (required)
  email: string (required, valid email format)
  phone: string (required, valid phone format)
  message?: string (optional)
  gdprConsent: boolean (required, must be true)
}
```

### 3.3 Components
- `Breadcrumb` - Navigation
- `EntrepreneurContactForm` - Form component with validation
- Uses React Hook Form for form state
- Uses Zod for validation

### 3.4 Email Routing
- Recipient: nicklas.knape@autocapgroup.se
- Subject: "New Workshop Owner Enquiry - [Workshop Name]"
- Include all form data in email body

### 3.5 SEO Metadata
```typescript
{
  title: 'Contact Us · For Workshop Owners',
  description: 'Start a confidential conversation about selling your workshop to AutoCap.'
}
```

---

## 4. Design Specifications

### 4.1 Colors
- Background: Birch (#D8E4DC)
- Form container: White with subtle shadow
- Submit button: AutoCap Red gradient (#C8102E to #A00D25)

### 4.2 Form Styling
- Input fields: Rounded borders, focus ring in AutoCap Red
- Labels: Nordic Black, font-medium
- Error messages: Red text below field
- Success message: Green background with white text

---

## 5. Traceability Matrix

| Criterion | Test File | Test Name | Status |
|-----------|-----------|-----------|--------|
| AC-001 | TBD | Page loads with correct navigation | ⏳ Pending |
| AC-002 | TBD | All required fields are present | ⏳ Pending |
| AC-003 | TBD | Optional message field works | ⏳ Pending |
| AC-004 | TBD | GDPR consent checkbox required | ⏳ Pending |
| AC-005-007 | TBD | Form validation works correctly | ⏳ Pending |
| AC-008 | TBD | Successful submission shows confirmation | ⏳ Pending |
| AC-009 | TBD | Error handling preserves data | ⏳ Pending |
| AC-010 | TBD | Confidentiality messaging displayed | ⏳ Pending |
| AC-011-012 | TBD | Responsive design works | ⏳ Pending |
| AC-013 | TBD | Accessibility requirements met | ⏳ Pending |

---

## 6. Dependencies

- React Hook Form library
- Zod validation library
- Email service configured
- Privacy policy page exists for GDPR link
- Breadcrumb component

---

## 7. Revision History

| Date | Version | Changes | Author |
|------|---------|---------|--------|
| 2026-04-26 | 1.0 | Retrospective spec created | Alex Chen |
