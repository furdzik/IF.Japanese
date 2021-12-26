import React from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper,
  Dot
} from './SimpleLoader.styles';

const SimpleLoader = (props) => (
  <Wrapper
    className={props.className}
  >
    <Dot /><Dot /><Dot />
  </Wrapper>
);

SimpleLoader.propTypes = {
  className: PropTypes.string
};

SimpleLoader.defaultProps = {
  className: ''
};

export default SimpleLoader;
