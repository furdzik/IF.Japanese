import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import { CHARACTER_TYPE } from '@constants';

import {
  CharacterWrapper,
  OneCharacter
} from './Character.styles.js';

const Character = (props) => (
  <CharacterWrapper
    mainCharacters={props.mainCharacters}
    type={props.type}
    elements={props.elements}
    small={props.small}
  >
    {
      props.elements.map((el) => (
        <OneCharacter
          mainCharacters={props.mainCharacters}
          small={props.small}
          key={uuidv4()}
        >
          {el}
        </OneCharacter>
      ))
    }
  </CharacterWrapper>
);

Character.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.string).isRequired,
  type: PropTypes.oneOf([
    CHARACTER_TYPE.furigana,
    CHARACTER_TYPE.kanji
  ]).isRequired,
  mainCharacters: PropTypes.bool,
  small: PropTypes.bool
};

Character.defaultProps = {
  mainCharacters: true,
  small: false
};

export default Character;
