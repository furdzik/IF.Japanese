import React from 'react';
import PropTypes from 'prop-types';

import {
  AnchorWrapper
} from './Anchor.styles';

const Anchor = (props) => (
  <AnchorWrapper
    linkType={props.linkType}
    disabled={props.disabled}
  >
    {
      React.cloneElement(
        props.provider,
        {
          onClick: props.onClick
        },
        props.children
      )
    }
  </AnchorWrapper>
);

Anchor.propTypes = {
  children: PropTypes.node.isRequired,
  provider: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  linkType: PropTypes.oneOf(['button', 'buttonLink']),
  onClick: PropTypes.func
};

Anchor.defaultProps = {
  linkType: null,
  onClick: () => {},
  disabled: false
};

export default Anchor;
