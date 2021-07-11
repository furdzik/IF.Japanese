import { tagTypes } from '@config/constants';

import messages from '@containers/VocabularyDetails/VocabularyDetails.messages';

export const getTags = (tags, verb, jlpt, isCommon) => {
  const newTags = [];

  if (verb) {
    newTags.push({
      tagType: tagTypes.IS_VERB,
      label: (messages.conjugationText)?.defaultMessage
    });
  }
  if (isCommon) {
    newTags.push({
      tagType: tagTypes.IS_COMMON,
      label: (messages.common)?.defaultMessage
    });
  }
  if (jlpt) {
    jlpt.forEach((el) => {
      newTags.push({
        tagType: tagTypes.JLPT,
        label: el
      });
    });
  }

  tags.forEach((el) => {
    const waniKaniLevel = el.replace('wanikani', '');

    newTags.push({
      tagType: tagTypes.OTHER,
      label: `wanikani: level ${waniKaniLevel}`
    });
  });

  return newTags;
};
