// Investors Case page content
export interface GrowthMilestone {
  period: string
  description: string
  status: 'completed' | 'target'
}

export interface InvestorsCaseContent {
  hero: {
    title: string
    subtitle: string
  }
  marketOpportunity: {
    title: string
    marketSize: string
    workshopCount: string
    consolidationOpportunity: string
    valueCreation: string
  }
  sixPillars: {
    sectionTitle: string
    pillars: Array<{
      id: number
      title: string
      description: string
      icon: string
    }>
  }
  growthMilestones: {
    sectionTitle: string
    milestones: readonly GrowthMilestone[]
    disclaimer: string
  }
}

export const investorsCaseContent: InvestorsCaseContent = {
  hero: {
    title: 'The Investment Case',
    subtitle: 'Building value through consolidation and operational excellence in a fragmented market',
  },
  marketOpportunity: {
    title: 'Market Opportunity',
    marketSize: 'SEK 15-20 billion',
    workshopCount: '~2,000 independent workshops',
    consolidationOpportunity:
      "Sweden's tire service market is highly fragmented with thousands of independent workshops. Top players hold less than 5% market share, creating a significant consolidation opportunity.",
    valueCreation:
      'AutoCap Group is uniquely positioned to capture value through strategic acquisitions, operational efficiency, and platform economics.',
  },
  sixPillars: {
    sectionTitle: 'The AutoCap Strategy — Six pillars of value creation',
    pillars: [
      {
        id: 1,
        title: 'Strategic Acquisitions',
        description:
          'Acquire profitable, well-managed workshops at reasonable multiples. Focus on businesses with strong local brands, loyal customer bases, and proven operations.',
        icon: 'Target',
      },
      {
        id: 2,
        title: 'Procurement Consolidation',
        description:
          'Leverage collective buying power to negotiate better terms with tire manufacturers and suppliers. Reduce cost of goods sold while maintaining quality standards.',
        icon: 'ShoppingCart',
      },
      {
        id: 3,
        title: 'Operational Efficiency',
        description:
          'Centralize back-office functions (accounting, HR, marketing) to eliminate redundancies. Implement best practices across the network while preserving local autonomy.',
        icon: 'Settings',
      },
      {
        id: 4,
        title: 'Data & Analytics',
        description:
          'Build a unified data platform to track performance, optimize inventory, and identify growth opportunities. Make data-driven decisions at scale.',
        icon: 'BarChart3',
      },
      {
        id: 5,
        title: 'Cross-Sell & Partnerships',
        description:
          'Introduce complementary services (wheel alignment, brakes, suspension) and form strategic partnerships with insurance companies and fleet operators.',
        icon: 'Users',
      },
      {
        id: 6,
        title: 'Customer Experience',
        description:
          'Invest in digital booking, transparent pricing, and consistent service quality. Build trust and loyalty across the platform while maintaining local brands.',
        icon: 'Heart',
      },
    ],
  },
  growthMilestones: {
    sectionTitle: 'Growth Milestones',
    milestones: [
      {
        period: 'H2 2025',
        description: 'Platform established. Three founding acquisitions completed.',
        status: 'completed',
      },
      {
        period: 'Q1 2026',
        description: 'Largest acquisition completed (7-unit Stockholm group).',
        status: 'completed',
      },
      {
        period: '2026',
        description: 'Scaling phase. Targeting 20+ workshops.',
        status: 'target',
      },
      {
        period: '2027',
        description: 'Regional expansion. Entering new markets in Sweden.',
        status: 'target',
      },
      {
        period: '2028',
        description: 'Platform maturity. 50+ workshops with full operational integration.',
        status: 'target',
      },
    ],
    disclaimer:
      'Detailed financial projections are not published publicly. Qualified investors receive comprehensive financial information through direct dialogue with our investor relations team.',
  },
}
