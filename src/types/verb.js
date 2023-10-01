import PropTypes from 'prop-types';

import { statusShape } from './commonDetails';

export const verbItemShape = PropTypes.shape({
  main: PropTypes.string,
  verbGroup: PropTypes.string,
  verbType: PropTypes.string,
  oppositionVerb: PropTypes.shape({
    status: statusShape
  })
});

export const verbShape = PropTypes.arrayOf(verbItemShape);

export const verbsLengthType = PropTypes.shape({
  all: PropTypes.number,
  inProgress: PropTypes.number,
  notKnown: PropTypes.number
});
