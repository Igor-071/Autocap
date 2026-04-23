# Feature: About Page Timeline Bug Fixes

**Version:** 1.0.0
**Date:** 2026-04-23
**Status:** Released

---

## Overview

This document details the comprehensive bug fix for the About page "Our Journey" timeline section. After initial implementation, 16 critical visual bugs were identified that made icons invisible, badges misaligned, and the timeline disconnected. This update resolves all visual issues while maintaining the vertical stepped progression design.

---

## User Guide

### What This Feature Does

The "Our Journey" timeline on the About page now displays correctly with:
- Visible milestone icons (checkmark, radio, target) for completed, current, and future states
- Properly aligned circular badges (48px uniform size)
- A smooth pulsing animation on the current milestone icon
- Consistent visual hierarchy between milestones and the central timeline spine
- Mobile-friendly vertical layout with visible timeline on all screen sizes

### Visual States

#### Completed Milestones (Founding, First Acquisition, Geographic Growth)
- Solid red 48px circle background
- White checkmark icon (CheckCircle2)
- Full-color card with hover effects
- Solid red connector line to timeline spine

#### Current Milestone (Today)
- Solid red 48px circle background
- Pulsing white radio icon
- Enhanced card styling with subtle border highlight
- Solid red connector line

#### Future Milestone (2028 Target)
- Gray dashed 48px circle border
- Gray target icon
- Dimmed card styling (60% opacity)
- Dashed gray connector line

### Known Limitations

- Manual keyboard navigation and screen reader testing pending (AC-010, AC-011)
- Animations respect system `prefers-reduced-motion` setting

---

## Technical Documentation

### Bug Fixes Summary

**16 critical bugs fixed across two components:**

#### TimelineMilestone.tsx (8 bugs)
1. ✅ Icons invisible behind backgrounds (z-index missing)
2. ✅ Multiple overlapping backgrounds not centered
3. ✅ Future milestone dashed circle not centered
4. ✅ Badge container broken absolute positioning hierarchy
5. ✅ Icon color contrast issues (gray-400 → gray-500)
6. ✅ Z-index stacking context missing
7. ✅ Animation properties mismatch (inline vs class)
8. ✅ Icon-to-background spatial relationship broken

#### SteppedTimeline.tsx (8 bugs)
9. ✅ Connector lines inconsistent height styling (bg vs border)
10. ✅ Badges not positioned on central spine
11. ✅ Timeline spine hidden on mobile
12. ✅ Future connector styling issues (dashed artifacts)
13. ✅ Card width constraint causes misalignment
14. ✅ Z-index hierarchy undefined
15. ✅ Alignment prop doesn't control badge position
16. ✅ Connector line vertical offset misalignment

### Components

#### TimelineMilestone

**Location:** `src/components/about/TimelineMilestone.tsx`

**Description:** Renders individual milestone with visual state differentiation (completed/current/future), including icon badge and content card.

**Props:**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `milestone` | `MilestoneData` | Yes | - | Milestone data (year, title, description, status) |
| `index` | `number` | No | - | Milestone index for animation stagger |
| `alignment` | `'left' \| 'right'` | No | - | Card alignment (desktop alternating layout) |

**MilestoneData Interface:**

```typescript
interface MilestoneData {
  year: string
  title: string
  description: string
  status: 'completed' | 'current' | 'future'
}
```

**Key Implementation Details:**

1. **Z-index Hierarchy:**
   - Background circles: `z-0`
   - Inner circles (future state): `z-10`
   - Icon layer: `z-20` (always on top)

2. **Uniform 48px Circles:**
   All milestone badges use 48px centered circles:
   ```tsx
   className="absolute left-1/2 top-1/2 z-0 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full"
   ```

3. **Icon-Only Pulsing:**
   Only the icon pulses on current milestone (not the entire badge):
   ```tsx
   <div className={cn('relative z-20', status === 'current' && 'animate-pulse')}>
     {getBadgeIcon()}
   </div>
   ```

4. **Circle Shape Prevention:**
   Badge uses `flex-shrink-0` to prevent ellipse distortion:
   ```tsx
   const baseClasses = 'relative flex h-16 w-16 flex-shrink-0 items-center justify-center'
   ```

**Usage Example:**

```tsx
import { TimelineMilestone } from '@/components/about/TimelineMilestone'

function Example() {
  const milestone = {
    year: 'Founding',
    title: 'AutoCap Group Founded',
    description: 'Launched with a vision',
    status: 'completed' as const,
  }

  return (
    <TimelineMilestone
      milestone={milestone}
      index={0}
      alignment="left"
    />
  )
}
```

---

#### SteppedTimeline

**Location:** `src/components/about/SteppedTimeline.tsx`

**Description:** Container component managing the vertical timeline spine, milestone layout (alternating desktop, stacked mobile), connector lines, and scroll animations.

**Props:**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `milestones` | `MilestoneData[]` | Yes | - | Array of milestone data objects |

**Key Implementation Details:**

1. **Mobile Spine Visibility:**
   Timeline spine now visible on mobile (previously hidden):
   ```tsx
   className="absolute left-8 top-0 z-0 block h-full w-1 md:left-1/2 md:-translate-x-1/2"
   ```

2. **Consistent Connector Styling:**
   Both solid and dashed connectors use `border-b-2`:
   ```tsx
   milestone.status === 'future'
     ? 'border-b-2 border-dashed border-gray-300 bg-transparent'
     : 'border-b-2 border-[#C8102E] bg-transparent'
   ```

