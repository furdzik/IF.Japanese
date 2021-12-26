import React from 'react';
import { Link } from 'react-router-dom';

import { vocabShape } from '@types/vocab';

import { getOnlyVocab } from '@utils/vocabulary';

import Tile from '@components/Tile';
import TileWrapper from '@components/TileWrapper';

const VocabularyList = (props) => (
  <TileWrapper>
    {
      props.vocab.map((item) => (
        <Tile
          key={`${item.meaning ? item.meaning : ''}_${item.vocab}`}
          inProgress={item.inProgress}
          nowLearning={item.nowLearning}
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

VocabularyList.propTypes = {
  vocab: vocabShape.isRequired
};

export default VocabularyList;
