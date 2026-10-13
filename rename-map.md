# Project Images Rename & Optimization Map

This document tracks all project graphics in **Webpage-2** renamed to lowercase kebab-case and optimized to WebP with responsive breakpoints (`480w`, `800w`, `1200w`) and LQIP blur-up placeholders.

## Summary
- **Original Total Size:** 4268.1 KB
- **Optimized WebP Total Size:** 906.0 KB
- **Total Payload Saved:** **78.8% reduction**
- **Originals Backup Location:** `assets/site-images/originals/`

## File Rename Mapping

| Original File Name | New WebP File Name | Dimensions | Original Size | WebP Size | Reduction |
| :--- | :--- | :---: | :---: | :---: | :---: |
| `Artboard_1logo_name_choto.png` | `sadia-variety-store-poster.webp` | 1280×640 | 984.5 KB | 125.1 KB | **87.3%** |
| `Mobile Express Logo.png` | `mobile-express-logo.webp` | 1080×1080 | 71.9 KB | 34.0 KB | **52.7%** |
| `Mobile_Express_Business_Card.png` | `mobile-express-business-card.webp` | 1152×720 | 190.5 KB | 77.1 KB | **59.5%** |
| `Mobile_Express_Cash_Memo.png` | `mobile-express-cash-memo.webp` | 1280×905 | 309.2 KB | 87.2 KB | **71.8%** |
| `Mobile Express facebook ad.png` | `mobile-express-facebook-ad.webp` | 1000×1000 | 481.0 KB | 97.1 KB | **79.8%** |
| `415043082_122093206244186305_1002341150726708714_n.jpg` | `tadrib-academy-logo.webp` | 800×800 | 33.9 KB | 8.8 KB | **73.9%** |
| `Artboard_1.png` | `tadrib-academy-facebook-ad.webp` | 800×800 | 610.3 KB | 112.6 KB | **81.5%** |
| `Artboard_1_4x.png` | `tadrib-academy-marketplace-ad.webp` | 800×800 | 455.5 KB | 102.3 KB | **77.5%** |
| `Artboard_1logo_wng_bn_Card.png` | `fuad-mobile-point-logo.webp` | 800×800 | 93.8 KB | 20.0 KB | **78.7%** |
| `Fuad_Mobile_Point_Banner.png` | `fuad-mobile-point-banner.webp` | 1280×576 | 731.0 KB | 91.3 KB | **87.5%** |
| `Artboard_1B_Card.png` | `fuad-mobile-point-business-card.webp` | 1008×576 | 179.7 KB | 58.5 KB | **67.4%** |
| `Screenshot_2026_03_25_172443.png` | `fuad-mobile-point-cash-memo.webp` | 1192×840 | 126.8 KB | 92.0 KB | **27.5%** |

## Responsive Breakpoints & LQIP
Each image is delivered with:
1. **Responsive `srcset`**: Automatically serves smaller dimensions for mobile displays, saving bandwidth on 2G/3G/4G connections.
2. **LQIP (Low-Quality Image Placeholder)**: Inlined ~20px blurred base64 WebP preview instantly visible with 0 Layout Shift (CLS = 0).
3. **GPU-Decoded Swapping**: Uses `img.decode()` before display for 60fps interaction.

## Changelog

### Version 2.0 (Image Optimization & Photo Viewer Overhaul)
- **Task 1 (Optimization & Kebab-case Renaming)**:
  - Renamed all 12 project graphics to clean, lowercase kebab-case naming.
  - Converted original high-resolution assets to optimized WebP format (q=82-84), reducing payload from 4.2 MB to 906 KB (78.8% bandwidth savings).
  - Generated responsive size breakpoints (`480w`, `800w`, `1200w`) for each image with `srcset` + `sizes`.
  - Backed up all original image files safely to `assets/site-images/originals/`.
  - Added width/height and exact aspect-ratio metadata (`projects-meta.json`) to eliminate Cumulative Layout Shift (CLS = 0).

- **Task 2 (Mobile Express Updates)**:
  - Replaced external Google Maps logo link with local, optimized `mobile-express-logo.webp`.
  - Added new `mobile-express-facebook-ad.webp` as 'Facebook Ads' to Mobile Express project and gallery.

- **Task 3 (Photo Viewer Top-Tier Optimization)**:
  - Implemented 60fps GPU-accelerated slider track (`translate3d`, `opacity`, `will-change` applied strictly during drag).
  - Adopted 3-slide DOM sliding window (`prev`, `curr`, `next`) with memory cleanup for off-screen slides.
  - Added instant base64 LQIP blur-up preview (<1KB inlined) fading smoothly into full resolution via `img.decode()`.
  - Added background idle-time preloading of adjacent neighbor images (`requestIdleCallback`).
  - Added slow-network adaptation (`navigator.connection.saveData` / `effectiveType`) to serve smaller variants and skip unnecessary preloads.
  - Added Service Worker Cache-First strategy for images (`sw.js`).
  - Implemented touch gesture support: 2-finger & 3-finger pinch-to-zoom, pan, double-tap zoom toggle, and swipe navigation.
  - Designed clean edge-to-edge mobile UI: side chevrons and instruction footer hidden on mobile viewports for uncut image view.
  - Added error fallback state with 'Tap to retry' button.
  - Supported `prefers-reduced-motion` with instant fade transitions.
