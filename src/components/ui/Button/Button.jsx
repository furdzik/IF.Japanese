import React from 'react';
import PropTypes from 'prop-types';

import {
  ButtonWrapper
} from './Button.styles';

const Button = (props) => (
  <ButtonWrapper
    disabled={props.disabled}
    onClick={props.onClick}
  >
    {props.children}
  </ButtonWrapper>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};

Button.defaultProps = {
  onClick: () => {},
  disabled: false
};

export default Button;
