import { tagTypes } from '@config/constants';

import messages from '@utils/defaultMessages/details.messages';

const WANI_KANI_TEXT = 'wanikani';
const JLPT_TEXT = 'jlpt';

export const getTags = (
  {
    tags, isCommon, isJoyo, isVerb, jlpt, grade, strokes
  },
  shortMsg = false
) => {
  const newTags = [];

  if (isVerb) {
    newTags.push({
      tagType: tagTypes.IS_VERB,
      label: (messages.conjugationText)?.defaultMessage
    });
  }
  if (isCommon) {
    newTags.push({
      tagType: tagTypes.IS_COMMON,
      label: shortMsg ? (messages.commonShort)?.defaultMessage : (messages.common)?.defaultMessage
    });
  }

  if (isJoyo) {
    newTags.push({
      tagType: tagTypes.JOYO,
      label: shortMsg ? (messages.joyoShort)?.defaultMessage : (messages.joyo)?.defaultMessage
    });
  }

  if (jlpt) {
    jlpt.forEach((el) => {
      if (el !== '0') {
        newTags.push({
          tagType: tagTypes.JLPT,
          label: el.indexOf(JLPT_TEXT) > -1
            ? el.toUpperCase()
            : `${(messages.jlptText)?.defaultMessage}-${el}`
        });
      }
    });
  }

  if (grade) {
    newTags.push({
      tagType: tagTypes.GRADE,
      label: `${(messages.grade)?.defaultMessage} ${grade}`
    });
  }

  if (strokes) {
    newTags.push({
      tagType: tagTypes.OTHER,
      label: `${(messages.strokes)?.defaultMessage} ${strokes}`
    });
  }

  if (tags) {
    tags.forEach((el) => {
      if (el.indexOf(WANI_KANI_TEXT) > -1) {
        const waniKaniLevel = el.replace(WANI_KANI_TEXT, '');

        newTags.push({
          tagType: tagTypes.OTHER,
          label: `${(messages.waniKaniText)?.defaultMessage} ${waniKaniLevel}`
        });
      } else {
        newTags.push({
          tagType: tagTypes.OTHER,
          label: el
        });
      }
    });
  }

  return newTags;
};
