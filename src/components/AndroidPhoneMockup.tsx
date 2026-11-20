import React from 'react';
import {
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Clock,
  Heart,
  Moon,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { ScreenshotSlot } from '../config/siteConfig';

interface AndroidPhoneMockupProps {
  slot?: ScreenshotSlot;
  screenType:
    | 'home'
    | 'quran'
    | 'prayer'
    | 'sunnah'
    | 'azkar'
    | 'hadith'
    | 'calendar'
    | 'ai'
    | 'night';
  className?: string;
}

/**
 * Modern Android 9:19.5 frame in soft emerald-and-gold with subtle sheen.
 * Punch-hole camera & gesture bar only — no iOS notch or Apple styling.
 */
export const AndroidPhoneMockup: React.FC<AndroidPhoneMockupProps> = ({
  slot,
  screenType,
  className = '',
}) => {
  const isNightScreen = screenType === 'night';

  return (
    <div
      className={`relative mx-auto w-full max-w-[290px] aspect-[9/19.5] rounded-[34px] p-[9px] android-bezel-sheen select-none ${className}`}
    >
      {/* Android side hardware buttons */}
      <span
        aria-hidden="true"
        className="absolute -end-[3px] top-24 h-12 w-[3px] rounded-e-sm bg-[#C99A3B]/60"
      />
      <span
        aria-hidden="true"
        className="absolute -end-[3px] top-40 h-8 w-[3px] rounded-e-sm bg-[#C99A3B]/45"
      />

      {/* Screen viewport */}
      <div
        dir="ltr"
        className={`relative h-full w-full overflow-hidden rounded-[26px] flex flex-col ${
          isNightScreen
            ? 'bg-[#07241C] text-[#F5EFE4]'
            : 'bg-[#FAF6EE] dark:bg-[#091511] text-[#17221E] dark:text-[#F5EFE4]'
        }`}
      >
        {/* Android punch-hole camera & status bar */}
        <div className="flex items-center justify-between px-4 pt-2.5 pb-1.5 text-[10px] font-medium opacity-80 shrink-0">
          <span className="tabular-nums">15:28</span>
          <span
            aria-hidden="true"
            className="h-3 w-3 rounded-full bg-[#07241C] ring-1 ring-[#C99A3B]/40"
          />
          <span className="tabular-nums">Karachi · 4G</span>
        </div>

        {/* Real WebP/AVIF screenshot if provided in siteConfig.ts */}
        {slot?.imageUrl ? (
          <img
            src={slot.imageUrl}
            alt={slot.alt}
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex-1 px-3.5 py-2 flex flex-col gap-2 overflow-y-auto no-scrollbar text-left">
            {screenType === 'home' && <HomeScreenPreview />}
            {screenType === 'quran' && <QuranScreenPreview />}
            {screenType === 'prayer' && <PrayerScreenPreview />}
            {screenType === 'sunnah' && <SunnahScreenPreview />}
            {screenType === 'azkar' && <AzkarScreenPreview />}
            {screenType === 'hadith' && <HadithScreenPreview />}
            {screenType === 'calendar' && <CalendarScreenPreview />}
            {screenType === 'ai' && <AiScreenPreview />}
            {screenType === 'night' && <NightReadingPreview />}
          </div>
        )}

        {/* Android gesture bar */}
        <div className="py-2 flex justify-center shrink-0" aria-hidden="true">
          <div className="h-1 w-20 rounded-full bg-current opacity-25" />
        </div>
      </div>
    </div>
  );
};

const HomeScreenPreview: React.FC = () => (
  <>
    <div className="flex items-center justify-between pt-0.5">
      <div>
        <p className="text-[9px] text-[#4A5A52] dark:text-[#B7C4BD]">
          10 Jumada al-Ula 1448
        </p>
        <p className="font-display text-xs font-semibold text-[#0D3B2E] dark:text-[#F5EFE4]">
          Assalamu Alaikum, Hamza
        </p>
      </div>
      <div className="h-6 w-6 rounded-full bg-[#0D3B2E] text-[#C99A3B] flex items-center justify-center text-[9px] font-semibold shrink-0">
        NZ
      </div>
    </div>

    <div className="rounded-xl bg-[#0D3B2E] p-2.5 text-[#F5EFE4]">
      <div className="flex items-center justify-between text-[9px] text-[#F3E4BE]">
        <span>Next Salah · Asr</span>
        <span className="tabular-nums">15:39</span>
      </div>
      <p className="mt-0.5 text-base font-semibold tabular-nums">00h 11m left</p>
      <div className="mt-1.5 h-1.5 w-full rounded-full bg-[#145341]">
        <div className="h-1.5 w-2/3 rounded-full bg-[#C99A3B]" />
      </div>
    </div>

    <div className="grid grid-cols-2 gap-1.5">
      <div className="rounded-xl bg-white dark:bg-[#11231C] border border-[#E2D8C7] dark:border-[#223A30] p-2">
        <p className="text-[9px] text-[#4A5A52] dark:text-[#B7C4BD]">Sunnah Today</p>
        <p className="mt-0.5 text-sm font-semibold tabular-nums text-[#0D3B2E] dark:text-[#F3E4BE]">
          71%
        </p>
        <p className="text-[8.5px] text-[#4A5A52] dark:text-[#B7C4BD]">5 of 7 actions</p>
      </div>
      <div className="rounded-xl bg-white dark:bg-[#11231C] border border-[#E2D8C7] dark:border-[#223A30] p-2">
        <p className="text-[9px] text-[#4A5A52] dark:text-[#B7C4BD]">Last Read</p>
        <p className="mt-0.5 text-[11px] font-semibold text-[#0D3B2E] dark:text-[#F5EFE4]">
          Al-Mulk 67:3
        </p>
        <p className="text-[8.5px] text-[#8C6516] dark:text-[#C99A3B]">Resume reading</p>
      </div>
    </div>

    <div className="rounded-xl bg-white dark:bg-[#11231C] border border-[#E2D8C7] dark:border-[#223A30] p-2 space-y-0.5">
      <p className="text-[9px] font-medium text-[#8C6516] dark:text-[#C99A3B]">
        Daily Ayah · Al-Fatiha 1:5
      </p>
      <p className="font-arabic text-right text-xs leading-relaxed text-[#0D3B2E] dark:text-[#F5EFE4]" dir="rtl">
        إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ
      </p>
      <p className="text-[9px] text-[#4A5A52] dark:text-[#B7C4BD] leading-snug">
        It is You we worship and You we ask for help.
      </p>
    </div>

    <div className="grid grid-cols-4 gap-1 text-center text-[8.5px] text-[#4A5A52] dark:text-[#B7C4BD]">
      {[
        { icon: BookOpen, label: 'Quran' },
        { icon: Clock, label: 'Salah' },
        { icon: Heart, label: 'Azkar' },
        { icon: CheckCircle2, label: 'Sunnah' },
      ].map((item) => (
        <div
          key={item.label}
          className="rounded-lg bg-[#EAF2EE] dark:bg-[#152721] py-1.5 flex flex-col items-center gap-0.5"
        >
          <item.icon className="w-3 h-3 text-[#0D3B2E] dark:text-[#C99A3B]" />
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  </>
);

const QuranScreenPreview: React.FC = () => (
  <>
    <div className="flex items-center justify-between border-b border-[#E2D8C7] dark:border-[#223A30] pb-2">
      <div>
        <p className="font-display text-xs font-semibold">Surah Al-Fatiha</p>
        <p className="text-[9px] text-[#4A5A52] dark:text-[#B7C4BD]">
          Offline pack ready · Alafasy
        </p>
      </div>
      <span className="text-[9px] px-2 py-0.5 rounded bg-[#EAF2EE] dark:bg-[#152721] text-[#0D3B2E] dark:text-[#F3E4BE]">
        Word-by-Word
      </span>
    </div>

    <div className="rounded-xl bg-white dark:bg-[#11231C] border border-[#E2D8C7] dark:border-[#223A30] p-3 space-y-2">
      <p className="font-arabic text-right text-base leading-loose" dir="rtl">
        بِسْمِ ٱللَّهِ{' '}
        <span className="px-1 rounded bg-[#F3E4BE] text-[#07241C]">ٱلرَّحْمَـٰنِ</span>{' '}
        ٱلرَّحِيمِ
      </p>
      <p className="text-[10px] text-[#4A5A52] dark:text-[#B7C4BD]">
        In the name of Allah, the Entirely Merciful, the Especially Merciful.
      </p>
      <p className="font-urdu text-right text-[11px] text-[#4A5A52] dark:text-[#B7C4BD]" dir="rtl">
        شروع اللہ کے نام سے جو بڑا مہربان نہایت رحم والا ہے
      </p>
    </div>

    <div className="rounded-xl bg-[#0D3B2E] p-2.5 text-[#F5EFE4] space-y-1">
      <div className="flex items-center justify-between text-[10px]">
        <span className="text-[#F3E4BE] font-medium">Word Meaning · Root: ر ح م</span>
        <span className="font-arabic text-sm" dir="rtl">ٱلرَّحْمَـٰنِ</span>
      </div>
      <p className="text-[10px] opacity-90">Ar-Raḥmāni — The Entirely Merciful (بڑا مہربان)</p>
    </div>

    <div className="rounded-xl bg-[#EAF2EE] dark:bg-[#152721] p-2.5 flex items-center justify-between text-[10px]">
      <span>Audio: Arabic then Urdu</span>
      <span className="font-medium text-[#0D3B2E] dark:text-[#C99A3B]">Playing 1:1</span>
    </div>
  </>
);

const PrayerScreenPreview: React.FC = () => (
  <>
    <div className="rounded-xl bg-[#0D3B2E] p-3 text-[#F5EFE4]">
      <p className="text-[10px] text-[#F3E4BE]">Karachi · Method 1</p>
      <p className="font-display text-sm font-semibold mt-0.5">Asr in 11 minutes</p>
      <p className="text-[9px] opacity-80 mt-0.5">Ishraq 07:04 · Tahajjud 01:48</p>
    </div>
    <div className="space-y-1.5">
      {[
        ['Fajr', '05:24', false],
        ['Sunrise', '06:46', false],
        ['Dhuhr', '12:22', false],
        ['Asr', '15:39', true],
        ['Maghrib', '17:58', false],
        ['Isha', '19:20', false],
      ].map(([name, time, active]) => (
        <div
          key={String(name)}
          className={`flex items-center justify-between rounded-lg px-2.5 py-1.5 text-[11px] border ${
            active
              ? 'bg-[#F3E4BE]/45 dark:bg-[#145341] border-[#C99A3B]'
              : 'bg-white dark:bg-[#11231C] border-[#E2D8C7] dark:border-[#223A30]'
          }`}
        >
          <span className="font-medium">{name}</span>
          <span className="tabular-nums font-medium">{time}</span>
        </div>
      ))}
    </div>
    <p className="text-[9px] text-[#4A5A52] dark:text-[#B7C4BD]">
      Qaza tracker & Wudu summary included
    </p>
  </>
);

const SunnahScreenPreview: React.FC = () => (
  <>
    <div className="flex items-center justify-between">
      <p className="font-display text-xs font-semibold">Daily Sunnah Routine</p>
      <span className="text-[10px] tabular-nums text-[#8C6516] dark:text-[#C99A3B]">5/7</span>
    </div>
    <div className="space-y-2">
      {[
        { title: 'Miswak upon waking', tag: 'Emphasized Sunnah', done: true },
        { title: 'Bismillah before eating', tag: 'Sunnah Etiquette', done: true },
        { title: '2 Rak‘at Duha prayer', tag: 'Recommended / Nafl', done: false },
        { title: 'Ayat al-Kursi before sleep', tag: 'Before Sleeping', done: false },
      ].map((item) => (
        <div
          key={item.title}
          className="rounded-xl bg-white dark:bg-[#11231C] border border-[#E2D8C7] dark:border-[#223A30] p-2.5 flex items-start gap-2"
        >
          <span
            className={`mt-0.5 h-3.5 w-3.5 rounded-full border flex items-center justify-center shrink-0 ${
              item.done
                ? 'bg-[#0D3B2E] border-[#0D3B2E] text-[#C99A3B]'
                : 'border-[#C99A3B]'
            }`}
          >
            {item.done && <CheckCircle2 className="w-2.5 h-2.5" />}
          </span>
          <div>
            <p className="text-[10px] font-medium leading-tight">{item.title}</p>
            <p className="text-[9px] text-[#4A5A52] dark:text-[#B7C4BD] mt-0.5">{item.tag}</p>
          </div>
        </div>
      ))}
    </div>
  </>
);

const AzkarScreenPreview: React.FC = () => (
  <>
    <p className="font-display text-xs font-semibold">Morning Azkar · 14 Categories</p>
    <div className="rounded-xl bg-white dark:bg-[#11231C] border border-[#E2D8C7] dark:border-[#223A30] p-3 space-y-1.5">
      <p className="font-arabic text-right text-sm leading-loose" dir="rtl">
        سُبْحَانَ اللَّهِ وَبِحَمْدِهِ
      </p>
      <p className="text-[10px] text-[#4A5A52] dark:text-[#B7C4BD]">
        SubhanAllahi wa bihamdihi · Recite 100× (Sahih Muslim 2692)
      </p>
    </div>
    <div className="flex-1 flex flex-col items-center justify-center rounded-xl bg-[#0D3B2E] text-[#F5EFE4] p-3">
      <div className="h-20 w-20 rounded-full border-2 border-[#C99A3B] flex flex-col items-center justify-center">
        <span className="text-xl font-semibold tabular-nums">33</span>
        <span className="text-[9px] text-[#F3E4BE]">of 33</span>
      </div>
      <p className="mt-2 text-[10px] text-[#F3E4BE]">Tap anywhere to count</p>
    </div>
  </>
);

const HadithScreenPreview: React.FC = () => (
  <>
    <div className="flex items-center justify-between">
      <p className="font-display text-xs font-semibold">Verified Hadith</p>
      <span className="text-[9px] font-medium px-2 py-0.5 rounded bg-[#EAF2EE] dark:bg-[#152721] text-[#0D3B2E] dark:text-[#F3E4BE]">
        Sahih
      </span>
    </div>
    <div className="rounded-xl bg-white dark:bg-[#11231C] border border-[#E2D8C7] dark:border-[#223A30] p-3 space-y-2">
      <p className="text-[10px] font-medium text-[#8C6516] dark:text-[#C99A3B]">
        Sahih al-Bukhari 1
      </p>
      <p className="text-[10px] leading-relaxed">
        “The reward of deeds depends upon the intentions and every person will get the reward according to what they intended.”
      </p>
      <div className="border-t border-[#E2D8C7] dark:border-[#223A30] pt-1.5 text-[9px] text-[#4A5A52] dark:text-[#B7C4BD] space-y-0.5">
        <p>Grade: Muttafaqun Alayh (Agreed Upon)</p>
        <p>Verified by: Admin Scholar Panel</p>
      </div>
    </div>
  </>
);

const CalendarScreenPreview: React.FC = () => (
  <>
    <div className="flex items-center justify-between">
      <p className="font-display text-xs font-semibold">Jumada al-Ula 1448</p>
      <CalendarDays className="w-3.5 h-3.5 text-[#C99A3B]" />
    </div>
    <div className="rounded-xl bg-white dark:bg-[#11231C] border border-[#E2D8C7] dark:border-[#223A30] p-2.5">
      <div className="grid grid-cols-7 gap-1 text-center text-[9px] tabular-nums">
        {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
          <span key={i} className="opacity-60 font-medium">{d}</span>
        ))}
        {Array.from({ length: 21 }, (_, idx) => {
          const day = idx + 1;
          const isWhiteDay = day === 13 || day === 14 || day === 15;
          return (
            <span
              key={day}
              className={`py-1 rounded ${
                isWhiteDay
                  ? 'bg-[#C99A3B] text-[#07241C] font-semibold'
                  : 'opacity-85'
              }`}
            >
              {day}
            </span>
          );
        })}
      </div>
    </div>
    <p className="text-[9px] text-[#4A5A52] dark:text-[#B7C4BD]">
      13, 14, 15 highlighted as Ayyam al-Beed · Dates may differ ±1 day by local moon sighting.
    </p>
  </>
);

const AiScreenPreview: React.FC = () => (
  <>
    <div className="flex items-center justify-between">
      <p className="font-display text-xs font-semibold">Islamic AI Guide</p>
      <Sparkles className="w-3.5 h-3.5 text-[#C99A3B]" />
    </div>
    <div className="rounded-xl bg-[#EAF2EE] dark:bg-[#152721] p-2 text-[10px]">
      What is the Sunnah dua for forgiveness?
    </div>
    <div className="rounded-xl bg-white dark:bg-[#11231C] border border-[#E2D8C7] dark:border-[#223A30] p-2.5 space-y-1.5 text-[10px]">
      <p>
        The Prophet (ﷺ) taught Sayyid al-Istighfar as the master supplication for forgiveness.
      </p>
      <div className="rounded bg-[#FAF6EE] dark:bg-[#091511] p-1.5 text-[9px]">
        <p className="font-semibold text-[#0D3B2E] dark:text-[#C99A3B] flex items-center gap-1">
          <ShieldCheck className="w-3 h-3" /> Verified Context Used
        </p>
        <p className="opacity-80">Sahih al-Bukhari 6306 · Azkar Module</p>
      </div>
      <p className="text-[8.5px] opacity-75">
        Educational guidance only, not a formal fatwa. Consult qualified scholars.
      </p>
    </div>
  </>
);

const NightReadingPreview: React.FC = () => (
  <>
    <div className="flex items-center justify-between text-[#F3E4BE]">
      <p className="font-display text-xs font-semibold">Night Reading Mode</p>
      <Moon className="w-3.5 h-3.5 text-[#C99A3B]" />
    </div>
    <div className="flex-1 rounded-xl bg-[#091511] border border-[#223A30] p-3 flex flex-col justify-between">
      <p className="text-[9px] text-[#B7C4BD]">Low-glare Tahajjud palette (#07241C)</p>
      <p className="font-arabic text-right text-base leading-loose text-[#F5EFE4]" dir="rtl">
        تَتَجَافَىٰ جُنُوبُهُمْ عَنِ ٱلْمَضَاجِعِ يَدْعُونَ رَبَّهُمْ خَوْفًا وَطَمَعًا
      </p>
      <p className="text-[10px] text-[#B7C4BD]">
        Their sides part from [their] beds; they supplicate their Lord in fear and aspiration. [As-Sajdah 32:16]
      </p>
    </div>
  </>
);
