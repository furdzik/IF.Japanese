import React from 'react';
import { Link } from 'react-router-dom';

import TileWrapper from '@components/TileWrapper';
import Tile from '@components/Tile';

import { vocabType } from './VocabularyList.types';

const VocabularyList = (props) => {
  const getOnlyVocab = (vocab) => vocab.replace(/\d:/gmi, '');

  return (
    <TileWrapper>
      {
        props.vocab.map((item) => (
          <Tile
            key={item.vocab}
            inProgress={item.inProgress}
            known={item.known}
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
