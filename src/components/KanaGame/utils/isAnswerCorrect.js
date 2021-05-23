import kana from '@data/kana.json';

export default (answer, questionedKana) => {
  const questionedKanaElement = kana.filter(
    (el) => el.kana === questionedKana
  )[0];

  return questionedKanaElement.reading === answer;
};
