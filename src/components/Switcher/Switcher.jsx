import React from 'react';
import PropTypes from 'prop-types';

import {
  SwitcherWrapper
} from './Switcher.styles';

const Switcher = (props) => (
  <SwitcherWrapper
    onClick={props.onClick}
    checked={props.checked}
    disabled={props.disabled}
  />
);

Switcher.propTypes = {
  onClick: PropTypes.func.isRequired,
  checked: PropTypes.bool,
  disabled: PropTypes.bool
};

Switcher.defaultProps = {
  checked: false,
  disabled: false
};

export default Switcher;

