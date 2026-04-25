import { Mail } from 'lucide-react'

interface PressContactProps {
  title: string
  description: string
  email: string
}

export function PressContact({ title, description, email }: PressContactProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className="flex-shrink-0">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F0DADA]">
            <Mail className="h-6 w-6 text-[#C8102E]" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h2 className="mb-2 text-2xl font-bold text-[#1C1C1E]">{title}</h2>
          <p className="mb-4 text-gray-600">{description}</p>
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-2 text-lg font-semibold text-[#C8102E] transition-colors hover:text-[#A00D25]"
          >
            {email}
          </a>
        </div>
      </div>
    </div>
  )
}
