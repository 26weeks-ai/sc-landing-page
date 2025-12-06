# sc-landing-page Style Guide (V)


# FigmaMake V10

## Color System

### Core Background

- `background-main`: `#050816`  
  Used for: overall page background and footer.

- `background-hero-gradient-from`: `#0A0E2A`  
- `background-hero-gradient-to`: `#170E39`  
  Used for: hero background gradient (`linear-gradient(135deg, #0A0E2A, #170E39)` plus subtle radial glows).

- `nav-background`: `#202330`  
  Used for: navbar backdrop (via `rgba(32, 35, 48, 0.9)`).

### Text

- `text-primary`: `#FFFFFF`  
  Used for: hero heading, section titles, key labels.

- `text-secondary`: `#8D9AB0`  
  Used for: body copy, helper text, secondary labels.  
  Note: always prefer slightly blue‑leaning gray (like `#8D9AB0`) over neutral gray.

### Brand Gradients

- `brand-gradient-a-from`: `#4D66F1`  
- `brand-gradient-a-to`: `#7E86F6`  
  Shorthand: `brand-gradient-a = linear-gradient(135deg, #4D66F1, #7E86F6)`

Used for:
- Primary CTAs (`get started`)
- Recommended pricing badge
- Logo “cells” word
- `.ai` pill background (soft variant)
- Impact/how‑it‑works icons and some accent chips

- `accent-gradient-b-from`: `#5BC0F4`  
- `accent-gradient-b-to`: `#9F8BF8`  
  Shorthand: `accent-gradient-b = linear-gradient(135deg, #5BC0F4, #9F8BF8)`

Used for:
- Rotating platform word in the hero tagline (`facebook / reddit / instagram / linkedin / the internet`)
- Occasional accent text where needed

### Secondary / Legacy Accents

These exist in components and can be normalized over time:

- Electric blue: `#3A6FF8`  
- Cyber purple: `#6A4BFF`  
- Neon aqua: `#2EE7E0`  
- Nano green: `#37FF8B` (status “active”/“online” dots)
- Link/hover accent: `#5BC0F4`
- Borders/background tints: `rgba(148, 163, 184, 0.1–0.4)`, `rgba(10, 16, 35, 0.6)`, etc.

### Logo Lockup

- `sleeper`: `#FFFFFF` (`text-primary`)
- `cells`: `brand-gradient-a` as text fill (`background-clip: text; color: transparent`)
- `.ai` pill:
  - Background: `linear-gradient(135deg, rgba(77, 102, 241, 0.18), rgba(126, 134, 246, 0.22))`
  - Border: `1px solid rgba(77, 102, 241, 0.5)`
  - Text: `#FFFFFF`

---

## Typography

### Font Families

- Primary: `Satoshi` (from Fontshare)
- Fallback stack: `ui-sans-serif, system-ui, sans-serif`
- Monospace (when needed): Tailwind’s default mono stack  
  `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`

### Hierarchy & Weights

- **Hero heading**
  - Base from `h1` in CSS: `font-size: 3.5rem; font-weight: 700; line-height: 1.1;`
  - In hero: visually ~`2.9–3rem`, `font-weight: 800`
  - Keyword “attention”: `font-weight: 800–900`, slightly larger size for emphasis.

- **Section titles (`impact`, `how it works`, `features`, `pricing`)**
  - Typically `text-2xl` with `font-semibold` (~`1.5–1.75rem`, weight 600–700).
  - Sentence case, not title case.

- **Card titles (`h3`-like)**
  - `font-size` ~`1rem–1.1rem` (`text-base`), `font-weight: 600` (`font-semibold`).

- **Body copy**
  - Default `p`: `font-size: 1.125rem; line-height: 1.7;` (global)
  - In cards and subtitles: `text-sm`–`1.05rem`, `font-weight: 400–500`, `color: text-secondary`.

