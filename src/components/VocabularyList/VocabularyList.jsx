import React from 'react';
import { Link } from 'react-router-dom';

import { vocabShape } from '@types/vocab';

import { getOnlyVocab } from '@utils/vocabulary';

import TileWrapper from '@components/ui/TileWrapper';
import Tile from '@components/ui/Tile';

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
