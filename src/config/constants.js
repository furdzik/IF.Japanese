/* VOCAB */
export const localStorageKeyVocab = 'vocabSelectedFilters';

export const VOCAB_IDS = {
  KNOWN: 1,
  IN_PROGRESS: 2,
  NOT_KNOWN: 3,
  LEVEL_5: 4,
  LEVEL_4: 5,
  LEVEL_3: 6,
  LEVEL_2: 7,
  LEVEL_1: 8,
  OTHER: 9
};

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
  group1Nu: 'nu',
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
export const menuId = {
  vocab: 0,
  kanji: 1,
  verbs: 2,
  grammar: 3,
  grammarToRepeat: 4,
  grammarPoliteness: 5,
  others: 6,
  othersGame: 7,
  othersFlashcards: 8
};

export const menu = [
  {
    id: menuId.vocab,
    name: '単語',
    link: '/'
  },
  {
    id: menuId.kanji,
    name: '漢字',
    link: '/kanji'
  },
  {
    id: menuId.verbs,
    name: '動詞',
    link: '/verbs'
  },
  {
    id: menuId.grammar,
    name: '文法',
    link: '/grammar'
  },
  {
    id: menuId.others,
    name: '他',
    link: '/others'
  }
];

export const grammarMenu = [
  {
    id: menuId.grammarToRepeat,
    name: '復習',
    link: '/grammar-to-repeat'
  },
  {
    id: menuId.grammarPoliteness,
    name: '丁寧さ',
    link: '/grammar-politeness'
  },
  {
    id: menuId.grammarPoliteness,
    name: 'よく使う表現',
    link: '/expressions'
  }
];

export const othersMenu = [
  {
    id: menuId.othersGame,
    name: '仮名のゲーム',
    link: '/kana-game'
  },
  {
    id: menuId.othersFlashcards,
    name: 'フラッシュカード',
    link: '/flashcards'
  }
];

/* OTHERS */
export const VIEWPORT_SIZE_CHECKING_DELAY = 500;

export const SAFARI_BAR_VH = 0.01;

export const URL_SEPARATOR = ',';

export const ENTER_CODE = 13;
