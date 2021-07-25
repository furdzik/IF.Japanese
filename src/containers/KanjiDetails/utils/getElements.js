export const getElements = (elements) => {
  const newElements = [];

  elements.forEach((element) => {
    newElements.push({
      japanese: element.japanese,
      meaning: element.meaning?.english
    });
  });

  return newElements;
};
