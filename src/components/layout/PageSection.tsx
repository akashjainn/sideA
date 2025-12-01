// Reusable section wrapper component.
// Provides consistent spacing and max-width for all page sections.

import { ReactNode } from 'react'

interface PageSectionProps {
  children: ReactNode
  className?: string
  id?: string
  background?: 'light' | 'alt' | 'dark'
  fullWidth?: boolean
}

export default function PageSection({
  children,
  className = '',
  id,
  background = 'light',
  fullWidth = false,
}: PageSectionProps) {
  const bgClasses = {
    light: 'bg-surface-light',
    alt: 'bg-gradient-to-b from-bg-alt to-bg-altEnd',
    dark: 'bg-dark-bg text-text-light',
  }

  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${bgClasses[background]} ${className}`}
    >
      <div className={fullWidth ? 'w-full' : 'max-w-content mx-auto px-4 md:px-6'}>
        {children}
      </div>
    </section>
  )
}
