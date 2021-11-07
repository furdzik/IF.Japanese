import React from 'react';
import PropTypes from 'prop-types';

import { itemShape } from '@types/item';

import Checkbox from '@components/ui/Checkbox';
import Tooltip from '@components/ui/Tooltip';

import {
  CheckboxListWrapper,
  ListItem
} from './CheckboxList.styles';

const CHECKBOX_TOOLTIP_ID = 'checkbox';

const CheckboxList = (props) => (
  <CheckboxListWrapper
    isVertical={props.vertical}
    isCentered={props.centered}
  >
    {
      props.items.map((item) => (
        <ListItem
          key={`${item.name}_${item.label}_${item.value}`}
          data-tip={item.helper}
          data-for={CHECKBOX_TOOLTIP_ID}
        >
          <Checkbox
            name={props.name}
            checked={props.selected.indexOf(item.value) !== -1}
            required={props.required}
            disabled={props.disabled}
            onChange={() => props.onCheckboxClick(item.value)}
            value={item.value}
          >
            {item.label}
          </Checkbox>
        </ListItem>
      ))
    }
    <Tooltip id={CHECKBOX_TOOLTIP_ID} />
  </CheckboxListWrapper>
);

CheckboxList.propTypes = {
  items: PropTypes.arrayOf(itemShape).isRequired,
  name: PropTypes.string.isRequired,
  onCheckboxClick: PropTypes.func.isRequired,
  centered: PropTypes.bool,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  selected: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  vertical: PropTypes.bool
};

CheckboxList.defaultProps = {
  centered: false,
  disabled: false,
  required: false,
  selected: [],
  vertical: false
};

export default CheckboxList;
