import { combineReducers } from 'redux';

import Vocabulary from '@containers/Vocabulary/Vocabulary.reducer';
import VocabularyDetails from '@containers/VocabularyDetails/VocabularyDetails.reducer';
import Kanji from '@containers/Kanji/Kanji.reducer';
import KanjiDetails from '@containers/KanjiDetails/KanjiDetails.reducer';
import Verbs from '@containers/Verbs/Verbs.reducer';
import Flashcards from '@containers/Flashcards/Flashcards.reducer';
import Grammar from '@containers/Grammar/Grammar.reducer';
import GrammarDetails from '@containers/GrammarDetails/GrammarDetails.reducer';

export default combineReducers({
  Vocabulary,
  VocabularyDetails,
  Kanji,
  KanjiDetails,
  Verbs,
  Flashcards,
  Grammar,
  GrammarDetails
});
