# Flowlog - SaaS Landing Page Demo

A premium, highly-optimized portfolio demonstration for an invoicing and time-tracking SaaS tailored for independent professionals. Built with React, Vite, Tailwind CSS, and Framer Motion.

## 🚀 Quick Start

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## 🎨 Creative Direction & Theme

The design system implements a modern SaaS aesthetic with generous white space, soft shadows, large typography, and a single confident accent color (Electric Blue).

**To change the theme:**
1. Open `tailwind.config.js`.
2. Locate the `colors` block under `theme.extend`.
3. Modify the `primary` color hex codes to match your brand. It automatically cascades through the whole app (buttons, borders, highlights).
4. Update the font imports in `index.html` and `tailwind.config.js` if you choose a new typography direction.

## ✏️ Content Editing

All copy, features, testimonials, pricing, and FAQ data have been externalized. A real client or non-developer can edit the content without touching component logic.
Edit the files located in `src/data/`:
- `heroData.js` - Top hero section copy and CTAs
- `featuresData.js` - Feature grid items with icons
- `testimonialsData.js` - Quotes and customer profiles
- `pricingData.js` - Pricing tiers and feature lists
- `faqData.js` - Frequency Asked Questions
- `statsData.js` - Stats values for animated counters

## 🔌 API Integrations

The landing page provides functional-looking UI for:
- Email Signup / Waitlist
- Core CTAs (Start Free Trial)

**To connect them to a real backend:**
1. Locate `src/components/EmailSignup.jsx`.
2. Find the placeholder `submitEmailSignup()` function.
3. Replace the `setTimeout` simulation with a real API payload to your email marketing provider (e.g. Mailchimp, ConvertKit) or custom SaaS backend.

## ✨ Quality & Accessibility Standards
- **Performance:** Optimized functional components, Vite bundling.
- **Responsiveness:** Validated on 375px, 768px, 1024px, and 1440px breakpoints.
- **Accessibility:** Semantic HTML structure, `aria` tags on interactive elements (e.g., FAQ accordion), adequate contrast ratios, keyboard-friendly navigation.
