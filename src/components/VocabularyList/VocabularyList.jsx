import React from 'react';
import { Link } from 'react-router-dom';

import getOnlyVocab from '@utils/getOnlyVocab';
import { vocabShape } from '@types/vocabShape';

import TileWrapper from '@components/TileWrapper';
import Tile from '@components/ui/Tile';

const VocabularyList = (props) => (
  <TileWrapper>
    {
      props.vocab.map((item) => (
        <Tile
          key={item.vocab}
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
