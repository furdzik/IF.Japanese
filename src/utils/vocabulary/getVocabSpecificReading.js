import { URL_SEPARATOR } from '@constants';

export const getVocabSpecificReading = (name) => {
  const newName = name.split(URL_SEPARATOR);

  return name.indexOf(URL_SEPARATOR) > 0 ? newName[2] : null;
};
