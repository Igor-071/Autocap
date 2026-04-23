import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'News & Media · AutoCap Group',
  description:
    "Latest news, press releases, and insights from AutoCap Group - building Sweden's tire services platform.",
}

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
