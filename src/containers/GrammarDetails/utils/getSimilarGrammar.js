import grammarJson from '@data/grammar.json';

export const getSimilarGrammar = (similarGrammar = []) => {
  console.log(similarGrammar);

  let similarGrammarInfo = [];

  similarGrammar.forEach((similar) => {
    similarGrammarInfo = grammarJson.filter((el) => similar === el.grammarId);
  });

  console.log(similarGrammarInfo);
};
