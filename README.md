# ScoutGPT Landing Page

A premium, scroll-driven landing page for ScoutGPT - AI-powered property search and analysis platform.

## 🚀 Built With

- **React 18** - Modern UI library
- **Vite** - Lightning-fast build tool
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth scroll animations
- **Lucide React** - Beautiful icons

## 🎨 Design Philosophy

Inspired by Felt.com's approach:
- Dark theme with clean aesthetics
- Scroll-driven product storytelling
- Large, immersive product screenshots
- Smooth animations and transitions
- Generous whitespace
- Premium, modern feel

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx                 # Navigation with scroll effects
│   ├── Hero.tsx                   # Hero section with gradient
│   ├── AISearchShowcase.tsx       # AI search demo
│   ├── GISMapping.tsx             # GIS features showcase
│   ├── EnvironmentalAnalysis.tsx  # Environmental tools
│   ├── TestimonialQuote.tsx       # Customer testimonial
│   ├── BenefitsGrid.tsx           # Key benefits
│   ├── ScoutM1.tsx                # Discovery engine section
│   ├── FeaturesList.tsx           # All features grid
│   ├── ProcessWorkflow.tsx        # 3-step workflow
│   ├── Pricing.tsx                # Pricing plans with toggle
│   ├── FAQ.tsx                    # Accordion FAQ
│   ├── CTASection.tsx             # Final call-to-action
│   ├── Footer.tsx                 # Footer with links
│   └── ProductImage.tsx           # Image utilities
├── App.tsx                        # Main app component
├── main.tsx                       # Entry point
└── index.css                      # Global styles & variables

## 🖼️ Adding Product Screenshots

Replace placeholder images in `/public/images/`:

1. `hero-ai-chat.png` - AI chat interface screenshot
2. `gis-zoning-layers.png` - GIS map with zoning overlays
3. `flood-zone-analysis.png` - Flood zone visualization
4. `property-details.png` - Property detail view

Recommended dimensions: 1920x1080px or higher

## 🛠️ Development

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

Visit http://localhost:5173

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🌈 Color Palette

```css
--color-primary: #3B82F6    /* Blue */
--color-secondary: #06B6D4   /* Cyan */
--color-accent: #8B5CF6      /* Purple */
--bg-dark: #0A0F1E           /* Dark background */
--bg-darker: #050A14         /* Darker background */
```

## 📱 Responsive Design

Fully responsive across all devices:
- Mobile: 320px+
- Tablet: 768px+
- Desktop: 1024px+
- Large: 1280px+

## ⚡ Performance

- Lazy loading images
- Code splitting
- Optimized animations (60fps)
- Tree-shaking unused code
- Compressed production bundle

## 🚢 Deployment

### Netlify

1. Connect your repository
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy!

### Vercel

```bash
npm i -g vercel
vercel
```

## 📝 Customization

### Update Content

Edit component files in `src/components/` to update:
- Headlines and copy
- Features and benefits
- Pricing plans
- FAQ questions

### Modify Styles

- Global styles: `src/index.css`
- Tailwind config: `tailwind.config.cjs`
- CSS variables in `:root`

### Add Sections

1. Create new component in `src/components/`
2. Import in `src/App.tsx`
3. Add to render tree

## 🔧 Troubleshooting

**Build fails:**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Animations not working:**
- Check `framer-motion` is installed
- Verify browser supports modern CSS

## 📄 License

Private - All Rights Reserved

## 💬 Support

For questions or issues, contact: landio@support.com

---

Built with ❤️ for modern real estate professionals
