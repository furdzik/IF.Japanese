import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import { mdiHelp } from '@mdi/js';

import { DETAILS_HEADER_ICON_TYPES } from '@constants';

import { additionalExplanationShape } from '@types/commonDetails';

import Heading from '@components/Heading';

import {
  Wrapper
} from './AdditionalExplanationBox.styles.js';

const AdditionalExplanationBox = (props) => (
  <Wrapper>
    {
      props.header ? (
        <Heading
          iconType={DETAILS_HEADER_ICON_TYPES.attention}
          iconPath={mdiHelp}
          small
        >
          {props.header}
        </Heading>
      ) : null
    }
    {
      props.additionalExplanation.map((el) => (
        <div key={uuidv4()}>{el}</div>
      ))
    }
  </Wrapper>
);

AdditionalExplanationBox.propTypes = {
  additionalExplanation: additionalExplanationShape.isRequired,
  header: PropTypes.string
};

AdditionalExplanationBox.defaultProps = {
  header: null
};

export default AdditionalExplanationBox;
