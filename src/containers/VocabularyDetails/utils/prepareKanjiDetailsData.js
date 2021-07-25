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
      tags: {
        level: el.jlpt ? el.jlpt : 0,
        grade: el.grade,
        isJoyo: el.joyo,
        strokes: el.stroke_count
      }
    });
  });

  return kanjiParts;
};
