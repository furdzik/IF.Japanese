import React from 'react';
import { useIntl } from 'react-intl';

import defaultMessages from '@utils/default.messages';
import { filtersLengthShape } from '@types/filtersShape';

import {
  Wrapper,
  LegendList,
  LegendItem
} from './Legend.styles.js';

const Legend = (props) => {
  const intl = useIntl();

  return (
    <Wrapper>
      <LegendList>
        <LegendItem>
          {intl.formatMessage(defaultMessages.known)}: {props.length.known}
        </LegendItem>
        <LegendItem>
          {intl.formatMessage(defaultMessages.nowLearning)}: {props.length.nowLearning}
        </LegendItem>
        <LegendItem>
          {intl.formatMessage(defaultMessages.inProgress)}: {props.length.inProgress}
        </LegendItem>
        <LegendItem>
          {intl.formatMessage(defaultMessages.notKnown)}: {props.length.notKnown}
        </LegendItem>
        <LegendItem>
          <span>{intl.formatMessage(defaultMessages.all)}:&nbsp;</span>
          {props.length.started} / {props.length.all}
        </LegendItem>
      </LegendList>
    </Wrapper>
  );
};

Legend.propTypes = {
  length: filtersLengthShape.isRequired
};

export default Legend;
