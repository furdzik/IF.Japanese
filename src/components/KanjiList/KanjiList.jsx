import React from 'react';

import { kanjiType } from './KanjiList.types';

import { ListWrapper, ListItem } from './KanjiList.styles.js';

const KanjiList = (props) => (
  <ListWrapper>
    {
      props.kanji.map((item) => (
        <ListItem
          key={item.kanji}
          known={item.known}
          inProgress={item.inProgress}
          level={item.level}
        >
          {item.kanji}
        </ListItem>
      ))
    }
  </ListWrapper>
);

KanjiList.propTypes = {
  kanji: kanjiType.isRequired
};

export default KanjiList;
