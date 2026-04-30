import { Building2 } from 'lucide-react'

export function WorkshopImagePlaceholder() {
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-[#F0DADA]">
      <Building2
        className="h-16 w-16 text-[#1C1C1E] opacity-40"
        aria-hidden="true"
      />
    </div>
  )
}
