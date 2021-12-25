import { tagTypes } from '@constants';

import messages from '@lang/defaultMessages/details.messages';

const WANI_KANI_TEXT = 'wanikani';
const JLPT_TEXT = 'jlpt';

const reducedJPLT = (prev, current) => {
  const prevNumber = Number(prev.replace('jlpt-n', ''));
  const currentNumber = Number(current.replace('jlpt-n', ''));

  if (currentNumber > prevNumber) {
    return current;
  }

  return prev;
};

export const getTags = (
  {
    tags, isCommon, isJoyo, isJinmeiyo, isVerb, jlpt, isGrammar,
    grade, strokes, levelGroup, grammarOrigin, isCounter
  },
  shortMsg = false
) => {
  const newTags = [];

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

  if (isVerb) {
    newTags.push({
      tagType: tagTypes.IS_VERB,
      label: (messages.conjugationText)?.defaultMessage
    });
  }

  if (isCounter) {
    newTags.push({
      tagType: tagTypes.COUNTER,
      label: (messages.counter)?.defaultMessage
    });
  }

  if (jlpt) {
    if (typeof jlpt === 'object' && jlpt.length) {
      const onlyOneJLPTTag = jlpt.reduce(reducedJPLT);

      newTags.push({
        tagType: tagTypes.JLPT,
        label: onlyOneJLPTTag.indexOf(JLPT_TEXT) > -1
          ? onlyOneJLPTTag.toUpperCase()
          : `${(messages.jlptText)?.defaultMessage}-${onlyOneJLPTTag}`
      });
    }
    if (typeof jlpt === 'number') {
      const level = jlpt.toString();
      newTags.push({
        tagType: tagTypes.JLPT,
        label: level.indexOf(JLPT_TEXT) > -1
          ? level.toUpperCase()
          : `${(messages.jlptText)?.defaultMessage}-${level}`
      });
    }
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
