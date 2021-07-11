import { getBaseEnding } from './getBaseEnding';
import { getGrammarEnding } from './getGrammarEnding';
import { getSpecialMain } from './getSpecialMain';

export const getConjugation = (grammar, verbGroup, inflection, isPolite) => {
  const specialMain = getSpecialMain(grammar, verbGroup, inflection, isPolite);
  const grammarEnding = getGrammarEnding(grammar, verbGroup, inflection, isPolite);
  const baseEnding = getBaseEnding(grammar, verbGroup, inflection, isPolite);

  return specialMain + grammarEnding + baseEnding;
};
