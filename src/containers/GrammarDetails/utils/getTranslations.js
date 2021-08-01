export const getTranslations = (senses) => {
  const translations = [];
  if (senses) {
    senses.forEach((sens) => {
      translations.push(
        {
          englishDefinitions: sens.english_definitions,
          info: sens.info,
          links: sens.links,
          partsOfSpeech: sens.parts_of_speech,
          restrictions: sens.restrictions,
          seeAlso: sens.see_also,
          source: sens.source,
          tags: sens.tags
        }
      );
    });
  }

  return translations;
};
