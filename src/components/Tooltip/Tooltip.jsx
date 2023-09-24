import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledTooltip
} from './Tooltip.styles.js';

const Tooltip = (props) => (
  <StyledTooltip
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
