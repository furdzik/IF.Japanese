import grammarJson from '@data/grammar.json';

export const getSimilarGrammar = (similarGrammar = []) => {
  const similarGrammarInfo = [];

  similarGrammar.forEach((similar) => {
    similarGrammarInfo.push(grammarJson.filter((el) => similar === el.grammarId)[0]);
  });

  return similarGrammarInfo;
};
