import { MAX_NUMBER_INPUT } from '@config/constants';

const isLastCharAllowed = (value) => !!(value.length > 0 && value[value.length - 1].match(/[0-9]/));

export default (value) => {
  const maxLength = value.length > MAX_NUMBER_INPUT + 1;

  if (value === '' && !maxLength) {
    return null;
  }
  if (isLastCharAllowed(value) && !maxLength) {
    return parseInt(value, 10);
  }

  return value.substr(0, value.length - 1);
};
