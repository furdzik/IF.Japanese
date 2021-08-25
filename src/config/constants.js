import messages from '@utils/defaultMessages/menu.messages';

/* FILTERS */
export const localStorageKeyVocab = 'vocabSelectedFilters';
export const localStorageKeyVerbs = 'verbsSelectedFilters';
export const localStorageKeyKanji = 'kanjiSelectedFilters';
export const localStorageKeyFlashcards = 'flashcardsSelectedFilters';
export const localStorageKeyGrammar = 'grammarSelectedFilters';

export const FILTERS_IDS = {
  KNOWN: 1,
  IN_PROGRESS: 2,
  NOW_LEARNING: 11,
  NOT_KNOWN: 3,
  LEVEL_5: 4,
  LEVEL_4: 5,
  LEVEL_3: 6,
  LEVEL_2: 7,
  LEVEL_1: 8,
  OTHER: 9,
  JOYO_KANJI: 10,
  TO_REPEAT: 12
};

/* VERBS */
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

export const grammarTypes = {
  JISHOU_FORM: 'jishouForm',
  TE_FORM: 'teForm',
  TAI_FORM: 'taiForm',
  IKOU_FORM: 'ikouForm',
  MEIREI_FORM: 'meireiForm',
  KINSHI_FORM: 'kinshiForm',
  KANOU_FORM: 'kanouForm',
  JOUKEN_BA_FORM: 'joukenBaForm',
  JOUKEN_TARA_FORM: 'joukenTaraForm',
  UKEMI_FORM: 'ukemiForm',
  SHIEKI_FORM: 'shiekiForm',
  SHIEKIUKEMI_FORM: 'shiekiukemiForm',
  SHIEKIUKEMI_SHORT_FORM: 'shiekiukemiShortForm'
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
  grammarPoliteness: 4,
  others: 5,
  othersGame: 6,
  othersFlashcards: 7
};

export const menu = [
  {
    id: menuId.vocab,
    name: (messages.vocabText)?.defaultMessage,
    label: (messages.vocabLabel)?.defaultMessage,
    link: '/'
  },
  {
    id: menuId.kanji,
    name: (messages.kanjiText)?.defaultMessage,
    label: (messages.kanjiLabel)?.defaultMessage,
    link: '/kanji'
  },
  {
    id: menuId.verbs,
    name: (messages.verbsText)?.defaultMessage,
    label: (messages.verbsLabel)?.defaultMessage,
    link: '/verbs'
  },
  {
    id: menuId.grammar,
    name: (messages.grammarText)?.defaultMessage,
    label: (messages.grammarLabel)?.defaultMessage,
    link: '/grammar'
  },
  {
    id: menuId.others,
    name: (messages.othersText)?.defaultMessage,
    label: (messages.othersLabel)?.defaultMessage,
    link: '/others'
  }
];

export const grammarMenu = [
  {
    id: menuId.grammarPoliteness,
    name: (messages.grammarFormsText)?.defaultMessage,
    label: (messages.grammarFormsLabel)?.defaultMessage,
    link: '/forms'
  },
  {
    id: menuId.grammarPoliteness,
    name: (messages.grammarPolitenessText)?.defaultMessage,
    label: (messages.grammarPolitenessLabel)?.defaultMessage,
    link: '/grammar-politeness'
  },
  {
    id: menuId.grammarPoliteness,
    name: (messages.expressionsText)?.defaultMessage,
    label: (messages.expressionsLabel)?.defaultMessage,
    link: '/expressions'
  }
];

export const othersMenu = [
  {
    id: menuId.othersGame,
    name: (messages.kanaGameText)?.defaultMessage,
    label: (messages.kanaGameLabel)?.defaultMessage,
    link: '/kana-game'
  },
  {
    id: menuId.othersFlashcards,
    name: (messages.flashcardsText)?.defaultMessage,
    label: (messages.flashcardsLabel)?.defaultMessage,
    link: '/flashcards'
  }
];

/* OTHERS */
export const URL_SEPARATOR = ',';

export const ENTER_CODE = 13;
export const ESC_CODE = 27;

export const sectionTypes = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  NAME: 'name',
  OTHER: 'other'
};

export const characterType = {
  FURIGANA: 'furigana',
  KANJI: 'kanji'
};

/* VOCAB DETAILS */
export const tagTypes = {
  IS_VERB: 'isVerb',
  IS_COMMON: 'isCommon',
  JLPT: 'jlpt',
  JOYO: 'joyo',
  JINMEIYO: 'jinmeiyo',
  OTHER: 'other',
  GRADE: 'grade',
  LEVEL_GROUP: 'levelGroup',
  GRAMMAR_ORIGIN: 'grammarOrigin'
};

/* GRAMMAR */
export const grammarLevels = {
  LEVEL_5: 5,
  LEVEL_4: 4,
  LEVEL_3: 3,
  LEVEL_2: 2,
  LEVEL_1: 1,
  OTHER: 0
};

export const grammarGroups = {
  ELEMENTARY_LEVEL: 'elementary',
  INTERMEDIATE_LEVEL: 'intermediate',
  ADVANCED_LEVEL: 'advanced',
  ALL: 'all'
};

export const grammarGroupsLabels = {
  elementaryLevel: (messages.elementaryLevel)?.defaultMessage,
  intermediateLevel: (messages.intermediateLevel)?.defaultMessage,
  advancedLevel: (messages.advancedLevel)?.defaultMessage
};

export const grammarOriginTypes = {
  MINNA_NO_NIHONGO_1: 'minnaNoNihongo1',
  MINNA_NO_NIHONGO_2: 'minnaNoNihongo2',
  TRY_N5: 'TryN5',
  TRY_N4: 'TryN4',
  TRY_N3: 'TryN3',
  TRY_N2: 'TryN2',
  TRY_N1: 'TryN1'
  // pinku, orengi, blue
};

export const GRAMMAR_HAS_TO_REPEAT = true;
