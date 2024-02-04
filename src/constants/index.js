import detailsMessages from '@lang/messages/details.messages';

export * from './counters';
export * from './filters';
export * from './verbs';
export * from './menu';

/* VOCAB DETAILS */

export const TAG_TYPES = {
  isVerb: 'isVerb',
  isCommon: 'isCommon',
  jlpt: 'jlpt',
  joyo: 'joyo',
  jinmeiyo: 'jinmeiyo',
  other: 'other',
  grade: 'grade',
  levelGroup: 'levelGroup',
  grammarOrigin: 'grammarOrigin',
  counter: 'counter'
};

export const LIST_OF_READING_EXCEPTIONS = {
  periodOfMonths: {
    kanji: 'ヶ月',
    furigana: 'ヶげつ'
  }
};

export const KATAKANA_FURIGANA_EXCEPTIONS = {
  smallKa: {
    kanji: 'ヶ',
    furigana: 'か'
  }
};

export const DETAILS_HEADER_ICON_TYPES = {
  problem: 'problem',
  attention: 'attention'
};

/* KANA GAME */

export const KANA_TYPE = {
  both: 'both',
  hiragana: 'hiragana',
  katakana: 'katakana'
};

export const KANA_GAME_INIT = [KANA_TYPE.katakana, KANA_TYPE.hiragana];

/* GRAMMAR */
export const GRAMMAR_LEVELS = {
  level5: 5,
  level4: 4,
  level3: 3,
  level2: 2,
  level1: 1,
  other: 0
};

export const GRAMMAR_GROUPS = {
  elementaryLevel: 'elementaryLevel',
  intermediateLevel: 'intermediateLevel',
  advancedLevel: 'advancedLevel',
  all: 'all'
};

export const GRAMMAR_GROUPS_LABELS = {
  elementaryLevel: (detailsMessages.elementaryLevel)?.defaultMessage,
  intermediateLevel: (detailsMessages.intermediateLevel)?.defaultMessage,
  advancedLevel: (detailsMessages.advancedLevel)?.defaultMessage
};

export const GRAMMAR_ORIGIN_TYPES = {
  minnaNoNihongo1: 'minnaNoNihongo1',
  minnaNoNihongo2: 'minnaNoNihongo2',
  TryN5: 'TryN5',
  TryN4: 'TryN4',
  TryN3: 'TryN3',
  TryN2: 'TryN2',
  TryN1: 'TryN1'
};

/* OTHERS */
export const URL_SEPARATOR = ',';

export const ENTER_CODE = 13;
export const ESC_CODE = 27;

export const SECTION_TYPES = {
  primary: 'primary',
  secondary: 'secondary',
  name: 'name',
  other: 'other'
};

export const CHARACTER_TYPE = {
  furigana: 'furigana',
  kanji: 'kanji'
};

export const FLASHCARDS_MODES_TYPES = {
  reading: 'reading',
  writing: 'writing',
  meaning: 'meaning'
}

export const FLASHCARDS_MODES = [
  FLASHCARDS_MODES_TYPES.reading,
  FLASHCARDS_MODES_TYPES.writing,
  FLASHCARDS_MODES_TYPES.meaning
];

export const BUTTONS_VARIANTS = {
  primary: 'primary',
  secondary: 'secondary'
}

export const FLASH_CARDS_MODE_KEY = 'flashCardsMode';
