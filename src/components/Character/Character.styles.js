import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { CHARACTER_TYPE } from '@constants';

import { breakpointMixin } from '@styles/mixins';

const OneCharacter = styled.div`
  ${(props) => props.mainCharacters && css`
    width: 5rem;
  `};
`;

const CharacterWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;

  ${(props) => props.type === CHARACTER_TYPE.furigana && css`
    margin-bottom: -.5rem;
    font-size: 1.6rem;
  `};

  ${(props) => props.small && css`
    margin-top: -.3rem;
    margin-bottom: -.1rem;
    font-size: 1.6rem;

    ${OneCharacter} {
      width: auto;
      min-width: 1.2rem;
    }

    ${props.type === CHARACTER_TYPE.furigana && css`
      margin-bottom: -.5rem;
      font-size: 1.2rem;
      font-weight: ${props.theme.typography.fontWeight.regular};
    `};
  `};

  ${(props) => props.mainCharacters && css`
    ${props.small && css`
      margin-bottom: 0;
      ${OneCharacter} {
         width: 2.5rem;
       }
    `};

    ${breakpointMixin.phablet(css`
        font-size: 4rem;

      ${props.type === CHARACTER_TYPE.furigana && css`
        font-size: 1.6rem;
      `};

       ${OneCharacter} {
         width: 5rem;
       }
    `)};
   `};
`;

export {
  CharacterWrapper,
  OneCharacter
};
