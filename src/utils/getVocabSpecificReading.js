import { URL_SEPARATOR } from '@config/constants';

export default (name) => {
  const newName = name.split(URL_SEPARATOR);

  return name.indexOf(URL_SEPARATOR) > 0 ? newName[2] : null;
};
