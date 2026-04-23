/**
 * Main Contact Page Content
 */

export interface ContactCardData {
  title: string
  description: string
  ctaText: string
  ctaLink: string
  bgColor: string
}

export interface CompanyContactInfo {
  email: string
  address?: string
  businessHours?: string
}

export interface ContactContent {
  hero: {
    title: string
    description: string
  }
  routing: {
    text: string
  }
  specializedCards: ContactCardData[]
  generalInquiry: {
    title: string
    successMessage: string
  }
  companyInfo: CompanyContactInfo
}

export const contactContent: ContactContent = {
  hero: {
    title: 'Get in touch',
    description:
      "Whether you have a question, a proposal, or just want to learn more about what we're building - we're happy to hear from you.",
  },
  routing: {
    text: 'For specific enquiries:',
  },
  specializedCards: [
    {
      title: 'For Investors',
      description:
        'Interested in the AutoCap opportunity? Learn about our investment case and growth strategy.',
      ctaText: 'Investor Relations ',
      ctaLink: '/investors/contact',
      bgColor: 'bg-[#D8E4DC]', // Investor green
    },
    {
      title: 'For Workshop Owners',
      description:
        "Thinking about the next chapter for your tire workshop? Let's have a confidential conversation.",
      ctaText: 'Start a Conversation ',
      ctaLink: '/entrepreneurs/contact',
      bgColor: 'bg-[#C9D8E8]', // Entrepreneur blue
    },
  ],
  generalInquiry: {
    title: 'General Inquiry',
    successMessage:
      "Thank you for your message. We'll get back to you within 2 business days.",
  },
  companyInfo: {
    email: 'kontakt@autocapgroup.se',
    address: 'AutoCap Group Sweden AB · Nybrogatan 7 · Stockholm, Sweden',
    businessHours: undefined,
  },
}
