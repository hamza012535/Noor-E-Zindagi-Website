export type LocaleCode = 'en' | 'ur' | 'roman-urdu';

export const APP_CONFIG = {
  brandName: 'Noor-e-Zindagi',
  arabicName: 'نورِ زندگی',
  // Clearly labelled release placeholders — replace before publishing signed APK
  version: '{APP_VERSION}',
  apkSize: '{SIZE}',
  minSdk: 'Android 8.0 (Oreo, API 26)',
  ramBaseline: '< 200 MB baseline RAM',
  sha256: '14e77a3bc7e10acae8518485b0b6dee67cdea4fe540102b694252a2a85dae796',
  apkDownloadUrl:
    'https://release-assets.githubusercontent.com/github-production-release-asset/1464654543/af4c6e14-6b5f-4be7-a33b-51942af13005?sp=r&sv=2018-11-09&sr=b&spr=https&se=2026-11-20T12%3A49%3A13Z&rscd=attachment%3B+filename%3DNoor-e-Zindagi.apk&rsct=application%2Fvnd.android.package-archive&skoid=96c2d410-5711-43a1-aedd-ab1947aa7ab0&sktid=398a6654-997b-47e9-b12b-9515b896b4de&skt=2026-11-20T11%3A49%3A07Z&ske=2026-11-20T12%3A49%3A13Z&sks=b&skv=2018-11-09&sig=r%2F%2FS%2F9IyGFxzPTd3vWKKlv7tpWxJyXJYdzXHSGOK%2F7o%3D&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmVsZWFzZS1hc3NldHMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIiwia2V5Ijoia2V5MSIsImV4cCI6MTc5NTE3NzE0NywibmJmIjoxNzk1MTc1MzQ3LCJwYXRoIjoicmVsZWFzZWFzc2V0cHJvZHVjdGlvbi5ibG9iLmNvcmUud2luZG93cy5uZXQifQ.Qwq7d1aEVRl_7p2VvhNFwI8BEB21j6AH-QIsiu6_-oQ&response-content-disposition=attachment%3B%20filename%3DNoor-e-Zindagi.apk&response-content-type=application%2Fvnd.android.package-archive',
  isPlaceholderRelease: false,
  defaultCity: 'Karachi',
  analyticsProvider: 'Plausible / Umami (Cookieless)',
  confirmNoAds: '{CONFIRM_NO_ADS}',
  contactEmail: 'support@noor-e-zindagi.app',
} as const;

export const TRANSLATION_SOURCES = {
  quranArabic: 'Uthmani Script (Tanzil / King Fahd Complex standard)',
  quranEnglish: 'Sahih International (verified public attribution)',
  quranUrdu: 'Maulana Fateh Muhammad Jalandhri',
  hadithCollections: [
    'Sahih al-Bukhari',
    'Sahih Muslim',
    'Jami at-Tirmidhi',
    'Sunan Abi Dawud',
    "Sunan an-Nasa'i",
    'Sunan Ibn Majah',
    'Muwatta Malik',
  ],
} as const;

export interface ScreenshotSlot {
  id: string;
  slotKey: string;
  titleKey:
    | 'home'
    | 'quran'
    | 'prayer'
    | 'sunnah'
    | 'azkar'
    | 'hadith'
    | 'calendar'
    | 'ai'
    | 'night';
  /**
   * Replace null with a 2x WebP/AVIF path (e.g. '/screenshots/home-2x.webp')
   * once exported from the Android build. Until then, a crisp interactive/live
   * Android 9:19.5 UI preview is rendered for this slot.
   */
  imageUrl: string | null;
  alt: string;
}

export const SCREENSHOT_SLOTS: ScreenshotSlot[] = [
  {
    id: 'home',
    slotKey: '{SCREENSHOT_HOME}',
    titleKey: 'home',
    imageUrl: null,
    alt: 'Noor-e-Zindagi Android Home Dashboard showing Asr prayer countdown, daily completion ring, and Daily Ayah card',
  },
  {
    id: 'quran',
    slotKey: '{SCREENSHOT_QURAN}',
    titleKey: 'quran',
    imageUrl: null,
    alt: 'Noor-e-Zindagi Quran Reader displaying Uthmani Arabic script, Sahih International English, Urdu translation, and word meaning drawer',
  },
  {
    id: 'prayer',
    slotKey: '{SCREENSHOT_PRAYER}',
    titleKey: 'prayer',
    imageUrl: null,
    alt: 'Noor-e-Zindagi Salah and Prayer Times screen for Karachi with Fajr through Isha, Ishraq, Tahajjud, and Qaza tracker',
  },
  {
    id: 'sunnah',
    slotKey: '{SCREENSHOT_SUNNAH}',
    titleKey: 'sunnah',
    imageUrl: null,
    alt: 'Noor-e-Zindagi Daily Sunnah Routine checklist organized by time of day with Fard and Emphasized Sunnah classifications',
  },
  {
    id: 'azkar',
    slotKey: '{SCREENSHOT_AZKAR}',
    titleKey: 'azkar',
    imageUrl: null,
    alt: 'Noor-e-Zindagi Azkar, Duas and Tasbih screen with Arabic text, pronunciation guide, and built-in counter',
  },
  {
    id: 'hadith',
    slotKey: '{SCREENSHOT_HADITH}',
    titleKey: 'hadith',
    imageUrl: null,
    alt: 'Noor-e-Zindagi Verified Hadith Library displaying Sahih al-Bukhari narration with transparent grading and verification note',
  },
  {
    id: 'calendar',
    slotKey: '{SCREENSHOT_CALENDAR}',
    titleKey: 'calendar',
    imageUrl: null,
    alt: 'Noor-e-Zindagi Islamic Hijri Calendar highlighting Ayyam al-Beed white days in gold and Sunnah fasting tracker',
  },
  {
    id: 'ai',
    slotKey: '{SCREENSHOT_AI}',
    titleKey: 'ai',
    imageUrl: null,
    alt: 'Noor-e-Zindagi Islamic AI Assistant answering with Verified Context Used citations and non-fatwa disclaimer',
  },
  {
    id: 'night',
    slotKey: '{SCREENSHOT_NIGHT}',
    titleKey: 'night',
    imageUrl: null,
    alt: 'Noor-e-Zindagi Dark Reading Mode in low-glare deep forest emerald palette for night Quran reading and Tahajjud',
  },
];
