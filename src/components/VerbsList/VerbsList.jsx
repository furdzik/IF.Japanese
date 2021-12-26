import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { verbShape } from '@types/verb';

import VerbsListItem from '@components/VerbsListItem';

import {
  VerbsWrapper
} from './VerbsList.styles.js';

const VerbsList = (props) => (
  <VerbsWrapper>
    {
      props.verbs.map((item) => (
        <VerbsListItem key={uuidv4()} item={item} />
      ))
    }
  </VerbsWrapper>
);

VerbsList.propTypes = {
  verbs: verbShape.isRequired
};

export default VerbsList;
