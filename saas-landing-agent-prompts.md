# Agent Build Prompt: SaaS Product Landing Page Demo

Copy everything below into your Antigravity agent as the task prompt.

---

## ROLE & CONTEXT

You are an expert full-stack web developer, conversion copywriter, and UI/UX designer building a **portfolio demo website** for a freelance web developer. This is a fictional but highly realistic SaaS landing page for an app called **"Flowlog"** — a lightweight invoicing and time-tracking tool for freelancers (you may keep this name/concept or propose an equally sharp alternative — habit tracker, project management tool, etc. — but state your choice clearly if you change it). This is the single most commonly requested type of freelance gig, so the bar is high: it must look and convert like a landing page from a funded, well-designed startup (think Linear, Stripe, Cron, Superhuman-tier polish) — not a template or a Webflow clone-job.

Treat this as if a real SaaS founder is paying for it. Copywriting quality, visual polish, and interaction design all matter as much as raw functionality.

## TECH STACK REQUIREMENTS

- Use **React** (functional components, hooks) with **Vite**.
- Use **Tailwind CSS** for styling. No generic component-library look — this needs a distinctive visual identity, not default shadcn/Bootstrap aesthetics.
- Use **Framer Motion** for scroll-triggered reveals, hover micro-interactions, and at least one signature animated element (e.g., an animated product mockup/dashboard preview in the hero, or an animated stat counter).
- Single-page app is fine (all sections on one scrollable page with anchor-link nav), OR a lightweight multi-section structure with React Router if you prefer separate `/pricing` and `/faq` pages — your call, but state which you chose and why.
- Email signup form: functional front-end validation (proper email format, required field), simulated submission with loading + success state. Add a clearly commented placeholder function `submitEmailSignup()` where a real integration (Mailchimp, ConvertKit, custom backend) would go.
- Ensure the codebase is clean, modular, and well-commented as if handing off to another developer or client.

## SITE STRUCTURE & SECTIONS (single scrolling page with anchor nav, unless you justify otherwise)

### 1. Navbar
- Sticky, transparent-to-solid on scroll, logo/wordmark, anchor links to Features/Pricing/FAQ, and a prominent "Start Free Trial" or "Get Started" CTA button that stands out visually.
- Mobile hamburger menu.

