import React from 'react';
import { Link } from 'react-router-dom';

import { vocabType } from './VocabularyList.types';

import TileWrapper from '@components/TileWrapper';
import Tile from '@components/Tile';

const VocabularyList = (props) => {
  const getOnlyVocab = (vocab) => vocab.replace(/\d:/gmi, '');

  return (
    <TileWrapper>
      {
        props.vocab.map((item) => (
          <Tile
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
          </Tile>
        ))
      }
    </TileWrapper>
  );
};

VocabularyList.propTypes = {
  vocab: vocabType.isRequired
};

export default VocabularyList;
