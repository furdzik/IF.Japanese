import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

import { filtersLengthShape } from '@types/filters';

import defaultMessages from '@lang/defaultMessages/default.messages';

import Tooltip from '@components/ui/Tooltip';

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
          data-tip={intl.formatMessage(defaultMessages.knownHelper)}
          data-for={LEGEND_TOOLTIP_ID}
        >
          {intl.formatMessage(defaultMessages.known)}: {props.length.known}
        </LegendItem>
        {
          props.hasToRepeat ? (
            <LegendItem
              data-tip={intl.formatMessage(defaultMessages.toRepeatHelper)}
              data-for={LEGEND_TOOLTIP_ID}
            >
              {intl.formatMessage(defaultMessages.toRepeat)}: {props.length.toRepeat}
            </LegendItem>
          ) : null
        }
        <LegendItem
          data-tip={intl.formatMessage(defaultMessages.nowLearningHelper)}
          data-for={LEGEND_TOOLTIP_ID}
        >
          {intl.formatMessage(defaultMessages.nowLearning)}: {props.length.nowLearning}
        </LegendItem>
        <LegendItem
          data-tip={intl.formatMessage(defaultMessages.inProgressHelper)}
          data-for={LEGEND_TOOLTIP_ID}
        >
          {intl.formatMessage(defaultMessages.inProgress)}: {props.length.inProgress}
        </LegendItem>
        <LegendItem
          data-tip={intl.formatMessage(defaultMessages.notKnownHelper)}
          data-for={LEGEND_TOOLTIP_ID}
        >
          {intl.formatMessage(defaultMessages.notKnown)}: {props.length.notKnown}
        </LegendItem>
        <LegendItem
          data-tip={intl.formatMessage(defaultMessages.allHelper)}
          data-for={LEGEND_TOOLTIP_ID}
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
