import React from 'react';
import PropTypes from 'prop-types';

import { CHARACTER_TYPE } from '@constants';

import Character from '@components/Character';

import {
  Wrapper
} from './KanjiWithFurigana.styles.js';

const KanjiWithFurigana = (props) => (
  <Wrapper>
    {
      props.furigana ? (
        <Character
          type={CHARACTER_TYPE.furigana}
          elements={props.furigana}
          mainCharacters={props.mainCharacters}
          small={props.small}
        />
      ) : null
    }
    <Character
      type={CHARACTER_TYPE.kanji}
      elements={props.kanji}
      mainCharacters={props.mainCharacters}
      small={props.small}
    />
  </Wrapper>
);

KanjiWithFurigana.propTypes = {
  kanji: PropTypes.arrayOf(PropTypes.string).isRequired,
  furigana: PropTypes.arrayOf(PropTypes.string),
  mainCharacters: PropTypes.bool,
  small: PropTypes.bool
};

KanjiWithFurigana.defaultProps = {
  furigana: null,
  mainCharacters: false,
  small: true
};

export default KanjiWithFurigana;
