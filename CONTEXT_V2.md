# Webpage-2 | Master Context & Complete Project History (v1 to v2)

> **Document Purpose:** Complete, uncompressed master chronicle bridging the entire 247-message conversation (October 5, 2026 – October 21, 2026) for **Humayoun Kobir's Portfolio & Software HQ**. This document archives every architectural milestone, strict pair-programming rule, SEO strategy, diagnostic audit, and technical optimization implemented across all project phases.

---

## 1. Project Identity & Architecture

* **Live Deployment:** [https://humayounkobir.vercel.app/](https://humayounkobir.vercel.app/)
* **Workspace Directory:** `F:\Me & My Docs\1. Recent Projects\Webpage-2\`
* **Target Environment:** Vercel Global Edge Network (HTTP/2, HTTP/3, Brotli/Gzip)
* **Design Philosophy:** Pure Vanilla Web Architecture (HTML5 + CSS3 + ES6+). Zero Tailwind, zero bloated external frameworks. 60fps GPU-accelerated micro-animations, bespoke glassmorphism, CAD reticle branding, and dark/light adaptive aesthetics.
* **Dual-Language & Brand Presentation:**
  * **English:** `"I'm Humayoun Kobir"` (Diploma Engineer & Designer)
  * **Bangla:** `"আমি হুমায়ুন কবির"` (প্রকৌশলী ও ডিজাইনার)

---

## 2. Core Repository Structure

| File | Purpose & Responsibilities |
| :--- | :--- |
| `index.html` | Core Portfolio: Hero greeting, typing animation, About bio, Skills matrix, Projects showcase (SnapSignFit, HK-Tool, Arch, DUET, Store designs), Contact section, and Bento UI layout. |
| `files.html` | **Software HQ**: Standalone client-side utility explorer with live instant search, category dropdown filter, hash routing (`#tool-id`), markdown documentation modal, and one-click code copy. |
| `files.js` | Software HQ Runtime: Complete catalog of tools, utilities, registry fixes, drivers, and pre-activated software with bilingual descriptions (`readme` / `readme_bn`). |
| `style.css` | Global Design System: CSS custom properties (variables), light/dark color tokens, hardware-accelerated navigation glider, typography, responsive breakpoints, and mobile drawer. |
| `loader.css` & `loader.js` | **CAD Reticle Preloader**: Precision engineered preloader with animated alignment crosshairs, interlocking "HK" brand mark, live percentage counter (`0%` to `100%`), 60fps GPU transforms, and session-storage bypass. |
| `script.js` | Main Portfolio Controller: Dark/Light theme switching, bilingual dictionary translations, typing carousel, active section observer, navigation glider sync, and full-screen lightbox viewer. |
| `404.html` | Error Page: Clean 404 page styled with site tokens and unified `Manrope` & `Hind Siliguri` typography. |
| `llms.txt` | Agentic AI Specification: Spec-compliant index mapping all site documentation and tools for autonomous LLM crawlers. |
| `vercel.json` | Serverless Routing: Clean URLs, security headers, and 1-year immutable caching for static assets. |
| `robots.txt`, `sitemap.xml`, `site.webmanifest` | Full SEO discoverability and PWA integration. |

---

## 3. Strict Pair-Programming Rules & Policies

1. **Scratch & Temporary Files (STRICT RULE):**
   * **NEVER** create scratch folders, temporary Python/Node test scripts, browser debug profiles, or temporary files directly in `Webpage-2/`.
   * All temporary work, test scripts, or scratch files must strictly use:
     ```
     F:\Me & My Docs\1. Recent Projects\Webpage-2 extra files\scratch\
     ```
   * Keep the production repository completely clean.

2. **Project Graphics & Asset Management:**
   * Production graphics are stored in `assets/site-images/` as optimized **WebP** images.
   * **Single File per Graphic:** Keep **only 1 clean WebP file** per project image. Do NOT generate multiple redundant breakpoint files (`-480w`, `-800w`, `-1200w`).
   * **Original Assets:** High-resolution graphic sources are preserved in `assets/site-images/originals/`. Never delete or serve files directly from `originals/`.
   * **Naming:** Lowercase kebab-case format (referenced in `rename-map.md`).

3. **Photo Viewer / Lightbox Standards:**
   * **No Skeletons / No LQIP Blur Flickering:** Do NOT use blurred base64 LQIP previews, skeleton shimmers, or decode fade delays in the photo viewer. Images must load directly and sharply with zero stutter.
   * **Pre-warming:** Preload gallery images in memory so transitions are instant at 60fps.
   * **Mobile Viewport:** On mobile (`max-width: 768px`), side navigation chevrons and bottom instruction footer must remain hidden (`display: none`) for a clean, edge-to-edge view. Swipe navigation, double-tap zoom, and pinch-to-zoom must remain active.

4. **Typography Standards:**
   * Pure Dual-Font Stack: **Manrope** for Latin/English; **Hind Siliguri** for Bengali.
   * Zero third-party extra fonts allowed (`Poppins` and `JetBrains Mono` were completely removed).

---

## 4. Full Chronicle of Project Evolution (October 5 – October 21)

### Phase 1: Semantic SEO & Multi-Variant Entity Resolution (Oct 5)
* Integrated master schema graph (`universal-masterpiece-seo.md`) in `index.html`.
* Implemented comprehensive phonetic and combinational permutations of **Humayoun Kobir / Humayun Kabir / হুমায়ূন কবির** across JSON-LD, Dublin Core (`DC.title`, `DC.creator`, `DC.subject`), OpenGraph, and Twitter cards.
* Standardized document `<title>` to:
  `Humayoun Kobir | Diploma Engineer & Designer Portfolio`
* Cleaned up legacy Python scraper scripts (`check_seo.py`, `gen_queries.py`, `seeds.json`, `intents.json`).

### Phase 2: Software HQ Development (`files.html` & `files.js`)
* Built the modern Software HQ repository interface.
* Engineered responsive grid view, category filtering pills (Productivity, System, Storage, Optimization, Diagnostics, Creative), and instant real-time search.
* Added markdown modal documentation reader with dual-language support (`readme` and `readme_bn`).
* Integrated code block copy-to-clipboard functionality with toast notifications.
* Implemented deep hash routing (`#utilities/everything`, `#system/mas-activation`) for direct linking.

### Phase 3: Bespoke CAD Reticle Site Preloader
* Engineered a custom preloader (`loader.css`, `loader.js`) that paints before first render to guarantee **0 Cumulative Layout Shift (CLS = 0)**.
* Integrated CAD drafting reticle crosshairs and an interlocking "HK" brand logo.
* Added live progress gauge with numeric percentage readout (`0%` to `100%` in English, `০%` to `১০০%` in Bangla).
* Added reload-detection and `sessionStorage.setItem('sl_seen', '1')` to prevent annoying repeat animations on same-tab navigation.

### Phase 4: Image Optimization & Gallery Overhaul
* Backed up all high-res original assets safely into `assets/site-images/originals/`.
* Converted all gallery graphics to single, optimized `.webp` files.
* Created `rename-map.md` mapping old names to descriptive kebab-case names.
* Updated Mobile Express project with new local assets (`Mobile Express Logo.webp` and `mobile-express-facebook-ad.webp`).
* Overhauled lightbox: eliminated skeleton shimmer and LQIP blur in favor of direct sharp rendering; added mobile swipe touch gestures.

### Phase 5: Hamburger Menu & Glider Navigation Sync
* Redesigned mobile expanding navigation menu to slide down smoothly from the navbar container.
* Synchronized desktop pill glider (`syncActiveGlider` and `updateGliderSync`) using hardware-accelerated `translate3d` and scroll-position tracking.
* Polished light/dark mode contrast toggles and backdrop-blur effects.

### Phase 6: PageSpeed Insights Audit & Remediation (Oct 20–21)
* Analyzed Google PageSpeed Insights for `https://humayounkobir.vercel.app/`:
  * **Initial Scores:** Desktop 73, Mobile 59.
  * **Identified Critical Bottleneck:** 3.06 MB uncompressed GIF asset (`Logo-Animation.gif`) delaying Mobile LCP to 21.6s.
* **Actions Taken:**
  * Discarded artifact-ridden dithered test conversions in favor of the user's clean source file `1014(1).gif`.
  * Preserved original 3.06 MB GIF in `assets/site-images/originals/Logo-Animation.gif`.
  * Deployed clean 903 KB GIF to `assets/site-images/Logo-Animation.gif` (**saving 2.15 MB / 70.5% payload**).
  * Fixed 1px border lines and monogram scaling: set `.mark img` to `transform: scale(1.55)` (hover `scale(1.62)`) with `contain: paint` to center the monogram and push border lines outside `overflow: hidden`.
  * Added `<link rel="preload" as="image" href="assets/site-images/refined.webp" type="image/webp">` to eliminate LCP delay.
  * Updated `vercel.json` with 1-year immutable caching for static assets.
  * Reformatted `llms.txt` per official specifications.

### Phase 7: Accessibility & WCAG AA Contrast Compliance
* Resolved Lighthouse `[aria-*] attributes do not match their roles` by adding `role="switch"` and `aria-checked` to `#langToggle`, `#themeToggle`, `#langToggleMobile`, and `#themeToggleMobile`.
* Enhanced inactive toggle label contrast in `style.css`:
  * Light Mode Inactive: `#475569` (Contrast ratio **5.8:1**, exceeds WCAG AA 4.5:1).
  * Dark Mode Inactive: `#94a3b8` (Contrast ratio **5.45:1**, exceeds WCAG AA 4.5:1).

### Phase 8: Typography Overhaul — Zero-Flash Toggle & Numeral "১" Fix
* **Eliminated the 0.3s FOUT Language Toggle Glitch:**
  * *Root Cause:* Browsers lazy-load font files; when loading in English, Hind Siliguri's WOFF2 files were not downloaded. Clicking the toggle caused a 0.3s fallback font flash (`Nirmala UI`) while fetching from Google.
  * *Solution:* Built a 4-layer pre-warming system:
    1. Preloaded Hind Siliguri WOFF2 subsets (400, 600, 700) in `<head>` via `<link rel="preload" as="font">`.
    2. Embedded an invisible DOM pre-warming beacon (`বাংলা হুমায়ূন কবির ১`) with `font-family: 'Hind Siliguri'` before `</body>` to force initial GPU rasterization.
    3. Called `document.fonts.load()` in boot scripts.
    4. Guarded `toggleLanguage()` with `document.fonts.check('1em "Hind Siliguri"')`, ensuring the text never flips until the font is ready in RAM.
* **Fixed Distorted Bangla Numeral "১":**
  * Created `@font-face BanglaOneClean` targeting `unicode-range: U+09E7` using native system fonts (`Nirmala UI`, `Noto Sans Bengali`, `Kohinoor Bangla`, `Segoe UI`, `Vrinda`).
  * Yields crisp, standard numeral "১" with **0 extra bytes downloaded**.
* **Removed Redundant Fonts:**
  * Purged `Poppins` from `404.html`.
  * Replaced `JetBrains Mono` in `files.html` with system monospace (`'Consolas', 'Courier New', monospace`).

### Phase 9: Cloudflare R2 Asset Offloading & 93% Repo Weight Reduction (Oct 21)
* **Offloaded all heavy Software HQ downloadable assets, scripts, and utilities to Cloudflare R2**:
  * Target Bucket: `software-hq` (APAC region).
  * Public Endpoint: `https://pub-99ac10b0e7f146fb9cde114019bb15b1.r2.dev/`
  * Complete safety backup preserved locally in:
    `F:\Me & My Docs\1. Recent Projects\Webpage-2 extra files\assets-backup-pre-r2\` (74 files, 192.64 MB).
  * 31 assets/scripts uploaded directly via S3 SigV4 API with 100% success rate (HTTP 200 OK verified on all endpoints).
* **Codebase & Config Updates**:
  * `files.js`: Updated all 30 utility entries to point to fast Cloudflare R2 public URLs; enhanced `isDirectArchive` regex to natively trigger downloads for `.bat`, `.reg`, `.ahk`, and `.txt` files.
  * `sw.js`: Cached asset path updated to `./assets/site-images/cursor-preview.webp`.
  * `README.md`: Updated asset tables to reference Cloudflare R2.
* **Results**:
  * **Working tree dropped from 193.33 MB to ~13 MB (93.3% reduction)**.
  * Local project directory is now featherweight and contains only source code + optimized WebP site graphics.

---

## 5. Current Modified Files (Ready for Commit)

```
 M 404.html    -> Removed Poppins; unified with Manrope & Hind Siliguri
 M files.html  -> Added font preloads, beacon, replaced JetBrains Mono, display=swap
 M files.js    -> Migrated all Software HQ downloads to Cloudflare R2; font pre-warming & guard
 M index.html  -> Added font preloads, beacon, display=swap, BanglaOneClean
 M loader.css  -> Added BanglaOneClean to CAD preloader typography
 M script.js   -> Added font pre-warming and async font-ready guard in toggleLanguage
 M style.css   -> Added @font-face BanglaOneClean, updated Bangla typography stacks
 M sw.js       -> Updated cursor-preview path to assets/site-images/
 M README.md   -> Updated Software HQ asset sources to Cloudflare R2
 D assets/...  -> Removed ~180 MB of binary archives offloaded to Cloudflare R2
```

---

## 6. How to Resume in v2
When opening your new conversation (v2), you can simply provide or reference this document:
`C:\Users\Humayoun\Desktop\Webpage-2_Context_Master_v2.md`
The agent will immediately have full awareness of the entire 16-day project history, all 247 messages of context, all rules, and current unstaged file states.

