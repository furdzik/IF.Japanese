const reducedAntonyms = (prev, current) => {
  if (prev.indexOf(current) === -1 || prev.length === 0) {
    prev.push(current);
  }

  return prev;
};

export const getAntonyms = (antonyms, senses) => {
  const newAntonyms = [];

  if (antonyms) {
    newAntonyms.push(antonyms);
  }

  senses.forEach((sensesAntonyms) => {
    if (sensesAntonyms.antonyms.length > 0) {
      sensesAntonyms.antonyms.forEach((antonym) => {
        newAntonyms.push(antonym.split(' ')[0]);
      });
    }
  });

  return newAntonyms.reduce(reducedAntonyms, []);
};
