// TechSpecs section: displays technical specifications and design principles.
// Two-column layout with tech specs on left and principles on right.

import PageSection from '@/components/layout/PageSection'

export default function TechSpecs() {
  const techSpecs = [
    'Pebble-shaped ergonomic form factor',
    'Small curved screen for playlist curation',
    'NFC/Bluetooth tap-to-transfer technology',
    'Solid-state storage (32–128GB, offline-first)',
    'Soft LED glow & haptic feedback on exchange',
    'USB-C charging with optional wireless dock',
  ]

  const principles = [
    {
      title: 'Physical presence required',
      description: 'Music exchange happens in real life, not remotely',
    },
    {
      title: 'Intentionally non-networked',
      description: 'No cloud, no algorithms, no feeds',
    },
    {
      title: 'Playlists as gifts',
      description: 'Every exchange carries the memory of who gave it',
    },
    {
      title: 'Slowness by design',
      description: 'Discovery requires meeting people, not scrolling',
    },
  ]

  return (
    <PageSection id="specs" background="light">
      <div className="text-center mb-16">
        <div className="hud-label text-accent-primary mb-4">
          04 / SPECIFICATIONS
        </div>
        <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
          Built on{' '}
          <span className="text-accent-primary">Principles</span>
          , Not Platforms
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Tech Specs */}
        <div>
          <h3 className="font-display font-semibold text-2xl mb-6 flex items-center">
            <span className="w-2 h-2 rounded-full bg-accent-primary mr-3" />
            Technical Specifications
          </h3>

          <div className="space-y-4">
            {techSpecs.map((spec, index) => (
              <div key={index} className="flex items-start space-x-3 group">
                <div className="flex-shrink-0 w-6 h-6 rounded-md bg-accent-primary/10 flex items-center justify-center 
                              text-accent-primary text-xs font-mono mt-0.5 group-hover:bg-accent-primary 
                              group-hover:text-white transition-colors">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <p className="text-base text-text-muted group-hover:text-text-main transition-colors">
                  {spec}
                </p>
              </div>
            ))}
          </div>

          {/* Device Diagram Placeholder */}
          <div className="mt-8 p-6 bg-gradient-to-br from-bg-alt to-bg-altEnd rounded-2xl border border-accent-primary/20">
            <div className="aspect-video relative flex items-center justify-center">
              <div className="text-center space-y-2">
                <svg className="w-16 h-16 mx-auto text-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
                <p className="hud-label text-accent-primary">DEVICE SCHEMATIC</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Design Principles */}
        <div>
          <h3 className="font-display font-semibold text-2xl mb-6 flex items-center">
            <span className="w-2 h-2 rounded-full bg-accent-lines mr-3" />
            Design Principles
          </h3>

          <div className="space-y-6">
            {principles.map((principle, index) => (
              <div
                key={index}
                className="group p-6 bg-surface-light rounded-xl border border-text-muted/10 
                         hover:border-accent-lines hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-accent-lines/20 to-accent-primary/20 
                                flex items-center justify-center text-accent-lines font-mono font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-lg mb-1 group-hover:text-accent-lines transition-colors">
                      {principle.title}
                    </h4>
                    <p className="text-sm text-text-muted">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quote/Callout */}
          <div className="mt-8 p-6 bg-dark-bg text-text-light rounded-2xl relative overflow-hidden">
            <div className="relative z-10">
              <svg className="w-8 h-8 text-accent-primary mb-3 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-base italic leading-relaxed mb-2">
                "SideA transforms music from something instantly accessible into something earned, 
                embodied, and interpersonal. A future where technology brings people together — literally."
              </p>
              <p className="hud-label text-accent-lines">— DESIGN MANIFESTO</p>
            </div>
            
            {/* Decorative scanlines */}
            <div className="absolute inset-0 opacity-10 scanlines" />
          </div>
        </div>
      </div>
    </PageSection>
  )
}
