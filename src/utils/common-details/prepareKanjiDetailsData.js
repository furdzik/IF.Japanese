import { getTags } from './getTags';

const IS_SHORT = true;

export const prepareKanjiDetailsData = (kanjiDetails) => {
  const kanjiParts = [];

  kanjiDetails.forEach((el) => {
    kanjiParts.push({
      kanji: el.kanji,
      meaning: el.meanings.join(', '),
      reading: {
        onyomi: el.on_readings.join(', '),
        kunyomi: el.kun_readings.join(', ')
      },
      status: {
        known: el.known,
        nowLearning: el.nowLearning,
        inProgress: el.inProgress
      },
      tags: getTags({
        isJoyo: el.joyo,
        isJinmeiyo: el.jinmeiyo,
        jlpt: el?.level || el?.jlpt,
        grade: el.grade,
        strokes: el.stroke_count.toString()
      }, IS_SHORT)
    });
  });

  return kanjiParts.length ? kanjiParts : null;
};
