import React from 'react';
import PropTypes from 'prop-types';

import LoaderIcon from './LoaderIcon';

import {
  LoaderWrapper,
  Spinner,
  CenterWrapper
} from './Loader.styles';

const Loader = (props) => {
  const loader = (
    <LoaderWrapper
      covered={props.covered}
      fixed={props.fixed}
      static={props.static}
      transparent={props.transparent}
      center={props.center}
    >
      <Spinner>
        <LoaderIcon />
      </Spinner>
    </LoaderWrapper>
  );

  return props.center ? (
    <CenterWrapper>
      {loader}
    </CenterWrapper>
  ) : loader;
};

Loader.propTypes = {
  center: PropTypes.bool,
  covered: PropTypes.bool,
  fixed: PropTypes.bool,
  static: PropTypes.bool,
  transparent: PropTypes.bool
};

Loader.defaultProps = {
  center: true,
  covered: false,
  fixed: false,
  static: false,
  transparent: false
};

export default Loader;
