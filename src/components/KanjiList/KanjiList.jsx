import React from 'react';
import { Link } from 'react-router-dom';

import TileWrapper from '@components/TileWrapper';
import Tile from '@components/Tile';

import { kanjiType } from './KanjiList.types';

const KanjiList = (props) => (
  <TileWrapper>
    {
      props.kanji.map((item) => (
        <Tile
          key={item.kanji}
          inProgress={item.inProgress}
          known={item.known}
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
  kanji: kanjiType.isRequired
};

export default KanjiList;
