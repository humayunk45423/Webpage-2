# Antigravity & AI Pair Programming Instructions for Webpage-2

## 1. Scratch & Temporary Files Rule (STRICT)
* **NEVER** create scratch folders, temporary Python/Node test scripts, browser debug profiles, or temporary files directly in the project root directory (`Webpage-2`).
* If temporary work, test scripts, or scratch files are required, **always use the dedicated external folder**:
  ```
  F:\Me & My Docs\1. Recent Projects\Webpage-2 extra files\scratch\
  ```
* Keep the main project directory clean and containing only production repository files.

---

## 2. Project Graphics & Image Optimization
* All project graphics are optimized **WebP** images located in `assets/site-images/`.
* **Single File per Graphic**: Keep **only 1 clean WebP file** per project image. Do NOT generate multiple redundant breakpoint files (`-480w`, `-800w`, `-1200w`).
* **Original Assets**: All original high-resolution graphic source files are preserved safely in `assets/site-images/originals/`. Never delete or serve files directly from `originals/`.
* **Renaming**: Project graphics follow descriptive lowercase kebab-case naming (see `rename-map.md`).

---

## 3. Photo Viewer / Lightbox Standards
* **No Skeletons / No LQIP Blur Flickering**: Do NOT use blurred base64 LQIP previews, skeleton shimmers, or decode fade delays in the photo viewer. Images must load directly and sharply with zero stutter.
* **Pre-warming**: Preload gallery images in memory so transitions are instant at 60fps.
* **Mobile Viewport**: On mobile devices (`max-width: 768px`), side navigation chevrons and the bottom instruction footer must remain hidden (`display: none`) to provide a clean, uncut, edge-to-edge view. Swipe navigation, double-tap zoom, and 2-finger/3-finger pinch-to-zoom must remain responsive.

---

## 4. Language & Typography Rules
* Maintain both English (`EN`) and Bangla (`BN`) support cleanly.
* Primary name presentation must stay intact:
  * English: `"I'm Humayoun Kobir"`
  * Bangla: `"আমি হুমায়ুন কবির"`
