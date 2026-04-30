'use client'

import { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'

interface LanguageSelectorProps {
  className?: string
}

type Language = 'en' | 'sv'

// Rectangular flag SVG components
const UKFlag = () => (
  <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="16" fill="#012169"/>
    <path d="M0 0L24 16M24 0L0 16" stroke="white" strokeWidth="3"/>
    <path d="M0 0L24 16M24 0L0 16" stroke="#C8102E" strokeWidth="2"/>
    <path d="M12 0V16M0 8H24" stroke="white" strokeWidth="5"/>
    <path d="M12 0V16M0 8H24" stroke="#C8102E" strokeWidth="3"/>
  </svg>
)

const SwedishFlag = () => (
  <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="16" fill="#006AA7"/>
    <rect x="7" width="3" height="16" fill="#FECC00"/>
    <rect y="6.5" width="24" height="3" fill="#FECC00"/>
  </svg>
)

const languages = {
  en: { flag: <UKFlag />, label: 'English' },
  sv: { flag: <SwedishFlag />, label: 'Swedish' },
} as const

export function LanguageSelector({ className = '' }: LanguageSelectorProps) {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('en')
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLanguageSelect = (language: Language) => {
    setSelectedLanguage(language)
    setIsOpen(false)
    // Phase 1: Visual only - no actual language switching
  }

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  // Close on Escape key
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsOpen(false)
    }
  }

  return (
    <div
      ref={dropdownRef}
      role="group"
      aria-label="Language selector (coming soon)"
      className={`relative ${className}`.trim()}
      onKeyDown={handleKeyDown}
    >
      {/* Dropdown Button */}
      <button
        type="button"
        onClick={handleToggle}
        aria-label={`Current language: ${languages[selectedLanguage].label}`}
        aria-haspopup="true"
        aria-expanded={isOpen}
        className="flex items-center gap-2 rounded px-3 py-2 transition-all duration-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#C8102E] focus:ring-offset-2 cursor-pointer"
      >
        <span aria-hidden="true">{languages[selectedLanguage].flag}</span>
        <ChevronDown
          className={`h-4 w-4 text-gray-600 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          role="menu"
          className="absolute right-0 top-full mt-2 w-48 rounded-lg bg-white py-2 shadow-lg ring-1 ring-gray-200 z-50"
        >
          {Object.entries(languages).map(([code, { flag, label }]) => (
            <button
              key={code}
              type="button"
              role="menuitem"
              onClick={() => handleLanguageSelect(code as Language)}
              aria-label={label}
              className={`flex w-full items-center gap-3 px-4 py-2 text-left text-sm transition-colors ${
                selectedLanguage === code
                  ? 'bg-gray-50 text-[#C8102E] font-semibold'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span aria-hidden="true">
                {flag}
              </span>
              <span>{label}</span>
              {selectedLanguage === code && (
                <span className="ml-auto text-[#C8102E]" aria-hidden="true">
                  ✓
                </span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
