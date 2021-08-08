import styled, { css } from 'styled-components';

import { breakpointMixin } from '@styles/mixins';

const DetailsWrapper = styled.div`
  overflow: hidden;
`;

const WordHeader = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 6.2rem;
  margin-bottom: 3rem;
  padding: 1.6rem 2rem;
  border-radius: ${(props) => props.theme.layout.borderRadius};
  background: ${(props) => props.theme.mainColors.secondary};
  font-size: 2rem;
  font-weight: ${(props) => props.theme.typography.fontWeight.semibold};

  ${(props) => props.known && css`
    background: ${props.theme.mainCategoriesStyle.known.background};
    color: ${props.theme.mainCategoriesStyle.known.color};
  `}

  ${(props) => props.inProgress && css`
    background: ${props.theme.mainCategoriesStyle.inProgress.background};
    color: ${props.theme.mainCategoriesStyle.inProgress.color};
    text-shadow: ${props.theme.mainCategoriesStyle.inProgress.textShadow};
  `}

  ${(props) => props.nowLearning && css`
    padding-top: 1.4rem;
    padding-bottom: 1.4rem;
    border: ${props.theme.mainCategoriesStyle.nowLearning.border};
    background: ${props.theme.mainCategoriesStyle.nowLearning.background};
    color: ${props.theme.mainCategoriesStyle.nowLearning.color};
    text-shadow: ${props.theme.mainCategoriesStyle.nowLearning.textShadow};
  `}

  ${(props) => props.toRepeat && css`
    padding-top: 1.4rem;
    padding-bottom: 1.4rem;
    background: ${props.theme.mainCategoriesStyle.toRepeat.background};
    color: ${props.theme.mainCategoriesStyle.toRepeat.color};
    text-shadow: ${props.theme.mainCategoriesStyle.toRepeat.textShadow};
  `}

  ${breakpointMixin.landscapeTablet`
    flex-direction: row;
  `}
`;

const WordHeaderSeparator = styled.span`
  display: inline-block;
  margin: 0 2rem;
`;

const JishoLink = styled.a`
  display: inline-block;
  font-weight: ${(props) => props.theme.typography.fontWeight.light};
  color: ${(props) => props.theme.colors.white};

  ${(props) => props.notKnow && css`
    color: ${props.theme.colors.black};
  `}

  ${breakpointMixin.landscapeTablet`
    margin-left: auto;
  `}
`;

const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

const Content = styled.div`
  margin: 0 1.5rem;

  ${breakpointMixin.laptop`
    margin-left: 3rem;
    margin-right: 3rem;
  `}
`;

const SectionsWrapper = styled.div`
  ${breakpointMixin.laptop`
    display: flex;
    flex-wrap: wrap;
  `}
`;

// @TODO: calculate this container
const MainSection = styled.div`
  margin-top: 2rem;

  ${breakpointMixin.laptop`
    max-width: 53rem;
    margin-top: 0;
  `};

  ${(props) => props.wide && css`
    ${breakpointMixin.laptop`
      width: 100%;
    `}
  `}
`;

const NameWrapper = styled.div`
  margin-top: 1rem;

  ${breakpointMixin.laptop`
    margin-right: 4rem;
  `}
`;

const CharacterBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 27rem;
  min-height: 16.5rem;
  margin-bottom: 2rem;
  padding: 4rem 1rem;
  border: 1px solid ${(props) => props.theme.mainColors.secondary};
  border-radius: ${(props) => props.theme.layout.borderRadius};
  font-size: 4rem;
  text-align: center;
`;

const OneCharacter = styled.div`
  width: 5rem;
`;

const CharacterWrapper = styled.div`
  display: flex;
  text-align: center;

  ${(props) => props.furigana && css`
    font-size: 1.6rem;
    margin-bottom: -.5rem;
  `};

  ${(props) => props.small && css`
    margin-bottom: -.5rem;
    font-size: 1.6rem;

    ${OneCharacter} {
      width: 2.5rem;
    }

    ${props.furigana && css`
      font-size: 1.2rem;
    `};
  `};

  ${breakpointMixin.phablet`
    font-size: 4rem;

    ${(props) => props.furigana && css`
      font-size: 1.6rem;
    `};

     ${OneCharacter} {
       width: 5rem;
     }
  `};
`;

export {
  DetailsWrapper,
  WordHeader,
  WordHeaderSeparator,
  JishoLink,
  TagsWrapper,
  Content,
  SectionsWrapper,
  MainSection,
  NameWrapper,
  CharacterBlock,
  CharacterWrapper,
  OneCharacter
};
