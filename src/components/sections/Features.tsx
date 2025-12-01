// Features section displaying four product features in a 2x2 grid.
// Each feature has an icon, title, and description with hover effects.

import PageSection from '@/components/layout/PageSection'

export default function Features() {
  const features = [
    {
      number: '01',
      title: 'Physical Exchange',
      description: 'Tap two SideA devices together to transfer playlists. The soft LED glow and haptic pulse create a small ritual — making every exchange feel meaningful.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Your Personal Side A',
      description: 'Curate your own playlist — your "Side A" — on the curved screen. Hand-picked tracks that represent you, ready to share when you meet someone.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Pebble-Shaped Design',
      description: 'Compact, tactile, and pocket-friendly. The ergonomic form feels like a modern reinterpretation of a beloved analog device — something you want to hold.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      number: '04',
      title: 'Minimal Interface',
      description: 'A small curved screen and minimal controls. No feeds, no notifications, no algorithms. Just your music library and the playlists you\'ve received from others.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ]

  return (
    <PageSection id="features" background="light">
      <div className="text-center mb-16">
        <div className="hud-label text-accent-primary mb-4">
          02 / FEATURES
        </div>
        <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
          Built for{' '}
          <span className="text-accent-primary">Human Ritual</span>
        </h2>
        <p className="text-lg text-text-muted max-w-2xl mx-auto">
          Technology that remembers what matters: slowness, care, and the joy of discovery.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group relative bg-surface-light rounded-2xl p-8 border border-text-muted/10 
                     transition-all duration-300 hover:border-accent-primary hover:shadow-led card-hover"
          >
            {/* Feature Number Label */}
            <div className="hud-label text-accent-lines mb-4">
              {feature.number} / FEATURE
            </div>

            {/* Icon */}
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent-primary/20 to-accent-lines/20 
                          flex items-center justify-center text-accent-primary mb-6
                          group-hover:shadow-led transition-shadow duration-300">
              {feature.icon}
            </div>

            {/* Content */}
            <h3 className="font-display font-bold text-2xl mb-3 text-text-main group-hover:text-accent-primary transition-colors">
              {feature.title}
            </h3>
            <p className="text-base text-text-muted leading-relaxed">
              {feature.description}
            </p>

            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-accent-primary/0 
                          group-hover:border-accent-primary/50 rounded-tr-2xl transition-all duration-300" />
          </div>
        ))}
      </div>
    </PageSection>
  )
}
