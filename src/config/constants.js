/* VOCAB */
export const KNOWN_VOCAB = 1;
export const IN_PROGRESS_VOCAB = 2;
export const NOT_KNOWN_VOCAB = 3;

export const LEVEL_5_VOCAB = 4;
export const LEVEL_4_VOCAB = 5;
export const LEVEL_3_VOCAB = 6;
export const LEVEL_2_VOCAB = 7;
export const LEVEL_1_VOCAB = 8;
export const OTHER_VOCAB = 9;

/* KANJI */
export const KNOWN_KANJI = 1;
export const IN_PROGRESS_KANJI = 2;
export const NOT_KNOWN_KANJI = 3;

export const LEVEL_5_KANJI = 4;
export const LEVEL_4_KANJI = 5;
export const LEVEL_3_KANJI = 6;
export const LEVEL_2_KANJI = 7;
export const LEVEL_1_KANJI = 8;
export const OTHER_KANJI = 9;
export const JOYO_KANJI = 10;

/* VERBS */
export const KNOWN_VERBS = 1;
export const IN_PROGRESS_VERBS = 2;
export const NOT_KNOWN_VERBS = 3;
export const LEVEL_5_VERBS = 4;

export const LEVEL_4_VERBS = 5;
export const LEVEL_3_VERBS = 6;
export const LEVEL_2_VERBS = 7;
export const LEVEL_1_VERBS = 8;
export const OTHER_VERBS = 9;

export const verbGroupTypes = {
  group2: '2',
  specialVerb1: 'special1', // suru
  specialVerb2: 'special2', // kuru
  group1U: 'u',
  group1Ku: 'ku',
  group1Gu: 'gu',
  group1Su: 'su',
  group1Tsu: 'tsu',
  group1Bu: 'bu',
  group1Mu: 'mu',
  group1Ru: 'ru'
};

export const inflectionTypes = {
  NORMAL: 1,
  NEGATIVE: 2,
  PAST: 3,
  PAST_NEGATIVE: 4,
  NO_INFLECTION: 5
};

export const bunpouTypes = {
  JISHOU_KEI: 'jishouKei',
  TE_KEI: 'teKei',
  TAI_KEI: 'taiKei',
  IKOU_KEI: 'ikouKei',
  MEIREI_KEI: 'meireiKei',
  KINSHI_KEI: 'kinshiKei',
  KANOU_KEI: 'kanouKei',
  JOUKEN_BA_KEI: 'joukenBaKei',
  JOUKEN_TARA_KEI: 'joukenTaraKei',
  UKEMI_KEI: 'ukemiKei',
  SHIEKI_KEI: 'shiekiKei',
  SHIEKIUKEMI_KEI: 'shiekiukemiKei',
  SHIEKIUKEMI_SHORT_KEI: 'shiekiukemiShortKei'
};

export const verbType = {
  TRANSITIVE: 'transitive',
  INTRANSITIVE: 'intransitive',
  OTHER: 'other'
};

/* MENU */
export const menu = [
  {
    id: 1,
    name: '単語',
    link: '/'
  },
  {
    id: 2,
    name: '漢字',
    link: '/kanji'
  },
  {
    id: 3,
    name: '動詞',
    link: '/verbs'
  }
];

/* OTHERS */
export const VIEWPORT_SIZE_CHECKING_DELAY = 500;

export const SAFARI_BAR_VH = 0.01;

export const URL_SEPARATOR = ',';
