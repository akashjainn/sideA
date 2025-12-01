// ProductGallery component:
// - Accepts an array of image objects { src, alt, caption }.
// - Displays them in a responsive grid.
// - On click, opens a lightbox modal showing the full image and caption.

'use client'

import { useState } from 'react'
import Image from 'next/image'
import PageSection from '@/components/layout/PageSection'

interface GalleryImage {
  src: string
  alt: string
  caption: string
}

interface ProductGalleryProps {
  images?: GalleryImage[]
}

export default function ProductGallery({ images }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  const defaultImages: GalleryImage[] = [
    {
      src: '/images/device-hero.png',
      alt: 'SideA hero shot',
      caption: 'Front view: The pebble-shaped form that fits perfectly in your palm',
    },
    {
      src: '/images/device-back.png',
      alt: 'SideA device back',
      caption: 'Back view: Minimal, clean design with subtle branding',
    },
    {
      src: '/images/device-hands.png',
      alt: 'SideA in hand',
      caption: 'In hand: Compact and tactile, designed to be carried',
    },
    {
      src: '/images/device-tap.png',
      alt: 'Two SideA devices tapping',
      caption: 'The ritual: Tap devices together to exchange your Side A',
    },
    {
      src: '/images/device-charging.png',
      alt: 'SideA charging',
      caption: 'Charging: Wireless dock with LED status indicators',
    },
    {
      src: '/images/device-colors.png',
      alt: 'SideA color options',
      caption: 'Available finishes: Midnight, Warm Sand, and Sage',
    },
  ]

  const galleryImages = images || defaultImages

  return (
    <>
      <PageSection id="gallery" background="alt">
        <div className="text-center mb-12">
          <div className="hud-label text-accent-primary mb-4">
            GALLERY: HARDWARE
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
            Pebble-Shaped,{' '}
            <span className="text-accent-primary">Tactile, Portable</span>
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Every curve crafted to fit in your hand. Every detail designed to make SideA 
            feel like a modern reinterpretation of a beloved analog device.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(image)}
              className="group relative bg-surface-light rounded-3xl overflow-hidden shadow-soft card-hover focus-visible"
            >
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Hover overlay with LED glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-dark-bg/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* LED glow outline on hover */}
                <div className="absolute inset-0 border-2 border-accent-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:shadow-led" />
              </div>

              {/* Caption */}
              <div className="p-4">
                <p className="text-sm text-text-muted group-hover:text-accent-primary transition-colors">
                  {image.caption}
                </p>
              </div>
            </button>
          ))}
        </div>
      </PageSection>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-dark-bg/95 backdrop-blur-md p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-text-light hover:text-accent-primary transition-colors"
              aria-label="Close"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden bg-surface-light">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1200}
                height={1200}
                className="w-full h-auto"
              />
            </div>

            {/* Caption */}
            <div className="mt-4 text-center">
              <p className="text-lg text-text-light">{selectedImage.caption}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
