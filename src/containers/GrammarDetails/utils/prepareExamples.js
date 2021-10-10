export const prepareExamples = (keys, examples) => {
  const newExample = [];

  examples.forEach((example) => {
    const tempExample = [];

    example.forEach((el) => {
      tempExample.push({
        word: el,
        grammarWord: keys.indexOf(el) > -1,
        grammarWordIndex: keys.indexOf(el)
      });
    });

    newExample.push(tempExample);
  });

  return newExample;
};
