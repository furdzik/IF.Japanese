import React from 'react';

import { Link } from 'react-router-dom';

import { kanjiShape } from '@types/kanji';

import TileWrapper from '@components/ui/TileWrapper';
import Tile from '@components/ui/Tile';

const KanjiList = (props) => (
  <TileWrapper>
    {
      props.kanji.map((item) => (
        <Tile
          key={item.kanji}
          inProgress={item.inProgress}
          known={item.known}
          nowLearning={item.nowLearning}
          level={item.level}
          joyo={item.joyo}
        >
          <Link to={`/kanji/${item.kanji}`}>
            {item.kanji}
          </Link>
        </Tile>
      ))
    }
  </TileWrapper>
);

KanjiList.propTypes = {
  kanji: kanjiShape.isRequired
};

export default KanjiList;
