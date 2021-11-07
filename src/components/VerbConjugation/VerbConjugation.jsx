import React from 'react';
import PropTypes from 'prop-types';

import { vocabItemShape } from '@types/vocab';

import { getConjugation } from './utils';

const VerbConjugation = (props) => (
  <div className={props.className}>
    {props.verb?.main}
    {
      getConjugation(
        props.grammar, props.verb?.verbGroup, props.inflection, props.politeForm
      )
    }
  </div>
);

VerbConjugation.propTypes = {
  grammar: PropTypes.string.isRequired,
  inflection: PropTypes.number.isRequired,
  verb: vocabItemShape.isRequired,
  className: PropTypes.string,
  politeForm: PropTypes.bool
};

VerbConjugation.defaultProps = {
  politeForm: false,
  className: ''
};

export default VerbConjugation;
