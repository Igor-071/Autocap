export interface NewsArticle {
  id: string
  title: string
  excerpt: string
  publishDate: string // ISO format "2026-04-15"
  author: string
  category: 'Company News' | 'Press Release' | 'Industry Insights' | 'Media Coverage'
  imageUrl?: string
  slug: string // for future individual pages
  readTimeMinutes: number
  order: number
}

export interface NewsContent {
  articles: NewsArticle[]
  pageMetadata: {
    title: string
    description: string
  }
}

export const newsContent: NewsContent = {
  articles: [
    {
      id: 'news-001',
      title: 'AutoCap Group Acquires Svenska Däckgruppen',
      excerpt: 'We are excited to announce the acquisition of Svenska Däckgruppen, expanding our presence in the Västra Götaland region. This strategic move strengthens our position as Sweden\'s leading tire services platform.',
      publishDate: '2026-01-15',
      author: 'AutoCap Group',
      category: 'Press Release',
      slug: 'autocap-acquires-svenska-dackgruppen',
      readTimeMinutes: 3,
      order: 1,
    },
    {
      id: 'news-002',
      title: 'The Consolidation Dilemma: Why Local Brands Matter',
      excerpt: 'Industry consolidation doesn\'t mean losing what makes local workshops special. We explore how AutoCap\'s approach preserves brand identity while providing growth resources.',
      publishDate: '2025-12-20',
      author: 'Erik Johansson',
      category: 'Industry Insights',
      slug: 'consolidation-dilemma-local-brands',
      readTimeMinutes: 5,
      order: 2,
    },
    {
      id: 'news-003',
      title: 'AutoCap Expands to Västra Götaland Region',
      excerpt: 'Following strong growth in Stockholm and southern Sweden, we\'re bringing our partnership model to the west coast. Meet the workshop owners joining the AutoCap family.',
      publishDate: '2025-12-10',
      author: 'Maria Svensson',
      category: 'Company News',
      slug: 'autocap-expands-vastra-gotaland',
      readTimeMinutes: 4,
      order: 3,
    },
    {
      id: 'news-004',
      title: 'Feature: Workshop Owners on Succession Planning',
      excerpt: 'Dagens Industri interviews three AutoCap partners about navigating succession planning while preserving family legacy. A deep dive into the human side of business transitions.',
      publishDate: '2025-11-28',
      author: 'Dagens Industri',
      category: 'Media Coverage',
      slug: 'workshop-owners-succession-planning',
      readTimeMinutes: 6,
      order: 4,
    },
    {
      id: 'news-005',
      title: 'How We\'re Building Sweden\'s Tire Services Platform',
      excerpt: 'From our first partnership to becoming a multi-regional platform, we share the journey, challenges, and lessons learned in creating a new kind of automotive services company.',
      publishDate: '2025-10-15',
      author: 'AutoCap Leadership Team',
      category: 'Company News',
      slug: 'building-swedens-tire-services-platform',
      readTimeMinutes: 7,
      order: 5,
    },
  ],
  pageMetadata: {
    title: 'News & Media · AutoCap Group',
    description: 'Latest news, press releases, and insights from AutoCap Group - building Sweden\'s tire services platform.',
  },
}
