export interface QuranWord {
  arabic: string;
  transliteration: string;
  root: string;
  meaningEn: string;
  meaningUr: string;
}

export interface QuranAyah {
  number: number;
  reference: string;
  arabic: string;
  english: string;
  urdu: string;
  words: QuranWord[];
}

// Surah Al-Fatiha (Chapter 1, Ayahs 1–7)
// Arabic: Uthmani standard | English: Sahih International | Urdu: Fateh Muhammad Jalandhri
export const AL_FATIHA_AYAHS: QuranAyah[] = [
  {
    number: 1,
    reference: 'Surah Al-Fatiha 1:1',
    arabic: 'بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ',
    english: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.',
    urdu: 'شروع اللہ کے نام سے جو بڑا مہربان نہایت رحم والا ہے',
    words: [
      {
        arabic: 'بِسْمِ',
        transliteration: 'Bismi',
        root: 'س م و',
        meaningEn: 'In the name of',
        meaningUr: 'نام سے',
      },
      {
        arabic: 'ٱللَّهِ',
        transliteration: 'Allāhi',
        root: 'أ ل ه',
        meaningEn: 'Allah (God)',
        meaningUr: 'اللہ کے',
      },
      {
        arabic: 'ٱلرَّحْمَـٰنِ',
        transliteration: 'Ar-Raḥmāni',
        root: 'ر ح م',
        meaningEn: 'The Entirely Merciful',
        meaningUr: 'بڑا مہربان',
      },
      {
        arabic: 'ٱلرَّحِيمِ',
        transliteration: 'Ar-Raḥīmi',
        root: 'ر ح م',
        meaningEn: 'The Especially Merciful',
        meaningUr: 'نہایت رحم والا',
      },
    ],
  },
  {
    number: 2,
    reference: 'Surah Al-Fatiha 1:2',
    arabic: 'ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ',
    english: '[All] praise is [due] to Allah, Lord of the worlds —',
    urdu: 'سب طرح کی تعریف اللہ ہی کے لیے ہے جو تمام مخلوقات کا پروردگار ہے',
    words: [
      {
        arabic: 'ٱلْحَمْدُ',
        transliteration: 'Al-ḥamdu',
        root: 'ح م د',
        meaningEn: 'All praise and thanks',
        meaningUr: 'سب تعریف',
      },
      {
        arabic: 'لِلَّهِ',
        transliteration: 'Lillāhi',
        root: 'أ ل ه',
        meaningEn: 'is due to Allah',
        meaningUr: 'اللہ ہی کے لیے',
      },
      {
        arabic: 'رَبِّ',
        transliteration: 'Rabbi',
        root: 'ر ب ب',
        meaningEn: 'Lord and Sustainer',
        meaningUr: 'پروردگار',
      },
      {
        arabic: 'ٱلْعَـٰلَمِينَ',
        transliteration: 'Al-‘ālamīn',
        root: 'ع ل م',
        meaningEn: 'of the worlds',
        meaningUr: 'تمام جہانوں کا',
      },
    ],
  },
  {
    number: 3,
    reference: 'Surah Al-Fatiha 1:3',
    arabic: 'ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ',
    english: 'The Entirely Merciful, the Especially Merciful,',
    urdu: 'بڑا مہربان نہایت رحم والا',
    words: [
      {
        arabic: 'ٱلرَّحْمَـٰنِ',
        transliteration: 'Ar-Raḥmāni',
        root: 'ر ح م',
        meaningEn: 'The Entirely Merciful',
        meaningUr: 'بڑا مہربان',
      },
      {
        arabic: 'ٱلرَّحِيمِ',
        transliteration: 'Ar-Raḥīmi',
        root: 'ر ح م',
        meaningEn: 'The Especially Merciful',
        meaningUr: 'نہایت رحم والا',
      },
    ],
  },
  {
    number: 4,
    reference: 'Surah Al-Fatiha 1:4',
    arabic: 'مَـٰلِكِ يَوْمِ ٱلدِّينِ',
    english: 'Sovereign of the Day of Recompense.',
    urdu: 'انصاف کے دن کا مالک',
    words: [
      {
        arabic: 'مَـٰلِكِ',
        transliteration: 'Māliki',
        root: 'م ل ك',
        meaningEn: 'Master / Sovereign',
        meaningUr: 'مالک',
      },
      {
        arabic: 'يَوْمِ',
        transliteration: 'Yawmi',
        root: 'ي و م',
        meaningEn: 'of the Day',
        meaningUr: 'دن کا',
      },
      {
        arabic: 'ٱلدِّينِ',
        transliteration: 'Ad-dīn',
        root: 'د ي ن',
        meaningEn: 'of Recompense / Judgment',
        meaningUr: 'جزا و انصاف',
      },
    ],
  },
  {
    number: 5,
    reference: 'Surah Al-Fatiha 1:5',
    arabic: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ',
    english: 'It is You we worship and You we ask for help.',
    urdu: 'ہم تیری ہی عبادت کرتے ہیں اور تجھ ہی سے مدد مانگتے ہیں',
    words: [
      {
        arabic: 'إِيَّاكَ',
        transliteration: 'Iyyāka',
        root: 'Particle',
        meaningEn: 'You alone',
        meaningUr: 'تیری ہی',
      },
      {
        arabic: 'نَعْبُدُ',
        transliteration: 'Na‘budu',
        root: 'ع ب د',
        meaningEn: 'we worship',
        meaningUr: 'ہم عبادت کرتے ہیں',
      },
      {
        arabic: 'وَإِيَّاكَ',
        transliteration: 'Wa iyyāka',
        root: 'Particle',
        meaningEn: 'and You alone',
        meaningUr: 'اور تجھ ہی سے',
      },
      {
        arabic: 'نَسْتَعِينُ',
        transliteration: 'Nasta‘īn',
        root: 'ع و ن',
        meaningEn: 'we ask for help',
        meaningUr: 'ہم مدد مانگتے ہیں',
      },
    ],
  },
  {
    number: 6,
    reference: 'Surah Al-Fatiha 1:6',
    arabic: 'ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ',
    english: 'Guide us to the straight path —',
    urdu: 'ہم کو سیدھے رستے چلا',
    words: [
      {
        arabic: 'ٱهْدِنَا',
        transliteration: 'Ihdinā',
        root: 'ه د ي',
        meaningEn: 'Guide us',
        meaningUr: 'ہمیں ہدایت دے',
      },
      {
        arabic: 'ٱلصِّرَٰطَ',
        transliteration: 'Aṣ-ṣirāṭa',
        root: 'ص ر ط',
        meaningEn: 'to the path',
        meaningUr: 'راستہ',
      },
      {
        arabic: 'ٱلْمُسْتَقِيمَ',
        transliteration: 'Al-mustaqīm',
        root: 'ق و م',
        meaningEn: 'the straight / upright',
        meaningUr: 'سیدھا',
      },
    ],
  },
  {
    number: 7,
    reference: 'Surah Al-Fatiha 1:7',
    arabic:
      'صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ',
    english:
      'The path of those upon whom You have bestowed favor, not of those who have evoked [Your] anger or of those who are astray.',
    urdu:
      'ان لوگوں کے رستے جن پر تو اپنا فضل و کرم کرتا رہا نہ ان کے جن پر غصے ہوتا رہا اور نہ گمراہوں کے',
    words: [
      {
        arabic: 'صِرَٰطَ',
        transliteration: 'Ṣirāṭa',
        root: 'ص ر ط',
        meaningEn: 'The path of',
        meaningUr: 'راستہ',
      },
      {
        arabic: 'ٱلَّذِينَ',
        transliteration: 'Alladhīna',
        root: 'Relative',
        meaningEn: 'those who',
        meaningUr: 'ان لوگوں کا',
      },
      {
        arabic: 'أَنْعَمْتَ',
        transliteration: 'An‘amta',
        root: 'ن ع م',
        meaningEn: 'You bestowed favor',
        meaningUr: 'تو نے انعام فرمایا',
      },
      {
        arabic: 'عَلَيْهِمْ',
        transliteration: '‘Alayhim',
        root: 'ع ل ي',
        meaningEn: 'upon them',
        meaningUr: 'ان پر',
      },
      {
        arabic: 'غَيْرِ',
        transliteration: 'Ghayri',
        root: 'غ ي ر',
        meaningEn: 'not of',
        meaningUr: 'نہ کہ',
      },
      {
        arabic: 'ٱلْمَغْضُوبِ',
        transliteration: 'Al-maghḍūbi',
        root: 'غ ض ب',
        meaningEn: 'those who earned anger',
        meaningUr: 'جن پر غضب ہوا',
      },
      {
        arabic: 'عَلَيْهِمْ',
        transliteration: '‘Alayhim',
        root: 'ع ل ي',
        meaningEn: 'upon them',
        meaningUr: 'ان پر',
      },
      {
        arabic: 'وَلَا',
        transliteration: 'Wa lā',
        root: 'Particle',
        meaningEn: 'and not',
        meaningUr: 'اور نہ',
      },
      {
        arabic: 'ٱلضَّآلِّينَ',
        transliteration: 'Aḍ-ḍāllīn',
        root: 'ض ل ل',
        meaningEn: 'those who went astray',
        meaningUr: 'گمراہ ہونے والوں کا',
      },
    ],
  },
];

