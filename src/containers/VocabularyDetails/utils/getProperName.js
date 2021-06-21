import { URL_SEPARATOR } from '@config/constants';

export const PROPER_NAME_TYPE = {
  KANJI: 'kanji',
  MEANING: 'meaning'
};

export const getProperName = (name, type) => {
  if (name.indexOf(URL_SEPARATOR) === 0) {
    return name;
  }

  const newName = name.split(URL_SEPARATOR);

  switch (type) {
    case PROPER_NAME_TYPE.KANJI:
      return name.indexOf(URL_SEPARATOR) > 0 ? newName[0] : name;

    case PROPER_NAME_TYPE.MEANING:
      return name.indexOf(URL_SEPARATOR) > 0 ? newName[1] : name
  }

  return name.indexOf(URL_SEPARATOR) > 0 ? newName[0] : name;
};
