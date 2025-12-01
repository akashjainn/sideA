// Hero section for the product marketing page.
// Retrofuturistic aesthetic: soft gradient background, faint vector grid,
// large device render on the right, text and CTAs on the left.
// Primary CTA should be a pill-shaped button with LED-style glow on hover.

'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

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
  const shouldReduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const yDevice = useTransform(scrollYProgress, [0, 1], [0, shouldReduce ? 0 : -120])
  const yTitle = useTransform(scrollYProgress, [0, 1], [0, shouldReduce ? 0 : 60])
  const flareX = useTransform(scrollYProgress, [0, 1], ['10%', '60%'])
  const flareY = useTransform(scrollYProgress, [0, 1], ['20%', '-10%'])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden vector-grid">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-bg-alt via-bg-main to-bg-altEnd opacity-90" />

      {/* HUD overlay grid */}
      <div className="absolute inset-0 opacity-30 mix-blend-multiply pointer-events-none">
        <Image src="/images/hud-grid.svg" alt="hud grid" fill priority className="object-cover" />
      </div>

      {/* Lens flare */}
      <motion.div
        aria-hidden
        style={{ left: flareX as any, top: flareY as any }}
        className="absolute w-[60rem] h-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full from-accent-primary/20 via-transparent to-accent-lines/20 bg-radial flare blur-3xl"
      />

      {/* Circular Glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-content mx-auto px-4 md:px-6 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div style={{ y: yTitle as any }} className="space-y-8">
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
          </motion.div>

          {/* Right: Hero Device Image */}
          <motion.div style={{ y: yDevice as any }} className="relative flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              {/* Corner brackets */}
              <div className="corner-brackets absolute inset-0 pointer-events-none opacity-50" />
              
              <Image
                src={heroImage}
                alt="SideA Music Device"
                width={1200}
                height={1600}
                sizes="(min-width: 1280px) 40vw, (min-width: 768px) 60vw, 90vw"
                quality={90}
                className="w-full h-auto drop-shadow-2xl"
                priority
              />
              
              {/* Glow effect behind device */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/30 to-accent-lines/30 blur-3xl -z-10 scale-75" />
            </div>
          </motion.div>
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
