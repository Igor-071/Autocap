import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { BackToTop } from '@/components/layout/BackToTop'
import { CookieConsent } from '@/components/cookie/CookieConsent'
import { CookieConsentProvider } from '@/components/cookie/CookieConsentProvider'
import { ComingSoon, comingSoonMetadata } from '@/components/coming-soon/ComingSoon'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const isComingSoon = process.env.NEXT_PUBLIC_COMING_SOON === 'true'

export const metadata: Metadata = isComingSoon
  ? comingSoonMetadata
  : {
      title: 'AutoCap Group · The Nordic Tire Services Platform',
      description:
        'AutoCap Group acquires and operates independent tire service centres across Sweden. Preserving local brands. Empowering entrepreneurs. Building scale.',
    }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  if (isComingSoon) {
    return (
      <html lang="en" className={inter.variable}>
        <body className="antialiased">
          <ComingSoon />
        </body>
      </html>
    )
  }

  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <CookieConsentProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <BackToTop />
          <CookieConsent />
        </CookieConsentProvider>
      </body>
    </html>
  )
}
