import { getBaseEnding } from './getBaseEnding';
import getBunpouEnding from './getBunpouEnding';
import getSpecialMain from './getSpecialMain';

export default (bunpou, verbGroup, inflection, isPolite) => {
  const specialMain = getSpecialMain(bunpou, verbGroup, inflection, isPolite);
  const bunpouEnding = getBunpouEnding(bunpou, verbGroup, inflection, isPolite);
  const baseEnding = getBaseEnding(bunpou, verbGroup, inflection, isPolite);

  return specialMain + bunpouEnding + baseEnding;
};
