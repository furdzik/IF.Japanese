import grammarJson from '@data/grammar.json';

import { getTags } from '@utils/commonDetails';

import { getSimilarGrammar } from './utils';

const actionTypes = {
  GET_GRAMMAR_DETAILS_INIT: 'GRAMMAR/GET_GRAMMAR_DETAILS_INIT',
  GET_GRAMMAR_DETAILS: 'GRAMMAR/GET_GRAMMAR_DETAILS'
};

const initialState = {
  grammarName: '',
  status: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_GRAMMAR_DETAILS: {
      const grammar = action.payload;
      console.log(grammar);
      return {
        ...state,
        grammarName: grammar.grammarName,
        status: {
          known: grammar.known,
          toRepeat: grammar.toRepeat,
          nowLearning: grammar.nowLearning,
          inProgress: grammar.inProgress
        },
        tags: getTags({
          tags: [],
          isGrammar: true,
          isCommon: grammar.isCommon,
          jlpt: [grammar.level.toString()],
          levelGroup: grammar.levelGroup,
          grammarOrigin: grammar.origin
        }),
        similarGrammar: getSimilarGrammar(grammar.similarGrammar),
        examples: grammar.examples,
        explanation: grammar.explanation,
        problems: grammar.problems,
        loading: false
      };
    }

    case actionTypes.GET_GRAMMAR_DETAILS_INIT: {
      return {
        ...state,
        ...initialState,
        loading: true
      };
    }

    default:
      return state;
  }
}

const getGrammarDetailsAction = (payload) => ({
  type: actionTypes.GET_GRAMMAR_DETAILS,
  payload
});

const getGrammarDetailsInitAction = () => ({
  type: actionTypes.GET_GRAMMAR_DETAILS_INIT
});

export const getGrammarDetails = (grammarId) => (dispatch) => {
  dispatch(getGrammarDetailsInitAction());

  const data = grammarJson.find((el) => el.grammarId === grammarId);

  dispatch(getGrammarDetailsAction(data));
};