export interface DemoCity {
  name: string;
  country: string;
  fallbackTimings: {
    Fajr: string;
    Sunrise: string;
    Dhuhr: string;
    Asr: string;
    Maghrib: string;
    Isha: string;
  };
}

export const DEMO_CITIES: DemoCity[] = [
  {
    name: 'Karachi',
    country: 'Pakistan',
    fallbackTimings: {
      Fajr: '05:24',
      Sunrise: '06:46',
      Dhuhr: '12:22',
      Asr: '15:39',
      Maghrib: '17:58',
      Isha: '19:20',
    },
  },
  {
    name: 'Lahore',
    country: 'Pakistan',
    fallbackTimings: {
      Fajr: '05:08',
      Sunrise: '06:34',
      Dhuhr: '12:04',
      Asr: '15:14',
      Maghrib: '17:34',
      Isha: '19:00',
    },
  },
  {
    name: 'Islamabad',
    country: 'Pakistan',
    fallbackTimings: {
      Fajr: '05:14',
      Sunrise: '06:41',
      Dhuhr: '12:08',
      Asr: '15:16',
      Maghrib: '17:35',
      Isha: '19:02',
    },
  },
  {
    name: 'Dubai',
    country: 'United Arab Emirates',
    fallbackTimings: {
      Fajr: '05:17',
      Sunrise: '06:36',
      Dhuhr: '12:19',
      Asr: '15:37',
      Maghrib: '18:02',
      Isha: '19:21',
    },
  },
  {
    name: 'London',
    country: 'United Kingdom',
    fallbackTimings: {
      Fajr: '05:31',
      Sunrise: '07:24',
      Dhuhr: '12:01',
      Asr: '14:21',
      Maghrib: '16:38',
      Isha: '18:24',
    },
  },
  {
    name: 'Makkah',
    country: 'Saudi Arabia',
    fallbackTimings: {
      Fajr: '05:16',
      Sunrise: '06:35',
      Dhuhr: '12:18',
      Asr: '15:36',
      Maghrib: '18:01',
      Isha: '19:20',
    },
  },
  {
    name: 'Madinah',
    country: 'Saudi Arabia',
    fallbackTimings: {
      Fajr: '05:18',
      Sunrise: '06:39',
      Dhuhr: '12:19',
      Asr: '15:34',
      Maghrib: '17:59',
      Isha: '19:20',
    },
  },
];

