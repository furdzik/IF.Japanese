const actionTypes = {
  GET_KANJI: 'KANJI/GET_KANJI'
};

const initialState = {
  loading: false,
  kanji: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_KANJI: {
      const kanji = [];

      return {
        ...state,
        kanji
      };
    }

    default:
      return state;
  }
}

export const getKanji = (payload) => ({
  type: actionTypes.GET_KANJI,
  payload: payload
});
