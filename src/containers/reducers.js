import { combineReducers } from 'redux';

import Vocabulary from '@containers/Vocabulary/Vocabulary.reducer';
import VocabularyDetails from '@containers/VocabularyDetails/VocabularyDetails.reducer';

export default combineReducers({
  Vocabulary,
  VocabularyDetails
});
