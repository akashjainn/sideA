// Layout wrapper for the entire application.
// Sets up the document structure, metadata, and global styles.

import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import '../styles/globals.css'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'SideA | Share Music Through Presence',
  description: 'A retrofuturistic handheld music device that brings back the physical, intentional rituals of sharing sound — tap to exchange playlists in real life.',
  keywords: ['sidea', 'music player', 'mixtape', 'physical music sharing', 'retrofuture', 'speculative design'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-body antialiased relative">
        {/* Global background */}
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-bg-alt to-bg-altEnd" />
          <div className="absolute inset-0 noise-overlay opacity-30" />
        </div>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
