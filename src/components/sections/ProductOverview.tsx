// Product overview section: What is this?
// Two-column layout with feature bullets and supporting imagery.

import Image from 'next/image'
import PageSection from '@/components/layout/PageSection'

export default function ProductOverview() {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      text: 'Tap devices together to exchange playlists',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      ),
      text: 'Curate your personal "Side A" playlist',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3" />
        </svg>
      ),
      text: 'Intentionally non-networked — no cloud, no streaming',
    },
  ]

  return (
    <PageSection id="overview" background="light">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <div className="space-y-6">
          <div className="hud-label text-accent-primary">
            01 / OVERVIEW
          </div>

          <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight">
            A Music Device From a Future That{' '}
            <span className="text-accent-primary">Values Presence</span>
          </h2>

          <p className="text-lg text-text-muted leading-relaxed">
            SideA is a pebble-shaped handheld that reimagines the cassette mixtape for a 
            modern age. No broadcasting. No algorithms. No remote sharing. To receive 
            someone's playlist, you have to meet them — and tap devices together.
          </p>

          {/* Feature Bullets */}
          <div className="space-y-4 pt-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent-primary/10 flex items-center justify-center text-accent-primary">
                  {feature.icon}
                </div>
                <p className="text-base font-medium text-text-main pt-2">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Supporting Image */}
        <div className="relative">
          <div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-bg-alt to-bg-altEnd p-8">
            <Image
              src="/images/device-angled.png"
              alt="SideA device angled view"
              width={500}
              height={500}
              className="w-full h-full object-contain transform rotate-12 hover:rotate-6 transition-transform duration-500"
            />
            <div className="absolute bottom-4 right-4 hud-label text-accent-primary">
              DESIGNED FOR INTENTION
            </div>
          </div>
          
          {/* Decorative corner bracket */}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-accent-lines/30 rounded-br-3xl" />
        </div>
      </div>
    </PageSection>
  )
}
