import React from 'react';
import { Link } from 'react-router-dom';

import { vocabType } from './VocabularyList.types';
import { ListWrapper, ListItem } from './VocabularyList.styles.js';

const VocabularyList = (props) => {
  const getOnlyVocab = (vocab) => vocab.replace(/\d:/gmi, '');

  return (
    <ListWrapper>
      {
        props.vocab.map((item) => (
          <ListItem
            key={item.vocab}
            known={item.known}
            inProgress={item.inProgress}
            level={item.level}
          >
            <Link
              to={`/vocab/${item.meaning ? `${getOnlyVocab(item.vocab)},${item.meaning},${item.vocab}` : item.vocab}`}
            >
              {item.vocab}
            </Link>
          </ListItem>
        ))
      }
    </ListWrapper>
  );
};

VocabularyList.propTypes = {
  vocab: vocabType.isRequired
};

export default VocabularyList;
