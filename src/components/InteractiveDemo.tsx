import React, { useEffect, useMemo, useState } from 'react';
import {
  BookOpen,
  Check,
  Clock,
  ListChecks,
  RotateCcw,
  Sparkles,
} from 'lucide-react';
import { LocaleCode } from '../config/siteConfig';
import {
  AL_FATIHA_AYAHS,
  DEMO_CITIES,
  DEMO_SUNNAH_ITEMS,
  QuranWord,
} from '../data/demoData';
import { LocaleStrings } from '../data/translations';

interface InteractiveDemoProps {
  t: LocaleStrings;
  locale: LocaleCode;
}

type DemoTab = 'quran' | 'prayer' | 'sunnah' | 'tasbih';

interface TimingsMap {
  Fajr: string;
  Sunrise: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
}

interface CachedPrayerEntry {
  timings: TimingsMap;
  dateKey: string;
  savedAt: number;
}

function getTodayKey(): string {
  const d = new Date();
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}

function parseMinutes(hhmm: string): number {
  const clean = hhmm.split(' ')[0];
  const [h, m] = clean.split(':').map((n) => parseInt(n, 10));
  if (Number.isNaN(h) || Number.isNaN(m)) return 0;
  return h * 60 + m;
}

function computeNextPrayer(timings: TimingsMap): {
  name: keyof TimingsMap;
  time: string;
  remainingText: string;
} {
  const now = new Date();
  const nowSec =
    now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
  const order: (keyof TimingsMap)[] = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];

  for (const key of order) {
    const targetSec = parseMinutes(timings[key]) * 60;
    if (targetSec > nowSec) {
      const diff = targetSec - nowSec;
      const hrs = Math.floor(diff / 3600);
      const mins = Math.floor((diff % 3600) / 60);
      const secs = diff % 60;
      return {
        name: key,
        time: timings[key].split(' ')[0],
        remainingText: `${String(hrs).padStart(2, '0')}h ${String(mins).padStart(
          2,
          '0'
        )}m ${String(secs).padStart(2, '0')}s`,
      };
    }
  }

  // After Isha -> countdown to tomorrow's Fajr
  const fajrSec = parseMinutes(timings.Fajr) * 60 + 24 * 3600;
  const diff = fajrSec - nowSec;
  const hrs = Math.floor(diff / 3600);
  const mins = Math.floor((diff % 3600) / 60);
  const secs = diff % 60;
  return {
    name: 'Fajr',
    time: timings.Fajr.split(' ')[0],
    remainingText: `${String(hrs).padStart(2, '0')}h ${String(mins).padStart(
      2,
      '0'
    )}m ${String(secs).padStart(2, '0')}s`,
  };
}

