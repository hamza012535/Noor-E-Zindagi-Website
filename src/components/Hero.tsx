import React from 'react';
import {
  ArrowRight,
  Award,
  BookCheck,
  Download,
  Lock,
  Scale,
  ShieldCheck,
  WifiOff,
} from 'lucide-react';
import { APP_CONFIG, SCREENSHOT_SLOTS } from '../config/siteConfig';
import { AL_FATIHA_AYAHS } from '../data/demoData';
import { LocaleStrings } from '../data/translations';
import { AndroidPhoneMockup } from './AndroidPhoneMockup';
import { GirihPattern } from './GirihPattern';

interface HeroProps {
  t: LocaleStrings;
}

export const Hero: React.FC<HeroProps> = ({ t }) => {
  const ayah1 = AL_FATIHA_AYAHS[0];
  const trustIcons = [ShieldCheck, Award, WifiOff, Lock, Scale];

  return (
    <>
      <section
        id="top"
        className="relative overflow-hidden bg-[#FAF6EE] dark:bg-[#091511] border-b border-[#E2D8C7] dark:border-[#223A30]"
      >
        <GirihPattern className="text-[#0D3B2E] dark:text-[#C99A3B]" />

        <div className="relative mx-auto max-w-[1200px] px-6 md:px-12 py-6 md:py-8 lg:py-7">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Copy Column */}
            <div className="lg:col-span-6 space-y-4">
              <p className="text-xs sm:text-sm font-medium text-[#8C6516] dark:text-[#C99A3B] tracking-wide">
                {t.hero.trustChips.join('  ·  ')}
              </p>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-[46px] font-semibold text-[#0D3B2E] dark:text-[#F5EFE4] [text-wrap:balance]">
                {t.hero.headline}
              </h1>

              <p className="text-sm sm:text-base lg:text-[17px] text-[#4A5A52] dark:text-[#B7C4BD] max-w-[54ch] leading-relaxed">
                {t.hero.subline}
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <a
                  href="#download"
                  className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-[#C99A3B] text-[#07241C] font-semibold text-sm sm:text-base hover:bg-[#F3E4BE] transition-colors duration-150 surface-shadow-sm min-h-[46px]"
                >
                  <Download className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>{t.hero.primaryCta}</span>
                </a>

                <a
                  href="#demo"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-[#0D3B2E]/30 dark:border-[#C99A3B]/45 bg-white/75 dark:bg-[#11231C]/80 text-[#0D3B2E] dark:text-[#F5EFE4] font-semibold text-sm sm:text-base hover:border-[#0D3B2E] dark:hover:border-[#C99A3B] transition-colors duration-150 min-h-[46px]"
                >
                  <span>{t.hero.secondaryCta}</span>
                  <ArrowRight
                    className="w-4 h-4 shrink-0 rtl:rotate-180"
                    aria-hidden="true"
                  />
                </a>
              </div>

              <p className="text-xs text-[#4A5A52] dark:text-[#B7C4BD]">
                Android 8.0+ · Karachi default (GPS optional) · EN / اردو / Roman Urdu ·{' '}
                <a href="#download" className="underline underline-offset-4 hover:text-[#0D3B2E] dark:hover:text-[#F3E4BE]">
                  Permissions & SHA-256
                </a>
              </p>
            </div>

            {/* Right Phone Mockup + Surah Al-Fatiha 1:1 Callout (clean side-by-side without clipping) */}
            <div className="lg:col-span-6 flex flex-col sm:flex-row items-center lg:items-end justify-center lg:justify-end gap-5">
              {/* Surah Al-Fatiha 1:1 Ayah Callout */}
              <aside
                aria-label={t.hero.calloutLabel}
                className="order-2 sm:order-1 w-full max-w-[270px] rounded-2xl bg-white dark:bg-[#11231C] border border-[#E2D8C7] dark:border-[#223A30] p-3.5 surface-shadow-lg sm:mb-4"
              >
                <div className="flex items-center justify-between gap-2 text-[11px] font-semibold text-[#8C6516] dark:text-[#C99A3B]">
                  <span className="inline-flex items-center gap-1.5">
                    <BookCheck className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>{t.hero.calloutLabel}</span>
                  </span>
                </div>

                <p
                  dir="rtl"
                  lang="ar"
                  className="mt-1.5 font-arabic text-lg text-right text-[#0D3B2E] dark:text-[#F5EFE4]"
                >
                  {ayah1.arabic}
                </p>

                <p className="mt-1 text-xs text-[#17221E] dark:text-[#F5EFE4] leading-snug">
                  {ayah1.english}
                </p>
                <p
                  dir="rtl"
                  lang="ur"
                  className="mt-1 font-urdu text-xs text-right text-[#4A5A52] dark:text-[#B7C4BD]"
                >
                  {ayah1.urdu}
                </p>

                <p className="mt-2 pt-1.5 border-t border-[#E2D8C7] dark:border-[#223A30] text-[10px] text-[#4A5A52] dark:text-[#B7C4BD]">
                  {t.hero.calloutSurah}
                </p>
              </aside>

              <AndroidPhoneMockup
                screenType="home"
                slot={SCREENSHOT_SLOTS[0]}
                className="order-1 sm:order-2 w-full max-w-[220px] sm:max-w-[224px] shrink-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip — continuous right-to-left smooth marquee */}
      <section
        aria-label="Trust commitments"
        className="bg-[#EAF2EE] dark:bg-[#152721] border-b border-[#E2D8C7] dark:border-[#223A30]"
      >
        <div dir="ltr" className="w-full py-3.5 overflow-hidden marquee-fade-mask">
          <div className="trust-marquee-track flex w-max items-center motion-reduce:w-full motion-reduce:max-w-[1200px] motion-reduce:mx-auto motion-reduce:px-6 motion-reduce:flex-wrap motion-reduce:justify-center">
            {[0, 1, 2].map((copyIdx) => (
              <ul
                key={copyIdx}
                aria-hidden={copyIdx > 0 ? 'true' : undefined}
                className={`flex items-center gap-10 pe-10 shrink-0 ${
                  copyIdx > 0
                    ? 'motion-reduce:hidden'
                    : 'motion-reduce:pe-0 motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-6'
                }`}
              >
                {t.trustStrip.map((label, idx) => {
                  const Icon = trustIcons[idx] ?? ShieldCheck;
                  return (
                    <li
                      key={`${copyIdx}-${label}`}
                      dir="auto"
                      className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#0D3B2E] dark:text-[#F5EFE4] whitespace-nowrap shrink-0"
                    >
                      <Icon
                        className="w-4 h-4 text-[#8C6516] dark:text-[#C99A3B] shrink-0"
                        aria-hidden="true"
                      />
                      <span>{label}</span>
                    </li>
                  );
                })}
              </ul>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
