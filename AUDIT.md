# Comprehensive Performance & Fluidity Audit (AUDIT.md)
**Project:** Humayoun Kobir Portfolio & Software HQ (`Webpage-2`)  
**Audit Standard:** Apple-Grade Fluidity & Buttery Smooth 60/120fps Architecture  
**Target:** Flawless 60fps on low-end / software-rendered (No-GPU) devices; instant Apple-like responsiveness; zero visual regression.

---

## 1. Project Architecture & Stack Overview

| Dimension | Details |
| :--- | :--- |
| **Architecture** | Pure Vanilla Web Architecture (HTML5 + CSS3 + ES6+). Zero Tailwind, zero external component frameworks. |
| **Pages & Routes** | 1. `index.html` (Hero, Bio, Skills, Projects, Bento UI, Contact, Photo Viewer)<br>2. `files.html` (Software HQ repository, search, categories, documentation modal)<br>3. `404.html` (Error page) |
| **Hosting & Edge** | Vercel Global Edge Network (HTTP/2, HTTP/3, Brotli/Gzip) |
| **Asset Storage** | Cloudflare R2 Global Anycast CDN (`software-hq` bucket) |
| **Typography** | Manrope (400, 600, 700) + Hind Siliguri (400, 600, 700) + `@font-face BanglaOneClean` |
| **Service Worker** | `sw.js` (Cache-first offline PWA architecture) |

---

## 2. Animation & Transition Inventory

| Component / Effect | Trigger | Properties Animated | Current Technique | Compositor Safe? | Bottleneck / Optimization Opportunity |
| :--- | :--- | :--- | :--- | :---: | :--- |
| **Preloader Rings** | Page Load / Refresh | `transform: rotate()` | CSS `@keyframes sl-spin` | **Yes** | GPU-accelerated. Smooth on all devices. |
| **Preloader Monogram Sheen** | Page Load | `background-position` | CSS `@keyframes sl-sheen` | **Partial** | Animating `background-position` triggers paint on every frame. Convert to pseudo-element `transform: translate3d()`. |
| **Ambient Background Glow** | Continuous (Desktop) | `transform`, `scale` | CSS `@keyframes randomLight` + `filter: blur(25px)` | **No** | Heavy `blur(25px)` on whole-page fixed element forces continuous CPU rasterization on machines without dedicated GPU drivers. |
| **Navigation Glider** | Scroll / Click | `transform: translate3d()`, `width` | JS inline style + CSS cubic-bezier transition | **Partial** | Animating `width` triggers layout reflows. Can be converted to pure `transform: translate3d(X,0,0) scaleX(S)` with `transform-origin: left`. |
| **Scroll Section Reveal** | Scroll into viewport | `opacity`, `transform: translate3d()` | `IntersectionObserver` + CSS transition | **Yes** | Compositor safe, but has permanent `will-change: transform, opacity` consuming GPU memory. |
| **Typing Carousel** | Time-based loop | Text node typing / backspacing | `setInterval` / `setTimeout` string slice | **Yes** | Low overhead, pauses when scrolled out of view via `IntersectionObserver`. |
| **Mobile Drawer Menu** | Click hamburger | `transform: translateY()`, `opacity` | CSS transition | **Yes** | Smooth slide-down container. |
| **Lightbox Photo Viewer** | Click project image | `transform: translate3d()`, `scale()` | Pointer events, gesture pan/pinch, WAAPI | **Yes** | Direct WebP rendering with zero skeleton stutter. Global `mousemove` listener can be restricted to active viewer state only. |
| **Page-to-Page Navigation** | Click Software HQ / Back | `pageExitLeft` / `pageExitRight` | `sessionStorage` + `setTimeout(200ms)` hard reload | **No** | Hard page reload breaks continuous surface feel. Can leverage native **View Transitions API** (`@view-transition { navigation: auto; }`) and **Speculation Rules API**. |

---

## 3. Interaction & Input Path Audit

