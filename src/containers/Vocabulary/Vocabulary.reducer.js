import vocab from '@data/vocabulary.json';

import { KNOWN_VOCAB, IN_PROGRESS_VOCAB, NOT_KNOWN_VOCAB } from '@config/constants';

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
  selectedFilters: [KNOWN_VOCAB, IN_PROGRESS_VOCAB, NOT_KNOWN_VOCAB]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_VOCAB: {
      let knownList = [];
      let notKnownList = [];
      let inProgressList = [];
      let all = [];

      const vocabList = action.payload;
      const { selectedFilters } = state;

      if (selectedFilters.indexOf(KNOWN_VOCAB) > -1) {
        knownList = vocabList.filter((item) => item.known && !item.inProgress);
      }
      if (selectedFilters.indexOf(IN_PROGRESS_VOCAB) > -1) {
        inProgressList = vocabList.filter((item) => item.inProgress);
      }
      if (selectedFilters.indexOf(NOT_KNOWN_VOCAB) > -1) {
        notKnownList = vocabList.filter((item) => !item.known && !item.inProgress);
      }

      all = knownList.concat(inProgressList, notKnownList);

      return {
        ...state,
        vocab: all,
        vocabLength: {
          known: knownList.length,
          inProgress: inProgressList.length,
          all: all.length
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

  dispatch(setFilters(selectedFilters));
  dispatch(getVocabulary());
};
