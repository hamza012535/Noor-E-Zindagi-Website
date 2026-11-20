import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SCREENSHOT_SLOTS } from '../config/siteConfig';
import { LocaleStrings } from '../data/translations';
import { AndroidPhoneMockup } from './AndroidPhoneMockup';

interface ScreenshotsCarouselProps {
  t: LocaleStrings;
}

export const ScreenshotsCarousel: React.FC<ScreenshotsCarouselProps> = ({ t }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const total = SCREENSHOT_SLOTS.length;

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    if (reducedMotion || isPaused) return;
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 5200);
    return () => window.clearInterval(timer);
  }, [reducedMotion, isPaused, total]);

  const goPrev = () => setActiveIndex((prev) => (prev - 1 + total) % total);
  const goNext = () => setActiveIndex((prev) => (prev + 1) % total);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const isRtl = document.documentElement.dir === 'rtl';
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      if (isRtl) goPrev();
      else goNext();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      if (isRtl) goNext();
      else goPrev();
    }
  };

  const activeSlot = SCREENSHOT_SLOTS[activeIndex];
  const activeCaption = t.screenshotsSection.captions[activeSlot.titleKey];
  const slideText = t.screenshotsSection.slideIndicator
    .replace('{current}', String(activeIndex + 1))
    .replace('{total}', String(total));

  return (
    <section
      id="screenshots"
      className="py-16 md:py-24 bg-[#FAF6EE] dark:bg-[#091511] border-b border-[#E2D8C7] dark:border-[#223A30]"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#0D3B2E] dark:text-[#F5EFE4] [text-wrap:balance]">
              {t.screenshotsSection.heading}
            </h2>
            <p className="mt-4 text-base text-[#4A5A52] dark:text-[#B7C4BD] leading-relaxed">
              {t.screenshotsSection.subheading}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span
              aria-live="polite"
              className="text-xs font-semibold tabular-nums text-[#8C6516] dark:text-[#C99A3B]"
            >
              {slideText}
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={goPrev}
                aria-label={t.screenshotsSection.previous}
                className="inline-flex items-center justify-center w-11 h-11 rounded-xl border border-[#E2D8C7] dark:border-[#223A30] bg-white dark:bg-[#11231C] text-[#0D3B2E] dark:text-[#F5EFE4] hover:border-[#C99A3B] transition-colors"
              >
                <ChevronLeft className="w-5 h-5 rtl:rotate-180" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label={t.screenshotsSection.next}
                className="inline-flex items-center justify-center w-11 h-11 rounded-xl border border-[#E2D8C7] dark:border-[#223A30] bg-white dark:bg-[#11231C] text-[#0D3B2E] dark:text-[#F5EFE4] hover:border-[#C99A3B] transition-colors"
              >
                <ChevronRight className="w-5 h-5 rtl:rotate-180" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* Keyboard-navigable carousel region */}
        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="App screenshots"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
          className="rounded-3xl bg-white dark:bg-[#11231C] border border-[#E2D8C7] dark:border-[#223A30] p-6 sm:p-10 surface-shadow-sm focus-visible:outline-2 focus-visible:outline-[#C99A3B]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Screen Selector Rail */}
            <div className="lg:col-span-5 order-2 lg:order-1 space-y-1.5">
              {SCREENSHOT_SLOTS.map((slot, idx) => {
                const cap = t.screenshotsSection.captions[slot.titleKey];
                const isSelected = idx === activeIndex;
                return (
                  <button
                    key={slot.id}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    aria-current={isSelected ? 'true' : undefined}
                    className={`w-full text-start px-3.5 py-2.5 rounded-xl border transition-colors flex items-center justify-between gap-3 min-h-[44px] ${
                      isSelected
                        ? 'bg-[#0D3B2E] text-[#F5EFE4] border-[#0D3B2E] dark:bg-[#145341] dark:border-[#C99A3B]'
                        : 'bg-[#FAF6EE] dark:bg-[#091511] border-[#E2D8C7] dark:border-[#223A30] text-[#17221E] dark:text-[#F5EFE4] hover:border-[#C99A3B]'
                    }`}
                  >
                    <div className="min-w-0">
                      <p className="text-sm font-semibold truncate">{cap.title}</p>
                      <p
                        className={`text-xs truncate ${
                          isSelected
                            ? 'text-[#F3E4BE]'
                            : 'text-[#4A5A52] dark:text-[#B7C4BD]'
                        }`}
                      >
                        {cap.subtitle}
                      </p>
                    </div>
                    <span
                      dir="ltr"
                      className={`text-[10px] font-mono shrink-0 ${
                        isSelected
                          ? 'text-[#F3E4BE]'
                          : 'text-[#4A5A52] dark:text-[#B7C4BD]'
                      }`}
                    >
                      {slot.imageUrl ? '2x WebP' : slot.slotKey}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active 9:19.5 Android Phone Frame */}
            <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-center">
              <AndroidPhoneMockup
                screenType={activeSlot.titleKey}
                slot={activeSlot}
                className="w-full max-w-[285px]"
              />
              <div className="mt-5 text-center space-y-1">
                <p className="font-display text-lg font-semibold text-[#0D3B2E] dark:text-[#F5EFE4]">
                  {activeCaption.title}
                </p>
                <p className="text-xs text-[#4A5A52] dark:text-[#B7C4BD]">
                  {activeCaption.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