| Action / Path | Current Latency | Target INP | Root Cause of Delay (if any) | Fix Strategy |
| :--- | :--- | :--- | :--- | :--- |
| **Navbar Pill Click** | ~40ms | < 20ms | Synchronous layout reads in glider update | Batch DOM reads/writes; instantaneous active class change |
| **Theme / Lang Toggles** | ~30ms | < 16ms | Font ready check / DOM query | Already pre-warmed; add instant tactile `:active` spring press state |
| **Software HQ Search** | ~50ms | < 30ms | String matching on 40 items + DOM re-render | Debounce rAF rendering; virtualize or batch element appends |
| **Category Pill Filter** | ~25ms | < 16ms | Class toggle + DOM filtering | Micro-optimistic state update; CSS `content-visibility: auto` |
| **Mobile Hamburger Tap** | ~60ms | < 30ms | 300ms tap delay risk on older mobile engines | Enforce `touch-action: manipulation` across all interactive targets |
| **External Download Click** | Instant | < 16ms | Offloaded to Cloudflare R2 | Direct browser native download stream |

---

## 4. Ranked Issue List by Performance Impact

### Impact Level 1: CRITICAL (Smoothness & CPU Cost on Weak / No-GPU Devices)
1. **Full-Viewport Continuous Blur Repaint (`body:before` in `style.css`):**
   * *Issue:* `filter: blur(25px)` animated indefinitely over 25s with `radial-gradient` forces software rasterizers (SwiftShader / basic display drivers) to recalculate full-screen blur buffers continuously.
   * *Fix:* Pre-render or isolate the ambient light with CSS containment, reduce blur overhead, or throttle when software rendering / low frame rates are detected.
2. **Permanent Layer Promotion (`will-change: transform, opacity`):**
   * *Issue:* Indiscriminate `will-change` on all `.reveal` cards and containers forces GPU memory allocation for dozens of offscreen layers.
   * *Fix:* Dynamically apply `will-change` only when intersecting or animating, then drop back to `auto`.
3. **Glider `width` Layout Thrashing:**
   * *Issue:* Animating `width` triggers browser layout reflow.
   * *Fix:* Use `transform: translate3d(X, 0, 0) scaleX(S)` with `transform-origin: 0 50%` so the glider is 100% compositor-driven.

### Impact Level 2: HIGH (Perceived Instant Navigation & Fluidity)
4. **Cross-Document Navigation Hard Reload:**
   * *Issue:* Navigating between `index.html` and `files.html` triggers a standard document reload, even with CSS page slide animations.
   * *Fix:* Implement native CSS **Cross-Document View Transitions** (`@view-transition { navigation: auto; }`) with persistent navbar morphing and instant crossfade.
5. **Speculation Rules Pre-rendering:**
   * *Issue:* Next page is fetched only upon user click.
   * *Fix:* Inject `<script type="speculationrules">` to prefetch/prerender `files.html` and `index.html` on hover/pointerdown, making page transitions instantaneous.
6. **Bfcache Eligibility:**
   * *Issue:* Guarantee zero `unload` event handlers so back/forward navigation restores state instantly from memory.

### Impact Level 3: MEDIUM (Tactile Responsiveness & Input Feedback)
7. **Apple-Grade Spring Micro-States (`:active` & Pointerdown):**
   * *Issue:* Buttons lack immediate tactile feedback on `pointerdown` before click resolution.
   * *Fix:* Add high-performance GPU `:active { transform: scale(0.97); }` with `cubic-bezier(0.2, 0.9, 0.3, 1.2)` across buttons, pills, and cards.
8. **Global Mousemove Listener Optimization:**
   * *Issue:* `window.addEventListener('mousemove')` in `script.js` evaluates on every mouse movement even when photo viewer is closed.
   * *Fix:* Attach the mousemove listener only when lightbox is active; detach immediately upon close.

### Impact Level 4: ADAPTIVE GOVERNOR (Tiers: Full / Balanced / Lean)
9. **Automatic Hardware & Frame-Rate Governor:**
   * *Issue:* No automated capability detection for low memory (`navigator.deviceMemory`), low CPU cores (`hardwareConcurrency`), or frame drops.
   * *Fix:* Build an ultra-lightweight performance governor that detects device capabilities and adapts animation complexity without altering visual design.
