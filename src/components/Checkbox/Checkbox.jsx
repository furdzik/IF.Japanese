import React from 'react';
import PropTypes from 'prop-types';

import {
  CheckboxLabel,
  CheckboxInput,
  CheckboxBox,
  LabelText
} from './Checkbox.styles';

const Checkbox = (props) => (
  <React.Fragment>
    <CheckboxLabel
      htmlFor={`checkbox_${props.name}_${props.value}`}
      isActive={props.checked}
      isDisabled={props.disabled}
    >
      <CheckboxInput
        type="checkbox"
        onChange={props.onChange}
        required={props.required}
        disabled={props.disabled}
        checked={props.checked}
        name={props.name}
        id={`checkbox_${props.name}_${props.value}`}
        value={props.value}
      />
      <CheckboxBox
        isActive={props.checked}
        isDisabled={props.disabled}
      />
      <LabelText
        isDisabled={props.disabled}
      >
        {props.children}
      </LabelText>
    </CheckboxLabel>
  </React.Fragment>
);

Checkbox.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  required: PropTypes.bool
};

Checkbox.defaultProps = {
  checked: false,
  disabled: false,
  required: false
};

export default Checkbox;
