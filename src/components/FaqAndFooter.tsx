import React from 'react';
import { ChevronDown } from 'lucide-react';
import { APP_CONFIG, TRANSLATION_SOURCES } from '../config/siteConfig';
import { LocaleStrings } from '../data/translations';
import { BrandMark } from './BrandMark';
import { GirihPattern } from './GirihPattern';

interface FaqAndFooterProps {
  t: LocaleStrings;
}

export const FaqAndFooter: React.FC<FaqAndFooterProps> = ({ t }) => {
  return (
    <>
      {/* FAQ Section */}
      <section
        id="faq"
        className="py-16 md:py-24 bg-[#FAF6EE] dark:bg-[#091511] border-b border-[#E2D8C7] dark:border-[#223A30]"
      >
        <div className="mx-auto max-w-[900px] px-6 md:px-12">
          <div className="mb-10">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#0D3B2E] dark:text-[#F5EFE4] [text-wrap:balance]">
              {t.faqSection.heading}
            </h2>
            <p className="mt-3 text-base text-[#4A5A52] dark:text-[#B7C4BD]">
              {t.faqSection.subheading}
            </p>
          </div>

          <div className="space-y-3">
            {t.faqSection.items.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl bg-white dark:bg-[#11231C] border border-[#E2D8C7] dark:border-[#223A30] px-6 py-4 surface-shadow-sm"
              >
                <summary className="list-none cursor-pointer flex items-center justify-between gap-4 font-display text-base sm:text-lg font-semibold text-[#0D3B2E] dark:text-[#F5EFE4] py-1">
                  <span>{item.question}</span>
                  <ChevronDown
                    className="w-5 h-5 text-[#C99A3B] shrink-0 transition-transform duration-150 group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <p className="mt-3 pt-3 border-t border-[#E2D8C7] dark:border-[#223A30] text-sm text-[#4A5A52] dark:text-[#B7C4BD] leading-relaxed">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Quiet Footer with subtle Girih tile */}
      <footer className="relative overflow-hidden bg-[#07241C] text-[#F5EFE4]">
        <GirihPattern className="text-[#C99A3B]" opacityClass="opacity-[0.04]" />

        <div className="relative mx-auto max-w-[1200px] px-6 md:px-12 py-12 md:py-16 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-5 space-y-3">
              <div className="flex items-center gap-2.5" dir="ltr">
                <BrandMark className="w-8 h-8 shrink-0" />
                <span className="font-brand text-xl font-semibold text-[#F5EFE4]">
                  {APP_CONFIG.brandName}
                </span>
              </div>
              <p className="text-sm text-[#B7C4BD] leading-relaxed max-w-sm">
                {t.footer.tagline}
              </p>
              <p className="text-xs text-[#F3E4BE] leading-relaxed">
                {t.footer.disclaimer}
              </p>
            </div>

            <div className="md:col-span-4 space-y-2 text-xs text-[#B7C4BD]">
              <p className="text-sm font-semibold text-[#F5EFE4]">
                {t.footer.sourcesHeading}
              </p>
              <p>{TRANSLATION_SOURCES.quranArabic}</p>
              <p>English: {TRANSLATION_SOURCES.quranEnglish}</p>
              <p>Urdu: {TRANSLATION_SOURCES.quranUrdu}</p>
              <p>Hadith: {TRANSLATION_SOURCES.hadithCollections.join(' · ')}</p>
            </div>

            <div className="md:col-span-3 space-y-3 text-xs text-[#B7C4BD]">
              <p className="text-sm font-semibold text-[#F5EFE4]">
                {t.footer.contactLabel}
              </p>
              <p>
                <a
                  href={`mailto:${APP_CONFIG.contactEmail}`}
                  dir="ltr"
                  className="text-[#F3E4BE] hover:underline"
                >
                  {APP_CONFIG.contactEmail}
                </a>
              </p>
              <p className="leading-relaxed">{t.footer.analyticsNote}</p>
              <p className="text-[11px] opacity-80" dir="ltr">
                Analytics: {APP_CONFIG.analyticsProvider}
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-[#223A30] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#B7C4BD]">
            <p>{t.footer.copyright}</p>
            <div className="flex flex-wrap items-center gap-5">
              <a href="#features" className="hover:text-[#F3E4BE]">
                {t.nav.features}
              </a>
              <a href="#demo" className="hover:text-[#F3E4BE]">
                {t.nav.demo}
              </a>
              <a href="#privacy" className="hover:text-[#F3E4BE]">
                {t.nav.trust}
              </a>
              <a href="#download" className="hover:text-[#F3E4BE]">
                {t.nav.downloadApk}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
