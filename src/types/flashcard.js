import PropTypes from 'prop-types';

import { vocabItemShape } from '@types/vocab';

export const flashcardShape = PropTypes.shape({
  vocab: PropTypes.string.isRequired,
  reading: PropTypes.string.isRequired,
  meaning: PropTypes.string.isRequired,
  moreLink: PropTypes.string.isRequired
});

export const additionalInfoShape = vocabItemShape;
