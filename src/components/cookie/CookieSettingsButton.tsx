'use client'

import { useCookieConsentContext } from './CookieConsentProvider'

export function CookieSettingsButton() {
  const context = useCookieConsentContext()

  const handleClick = () => {
    if (context) {
      context.openPreferences()
    }
  }

  return (
    <button
      onClick={handleClick}
      className="text-left text-sm text-gray-400 transition-colors hover:text-white"
    >
      Cookie Settings
    </button>
  )
}
