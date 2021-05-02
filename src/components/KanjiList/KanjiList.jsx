import React from 'react';

import { kanjiType } from './KanjiList.types';

import TileWrapper from '@components/TileWrapper';
import Tile from '@components/Tile';

const KanjiList = (props) => (
  <TileWrapper>
    {
      props.kanji.map((item) => (
        <Tile
          key={item.kanji}
          known={item.known}
          inProgress={item.inProgress}
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
