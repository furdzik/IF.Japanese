import { tagTypes } from '@config/constants';

import messages from '@utils/defaultMessages/details.messages';

const WANI_KANI_TEXT = 'wanikani';
const JLPT_TEXT = 'jlpt';

export const getTags = (
  {
    tags, isCommon, isJoyo, isJinmeiyo, isVerb, jlpt, isGrammar,
    grade, strokes, levelGroup, grammarOrigin
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

  if (isCommon && !isGrammar) {
    newTags.push({
      tagType: tagTypes.IS_COMMON,
      label: shortMsg ? (messages.commonShort)?.defaultMessage : (messages.common)?.defaultMessage
    });
  }

  if (isCommon && isGrammar) {
    newTags.push({
      tagType: tagTypes.IS_COMMON,
      label: (messages.commonGrammar)?.defaultMessage
    });
  }

  if (isJoyo) {
    newTags.push({
      tagType: tagTypes.JOYO,
      label: shortMsg
        ? (messages.joyoShort)?.defaultMessage
        : (messages.joyo)?.defaultMessage
    });
  }

  if (isJinmeiyo) {
    newTags.push({
      tagType: tagTypes.JINMEIYO,
      label: shortMsg
        ? (messages.jinmeiyoShort)?.defaultMessage
        : (messages.jinmeiyo)?.defaultMessage
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

  if (levelGroup) {
    newTags.push({
      tagType: tagTypes.LEVEL_GROUP,
      label: shortMsg
        ? (messages[`${levelGroup}Level`])?.defaultMessage
        : (messages.levelGroup)?.defaultMessage + (messages[`${levelGroup}Level`])?.defaultMessage
    });
  }

  if (grammarOrigin) {
    grammarOrigin.forEach((el) => {
      newTags.push({
        tagType: tagTypes.GRAMMAR_ORIGIN,
        label: `${(messages[el.originName])?.defaultMessage} chapter ${el.originChapter}`
      });
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
