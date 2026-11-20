import React from 'react';
import { SAYYID_AL_ISTIGHFAR } from '../data/demoData';
import { LocaleStrings } from '../data/translations';

interface LanguagesSectionProps {
  t: LocaleStrings;
}

export const LanguagesSection: React.FC<LanguagesSectionProps> = ({ t }) => {
  return (
    <section className="py-16 md:py-24 bg-[#EAF2EE]/45 dark:bg-[#152721]/45 border-b border-[#E2D8C7] dark:border-[#223A30]">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <div className="max-w-2xl mb-10">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#0D3B2E] dark:text-[#F5EFE4] [text-wrap:balance]">
            {t.languagesSection.heading}
          </h2>
          <p className="mt-3 text-base font-medium text-[#8C6516] dark:text-[#C99A3B]">
            {t.languagesSection.caption}
          </p>
        </div>

        {/* Original Arabic Sayyid al-Istighfar */}
        <div className="mb-8 rounded-2xl bg-[#0D3B2E] text-[#F5EFE4] p-6 sm:p-8 surface-shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#145341]">
            <h3 className="font-display text-lg sm:text-xl font-semibold text-[#F3E4BE]">
              {t.languagesSection.duaTitle}
            </h3>
            <span className="text-xs font-medium text-[#F3E4BE]">
              {SAYYID_AL_ISTIGHFAR.reference}
            </span>
          </div>

          <p
            dir="rtl"
            lang="ar"
            className="mt-5 font-arabic text-xl sm:text-2xl text-right leading-[2.1] text-[#F5EFE4]"
          >
            {SAYYID_AL_ISTIGHFAR.arabic}
          </p>
        </div>

        {/* 3 Columns Side-by-Side on Desktop, Stacked on Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Column 1: English */}
          <article
            dir="ltr"
            lang="en"
            className="rounded-2xl bg-white dark:bg-[#11231C] border border-[#E2D8C7] dark:border-[#223A30] p-6 surface-shadow-sm space-y-4"
          >
            <h3 className="font-display text-lg font-semibold text-[#0D3B2E] dark:text-[#F3E4BE] border-b border-[#E2D8C7] dark:border-[#223A30] pb-3">
              {t.languagesSection.englishLabel}
            </h3>
            <p className="text-sm text-[#17221E] dark:text-[#F5EFE4] leading-relaxed">
              {SAYYID_AL_ISTIGHFAR.english}
            </p>
            <div className="pt-3 border-t border-[#E2D8C7] dark:border-[#223A30]">
              <p className="text-xs font-semibold text-[#8C6516] dark:text-[#C99A3B] mb-1">
                {t.languagesSection.transliterationLabel}
              </p>
              <p className="text-xs text-[#4A5A52] dark:text-[#B7C4BD] leading-relaxed italic">
                {SAYYID_AL_ISTIGHFAR.transliteration}
              </p>
            </div>
          </article>

          {/* Column 2: Urdu (RTL) */}
          <article
            dir="rtl"
            lang="ur"
            className="rounded-2xl bg-white dark:bg-[#11231C] border border-[#E2D8C7] dark:border-[#223A30] p-6 surface-shadow-sm space-y-4 text-right"
          >
            <h3 className="font-urdu text-lg font-semibold text-[#0D3B2E] dark:text-[#F3E4BE] border-b border-[#E2D8C7] dark:border-[#223A30] pb-3">
              {t.languagesSection.urduLabel}
            </h3>
            <p className="font-urdu text-sm sm:text-base text-[#17221E] dark:text-[#F5EFE4] leading-[2.2]">
              {SAYYID_AL_ISTIGHFAR.urdu}
            </p>
          </article>

          {/* Column 3: Roman Urdu */}
          <article
            dir="ltr"
            lang="ur-Latn"
            className="rounded-2xl bg-white dark:bg-[#11231C] border border-[#E2D8C7] dark:border-[#223A30] p-6 surface-shadow-sm space-y-4"
          >
            <h3 className="font-display text-lg font-semibold text-[#0D3B2E] dark:text-[#F3E4BE] border-b border-[#E2D8C7] dark:border-[#223A30] pb-3">
              {t.languagesSection.romanUrduLabel}
            </h3>
            <p className="text-sm text-[#17221E] dark:text-[#F5EFE4] leading-relaxed">
              {SAYYID_AL_ISTIGHFAR.romanUrdu}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};
