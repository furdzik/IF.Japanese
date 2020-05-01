import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './Container.styles.js';

const Container = (props) => (
  <Wrapper>
    {props.children}
  </Wrapper>
);

Container.propTypes = {
  children: PropTypes.node.isRequired
};

export default Container;
