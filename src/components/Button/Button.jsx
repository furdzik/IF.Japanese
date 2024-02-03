import React from 'react';
import PropTypes from 'prop-types';

import { BUTTONS_VARIANTS } from '@constants';

import {
  ButtonWrapper
} from './Button.styles';

const Button = (props) => (
  <ButtonWrapper
    className={props.className}
    disabled={props.disabled}
    variant={props.variant}
    onClick={props.onClick}
  >
    {props.children}
  </ButtonWrapper>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf([BUTTONS_VARIANTS.primary, BUTTONS_VARIANTS.secondary])
};

Button.defaultProps = {
  className: '',
  disabled: false,
  variant: BUTTONS_VARIANTS.primary,
  onClick: () => {}
};

export default Button;
