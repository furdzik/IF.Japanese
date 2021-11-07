import grammarJson from '@data/grammar.json';
import similarGrammarJson from '@data/similar-grammar.json';

import { getTags } from '@utils/common-details';

const IS_SHORT = true;

export const getSimilarGrammar = (grammarId = []) => {
  const similarGrammarInfo = [];
  const similarGrammar = [];

  similarGrammarJson.forEach((similarGrammarSet) => {
    if (similarGrammarSet.indexOf(grammarId) !== -1) {
      similarGrammar.push(...similarGrammarSet.filter((el) => el !== grammarId));
    }
  });

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
        jlpt: grammar.level,
        isCommon: grammar.isCommon,
        levelGroup: grammar.levelGroup,
        grammarOrigin: grammar.grammarOrigin
      }, IS_SHORT)
    });
  });

  return similarGrammarInfo;
};
