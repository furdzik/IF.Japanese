import kanjiJson from '@data/kanji.json';

import { fetchKanji, fetchKanjiAlternative } from '@api';

const actionTypes = {
  GET_KANJI_DETAILS_INIT: 'KANJI/GET_DETAILS_INIT',
  GET_KANJI_DETAILS: 'KANJI/GET_DETAILS'
};

const initialState = {
  loading: true,
  level: null,
  known: null,
  inProgress: null,
  grade: null,
  kunyomi: null,
  onyomi: null,
  meaning: null,
  strokes: null,
  radical: null,
  examples: null,
  isJoyo: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_KANJI_DETAILS: {
      const { detailsAlternative, details, originKanji } = action.payload;
      let data = {
        level: originKanji.level,
        known: originKanji.known,
        inProgress: originKanji.inProgress,
        nowLearning: originKanji.nowLearning,
        isJoyo: originKanji.joyo
      };
      data = {
        ...data,
        grade: details?.references?.grade,
        kunyomi: detailsAlternative?.kun_readings.join(', '),
        onyomi: detailsAlternative?.on_readings.join(', '),
        meaning: details?.kanji?.meaning,
        numberOfStrokes: details.kanji?.strokes?.count,
        strokes: details.kanji?.strokes,
        radical: details?.radical,
        examples: details?.examples
      };

      return {
        ...state,
        ...data,
        loading: false
      };
    }

    case actionTypes.GET_KANJI_DETAILS_INIT: {
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

const getKanjiDetailsAction = (payload) => ({
  type: actionTypes.GET_KANJI_DETAILS,
  payload
});

const getKanjiDetailsInitAction = () => ({
  type: actionTypes.GET_KANJI_DETAILS_INIT
});

export const getKanjiDetails = (name) => (dispatch) => {
  dispatch(getKanjiDetailsInitAction());

  const originKanji = kanjiJson.filter((element) => element.kanji === name)[0];

  Promise.all(
    [
      fetchKanji(name),
      fetchKanjiAlternative(name)
    ]
  )
    .then(([details, detailsAlternative]) => {
      dispatch(getKanjiDetailsAction({ details, detailsAlternative, originKanji }));
    })
    .catch((error) => {
      throw new Error(error);
    });
};
