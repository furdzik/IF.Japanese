import { getTags } from '@utils/commonDetails';

const IS_SHORT = true;

export const prepareKanjiDetailsData = (kanjiDetails) => {
  const kanjiParts = [];

  kanjiDetails.forEach((el) => {
    kanjiParts.push({
      kanji: el.kanji,
      meaning: el.meanings.join(', '),
      reading: {
        onyomi: el.kun_readings,
        kunyomi: el.on_readings
      },
      status: {
        known: el.known,
        nowLearning: el.nowLearning,
        inProgress: el.inProgress
      },
      tags: getTags({
        isJoyo: el.joyo,
        jlpt: [el.level ? el.level.toString() : null],
        grade: el.grade,
        strokes: el.stroke_count.toString()
      }, IS_SHORT)
    });
  });

  return kanjiParts.length ? kanjiParts : null;
};
