import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

import { filtersLengthShape } from '@types/filters';

import defaultMessages from '@lang/messages/default.messages';

import Tooltip from '@components/Tooltip';

import {
  Wrapper,
  LegendList,
  LegendItem
} from './Legend.styles.js';

const LEGEND_TOOLTIP_ID = 'legend';

const Legend = (props) => {
  const intl = useIntl();

  return (
    <Wrapper>
      <LegendList>
        <LegendItem
          data-tooltip-content={intl.formatMessage(defaultMessages.knownHelper)}
          data-tooltip-id={LEGEND_TOOLTIP_ID}
        >
          {intl.formatMessage(defaultMessages.known)}: {props.length.known}
        </LegendItem>
        {
          props.hasToRepeat ? (
            <LegendItem
              data-tooltip-content={intl.formatMessage(defaultMessages.toRepeatHelper)}
              data-tooltip-id={LEGEND_TOOLTIP_ID}
            >
              {intl.formatMessage(defaultMessages.toRepeat)}: {props.length.toRepeat}
            </LegendItem>
          ) : null
        }
        <LegendItem
          data-tooltip-content={intl.formatMessage(defaultMessages.nowLearningHelper)}
          data-tooltip-id={LEGEND_TOOLTIP_ID}
        >
          {intl.formatMessage(defaultMessages.nowLearning)}: {props.length.nowLearning}
        </LegendItem>
        <LegendItem
          data-tooltip-content={intl.formatMessage(defaultMessages.inProgressHelper)}
          data-tooltip-id={LEGEND_TOOLTIP_ID}
        >
          {intl.formatMessage(defaultMessages.inProgress)}: {props.length.inProgress}
        </LegendItem>
        <LegendItem
          data-tooltip-content={intl.formatMessage(defaultMessages.notKnownHelper)}
          data-tooltip-id={LEGEND_TOOLTIP_ID}
        >
          {intl.formatMessage(defaultMessages.notKnown)}: {props.length.notKnown}
        </LegendItem>
        <LegendItem
          data-tooltip-content={intl.formatMessage(defaultMessages.allHelper)}
          data-tooltip-id={LEGEND_TOOLTIP_ID}
        >
          <span>{intl.formatMessage(defaultMessages.all)}:&nbsp;</span>
          {props.length.started} / {props.length.all}
        </LegendItem>
      </LegendList>
      <Tooltip id={LEGEND_TOOLTIP_ID} place="bottom" />
    </Wrapper>
  );
};

Legend.propTypes = {
  length: filtersLengthShape.isRequired,
  hasToRepeat: PropTypes.bool
};

Legend.defaultProps = {
  hasToRepeat: false
};

export default Legend;
