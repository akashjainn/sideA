"use client"

import PageSection from '@/components/layout/PageSection'
import Reveal from '@/components/motion/Reveal'

const modules = [
  {
    label: 'Capability',
    title: 'Tap. Transfer. Remember.',
    copy: 'Two devices connect with a soft pulse and light. The exchange is small, but it matters.',
  },
  {
    label: 'Design',
    title: 'Pebble. Glass. Metal.',
    copy: 'Mid-century curves meet modern materials. It feels inevitable in your hand.',
  },
  {
    label: 'Usage',
    title: 'Your Side A.',
    copy: 'Curate a personal playlist that represents you. Share it only in person.',
  },
]

export default function CinematicModules() {
  return (
    <PageSection id="modules" background="light">
      <div className="text-center mb-12">
        <div className="hud-label text-accent-primary mb-3">03 / INTERACTIVE MODULES</div>
        <h2 className="font-display text-4xl md:text-5xl">The Story in Three Movements</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {modules.map((m, idx) => (
          <Reveal key={idx}>
            <div className="relative group p-8 rounded-3xl glass-panel neon-border tilt-hover overflow-hidden">
              <div className="absolute inset-0 pointer-events-none noise-overlay opacity-40" />
              <div className="hud-label text-accent-lines mb-3">{m.label}</div>
              <h3 className="text-2xl font-bold">{m.title}</h3>
              <p className="text-text-muted mt-3">{m.copy}</p>
              <div className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-gradient-to-tr from-accent-primary/20 to-accent-lines/20 blur-3xl group-hover:scale-110 transition-transform" />
            </div>
          </Reveal>
        ))}
      </div>
    </PageSection>
  )
}
