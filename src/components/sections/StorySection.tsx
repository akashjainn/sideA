// StorySection:
// Dark themed band with subtle scanline overlay.
// Text-centric: 2–3 paragraphs explaining the speculative "why" of the product.
// Include a small device render on the side for visual balance.

import Image from 'next/image'
import PageSection from '@/components/layout/PageSection'

export default function StorySection() {
  return (
    <PageSection id="story" background="dark" className="scanlines">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <div className="space-y-6">
          <div className="hud-label text-accent-lines">
            LORE: RETROFUTURE
          </div>

          <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight">
            When Technology{' '}
            <span className="text-accent-primary">Brings People Together</span>
          </h2>

          <div className="space-y-4 text-text-light/90 leading-relaxed">
            <p>
              SideA imagines a future where music is exchanged not through links or algorithms, 
              but through presence and touch. Like the cassette mixtapes of decades past, 
              every playlist transfer is rooted in intention — a small ritual that makes 
              the exchange feel meaningful, not disposable.
            </p>

            <p>
              The soft LED glow. The haptic pulse. The simple gesture of tapping two devices 
              together. These moments of contact transform music from something instantly 
              accessible into something earned, embodied, and interpersonal. Each playlist 
              carries the memory of the person who handed it to you.
            </p>

            <p>
              SideA is intentionally non-networked. There's no cloud syncing, no infinite library, 
              no remote sharing. This constraint reintroduces slowness and social texture into 
              how we discover music. It's a world where portable media is once again tangible, 
              and relationships are built through shared listening.
            </p>
          </div>

          <div className="hud-label text-accent-primary pt-4">
            LITERALLY BRINGING PEOPLE TOGETHER
          </div>
        </div>

        {/* Right: Atmospheric Device Image */}
        <div className="relative">
          <div className="relative w-full aspect-square">
            {/* Diagonal grid background */}
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full" style={{
                backgroundImage: `
                  linear-gradient(45deg, rgba(79, 162, 255, 0.3) 1px, transparent 1px),
                  linear-gradient(-45deg, rgba(93, 226, 214, 0.3) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px'
              }} />
            </div>

            {/* Device image with dramatic lighting */}
            <div className="relative z-10 flex items-center justify-center h-full">
              <Image
                src="/images/device-atmospheric.png"
                alt="SideA device with atmospheric lighting"
                width={1000}
                height={1000}
                sizes="(min-width: 1024px) 40vw, 90vw"
                quality={90}
                className="w-4/5 h-auto drop-shadow-2xl"
              />
              
              {/* Glow effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 via-transparent to-accent-lines/20 blur-3xl" />
            </div>

            {/* Coordinate labels (HUD style) */}
            <div className="absolute top-4 left-4 hud-label text-accent-lines">
              X: 0.618 • Y: 1.414
            </div>
            <div className="absolute bottom-4 right-4 hud-label text-accent-lines">
              MODE: NOSTALGIC • STATE: SPECULATIVE
            </div>

            {/* Corner brackets */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-accent-primary/50" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-accent-lines/50" />
          </div>
        </div>
      </div>
    </PageSection>
  )
}
