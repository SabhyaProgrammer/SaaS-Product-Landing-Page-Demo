# Flowlog Design System

This document serves as the single source of truth for the Flowlog landing page creative direction.
All downstream agents must follow these conventions perfectly to ensure a cohesive, premium result.

## 1. Product Identity
- **Name:** Flowlog
- **Concept:** Lightweight invoicing and time-tracking for modern freelancers.
- **Vibe:** Premium SaaS, polished, fast, clean. No generic templates. Think Linear / Stripe level of restraint and confidence.

## 2. Typography
We use two Google Fonts imported in `index.html`:
- **Headings (Display):** `Outfit` — characterful, modern sans-serif. Used for `h1` through `h6`. Use tight tracking (`tracking-tight`) for large headlines. (Tailwind class: `font-display`)
- **Body Context:** `Inter` — clean, highly readable sans-serif. (Tailwind class: `font-sans`)

## 3. Color Tokens
Configured in `tailwind.config.js`. Do not use hardcoded hex values in components!
- **Background:** `bg-background` (`#f8fafc` / slate-50). The page is mostly off-white, not pure white.
- **Foreground (Text):** `text-foreground` (`#0f172a` / slate-900). 
- **Surface (Cards):** `bg-surface` (`#ffffff` / pure white) — used for elevated elements like cards.
- **Surface Alt:** `bg-surface-alt` (`#f1f5f9` / slate-100) — used for secondary buttons and subtle backgrounds.
- **Border:** `border-border` (`#e2e8f0` / slate-200) — use for all card outlines and dividers.
- **Primary Accent:** 
  - `bg-primary` (`#2563eb` / blue-600) — Electric Blue. Use sparingly for primary CTAs and important highlights.
  - `bg-primary-hover` (`#1d4ed8` / blue-700) 
  - `bg-primary-light` (`#dbeafe` / blue-100) — for soft backgrounds behind primary icons.

## 4. Components & Shapes
- **Border Radius:** Use `rounded-2xl` for large cards, `rounded-xl` for smaller elements, and `rounded-full` for standard buttons.
- **Shadows:** 
  - Card Shadow: `shadow-premium` (a soft, layered shadow for cards).
  - Primary Button Glow: `shadow-glow` (adds a soft colored glow behind primary buttons).
- **Cards:** Use the `.card` class defined in `index.css`: `@apply bg-surface rounded-2xl shadow-premium border border-border p-6 transition-all duration-300;`

## 5. Button Variants
Defined in `index.css`.
- **Primary:** `.btn-primary` (Electric blue, white text, pill shape, subtle colored glow).
- **Secondary:** `.btn-secondary` (Slate-100 background, dark text, pill shape).
- **Ghost:** `.btn-ghost` (Transparent, dark text, hover slate-100, pill shape).

## 6. Motion & Animation (Framer Motion)
Keep it premium and restrained. No zooming or spinning.
- **Scroll Reveal (Standard):** Fade up into view. 
  `initial={{ opacity: 0, y: 20 }}` -> `whileInView={{ opacity: 1, y: 0 }}`
  `transition={{ duration: 0.5, ease: "easeOut" }}`
  Set `viewport={{ once: true, margin: "-100px" }}`
- **Hover Micro-interactions:** Cards should use CSS transitions (`transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`). Buttons have hover states pre-defined in CSS.

## 7. Structure
Single scrolling page with anchor nav (`#features`, `#pricing`, `#faq`).
Mobile-first approach. Ensure padding is `px-4` on mobile and `md:px-6` on tablet/desktop. Standard vertical section padding is `py-20` to `py-24` for breathing room.
