import React from 'react';

import { filtersLengthShape } from '@types/filtersLengthShape';

import {
  Wrapper,
  KnownProgress,
  InProgressProgress
} from './ProgressBar.styles.js';

const ProgressBar = (props) => {
  const calculatePercent = (percent) => (percent * 100) / props.length.all;

  return (
    <Wrapper>
      <KnownProgress percent={calculatePercent(props.length.known)} />
      <InProgressProgress percent={calculatePercent(props.length.inProgress)} />
    </Wrapper>
  );
};

ProgressBar.propTypes = {
  length: filtersLengthShape.isRequired
};

export default ProgressBar;
