// Hero section for the product marketing page.
// Retrofuturistic aesthetic: soft gradient background, faint vector grid,
// large device render on the right, text and CTAs on the left.
// Primary CTA should be a pill-shaped button with LED-style glow on hover.

'use client'

import Image from 'next/image'
import Link from 'next/link'

interface HeroProps {
  ctaPrimary?: string
  ctaSecondary?: string
  heroImage?: string
}

export default function Hero({
  ctaPrimary = '#contact',
  ctaSecondary = '#overview',
  heroImage = '/images/device-hero.png',
}: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden vector-grid">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-bg-alt via-bg-main to-bg-altEnd opacity-90" />
      
      {/* Circular Glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-content mx-auto px-4 md:px-6 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8 fade-in">
            <div className="hud-label text-accent-primary">
              MODE: INTRO • STATUS: PROTOTYPE • ERA: RETROFUTURE
            </div>

            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-tight">
              Share Music{' '}
              <span className="gradient-text">Through Presence</span>
            </h1>

            <p className="text-lg md:text-xl text-text-muted leading-relaxed max-w-xl">
              A retrofuturistic handheld music device that brings back the physical, intentional 
              rituals of sharing sound. To exchange playlists, you have to meet in real life.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={ctaPrimary}
                className="btn-primary inline-flex items-center justify-center group"
              >
                Get the full concept PDF
                <svg
                  className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>

              <Link
                href={ctaSecondary}
                className="btn-secondary inline-flex items-center justify-center group"
              >
                See how it works
                <svg
                  className="ml-2 w-5 h-5 transition-transform group-hover:translate-y-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Link>
            </div>

            {/* HUD Microcopy */}
            <div className="hud-label text-accent-lines pt-4">
              SYSTEM: ONLINE • TRANSFER: READY • PROTOCOL: HUMAN-FIRST
            </div>
          </div>

          {/* Right: Hero Device Image */}
          <div className="relative flex items-center justify-center fade-in">
            <div className="relative w-full max-w-lg animate-float">
              {/* Corner brackets */}
              <div className="corner-brackets absolute inset-0 pointer-events-none opacity-50" />
              
              <Image
                src={heroImage}
                alt="SideA Music Device"
                width={600}
                height={800}
                className="w-full h-auto drop-shadow-2xl"
                priority
              />
              
              {/* Glow effect behind device */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/30 to-accent-lines/30 blur-3xl -z-10 scale-75" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-accent-primary rounded-full" />
        </div>
      </div>
    </section>
  )
}
