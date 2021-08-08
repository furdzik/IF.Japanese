import grammarJson from '@data/grammar.json';

import { getTags } from '@utils/commonDetails';

const IS_SHORT = true;

export const getSimilarGrammar = (similarGrammar = []) => {
  const similarGrammarInfo = [];

  similarGrammar.forEach((similar) => {
    const grammar = grammarJson.filter((el) => similar === el.grammarId)[0];

    similarGrammarInfo.push({
      grammarId: grammar.grammarId,
      grammarName: grammar.grammarName,
      explanation: grammar.explanation,
      status: {
        known: grammar.known,
        nowLearning: grammar.nowLearning,
        inProgress: grammar.inProgress,
        toRepeat: grammar.toRepeat
      },
      tags: getTags({
        jlpt: [grammar.level ? grammar.level.toString() : null],
        levelGroup: grammar.levelGroup,
        grammarOrigin: grammar.grammarOrigin
      }, IS_SHORT)
    });
  });

  return similarGrammarInfo;
};
