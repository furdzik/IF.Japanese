import kanjiJson from '@data/kanji.json';

import { fetchKanji, fetchKanjiAlternative } from '@api';

const actionTypes = {
  GET_KANJI_DETAILS_INIT: 'KANJI/GET_DETAILS_INIT',
  GET_KANJI_DETAILS: 'KANJI/GET_DETAILS'
};

const initialState = {
  loading: false,
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
      if (detailsAlternative) {
        data = {
          ...data,
          grade: detailsAlternative.grade,
          kunyomi: detailsAlternative?.kun_readings.join(', '),
          onyomi: detailsAlternative?.on_readings.join(', '),
          meaning: { english: detailsAlternative?.meanings.join(', ') },
          numberOfStrokes: detailsAlternative?.stroke_count,
          strokes: null,
          radical: null,
          examples: null
        };
      } else {
        data = {
          ...data,
          grade: details?.references?.grade,
          kunyomi: details?.kanji?.kunyomi?.hiragana,
          onyomi: details?.kanji?.onyomi?.katakana,
          meaning: details?.kanji?.meaning,
          numberOfStrokes: details.kanji?.strokes?.count,
          strokes: details.kanji?.strokes,
          radical: details?.radical,
          examples: details?.examples
        };
      }

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

  fetchKanji(name)
    .then((details) => {
      if (details.error) {
        fetchKanjiAlternative(name).then((detailsAlternative) => {
          dispatch(getKanjiDetailsAction({ detailsAlternative, originKanji }));
        });
      } else {
        dispatch(getKanjiDetailsAction({ details, originKanji }));
      }
    })
    .catch((error) => {
      throw new Error(error);
    });
};
