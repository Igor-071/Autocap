'use client'

import { createContext, useContext } from 'react'
import { useCookieConsent, type UseCookieConsentReturn } from '@/hooks/useCookieConsent'

const CookieConsentContext = createContext<UseCookieConsentReturn | null>(null)

export function CookieConsentProvider({ children }: { children: React.ReactNode }) {
  const cookieConsent = useCookieConsent()

  return (
    <CookieConsentContext.Provider value={cookieConsent}>
      {children}
    </CookieConsentContext.Provider>
  )
}

export function useCookieConsentContext() {
  const context = useContext(CookieConsentContext)
  return context
}
