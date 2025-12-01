# Walkman Retrofuture - Image Assets Guide

This folder contains all the visual assets for the Walkman Retrofuture marketing site.

## 📸 Required Images

### Hero & Overview Section
- **device-hero.png** (600x800px recommended)
  - Main hero shot of the device
  - Clean, front-facing view with soft shadow
  - Should show the pebble shape clearly

- **device-angled.png** (500x500px recommended)
  - Angled/rotated view for the overview section
  - Shows depth and form of the device

### Gallery Section
- **device-back.png** (400x400px)
  - Back view showing the Sankofa emblem
  
- **device-hands.png** (400x400px)
  - Device held in hands to show scale and tactility

- **device-tap.png** (400x400px)
  - Two devices tapping together for transfer

- **device-charging.png** (400x400px)
  - Device on charging dock with LED indicators

- **device-colors.png** (400x400px)
  - Multiple color variants side by side

### Story Section
- **device-atmospheric.png** (500x500px)
  - Dramatic lighting, artistic render
  - For the dark-themed lore section

### UI Screens
All UI screens should be in phone aspect ratio (9:19) approximately 300x633px

- **ui-home.png** - Home screen showing library
- **ui-transfer.png** - Tap-to-share interface
- **ui-player.png** - Minimal playback screen
- **ui-mix.png** - Mix builder/playlist creator
- **ui-story.png** - StoryTrail tracking interface

### Scenarios Section
- **scenario-train.png** (400x300px, 4:3 aspect)
  - Commuter/train environment
  
- **scenario-birthday.png** (400x300px, 4:3 aspect)
  - Birthday/gift giving scene

- **scenario-archive.png** (400x300px, 4:3 aspect)
  - Archival/memory preservation scene

### Final CTA Section
- **device-ui-showcase.png** (500x500px)
  - Combined device + UI screen mockup
  - For the contact/CTA section

## 🎨 Image Guidelines

### Technical Specs
- **Format**: PNG with transparency preferred, JPG acceptable
- **Color space**: sRGB
- **Resolution**: 2x for retina displays (double the dimensions listed)
- **Optimization**: Compress for web (use tools like TinyPNG)

### Style Guidelines
- **Background**: Transparent or clean white/gradient
- **Lighting**: Soft, not harsh shadows
- **Consistency**: Maintain similar lighting and angle across related shots
- **Detail**: Show LED indicators, textures, and material quality

### Retrofuturistic Aesthetic
- Clean, minimal compositions
- Soft, diffused lighting with subtle LED glows
- Desaturated backgrounds with vibrant accent colors
- Professional product photography style

## 📦 Placeholder Images

Until you add your actual images, create placeholder images with these dimensions:

```bash
# Using ImageMagick (if installed):
convert -size 600x800 xc:#F5F4F2 -pointsize 30 -fill '#4FA2FF' \
  -gravity center -annotate +0+0 "Hero Device\n600x800" device-hero.png
```

Or simply use online placeholder services:
- https://placehold.co/600x800/F5F4F2/4FA2FF?text=Hero+Device

## 🔄 Image Optimization Tips

1. **Compress before upload**
   - Use TinyPNG, ImageOptim, or Squoosh
   - Target: <200KB per image

2. **Use Next.js Image component benefits**
   - Automatic lazy loading
   - Responsive images
   - WebP/AVIF conversion (when supported)

3. **Provide alt text**
   - Already handled in components
   - Descriptive and concise

## 📱 Responsive Considerations

The site uses Next.js `<Image>` component which handles:
- Automatic responsive sizing
- Format optimization
- Lazy loading
- Blur placeholders (optional)

Your images will be displayed responsively on all screen sizes.

---

**Need help creating images?**
- Check the main README for design guidelines
- Review the Tailwind color palette for consistency
- Mockup tools: Figma, Blender, KeyShot, Cinema 4D
