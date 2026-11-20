import { LocaleCode } from '../config/siteConfig';

export interface FeatureCopy {
  id: string;
  title: string;
  summary: string;
  details: string[];
  isTrustWorkflow?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface LocaleStrings {
  nav: {
    skipToContent: string;
    features: string;
    demo: string;
    screenshots: string;
    trust: string;
    faq: string;
    downloadApk: string;
    menuOpen: string;
    menuClose: string;
    themeToDark: string;
    themeToLight: string;
    languageLabel: string;
  };
  hero: {
    headline: string;
    subline: string;
    primaryCta: string;
    secondaryCta: string;
    trustChips: string[];
    calloutLabel: string;
    calloutSurah: string;
  };
  trustStrip: string[];
  featuresSection: {
    heading: string;
    subheading: string;
    learnMore: string;
    showLess: string;
    workflowSteps: string[];
    items: FeatureCopy[];
  };
  demoSection: {
    heading: string;
    subheading: string;
    banner: string;
    liveNotesTitle: string;
    liveNotes: string[];
    tabs: {
      quran: string;
      prayer: string;
      sunnah: string;
      tasbih: string;
    };
    quran: {
      surahTitle: string;
      fontSizeLabel: string;
      tapWordHint: string;
      selectedWordTitle: string;
      rootLabel: string;
      urduMeaningLabel: string;
      englishMeaningLabel: string;
    };
    prayer: {
      cityLabel: string;
      methodNote: string;
      nextPrayerLabel: string;
      loadingText: string;
      liveBadge: string;
      fallbackBadge: string;
      prayerNames: {
        Fajr: string;
        Sunrise: string;
        Dhuhr: string;
        Asr: string;
        Maghrib: string;
        Isha: string;
      };
    };
    sunnah: {
      sessionNote: string;
      streakLabel: string;
      completedLabel: string;
      gentleDone: string;
      gentleEncourage: string;
    };
    tasbih: {
      targetLabel: string;
      tapButton: string;
      resetButton: string;
      completedTarget: string;
    };
  };
  screenshotsSection: {
    heading: string;
    subheading: string;
    slideIndicator: string;
    previous: string;
    next: string;
    placeholderTag: string;
    captions: Record<
      'home' | 'quran' | 'prayer' | 'sunnah' | 'azkar' | 'hadith' | 'calendar' | 'ai' | 'night',
      { title: string; subtitle: string }
    >;
  };
  languagesSection: {
    heading: string;
    caption: string;
    duaTitle: string;
    englishLabel: string;
    transliterationLabel: string;
    urduLabel: string;
    romanUrduLabel: string;
  };
  privacySection: {
    heading: string;
    subheading: string;
    cards: {
      title: string;
      body: string;
    }[];
  };
  downloadSection: {
    heading: string;
    subheading: string;
    versionLabel: string;
    sizeLabel: string;
    minAndroidLabel: string;
    ramLabel: string;
    downloadButton: string;
    placeholderNotice: string;
    shaLabel: string;
    copySha: string;
    copiedSha: string;
    stepsHeading: string;
    steps: string[];
    permissionsHeading: string;
    permissions: {
      name: string;
      status: string;
      reason: string;
    }[];
    notAppHeading: string;
    notAppBody: string;
  };
  faqSection: {
    heading: string;
    subheading: string;
    items: FaqItem[];
  };
  footer: {
    tagline: string;
    disclaimer: string;
    sourcesHeading: string;
    analyticsNote: string;
    contactLabel: string;
    copyright: string;
  };
}

export const TRANSLATIONS: Record<LocaleCode, LocaleStrings> = {
  en: {
    nav: {
      skipToContent: 'Skip to main content',
      features: 'Features',
      demo: 'Demo',
      screenshots: 'Screenshots',
      trust: 'Trust & Privacy',
      faq: 'FAQ',
      downloadApk: 'Download APK',
      menuOpen: 'Open navigation menu',
      menuClose: 'Close navigation menu',
      themeToDark: 'Switch to Night Serenity dark theme',
      themeToLight: 'Switch to Warm Cream light theme',
      languageLabel: 'Language',
    },
    hero: {
      headline: 'Your daily Deen companion, in one calm app.',
      subline:
        'Quran, verified Hadith, Azkar, Salah times, Sunnah habits and an AI assistant — in English, Urdu and Roman Urdu.',
      primaryCta: 'Download APK',
      secondaryCta: 'Try the live demo',
      trustChips: ['Verified sources', 'Works offline', '3 languages', 'Free'],
      calloutLabel: 'Surah Al-Fatiha 1:1',
      calloutSurah: 'Sahih International & Fateh Muhammad Jalandhri',
    },
    trustStrip: [
      'Admin-verified content',
      'Hadith grading shown',
      'Offline Quran + audio',
      'Your data, your control',
      'Not a fatwa app — points to scholars',
    ],
    featuresSection: {
      heading: 'Built for quiet daily worship, not clutter',
      subheading:
        'Every module works offline-first and respects your focus. Expand any feature below to inspect exact capabilities and source safeguards.',
      learnMore: 'Learn more',
      showLess: 'Show less',
      workflowSteps: [
        '1. Text or OCR Submission',
        '2. Quran & Hadith Cross-Check',
        '3. Moderator / Scholar Review',
        '4. Verification Note & Publish',
      ],
      items: [
        {
          id: 'home-dashboard',
          title: 'Home Dashboard',
          summary:
            'A calm starting screen with your next prayer countdown, daily Ayah, Hadith, and gentle Sunnah progress.',
          details: [
            'Personal greeting ("Assalamu Alaikum, {name}") with today’s Hijri and Gregorian dates.',
            'Live countdown to the next Salah plus gentle completion summary without guilt-inducing counters.',
            'Daily Ayah, Daily Hadith, and Daily Dua alongside one-tap shortcuts to Quran, Azkar, and Tasbih.',
          ],
        },
        {
          id: 'quran-reader',
          title: 'Quran Reader',
          summary:
            'All 114 surahs and 6,236 ayahs in Uthmani script with tap-for-word meanings and offline audio packs.',
          details: [
            'Word-by-word Arabic breakdown: tap any word to inspect its meaning, root letters, and grammar.',
            'Independent Arabic and translation font-size sliders, Surah/Ayah search, and resume last-read position.',
            'Multiple reciters (Mishary Alafasy, Abdul Basit, Sudais — subject to audio availability) with Arabic-only or Arabic-then-Urdu playback and optional ambient sounds (birds, rain, air).',
            'Downloadable offline packs: all 114 surahs as lightweight text or full text + MP3 audio.',
          ],
        },
        {
          id: 'salah-times',
          title: 'Salah & Prayer Times',
          summary:
            'Accurate daily prayer timings with 7 calculation methods, Karachi default, Qaza tracking, and Wudu guidance.',
          details: [
            'Five daily prayers plus Sunrise, Ishraq/Duha, Tahajjud (last third of night), and Witr guidance.',
            'Seven methods: Karachi, ISNA, MWL, Umm Al-Qura, Egyptian, Dubai/Gulf, and Singapore.',
            'Manual ±30 minute adjustment per prayer, city preset or coarse GPS override, Qaza log, and post-prayer Azkar link.',
          ],
        },
        {
          id: 'sunnah-routine',
          title: 'Daily Sunnah Routine',
          summary:
            'A time-of-day Sunnah checklist from waking up to sleep, classified clearly with authentic references.',
          details: [
            'Organized into 7 calm windows: Waking Up, Morning, Leaving/Entering Home, Daily Etiquette & Work, Salah & Purification, Evening, and Before Sleeping.',
            'Every item shows Arabic text, Roman Urdu, Urdu and English translations, authentic reference, "how to perform", and word-by-word meanings.',
            'Clearly tagged as Fard, Emphasized Sunnah, Recommended/Nafl, or Sunnah Etiquette — plus custom habits and gentle streaks.',
          ],
        },
        {
          id: 'azkar-duas',
          title: 'Azkar, Duas & Tasbih',
          summary:
            '14 categorized supplication collections with pronunciation guides, counts, and a tactile Tasbih counter.',
          details: [
            'Covers Morning, Evening, After Salah, Sleeping, Waking, Food, Travel, Protection, Forgiveness, Anxiety & Difficulty, Rain, Mosque, Parents & Family, and Knowledge.',
            'Each dua provides Arabic, Roman Urdu, English and Urdu translations, recommended count, "when to read", and source reference.',
            'Includes instant search and a built-in Tasbih counter.',
          ],
        },
        {
          id: 'hadith-library',
          title: 'Verified Hadith Library',
          summary:
            'Seven classical collections with transparent grading badges, verification notes, and practical lessons.',
          details: [
            'Includes Bukhari, Muslim, Tirmidhi, Abu Dawud, Nasa’i, Ibn Majah, and Muwatta Malik.',
            'Grading badges shown openly: Sahih, Muttafaqun Alayh, Hasan, Da’if, and Disputed — with grading source and date verified.',
            'Weak (Da’if) narrations are explicitly labelled "for scholarly awareness only" alongside explanations and related Sunnah links.',
          ],
        },
        {
          id: 'hijri-calendar',
          title: 'Islamic Hijri Calendar',
          summary:
            'Hijri-Gregorian mapping with Ayyam al-Beed highlighted in gold and a Sunnah fasting tracker.',
          details: [
            'Marks key Islamic occasions and highlights the White Days (13th, 14th, and 15th) in burnished gold.',
            'Track Monday/Thursday, White Days, and Ramadan fasts at your own pace.',
            'Includes an honest reminder that Hijri dates may vary ±1 day depending on local moon sighting.',
          ],
        },
        {
          id: 'ai-assistant',
          title: 'Islamic AI Assistant',
          summary:
            'Source-grounded Q&A that retrieves strictly from the app’s verified Quran, Sunnah, and Hadith library.',
          details: [
            'Uses retrieval-augmented generation (RAG) over verified in-app texts rather than open-ended speculation.',
            'Always displays a "Verified Context Used" panel listing every citation that informed the answer.',
            'Carries a clear notice: "Educational guidance only, not a formal fatwa. Consult qualified scholars."',
          ],
        },
        {
          id: 'ocr-scanner',
          title: 'Visual Library & OCR Scanner',
          summary:
            'Extract Arabic or Urdu text from posters and book pages and cross-check it against verified references.',
          details: [
            'Helps check forwarded images or printed duas against authentic Hadith and Quran citations.',
            'Camera permission is requested only when you actively launch the OCR scanner.',
            'All community submissions require human admin review and approval before entering the shared visual library.',
          ],
        },
        {
          id: 'worship-reminders',
          title: 'Worship Reminders & Adhan',
          summary:
            'Reliable local reminders for daily prayers, weekdays, or Fridays that survive device reboots.',
          details: [
            'Choose Adhan recitation, a gentle chime, or silent notification per prayer or reminder.',
            'Supports daily, weekday, and Jumu’ah (Friday) schedules.',
            'Automatically restored after device restart using Android boot-completed scheduling.',
          ],
        },
        {
          id: 'profile-reports',
          title: 'Profile, Bookmarks & Reports',
          summary:
            'Bookmarks, calm weekly and monthly reflections, guest mode, and full JSON export or deletion.',
          details: [
            'Bookmark Quran ayahs, Hadith narrations, Sunnah actions, and Duas in one place.',
            'Use guest mode offline or sign in with Google to sync via Firebase under per-user security rules.',
            'Export all your data as portable JSON or delete your account and cloud records anytime inside the app.',
          ],
        },
        {
          id: 'dark-reading-mode',
          title: 'Dark Reading Mode',
          summary:
            'A deeper, warmer low-glare forest palette crafted specifically for Quran reading and Tahajjud.',
          details: [
            'Distinct from general dark mode — tuned around deep #07241C forest tones and warm cream ink.',
            'Reduces screen glare during Fajr and late-night Tahajjud recitation.',
            'Adjustable contrast and font sizing preserve long-form Arabic legibility.',
          ],
        },
        {
          id: 'admin-verification',
          title: 'Admin Verification Console (Trust & Governance)',
          summary:
            'Internal review workflow used by scholars and moderators only — every published item carries a verification note.',
          isTrustWorkflow: true,
          details: [
            'Not an end-user tool: shown here to explain how content enters Noor-e-Zindagi.',
            'Every OCR submission, Hadith grading entry, or translation update passes through reference cross-checking and moderator approval.',
            'Published records store who verified them, the grading source, and the verification date.',
          ],
        },
      ],
    },
    demoSection: {
      heading: 'Try core features right in your browser',
      subheading:
        'Explore the Quran word-by-word reader, live Karachi-method prayer times, Sunnah checklist, and Tasbih counter inside an Android frame.',
      banner: 'Demo with sample content — Prayer times fetch live from AlAdhan API (Method 1: Karachi)',
      liveNotesTitle: 'What runs live in this preview',
      liveNotes: [
        'Quran tab: All 7 ayahs of Surah Al-Fatiha with Sahih International & Fateh Muhammad Jalandhri translations and interactive word meanings.',
        'Salah tab: Live AlAdhan API lookup (Method 1: Karachi) cached 24h in sessionStorage with offline sample fallback.',
        'Sunnah & Tasbih tabs: Session-scoped checklist progress ring and tactile vibration-ready counter.',
      ],
      tabs: {
        quran: 'Quran',
        prayer: 'Salah',
        sunnah: 'Sunnah',
        tasbih: 'Tasbih',
      },
      quran: {
        surahTitle: 'Surah Al-Fatiha (The Opening)',
        fontSizeLabel: 'Arabic text size',
        tapWordHint: 'Tap any Arabic word below to inspect its root and meaning.',
        selectedWordTitle: 'Selected word analysis',
        rootLabel: 'Root',
        urduMeaningLabel: 'Urdu',
        englishMeaningLabel: 'English',
      },
      prayer: {
        cityLabel: 'City',
        methodNote: 'University of Islamic Sciences, Karachi (Method 1)',
        nextPrayerLabel: 'Next prayer',
        loadingText: 'Fetching today’s timings…',
        liveBadge: 'Live AlAdhan API (cached 24h)',
        fallbackBadge: 'Sample times shown (offline fallback)',
        prayerNames: {
          Fajr: 'Fajr',
          Sunrise: 'Sunrise',
          Dhuhr: 'Dhuhr',
          Asr: 'Asr',
          Maghrib: 'Maghrib',
          Isha: 'Isha',
        },
      },
      sunnah: {
        sessionNote: 'Demo state — stored in sessionStorage and resets when this browser session closes.',
        streakLabel: 'Demo gentle streak',
        completedLabel: 'Completed today',
        gentleDone: 'Alhamdulillah — steady progress today.',
        gentleEncourage: 'Keep going at a calm pace, or try again tomorrow.',
      },
      tasbih: {
        targetLabel: 'Target count',
        tapButton: 'Tap to count',
        resetButton: 'Reset',
        completedTarget: 'Target reached — Alhamdulillah',
      },
    },
    screenshotsSection: {
      heading: 'Inside Noor-e-Zindagi',
      subheading:
        'Preview all nine Android screens rendered in a 9:19.5 frame. Replaceable screenshot slots are centrally mapped in configuration for release builds.',
      slideIndicator: 'Slide {current} of {total}',
      previous: 'Previous screen',
      next: 'Next screen',
      placeholderTag: 'Config slot',
      captions: {
        home: { title: 'Home Dashboard', subtitle: 'Next Salah countdown, Daily Ayah, and calm shortcuts' },
        quran: { title: 'Quran Reader', subtitle: 'Uthmani script, word-by-word meanings, and offline audio' },
        prayer: { title: 'Prayer Times', subtitle: '7 calculation methods, Ishraq, Tahajjud & Qaza log' },
        sunnah: { title: 'Daily Sunnah', subtitle: 'Time-of-day checklist with Fard & Sunnah tags' },
        azkar: { title: 'Azkar & Tasbih', subtitle: '14 dua categories with pronunciation & counter' },
        hadith: { title: 'Hadith Library', subtitle: '7 collections with transparent grading & lessons' },
        calendar: { title: 'Hijri Calendar', subtitle: 'Ayyam al-Beed in gold & Sunnah fasting tracker' },
        ai: { title: 'AI Assistant', subtitle: 'Source-cited answers with non-fatwa disclaimer' },
        night: { title: 'Night Reading Mode', subtitle: 'Low-glare forest palette for Tahajjud & Quran' },
      },
    },
    languagesSection: {
      heading: 'Read and reflect in the language closest to your heart',
      caption: 'One dua. Three ways to read it. One heart.',
      duaTitle: 'Sayyid al-Istighfar — Master Supplication for Forgiveness',
      englishLabel: 'English (Translation & Transliteration)',
      transliterationLabel: 'Transliteration',
      urduLabel: 'اردو (Urdu — RTL)',
      romanUrduLabel: 'Roman Urdu',
    },
    privacySection: {
      heading: 'Transparent privacy & scholarly accountability',
      subheading:
        'No dark patterns, no hidden telemetry, and clear boundaries between educational guidance and formal scholarship.',
      cards: [
        {
          title: 'What is stored',
          body: 'Only your optional profile (name, Google sign-in), checklists, bookmarks, and reminder settings. Synced via Firebase and protected by per-user Firestore security rules.',
        },
        {
          title: 'What is never collected',
          body: 'No advertising ID, no cross-app browsing behavior, no contacts list, and no continuous background GPS tracking.',
        },
        {
          title: 'Coarse location only',
          body: 'Used exclusively to calculate local prayer timings. You can skip GPS altogether and select your city preset manually.',
        },
        {
          title: 'Export & delete anytime',
          body: 'Self-service JSON export of all your bookmarks and logs, plus instant self-service account and cloud data deletion.',
        },
        {
          title: 'No ads, no data sales',
          body: 'Built without ad networks or data brokers. Website analytics are strictly cookieless; only localStorage is used for theme and language.',
        },
        {
          title: 'Verification & non-fatwa boundary',
          body: 'Every Hadith lists its collection, number, and grading source; Da’if narrations are marked "for scholarly awareness only." Not a fatwa service — always consult qualified scholars.',
        },
      ],
    },
    downloadSection: {
      heading: 'Download Noor-e-Zindagi for Android',
      subheading:
        'Direct signed APK package for Android 8.0 and above. Lightweight under 200 MB RAM baseline and designed to run smoothly offline.',
      versionLabel: 'Version',
      sizeLabel: 'Estimated size',
      minAndroidLabel: 'Minimum Android',
      ramLabel: 'Memory baseline',
      downloadButton: 'Download Android APK',
      placeholderNotice:
        'Pre-release launch configuration: replace {APP_VERSION}, {SIZE}, {APK_SHA256}, and {APK_DOWNLOAD_URL} in siteConfig.ts with the signed release build before publishing.',
      shaLabel: 'SHA-256 checksum',
      copySha: 'Copy checksum',
      copiedSha: 'Copied',
      stepsHeading: 'How to install the APK safely',
      steps: [
        'Download the APK file and verify its SHA-256 checksum matches the hash published on this page.',
        'Open the downloaded file on your Android device and allow "Install unknown apps" for your browser or file manager if prompted.',
        'Launch Noor-e-Zindagi, choose English, اردو, or Roman Urdu, and optionally download offline Quran packs.',
      ],
      permissionsHeading: 'App permissions requested',
      permissions: [
        {
          name: 'Location (Coarse)',
          status: 'Optional',
          reason: 'City-level prayer times only. Manual city selection works without granting location.',
        },
        {
          name: 'Notifications',
          status: 'Optional',
          reason: 'Used for Adhan alerts and worship reminders you configure.',
        },
        {
          name: 'Storage',
          status: 'Optional',
          reason: 'Saves offline Quran text, MP3 audio packs, and your JSON data exports.',
        },
        {
          name: 'Camera',
          status: 'On demand only',
          reason: 'Requested only when you open the OCR poster/book scanner.',
        },
        {
          name: 'Microphone & Contacts',
          status: 'Never requested',
          reason: 'Noor-e-Zindagi does not ask for microphone or contacts access.',
        },
      ],
      notAppHeading: 'What this app is not',
      notAppBody:
        'Noor-e-Zindagi is not a fatwa service, is not affiliated with any religious authority, and is not a substitute for qualified Islamic scholars.',
    },
    faqSection: {
      heading: 'Frequently asked questions',
      subheading: 'Straightforward answers about offline access, verification, privacy, and Android support.',
      items: [
        {
          question: 'Is Noor-e-Zindagi free and free of ads?',
          answer:
            'Yes. Noor-e-Zindagi is free to download and use, with zero advertising SDKs, no ad ID collection, and no data sales.',
        },
        {
          question: 'Does it work without an internet connection?',
          answer:
            'Yes. Quran text (all 114 surahs), downloadable audio packs, Azkar, Sunnah checklists, Hadith library, and local prayer calculations work offline. Internet is only needed for optional cloud sync, downloading audio packs, or asking the AI assistant.',
        },
        {
          question: 'How are Hadith and Quran translations verified?',
          answer:
            'Quran translations credit their translators explicitly (Sahih International for English and Maulana Fateh Muhammad Jalandhri for Urdu). Hadith entries display collection, number, grading (Sahih, Hasan, Da’if, Disputed), grading source, and verification date. Weak (Da’if) narrations are labelled "for scholarly awareness only."',
        },
        {
          question: 'Can the Islamic AI assistant issue a fatwa?',
          answer:
            'No. The AI assistant retrieves answers strictly from the app’s verified Quran, Sunnah, and Hadith corpus, lists the exact sources used, and always reminds users to consult qualified scholars for formal religious rulings.',
        },
        {
          question: 'Why is it distributed as an Android APK?',
          answer:
            'Noor-e-Zindagi is launching first for Android 8.0+ devices with a direct signed APK and transparent SHA-256 verification so communities in Pakistan and worldwide can install and audit releases directly.',
        },
        {
          question: 'Can I export or delete my personal data?',
          answer:
            'Yes. You can use the app in guest mode without signing in, or sign in with Google and export all your logs as JSON or delete your account and Firestore records at any time.',
        },
      ],
    },
    footer: {
      tagline: 'A calm, source-verified daily Deen companion for Android.',
      disclaimer:
        'Not a fatwa service · Not affiliated with any religious authority · Consult qualified scholars for formal rulings.',
      sourcesHeading: 'Text & Hadith attributions',
      analyticsNote:
        'This website uses cookieless analytics and stores only your theme and language choice in localStorage — no tracking cookies.',
      contactLabel: 'Contact',
      copyright: '© 2026 Noor-e-Zindagi. All rights reserved.',
    },
  },
  ur: {
    nav: {
      skipToContent: 'اصل مواد پر جائیں',
      features: 'خصوصیات',
      demo: 'لائیو ڈیمو',
      screenshots: 'اسکرین شاٹس',
      trust: 'اعتماد اور رازداری',
      faq: 'سوالات',
      downloadApk: 'APK ڈاؤن لوڈ',
      menuOpen: 'مینو کھولیں',
      menuClose: 'مینو بند کریں',
      themeToDark: 'نائٹ سیرینٹی ڈارک تھیم لگائیں',
      themeToLight: 'وارم کریم لائٹ تھیم لگائیں',
      languageLabel: 'زبان',
    },
    hero: {
      headline: 'آپ کے روزمرہ دین کا پُرسکون ساتھی، ایک ہی ایپ میں۔',
      subline:
        'قرآن، مستند احادیث، اذکار، اوقاتِ نماز، سنتِ نبوی کی عادات اور مستند ذرائع پر مبنی اے آئی معاون — انگریزی، اردو اور رومن اردو میں۔',
      primaryCta: 'APK ڈاؤن لوڈ کریں',
      secondaryCta: 'لائیو ڈیمو آزمائیں',
      trustChips: ['مستند ذرائع', 'آف لائن دستیاب', '3 زبانیں', 'مفت'],
      calloutLabel: 'سورۃ الفاتحہ 1:1',
      calloutSurah: 'صحیح انٹرنیشنل اور فتح محمد جالندھری',
    },
    trustStrip: [
      'منتظمین کا تصدیق شدہ مواد',
      'حدیث کی سند اور درجہ بندی واضح',
      'آف لائن قرآن اور تلاوت',
      'آپ کا ڈیٹا، آپ کا اختیار',
      'فتویٰ ایپ نہیں — علماء سے رجوع کی رہنمائی',
    ],
    featuresSection: {
      heading: 'پُرسکون عبادت کے لیے، بغیر کسی شور شرابے کے',
      subheading:
        'ہر فیچر آف لائن کام کرنے کی صلاحیت رکھتا ہے اور آپ کی توجہ کا احترام کرتا ہے۔ تفصیلات دیکھنے کے لیے کسی بھی کارڈ کو کھولیں۔',
      learnMore: 'مزید جانیں',
      showLess: 'کم دکھائیں',
      workflowSteps: [
        '1. متن یا OCR کے ذریعے اندراج',
        '2. قرآن و حدیث سے تصدیق',
        '3. محقق و ماڈریٹر کا جائزہ',
        '4. تصدیقی نوٹ کے ساتھ اشاعت',
      ],
      items: [
        {
          id: 'home-dashboard',
          title: 'ہوم ڈیش بورڈ',
          summary: 'اگلی نماز کا کاؤنٹ ڈاؤن، روزانہ کی آیت، حدیث، دعا اور آسان شارٹ کٹس کے ساتھ پُرسکون آغاز۔',
          details: [
            'ذاتی سلام ("السلام علیکم") کے ساتھ آج کی ہجری اور عیسوی تاریخ۔',
            'اگلی نماز کا لائیو وقت اور بغیر کسی دباؤ کے روزمرہ تکمیل کا خلاصہ۔',
            'روزانہ کی آیت، حدیث اور دعا کے ساتھ قرآن، اذکار اور تسبیح تک فوری رسائی۔',
          ],
        },
        {
          id: 'quran-reader',
          title: 'قرآن ریڈر',
          summary: 'تمام 114 سورتیں اور 6,236 آیات عثمانی رسم الخط میں، لفظ بہ لفظ معنی اور آف لائن آڈیو پیک کے ساتھ۔',
          details: [
            'کسی بھی عربی لفظ پر ٹیپ کر کے اس کا معنی، مادہ اور قواعد دیکھیں۔',
            'عربی اور ترجمے کا فونٹ سائز الگ الگ تبدیل کریں، آخری پڑھی گئی آیت سے دوبارہ شروع کریں۔',
            'مختلف قراء (مشاري العفاسی، عبدالباسط، السدیس) کی تلاوت، عربی یا عربی کے بعد اردو آڈیو اور پُرسکون ماحولیاتی آوازیں۔',
            'مکمل 114 سورتیں صرف متن یا متن + MP3 آڈیو پیک کی صورت میں آف لائن محفوظ کریں۔',
          ],
        },
        {
          id: 'salah-times',
          title: 'نماز اور اوقاتِ صلوٰۃ',
          summary: '7 حسابی طریقوں، کراچی ڈیفالٹ، قضا نماز ٹریکر اور وضو و نماز کے طریقہ کار کے ساتھ درست اوقات۔',
          details: [
            'پانچوں نمازوں کے علاوہ طلوعِ آفتاب، اشراق/چاشت، تہجد (رات کا آخری تہائی حصہ) اور وتر کی رہنمائی۔',
            'سات مستند طریقے: کراچی، ISNA، MWL، ام القریٰ، مصری، دبئی/خلیج اور سنگاپور۔',
            'ہر نماز کے لیے ±30 منٹ کی دستی ترمیم، GPS یا شہر کا انتخاب، قضا ریکارڈ اور نماز کے بعد کے اذکار۔',
          ],
        },
        {
          id: 'sunnah-routine',
          title: 'روزانہ کی مسنون عادات',
          summary: 'بیدار ہونے سے لے کر سونے تک اوقات کے لحاظ سے سنتوں کی فہرست، مستند حوالوں کے ساتھ۔',
          details: [
            '7 اوقات میں تقسیم: بیداری، صبح، گھر سے نکلنا/داخل ہونا، روزمرہ آداب و کام، نماز و طہارت، شام اور سونے سے پہلے۔',
            'ہر عمل کے ساتھ عربی، رومن اردو، اردو اور انگریزی ترجمہ، حوالہ، طریقہ کار اور لفظ بہ لفظ معنی شامل ہیں۔',
            'فرض، سنتِ مؤکدہ، مستحب/نفل اور سنتِ آداب کی واضح درجہ بندی، اور اپنی عادات شامل کرنے کی سہولت۔',
          ],
        },
        {
          id: 'azkar-duas',
          title: 'اذکار، دعائیں اور تسبیح',
          summary: '14 موضوعات پر مشتمل دعاؤں کا مجموعہ، تلفظ، تعداد اور بلٹ ان تسبیح کاؤنٹر کے ساتھ۔',
          details: [
            'صبح و شام، بعد از نماز، سونا، جاگنا، کھانا، سفر، حفاظت، استغفار، پریشانی، بارش، مسجد، والدین اور علم کی دعائیں۔',
            'ہر دعا کے ساتھ عربی، رومن اردو، اردو اور انگریزی ترجمہ، مسنون تعداد، پڑھنے کا وقت اور حوالہ۔',
            'فوری تلاش اور آسان تسبیح کاؤنٹر۔',
          ],
        },
        {
          id: 'hadith-library',
          title: 'مستند حدیث لائبریری',
          summary: 'سات معتبر کتبِ احادیث شفاف درجہ بندی، تصدیقی نوٹ اور عملی سبق کے ساتھ۔',
          details: [
            'صحیح بخاری، صحیح مسلم، جامع ترمذی، سنن ابو داؤد، سنن نسائی، سنن ابن ماجہ اور مؤطا امام مالک۔',
            'واضح درجات: صحیح، متفق علیہ، حسن، ضعیف اور مختلف فیہ — مع محقق حوالہ اور تاریخِ تصدیق۔',
            'ضعیف روایات پر واضح طور پر "صرف علمی آگاہی کے لیے" تحریر ہوتا ہے۔',
          ],
        },
        {
          id: 'hijri-calendar',
          title: 'اسلامی ہجری کیلنڈر',
          summary: 'ہجری و عیسوی تاریخوں کا ربط، سنہری رنگ میں ایامِ بیض اور نفلی روزوں کا ٹریکر۔',
          details: [
            'اہم اسلامی مواقع اور ایامِ بیض (13، 14 اور 15 تاریخ) کی سنہری نشان دہی۔',
            'پیر/جمعرات، ایامِ بیض اور رمضان کے روزوں کا ریکارڈ رکھیں۔',
            'دیانت دارانہ نوٹ: مقامی رویتِ ہلال کے مطابق تاریخ میں ±1 دن کا فرق ممکن ہے۔',
          ],
        },
        {
          id: 'ai-assistant',
          title: 'اسلامی اے آئی معاون',
          summary: 'سوالات کے جوابات صرف ایپ کے تصدیق شدہ قرآن، سنت اور حدیث کے ذخیرے سے اخذ کرتا ہے۔',
          details: [
            'بے بنیاد قیاس آرائی کے بجائے تصدیق شدہ مواد (RAG) سے جواب فراہم کرتا ہے۔',
            'ہمیشہ "استعمال شدہ مستند حوالہ جات" دکھاتا ہے جن سے جواب تیار کیا گیا۔',
            'واضح تنبیہ: "صرف تعلیمی رہنمائی کے لیے، باقاعدہ فتویٰ نہیں۔ مستند علماء سے رجوع کریں۔"',
          ],
        },
        {
          id: 'ocr-scanner',
          title: 'بصری لائبریری اور OCR اسکینر',
          summary: 'پوسٹرز اور کتابوں کے صفحات سے عربی یا اردو متن اسکین کر کے مستند حوالوں سے جانچیں۔',
          details: [
            'پوسٹرز یا کتابی صفحات پر موجود دعاؤں اور احادیث کی صحت جانچنے میں مددگار۔',
            'کیمرہ کی اجازت صرف اسی وقت طلب کی جاتی ہے جب آپ خود OCR اسکینر کھولیں۔',
            'عوامی لائبریری میں شامل ہونے سے پہلے ہر اندراج انسانی ماڈریٹر کی منظوری کا پابند ہے۔',
          ],
        },
        {
          id: 'worship-reminders',
          title: 'عبادات کی یاد دہانی اور اذان',
          summary: 'روزانہ، ہفتہ وار یا جمعہ کے لیے پائیدار یاد دہانیاں جو فون ری اسٹارٹ ہونے کے بعد بھی برقرار رہتی ہیں۔',
          details: [
            'اذان، ہلکی گھنٹی یا خاموش نوٹیفکیشن میں سے انتخاب کریں۔',
            'روزانہ، ورکنگ ڈیز اور جمعہ کے لیے الگ شیڈول بنائیں۔',
            'فون بند ہو کر دوبارہ آن ہونے پر یاد دہانیاں خودکار بحال ہو جاتی ہیں۔',
          ],
        },
        {
          id: 'profile-reports',
          title: 'پروفائل، بُک مارکس اور رپورٹس',
          summary: 'آیات، احادیث اور دعاؤں کے بُک مارکس، ہفتہ وار و ماہانہ رپورٹس، اور مکمل JSON ایکسپورٹ یا حذف کرنے کا اختیار۔',
          details: [
            'قرآن، حدیث، سنت اور دعاؤں کو بُک مارک کریں۔',
            'مہمان موڈ میں آف لائن استعمال کریں یا گوگل لاگ ان کے ذریعے فائربیس پر محفوظ سنک کریں۔',
            'اپنا تمام ڈیٹا JSON فارمیٹ میں ڈاؤن لوڈ کریں یا جب چاہیں اکاؤنٹ اور ڈیٹا مکمل حذف کریں۔',
          ],
        },
        {
          id: 'dark-reading-mode',
          title: 'نائٹ ریڈنگ موڈ',
          summary: 'تہجد اور رات کی تلاوت کے لیے آنکھوں کو سکون دینے والا گہرا سبز رنگوں کا خاص موڈ۔',
          details: [
            'عام ڈارک موڈ سے الگ — خاص طور پر کم چمک والے #07241C رنگوں میں تیار کردہ۔',
            'فجر اور تہجد کے وقت اسکرین کی تیز روشنی سے آنکھوں کو محفوظ رکھتا ہے۔',
            'طویل عربی تلاوت کے لیے واضح کنٹراسٹ اور فونٹ کنٹرول۔',
          ],
        },
        {
          id: 'admin-verification',
          title: 'ایڈمن تصدیقی نظام (اعتماد اور نگرانی)',
          summary: 'صرف علماء اور ماڈریٹرز کے لیے اندرونی جانچ کا نظام — ہر شائع شدہ مواد کے ساتھ تصدیقی نوٹ شامل ہوتا ہے۔',
          isTrustWorkflow: true,
          details: [
            'یہ صارف کا فیچر نہیں بلکہ آپ کے اعتماد کے لیے شفاف وضاحت ہے۔',
            'ہر OCR اندراج، حدیث کی سند اور ترجمے کی اپ ڈیٹ ماڈریٹر کی تصدیق سے گزرتی ہے۔',
            'شائع ہونے والے ہر مواد پر تصدیق کنندہ کا حوالہ اور تاریخ درج ہوتی ہے۔',
          ],
        },
      ],
    },
    demoSection: {
      heading: 'ایپ کی بنیادی خصوصیات براہِ راست آزمائیں',
      subheading:
        'اینڈرائیڈ فریم کے اندر لفظ بہ لفظ قرآن، کراچی طریقہ کے مطابق نماز کے اوقات، سنت چیک لسٹ اور تسبیح کاؤنٹر کا تجربہ کریں۔',
      banner: 'نمونہ مواد کے ساتھ ڈیمو — نماز کے اوقات AlAdhan API (طریقہ 1: کراچی) سے براہِ راست حاصل کیے جاتے ہیں',
      liveNotesTitle: 'اس پیش نظارہ میں کیا براہِ راست چلتا ہے',
      liveNotes: [
        'قرآن ٹیب: سورۃ الفاتحہ کی تمام 7 آیات، صحیح انٹرنیشنل و فتح محمد جالندھری کے تراجم اور لفظ بہ لفظ معنی کے ساتھ۔',
        'نماز ٹیب: AlAdhan API (طریقہ 1: کراچی) سے براہِ راست اوقات، 24 گھنٹے کیش اور آف لائن بیک اپ کے ساتھ۔',
        'سنت اور تسبیح ٹیب: سیشن تک محدود چیک لسٹ پروگریس رِنگ اور وائبریشن سپورٹ والا تسبیح کاؤنٹر۔',
      ],
      tabs: {
        quran: 'قرآن',
        prayer: 'نماز',
        sunnah: 'سنت',
        tasbih: 'تسبیح',
      },
      quran: {
        surahTitle: 'سورۃ الفاتحہ',
        fontSizeLabel: 'عربی متن کا سائز',
        tapWordHint: 'اس کا مادہ اور معنی دیکھنے کے لیے کسی بھی عربی لفظ پر ٹیپ کریں۔',
        selectedWordTitle: 'منتخب لفظ کی تفصیل',
        rootLabel: 'مادہ',
        urduMeaningLabel: 'اردو معنی',
        englishMeaningLabel: 'انگریزی معنی',
      },
      prayer: {
        cityLabel: 'شہر',
        methodNote: 'جامعۃ العلوم الاسلامیہ، کراچی (طریقہ 1)',
        nextPrayerLabel: 'اگلی نماز',
        loadingText: 'آج کے اوقات لوڈ ہو رہے ہیں…',
        liveBadge: 'لائیو AlAdhan API (24 گھنٹے کیش)',
        fallbackBadge: 'نمونہ اوقات دکھائے جا رہے ہیں (آف لائن بیک اپ)',
        prayerNames: {
          Fajr: 'فجر',
          Sunrise: 'طلوعِ آفتاب',
          Dhuhr: 'ظہر',
          Asr: 'عصر',
          Maghrib: 'مغرب',
          Isha: 'عشاء',
        },
      },
      sunnah: {
        sessionNote: 'ڈیمو حالت — sessionStorage میں محفوظ ہے اور سیشن بند ہونے پر ری سیٹ ہو جاتی ہے۔',
        streakLabel: 'ڈیمو تسلسل',
        completedLabel: 'آج کی تکمیل',
        gentleDone: 'الحمدللہ — آج کی اچھی پیش رفت۔',
        gentleEncourage: 'اطمینان سے جاری رکھیں، یا کل دوبارہ کوشش کریں۔',
      },
      tasbih: {
        targetLabel: 'مطلوبہ تعداد',
        tapButton: 'شمار کے لیے دبائیں',
        resetButton: 'دوبارہ شروع',
        completedTarget: 'تعداد مکمل ہو گئی — الحمدللہ',
      },
    },
    screenshotsSection: {
      heading: 'ایپ کی جھلکیاں',
      subheading:
        'اینڈرائیڈ 9:19.5 فریم میں تمام نو اسکرینوں کا جائزہ لیں۔ ریلیز بلڈ کے لیے تمام اسکرین شاٹ سلاٹس config میں واضح طور پر درج ہیں۔',
      slideIndicator: 'اسکرین {current} از {total}',
      previous: 'پچھلی اسکرین',
      next: 'اگلی اسکرین',
      placeholderTag: 'Config سلاٹ',
      captions: {
        home: { title: 'ہوم ڈیش بورڈ', subtitle: 'اگلی نماز کا وقت، روزانہ کی آیت اور آسان شارٹ کٹس' },
        quran: { title: 'قرآن ریڈر', subtitle: 'عثمانی رسم الخط، لفظ بہ لفظ معنی اور آف لائن آڈیو' },
        prayer: { title: 'اوقاتِ نماز', subtitle: '7 حسابی طریقے، اشراق، تہجد اور قضا ریکارڈ' },
        sunnah: { title: 'روزانہ کی سنتیں', subtitle: 'اوقات کے مطابق چیک لسٹ اور واضح درجہ بندی' },
        azkar: { title: 'اذکار و تسبیح', subtitle: '14 موضوعات کی دعائیں اور بلٹ ان کاؤنٹر' },
        hadith: { title: 'حدیث لائبریری', subtitle: '7 مستند کتب، سند کا درجہ اور عملی سبق' },
        calendar: { title: 'ہجری کیلنڈر', subtitle: 'سنہری رنگ میں ایامِ بیض اور نفلی روزوں کا ٹریکر' },
        ai: { title: 'اے آئی معاون', subtitle: 'حوالہ جات اور غیر فتویٰ تنبیہ کے ساتھ جوابات' },
        night: { title: 'نائٹ ریڈنگ موڈ', subtitle: 'تہجد اور رات کی تلاوت کے لیے کم چمک والا سبز موڈ' },
      },
    },
    languagesSection: {
      heading: 'اس زبان میں پڑھیں جو آپ کے دل کے قریب ہے',
      caption: 'ایک دعا۔ پڑھنے کے تین انداز۔ ایک دل۔',
      duaTitle: 'سید الاستغفار — مغفرت کی سب سے افضل دعا',
      englishLabel: 'انگریزی (ترجمہ اور تلفظ)',
      transliterationLabel: 'تلفظ (Transliteration)',
      urduLabel: 'اردو',
      romanUrduLabel: 'رومن اردو',
    },
    privacySection: {
      heading: 'شفاف رازداری اور علمی ذمہ داری',
      subheading:
        'کوئی پوشیدہ ٹریکنگ نہیں، کوئی اشتہار نہیں، اور تعلیمی رہنمائی و شرعی فتویٰ کے درمیان واضح حد بندی۔',
      cards: [
        {
          title: 'کیا محفوظ کیا جاتا ہے',
          body: 'صرف آپ کا اختیاری پروفائل، چیک لسٹ، بُک مارکس اور یاد دہانیاں۔ فائربیس پر فی صارف سیکیورٹی رولز کے تحت محفوظ۔',
        },
        {
          title: 'کیا کبھی جمع نہیں کیا جاتا',
          body: 'کوئی ایڈ آئی ڈی، کوئی براؤزنگ سرگرمی، کوئی کانٹیکٹس فہرست اور نہ ہی پس منظر میں مستقل GPS لوکیشن۔',
        },
        {
          title: 'صرف شہر کی سطح کا مقام',
          body: 'صرف نماز کے اوقات معلوم کرنے کے لیے۔ آپ GPS کے بغیر دستی طور پر اپنا شہر منتخب کر سکتے ہیں۔',
        },
        {
          title: 'ڈیٹا برآمد یا حذف کریں',
          body: 'آپ خود اپنا تمام ڈیٹا JSON کی صورت میں برآمد کر سکتے ہیں اور جب چاہیں اکاؤنٹ اور کلاؤڈ ڈیٹا حذف کر سکتے ہیں۔',
        },
        {
          title: 'کوئی اشتہار یا ڈیٹا فروخت نہیں',
          body: 'ایپ اشتہاری نیٹ ورکس سے پاک ہے۔ ویب سائٹ کوکی لیس تجزیات استعمال کرتی ہے اور صرف تھیم و زبان localStorage میں محفوظ کرتی ہے۔',
        },
        {
          title: 'تصدیقی پالیسی اور غیر فتویٰ حد',
          body: 'ہر حدیث کے ساتھ کتاب، نمبر اور سند کا درجہ درج ہے؛ ضعیف روایات پر واضح انتباہ ہوتا ہے۔ یہ فتویٰ سروس نہیں — علماء سے رجوع کریں۔',
        },
      ],
    },
    downloadSection: {
      heading: 'اینڈرائیڈ کے لیے Noor-e-Zindagi ڈاؤن لوڈ کریں',
      subheading:
        'اینڈرائیڈ 8.0 اور اس سے اوپر کے لیے دستخط شدہ APK۔ 200 MB سے کم RAM پر پُرسکون اور آف لائن چلنے کے لیے تیار۔',
      versionLabel: 'ورژن',
      sizeLabel: 'اندازاً سائز',
      minAndroidLabel: 'کم از کم اینڈرائیڈ',
      ramLabel: 'میموری کی ضرورت',
      downloadButton: 'اینڈرائیڈ APK ڈاؤن لوڈ کریں',
      placeholderNotice:
        'پری ریلیز ترتیب: اشاعت سے قبل siteConfig.ts میں {APP_VERSION}، {SIZE}، {APK_SHA256} اور {APK_DOWNLOAD_URL} کو اصل ریلیز سے تبدیل کریں۔',
      shaLabel: 'SHA-256 چیک سم',
      copySha: 'چیک سم کاپی کریں',
      copiedSha: 'کاپی ہو گیا',
      stepsHeading: 'APK محفوظ طریقے سے انسٹال کرنے کا طریقہ',
      steps: [
        'APK فائل ڈاؤن لوڈ کریں اور تصدیق کریں کہ اس کا SHA-256 چیک سم اس صفحے پر دیے گئے ہیش سے میل کھاتا ہے۔',
        'اپنے اینڈرائیڈ فون پر فائل کھولیں اور ضرورت پڑنے پر براؤزر یا فائل مینیجر کو انسٹالیشن کی اجازت دیں۔',
        'Noor-e-Zindagi کھولیں، انگریزی، اردو یا رومن اردو منتخب کریں اور چاہیں تو آف لائن قرآن پیک ڈاؤن لوڈ کریں۔',
      ],
      permissionsHeading: 'ایپ کی مطلوبہ اجازتیں',
      permissions: [
        {
          name: 'مقام (تقریبی)',
          status: 'اختیاری',
          reason: 'صرف نماز کے اوقات کے لیے۔ دستی شہر کے انتخاب پر اس کی ضرورت نہیں۔',
        },
        {
          name: 'نوٹیفکیشنز',
          status: 'اختیاری',
          reason: 'آپ کی مقرر کردہ اذان اور عبادات کی یاد دہانیوں کے لیے۔',
        },
        {
          name: 'اسٹوریج',
          status: 'اختیاری',
          reason: 'آف لائن قرآن متن، MP3 آڈیو پیک اور JSON ڈیٹا محفوظ کرنے کے لیے۔',
        },
        {
          name: 'کیمرہ',
          status: 'صرف ضرورت کے وقت',
          reason: 'صرف تب طلب کیا جاتا ہے جب آپ OCR اسکینر فیچر کھولیں۔',
        },
        {
          name: 'مائیکروفون اور کانٹیکٹس',
          status: 'کبھی نہیں',
          reason: 'ایپ مائیکروفون یا کانٹیکٹس تک رسائی نہیں مانگتی۔',
        },
      ],
      notAppHeading: 'یہ ایپ کیا نہیں ہے',
      notAppBody:
        'Noor-e-Zindagi کوئی فتویٰ سروس نہیں ہے، کسی دینی ادارے سے وابستہ نہیں ہے، اور مستند علماء کا نعم البدل نہیں ہے۔',
    },
    faqSection: {
      heading: 'اکثر پوچھے گئے سوالات',
      subheading: 'آف لائن سہولت، تصدیق، رازداری اور اینڈرائیڈ تقاضوں کے بارے میں واضح جوابات۔',
      items: [
        {
          question: 'کیا Noor-e-Zindagi مفت اور اشتہارات سے پاک ہے؟',
          answer:
            'جی ہاں۔ ایپ ڈاؤن لوڈ اور استعمال کے لیے مفت ہے، اس میں کوئی اشتہاری SDK یا ڈیٹا ٹریکنگ شامل نہیں۔',
        },
        {
          question: 'کیا یہ انٹرنیٹ کے بغیر کام کرتی ہے؟',
          answer:
            'جی ہاں۔ مکمل قرآن متن، ڈاؤن لوڈ کردہ آڈیو پیک، اذکار، سنت چیک لسٹ، حدیث لائبریری اور نماز کے مقامی اوقات آف لائن کام کرتے ہیں۔',
        },
        {
          question: 'قرآن کے تراجم اور احادیث کی تصدیق کیسے کی جاتی ہے؟',
          answer:
            'قرآن کے تراجم کے ساتھ مترجمین کا نام درج ہے (صحیح انٹرنیشنل اور مولانا فتح محمد جالندھری)۔ احادیث میں کتاب، نمبر، درجہ (صحیح، حسن، ضعیف، مختلف فیہ) اور تاریخِ تصدیق درج ہوتی ہے۔',
        },
        {
          question: 'کیا اسلامی اے آئی معاون فتویٰ دے سکتا ہے؟',
          answer:
            'نہیں۔ اے آئی معاون صرف ایپ کے تصدیق شدہ قرآن و حدیث کے ذخیرے سے جواب دیتا ہے، استعمال شدہ حوالہ جات دکھاتا ہے اور مستند علماء سے رجوع کرنے کی تلقین کرتا ہے۔',
        },
        {
          question: 'اسے اینڈرائیڈ APK کے طور پر کیوں دیا جا رہا ہے؟',
          answer:
            'تاکہ پاکستان اور دنیا بھر کے اینڈرائیڈ 8.0+ صارفین براہِ راست دستخط شدہ ریلیز انسٹال کر سکیں اور SHA-256 چیک سم کے ذریعے فائل کی صداقت خود جانچ سکیں۔',
        },
        {
          question: 'کیا میں اپنا ڈیٹا برآمد یا حذف کر سکتا ہوں؟',
          answer:
            'جی ہاں۔ آپ بغیر لاگ ان کے مہمان موڈ استعمال کر سکتے ہیں یا گوگل سائن اِن کے بعد اپنا تمام ڈیٹا JSON میں ایکسپورٹ یا مکمل حذف کر سکتے ہیں۔',
        },
      ],
    },
    footer: {
      tagline: 'اینڈرائیڈ کے لیے ایک پُرسکون، مستند اور آف لائن دینی ساتھی۔',
      disclaimer:
        'یہ فتویٰ سروس نہیں · کسی دینی ادارے سے وابستہ نہیں · شرعی مسائل کے لیے مستند علماء سے رجوع کریں۔',
      sourcesHeading: 'قرآن و حدیث کے حوالہ جات',
      analyticsNote:
        'یہ ویب سائٹ کوکی لیس تجزیات استعمال کرتی ہے اور صرف آپ کی تھیم اور زبان localStorage میں محفوظ کرتی ہے۔',
      contactLabel: 'رابطہ',
      copyright: '© 2026 Noor-e-Zindagi۔ جملہ حقوق محفوظ ہیں۔',
    },
  },
  'roman-urdu': {
    nav: {
      skipToContent: 'Asal content par jayein',
      features: 'Features',
      demo: 'Live Demo',
      screenshots: 'Screenshots',
      trust: 'Trust aur Privacy',
      faq: 'Sawaalat',
      downloadApk: 'Download APK',
      menuOpen: 'Menu kholein',
      menuClose: 'Menu band karein',
      themeToDark: 'Night Serenity dark theme lagayein',
      themeToLight: 'Warm Cream light theme lagayein',
      languageLabel: 'Zaban',
    },
    hero: {
      headline: 'Aap ke rozmarra Deen ka pur-sukoon saathi, ek hi app mein.',
      subline:
        'Quran, tasdeeq-shuda Hadith, Azkar, Salah ke auqat, Sunnat aadatein aur verified sources par mabni AI assistant — English, Urdu aur Roman Urdu mein.',
      primaryCta: 'Download APK',
      secondaryCta: 'Live demo aazmayein',
      trustChips: ['Verified sources', 'Offline chalta hai', '3 zabanein', 'Muft'],
      calloutLabel: 'Surah Al-Fatiha 1:1',
      calloutSurah: 'Sahih International aur Fateh Muhammad Jalandhri',
    },
    trustStrip: [
      'Admin se verified mawad',
      'Hadith ka darja saaf likha hai',
      'Offline Quran aur tilawat',
      'Aap ka data, aap ka ikhtiyar',
      'Fatwa app nahi — ulama se ruju ki hidayat',
    ],
    featuresSection: {
      heading: 'Pur-sukoon ibadat ke liye, bina kisi shor ke',
      subheading:
        'Har feature offline chalne ki salahiyat rakhta hai. Mukammal tafseel dekhne ke liye kisi bhi card par click karein.',
      learnMore: 'Mazeed jaanein',
      showLess: 'Kam dikhayein',
      workflowSteps: [
        '1. Text ya OCR submission',
        '2. Quran o Hadith se cross-check',
        '3. Moderator / scholar review',
        '4. Verification note ke sath publish',
      ],
      items: [
        {
          id: 'home-dashboard',
          title: 'Home Dashboard',
          summary: 'Agli namaz ka countdown, rozana ki Ayah, Hadith, Dua aur aasan shortcuts ke sath pur-sukoon shuruat.',
          details: [
            'Zaati salam ("Assalamu Alaikum, {name}") ke sath aaj ki Hijri aur Gregorian tareekh.',
            'Agli Salah ka live countdown aur bina kisi guilt ke aaj ki takmeel ka khulasa.',
            'Daily Ayah, Daily Hadith aur Daily Dua ke sath Quran, Azkar aur Tasbih ke quick shortcuts.',
          ],
        },
        {
          id: 'quran-reader',
          title: 'Quran Reader',
          summary: 'Tamam 114 surahs aur 6,236 ayahs Uthmani script mein, lafz-ba-lafz maani aur offline audio packs ke sath.',
          details: [
            'Har Arabi lafz par tap kar ke us ka maani, root letters aur grammar dekhein.',
            'Arabi aur tarjume ka font size alag set karein, search karein aur pichli jagah se dobara parhein.',
            'Multiple qurra (Mishary Alafasy, Abdul Basit, Sudais), Arabi ya Arabi ke baad Urdu audio aur ambient sounds.',
            '114 surahs ko sirf text ya text + MP3 offline pack ke tor par save karein.',
          ],
        },
        {
          id: 'salah-times',
          title: 'Salah & Prayer Times',
          summary: '7 hisabi tareeqon, Karachi default, Qaza tracking aur Wudu/Salah rehnumai ke sath sahi auqat.',
          details: [
            'Panch namazon ke sath Sunrise, Ishraq/Duha, Tahajjud (raat ka aakhri tihai hissa) aur Witr ki rehnumai.',
            '7 methods: Karachi, ISNA, MWL, Umm Al-Qura, Egyptian, Dubai/Gulf aur Singapore.',
            'Har namaz ke liye ±30 minute adjustment, GPS ya shehar preset, Qaza log aur post-prayer Azkar link.',
          ],
        },
        {
          id: 'sunnah-routine',
          title: 'Daily Sunnah Routine',
          summary: 'Subah uthne se sone tak waqt ke hisab se Sunnaton ki checklist, mustanad hawalon ke sath.',
          details: [
            '7 auqat mein taqseem: Uthna, Subah, Ghar se nikalna/dakhil hona, Kaam o Adaab, Salah o Taharat, Shaam aur Sone se pehle.',
            'Har amal ke sath Arabi, Roman Urdu, Urdu aur English tarjuma, hawala aur lafz-ba-lafz maani.',
            'Fard, Sunnat-e-Muakkadah, Nafl/Mustahab aur Sunnat Adaab ki saaf darja-bandi, aur custom habits.',
          ],
        },
        {
          id: 'azkar-duas',
          title: 'Azkar, Duas & Tasbih',
          summary: '14 categories ki duaein, talaffuz ki rehnumai, tadad aur built-in Tasbih counter ke sath.',
          details: [
            'Subah/Shaam, Baad az Salah, Sona, Uthna, Khana, Safar, Hifazat, Astaghfar, Pareshani, Barish, Masjid, Walidain aur Ilm.',
            'Har dua mein Arabi, Roman Urdu, Urdu aur English tarjuma, tadad, parhne ka waqt aur hawala.',
            'Fauri search aur aasan Tasbih counter.',
          ],
        },
        {
          id: 'hadith-library',
          title: 'Verified Hadith Library',
          summary: '7 mashhoor kutub-e-hadith shafaf grading badges, verification notes aur amli sabaq ke sath.',
          details: [
            'Bukhari, Muslim, Tirmidhi, Abu Dawud, Nasa’i, Ibn Majah aur Muwatta Malik shamil hain.',
            'Har hadith par Sahih, Muttafaqun Alayh, Hasan, Da’if ya Disputed ka darja aur verification source dikhaya jata hai.',
            'Da’if riwayat par saaf likha hota hai: "Sirf ilmi aagahi ke liye (for scholarly awareness only)."',
          ],
        },
        {
          id: 'hijri-calendar',
          title: 'Islamic Hijri Calendar',
          summary: 'Hijri/Gregorian tareekhein, sunehre rang mein Ayyam al-Beed aur Sunnat rozon ka tracker.',
          details: [
            'Aham Islami dino aur Ayyam al-Beed (13, 14, 15 tareekh) ki gold highlight.',
            'Peer/Jumerat, White Days aur Ramadan ke rozon ka hisab rakhein.',
            'Imandari ka note: maqami chand dekhne ke mutabiq tareekh mein ±1 din ka farq ho sakta hai.',
          ],
        },
        {
          id: 'ai-assistant',
          title: 'Islamic AI Assistant',
          summary: 'Sawaalat ke jawab sirf app ke verified Quran, Sunnah aur Hadith corpus se nikaal kar deta hai.',
          details: [
            'Bina buniyad andaze lagane ke bajaye app ke tasdeeq-shuda mawad (RAG) par chalta hai.',
            'Hamesha "Verified Context Used" dikhata hai ke jawab kin hawalon se liya gaya.',
            'Saaf disclaimer: "Sirf ta‘leemi rehnumai ke liye, fatwa nahi. Mustanad ulama se ruju karein."',
          ],
        },
        {
          id: 'ocr-scanner',
          title: 'Visual Library & OCR Scanner',
          summary: 'Posters aur kitabon ke safhon se Arabi ya Urdu text scan kar ke mustanad hawalon se check karein.',
          details: [
            'Forward ki gayi tasveeron ya kitabi safhon ki duaein cross-check karne mein madadgar.',
            'Camera permission sirf tab mangi jati hai jab aap khud OCR scanner kholein.',
            'Publish hone se pehle har submission ko insani admin/scholar approve karte hain.',
          ],
        },
        {
          id: 'worship-reminders',
          title: 'Worship Reminders & Adhan',
          summary: 'Rozana, weekdays ya Juma ke liye reminders jo phone restart hone ke baad bhi barqarar rehte hain.',
          details: [
            'Adhan, halki ghanti ya silent notification mein se pasand karein.',
            'Rozana, working days aur Jumu’ah ke alag reminders lagayein.',
            'Device reboot ke baad reminders khud-ba-khud restore ho jate hain.',
          ],
        },
        {
          id: 'profile-reports',
          title: 'Profile, Bookmarks & Reports',
          summary: 'Bookmarks, haftawar o mahana reports, guest mode aur mukammal JSON export ya account delete karne ki sahulat.',
          details: [
            'Quran, Hadith, Sunnah aur Duas ko bookmark karein.',
            'Guest mode mein offline chalayein ya Google sign-in se Firebase par mehfooz sync karein.',
            'Apna sara data JSON mein export karein ya jab chahein account aur data delete karein.',
          ],
        },
        {
          id: 'dark-reading-mode',
          title: 'Dark Reading Mode',
          summary: 'Quran tilawat aur Tahajjud ke liye aankhon ko sukoon dene wala gehra forest emerald theme.',
          details: [
            'Aam dark mode se alag — khaas tor par kam chamak wale #07241C rangon mein tayyar.',
            'Fajr aur raat ki ibadat mein screen ki tez roshni se bachata hai.',
            'Lambi tilawat ke liye behtareen contrast aur font control.',
          ],
        },
        {
          id: 'admin-verification',
          title: 'Admin Verification Console (Trust Workflow)',
          summary: 'Sirf scholars aur moderators ka androoni jaanch ka nizam — har publish shuda mawad par verification note hota hai.',
          isTrustWorkflow: true,
          details: [
            'Yeh aam user feature nahi balki aap ke bharose ke liye shafaf wazahat hai.',
            'Har OCR submission, Hadith grading aur tarjume ki update moderator review ke baad hi publish hoti hai.',
            'Har record ke sath verifier ka hawala aur tareekh mehfooz hoti hai.',
          ],
        },
      ],
    },
    demoSection: {
      heading: 'App ke buniyadi features yahin aazmayein',
      subheading:
        'Android phone frame ke andar lafz-ba-lafz Quran, Karachi method prayer times, Sunnah checklist aur Tasbih counter chalayein.',
      banner: 'Demo sample mawad ke sath — Namaz ke auqat AlAdhan API (Method 1: Karachi) se live aate hain',
      liveNotesTitle: 'Is preview mein kya live chalta hai',
      liveNotes: [
        'Quran tab: Surah Al-Fatiha ki tamam 7 ayahs, Sahih International aur Fateh Muhammad Jalandhri tarjume aur lafz-ba-lafz maani ke sath.',
        'Salah tab: Live AlAdhan API lookup (Method 1: Karachi) jo 24 ghante sessionStorage mein cache hota hai aur offline fallback ke sath.',
        'Sunnah & Tasbih tabs: Session-scoped checklist progress ring aur vibration-ready Tasbih counter.',
      ],
      tabs: {
        quran: 'Quran',
        prayer: 'Salah',
        sunnah: 'Sunnah',
        tasbih: 'Tasbih',
      },
      quran: {
        surahTitle: 'Surah Al-Fatiha',
        fontSizeLabel: 'Arabi text size',
        tapWordHint: 'Kisi bhi Arabi lafz par tap karein taake us ka root aur maani dekh sakein.',
        selectedWordTitle: 'Muntakhab lafz ki tafseel',
        rootLabel: 'Root',
        urduMeaningLabel: 'Urdu',
        englishMeaningLabel: 'English',
      },
      prayer: {
        cityLabel: 'Shehar',
        methodNote: 'University of Islamic Sciences, Karachi (Method 1)',
        nextPrayerLabel: 'Agli namaz',
        loadingText: 'Aaj ke auqat load ho rahe hain…',
        liveBadge: 'Live AlAdhan API (24h cached)',
        fallbackBadge: 'Sample auqat dikhaye ja rahe hain (offline backup)',
        prayerNames: {
          Fajr: 'Fajr',
          Sunrise: 'Sunrise',
          Dhuhr: 'Dhuhr',
          Asr: 'Asr',
          Maghrib: 'Maghrib',
          Isha: 'Isha',
        },
      },
      sunnah: {
        sessionNote: 'Demo state — sessionStorage mein mehfooz hai aur browser band hone par reset ho jati hai.',
        streakLabel: 'Demo tasalsul',
        completedLabel: 'Aaj ki takmeel',
        gentleDone: 'Alhamdulillah — aaj achi peshraft rahi.',
        gentleEncourage: 'Itminan se jari rakhein, ya kal dobara koshish karein.',
      },
      tasbih: {
        targetLabel: 'Target tadad',
        tapButton: 'Ginti ke liye tap karein',
        resetButton: 'Reset',
        completedTarget: 'Target mukammal — Alhamdulillah',
      },
    },
    screenshotsSection: {
      heading: 'Noor-e-Zindagi ke andar ki jhalak',
      subheading:
        '9:19.5 Android frame mein tamam 9 screens dekhein. Release build ke liye tamam screenshot slots config mein mark hain.',
      slideIndicator: 'Slide {current} az {total}',
      previous: 'Pichli screen',
      next: 'Agli screen',
      placeholderTag: 'Config slot',
      captions: {
        home: { title: 'Home Dashboard', subtitle: 'Agli Salah ka countdown, Daily Ayah aur shortcuts' },
        quran: { title: 'Quran Reader', subtitle: 'Uthmani script, lafz-ba-lafz maani aur offline audio' },
        prayer: { title: 'Prayer Times', subtitle: '7 calculation methods, Ishraq, Tahajjud aur Qaza' },
        sunnah: { title: 'Daily Sunnah', subtitle: 'Waqt ke mutabiq checklist aur Fard/Sunnat tags' },
        azkar: { title: 'Azkar & Tasbih', subtitle: '14 dua categories aur built-in counter' },
        hadith: { title: 'Hadith Library', subtitle: '7 kutub, shafaf grading aur amli sabaq' },
        calendar: { title: 'Hijri Calendar', subtitle: 'Gold mein Ayyam al-Beed aur rozon ka tracker' },
        ai: { title: 'AI Assistant', subtitle: 'Verified hawalon aur non-fatwa note ke sath jawab' },
        night: { title: 'Night Reading Mode', subtitle: 'Tahajjud aur tilawat ke liye low-glare forest palette' },
      },
    },
    languagesSection: {
      heading: 'Us zaban mein parhein jo aap ke dil ke qareeb ho',
      caption: 'Ek dua. Parhne ke teen tareeqe. Ek dil.',
      duaTitle: 'Sayyid al-Istighfar — Maghfirat ki sab se afzal dua',
      englishLabel: 'English (Tarjuma aur Transliteration)',
      transliterationLabel: 'Transliteration',
      urduLabel: 'اردو (Urdu — RTL)',
      romanUrduLabel: 'Roman Urdu',
    },
    privacySection: {
      heading: 'Shafaf privacy aur ilmi zimmedari',
      subheading:
        'Koi chhupi tracking nahi, koi ishtihar nahi, aur ta‘leemi rehnumai aur fatwa ke darmiyan saaf farq.',
      cards: [
        {
          title: 'Kya store hota hai',
          body: 'Sirf aap ka ikhtiyari profile, checklists, bookmarks aur reminders. Firebase par per-user Firestore rules ke sath mehfooz.',
        },
        {
          title: 'Kya kabhi jama nahi hota',
          body: 'Koi ad ID nahi, koi browsing history nahi, koi contacts list nahi aur na hi continuous background GPS.',
        },
        {
          title: 'Sirf shehar ki satah ki location',
          body: 'Sirf namaz ke auqat ke liye. Aap bina GPS ke apna shehar khud select kar sakte hain.',
        },
        {
          title: 'Export aur delete aap ke haath mein',
          body: 'Apna sara data JSON mein export karein aur jab chahein account aur cloud data khud delete karein.',
        },
        {
          title: 'No ads, no data sales',
          body: 'Ishtihari networks se pak. Website par cookieless analytics hain aur sirf theme/zaban localStorage mein save hoti hai.',
        },
        {
          title: 'Verification aur non-fatwa had',
          body: 'Har Hadith ke sath kitab, number aur grading source likha hai; Da’if par alag note hota hai. Yeh fatwa service nahi — ulama se ruju karein.',
        },
      ],
    },
    downloadSection: {
      heading: 'Android ke liye Noor-e-Zindagi download karein',
      subheading:
        'Android 8.0 aur us se upar ke liye signed APK. 200 MB RAM se kam baseline aur offline istemal ke liye tayyar.',
      versionLabel: 'Version',
      sizeLabel: 'Andazan size',
      minAndroidLabel: 'Kam az kam Android',
      ramLabel: 'Memory baseline',
      downloadButton: 'Download Android APK',
      placeholderNotice:
        'Pre-release launch config: publish karne se pehle siteConfig.ts mein {APP_VERSION}, {SIZE}, {APK_SHA256} aur {APK_DOWNLOAD_URL} replace karein.',
      shaLabel: 'SHA-256 checksum',
      copySha: 'Checksum copy karein',
      copiedSha: 'Copy ho gaya',
      stepsHeading: 'APK mehfooz tareeqe se install karne ka tareeqa',
      steps: [
        'APK file download karein aur check karein ke us ka SHA-256 checksum is safhe par diye gaye hash se match karta hai.',
        'Apne Android phone par file kholein aur zarurat parne par browser ya file manager ko install ki ijazat dein.',
        'Noor-e-Zindagi kholein, English, اردو ya Roman Urdu chunein aur chahein to offline Quran packs download karein.',
      ],
      permissionsHeading: 'App ki zaroori permissions',
      permissions: [
        {
          name: 'Location (Coarse)',
          status: 'Ikhtiyari',
          reason: 'Sirf shehar ke namaz auqat ke liye. Manual city preset bina location ke chalta hai.',
        },
        {
          name: 'Notifications',
          status: 'Ikhtiyari',
          reason: 'Aap ke set kiye hue Adhan aur worship reminders ke liye.',
        },
        {
          name: 'Storage',
          status: 'Ikhtiyari',
          reason: 'Offline Quran text, MP3 audio packs aur JSON exports save karne ke liye.',
        },
        {
          name: 'Camera',
          status: 'Sirf zarurat par',
          reason: 'Sirf tab manga jata hai jab aap OCR scanner kholte hain.',
        },
        {
          name: 'Microphone aur Contacts',
          status: 'Kabhi nahi',
          reason: 'App microphone ya contacts ki ijazat kabhi nahi mangti.',
        },
      ],
      notAppHeading: 'Yeh app kya nahi hai',
      notAppBody:
        'Noor-e-Zindagi fatwa service nahi hai, kisi mazhabi idare se munsalik nahi hai, aur mustanad ulama ka naimul-badal nahi hai.',
    },
    faqSection: {
      heading: 'Aam pooche jane wale sawaalat',
      subheading: 'Offline istemal, verification, privacy aur Android compatibility ke seedhe jawab.',
      items: [
        {
          question: 'Kya Noor-e-Zindagi muft aur bina ads ke hai?',
          answer:
            'Ji haan. App download aur istemal karne ke liye muft hai, is mein koi ad network ya tracking ID nahi hai.',
        },
        {
          question: 'Kya yeh internet ke baghair chalti hai?',
          answer:
            'Ji haan. Mukammal Quran text, download kiye hue audio packs, Azkar, Sunnah checklist, Hadith aur prayer calculation offline kaam karte hain.',
        },
        {
          question: 'Hadith aur Quran ke tarjume kaise verify hote hain?',
          answer:
            'Quran ke tarjumon par mutarjim ka naam darj hai (Sahih International aur Maulana Fateh Muhammad Jalandhri). Hadith mein kitab, number, grading (Sahih, Hasan, Da’if, Disputed) aur verification date dikhayi jati hai.',
        },
        {
          question: 'Kya Islamic AI assistant fatwa de sakta hai?',
          answer:
            'Nahi. AI assistant sirf app ke verified Quran aur Hadith mawad se jawab deta hai, citations dikhata hai aur hamesha ulama se mashwara karne ki hidayat karta hai.',
        },
        {
          question: 'Ise Android APK ke tor par kyun diya ja raha hai?',
          answer:
            'Noor-e-Zindagi pehle Android 8.0+ ke liye direct signed APK aur SHA-256 verification ke sath launch ho rahi hai taake Pakistan aur dunya bhar ke log bharose se install kar sakein.',
        },
        {
          question: 'Kya main apna data export ya delete kar sakta hoon?',
          answer:
            'Ji haan. Aap guest mode mein bina sign-in ke use karein ya Google sign-in ke baad JSON export aur account deletion khud kar sakte hain.',
        },
      ],
    },
    footer: {
      tagline: 'Android ke liye ek pur-sukoon, mustanad aur offline Deen saathi.',
      disclaimer:
        'Fatwa service nahi · Kisi mazhabi idare se wabasta nahi · Masail ke liye mustanad ulama se ruju karein.',
      sourcesHeading: 'Text aur Hadith ke hawale',
      analyticsNote:
        'Yeh website cookieless analytics use karti hai aur sirf theme aur zaban localStorage mein save karti hai.',
      contactLabel: 'Rabta',
      copyright: '© 2026 Noor-e-Zindagi. Tamam huqooq mehfooz hain.',
    },
  },
};
