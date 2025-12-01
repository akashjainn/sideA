// Site header with navigation.
// Retrofuturistic minimal design with LED accent on scroll.

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface-light/95 backdrop-blur-md shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-content mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/images/logo.png"
            alt="SideA Logo"
            width={48}
            height={48}
            className="h-9 md:h-10 w-auto object-contain shrink-0 transition-transform group-hover:scale-105"
          />
          <span className="font-display font-bold text-2xl md:text-3xl leading-none text-text-main">
            SideA
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="#overview"
            className="text-text-muted hover:text-accent-primary transition-colors font-medium"
          >
            Overview
          </Link>
          <Link
            href="#gallery"
            className="text-text-muted hover:text-accent-primary transition-colors font-medium"
          >
            Gallery
          </Link>
          <Link
            href="#features"
            className="text-text-muted hover:text-accent-primary transition-colors font-medium"
          >
            Features
          </Link>
          <Link
            href="#story"
            className="text-text-muted hover:text-accent-primary transition-colors font-medium"
          >
            Story
          </Link>
          <Link
            href="#contact"
            className="px-6 py-2 rounded-full bg-accent-primary text-white text-sm font-medium 
                     transition-all hover:shadow-led hover:-translate-y-0.5"
          >
            Get Concept
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-text-main hover:text-accent-primary transition-colors"
          aria-label="Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>
    </header>
  )
}
