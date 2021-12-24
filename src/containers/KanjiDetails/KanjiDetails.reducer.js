import kanjiJson from '@data/kanji.json';

import { fetchKanji, fetchKanjiAlternative } from '@api';

import { getTags, prepareKanjiDetailsData } from '@utils/common-details';

import {
  getExamplesWords,
  getSimilarKanjiData
} from './utils';

const actionTypes = {
  GET_KANJI_DETAILS_INIT: 'KANJI/GET_DETAILS_INIT',
  GET_KANJI_DETAILS: 'KANJI/GET_DETAILS'
};

const initialState = {
  additionalExplanation: null,
  examples: [],
  meaning: null,
  metadata: null,
  problems: null,
  radicals: null,
  reading: null,
  status: null,
  strokes: null,
  tags: [],
  loading: true
};

export default function kanjiDetailsReducer (state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_KANJI_DETAILS: {
      const {
        detailsAlternative, details, kanji, similarKanji
      } = action.payload;

      return {
        ...state,
        meaning: detailsAlternative?.meanings.join(', '),
        reading: {
          onyomi: detailsAlternative?.on_readings.join(', '),
          kunyomi: detailsAlternative?.kun_readings.join(', ')
        },
        strokes: details ? {
          count: details?.kanji?.strokes?.count,
          graphs: details?.kanji?.strokes?.images
        } : null,
        radicals: null,
        similarKanji: similarKanji ? prepareKanjiDetailsData(similarKanji) : [],
        status: {
          known: kanji.known,
          inProgress: kanji.inProgress,
          nowLearning: kanji.nowLearning
        },
        examples: getExamplesWords(kanji?.kanji, details?.examples),
        metadata: {
          slug: kanji?.kanji
        },
        tags: getTags({
          jlpt: kanji.level,
          isJoyo: kanji.joyo,
          isJinmeiyo: kanji.jinmeiyo,
          grade: detailsAlternative?.grade,
          strokes: details?.kanji?.strokes?.count
        }),
        problems: kanji?.problems,
        additionalExplanation: kanji?.additionalExplanation,
        loading: false,
        apiError: !detailsAlternative && !details
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

  const kanji = kanjiJson.filter((element) => element.kanji === name)[0];

  kanji.similarKanji = getSimilarKanjiData(name);

  const similarKanjiRequests = kanji.similarKanji?.map((el) => fetchKanjiAlternative(el)) || [];

  Promise.all(
    [
      fetchKanji(name),
      fetchKanjiAlternative(name),
      ...similarKanjiRequests
    ]
  )
    .then(([details, detailsAlternative, ...similarKanjiRes]) => {
      const similarKanji = [];

      if (similarKanjiRes) {
        similarKanjiRes.forEach((similar) => {
          similarKanji.push({
            ...similar,
            ...kanjiJson.filter((jsonElement) => jsonElement.kanji === similar.kanji)[0]
          });
        });
      }

      dispatch(getKanjiDetailsAction({
        details: details.error ? null : details,
        detailsAlternative,
        kanji,
        similarKanji
      }));
    })
    .catch(() => {
      dispatch(getKanjiDetailsAction({
        details: null,
        detailsAlternative: null,
        kanji,
        similarKanji: null
      }));
    });
};
