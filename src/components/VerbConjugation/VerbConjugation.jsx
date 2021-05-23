import React from 'react';
import PropTypes from 'prop-types';

import { vocabItemShape } from '@types/vocabShape';

import getConjugation from './utils/getConjugation';

const VerbConjugation = (props) => (
  <div className={props.className}>
    {props.verb?.main}
    {
      getConjugation(
        props.bunpou, props.verb?.verbGroup, props.inflection, props.teineiKei
      )
    }
  </div>
);

VerbConjugation.propTypes = {
  bunpou: PropTypes.string.isRequired,
  inflection: PropTypes.number.isRequired,
  verb: vocabItemShape.isRequired,
  className: PropTypes.string,
  teineiKei: PropTypes.bool
};

VerbConjugation.defaultProps = {
  teineiKei: false,
  className: ''
};

export default VerbConjugation;
