import React, { useEffect, useRef, useState } from 'react';
import { Globe, Menu, Moon, Sun, X, Download } from 'lucide-react';
import { APP_CONFIG, LocaleCode } from '../config/siteConfig';
import { LocaleStrings } from '../data/translations';
import { BrandMark } from './BrandMark';

interface HeaderProps {
  locale: LocaleCode;
  onChangeLocale: (locale: LocaleCode) => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  t: LocaleStrings;
}

const SECTION_IDS = ['features', 'demo', 'screenshots', 'privacy', 'faq'] as const;

export const Header: React.FC<HeaderProps> = ({
  locale,
  onChangeLocale,
  theme,
  onToggleTheme,
  t,
}) => {
  const [hidden, setHidden] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const lastScrollY = useRef(0);
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const langRef = useRef<HTMLDivElement>(null);

  // Gentle hide on scroll-down, reveal on scroll-up
  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      if (mobileOpen) {
        setHidden(false);
        return;
      }
      if (currentY > 96 && currentY > lastScrollY.current + 6) {
        setHidden(true);
        setLangMenuOpen(false);
      } else if (currentY < lastScrollY.current - 6 || currentY <= 48) {
        setHidden(false);
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [mobileOpen]);

  // Scroll-spy active section highlighting
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: '-35% 0px -55% 0px', threshold: 0.01 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Close language dropdown on outside click
  useEffect(() => {
    if (!langMenuOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [langMenuOpen]);

  // Mobile drawer scroll-lock, focus trap, and Escape handling
  useEffect(() => {
    if (!mobileOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeBtnRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
        menuToggleRef.current?.focus();
        return;
      }
      if (e.key === 'Tab' && drawerRef.current) {
        const focusables = drawerRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileOpen]);

  const navItems = [
    { id: 'features', label: t.nav.features },
    { id: 'demo', label: t.nav.demo },
    { id: 'screenshots', label: t.nav.screenshots },
    { id: 'privacy', label: t.nav.trust },
    { id: 'faq', label: t.nav.faq },
  ];

  const localeLabels: { code: LocaleCode; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'ur', label: 'اردو' },
    { code: 'roman-urdu', label: 'Roman Urdu' },
  ];

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:start-3 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[#0D3B2E] focus:text-[#F5EFE4] focus:font-medium"
      >
        {t.nav.skipToContent}
      </a>

      <header
        className={`sticky top-0 z-50 w-full border-b border-[#E2D8C7] dark:border-[#223A30] bg-[#FAF6EE]/95 dark:bg-[#091511]/95 backdrop-blur-md transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          hidden ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        <div className="w-full mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-12 h-16 flex items-center justify-between gap-4 lg:gap-6">
          {/* Zone 1: Brand wordmark (always stays in Latin) */}
          <a
            href="#top"
            className="flex items-center gap-2.5 whitespace-nowrap shrink-0 rounded-lg py-1"
            dir="ltr"
          >
            <BrandMark className="w-8 h-8 shrink-0" />
            <span className="font-brand text-lg sm:text-xl font-semibold text-[#0D3B2E] dark:text-[#F5EFE4]">
              {APP_CONFIG.brandName}
            </span>
          </a>

          {/* Zone 2: Scroll-spy nav links */}
          <nav
            aria-label="Primary"
            className="hidden lg:flex items-center gap-5 xl:gap-6 text-sm font-medium text-[#4A5A52] dark:text-[#B7C4BD] min-w-0"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`whitespace-nowrap shrink-0 py-1 border-b-2 transition-colors duration-150 ${
                    isActive
                      ? 'border-[#C99A3B] text-[#0D3B2E] dark:text-[#F5EFE4]'
                      : 'border-transparent hover:text-[#0D3B2E] dark:hover:text-[#F5EFE4]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Language switcher, Theme toggle, Download CTA */}
          <div className="hidden lg:flex items-center gap-2.5 shrink-0">
            <div className="relative" ref={langRef}>
              <button
                type="button"
                onClick={() => setLangMenuOpen((v) => !v)}
                aria-expanded={langMenuOpen}
                aria-haspopup="listbox"
                aria-label={t.nav.languageLabel}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium border border-[#E2D8C7] dark:border-[#223A30] bg-white dark:bg-[#11231C] text-[#17221E] dark:text-[#F5EFE4] hover:border-[#C99A3B] transition-colors whitespace-nowrap shrink-0 min-h-[40px]"
              >
                <Globe className="w-3.5 h-3.5 text-[#8C6516] dark:text-[#C99A3B]" aria-hidden="true" />
                <span>
                  {localeLabels.find((l) => l.code === locale)?.label ?? 'EN'}
                </span>
              </button>

              {langMenuOpen && (
                <div
                  role="listbox"
                  aria-label={t.nav.languageLabel}
                  className="absolute end-0 mt-2 w-40 rounded-xl border border-[#E2D8C7] dark:border-[#223A30] bg-white dark:bg-[#11231C] surface-shadow-md py-1 z-50"
                >
                  {localeLabels.map((opt) => (
                    <button
                      key={opt.code}
                      type="button"
                      role="option"
                      aria-selected={locale === opt.code}
                      onClick={() => {
                        onChangeLocale(opt.code);
                        setLangMenuOpen(false);
                      }}
                      className={`w-full text-start px-3.5 py-2 text-xs font-medium transition-colors flex items-center justify-between ${
                        locale === opt.code
                          ? 'bg-[#EAF2EE] dark:bg-[#1A2E27] text-[#0D3B2E] dark:text-[#F3E4BE]'
                          : 'text-[#17221E] dark:text-[#F5EFE4] hover:bg-[#FAF6EE] dark:hover:bg-[#152721]'
                      }`}
                    >
                      <span>{opt.label}</span>
                      {locale === opt.code && (
                        <span className="h-1.5 w-1.5 rounded-full bg-[#C99A3B]" aria-hidden="true" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={onToggleTheme}
              aria-label={theme === 'dark' ? t.nav.themeToLight : t.nav.themeToDark}
              title={theme === 'dark' ? t.nav.themeToLight : t.nav.themeToDark}
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-[#E2D8C7] dark:border-[#223A30] bg-white dark:bg-[#11231C] text-[#0D3B2E] dark:text-[#F3E4BE] hover:border-[#C99A3B] transition-colors shrink-0"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4" aria-hidden="true" />
              ) : (
                <Moon className="w-4 h-4" aria-hidden="true" />
              )}
            </button>

            <a
              href={APP_CONFIG.apkDownloadUrl}
              download="Noor-e-Zindagi.apk"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#C99A3B] text-[#07241C] text-xs font-semibold hover:bg-[#F3E4BE] transition-colors whitespace-nowrap shrink-0 min-h-[40px]"
            >
              <Download className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{t.nav.downloadApk}</span>
            </a>
          </div>

          {/* Mobile & Tablet Menu Trigger (<1024px) */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label={theme === 'dark' ? t.nav.themeToLight : t.nav.themeToDark}
              className="inline-flex items-center justify-center w-11 h-11 rounded-lg border border-[#E2D8C7] dark:border-[#223A30] bg-white dark:bg-[#11231C] text-[#0D3B2E] dark:text-[#F3E4BE]"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4" aria-hidden="true" />
              ) : (
                <Moon className="w-4 h-4" aria-hidden="true" />
              )}
            </button>
            <button
              ref={menuToggleRef}
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label={t.nav.menuOpen}
              aria-expanded={mobileOpen}
              className="inline-flex items-center justify-center w-11 h-11 rounded-lg border border-[#E2D8C7] dark:border-[#223A30] bg-white dark:bg-[#11231C] text-[#0D3B2E] dark:text-[#F5EFE4]"
            >
              <Menu className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile / Tablet full-screen drawer (focus-trapped, scroll-locked, closes on Escape & backdrop) */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[90] lg:hidden bg-[#07241C]/75 backdrop-blur-sm flex"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setMobileOpen(false);
              menuToggleRef.current?.focus();
            }
          }}
        >
          <div
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
            className="w-full h-full bg-[#FAF6EE] dark:bg-[#091511] text-[#17221E] dark:text-[#F5EFE4] p-6 flex flex-col justify-between overflow-y-auto"
          >
            <div>
              <div className="flex items-center justify-between border-b border-[#E2D8C7] dark:border-[#223A30] pb-4">
                <span className="font-brand text-xl font-semibold text-[#0D3B2E] dark:text-[#F5EFE4]" dir="ltr">
                  {APP_CONFIG.brandName}
                </span>
                <button
                  ref={closeBtnRef}
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    menuToggleRef.current?.focus();
                  }}
                  aria-label={t.nav.menuClose}
                  className="inline-flex items-center justify-center w-11 h-11 rounded-lg border border-[#E2D8C7] dark:border-[#223A30] bg-white dark:bg-[#11231C]"
                >
                  <X className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>

              <nav className="mt-6 flex flex-col gap-2" aria-label="Mobile Primary">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-3.5 rounded-xl text-base font-medium hover:bg-[#EAF2EE] dark:hover:bg-[#11231C] transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="mt-6 pt-6 border-t border-[#E2D8C7] dark:border-[#223A30]">
                <p className="text-xs font-medium text-[#4A5A52] dark:text-[#B7C4BD] mb-3">
                  {t.nav.languageLabel}
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {localeLabels.map((opt) => (
                    <button
                      key={opt.code}
                      type="button"
                      onClick={() => onChangeLocale(opt.code)}
                      className={`py-2.5 px-3 rounded-lg text-xs font-semibold border transition-colors min-h-[44px] ${
                        locale === opt.code
                          ? 'bg-[#0D3B2E] text-[#F5EFE4] border-[#0D3B2E] dark:bg-[#145341] dark:border-[#C99A3B]'
                          : 'bg-white dark:bg-[#11231C] border-[#E2D8C7] dark:border-[#223A30]'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6">
              <a
                href={APP_CONFIG.apkDownloadUrl}
                download="Noor-e-Zindagi.apk"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#C99A3B] text-[#07241C] font-semibold text-sm min-h-[48px]"
              >
                <Download className="w-4 h-4" aria-hidden="true" />
                <span>{t.nav.downloadApk}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
