import React from 'react';
import PropTypes from 'prop-types';

import {
  Title,
  StyledIcon
} from './DetailsHeader.styles.js';

const DetailsHeader = (props) => (
  <Title className={props.className}>
    {
      props.iconPath ? (
        <StyledIcon iconType={props.iconType} path={props.iconPath} />
      ) : null
    }
    {props.children}
  </Title>
);

DetailsHeader.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  iconPath: PropTypes.string,
  iconType: PropTypes.string
};

DetailsHeader.defaultProps = {
  className: '',
  iconPath: null,
  iconType: null
};

export default DetailsHeader;
