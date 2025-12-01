// Site footer with links and HUD-style branding.
// Minimal, retrofuturistic aesthetic.

import Link from 'next/link'

export default function SiteFooter() {
  return (
    <footer className="bg-dark-bg text-text-light py-16">
      <div className="max-w-content mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-primary to-accent-lines flex items-center justify-center shadow-led">
                <span className="text-white font-display font-bold text-lg">S</span>
              </div>
              <span className="font-display font-bold text-xl">SideA</span>
            </div>
            <p className="text-text-muted text-sm leading-relaxed max-w-md">
              A retrofuturistic handheld music device that brings back the physical, 
              intentional rituals of sharing sound — tap to exchange playlists in real life.
            </p>
            <div className="hud-label mt-6 text-accent-lines">
              STATUS: PROTOTYPE • ERA: RETROFUTURE
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4">
              Navigate
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="#overview" className="text-text-muted hover:text-accent-primary transition-colors text-sm">
                  Overview
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="text-text-muted hover:text-accent-primary transition-colors text-sm">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-text-muted hover:text-accent-primary transition-colors text-sm">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#story" className="text-text-muted hover:text-accent-primary transition-colors text-sm">
                  Story
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4">
              Connect
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="#contact" className="text-text-muted hover:text-accent-primary transition-colors text-sm">
                  Get Concept PDF
                </Link>
              </li>
              <li>
                <a href="mailto:hello@walkman.com" className="text-text-muted hover:text-accent-primary transition-colors text-sm">
                  Email Us
                </a>
              </li>
              <li>
                <a href="#" className="text-text-muted hover:text-accent-primary transition-colors text-sm">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="text-text-muted hover:text-accent-primary transition-colors text-sm">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-text-muted/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-text-muted text-sm">
            © {new Date().getFullYear()} SideA. A Speculative Design Project.
          </p>
          <div className="hud-label text-accent-lines">
            SYSTEM: ONLINE • MODE: SHARING
          </div>
        </div>
      </div>
    </footer>
  )
}
