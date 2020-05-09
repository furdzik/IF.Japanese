import React from 'react';

import { vocabType } from './VocabularyList.types';

import { ListWrapper, ListItem } from './VocabularyList.styles.js';

const VocabularyList = (props) => (
  <ListWrapper>
    {
      props.vocab.map((item) => (
        <ListItem
          key={item.vocab}
          known={item.known}
          inProgress={item.inProgress}
          level={item.level}
        >
          {item.vocab}
        </ListItem>
      ))
    }
  </ListWrapper>
);

VocabularyList.propTypes = {
  vocab: vocabType.isRequired
};

export default VocabularyList;
