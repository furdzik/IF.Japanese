import React from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper
} from './DetailsSecondarySection.styles.js';

const DetailsSecondarySection = (props) => (
  <Wrapper className={props.className} width={props.width}>
    {props.children}
  </Wrapper>
);

DetailsSecondarySection.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  width: PropTypes.number
};

DetailsSecondarySection.defaultProps = {
  className: '',
  width: 30
};

export default DetailsSecondarySection;