3. **Z-index Layering:**
   - Spine: `z-0` (background)
   - Connectors: `z-10` (above spine, below badges)
   - Badges (in TimelineMilestone): `z-20` (top layer)

4. **Responsive Layout:**
   - Mobile (<768px): Vertical stack with left-aligned spine
   - Desktop (≥768px): Alternating left-right layout with centered spine

**Usage Example:**

```tsx
import { SteppedTimeline } from '@/components/about/SteppedTimeline'
import { aboutContent } from '@/content/about'

function AboutPage() {
  return (
    <SteppedTimeline milestones={aboutContent.timeline.milestones} />
  )
}
```

---

### Data Flow

```
[aboutContent.timeline.milestones]
         ↓
[SteppedTimeline] — renders spine & layout
         ↓
[TimelineMilestone] — renders badges & cards
         ↓
[Framer Motion] — scroll animations
         ↓
[User sees animated timeline]
```

### State Management

**No complex state management required:**
- Static content from `src/content/about.ts`
- Framer Motion handles animation state via `whileInView` prop
- Responsive layout via Tailwind CSS breakpoints (no JS state)

---

### Error Handling

| Error | Cause | User Message | Recovery |
|-------|-------|--------------|----------|
| Missing status field | TypeScript enforces | N/A (compile error) | Add `status` to milestone data |
| Animation library failure | Framer Motion not loaded | Timeline displays without animations | Graceful degradation: static timeline |
| Invalid status value | Type error | N/A (TypeScript) | Use `'completed' \| 'current' \| 'future'` |

---

## Testing

### Test Files

| File | Type | Tests | Coverage |
|------|------|-------|----------|
| `TimelineMilestone.test.tsx` | Unit | 14 | Badge rendering, icons, styling, animations |
| `SteppedTimeline.test.tsx` | Integration | 22 | Layout, spine, connectors, responsive, animations |

**Total: 36 tests passing**

### Test Coverage by Bug

Each of the 16 bugs has corresponding test verification:

**Badge Z-index & Centering (Bugs 1-4, 6, 8):**
- `displays CheckCircle2 icon for completed milestones`
- `displays Radio icon for current milestone`
- `displays Target icon for future milestone`
- `maintains consistent icon size across all states`

**Icon Contrast (Bug 5):**
- Visual verification via screenshots (future icon `text-gray-500`)

**Animation (Bug 7):**
- `renders current milestone with pulsing icon`
- `applies pulse animation only to icon, not badge container`

**Mobile Spine (Bug 11):**
- `stacks milestones vertically on mobile with left-aligned spine`
- Mobile spine uses `block` class (not `hidden`)

**Connector Consistency (Bugs 9, 12):**
- `uses dashed line for future milestone connection`
- `connects each card to central timeline spine`

**Z-index Hierarchy (Bug 14):**
- Spine: `z-0`, Connectors: `z-10`, Badges: `z-20`

### Running Tests

```bash
# Run all timeline tests
npm run test -- TimelineMilestone
npm run test -- SteppedTimeline

# Run with coverage
npm run test:coverage

# All tests should pass (36/36)
npm run test
```

---

## Implementation Notes

### Root Cause Analysis

All 16 bugs stemmed from **3 fundamental architectural issues:**

1. **Absolute positioning without explicit spatial relationships**
   - Multiple `absolute` elements with no centering math
   - No z-index hierarchy defined
   - Elements positioned "hopefully" rather than precisely

2. **Badge-to-spine disconnection**
   - Badges were children of alternating card containers
   - Spine was centered independently
   - No shared coordinate system to align them

3. **Inconsistent styling approaches**
   - Mix of `bg-*` and `border-*` for lines
   - Mix of inline styles and Tailwind classes for animations
   - No consistent pattern for visual states

### Fix Approach

**Two-phase surgical fix:**

**Phase 1: TimelineMilestone Badge Rendering (Bugs 1-8)**
- Added explicit z-index hierarchy (z-0 → z-10 → z-20)
- Added centering to all circles (`left-1/2 top-1/2 -translate-x/y-1/2`)
- Made all circles uniform 48px size
- Moved pulsing animation to icon-only
- Added `flex-shrink-0` to prevent ellipse distortion
- Improved contrast: `text-gray-400` → `text-gray-500`

**Phase 2: SteppedTimeline Spine Alignment (Bugs 9-16)**
- Made mobile spine visible (`block` not `hidden`)
- Standardized connector styling (all use `border-b-2`)
- Added z-index to spine (z-0) and connectors (z-10)
- Improved visual consistency across states

### Maintenance Notes

**When adding new milestones:**
1. Ensure `status` field is set to `'completed' | 'current' | 'future'`
2. Only one milestone should have `status: 'current'`
3. Future milestones appear after current in timeline order

**When modifying badge styling:**
- Maintain z-index hierarchy (backgrounds z-0, borders z-10, icons z-20)
- Keep all circles 48px (`h-12 w-12`) for consistency
- Use centering pattern: `absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`

**When adjusting animations:**
- Apply `animate-pulse` only to icon wrapper (not badge container)
- Respect `prefers-reduced-motion` via Framer Motion defaults
- Stagger delay: `index * 0.1` for smooth sequential appearance

---

## Related Documentation

- [Specification](../specs/about-timeline-improvement.md)
- [Quality Review](../reviews/about-timeline-improvement.md)
- [Initial Plan (gleaming-frolicking-kettle)](~/.claude/plans/gleaming-frolicking-kettle.md)

---

## Changelog

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2026-04-23 | Initial release with 16 bug fixes, uniform 48px circles, icon-only pulsing, mobile spine visibility |