export const InteractiveDemo: React.FC<InteractiveDemoProps> = ({ t, locale }) => {
  const [activeTab, setActiveTab] = useState<DemoTab>('quran');

  // 1. Quran Reader state
  const [arabicSize, setArabicSize] = useState<number>(22);
  const [selectedWord, setSelectedWord] = useState<{
    word: QuranWord;
    ayahRef: string;
  } | null>({
    word: AL_FATIHA_AYAHS[0].words[2],
    ayahRef: AL_FATIHA_AYAHS[0].reference,
  });

  // 2. Prayer Times state (AlAdhan API Method 1 Karachi + 24h sessionStorage cache)
  const [selectedCity, setSelectedCity] = useState<string>('Karachi');
  const [timings, setTimings] = useState<TimingsMap>(DEMO_CITIES[0].fallbackTimings);
  const [loadingPrayer, setLoadingPrayer] = useState<boolean>(false);
  const [isFallbackPrayer, setIsFallbackPrayer] = useState<boolean>(false);
  const [tick, setTick] = useState<number>(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTick((n) => n + 1);
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const cityObj =
      DEMO_CITIES.find((c) => c.name === selectedCity) ?? DEMO_CITIES[0];
    const cacheKey = `nez_prayer_${cityObj.name}_${getTodayKey()}`;

    try {
      const raw = sessionStorage.getItem(cacheKey);
      if (raw) {
        const parsed = JSON.parse(raw) as CachedPrayerEntry;
        if (Date.now() - parsed.savedAt < 24 * 60 * 60 * 1000) {
          setTimings(parsed.timings);
          setIsFallbackPrayer(false);
          setLoadingPrayer(false);
          return;
        }
      }
    } catch {
      // Ignore storage errors
    }

    let cancelled = false;
    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 5000);

    setLoadingPrayer(true);
    setIsFallbackPrayer(false);

    const url = `https://api.aladhan.com/v1/timingsByCity?city=${encodeURIComponent(
      cityObj.name
    )}&country=${encodeURIComponent(cityObj.country)}&method=1`;

    fetch(url, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error('AlAdhan error');
        return res.json();
      })
      .then((json) => {
        if (cancelled) return;
        const apiTimings = json?.data?.timings;
        if (!apiTimings?.Fajr) throw new Error('Missing timings');
        const cleaned: TimingsMap = {
          Fajr: String(apiTimings.Fajr).split(' ')[0],
          Sunrise: String(apiTimings.Sunrise).split(' ')[0],
          Dhuhr: String(apiTimings.Dhuhr).split(' ')[0],
          Asr: String(apiTimings.Asr).split(' ')[0],
          Maghrib: String(apiTimings.Maghrib).split(' ')[0],
          Isha: String(apiTimings.Isha).split(' ')[0],
        };
        setTimings(cleaned);
        setIsFallbackPrayer(false);
        try {
          const entry: CachedPrayerEntry = {
            timings: cleaned,
            dateKey: getTodayKey(),
            savedAt: Date.now(),
          };
          sessionStorage.setItem(cacheKey, JSON.stringify(entry));
        } catch {
          // Ignore storage error
        }
      })
      .catch(() => {
        if (cancelled) return;
        setTimings(cityObj.fallbackTimings);
        setIsFallbackPrayer(true);
      })
      .finally(() => {
        window.clearTimeout(timeoutId);
        if (!cancelled) setLoadingPrayer(false);
      });

    return () => {
      cancelled = true;
      controller.abort();
      window.clearTimeout(timeoutId);
    };
  }, [selectedCity]);

  const nextPrayer = useMemo(() => {
    void tick;
    return computeNextPrayer(timings);
  }, [timings, tick]);

  // 3. Sunnah Checklist state (sessionStorage)
  const [checkedIds, setCheckedIds] = useState<string[]>(() => {
    try {
      const saved = sessionStorage.getItem('nez_demo_sunnah');
      if (saved) return JSON.parse(saved) as string[];
    } catch {
      // ignore
    }
    return ['bismillah-eating'];
  });

  const toggleSunnah = (id: string) => {
    setCheckedIds((prev) => {
      const next = prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id];
      try {
        sessionStorage.setItem('nez_demo_sunnah', JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  };

  const sunnahCompletion = Math.round(
    (checkedIds.length / DEMO_SUNNAH_ITEMS.length) * 100
  );
  const demoStreak = checkedIds.length > 0 ? 1 : 0;

  // 4. Tasbih Counter state
  const [tasbihCount, setTasbihCount] = useState<number>(0);
  const [tasbihTarget, setTasbihTarget] = useState<number>(33);
  const [pulseScale, setPulseScale] = useState<boolean>(false);

  const handleTasbihTap = () => {
    setTasbihCount((c) => c + 1);
    setPulseScale(true);
    window.setTimeout(() => setPulseScale(false), 140);
    if (typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function') {
      navigator.vibrate(10);
    }
  };

  const tasbihProgress = Math.min(1, (tasbihCount % tasbihTarget || (tasbihCount > 0 && tasbihCount % tasbihTarget === 0 ? tasbihTarget : 0)) / tasbihTarget);
  const tasbihRingDash = 2 * Math.PI * 52;

  const tabs: { id: DemoTab; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'quran', label: t.demoSection.tabs.quran, icon: BookOpen },
    { id: 'prayer', label: t.demoSection.tabs.prayer, icon: Clock },
    { id: 'sunnah', label: t.demoSection.tabs.sunnah, icon: ListChecks },
    { id: 'tasbih', label: t.demoSection.tabs.tasbih, icon: Sparkles },
  ];

  return (
    <section
      id="demo"
      className="py-16 md:py-24 bg-[#EAF2EE]/55 dark:bg-[#152721]/55 border-b border-[#E2D8C7] dark:border-[#223A30]"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <div className="max-w-2xl mb-8">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#0D3B2E] dark:text-[#F5EFE4] [text-wrap:balance]">
            {t.demoSection.heading}
          </h2>
          <p className="mt-4 text-base text-[#4A5A52] dark:text-[#B7C4BD] leading-relaxed">
            {t.demoSection.subheading}
          </p>
        </div>

        {/* Persistent sample-content banner */}
        <div className="mb-8 rounded-xl bg-[#0D3B2E] text-[#F5EFE4] px-4 py-3 text-xs sm:text-sm font-medium flex items-center justify-between gap-4 border border-[#C99A3B]/40">
          <span>{t.demoSection.banner}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Interactive Android Phone Frame */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="w-full max-w-[440px] rounded-[36px] p-[10px] android-bezel-sheen">
              <div className="rounded-[28px] bg-[#FAF6EE] dark:bg-[#091511] text-[#17221E] dark:text-[#F5EFE4] overflow-hidden flex flex-col min-h-[600px]">
                {/* Android punch-hole top bar */}
                <div
                  dir="ltr"
                  className="flex items-center justify-between px-5 pt-3 pb-2 text-[11px] font-medium text-[#4A5A52] dark:text-[#B7C4BD] border-b border-[#E2D8C7] dark:border-[#223A30]"
                >
                  <span className="font-brand font-semibold text-[#0D3B2E] dark:text-[#F5EFE4]">
                    Noor-e-Zindagi
                  </span>
                  <span
                    aria-hidden="true"
                    className="h-3 w-3 rounded-full bg-[#07241C] ring-1 ring-[#C99A3B]/45"
                  />
                  <span className="tabular-nums">Demo</span>
                </div>

                {/* Tab switcher */}
                <div
                  role="tablist"
                  aria-label="Interactive app demo tabs"
                  className="grid grid-cols-4 gap-1 p-2 bg-[#EAF2EE] dark:bg-[#152721] border-b border-[#E2D8C7] dark:border-[#223A30]"
                >
                  {tabs.map((tab) => {
                    const isActive = activeTab === tab.id;
                    const Icon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg text-xs font-semibold transition-colors min-h-[40px] ${
                          isActive
                            ? 'bg-[#0D3B2E] text-[#F5EFE4] dark:bg-[#145341] shadow-sm'
                            : 'text-[#4A5A52] dark:text-[#B7C4BD] hover:text-[#0D3B2E] dark:hover:text-[#F5EFE4]'
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span className="truncate">{tab.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Active Tab Content */}
                <div className="flex-1 p-4 sm:p-5 overflow-y-auto overscroll-contain max-h-[540px]">
                  {/* TAB 1: QURAN READER */}
                  {activeTab === 'quran' && (
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#E2D8C7] dark:border-[#223A30]">
                        <div>
                          <h3 className="font-display text-base font-semibold text-[#0D3B2E] dark:text-[#F5EFE4]">
                            {t.demoSection.quran.surahTitle}
                          </h3>
                          <p className="text-[11px] text-[#4A5A52] dark:text-[#B7C4BD]">
                            {t.demoSection.quran.tapWordHint}
                          </p>
                        </div>

                        <label className="flex items-center gap-2 text-xs text-[#4A5A52] dark:text-[#B7C4BD]">
                          <span>{t.demoSection.quran.fontSizeLabel}</span>
                          <input
                            type="range"
                            min={14}
                            max={28}
                            value={arabicSize}
                            onChange={(e) => setArabicSize(Number(e.target.value))}
                            className="w-20 accent-[#C99A3B]"
                          />
                          <span className="tabular-nums font-medium w-8 text-end">
                            {arabicSize}px
                          </span>
                        </label>
                      </div>

                      {selectedWord && (
                        <div
                          aria-live="polite"
                          className="rounded-xl bg-[#0D3B2E] text-[#F5EFE4] px-3.5 py-2.5 flex items-center justify-between gap-3"
                        >
                          <div className="min-w-0">
                            <p className="text-[11px] font-semibold text-[#F3E4BE] truncate">
                              {selectedWord.word.transliteration} · {selectedWord.word.meaningEn}
                            </p>
                            <p className="text-[11px] text-[#B7C4BD] truncate">
                              {t.demoSection.quran.rootLabel}: <span className="font-arabic">{selectedWord.word.root}</span> · {selectedWord.word.meaningUr}
                            </p>
                          </div>
                          <span
                            dir="rtl"
                            lang="ar"
                            className="font-arabic text-xl text-[#F3E4BE] shrink-0"
                          >
                            {selectedWord.word.arabic}
                          </span>
                        </div>
                      )}

                      <div className="space-y-4">
                        {AL_FATIHA_AYAHS.map((ayah) => (
                          <div
                            key={ayah.number}
                            className="rounded-xl bg-white dark:bg-[#11231C] border border-[#E2D8C7] dark:border-[#223A30] p-3.5 space-y-2"
                          >
                            <div
                              dir="rtl"
                              lang="ar"
                              className="flex flex-wrap gap-x-2 gap-y-1.5 font-arabic text-right"
                              style={{ fontSize: `${arabicSize}px`, lineHeight: 2.0 }}
                            >
                              {ayah.words.map((word, wIdx) => {
                                const isSelected =
                                  selectedWord?.ayahRef === ayah.reference &&
                                  selectedWord.word.arabic === word.arabic &&
                                  selectedWord.word.transliteration === word.transliteration;
                                return (
                                  <button
                                    key={`${ayah.number}-${wIdx}`}
                                    type="button"
                                    onClick={() =>
                                      setSelectedWord({ word, ayahRef: ayah.reference })
                                    }
                                    className={`px-1.5 py-0.5 rounded-md transition-colors ${
                                      isSelected
                                        ? 'bg-[#C99A3B] text-[#07241C]'
                                        : 'hover:bg-[#EAF2EE] dark:hover:bg-[#1A2E27] text-[#0D3B2E] dark:text-[#F5EFE4]'
                                    }`}
                                  >
                                    {word.arabic}
                                  </button>
                                );
                              })}
                            </div>

                            <p className="text-xs text-[#17221E] dark:text-[#F5EFE4] leading-relaxed">
                              {ayah.english}
                            </p>
                            <p
                              dir="rtl"
                              lang="ur"
                              className="font-urdu text-xs text-right text-[#4A5A52] dark:text-[#B7C4BD]"
                            >
                              {ayah.urdu}
                            </p>
                            <p className="text-[11px] font-medium text-[#8C6516] dark:text-[#C99A3B] tabular-nums">
                              [{ayah.reference}]
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* TAB 2: PRAYER TIMES */}
                  {activeTab === 'prayer' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between gap-3">
                        <label
                          htmlFor="demo-city-select"
                          className="text-xs font-semibold text-[#0D3B2E] dark:text-[#F5EFE4]"
                        >
                          {t.demoSection.prayer.cityLabel}
                        </label>
                        <select
                          id="demo-city-select"
                          value={selectedCity}
                          onChange={(e) => setSelectedCity(e.target.value)}
                          className="rounded-lg border border-[#E2D8C7] dark:border-[#223A30] bg-white dark:bg-[#11231C] px-3 py-2 text-xs font-medium min-h-[40px]"
                        >
                          {DEMO_CITIES.map((city) => (
                            <option key={city.name} value={city.name}>
                              {city.name}, {city.country}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Next prayer live countdown (aria-live="polite") */}
                      <div
                        aria-live="polite"
                        className="rounded-xl bg-[#0D3B2E] text-[#F5EFE4] p-4 space-y-1"
                      >
                        <div className="flex items-center justify-between text-xs text-[#F3E4BE]">
                          <span>{t.demoSection.prayer.nextPrayerLabel}</span>
                          <span className="tabular-nums">{nextPrayer.time}</span>
                        </div>
                        <p className="font-display text-xl font-semibold">
                          {t.demoSection.prayer.prayerNames[nextPrayer.name]}
                        </p>
                        <p className="text-sm font-medium tabular-nums text-[#F3E4BE]">
                          {nextPrayer.remainingText}
                        </p>
                      </div>

                      {/* Status indicator (live vs offline fallback) */}
                      <div aria-live="polite" className="text-[11px] text-[#4A5A52] dark:text-[#B7C4BD]">
                        {loadingPrayer
                          ? t.demoSection.prayer.loadingText
                          : isFallbackPrayer
                          ? t.demoSection.prayer.fallbackBadge
                          : t.demoSection.prayer.liveBadge}
                      </div>

                      {/* Timings list or loading skeleton */}
                      {loadingPrayer ? (
                        <div className="space-y-2" aria-hidden="true">
                          {[1, 2, 3, 4, 5, 6].map((n) => (
                            <div
                              key={n}
                              className="h-10 rounded-lg bg-[#DCE7E1]/60 dark:bg-[#1A2E27] animate-pulse"
                            />
                          ))}
                        </div>
                      ) : (
                        <ul className="space-y-2">
                          {(Object.keys(timings) as (keyof TimingsMap)[]).map((key) => {
                            const isNext = nextPrayer.name === key;
                            return (
                              <li
                                key={key}
                                className={`flex items-center justify-between rounded-xl px-3.5 py-2.5 text-xs sm:text-sm border ${
                                  isNext
                                    ? 'bg-[#F3E4BE]/45 dark:bg-[#145341] border-[#C99A3B] font-semibold'
                                    : 'bg-white dark:bg-[#11231C] border-[#E2D8C7] dark:border-[#223A30]'
                                }`}
                              >
                                <span>{t.demoSection.prayer.prayerNames[key]}</span>
                                <span className="tabular-nums">{timings[key]}</span>
                              </li>
                            );
                          })}
                        </ul>
                      )}

                      <p className="text-[11px] text-[#4A5A52] dark:text-[#B7C4BD]">
                        {t.demoSection.prayer.methodNote}
                      </p>
                    </div>
                  )}

                  {/* TAB 3: SUNNAH CHECKLIST */}
                  {activeTab === 'sunnah' && (
                    <div className="space-y-4">
                      <div className="rounded-xl bg-white dark:bg-[#11231C] border border-[#E2D8C7] dark:border-[#223A30] p-4 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3.5">
                          <svg className="w-14 h-14 -rotate-90 shrink-0" viewBox="0 0 48 48" aria-hidden="true">
                            <circle
                              cx="24"
                              cy="24"
                              r="20"
                              fill="none"
                              stroke="currentColor"
                              className="text-[#DCE7E1] dark:text-[#1A2E27]"
                              strokeWidth="4"
                            />
                            <circle
                              cx="24"
                              cy="24"
                              r="20"
                              fill="none"
                              stroke="#C99A3B"
                              strokeWidth="4"
                              strokeLinecap="round"
                              strokeDasharray={2 * Math.PI * 20}
                              strokeDashoffset={
                                2 * Math.PI * 20 * (1 - sunnahCompletion / 100)
                              }
                              className="transition-[stroke-dashoffset] duration-300"
                            />
                          </svg>
                          <div>
                            <p className="text-xs text-[#4A5A52] dark:text-[#B7C4BD]">
                              {t.demoSection.sunnah.completedLabel}
                            </p>
                            <p className="text-lg font-semibold tabular-nums text-[#0D3B2E] dark:text-[#F5EFE4]">
                              {sunnahCompletion}% ({checkedIds.length}/{DEMO_SUNNAH_ITEMS.length})
                            </p>
                          </div>
                        </div>

                        <div className="text-end">
                          <p className="text-[11px] text-[#4A5A52] dark:text-[#B7C4BD]">
                            {t.demoSection.sunnah.streakLabel}
                          </p>
                          <p className="text-base font-semibold tabular-nums text-[#8C6516] dark:text-[#C99A3B]">
                            {demoStreak} day
                          </p>
                        </div>
                      </div>

                      <ul className="space-y-2.5">
                        {DEMO_SUNNAH_ITEMS.map((item) => {
                          const checked = checkedIds.includes(item.id);
                          const title =
                            locale === 'ur'
                              ? item.titleUr
                              : locale === 'roman-urdu'
                              ? item.titleRoman
                              : item.titleEn;
                          const classification =
                            locale === 'ur'
                              ? item.classificationUr
                              : locale === 'roman-urdu'
                              ? item.classificationRoman
                              : item.classificationEn;

                          return (
                            <li key={item.id}>
                              <button
                                type="button"
                                onClick={() => toggleSunnah(item.id)}
                                aria-pressed={checked}
                                className={`w-full text-start rounded-xl border p-3.5 transition-colors flex items-start gap-3 min-h-[48px] ${
                                  checked
                                    ? 'bg-[#EAF2EE] dark:bg-[#145341]/55 border-[#0D3B2E] dark:border-[#C99A3B]'
                                    : 'bg-white dark:bg-[#11231C] border-[#E2D8C7] dark:border-[#223A30]'
                                }`}
                              >
                                <span
                                  aria-hidden="true"
                                  className={`mt-0.5 w-5 h-5 rounded-md border flex items-center justify-center shrink-0 ${
                                    checked
                                      ? 'bg-[#0D3B2E] border-[#0D3B2E] text-[#C99A3B]'
                                      : 'border-[#C99A3B]'
                                  }`}
                                >
                                  {checked && <Check className="w-3.5 h-3.5" />}
                                </span>
                                <div className="space-y-1 flex-1">
                                  <p className="text-xs sm:text-sm font-medium text-[#17221E] dark:text-[#F5EFE4]">
                                    {title}
                                  </p>
                                  <p
                                    dir="rtl"
                                    lang="ar"
                                    className="font-arabic text-sm text-right text-[#0D3B2E] dark:text-[#F3E4BE]"
                                  >
                                    {item.arabic}
                                  </p>
                                  <p className="text-[11px] text-[#4A5A52] dark:text-[#B7C4BD]">
                                    {classification} · {item.reference}
                                  </p>
                                </div>
                              </button>
                            </li>
                          );
                        })}
                      </ul>

                      <p className="text-xs font-medium text-[#0D3B2E] dark:text-[#F3E4BE]">
                        {checkedIds.length === DEMO_SUNNAH_ITEMS.length
                          ? t.demoSection.sunnah.gentleDone
                          : t.demoSection.sunnah.gentleEncourage}
                      </p>
                      <p className="text-[11px] text-[#4A5A52] dark:text-[#B7C4BD]">
                        {t.demoSection.sunnah.sessionNote}
                      </p>
                    </div>
                  )}

                  {/* TAB 4: TASBIH COUNTER */}
                  {activeTab === 'tasbih' && (
                    <div className="flex flex-col items-center justify-between py-4 space-y-6">
                      <div className="w-full flex items-center justify-between gap-3">
                        <span className="text-xs font-medium text-[#4A5A52] dark:text-[#B7C4BD]">
                          {t.demoSection.tasbih.targetLabel}
                        </span>
                        <div className="flex items-center gap-1.5">
                          {[33, 99, 100].map((val) => (
                            <button
                              key={val}
                              type="button"
                              onClick={() => setTasbihTarget(val)}
                              className={`px-3 py-1.5 rounded-lg text-xs font-semibold tabular-nums border min-h-[36px] ${
                                tasbihTarget === val
                                  ? 'bg-[#0D3B2E] text-[#F5EFE4] border-[#0D3B2E] dark:border-[#C99A3B]'
                                  : 'bg-white dark:bg-[#11231C] border-[#E2D8C7] dark:border-[#223A30]'
                              }`}
                            >
                              {val}
                            </button>
                          ))}
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={handleTasbihTap}
                        aria-label={`${t.demoSection.tasbih.tapButton}. Current count ${tasbihCount} of ${tasbihTarget}`}
                        className="relative w-48 h-48 rounded-full bg-[#0D3B2E] text-[#F5EFE4] flex flex-col items-center justify-center surface-shadow-md active:scale-[0.97] transition-transform duration-150"
                      >
                        <svg
                          className="absolute inset-0 w-full h-full -rotate-90"
                          viewBox="0 0 120 120"
                          aria-hidden="true"
                        >
                          <circle
                            cx="60"
                            cy="60"
                            r="52"
                            fill="none"
                            stroke="#145341"
                            strokeWidth="6"
                          />
                          <circle
                            cx="60"
                            cy="60"
                            r="52"
                            fill="none"
                            stroke="#C99A3B"
                            strokeWidth="6"
                            strokeLinecap="round"
                            strokeDasharray={tasbihRingDash}
                            strokeDashoffset={tasbihRingDash * (1 - tasbihProgress)}
                            className="transition-[stroke-dashoffset] duration-150"
                          />
                        </svg>

                        <span
                          aria-live="polite"
                          className={`font-display text-5xl font-semibold tabular-nums transition-transform duration-150 ${
                            pulseScale ? 'scale-110 text-[#F3E4BE]' : 'scale-100'
                          }`}
                        >
                          {tasbihCount}
                        </span>
                        <span className="mt-1 text-xs text-[#F3E4BE] tabular-nums">
                          / {tasbihTarget}
                        </span>
                      </button>

                      <div className="text-center space-y-2">
                        <p className="text-xs font-medium text-[#4A5A52] dark:text-[#B7C4BD]">
                          {tasbihCount > 0 && tasbihCount % tasbihTarget === 0
                            ? t.demoSection.tasbih.completedTarget
                            : t.demoSection.tasbih.tapButton}
                        </p>
                        <button
                          type="button"
                          onClick={() => setTasbihCount(0)}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-[#E2D8C7] dark:border-[#223A30] bg-white dark:bg-[#11231C] text-xs font-semibold hover:border-[#C99A3B] min-h-[40px]"
                        >
                          <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>{t.demoSection.tasbih.resetButton}</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Android gesture bar */}
                <div className="py-2.5 flex justify-center border-t border-[#E2D8C7] dark:border-[#223A30]" aria-hidden="true">
                  <div className="h-1 w-24 rounded-full bg-[#4A5A52]/30" />
                </div>
              </div>
            </div>
          </div>

          {/* Companion Context / Word Inspector Panel */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-white dark:bg-[#11231C] border border-[#E2D8C7] dark:border-[#223A30] p-6 surface-shadow-sm">
              <h3 className="font-display text-xl font-semibold text-[#0D3B2E] dark:text-[#F5EFE4]">
                {t.demoSection.quran.selectedWordTitle}
              </h3>

              {selectedWord ? (
                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between border-b border-[#E2D8C7] dark:border-[#223A30] pb-3">
                    <div>
                      <p className="text-sm font-semibold text-[#8C6516] dark:text-[#C99A3B]">
                        {selectedWord.word.transliteration}
                      </p>
                      <p className="text-xs text-[#4A5A52] dark:text-[#B7C4BD]">
                        {selectedWord.ayahRef}
                      </p>
                    </div>
                    <p
                      dir="rtl"
                      lang="ar"
                      className="font-arabic text-3xl text-[#0D3B2E] dark:text-[#F5EFE4]"
                    >
                      {selectedWord.word.arabic}
                    </p>
                  </div>

                  <dl className="space-y-2 text-sm">
                    <div className="flex justify-between gap-4">
                      <dt className="text-[#4A5A52] dark:text-[#B7C4BD]">
                        {t.demoSection.quran.rootLabel}
                      </dt>
                      <dd dir="rtl" lang="ar" className="font-arabic font-semibold">
                        {selectedWord.word.root}
                      </dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-[#4A5A52] dark:text-[#B7C4BD]">
                        {t.demoSection.quran.englishMeaningLabel}
                      </dt>
                      <dd className="font-medium text-end">
                        {selectedWord.word.meaningEn}
                      </dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-[#4A5A52] dark:text-[#B7C4BD]">
                        {t.demoSection.quran.urduMeaningLabel}
                      </dt>
                      <dd dir="rtl" lang="ur" className="font-urdu font-medium">
                        {selectedWord.word.meaningUr}
                      </dd>
                    </div>
                  </dl>
                </div>
              ) : (
                <p className="mt-3 text-sm text-[#4A5A52] dark:text-[#B7C4BD]">
                  {t.demoSection.quran.tapWordHint}
                </p>
              )}
            </div>

            <div className="rounded-2xl bg-white dark:bg-[#11231C] border border-[#E2D8C7] dark:border-[#223A30] p-6 space-y-3">
              <h3 className="font-display text-lg font-semibold text-[#0D3B2E] dark:text-[#F5EFE4]">
                {t.demoSection.liveNotesTitle}
              </h3>
              <ul className="space-y-2 text-sm text-[#4A5A52] dark:text-[#B7C4BD] leading-relaxed">
                {t.demoSection.liveNotes.map((note) => (
                  <li key={note} className="flex items-start gap-2">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 rounded-full bg-[#C99A3B] shrink-0"
                    />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
