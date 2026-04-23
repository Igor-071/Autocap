import type { Metadata } from 'next'
import { Breadcrumb } from '@/components/entrepreneurs/Breadcrumb'
import { InvestorContactForm } from '@/components/investors/InvestorContactForm'
import { investorsContent } from '@/content/investors'

export const metadata: Metadata = {
  title: 'Investor Relations · AutoCap Group',
  description: 'Interested in the AutoCap opportunity? Contact our investor relations team.',
}

export default function InvestorsContactPage() {
  const { contact } = investorsContent

  return (
    <main className="min-h-screen bg-[#C9D8E8]">
      {/* Page Header */}
      <section className="px-6 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-3xl">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Investors', href: '/investors' },
              { label: 'Investor Relations' },
            ]}
          />
          <div className="text-center">
            <h1 className="mb-6 text-4xl font-bold text-[#1C1C1E] md:text-5xl">
              {contact.title}
            </h1>
            <p className="text-lg leading-relaxed text-gray-700">{contact.subtext}</p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="px-6 pb-20 md:px-8">
        <div className="mx-auto max-w-2xl">
          <InvestorContactForm successMessage={contact.successMessage} />
        </div>
      </section>
    </main>
  )
}
