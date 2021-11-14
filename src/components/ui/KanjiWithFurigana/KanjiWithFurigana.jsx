import React from 'react';
import PropTypes from 'prop-types';

import { characterType } from '@constants';

import Character from '@components/ui/Character';

import {
  Wrapper
} from './KanjiWithFurigana.styles.js';

const KanjiWithFurigana = (props) => (
  <Wrapper>
    {
      props.furigana ? (
        <Character
          type={characterType.FURIGANA}
          elements={props.furigana}
          mainCharacters={false}
          small={props.small}
        />
      ) : null
    }
    <Character
      type={characterType.KANJI}
      elements={props.kanji}
      mainCharacters={false}
      small={props.small}
    />
  </Wrapper>
);

KanjiWithFurigana.propTypes = {
  kanji: PropTypes.arrayOf(PropTypes.string).isRequired,
  furigana: PropTypes.arrayOf(PropTypes.string),
  small: PropTypes.bool
};

KanjiWithFurigana.defaultProps = {
  furigana: null,
  small: true
};

export default KanjiWithFurigana;
