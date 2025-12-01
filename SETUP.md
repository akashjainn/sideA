# SETUP GUIDE - Walkman Retrofuture

## Quick Start (5 minutes)

Follow these steps to get your site running:

### 1. Install Dependencies

```bash
cd c:\Users\akash\Documents\walkman
npm install
```

This will install Next.js, React, Tailwind CSS, Framer Motion, and TypeScript.

### 2. Add Your Images (Optional for initial test)

The site will run without images, but you'll want to add your device renders and UI mockups to `public/images/`. See `public/images/README.md` for the full list and specifications.

**Minimum images to get started:**
- `device-hero.png` - Your main device render

You can use placeholder images temporarily:
```bash
# Create a simple placeholder
mkdir -p public/images
# Then add your actual images when ready
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Customize Content

Edit the section components in `src/components/sections/` to match your product:

- **Hero.tsx** - Update tagline and description
- **ProductOverview.tsx** - Adjust feature bullets
- **StorySection.tsx** - Personalize the narrative
- **FAQ.tsx** - Modify questions to match your context

### 5. Adjust Colors (Optional)

Edit `tailwind.config.ts` to change the color scheme to match your brand:

```typescript
colors: {
  accent: {
    primary: '#4FA2FF',  // Your LED blue
    secondary: '#FFC98A', // Your amber
    lines: '#5DE2D6',     // Your cyan
  }
}
```

## Next Steps

### Testing Your Site

1. **Desktop view**: Resize browser window to check responsive behavior
2. **Mobile view**: Use browser dev tools (F12) and toggle device toolbar
3. **Interactions**: Test all hover states, lightbox, FAQ accordion, form submission

### Preparing for Production

1. **Add all images** - See `public/images/README.md`
2. **Update links** - Replace placeholder links (email, portfolio, GitHub)
3. **SEO metadata** - Edit `src/app/layout.tsx` for title/description
4. **Analytics** (optional) - Add Google Analytics or Plausible

### Building for Production

```bash
npm run build
npm start
```

### Deploying to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js and deploy

Or use the Vercel CLI:
```bash
npm install -g vercel
vercel
```

## Troubleshooting

### "Module not found" errors
```bash
npm install
```

### Images not showing
- Check file paths match exactly (case-sensitive)
- Ensure images are in `public/images/`
- Clear browser cache and restart dev server

### Styling looks wrong
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

### TypeScript errors
- Most errors are type-related and won't prevent the site from running
- Fix them gradually or set `"strict": false` in `tsconfig.json`

## Project Structure Reference

```
walkman/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout, fonts, metadata
│   │   └── page.tsx        # Main landing page
│   ├── components/
│   │   ├── layout/         # Header, Footer, Section wrappers
│   │   └── sections/       # All page sections (Hero, Gallery, etc.)
│   └── styles/
│       └── globals.css     # Global styles and utilities
├── public/
│   └── images/            # Your device renders and UI screens
├── tailwind.config.ts     # Color palette and design tokens
├── tsconfig.json          # TypeScript configuration
├── package.json           # Dependencies and scripts
└── README.md             # Full documentation

```

## Need Help?

1. **Check the main README.md** for detailed documentation
2. **Review component comments** - Each file has detailed explanations
3. **Tailwind CSS docs**: [tailwindcss.com/docs](https://tailwindcss.com/docs)
4. **Next.js docs**: [nextjs.org/docs](https://nextjs.org/docs)

---

**You're all set!** 🚀

Run `npm run dev` and start customizing your retrofuturistic marketing site.
