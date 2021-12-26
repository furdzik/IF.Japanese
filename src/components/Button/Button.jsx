import React from 'react';
import PropTypes from 'prop-types';

import {
  ButtonWrapper
} from './Button.styles';

const Button = (props) => (
  <ButtonWrapper
    className={props.className}
    disabled={props.disabled}
    onClick={props.onClick}
  >
    {props.children}
  </ButtonWrapper>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};

Button.defaultProps = {
  className: '',
  disabled: false,
  onClick: () => {}
};

export default Button;
