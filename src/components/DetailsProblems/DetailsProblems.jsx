import React from 'react';
import PropTypes from 'prop-types';
// import { useIntl } from 'react-intl';

import { mdiExclamationThick } from '@mdi/js';

import { DETAILS_HEADER_ICON_TYPES } from '@config/constants';

import { problemsShape } from '@types/commonDetailsShape';

import DetailsHeader from '@components/DetailsHeader';

import {
  Wrapper
} from './DetailsProblems.styles.js';
// import messages from './DetailsProblems.messages';

const DetailsProblems = (props) => {
  // const intl = useIntl();
  console.log(props);
  return (
    <Wrapper>
      {
        props.header ? (
          <DetailsHeader
            iconType={DETAILS_HEADER_ICON_TYPES.problem}
            iconPath={mdiExclamationThick}
          >
            {props.header}
          </DetailsHeader>
        ) : null
      }
      {
        props.problems.map((el, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index}>{el.problem}</div>
        ))
      }
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
