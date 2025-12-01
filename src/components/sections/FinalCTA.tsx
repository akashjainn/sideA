// FinalCTA component with a two-column layout:
// Left: heading, subheading, and email capture form
// Right: small device or UI image
// Accessibility-friendly form with LED-blue styling

'use client'

import { useState, FormEvent } from 'react'
import Image from 'next/image'
import PageSection from '@/components/layout/PageSection'

export default function FinalCTA() {
  const [email, setEmail] = useState('')
  const [interest, setInterest] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))

    setSubmitted(true)
    setLoading(false)
    setEmail('')
    setInterest('')

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <PageSection id="contact" background="alt">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Form */}
        <div className="space-y-6">
          <div className="hud-label text-accent-primary">
            06 / CONNECT
          </div>

          <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight">
            Interested in{' '}
            <span className="text-accent-primary">SideA?</span>
          </h2>

          <p className="text-lg text-text-muted leading-relaxed">
            Get the full concept documentation, design process, and high-resolution renders. 
            Or reach out to discuss the project, collaborate, or share your thoughts.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-main mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-text-muted/20 
                           bg-surface-light text-text-main
                           focus:outline-none focus:ring-2 focus:ring-accent-primary 
                           focus:border-transparent transition-all"
                  placeholder="you@example.com"
                />
              </div>

              {/* Interest Dropdown */}
              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-text-main mb-2">
                  I'm interested in:
                </label>
                <select
                  id="interest"
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-text-muted/20 
                           bg-surface-light text-text-main
                           focus:outline-none focus:ring-2 focus:ring-accent-primary 
                           focus:border-transparent transition-all"
                >
                  <option value="">Select an option</option>
                  <option value="concept">Getting the concept PDF</option>
                  <option value="design">Design collaboration</option>
                  <option value="research">Research & feedback</option>
                  <option value="curious">Just curious</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full btn-primary flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send me the concept
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
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="p-6 bg-accent-primary/10 border-2 border-accent-primary rounded-xl">
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-accent-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-display font-semibold text-lg mb-1">Thanks for your interest!</h3>
                  <p className="text-sm text-text-muted">
                    We'll send the concept PDF to your inbox soon. Check your spam folder if you don't see it.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Additional Links */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="mailto:hello@walkman.com"
              className="text-sm text-text-muted hover:text-accent-primary transition-colors"
            >
              Email directly
            </a>
            <span className="text-text-muted">•</span>
            <a
              href="#"
              className="text-sm text-text-muted hover:text-accent-primary transition-colors"
            >
              View portfolio
            </a>
            <span className="text-text-muted">•</span>
            <a
              href="#"
              className="text-sm text-text-muted hover:text-accent-primary transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative">
          <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-dark-bg to-surface-dark p-8">
            <Image
              src="/images/device-ui-showcase.png"
              alt="Device and UI showcase"
              width={500}
              height={500}
              className="w-full h-full object-contain"
            />
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 to-accent-lines/20 blur-3xl opacity-50" />
            
            {/* HUD elements */}
            <div className="absolute top-4 right-4 hud-label text-accent-lines">
              STATUS: READY
            </div>
            <div className="absolute bottom-4 left-4 hud-label text-accent-primary">
              MODE: TRANSFER
            </div>
          </div>

          {/* Corner brackets */}
          <div className="absolute -top-2 -left-2 w-20 h-20 border-t-2 border-l-2 border-accent-primary rounded-tl-3xl" />
          <div className="absolute -bottom-2 -right-2 w-20 h-20 border-b-2 border-r-2 border-accent-lines rounded-br-3xl" />
        </div>
      </div>
    </PageSection>
  )
}
