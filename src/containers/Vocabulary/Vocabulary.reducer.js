import vocab from '@data/vocabulary.json';

import {
  LEVEL_5_VOCAB,
  LEVEL_4_VOCAB,
  LEVEL_3_VOCAB,
  LEVEL_2_VOCAB,
  LEVEL_1_VOCAB,
  OTHER_VOCAB
} from '@config/constants';

import { getSelectedFiltersInitialValue, oneOfN5toN1Filters, getKnownUnknownFilters } from './Vocabulary.utils';

const actionTypes = {
  GET_VOCAB: 'VOCABULARY/GET_VOCAB',
  SET_FILTERS: 'VOCABULARY/SET_FILTERS'
};

const initialState = {
  loading: false,
  vocab: null,
  vocabLength: {
    known: 0,
    inProgress: 0,
    notKnown: 0
  },
  selectedFilters: getSelectedFiltersInitialValue()
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_VOCAB: {
      const vocabList = action.payload;
      const { selectedFilters } = state;
      let list = {
        knownList: [],
        notKnownList: [],
        inProgressList: [],
        n5: [],
        n4: [],
        n3: [],
        n2: [],
        n1: [],
        other: [],
        all: []
      };

      // N5..N1 filters
      if (oneOfN5toN1Filters(selectedFilters)) {
        if (selectedFilters.indexOf(LEVEL_5_VOCAB) > -1) {
          list.n5 = vocabList.filter((item) => item.level === 5);
        }
        if (selectedFilters.indexOf(LEVEL_4_VOCAB) > -1) {
          list.n4 = vocabList.filter((item) => item.level === 4);
        }
        if (selectedFilters.indexOf(LEVEL_3_VOCAB) > -1) {
          list.n3 = vocabList.filter((item) => item.level === 3);
        }
        if (selectedFilters.indexOf(LEVEL_2_VOCAB) > -1) {
          list.n2 = vocabList.filter((item) => item.level === 2);
        }
        if (selectedFilters.indexOf(LEVEL_1_VOCAB) > -1) {
          list.n1 = vocabList.filter((item) => item.level === 1);
        }
        if (selectedFilters.indexOf(OTHER_VOCAB) > -1) {
          list.other = vocabList.filter((item) => item.level === 0);
        }

        list.all = list.n5.concat(list.n4, list.n3, list.n2, list.n1, list.other);

        list = getKnownUnknownFilters(selectedFilters, list.all);
      } else {
        // known / not known filters
        list = getKnownUnknownFilters(selectedFilters, vocabList);
      }

      list.all = list.knownList.concat(list.inProgressList, list.notKnownList);

      return {
        ...state,
        vocab: list.all,
        vocabLength: {
          known: list.knownList.length,
          inProgress: list.inProgressList.length,
          all: list.all.length
        }
      };
    }

    case actionTypes.SET_FILTERS: {
      return {
        ...state,
        selectedFilters: action.payload
      };
    }

    default:
      return state;
  }
}

export const getVocabulary = () => ({
  type: actionTypes.GET_VOCAB,
  payload: vocab
});

export const setFilters = (payload) => ({
  type: actionTypes.SET_FILTERS,
  payload
});

export const changeFilters = (filter) => (dispatch, getStore) => {
  const { selectedFilters } = getStore().Vocabulary;

  if (selectedFilters.indexOf(filter) > -1) {
    selectedFilters.splice(selectedFilters.indexOf(filter), 1);
  } else {
    selectedFilters.push(filter);
  }

  localStorage.setItem('selectedFilters', JSON.stringify(selectedFilters));
  dispatch(setFilters(selectedFilters));
  dispatch(getVocabulary());
};
