import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import { mdiHelp } from '@mdi/js';

import { DETAILS_HEADER_ICON_TYPES } from '@config/constants';

import { additionalExplanationShape } from '@types/commonDetailsShape';

import DetailsHeader from '@components/DetailsHeader';

import {
  Wrapper
} from './DetailsAdditionalExplanation.styles.js';

const DetailsAdditionalExplanation = (props) => (
  <Wrapper>
    {
      props.header ? (
        <DetailsHeader
          iconType={DETAILS_HEADER_ICON_TYPES.attention}
          iconPath={mdiHelp}
          small
        >
          {props.header}
        </DetailsHeader>
      ) : null
    }
    {
      props.additionalExplanation.map((el) => (
        <div key={uuidv4()}>{el}</div>
      ))
    }
  </Wrapper>
);

DetailsAdditionalExplanation.propTypes = {
  additionalExplanation: additionalExplanationShape.isRequired,
  header: PropTypes.string
};

DetailsAdditionalExplanation.defaultProps = {
  header: null
};

export default DetailsAdditionalExplanation;
