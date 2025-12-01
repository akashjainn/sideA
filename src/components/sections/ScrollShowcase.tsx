"use client"

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import PageSection from '@/components/layout/PageSection'
import Image from 'next/image'
import Reveal from '@/components/motion/Reveal'

export default function ScrollShowcase() {
  const ref = useRef<HTMLDivElement>(null)
  const shouldReduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.2'] })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, shouldReduce ? 0 : -80])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, shouldReduce ? 0 : 80])
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1])

  const items = [
    {
      title: 'Capabilities',
      copy: 'Tap to transfer, glow to confirm. SideA turns an exchange into a ritual you remember.',
      img: '/images/device-angled.png',
    },
    {
      title: 'Design',
      copy: 'A pebble-shaped body with soft glass and brushed metal—built to be held.',
      img: '/images/device-atmospheric.png',
    },
    {
      title: 'Usage',
      copy: 'Curate your Side A. Meet. Tap. Trade stories in playlists, not posts.',
      img: '/images/device-hero.png',
    },
  ]

  return (
    <PageSection id="scroll-story" background="alt" className="relative">
      <div ref={ref} className="relative">
        <Reveal>
          <div className="text-center mb-16">
            <div className="hud-label text-accent-primary mb-4">SCROLL • DISCOVER</div>
            <h2 className="font-display text-4xl md:text-5xl">Where Design Meets Destiny</h2>
            <p className="text-text-muted max-w-2xl mx-auto mt-4">Scroll to reveal the layers of SideA—form, feeling, and the moments it creates.</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {items.map((item, i) => (
            <motion.article
              key={i}
              style={{ opacity }}
              className="relative p-6 rounded-3xl glass-panel neon-border overflow-hidden group"
            >
              <div className="absolute inset-0 noise-overlay opacity-40 pointer-events-none" />
              {/* Aspect container to prevent image overlapping text */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <motion.div style={{ y: i % 2 === 0 ? y1 : y2 }} className="absolute inset-0">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 90vw"
                    quality={90}
                    className="object-cover"
                  />
                </motion.div>
              </div>
              <div className="mt-5 relative z-10">
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="text-text-muted mt-2">{item.copy}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </PageSection>
  )
}
