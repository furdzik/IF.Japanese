import { combineReducers } from 'redux';

import Vocabulary from '@containers/Vocabulary/Vocabulary.reducer';
import VocabularyDetails from '@containers/VocabularyDetails/VocabularyDetails.reducer';
import Kanji from '@containers/Kanji/Kanji.reducer';

export default combineReducers({
  Vocabulary,
  VocabularyDetails,
  Kanji
});
