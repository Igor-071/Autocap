interface PhotoPlaceholderProps {
  name: string
  size?: 'sm' | 'md' | 'lg'
}

export function PhotoPlaceholder({ name, size = 'md' }: PhotoPlaceholderProps) {
  // Generate initials from name
  const getInitials = (fullName: string): string => {
    const words = fullName.trim().split(' ').filter(Boolean)

    if (words.length === 0) return 'AC'
    if (words.length === 1) {
      // Single word: use first two letters
      return words[0].substring(0, 2).toUpperCase()
    }
    // Multiple words: use first letter of first and last word
    return (words[0][0] + words[words.length - 1][0]).toUpperCase()
  }

  const initials = getInitials(name)

  // Size classes
  const sizeClasses = {
    sm: 'h-20 w-20 text-2xl',
    md: 'h-40 w-40 text-4xl',
    lg: 'h-48 w-48 text-5xl',
  }

  return (
    <div
      className={`flex items-center justify-center rounded-full bg-[#C8102E] ${sizeClasses[size]}`}
      aria-label={`Profile placeholder for ${name}`}
    >
      <span className="font-bold text-white">{initials}</span>
    </div>
  )
}