- **Small labels / badges**
  - `text-xs` or `0.65–0.75rem` (e.g., “style guide · colors”, “recommended”, “coming soon`”)
  - Uppercase tracking for badges, e.g. `letter-spacing` around `0.18em`.

### Casing Rules

- Hero and section headings: sentence case  
  e.g. `how it works`, `create targeted attention for your brand across…`
- Nav and footer labels: all lowercase (`impact`, `pricing`, `about`, `privacy`, `terms`, `security`).
- Avoid all‑caps headings (`text-transform: uppercase` should only be used for tiny badges/chips).

---

## Components & Patterns

- **Primary button (`get started`)**
  - Shape: `border-radius: 9999px` (pill)
  - Background: `brand-gradient-a`
  - Text: `#FFFFFF`
  - Shadow: soft glow, e.g. `0 8px 30px rgba(77, 102, 241, 0.4)`

- **Secondary button (`book demo`)**
  - Shape: pill
  - Background: `rgba(10, 16, 35, 0.6)` (dark translucent)
  - Border: `1px solid rgba(148, 163, 184, 0.4)`
  - Text: `text-secondary`

- **Hero rotating word**
  - Uses `TypingAnimation` with `accent-gradient-b` applied to the text span via `background-clip: text; color: transparent`.

Use these tokens and typography rules for all future L2/L3 flows and additional pages (onboarding steps, dashboards, etc.) to keep the brand consistent.




# FigmaMake V9

## Color System

### Core Background

- `background-main`: `#020617` → `#020617` / `#020617`  
  Used via Tailwind gradient: `bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950`  
  Approx hex values:
  - `slate-950`: `#020617`
  - `slate-900`: `#0f172a`

- Hero orbs:
  - Blue orb: `bg-blue-600/20` → base `#2563EB` at 20% opacity
  - Purple orb: `bg-purple-600/20` → base `#7C3AED` at 20% opacity

### Text

- `text-primary`: `#E5E7EB`–`#F9FAFB`  
  Used via Tailwind `text-white` and heading styles; effectively white or very light gray.

- `text-secondary`: `#9CA3AF`–`#94A3B8`  
  Used via `text-slate-400` for body copy and secondary labels.

### Brand Gradients & Accents

Primary hero/CTA gradients (v9):

- Blue → purple gradient:
  - `from-blue-600` (`#2563EB`)
  - `to-purple-600` (`#7C3AED`)
  - Hover states shift to:
    - `from-blue-500` (`#3B82F6`)
    - `to-purple-500` (`#A855F7`)

- Cyan → blue → purple text gradient:
  - `from-cyan-400` (`#22D3EE`)
  - `via-blue-400` (`#60A5FA`)
  - `to-purple-400` (`#A855F7` approx)

- Accent gradients inside feature icons:
  - `from-blue-600` (`#2563EB`) → `to-purple-600` (`#7C3AED`)
  - `from-purple-600` (`#7C3AED`) → `to-cyan-600` (`#0891B2`)
  - `from-cyan-600` (`#0891B2`) → `to-purple-600` (`#7C3AED`)

Card and surface backgrounds:

- `bg-slate-800/50` → base `#1F2937` at 50% opacity
- `bg-slate-900/50` → base `#111827` at 50% opacity
- Borders use `border-slate-700` / `border-slate-800`:
  - `slate-700`: `#374151`
  - `slate-800`: `#1F2937`

Footer:

- Background: `border-t border-slate-800` over main gradient
- Text: `text-slate-400` (`#9CA3AF`)

---

## Typography

### Font Families

- Primary body: `ui-sans-serif, system-ui, sans-serif`
- Headlines (via globals): `'Satoshi', ui-sans-serif, system-ui, sans-serif`  
  Imported from Fontshare with weight 700.

### Hierarchy & Weights

- **Hero heading**
  - `h1` global: `font-size: 3.5rem; font-weight: 700; line-height: 1.1; letter-spacing: -0.01em;`
  - In hero: multi-line “Create Targeted Attention / For Your Brand Across / [rotating word]” using that base size and weight.
  - Rotating word is gradient text (`from-cyan-400 via-blue-400 to-purple-400`) with `TypingAnimation`.

- **Section titles (`Why Choose SleeperCells.ai`, CTA heading)**
  - `h2` global: `font-size: 2.5rem; font-weight: 700; line-height: 1.2;`
  - Often rendered as a single line with gradient text using `from-blue-400 to-purple-400`.

- **Card titles (`h3`)**
  - Global: `font-size: 1.5rem; font-weight: 600; line-height: 1.3;`
  - In features grid: plain white text with Tailwind `text-white font-semibold`.

- **Body copy**
  - Global `p`: `font-size: 1.125rem; line-height: 1.7;`
  - In hero and features: `text-slate-400` for contrast against dark background, usually single paragraph per block.

### Casing Rules

- Hero heading: Title Case (`Create Targeted Attention / For Your Brand Across`)  
- Nav items and footer section headers: Title Case (`Features`, `Pricing`, `Product`, `Company`, `Legal`).
- No enforced `text-transform`; casing is mostly controlled by literal text content.

---

## Components & Patterns (V9)

- **Logo**
  - Icon: square `8x8` with gradient background `from-blue-500 to-purple-600`, containing a white `Sparkles` icon.
  - Wordmark: `SleeperCells.ai` text with `bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent`.

- **Primary hero button (`Start Your Campaign` / `Get Started`)**
  - Background: `bg-gradient-to-r from-blue-600 to-purple-600`
  - Hover: `from-blue-500 to-purple-500`
  - Shape: rounded (`rounded-lg`)
  - Shadow: `shadow-lg shadow-blue-500/25` (sometimes intensified on hover).

- **Secondary hero button (`Watch Demo` / `Schedule a Demo`)**
  - Background: `bg-slate-800/50` → `bg-slate-800` on hover
  - Border: `border border-slate-700`
  - Text: `text-slate-200`–`text-slate-300`.

- **Feature cards**
  - Background: `bg-gradient-to-br from-slate-800/50 to-slate-900/50`
  - Border: `border border-slate-700`
  - Icon container: 48x48 (`w-12 h-12`) with gradient backgrounds like `from-blue-600 to-purple-600`; scales up on hover.

- **CTA strip**
  - Background overlay: `bg-gradient-to-r from-blue-600/10 to-purple-600/10`
  - Heading: white with gradient subline (`from-cyan-400 to-purple-400`).
  - Buttons: same primary / secondary pattern as hero.

- **Footer**
  - Top border: `border-t border-slate-800`
  - Section headings: white (`text-white`)
  - Links: `text-slate-400` with hover `text-cyan-400`
  - Tagline: `AI-powered 0-click advertising for modern brands.`

---

(This V9 section documents the previous iteration so differences against the FigmaMake V10 style guide above are explicit.)
