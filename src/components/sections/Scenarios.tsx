// Scenarios section: displays future vignettes / use case scenarios.
// Three cards showing imagined moments of interaction.

import Image from 'next/image'
import PageSection from '@/components/layout/PageSection'

export default function Scenarios() {
  const scenarios = [
    {
      image: '/images/scenario-train.png',
      title: 'Commuters',
      vignette: 'Two strangers on the morning train. Eye contact. A nod. They tap SideAs. Her indie folk meets his jazz fusion. A connection forms through shared sound.',
      label: 'SCENARIO A',
    },
    {
      image: '/images/scenario-birthday.png',
      title: 'Campus Exchange',
      vignette: 'After class, friends gather. They tap devices around the table — a rapid-fire exchange of new discoveries. Someone\'s Side A has a track no one\'s heard. That\'s the whole point.',
      label: 'SCENARIO B',
    },
    {
      image: '/images/scenario-archive.png',
      title: 'The Show',
      vignette: 'At a concert, she meets someone in line. They talk about the opener. Before parting, a tap — her curated playlist for this exact mood. He listens to it the whole ride home.',
      label: 'SCENARIO C',
    },
  ]

  return (
    <PageSection id="scenarios" background="alt">
      <div className="text-center mb-16">
        <div className="hud-label text-accent-primary mb-4">
          FIELD NOTES: POSSIBLE FUTURES
        </div>
        <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
          Moments We're{' '}
          <span className="text-accent-primary">Designing For</span>
        </h2>
        <p className="text-lg text-text-muted max-w-2xl mx-auto">
          Not features. Not metrics. Just human moments, imagined.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {scenarios.map((scenario, index) => (
          <div
            key={index}
            className="group relative bg-surface-light rounded-2xl overflow-hidden shadow-soft card-hover"
          >
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={scenario.image}
                alt={scenario.title}
                width={400}
                height={300}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 via-dark-bg/40 to-transparent" />
              
              {/* Label */}
              <div className="absolute top-4 left-4">
                <span className="hud-label text-accent-lines bg-dark-bg/80 px-3 py-1 rounded-full">
                  {scenario.label}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="font-display font-bold text-xl mb-3 group-hover:text-accent-primary transition-colors">
                {scenario.title}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed italic">
                "{scenario.vignette}"
              </p>
            </div>

            {/* Decorative corner */}
            <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-accent-primary/0 
                          group-hover:border-accent-primary/50 rounded-br-2xl transition-all duration-300" />
          </div>
        ))}
      </div>

      {/* Additional context */}
      <div className="mt-16 max-w-3xl mx-auto text-center">
        <p className="text-base text-text-muted leading-relaxed">
          These are imagined moments — the kinds of exchanges SideA is designed to enable. 
          Where music discovery is tied to memory. Where playlists carry the story of who gave them. 
          Where technology brings people together, literally.
        </p>
      </div>
    </PageSection>
  )
}
