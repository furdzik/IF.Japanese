import menuMessages from '@lang/defaultMessages/menu.messages';

/* MENU */

export const MENU_ID = {
  vocab: 0,
  kanji: 1,
  verbs: 2,
  grammar: 3,
  grammarPoliteness: 4,
  others: 5,
  othersGame: 6,
  othersFlashcards: 7
};

export const MENU = [
  {
    id: MENU_ID.vocab,
    name: (menuMessages.vocabText)?.defaultMessage,
    label: (menuMessages.vocabLabel)?.defaultMessage,
    link: '/'
  },
  {
    id: MENU_ID.kanji,
    name: (menuMessages.kanjiText)?.defaultMessage,
    label: (menuMessages.kanjiLabel)?.defaultMessage,
    link: '/kanji'
  },
  {
    id: MENU_ID.verbs,
    name: (menuMessages.verbsText)?.defaultMessage,
    label: (menuMessages.verbsLabel)?.defaultMessage,
    link: '/verbs'
  },
  {
    id: MENU_ID.grammar,
    name: (menuMessages.grammarText)?.defaultMessage,
    label: (menuMessages.grammarLabel)?.defaultMessage,
    link: '/grammar'
  },
  {
    id: MENU_ID.others,
    name: (menuMessages.othersText)?.defaultMessage,
    label: (menuMessages.othersLabel)?.defaultMessage,
    link: '/others'
  }
];

export const grammarMenu = [
  {
    id: MENU_ID.grammarPoliteness,
    name: (menuMessages.grammarFormsText)?.defaultMessage,
    label: (menuMessages.grammarFormsLabel)?.defaultMessage,
    link: '/forms'
  },
  {
    id: MENU_ID.grammarPoliteness,
    name: (menuMessages.grammarPolitenessText)?.defaultMessage,
    label: (menuMessages.grammarPolitenessLabel)?.defaultMessage,
    link: '/grammar-politeness'
  },
  {
    id: MENU_ID.grammarPoliteness,
    name: (menuMessages.expressionsText)?.defaultMessage,
    label: (menuMessages.expressionsLabel)?.defaultMessage,
    link: '/expressions'
  }
];

export const OTHERS_MENU = [
  {
    id: MENU_ID.othersGame,
    name: (menuMessages.kanaGameText)?.defaultMessage,
    label: (menuMessages.kanaGameLabel)?.defaultMessage,
    link: '/kana-game'
  },
  {
    id: MENU_ID.othersFlashcards,
    name: (menuMessages.flashcardsText)?.defaultMessage,
    label: (menuMessages.flashcardsLabel)?.defaultMessage,
    link: '/flashcards'
  }
];
