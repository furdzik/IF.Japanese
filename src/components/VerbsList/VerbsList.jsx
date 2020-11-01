import React from 'react';

import { vocabType } from '@components/VocabularyList/VocabularyList.types';

import VerbsListItem from '@components/VerbsListItem';

import {
  VerbsWrapper,
} from './VerbsList.styles.js';

const VerbsList = (props) => (
  <VerbsWrapper>
    {
      props.verbs.map((item, index) => (
        <VerbsListItem key={index} item={item} />
      ))
    }
  </VerbsWrapper>
);

VerbsList.propTypes = {
  verbs: vocabType.isRequired
};

export default VerbsList;
