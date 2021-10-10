import React from 'react';
import PropTypes from 'prop-types';

import Icon from '@mdi/react';

import {
  Title,
  IconWrapper
} from './DetailsHeader.styles.js';

const DetailsHeader = (props) => (
  <Title className={props.className} small={props.small}>
    {
      props.iconPath ? (
        <IconWrapper iconType={props.iconType}>
          <Icon path={props.iconPath} size={1.2} />
        </IconWrapper>
      ) : null
    }
    {props.children}
  </Title>
);

DetailsHeader.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  iconPath: PropTypes.string,
  iconType: PropTypes.string,
  small: PropTypes.bool
};

DetailsHeader.defaultProps = {
  className: '',
  iconPath: null,
  iconType: null,
  small: false
};

export default DetailsHeader;
