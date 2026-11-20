import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      // Copies src/assets into dist/ so root-relative URLs like
      // "/src/assets/images/..." (e.g. generate_image output) still resolve
      // in production builds. Do not remove.
      {
        name: 'copy-unbundled-src-assets',
        apply: 'build',
        closeBundle(error?: Error): void {
          if (error) {
            return;
          }
          const distDir = path.resolve(import.meta.dirname, 'dist');
          const srcAssets = path.resolve(import.meta.dirname, 'src/assets');
          const distAssets = path.resolve(distDir, 'src/assets');
          if (fs.existsSync(distDir) && fs.existsSync(srcAssets)) {
            fs.cpSync(srcAssets, distAssets, {recursive: true, force: true});
          }

          // Pre-generate static /en, /ur, and /roman-urdu HTML entry points so every free
          // static host (Cloudflare Pages, Vercel, GitHub Pages) returns HTTP 200 and accurate
          // locale metadata without requiring JavaScript execution.
          const indexHtmlPath = path.join(distDir, 'index.html');
          if (!fs.existsSync(indexHtmlPath)) {
            return;
          }

          const siteUrl = (process.env.VITE_SITE_URL || '').replace(/\/+$/, '');
          const prefixUrl = (p: string) => (siteUrl ? `${siteUrl}${p}` : p);

          let baseHtml = fs.readFileSync(indexHtmlPath, 'utf-8');
          if (siteUrl) {
            baseHtml = baseHtml
              .replace(/href="\/(en|ur|roman-urdu)"/g, (_, loc) => `href="${prefixUrl(`/${loc}`)}"`)
              .replace(/content="\/og-image\.jpg"/g, `content="${prefixUrl('/og-image.jpg')}"`)
              .replace(/content="\/en"/g, `content="${prefixUrl('/en')}"`);
            fs.writeFileSync(indexHtmlPath, baseHtml, 'utf-8');

            const sitemapPath = path.join(distDir, 'sitemap.xml');
            if (fs.existsSync(sitemapPath)) {
              const sitemap = fs
                .readFileSync(sitemapPath, 'utf-8')
                .replace(/<loc>\/(en|ur|roman-urdu)<\/loc>/g, (_, loc) => `<loc>${prefixUrl(`/${loc}`)}</loc>`)
                .replace(/href="\/(en|ur|roman-urdu)"/g, (_, loc) => `href="${prefixUrl(`/${loc}`)}"`);
              fs.writeFileSync(sitemapPath, sitemap, 'utf-8');
            }

            const robotsPath = path.join(distDir, 'robots.txt');
            if (fs.existsSync(robotsPath)) {
              const robots = fs
                .readFileSync(robotsPath, 'utf-8')
                .replace('Sitemap: /sitemap.xml', `Sitemap: ${prefixUrl('/sitemap.xml')}`);
              fs.writeFileSync(robotsPath, robots, 'utf-8');
            }
          }

          const locales = [
            {
              slug: 'en',
              lang: 'en',
              dir: 'ltr',
              title: 'Noor-e-Zindagi — Your Daily Deen Companion',
              description:
                'Calm, offline-capable Islamic Android companion: Quran with word-by-word meanings, verified Hadith, Salah times, Azkar, Sunnah habits & AI guide in EN, Urdu & Roman Urdu.',
            },
            {
              slug: 'ur',
              lang: 'ur',
              dir: 'rtl',
              title: 'Noor-e-Zindagi — آپ کا روزمرہ دینی ساتھی',
              description:
                'قرآن، مستند احادیث، اذکار، اوقاتِ نماز، سنتِ نبوی کی عادات اور مستند ذرائع پر مبنی اے آئی معاون — انگریزی، اردو اور رومن اردو میں۔',
            },
            {
              slug: 'roman-urdu',
              lang: 'ur-Latn',
              dir: 'ltr',
              title: 'Noor-e-Zindagi — Aap Ka Rozmarra Deeni Saathi',
              description:
                'Quran, tasdeeq-shuda Hadith, Azkar, Salah ke auqat, Sunnat aadatein aur verified AI assistant — English, Urdu aur Roman Urdu mein.',
            },
          ];

          for (const loc of locales) {
            const locDir = path.join(distDir, loc.slug);
            fs.mkdirSync(locDir, {recursive: true});
            const canonicalUrl = prefixUrl(`/${loc.slug}`);
            const localizedHtml = baseHtml
              .replace('<html lang="en" dir="ltr">', `<html lang="${loc.lang}" dir="${loc.dir}">`)
              .replace(/<title>.*?<\/title>/, `<title>${loc.title}</title>`)
              .replace(
                /<meta\s+name="description"[\s\S]*?\/>/,
                `<meta name="description" content="${loc.description}" />`
              )
              .replace(
                /<meta property="og:title"[^>]*\/>/,
                `<meta property="og:title" content="${loc.title}" />`
              )
              .replace(
                /<meta\s+property="og:description"[\s\S]*?\/>/,
                `<meta property="og:description" content="${loc.description}" />`
              )
              .replace(
                /<meta property="og:url"[^>]*\/>/,
                `<meta property="og:url" content="${canonicalUrl}" />`
              )
              .replace(
                /<link rel="canonical"[^>]*\/>/,
                `<link rel="canonical" href="${canonicalUrl}" />`
              );
            fs.writeFileSync(path.join(locDir, 'index.html'), localizedHtml, 'utf-8');
          }
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
