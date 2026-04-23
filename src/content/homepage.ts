/**
 * Homepage Content
 *
 * Source: docs/reference/website-copy-deck.docx
 * Last updated: 2026-04-22
 */

export interface HomepageContent {
  hero: {
    headline: string
    subheadline: string
    backgroundImage: string
    cta1Text: string
    cta1Link: string
    cta2Text: string
    cta2Link: string
  }
  kpis: Array<{
    value: number
    label: string
    prefix?: string
    suffix?: string
  }>
  ceoQuote: {
    text: string
    attribution: string
    photoUrl?: string
  }
  footerCta: {
    headline: string
    subtext: string
    ctaText: string
    ctaLink: string
  }
}

export const homepageContent: HomepageContent = {
  hero: {
    headline: "The Nordic Tire Services Platform",
    subheadline: "We acquire, operate and grow independent tire service centres across Sweden — preserving the brands that customers trust and the entrepreneurs who built them.",
    backgroundImage: "/images/hero-workshop.jpg", // Placeholder - will need actual image
    cta1Text: "For Entrepreneurs",
    cta1Link: "/entrepreneurs",
    cta2Text: "For Investors",
    cta2Link: "/investors",
  },
  kpis: [
    {
      value: 12,
      suffix: " Workshops",
      label: "Service centres and growing",
    },
    {
      value: 50,
      prefix: "~",
      label: "People across Sweden",
    },
    {
      value: 200,
      prefix: "~",
      suffix: " MSEK",
      label: "Revenue from Mälardalen to Västra Götaland",
    },
    {
      value: 50,
      label: "Targeted workshops by 2028",
    },
  ],
  ceoQuote: {
    text: "We're building something that didn't exist in this industry — a group where local workshop owners keep their identity, gain real operational support, and share in the upside of building something bigger together.",
    attribution: "David Knape, CEO & Co-Founder, AutoCap Group",
  },
  footerCta: {
    headline: "Ready to start a conversation?",
    subtext: "Whether you're a workshop owner, an investor, or simply curious — we'd like to hear from you.",
    ctaText: "Get in touch",
    ctaLink: "/contact",
  },
}

export interface AudienceCard {
  headline: string
  description: string
  ctaText: string
  ctaLink: string
  backgroundColor: string
}

export const audienceCards: AudienceCard[] = [
  {
    headline: "Thinking of selling your workshop?",
    description: "You built something valuable. We're here to help it grow - with your name still on the door.",
    ctaText: "Learn more ",
    ctaLink: "/entrepreneurs",
    backgroundColor: "#D8E4DC", // Birch
  },
  {
    headline: "A platform built for returns",
    description: "Fragmented market. Proven playbook. Founder-led execution. Explore the investment case.",
    ctaText: "View investment case ",
    ctaLink: "/investors",
    backgroundColor: "#C9D8E8", // Fjord
  },
  {
    headline: "12 workshops. One shared ambition.",
    description: "From Mölndal to Täby — meet the workshops that make up AutoCap Group.",
    ctaText: "See our portfolio ",
    ctaLink: "/portfolio",
    backgroundColor: "#E4E2DE", // Stone
  },
]
