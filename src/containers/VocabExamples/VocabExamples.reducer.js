import _cloneDeep from 'lodash/cloneDeep';

import { fetchJisho } from '@api';
import { getVocabExampleFromResponse } from './utils';

const MAX_REQUESTS_INDEX = 11; // from 0 - 11 indexes = 12 elements

const actionTypes = {
  GET_VOCAB_EXAMPLES_INIT: 'VOCAB_EXAMPLES/GET_VOCAB_INIT',
  GET_VOCAB_EXAMPLES: 'VOCAB_EXAMPLES/GET_VOCAB_EXAMPLES'
};

const initialState = {
  loading: true,
  showLoadMoreButton: false,
  vocabExamples: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_VOCAB_EXAMPLES: {
      const { vocabExamples, showLoadMoreButton } = action.payload;

      return {
        ...state,
        vocabExamples,
        showLoadMoreButton,
        loading: false
      };
    }

    case actionTypes.GET_VOCAB_EXAMPLES_INIT: {
      return {
        ...state,
        ...initialState,
        loading: true
      };
    }

    default: {
      return state;
    }
  }
}

const getVocabExamplesInitAction = () => ({
  type: actionTypes.GET_VOCAB_EXAMPLES_INIT
});

const getVocabExamplesAction = (payload) => ({
  type: actionTypes.GET_VOCAB_EXAMPLES,
  payload
});

export const getVocabExamples = (examples, lastElementIndex = 0) => (dispatch, getStore) => {
  if (lastElementIndex === 0) {
    dispatch(getVocabExamplesInitAction());
  }

  const exampleToSend = examples
    .filter((el, index) => (index <= lastElementIndex + MAX_REQUESTS_INDEX)
      && index >= lastElementIndex && index < examples.length);

  const exampleRequestToSend = exampleToSend
    .map(
      (el) => fetchJisho(el.reading ? `${el.vocab},${el.reading},${el.vocab}` : el.vocab)
    );

  Promise.all(
    exampleRequestToSend
  )
    .then((exampleResponse) => {
      const { vocabExamples } = getStore().VocabExamples;
      const newVocabExamples = _cloneDeep(vocabExamples);

      exampleToSend.forEach((exElement, exIndex) => {
        exampleResponse.forEach((response, responseIndex) => {
          if (
            exampleRequestToSend.length === exampleResponse.length
            && exIndex === responseIndex
          ) {
            const vocabFromResponse = getVocabExampleFromResponse(response, exElement);

            if (vocabFromResponse) {
              newVocabExamples.push(vocabFromResponse);
            }
          }
        });
      });

      dispatch(getVocabExamplesAction({
        vocabExamples: newVocabExamples,
        showLoadMoreButton: lastElementIndex + MAX_REQUESTS_INDEX < examples.length
      }));
    })
    .catch((error) => {
      throw new Error(error);
    });
};