export interface SunnahChecklistItem {
  id: string;
  reference: string;
  classificationEn: string;
  classificationUr: string;
  classificationRoman: string;
  titleEn: string;
  titleUr: string;
  titleRoman: string;
  arabic: string;
}

export const DEMO_SUNNAH_ITEMS: SunnahChecklistItem[] = [
  {
    id: 'bismillah-eating',
    reference: 'Sahih al-Bukhari 5376',
    classificationEn: 'Sunnah Etiquette',
    classificationUr: 'سنتِ آداب',
    classificationRoman: 'Sunnat Adaab',
    titleEn: 'Say Bismillah before eating',
    titleUr: 'کھانے سے پہلے بسم اللہ پڑھنا',
    titleRoman: 'Khane se pehle Bismillah parhna',
    arabic: 'بِسْمِ ٱللَّهِ',
  },
  {
    id: 'miswak-waking',
    reference: 'Sahih al-Bukhari 245',
    classificationEn: 'Emphasized Sunnah',
    classificationUr: 'سنتِ مؤکدہ',
    classificationRoman: 'Sunnat-e-Muakkadah',
    titleEn: 'Use Miswak upon waking up',
    titleUr: 'نیند سے بیدار ہونے پر مسواک کرنا',
    titleRoman: 'Neend se uth kar Miswak karna',
    arabic: 'السِّوَاكُ مَطْهَرَةٌ لِلْفَمِ مَرْضَاةٌ لِلرَّبِّ',
  },
  {
    id: 'ayat-kursi-sleep',
    reference: 'Sahih al-Bukhari 5010',
    classificationEn: 'Recommended Sunnah',
    classificationUr: 'مسنون عمل',
    classificationRoman: 'Masnoon Amal',
    titleEn: 'Recite Ayat al-Kursi before sleep',
    titleUr: 'سونے سے پہلے آیۃ الکرسی پڑھنا',
    titleRoman: 'Sone se pehle Ayat al-Kursi parhna',
    arabic: 'ٱللَّهُ لَآ إِلَـٰهَ إِلَّا هُوَ ٱلْحَىُّ ٱلْقَيُّومُ',
  },
];

