import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledReactTooltip
} from './Tooltip.styles.js';

const Tooltip = (props) => (
  <StyledReactTooltip
    effect="solid"
    id={props.id}
    place={props.place}
  />
);

Tooltip.propTypes = {
  id: PropTypes.string.isRequired,
  place: PropTypes.string
};

Tooltip.defaultProps = {
  place: 'top'
};

export default Tooltip;
