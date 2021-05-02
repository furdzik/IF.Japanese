import React from 'react';

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
          {item.kanji}
        </Tile>
      ))
    }
  </TileWrapper>
);

KanjiList.propTypes = {
  kanji: kanjiType.isRequired
};

export default KanjiList;
