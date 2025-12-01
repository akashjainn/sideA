// UIScreens component: showcases the device's interface designs.
// Displays UI mockups in frames with subtle flow indicators between key screens.

import Image from 'next/image'
import PageSection from '@/components/layout/PageSection'

interface UIScreen {
  name: string
  src: string
  description: string
}

export default function UIScreens() {
  const topScreens: UIScreen[] = [
    {
      name: 'Home',
      src: '/images/ui-home.png',
      description: 'Your library of received mixes and stories',
    },
    {
      name: 'Transfer',
      src: '/images/ui-transfer.png',
      description: 'Tap-to-share interface with proximity detection',
    },
    {
      name: 'Player',
      src: '/images/ui-player.png',
      description: 'Minimal playback with LED-inspired controls',
    },
  ]

  const bottomScreens: UIScreen[] = [
    {
      name: 'Mix Builder',
      src: '/images/ui-mix.png',
      description: 'Craft playlists with drag-and-drop simplicity',
    },
    {
      name: 'StoryTrail',
      src: '/images/ui-story.png',
      description: 'Track the journey of your shared media',
    },
  ]

  return (
    <PageSection id="ui" background="alt">
      <div className="text-center mb-16">
        <div className="hud-label text-accent-primary mb-4">
          03 / INTERFACE
        </div>
        <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
          A Small Curved Screen,{' '}
          <span className="text-accent-primary">Minimal Controls</span>
        </h2>
        <p className="text-lg text-text-muted max-w-2xl mx-auto">
          No feeds. No notifications. Just your music library, your curated Side A, 
          and the playlists you've received from meeting others.
        </p>
      </div>

      {/* Top Row: 3 screens */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {topScreens.map((screen, index) => (
          <div key={index} className="group relative">
            {/* Phone Frame */}
            <div className="relative bg-dark-bg rounded-3xl p-3 shadow-soft card-hover">
              <div className="relative aspect-[9/19] rounded-2xl overflow-hidden bg-surface-light">
                <Image
                  src={screen.src}
                  alt={screen.name}
                  width={300}
                  height={633}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* LED glow on hover */}
                <div className="absolute inset-0 border-2 border-accent-primary opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
              </div>
            </div>

            {/* Screen Info */}
            <div className="mt-4 text-center">
              <h4 className="font-display font-semibold text-lg mb-1">{screen.name}</h4>
              <p className="text-sm text-text-muted">{screen.description}</p>
            </div>

            {/* Flow Arrow (except for last item) */}
            {index < topScreens.length - 1 && (
              <div className="hidden md:block absolute top-1/3 -right-8 text-accent-primary/50">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Bottom Row: 2 screens centered */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {bottomScreens.map((screen, index) => (
          <div key={index} className="group relative">
            {/* Phone Frame */}
            <div className="relative bg-dark-bg rounded-3xl p-3 shadow-soft card-hover">
              <div className="relative aspect-[9/19] rounded-2xl overflow-hidden bg-surface-light">
                <Image
                  src={screen.src}
                  alt={screen.name}
                  width={300}
                  height={633}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* LED glow on hover */}
                <div className="absolute inset-0 border-2 border-accent-lines opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
              </div>
            </div>

            {/* Screen Info */}
            <div className="mt-4 text-center">
              <h4 className="font-display font-semibold text-lg mb-1">{screen.name}</h4>
              <p className="text-sm text-text-muted">{screen.description}</p>
            </div>

            {/* Flow Arrow between bottom screens */}
            {index === 0 && (
              <div className="hidden md:block absolute top-1/3 -right-8 text-accent-lines/50">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Feature Highlights */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            icon: (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            ),
            title: 'Tap-to-Share',
            description: 'Proximity-based transfer screen lights up when devices are near',
          },
          {
            icon: (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
              </svg>
            ),
            title: 'Mix Builder',
            description: 'Drag tracks, add voice notes, create meaningful collections',
          },
          {
            icon: (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            ),
            title: 'StoryTrail',
            description: 'See where your mixes traveled and who they touched',
          },
        ].map((feature, index) => (
          <div key={index} className="text-center">
            <div className="w-12 h-12 rounded-full bg-accent-primary/10 flex items-center justify-center text-accent-primary mx-auto mb-4">
              {feature.icon}
            </div>
            <h4 className="font-display font-semibold text-lg mb-2">{feature.title}</h4>
            <p className="text-sm text-text-muted">{feature.description}</p>
          </div>
        ))}
      </div>
    </PageSection>
  )
}
