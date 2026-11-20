# Noor-e-Zindagi — Companion & Launch Website

Official marketing, verification transparency, interactive preview, and Android APK distribution website for **Noor-e-Zindagi** (*نورِ زندگی* — "Light of Life"), an offline-capable daily Deen companion for Android.

## Placeholders to Replace Before Public Launch

All launch-specific artifacts and legal assertions are centralized in `src/config/siteConfig.ts`:

- `APP_CONFIG.version` (`{APP_VERSION}`) — Release version (e.g., `1.0.0`).
- `APP_CONFIG.apkSize` (`{SIZE}`) — Exact APK file size (e.g., `42 MB`).
- `APP_CONFIG.sha256` (`{APK_SHA256}`) — SHA-256 verification checksum of the signed release APK.
- `APP_CONFIG.apkDownloadUrl` (`{APK_DOWNLOAD_URL}`) — Direct signed APK download URL (or Play Store / GitHub Releases URL).
- `APP_CONFIG.confirmNoAds` (`{CONFIRM_NO_ADS}`) — Owner sign-off on the zero-ads / zero-data-sales policy.
- `SCREENSHOT_SLOTS` (`{SCREENSHOT_HOME}`, `{SCREENSHOT_QURAN}`, etc.) — Replace `imageUrl: null` with paths to 2x WebP/AVIF screenshots once exported from the Android app.

## Technical & Design Choices

- **Self-Hosted Typography**: `Playfair Display`, `Plus Jakarta Sans`, `Amiri`, `Noto Naskh Arabic`, and `Noto Nastaliq Urdu` are bundled locally via `@fontsource` WOFF2 packages (`font-display: swap` / zero Google Fonts CDN latency).
- **Numerals**: Western numerals (`1, 2, 3`) are used consistently across English, Urdu, and Roman Urdu interfaces for clarity in prayer times, verse numbers, and tasbih counts (configurable if Arabic-Indic numerals are preferred later).
- **Zero-Flash Theme & Locale**: An inline pre-paint script in `index.html` restores theme (`nez_theme` / `prefers-color-scheme`) and locale (`nez_lang` / URL path `/en`, `/ur`, `/roman-urdu` / `Accept-Language`) before first render, setting `dir="rtl"` and `lang="ur"` when Urdu is active.
- **No Service Worker / No PWA**: Deliberately omitted for this marketing/companion site to keep caching predictable for APK release updates and checksum notices.
- **Cookieless Privacy**: Only `localStorage` (theme/language preference) and `sessionStorage` (24-hour AlAdhan city cache & ephemeral demo checklist/tasbih state) are used. Zero tracking cookies, Google Analytics, or Meta Pixel. Recommended analytics integration: Plausible or Umami.

## Hosting & Deployment (Free, Zero SEO Penalty)

Free hosts only hurt Google rankings when they inject ads, put sites to sleep (slow TTFB), serve `404` on localized routes, or lack HTTPS/canonicals. This build avoids all of those:

- **Static Pre-Rendered Locales**: `npm run build` automatically pre-generates `dist/en/index.html`, `dist/ur/index.html` (`lang="ur" dir="rtl"`), and `dist/roman-urdu/index.html` so every locale URL returns **HTTP 200** with accurate `<title>`, `<meta name="description">`, `<link rel="canonical">`, and OpenGraph tags.
- **Recommended Free Host — Cloudflare Pages**:
  1. Connect your Git repository (or upload `dist/` via Cloudflare Pages Direct Upload).
  2. Build command: `npm run build` · Build output directory: `dist`.
  3. Set environment variable `VITE_SITE_URL=https://your-site.pages.dev` (or your custom domain) so `sitemap.xml`, `robots.txt`, `canonical`, and `hreflang` resolve to exact absolute HTTPS URLs.
  4. Benefits: $0/month, unlimited bandwidth, zero ads, no cold-start sleep, global edge CDN (fast LCP in Pakistan & worldwide), and automatic SSL.
- **Alternatives**: **Vercel (Hobby)** (`vercel.json` included) or **GitHub Pages** (works out of the box because `/en`, `/ur`, and `/roman-urdu` are real pre-generated folders in `dist/`).
- **Post-Launch SEO Step**: Verify the property in **Google Search Console** and submit `/sitemap.xml`. Keep one canonical domain (`VITE_SITE_URL`) so `/` and `/en` do not compete.

## Verification & Testing Checklist

Run these checks before every public release:

1. **Lighthouse CI (Mobile)**: Verify Performance >= 90, Accessibility >= 90, Best Practices >= 90, SEO >= 90, LCP < 2.5s, CLS < 0.1.
2. **Accessibility (`axe-core` via Playwright)**: Run automated WCAG 2.1 AA audits across `/en`, `/ur`, and `/roman-urdu` in both Light and Night Serenity Dark modes.
3. **Keyboard-Only Navigation**: Tab through header links, mobile drawer focus trap (`Escape` and backdrop close), `<details>` feature accordions, interactive demo tabs, Quran word-by-word taps, and screenshot carousel arrow keys.
4. **Screen Readers**: Verify `aria-live="polite"` announcements for the prayer countdown, tasbih counter, and demo error/fallback states in VoiceOver (macOS/iOS) and TalkBack (Android).
5. **RTL Check at 360px Width (Urdu Mode)**: Confirm `dir="rtl"`, mirrored icons, non-overflowing Urdu Nastaliq text, LTR preservation for `"Noor-e-Zindagi"`, email addresses, and SHA-256 hashes.
6. **Responsive Breakpoints**: Inspect layout at `360px`, `768px`, and `1280px`.
7. **AlAdhan API Failure Fallback**: Block requests to `api.aladhan.com` in DevTools Network tab -> confirm loading skeleton gracefully resolves to bundled sample prayer times with the `"Sample times shown"` notice.
