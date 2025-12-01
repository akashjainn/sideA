# Walkman Retrofuture Marketing Site

A Next.js marketing website showcasing a retrofuturistic handheld audio device designed for intentional media sharing.

## 🎨 Design Philosophy

This site embodies a **retrofuturistic aesthetic** that blends:
- Vintage cassette/Walkman-era design language
- Modern, clean interfaces
- LED-inspired accent colors and glows
- HUD-style microcopy and coordinate labels
- Scanline overlays and vector grid backgrounds
- Speculative design storytelling

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit `http://localhost:3000` to view the site.

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   └── page.tsx            # Main landing page
├── components/
│   ├── layout/
│   │   ├── SiteHeader.tsx  # Navigation header with scroll effects
│   │   ├── SiteFooter.tsx  # Footer with links and branding
│   │   └── PageSection.tsx # Reusable section wrapper
│   └── sections/
│       ├── Hero.tsx        # Hero section with device render
│       ├── ProductOverview.tsx
│       ├── ProductGallery.tsx
│       ├── Features.tsx
│       ├── StorySection.tsx
│       ├── UIScreens.tsx
│       ├── TechSpecs.tsx
│       ├── Scenarios.tsx
│       ├── FAQ.tsx
│       └── FinalCTA.tsx
├── styles/
│   └── globals.css         # Global styles and design tokens
└── public/
    └── images/             # Add your device renders and UI mockups here
```

## 🎨 Color Palette

The site uses a carefully crafted retrofuturistic color scheme:

| Purpose | Color | Hex |
|---------|-------|-----|
| Background Main | `bg-main` | `#F5F4F2` |
| Background Alt | `bg-alt` | `#F8F7F5` |
| Accent Primary (LED Blue) | `accent-primary` | `#4FA2FF` |
| Accent Secondary (Amber) | `accent-secondary` | `#FFC98A` |
| Accent Lines (Cyan) | `accent-lines` | `#5DE2D6` |
| Text Main | `text-main` | `#111827` |
| Text Muted | `text-muted` | `#6B7280` |
| Dark Background | `dark-bg` | `#111827` |

## 📸 Adding Your Images

Replace placeholder images in `public/images/` with your actual renders:

### Required Images:
- `device-hero.png` - Main hero shot
- `device-angled.png` - Angled view for overview
- `device-back.png` - Back view with emblem
- `device-hands.png` - Device in hand
- `device-tap.png` - Two devices tapping
- `device-charging.png` - Charging dock
- `device-colors.png` - Color variants
- `device-atmospheric.png` - Dramatic lighting for story section
- `device-ui-showcase.png` - Device + UI combo for CTA

### UI Screens:
- `ui-home.png` - Home screen
- `ui-transfer.png` - Transfer interface
- `ui-player.png` - Player screen
- `ui-mix.png` - Mix builder
- `ui-story.png` - StoryTrail screen

### Scenarios:
- `scenario-train.png` - Train scene
- `scenario-birthday.png` - Birthday scene
- `scenario-archive.png` - Archive scene

## ✨ Key Features

### 🎯 Conversion-Focused
- Primary CTA: Email capture for concept PDF
- Secondary CTA: Contact/collaboration
- Strategic CTA placement throughout

### 📱 Fully Responsive
- Mobile-first design
- Adaptive layouts from phone to desktop
- Touch-friendly interactions

### ♿ Accessible
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Focus states

### 🎭 Animations & Interactions
- Smooth scroll reveals
- Hover effects with LED glows
- Floating device animation
- Lightbox gallery
- Accordion FAQ

## 🛠 Customization

### Changing Colors

Edit `tailwind.config.ts` to adjust the color palette:

```typescript
colors: {
  accent: {
    primary: '#YOUR_COLOR',
    // ...
  }
}
```

### Modifying Content

Each section component accepts props for easy customization:

```tsx
<Hero 
  ctaPrimary="#contact"
  ctaSecondary="#overview"
  heroImage="/images/your-hero.png"
/>
```

### Adding New Sections

1. Create a new component in `src/components/sections/`
2. Import and add to `src/app/page.tsx`
3. Use the `PageSection` wrapper for consistency

## 📝 Content Guidelines

### Voice & Tone
- Speculative but credible
- Thoughtful and human-centered
- Technical without jargon
- Nostalgic but forward-looking

### HUD-Style Microcopy
Use sparingly for atmosphere:
- `MODE: TRANSFER • STATUS: READY`
- `SYSTEM: ONLINE • PROTOCOL: HUMAN-FIRST`

## 🚢 Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Build Static Export

```bash
npm run build
# Deploy the .next folder to your hosting
```

## 🎓 Design Principles

1. **Human-first, feed-second** - Prioritize intention over engagement
2. **Designed for care, not capture** - Every transfer is meaningful
3. **Media as gift, not metric** - No analytics, no tracking
4. **Local by default** - Privacy-first approach

## 📚 References

- **Sankofa** - West African concept: "go back and fetch it"
- **Speculative Design** - Critical design that asks "what if?"
- **Interaction Design** - Thoughtful, ritual-based interactions

## 🤝 Contributing

This is a speculative design project. If you want to:
- Provide feedback
- Collaborate on the concept
- Build your own version

Reach out via the contact form on the site.

## 📄 License

This project is open source and available under the MIT License.

---

**Built with ❤️ for a future that remembers the past**

*MODE: SHARING • STATUS: READY • PROTOCOL: HUMAN-FIRST*
