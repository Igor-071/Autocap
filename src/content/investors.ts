// Investors section content
export interface InvestorsContent {
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

export const investorsContent: InvestorsContent = {
  landing: {
    headline: 'A platform built for returns in a fragmented market',
    subheadline:
      "AutoCap Group is consolidating Sweden's independent tire service industry - acquiring proven local businesses, applying operational discipline, and building a platform positioned for institutional partnership.",
    ctaText: 'View the investment case',
    ctaLink: '/investors/why',
  },
  pillars: [
    {
      id: 1,
      title: 'Fragmented market, consolidation opportunity',
      description:
        'Sweden has ~500 independent tire workshops with top players holding <5% market share. This presents a classic roll-up thesis: acquire local market leaders and add value through operational scale while preserving the local brands that customers trust.',
    },
    {
      id: 2,
      title: 'Resilient, recurring revenue business',
      description:
        'Tire services are non-discretionary and safety-critical. Seasonal demand for winter and summer tire changes creates predictable, recurring revenue patterns. Weather happens every year - this is a stable, cash-generative business with natural resilience.',
    },
    {
      id: 3,
      title: 'Roll-up playbook with proven economics',
      description:
        'We acquire profitable workshops at reasonable multiples, improve margins through shared procurement and centralized back-office functions, and retain local brands and teams to preserve customer relationships. Growth through acquisition, value through integration.',
    },
    {
      id: 4,
      title: 'Founder-led execution',
      description:
        'We are operators, not financial engineers. The founding team brings deep industry experience and operational know-how. Our incentives are aligned with long-term value creation, not short-term extraction. We are building a business, not flipping assets.',
    },
  ],
  closingBlock: {
    title: 'Built for the long term',
    description:
      "We're not chasing the next trend. We're building a durable business in an essential industry. AutoCap Group is a platform for sustainable growth - through disciplined acquisition, operational improvement, and a relentless focus on serving customers well.",
  },
  metrics: {
    intro: 'Our track record since founding',
    kpis: [
      {
        value: '12',
        label: 'Workshops acquired',
        icon: 'Building2',
      },
      {
        value: '~50',
        label: 'Employees across Sweden',
        icon: 'Users',
      },
      {
        value: '~200',
        label: 'MSEK revenue run-rate',
        icon: 'TrendingUp',
      },
      {
        value: '50+',
        label: 'Workshop target by 2028',
        icon: 'Target',
      },
      {
        value: '2',
        label: 'Regions: Stockholm, Västra Götaland',
        icon: 'MapPin',
      },
    ],
    roadmap:
      "We're in the early innings. The next phase focuses on deepening our presence in existing regions, expanding to new geographies, and continuing to build operational capabilities that create value for workshop owners, employees, and investors.",
  },
  contact: {
    title: 'Investor Relations',
    subtext:
      "Interested in the AutoCap opportunity? We'd like to hear from you. All enquiries are treated confidentially.",
    successMessage:
      'Thank you for your interest. A member of our investor relations team will be in touch within two business days. All enquiries are treated confidentially.',
  },
}
