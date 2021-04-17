import React from 'react';
import PropTypes from 'prop-types';

import { vocabShape } from '../VocabularyList/VocabularyList.types';

import getConjugation from './utils/getConjugation';

const VerbConjugation = (props) => {

  return (
    <div className={props.className}>
      {props.verb?.main}
      {
        getConjugation(
          props.bunpou, props.verb?.verbGroup, props.inflection, props.teineiKei
        )
      }
    </div>
  );
};

VerbConjugation.propTypes = {
  bunpou: PropTypes.string.isRequired,
  inflection: PropTypes.number.isRequired,
  verb: vocabShape.isRequired,
  className: PropTypes.string,
  teineiKei: PropTypes.bool
};

VerbConjugation.defaultProps = {
  teineiKei: false,
  className: ''
};

export default VerbConjugation;
