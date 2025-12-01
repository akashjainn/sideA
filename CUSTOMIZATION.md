# Walkman Retrofuture - Content Customization Guide

This guide helps you customize the content for your specific product.

## 🎯 Priority Customizations

### 1. Hero Section (`src/components/sections/Hero.tsx`)

**Current:**
```
A New Way to Share the Future of Sound
```

**Customize:**
- Line 40-42: Main headline
- Line 47-49: Subheading/tagline
- Line 67: HUD microcopy labels

**Tips:**
- Keep headline under 10 words
- Subheading should be one clear sentence
- HUD labels should be SHORT (e.g., "MODE: DEMO", "STATUS: READY")

### 2. Product Overview (`src/components/sections/ProductOverview.tsx`)

**Three feature bullets** (Lines 12-34):
1. Tap-to-share media
2. Mixtape-inspired playlists  
3. Local, personal, human-scaled tech

**Replace with your actual features**

**Section heading** (Line 52):
- "A Walkman From a Future That Remembers the Past"
- Customize to match your product positioning

### 3. Gallery Images (`src/components/sections/ProductGallery.tsx`)

**Default images** (Lines 21-50):
Six placeholder images with captions

**To customize:**
1. Add your images to `public/images/`
2. Update the `defaultImages` array with your filenames and captions
3. Or pass custom images via props from `page.tsx`

### 4. Story/Lore Section (`src/components/sections/StorySection.tsx`)

**The narrative** (Lines 27-44):
Three paragraphs explaining the "why" of your product

**Customize for your context:**
- Reference your specific inspiration (cassettes, etc.)
- Your design philosophy
- The problem you're addressing

**Sankofa reference** (Line 49):
- Keep if using Sankofa concept
- Replace with your own design principle/motto

### 5. FAQ Section (`src/components/sections/FAQ.tsx`)

**Six default questions** (Lines 17-59):

**You should definitely update these:**
1. "Is this a real product or speculative concept?" - Update based on your project status
2. "What kind of media can it share?" - Match your actual features
3. Add questions specific to YOUR audience's likely concerns

### 6. Contact/CTA Section (`src/components/sections/FinalCTA.tsx`)

**Headline** (Line 67):
- "Want the Full Story?"

**Description** (Line 72):
- Adjust what you're offering (PDF, demo, etc.)

**Interest options** (Lines 100-104):
```
- Getting the concept PDF
- Design collaboration
- Research & feedback
- Just curious
```

**Customize based on your conversion goals**

## 📧 Email & Links

### Update All Placeholder Links:

**Footer** (`src/components/layout/SiteFooter.tsx`):
- Line 48: `mailto:hello@walkman.com` → your email
- Lines 52-60: Portfolio, GitHub, other links

**FinalCTA** (`src/components/sections/FinalCTA.tsx`):
- Line 136: Direct email link
- Lines 140-148: Portfolio and social links

## 🎨 Branding

### Logo/Brand Name

**Header** (`src/components/layout/SiteHeader.tsx`):
- Line 31: "W" → Your initial
- Line 34: "Walkman" → Your product name

**Footer** (`src/components/layout/SiteFooter.tsx`):
- Line 18: "W" → Your initial
- Line 21: "Walkman" → Your product name

### Metadata (SEO)

**Layout** (`src/app/layout.tsx`):
```typescript
export const metadata: Metadata = {
  title: 'Your Product | Your Tagline',
  description: 'Your description here',
  keywords: ['your', 'keywords'],
}
```

## 📝 Copy Writing Tips

### Voice & Tone
Your current brief calls for:
- Speculative but credible
- Technical without jargon
- Thoughtful and human-centered
- Nostalgic but forward-looking

### HUD-Style Microcopy
Use sparingly throughout for atmosphere:

**Good examples:**
- `MODE: TRANSFER • STATUS: READY`
- `SYSTEM: ONLINE • PROTOCOL: HUMAN-FIRST`
- `01 / FEATURE` (section labels)

**Where they appear:**
- Hero section
- Section headings
- Story section corners
- Footer

### Button Text
Current CTAs:
- Primary: "Get the full concept PDF"
- Secondary: "See how it works"

**Adjust based on your goals:**
- "Request a demo"
- "Download case study"
- "Join waitlist"
- "Get updates"

## 🖼️ Image Customization

### Required Images
See `public/images/README.md` for full list

### Minimum Viable Set
To launch quickly, you need:
1. `device-hero.png` - Hero section
2. `device-angled.png` - Overview section
3. 3-6 gallery images
4. 3-5 UI screen mockups

### Temporary Placeholders
While you prepare images, components will show alt text. The site is fully functional without images.

## 🎯 Conversion Goals

Your brief mentioned:
- **Primary**: Email signup for concept PDF
- **Secondary**: Contact/collaboration

### Tracking Conversions
Add form handling to `FinalCTA.tsx`:

```typescript
const handleSubmit = async (e: FormEvent) => {
  e.preventDefault()
  
  // Your form handling logic here
  // e.g., send to email service, save to database
  
  await fetch('/api/signup', {
    method: 'POST',
    body: JSON.stringify({ email, interest })
  })
}
```

## 🚀 Launch Checklist

Before going live:

- [ ] Update all product copy
- [ ] Replace placeholder images
- [ ] Change email addresses and links
- [ ] Update metadata (title, description)
- [ ] Test all forms
- [ ] Check mobile responsiveness
- [ ] Add analytics (optional)
- [ ] Set up email capture backend
- [ ] Review FAQ answers
- [ ] Spell check everything
- [ ] Test in multiple browsers

## 📞 Need More Help?

- Review the main `README.md` for technical details
- Check component files - they have detailed comments
- Tailwind docs for styling: https://tailwindcss.com
- Next.js docs: https://nextjs.org

---

**Remember**: Start with content first, then images. The site works great with placeholder images while you perfect your renders and mockups.
