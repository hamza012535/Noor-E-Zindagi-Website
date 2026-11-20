import { useEffect, useState } from 'react';
import { LocaleCode } from './config/siteConfig';
import { TRANSLATIONS } from './data/translations';
import { FaqAndFooter } from './components/FaqAndFooter';
import { FeaturesSection } from './components/FeaturesSection';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { InteractiveDemo } from './components/InteractiveDemo';
import { LanguagesSection } from './components/LanguagesSection';
import { ScreenshotsCarousel } from './components/ScreenshotsCarousel';
import { TrustAndDownloadSection } from './components/TrustAndDownloadSection';

type ThemeMode = 'light' | 'dark';

function resolveInitialLocale(): LocaleCode {
  if (typeof window === 'undefined') return 'en';
  const path = window.location.pathname.toLowerCase();
  if (path.startsWith('/ur')) return 'ur';
  if (path.startsWith('/roman-urdu')) return 'roman-urdu';
  if (path.startsWith('/en')) return 'en';

  try {
    const saved = localStorage.getItem('nez_lang');
    if (saved === 'ur' || saved === 'roman-urdu' || saved === 'en') {
      return saved;
    }
  } catch {
    // ignore
  }

  if (navigator.language && navigator.language.toLowerCase().startsWith('ur')) {
    return 'ur';
  }
  return 'en';
}

function resolveInitialTheme(): ThemeMode {
  if (typeof window === 'undefined') return 'light';
  try {
    const saved = localStorage.getItem('nez_theme');
    if (saved === 'dark' || saved === 'light') return saved;
  } catch {
    // ignore
  }
  if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    return 'dark';
  }
  return 'light';
}

export default function App() {
  const [locale, setLocale] = useState<LocaleCode>(resolveInitialLocale);
  const [theme, setTheme] = useState<ThemeMode>(resolveInitialTheme);

  const t = TRANSLATIONS[locale];

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem('nez_theme', theme);
    } catch {
      // ignore
    }
  }, [theme]);

  useEffect(() => {
    const root = document.documentElement;
    root.lang = locale === 'roman-urdu' ? 'ur-Latn' : locale;
    root.dir = locale === 'ur' ? 'rtl' : 'ltr';

    document.title =
      locale === 'ur'
        ? 'Noor-e-Zindagi — آپ کا روزمرہ دینی ساتھی'
        : locale === 'roman-urdu'
        ? 'Noor-e-Zindagi — Aap Ka Rozmarra Deeni Saathi'
        : 'Noor-e-Zindagi — Your Daily Deen Companion';

    const origin = window.location.origin;
    const canonicalUrl = `${origin}/${locale}`;
    const canonicalEl = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalEl) canonicalEl.href = canonicalUrl;
    const ogUrlEl = document.querySelector<HTMLMetaElement>('meta[property="og:url"]');
    if (ogUrlEl) ogUrlEl.content = canonicalUrl;

    const altMap: Record<string, string> = {
      en: `${origin}/en`,
      ur: `${origin}/ur`,
      'ur-Latn': `${origin}/roman-urdu`,
      'x-default': `${origin}/en`,
    };
    document.querySelectorAll<HTMLLinkElement>('link[rel="alternate"][hreflang]').forEach((el) => {
      const key = el.getAttribute('hreflang');
      if (key && altMap[key]) el.href = altMap[key];
    });

    try {
      localStorage.setItem('nez_lang', locale);
    } catch {
      // ignore
    }

    const targetPath = `/${locale}`;
    if (
      window.location.pathname === '/' ||
      window.location.pathname === '/en' ||
      window.location.pathname === '/ur' ||
      window.location.pathname === '/roman-urdu'
    ) {
      if (window.location.pathname !== targetPath) {
        window.history.replaceState(null, '', `${targetPath}${window.location.hash}`);
      }
    }
  }, [locale]);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6EE] dark:bg-[#091511] text-[#17221E] dark:text-[#F5EFE4] transition-colors duration-300">
      <Header
        locale={locale}
        onChangeLocale={setLocale}
        theme={theme}
        onToggleTheme={handleToggleTheme}
        t={t}
      />

      <main id="main-content" className="flex-1">
        <Hero t={t} />
        <FeaturesSection t={t} />
        <InteractiveDemo t={t} locale={locale} />
        <ScreenshotsCarousel t={t} />
        <LanguagesSection t={t} />
        <TrustAndDownloadSection t={t} />
      </main>

      <FaqAndFooter t={t} />
    </div>
  );
}
