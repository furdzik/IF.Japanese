import React from 'react';

import { Link } from 'react-router-dom';

import { kanjiShape } from '@types/kanji';

import Tile from '@components/Tile';
import TileWrapper from '@components/TileWrapper';

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
