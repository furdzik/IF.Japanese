import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { useIntl } from 'react-intl';

import { useTheme } from '@emotion/react';

import { mdiExclamationThick, mdiCheck, mdiClose } from '@mdi/js';
import Icon from '@mdi/react';

import { DETAILS_HEADER_ICON_TYPES } from '@config/constants';

import { problemsShape } from '@types/commonDetailsShape';

import DetailsHeader from '@components/DetailsHeader';

import {
  Wrapper,
  ProblemsList,
  ProblemsListItem,
  Label,
  BoxWrapper,
  FrequencyBar,
  Bar
} from './DetailsProblems.styles.js';
import messages from './DetailsProblems.messages';

const DetailsProblems = (props) => {
  const theme = useTheme();
  const intl = useIntl();

  return (
    <Wrapper>
      {
        props.header ? (
          <DetailsHeader
            iconType={DETAILS_HEADER_ICON_TYPES.problem}
            iconPath={mdiExclamationThick}
            small
          >
            {props.header}
          </DetailsHeader>
        ) : null
      }
      <ProblemsList>
        {
          props.problems.map((el) => (
            <ProblemsListItem key={uuidv4()}>
              <div>
                <BoxWrapper noFlex>
                  <div><b>{el.problem}</b></div>
                  <div>{el.info}</div>
                </BoxWrapper>
                <BoxWrapper>
                  <Label>{intl.formatMessage(messages.resolvedText)}</Label>
                  {
                    el.resolved ? (
                      <Icon
                        path={mdiCheck}
                        size={2}
                        color={theme.colors.green}
                      />
                    ) : (
                      <Icon
                        path={mdiClose}
                        size={2}
                        color={theme.colors.red}
                      />
                    )
                  }
                </BoxWrapper>
                {
                  !el.resolved ? (
                    <BoxWrapper>
                      <Label>{intl.formatMessage(messages.frequencyText)}</Label>
                      <FrequencyBar frequency={el.frequency}>
                        <Bar /><Bar /><Bar />
                        <Bar /><Bar /><Bar />
                        <Bar /><Bar /><Bar />
                        <Bar />
                      </FrequencyBar>
                    </BoxWrapper>
                  ) : null
                }
              </div>
            </ProblemsListItem>
          ))
        }
      </ProblemsList>
    </Wrapper>
  );
};

DetailsProblems.propTypes = {
  problems: problemsShape.isRequired,
  header: PropTypes.string
};

DetailsProblems.defaultProps = {
  header: null
};

export default DetailsProblems;
