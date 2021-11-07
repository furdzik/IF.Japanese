import React from 'react';

import { filtersLengthShape } from '@types/filters';

import {
  Wrapper,
  KnownProgress,
  ToRepeatProgress,
  InProgressProgress,
  NowLearningProgress
} from './ProgressBar.styles.js';

const ProgressBar = (props) => {
  const calculatePercent = (percent) => (percent * 100) / props.length.all;

  return (
    <Wrapper>
      <KnownProgress percent={calculatePercent(props.length.known)} />
      <ToRepeatProgress percent={calculatePercent(props.length.toRepeat)} />
      <NowLearningProgress percent={calculatePercent(props.length.nowLearning)} />
      <InProgressProgress percent={calculatePercent(props.length.inProgress)} />
    </Wrapper>
  );
};

ProgressBar.propTypes = {
  length: filtersLengthShape.isRequired
};

export default ProgressBar;