### 2. Hero Section
- Strong, benefit-driven headline (not generic "The best way to manage your business" — make it specific and sharp, e.g., something that names the exact pain point Flowlog solves).
- Supporting subheadline (1-2 sentences) clarifying who it's for and what it does.
- Primary CTA ("Start Free Trial") + secondary CTA ("Watch Demo" or "See how it works").
- Visual centerpiece: an animated or styled product mockup/dashboard screenshot mockup (can be built with HTML/CSS/SVG shapes representing a UI — doesn't need to be a real screenshot, but must look like a believable app interface, not a stock photo).
- Small trust indicator row beneath the fold (e.g., "Trusted by 2,000+ freelancers" or logos placeholder row — use generic shape logos, not real brand logos).

### 3. Social Proof Strip
- A row of "as seen in" or client logo placeholders, OR a rotating stat bar (e.g., "10,000+ invoices sent", "$2M+ tracked", "4.9/5 average rating") — pick whichever fits your chosen product concept, animate the numbers counting up on scroll into view.

### 4. Feature Grid
- 6 features in a responsive grid (3 columns desktop, 2 tablet, 1 mobile), each with an icon (use `lucide-react` or simple SVG icons), a short feature name, and a 1-2 sentence benefit-focused description (not just "what it does" but "why it matters").
- Consider making 1-2 of these features "featured" with a larger card and a small supporting visual/illustration for variety instead of a totally uniform grid — adds visual interest.

### 5. How It Works
- A simple 3-step process section (e.g., "1. Create an invoice in seconds → 2. Send and track in real time → 3. Get paid faster") with connecting visual elements (numbered circles, a connecting line, or arrows) and short supporting copy per step.

### 6. Testimonials
- 3-4 testimonial cards with a fabricated but realistic name, role/company (e.g., "Freelance Designer" or "Consulting, Self-Employed"), a specific and credible-sounding quote (avoid generic "This app changed my life" — make it specific: mention a concrete outcome or number), and a placeholder avatar.
- Consider a carousel/slider on mobile and a static grid on desktop, or a simple horizontal scroll — your call.

### 7. Pricing Tiers
- 3 pricing tiers (e.g., Starter, Professional, Business) with a clear "Most Popular" highlighted tier (visually distinct — border, badge, slightly elevated/scaled card).
- Each tier: price (with a monthly/annual toggle that updates displayed prices and shows an annual discount, e.g., "Save 20%"), a short tagline, a feature checklist (use checkmarks, and consider greying out/x-ing features not included in lower tiers for clear differentiation), and a CTA button.
- Implement the monthly/annual toggle as real interactive state (React `useState`), not just static text.

### 8. FAQ Accordion
- 6-8 realistic questions a prospective customer would actually ask (pricing, cancellation, data security/export, integrations, free trial details, who it's for) with clear, concise answers.
- Build as an accessible accordion: only one (or multiple, your choice) open at a time, smooth expand/collapse animation, proper `aria-expanded` attributes, keyboard operable.

### 9. Final CTA Section
- A bold, visually distinct closing section (often a different background color/gradient from the rest of the page) with a strong closing headline, a short supporting line, and the primary CTA button repeated.

### 10. Email Signup (can be integrated into the Final CTA section or as its own strip)
- Email input + submit button, inline validation, loading state, success state ("Thanks! Check your inbox to confirm.").

### 11. Footer
- Logo/wordmark, short tagline, columns of links (Product, Company, Resources, Legal — placeholder links are fine), social icon placeholders, copyright line.

## DESIGN DIRECTION

- Aesthetic: modern SaaS — bold but clean. Pick a distinctive color direction (not another indigo-to-purple gradient cliché unless you execute it with real distinction) — consider a confident single accent color on a neutral (off-white/near-black) base, or a considered gradient with genuine restraint.
- Typography: a strong, modern sans-serif for headings (e.g., something with real character via Google Fonts, not just default system fonts) paired with a clean, highly readable body font. Consider a bold/tight-tracking treatment for large headline text, which is a hallmark of premium SaaS design.
- Generous white space, strong visual hierarchy, confident large type in the hero.
- Use subtle gradients, soft shadows, and rounded corners consistently — define these as reusable Tailwind theme tokens, not ad hoc inline classes.
- Motion should feel premium and restrained: fade/slide-up on scroll into view, subtle hover lift on cards and buttons, smooth accordion transitions — avoid excessive or gimmicky animation.
- Include a distinctive logo/wordmark treatment for "Flowlog" (can be a styled text logotype with an icon, doesn't need to be a complex illustrated logo).

## RESPONSIVENESS & ACCESSIBILITY (NON-NEGOTIABLE)

- True mobile-first build: design and test at 375px, 768px, 1024px, and 1440px breakpoints minimum.
- All interactive elements (nav, pricing toggle, accordion, carousel/testimonials, forms) must work correctly with touch input.
- Semantic HTML throughout, one `<h1>` in the hero, logical heading hierarchy through sections.
- All images/icons require descriptive `alt` text or `aria-hidden` if purely decorative.
- Forms have associated `<label>` elements (visually hidden acceptable but must exist for screen readers).
- Sufficient color contrast (WCAG AA minimum) — verify against your chosen palette, especially for CTA buttons and body text on colored backgrounds.
- Keyboard navigability: nav, pricing toggle, accordion, and forms all reachable/operable via Tab/Enter/Space, with visible custom focus states matching the design system.

## PERFORMANCE & CODE QUALITY

- No console errors or warnings on build or in dev mode.
- Split code sensibly into components (`Navbar.jsx`, `Hero.jsx`, `FeatureGrid.jsx`, `HowItWorks.jsx`, `Testimonials.jsx`, `PricingTiers.jsx`, `FAQAccordion.jsx`, `EmailSignup.jsx`, `Footer.jsx`, etc.) — no giant monolithic page file.
- Externalize copy-heavy content (features, testimonials, FAQ, pricing tiers) into data files (`featuresData.js`, `testimonialsData.js`, `faqData.js`, `pricingData.js`) so a real client could edit content without touching component logic.
- Include a clean `README.md` explaining: how to run locally, how to edit copy/pricing/FAQ content, how to change the color theme, and where to wire up the email signup and CTA buttons to real services.
- Ensure the project builds successfully with `npm run build` with zero errors before considering the task complete.

## DELIVERABLE CHECKLIST — VERIFY BEFORE FINISHING

- [ ] All 11 sections implemented in a cohesive single-page (or clearly justified multi-page) flow
- [ ] Hero has a strong specific headline and a believable animated product visual
- [ ] Feature grid has 6 benefit-driven (not just descriptive) feature entries
- [ ] Pricing tiers have working monthly/annual toggle and a clearly highlighted "most popular" tier
- [ ] Testimonials feel specific and credible, not generic
- [ ] FAQ accordion is accessible (keyboard operable, proper aria attributes) and covers real objections
- [ ] Email signup and CTA buttons have working front-end validation/loading/success states
- [ ] Content externalized into data files, not hardcoded inline
- [ ] Fully responsive at all breakpoints, tested via resizing
- [ ] Accessible: semantic HTML, alt text, labeled forms, visible focus states, adequate contrast
- [ ] No console errors, successful production build
- [ ] README written
- [ ] Visual design feels like a premium, funded-startup product, not a template

## FINAL INSTRUCTION

Before writing code, briefly outline your component architecture and confirm the creative direction (product concept/name, color palette, font pairing, single-page vs multi-page decision) in 4-6 sentences. Then proceed to build the full project. If you must make an assumption due to ambiguity, state the assumption inline as a code comment rather than stopping to ask — prioritize shipping a complete, working, polished result.

---
---

# Multi-Agent Build Plan: Flowlog Landing Page Demo

Feed these to Antigravity in order. Every downstream agent (2-6) should also receive the **Shared Design & Quality Context** block below — this prevents visual/style drift across parallel agents.

---

## SHARED DESIGN & QUALITY CONTEXT
*(Paste this into every agent's prompt, agents 2 through 6)*

You are contributing to a larger portfolio demo project: a SaaS landing page for "Flowlog" (or the name/concept established by the Foundation Agent — check `DESIGN_SYSTEM.md` first if it exists in the repo). This must look and convert like a landing page from a funded, well-designed startup — not a template.

Non-negotiable standards for anything you build:
- Follow `DESIGN_SYSTEM.md` exactly for colors, fonts, spacing, button/card styles, border-radius, shadow, and gradient conventions. Do not introduce new colors or fonts.
- Mobile-first responsive: test/design for 375px, 768px, 1024px, 1440px.
- Semantic HTML, logical heading hierarchy, labeled form inputs, alt text (or `aria-hidden` for decorative elements), visible custom focus states, WCAG AA contrast.
- Use Framer Motion for scroll-triggered reveals and hover micro-interactions consistent with what other sections use — premium and restrained, not gimmicky.
- Comment your code clearly, as if handing off to another developer.
- Only touch the files/folders explicitly assigned to you below. If you need something from another agent's scope that doesn't exist yet, create a minimal placeholder version, clearly comment it as a placeholder, and note it in your summary.
- No console errors. Your piece must build cleanly on its own within the larger project.

---

## AGENT 1 — FOUNDATION (runs first, alone, nothing else starts until this is done)

**Scope:** Project scaffold, theme, page shell, shared layout components.

**Files you own:** `vite.config.js`, `tailwind.config.js`, `src/main.jsx`, `src/App.jsx`, `src/index.css`, `src/components/Navbar.jsx`, `src/components/Footer.jsx`, `DESIGN_SYSTEM.md`.

**Task:**
1. Scaffold a Vite + React project with Tailwind CSS configured.
2. Decide and lock in the creative direction: product name/concept (Flowlog or your own sharp alternative), color direction (confident single accent on neutral base, or restrained gradient), font pairing (characterful modern sans for headings via Google Fonts + clean readable body font). Extend `tailwind.config.js` with named custom color tokens, font families, and reusable shadow/gradient/radius tokens — no hardcoded hex codes elsewhere in the project.
3. Build `Navbar.jsx` (sticky, transparent-to-solid on scroll, anchor links to Features/Pricing/FAQ, prominent CTA button, mobile hamburger menu) and `Footer.jsx` (logo/wordmark, link columns, social placeholders, copyright).
4. Decide single-page-with-anchors vs multi-page structure and set up the corresponding shell in `App.jsx` (React Router only if multi-page).
5. Write `DESIGN_SYSTEM.md` documenting: color tokens with hex values and usage guidance, font pairing and where each is used, spacing scale, button variants (primary/secondary/ghost) with exact Tailwind classes, card component style, border-radius/shadow/gradient conventions, and animation conventions (e.g., "fade-up on scroll, 0.4s ease, hover lift translate-y-1"). This file is the single source of truth every other agent must follow.
6. Confirm your creative decisions in a 4-6 sentence summary.

**Output when done:** Confirm the dev server runs cleanly with an empty page shell (Navbar + Footer visible, empty section anchors/placeholders between them), and `DESIGN_SYSTEM.md` is complete enough for another agent to build a matching section without further questions.

---

## AGENT 2 — CONTENT & COPY (runs after Agent 1, other page-builder agents depend on this)

**Scope:** All copywriting and structured content data. No UI/components.

**Files you own:** `src/data/featuresData.js`, `src/data/testimonialsData.js`, `src/data/pricingData.js`, `src/data/faqData.js`, `src/data/heroData.js`, `src/data/statsData.js`.

**Task:**
1. `heroData.js`: a specific, benefit-driven headline (not generic), a clarifying subheadline, primary/secondary CTA labels, and a trust-indicator line.
2. `featuresData.js`: 6 features, each `{ id, icon, title, description, featured: boolean }` — descriptions must be benefit-focused ("why it matters"), not just descriptive. Mark 1-2 as `featured: true` for larger card treatment.
3. `testimonialsData.js`: 3-4 testimonials `{ id, name, role, quote, avatarSrc }` — quotes must be specific and credible (mention a concrete outcome/number), not generic praise.
4. `pricingData.js`: 3 tiers `{ id, name, monthlyPrice, annualPrice, tagline, features: [{ label, included: boolean }], isPopular: boolean }` — ensure clear feature differentiation between tiers.
5. `faqData.js`: 6-8 realistic Q&A pairs `{ id, question, answer }` covering pricing, cancellation, data security/export, integrations, trial details, target audience.
6. `statsData.js`: 3-4 stat callouts `{ id, value, label }` for the social proof strip (e.g., "10,000+", "Invoices Sent") — numeric values structured so they can be animated as counters.

**Output when done:** All data files complete, internally consistent (same product name/positioning throughout), and exported cleanly for import by other agents.

---

## AGENT 3 — HERO + SOCIAL PROOF + HOW IT WORKS (runs after Agents 1 & 2 complete)

**Scope:** Top-of-page sections that establish first impression.

**Files you own:** `src/components/Hero.jsx`, `src/components/ProductMockup.jsx`, `src/components/SocialProofStrip.jsx`, `src/components/HowItWorks.jsx`.

**Task:**
1. **Hero:** headline/subheadline/CTAs from `heroData.js`, plus `ProductMockup.jsx` — a believable animated/styled app UI mockup built from HTML/CSS/SVG shapes (not a stock photo) as the visual centerpiece. Add a subtle entrance animation.
2. **Social Proof Strip:** render stats from `statsData.js` with animated count-up on scroll into view (trigger once, on `whileInView`).
3. **How It Works:** 3-step process section with connecting visual elements (numbered circles/line/arrows) and short supporting copy per step (write this copy yourself if not covered by Agent 2's data, keep it tight).

**Output when done:** Sections responsive, animated per `DESIGN_SYSTEM.md`, mockup looks like a credible product interface at all breakpoints.

---

## AGENT 4 — FEATURES + TESTIMONIALS (runs after Agents 1 & 2 complete, parallel to Agent 3)

**Scope:** Feature grid and testimonials sections.

**Files you own:** `src/components/FeatureGrid.jsx`, `src/components/FeatureCard.jsx`, `src/components/Testimonials.jsx`, `src/components/TestimonialCard.jsx`.

**Task:**
1. **Feature Grid:** responsive grid (3 col desktop / 2 tablet / 1 mobile) rendering `featuresData.js` via `FeatureCard.jsx`, using `lucide-react` or simple SVG icons. Give `featured: true` cards a larger/distinct treatment for visual variety.
2. **Testimonials:** render `testimonialsData.js` via `TestimonialCard.jsx` — static grid on desktop, carousel or horizontal scroll on mobile (your call, keep it smooth and touch-friendly).

**Output when done:** Both sections responsive, accessible, matching `DESIGN_SYSTEM.md` styling, visually varied rather than uniform-grid-monotonous.

---

## AGENT 5 — PRICING + FAQ + FINAL CTA/EMAIL SIGNUP (runs after Agents 1 & 2 complete, parallel to Agents 3 & 4)

**Scope:** Conversion-critical bottom-of-page sections.

**Files you own:** `src/components/PricingTiers.jsx`, `src/components/PricingCard.jsx`, `src/components/FAQAccordion.jsx`, `src/components/FinalCTA.jsx`, `src/components/EmailSignup.jsx`.

**Task:**
1. **Pricing:** render `pricingData.js` via `PricingCard.jsx` with a real working monthly/annual toggle (`useState`) that updates displayed prices and shows the annual discount. Visually highlight the `isPopular` tier (border/badge/scale).
2. **FAQ Accordion:** render `faqData.js` as an accessible accordion — smooth expand/collapse animation, proper `aria-expanded`/`aria-controls`, keyboard operable (Enter/Space to toggle, Tab to move between questions).
3. **Final CTA + Email Signup:** bold closing section (distinct background treatment per `DESIGN_SYSTEM.md`) with closing headline and repeated primary CTA, plus `EmailSignup.jsx` — validated email input, loading state, success state, and a commented placeholder `submitEmailSignup()` function for future backend integration.

**Output when done:** Pricing toggle functionally correct, accordion fully accessible, email signup has all three states (idle/loading/success) working.

---

## AGENT 6 — QA & INTEGRATION (runs last, after all others complete)

**Scope:** Whole repo — assemble, verify, fix only integration issues, do not redesign.

**Task:**
1. Assemble all sections from Agents 3, 4, and 5 into the final page shell built by Agent 1, in correct order: Navbar → Hero → Social Proof → Feature Grid → How It Works → Testimonials → Pricing → FAQ → Final CTA/Email Signup → Footer.
2. Run `npm run build` and fix any build errors or console warnings.
3. Verify all anchor nav links (or routes, if multi-page) scroll/navigate correctly.
4. Check responsiveness at 375px, 768px, 1024px, 1440px for every section — fix any breakpoints that were missed.
5. Verify accessibility: semantic tags, alt/aria attributes, form labels, focus states, run a contrast check against `DESIGN_SYSTEM.md` colors, confirm the FAQ accordion and pricing toggle are fully keyboard operable.
6. Verify design consistency across sections built by different agents — spacing, button styles, fonts, animation timing, card treatments should feel uniform. Fix any visible drift by aligning to `DESIGN_SYSTEM.md`.
7. Write the final `README.md`: how to run locally, how to edit copy/pricing/FAQ content, how to change the theme, and where to wire up email signup and CTAs to real services.
8. Go through this checklist and confirm each item explicitly in your final summary:
   - [ ] All 11 sections implemented in correct order and fully assembled
   - [ ] Hero has a strong specific headline and credible animated product visual
   - [ ] Feature grid has 6 benefit-driven entries with visual variety
   - [ ] Pricing has a working monthly/annual toggle and clear "most popular" highlight
   - [ ] Testimonials feel specific and credible
   - [ ] FAQ accordion is accessible and covers real objections
   - [ ] Email signup and CTAs have working validation/loading/success states
   - [ ] Content externalized into data files
   - [ ] Fully responsive at all breakpoints
   - [ ] Accessible: semantic HTML, alt/aria attributes, labeled forms, focus states, contrast
   - [ ] No console errors, successful production build
   - [ ] README written
   - [ ] Visual design feels like a premium, funded-startup product, consistent across all sections

---

## EXECUTION ORDER SUMMARY (tell the IDE this explicitly)

1. Agent 1 (Foundation) — solo, must finish first.
2. Agent 2 (Content/Copy) — runs immediately after Agent 1, solo (Agents 3-5 all depend on its data files).
3. Agents 3, 4, and 5 — run in parallel once Agents 1 & 2 are done (no interdependencies between them).
4. Agent 6 (QA/Integration) — last, only after every other agent has finished.
