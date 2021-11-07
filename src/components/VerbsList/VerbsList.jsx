import React from 'react';

import { verbShape } from '@types/verb';

import VerbsListItem from '@components/VerbsListItem';

import {
  VerbsWrapper
} from './VerbsList.styles.js';

const VerbsList = (props) => (
  <VerbsWrapper>
    {
      props.verbs.map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <VerbsListItem key={index} item={item} />
      ))
    }
  </VerbsWrapper>
);

VerbsList.propTypes = {
  verbs: verbShape.isRequired
};

export default VerbsList;