// Sayyid al-Istighfar (Sahih al-Bukhari 6306)
export const SAYYID_AL_ISTIGHFAR = {
  reference: 'Sahih al-Bukhari 6306',
  arabic:
    'اللَّهُمَّ أَنْتَ رَبِّي لا إِلَهَ إِلا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لا يَغْفِرُ الذُّنُوبَ إِلا أَنْتَ',
  transliteration:
    'Allahumma Anta Rabbi la ilaha illa Anta, khalaqtani wa ana abduka, wa ana ala ahdika wa wa‘dika mastata‘tu, a‘udhu bika min sharri ma sana‘tu, abu’u laka bini‘matika alayya, wa abu’u bidhanbi faghfir li fa innahu la yaghfirudh-dhunuba illa Anta.',
  english:
    'O Allah, You are my Lord, none has the right to be worshipped except You. You created me and I am Your servant, and I abide to Your covenant and promise as best I can. I seek refuge in You from the evil of what I have done. I acknowledge Your favor upon me and I acknowledge my sin, so forgive me, for verily none can forgive sins except You.',
  urdu:
    'اے اللہ! تو میرا رب ہے، تیرے سوا کوئی معبود نہیں۔ تو نے مجھے پیدا کیا اور میں تیرا بندہ ہوں، اور میں اپنی استطاعت کے مطابق تیرے عہد اور وعدے پر قائم ہوں۔ میں اپنے کیے ہوئے برے اعمال کے شر سے تیری پناہ مانگتا ہوں۔ میں تیرے مجھ پر کیے گئے انعامات کا اقرار کرتا ہوں اور اپنے گناہوں کا بھی اعتراف کرتا ہوں، پس مجھے بخش دے، کیونکہ تیرے سوا کوئی گناہوں کو بخشنے والا نہیں۔',
  romanUrdu:
    'Ae Allah! Tu mera Rabb hai, Tere siwa koi ma‘bood nahi. Tu ne mujhe paida kiya aur main Tera banda hoon, aur apni istita‘at ke mutabiq Tere ahd aur wa‘de par qaim hoon. Main apne kiye hue bure a‘maal ke shar se Teri panah mangta hoon. Main Tere mujh par kiye gaye in‘aamaat ka iqrar karta hoon aur apne gunahon ka bhi i‘tiraf karta hoon, pas mujhe bakhsh de, kyunki Tere siwa koi gunahon ko bakhshne wala nahi.',
};
