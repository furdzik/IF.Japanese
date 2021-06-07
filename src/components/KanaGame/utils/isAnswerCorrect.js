import kana from '@data/kana.json';

export const isAnswerCorrect = (answer, questionedKana) => {
  const questionedKanaElement = kana.filter(
    (el) => el.kana === questionedKana
  )[0];

  return questionedKanaElement.reading === answer;
};
