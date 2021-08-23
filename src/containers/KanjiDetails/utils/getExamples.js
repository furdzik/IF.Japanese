import vocabJson from '@data/vocabulary.json';

import { getTags } from '@utils/commonDetails';

const IS_SHORT = true;

export const getExamples = (kanji) => {
  const newElements = [];

  const ownExamples = vocabJson.filter((el) => el.vocab.indexOf(kanji) !== -1);
  console.log(ownExamples);

  apiExamples.forEach((example) => {
    const [vocab, reading] = example.japanese.split('（');
    const exampleReading = reading.replace('）', '');
    const exampleVocab = vocab.replace('*', '');

    console.log(exampleVocab, '---', exampleReading);
    const ownExample = ownExamples.filter((el) => el.vocab === exampleVocab)[0] || null;
    console.log(ownExample);
    newElements.push({
      vocab: exampleVocab,
      reading: exampleReading,
      meaning: example.meaning?.english,
      tags: ownExample ? getTags({
        jlpt: ownExample?.level
      }, IS_SHORT) : null,
      status: ownExample ? {
        known: ownExample?.known,
        inProgress: ownExample?.inProgress,
        nowLearning: ownExample?.nowLearning
      } : null
    });
  });

  console.log(newElements);
  return newElements;
};
