import vocabJson from '@data/vocabulary.json';

export const getExamplesWords = (kanji, examples = []) => {
  const exampleWords = [];

  const ownExamples = vocabJson.filter((el) => el.vocab.indexOf(kanji) !== -1);

  ownExamples.forEach((el) => {
    exampleWords.push({
      vocab: el.vocab,
      reading: el?.meaning
    });
  });

  examples.forEach((el) => {
    const [vocab, reading] = el.japanese.split('（');
    const exampleVocab = vocab.replace('*', '');
    const exampleReading = reading.replace('）', '');

    if (exampleWords.map((ex) => ex.vocab).indexOf(exampleVocab) === -1) {
      exampleWords.push({
        vocab: exampleVocab,
        reading: exampleReading
      });
    }
  });

  return exampleWords;
};
