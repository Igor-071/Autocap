# Feature Documentation: Homepage + Portfolio

**Status:** ✅ COMPLETE
**Date Completed:** 2026-04-22
**Mode:** Prototype
**Developer:** Claude Sonnet 4.5 + User

---

## Overview

Complete homepage and portfolio section for AutoCap Group website, featuring top-tier design, interactive Mapbox integration, and 12 workshop detail pages. Built with Next.js 15, Tailwind CSS v4, and Framer Motion animations.

---

## Features Delivered

### Homepage Sections

1. **Hero Section**
   - Full-viewport with image background
   - Headline: "The Nordic Tire Services Platform"
   - Two CTAs (Entrepreneurs, Investors)
   - Smooth fade-in animation with Framer Motion

2. **KPI Ticker**
   - 4 animated counters (workshops, people, revenue, target)
   - Scroll-triggered count-up animation
   - Ease-out cubic easing
   - Dark Nordic Black background

3. **Audience Cards**
   - 3 cards for different audiences
   - Brand colors: Birch (#D8E4DC), Fjord (#C9D8E8), Stone (#E4E2DE)
   - Hover effects: lift + shadow
   - Responsive grid

4. **CEO Quote**
   - David Knape vision statement
   - Linen White background
   - Elegant typography
   - Scroll-triggered reveal

5. **Footer CTA**
   - Call-to-action for contact
   - AutoCap Red button
   - Clean, centered layout

### Portfolio Section

1. **Interactive Map**
   - Mapbox GL integration
   - 13 workshop markers with AutoCap Red
   - Custom tooltips on hover/click
   - Zoom/pan navigation controls
   - Loading state with spinner
   - Error handling with fallback
   - Responsive height (500px mobile, 600px desktop)

2. **Workshop Grid**
   - 12 workshop cards in responsive grid
   - Stone background (#E4E2DE)
   - Hover effects
   - Links to detail pages

3. **Workshop Detail Pages**
   - 12 dynamic pages (`/portfolio/[slug]`)
   - Breadcrumb navigation
   - Full workshop information
   - Badge with acquisition year
   - Link to local website
   - CTA for entrepreneurs
   - SEO metadata

### Layout Components

1. **Header**
   - Sticky navigation
   - Mobile hamburger menu
   - Active page highlighting
   - AutoCap logo

2. **Footer**
   - Company information
   - Navigation links organized by section
   - Nordic Black background

---

## Technical Implementation

### Stack

- **Framework:** Next.js 15.5.15 (App Router)
- **React:** 19.1.0
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Maps:** Mapbox GL JS
- **TypeScript:** Full type safety
- **Icons:** Lucide React

### File Structure

```
src/
├── app/
│   ├── layout.tsx                 # Root layout with Header/Footer
│   ├── page.tsx                   # Homepage
│   ├── portfolio/
│   │   ├── page.tsx              # Portfolio landing
│   │   └── [slug]/
│   │       ├── page.tsx          # Workshop detail
│   │       └── not-found.tsx     # 404 page
│   ├── about/page.tsx            # Placeholder
│   ├── entrepreneurs/page.tsx    # Placeholder
│   ├── investors/page.tsx        # Placeholder
│   ├── news/page.tsx             # Placeholder
│   └── contact/page.tsx          # Placeholder
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── KpiTicker.tsx
│   │   ├── AudienceCards.tsx
│   │   ├── CeoQuote.tsx
│   │   └── FooterCta.tsx
│   └── portfolio/
│       ├── WorkshopMap.tsx
│       ├── WorkshopCard.tsx
│       └── WorkshopGrid.tsx
├── hooks/
│   ├── useCountUp.ts             # Counter animation
│   └── useScrollAnimation.ts     # Scroll triggers
├── content/
│   ├── homepage.ts               # Homepage content
│   ├── workshops.ts              # Workshop data
│   └── index.ts                  # Exports
├── lib/
│   └── constants.ts              # Brand colors, nav
└── types/
    └── strapi.ts                 # Strapi types
```

### Data Structure (Strapi-Ready)

All content is structured to match Strapi's response format:

```typescript
// Homepage content
interface HomepageContent {
  hero: { headline, subheadline, ctas... }
  kpis: Array<{ value, label, prefix?, suffix? }>
  ceoQuote: { text, attribution }
  footerCta: { headline, subtext, ctaText, ctaLink }
}

// Workshop data
interface Workshop {
  id: number
  name: string
  slug: string
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

### Custom Hooks

**useCountUp**
- Animates numbers from 0 to target value
- Ease-out cubic easing
- Duration: 2 seconds
- Supports prefix/suffix

**useScrollAnimation**
- Intersection Observer wrapper
- Triggers animations on scroll
- Respects `prefers-reduced-motion`
- Configurable threshold and trigger-once

---

## Design System

### Brand Colors

```css
--autocap-red: #C8102E        /* Primary CTAs, markers */
--nordic-black: #1C1C1E       /* Dark backgrounds */
--birch: #D8E4DC              /* Entrepreneurs */
--fjord: #C9D8E8              /* Investors */
--stone: #E4E2DE              /* Portfolio */
--ember: #F0DADA              /* News */
--dusk: #EDE4D8               /* About */
--linen-white: #F5F0EB        /* Light sections */
```

### Typography

- **Font:** Inter (variable)
- **Hero Headline:** 5xl-7xl (72px desktop)
- **Section Headings:** 3xl-4xl
- **Body:** lg (18px)
- **Line Height:** 1.6-1.8 for readability

### Spacing

- Section padding: 80-120px vertical (desktop), 40-60px (mobile)
- Component spacing: 16px/24px/32px increments
- Max content width: 1400px (centered)

### Animations

- **Duration:** 200-300ms for interactions, 500-800ms for reveals
- **Easing:** ease-out for natural deceleration
- **Hover:** Lift (translateY -4px), shadow increase
- **Scroll:** Fade in + translateY

---

## Responsive Breakpoints

| Breakpoint | Width | Layout |
|------------|-------|--------|
| Mobile | 320-767px | Single column, hamburger menu |
| Tablet | 768-1023px | 2 columns, abbreviated nav |
| Desktop | 1024px+ | 3-4 columns, full nav |

---

## SEO & Metadata

### Homepage
- **Title:** AutoCap Group · The Nordic Tire Services Platform
- **Description:** AutoCap Group acquires and operates independent tire service centres across Sweden. Preserving local brands. Empowering entrepreneurs. Building scale.

### Portfolio
- **Title:** Our Portfolio · AutoCap Group
- **Description:** 12 tire service workshops across Sweden. Explore AutoCap Group's growing portfolio.

### Workshop Details
- **Title:** [Workshop Name] · AutoCap Group
- **Description:** [Workshop description]

---

## Environment Variables

```env
NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_token_here
```

Get token from: https://account.mapbox.com/access-tokens/

---

## Known Limitations (Prototype Mode)

1. **Test Suite:** Not implemented (production phase)
2. **Hero Image:** Placeholder - needs real workshop photo
3. **Content Pages:** About, Entrepreneurs, Investors are placeholders
4. **Forms:** Contact forms not implemented
5. **CMS:** Mock data - Strapi integration in production phase

---

## Performance

- **Build Time:** ~6 seconds
- **Static Pages:** 23 pages pre-rendered
- **Dev Server:** ~850ms startup
- **Bundle:** Optimized with Next.js automatic code splitting

---

## Accessibility

- ✅ Semantic HTML (header, nav, main, section, footer)
- ✅ ARIA labels for icon buttons
- ✅ Keyboard navigation support
- ✅ Focus indicators styled
- ✅ Alt text for images
- ✅ Proper heading hierarchy (h1 → h6)
- ✅ Touch targets minimum 44x44px
- ✅ Respects `prefers-reduced-motion`

---

## Browser Support

- Chrome (latest)
- Safari (latest)
- Firefox (latest)
- Mobile Safari (iOS)
- Chrome Mobile (Android)

---

## Usage Examples

### Accessing Homepage Content

```tsx
import { homepageContent, audienceCards } from '@/content/homepage'

// Use in components
<Hero {...homepageContent.hero} />
<KpiTicker kpis={homepageContent.kpis} />
```

### Accessing Workshop Data

```tsx
import { workshops, getWorkshopBySlug, getWorkshopsByRegion } from '@/content/workshops'

// Get all workshops
const allWorkshops = workshops

// Get by slug
const workshop = getWorkshopBySlug('dackpoint-molndal')

// Get by region
const stockholmWorkshops = getWorkshopsByRegion('Stockholm') // 10 workshops
```

### Using Custom Hooks

```tsx
import { useCountUp } from '@/hooks/useCountUp'

const counter = useCountUp({
  end: 50,
  duration: 2000,
  prefix: '~',
})

// Trigger animation
useEffect(() => {
  if (isInView) counter.animate()
}, [isInView])
```

---

## Maintenance

### Adding New Workshops

1. Add workshop data to `src/content/workshops.ts`
2. Ensure `slug` is unique and URL-friendly
3. Page will be auto-generated on build

### Updating Content

1. Edit `src/content/homepage.ts` for homepage changes
2. Edit `src/content/workshops.ts` for workshop data
3. Changes hot-reload in development

### Customizing Colors

1. Edit `src/lib/constants.ts` for brand colors
2. Update Tailwind config if adding new colors
3. Update `src/app/globals.css` for CSS variables

---

## Future Enhancements (Production Phase)

1. **Testing:** Add Vitest + React Testing Library + Playwright
2. **CMS:** Integrate with Strapi backend
3. **Content Pages:** Build out About, Entrepreneurs, Investors
4. **Forms:** Add contact forms with validation
5. **News:** Implement news/media CMS
6. **Analytics:** Add tracking (Google Analytics, Plausible, etc.)
7. **Performance:** Lighthouse score > 90
8. **Accessibility:** WCAG 2.1 AA compliance audit
9. **i18n:** Swedish language support

---

## Support

For questions or issues:
- Check console for errors (F12)
- Review this documentation
- Check the spec: `docs/specs/homepage-portfolio.md`

---

**Feature Status:** ✅ COMPLETE and APPROVED
**Ready for:** User testing, stakeholder demo, production deployment preparation
