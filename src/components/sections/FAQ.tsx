// FAQ component: displays frequently asked questions with expandable answers.
// Accordion-style interaction with smooth animations.

'use client'

import { useState } from 'react'
import PageSection from '@/components/layout/PageSection'

interface FAQItem {
  question: string
  answer: string
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs: FAQItem[] = [
    {
      question: 'Is this a real product or a speculative concept?',
      answer: 'SideA is a speculative design project that imagines what music devices could look like if they prioritized physical connection over digital convenience. The mockups and concept are real, but the device is not currently in production.',
    },
    {
      question: 'How does the tap-to-share actually work?',
      answer: 'When two SideA devices are brought close together and tapped, they use NFC or Bluetooth to transfer the curated playlist from one device to the other. A soft LED glow and haptic feedback confirm the exchange — making it feel like a small ritual.',
    },
    {
      question: 'Can I share music remotely or online?',
      answer: 'No. SideA is intentionally non-networked. There\'s no cloud syncing, no remote sharing, and no online features. The only way to receive someone\'s playlist is to meet them in person and tap devices together. This constraint is central to the concept.',
    },
    {
      question: 'Why make a separate device instead of an app?',
      answer: 'Apps exist in an ecosystem designed for infinite scrolling and constant notifications. A dedicated device creates a boundary — it\'s something you carry with intention, not distraction. The pebble shape, the tactile interaction, the ritual of tapping — these are physical experiences an app can\'t replicate.',
    },
    {
      question: 'What is a "Side A" playlist?',
      answer: 'Your "Side A" is your personal curated playlist — the collection of tracks you've chosen to represent you. Like the A-side of a cassette tape, it's what you share first when you meet someone. You can update it anytime, but it's always intentionally chosen, never algorithmic.',
    },
    {
      question: 'Where did the inspiration come from?',
      answer: 'SideA draws from cassette mixtape culture and the Walkman era — when music was portable, personal, and shared through physical objects. It asks: what if we brought back those intentional rituals, but with modern technology? What if music discovery required meeting people?',
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <PageSection id="faq" background="light">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="hud-label text-accent-primary mb-4">
            05 / QUESTIONS
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
            What You Might Be{' '}
            <span className="text-accent-primary">Wondering</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-surface-light rounded-xl border border-text-muted/10 overflow-hidden
                       transition-all duration-300 hover:border-accent-primary/50"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left 
                         transition-colors hover:bg-bg-alt focus:outline-none focus:ring-2 
                         focus:ring-accent-primary focus:ring-inset"
                aria-expanded={openIndex === index}
              >
                <span className="font-display font-semibold text-lg pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 flex-shrink-0 text-accent-primary transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
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
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 pt-2">
                  <p className="text-base text-text-muted leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Help */}
        <div className="mt-12 text-center p-6 bg-gradient-to-br from-bg-alt to-bg-altEnd rounded-2xl">
          <p className="text-base text-text-muted mb-4">
            Still have questions? Want to collaborate or discuss the concept?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center text-accent-primary hover:text-accent-lines 
                     font-medium transition-colors group"
          >
            Get in touch
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
          </a>
        </div>
      </div>
    </PageSection>
  )
}
