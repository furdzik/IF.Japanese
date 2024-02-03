import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { Link } from 'react-router-dom';
import Icon from '@mdi/react';

import { breakpointMixin } from '@styles/mixins';

import Tile from '@components/Tile';
import { FLASHCARDS_MODES_TYPES } from '../../constants';

const Wrapper = styled.div`
  text-align: center;

  ${(props) => props.hasApiError && css`
    margin-top: 3rem;
  `};
`;

const Title = styled.div`
  margin-bottom: 3rem;
  font-size: 3rem;
  font-weight: ${(props) => props.theme.typography.fontWeight.semibold};
  color: ${(props) => props.theme.mainColors.primary};
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const VocabCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40rem;
  padding: 3rem;
  border-radius: ${(props) => props.theme.layout.borderRadius};
  background: ${(props) => props.theme.mainColors.secondary};

  ${breakpointMixin.laptop(css`
    width: 50rem;
  `)};
`;

const MeaningCard = styled(VocabCard)`
  position: relative;
  justify-content: flex-start;
`;

const VocabStyle = css`
  font-size: 4rem;

  ${breakpointMixin.laptop(css`
    font-size: 5rem;
  `)};
`;

const VocabWrapper = styled.div`
  ${VocabStyle};
  font-weight: ${(props) => props.theme.typography.fontWeight.semibold};

  ${(props) => props.mode === FLASHCARDS_MODES_TYPES.meaning && css`
    font-size: 2rem;

    ${breakpointMixin.laptop(css`
    font-size: 3rem;
  `)};
  `};

`;

const TileStyled = styled(Tile)`
  margin: 1rem 0 0;
  padding: 0 2rem;
  font-size: 3.5rem;

  ${(props) => !props.known && !props.inProgress && !props.nowLearning && css`
    border: 2px solid #a0a0a0;
  `};

  ${(props) => props.inProgress && !props.nowLearning && css`
    border: 2px solid #f39c9c;
  `};

  ${breakpointMixin.laptop(css`
    ${VocabStyle};
  `)};
`;

const ReadingWrapper = styled.div`
  margin-top: 1rem;
  font-size: 3.5rem;

  ${breakpointMixin.laptop(css`
    font-size: 4rem;
  `)};
`;

const MeaningWrapper = styled.div`
  overflow: hidden;
  height: 5.4rem;
  margin-top: 2rem;
`;

const ButtonsWrapper = styled.div`
  position: absolute;
  bottom: 3rem;
  display: flex;
  flex-direction: column;
`;

const SeeMoreLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 3rem;
  color: ${(props) => props.theme.mainColors.primary};
  text-decoration: none;
`;

const IconStyled = styled(Icon)`
  display: inline-block;
  margin-top: .3rem;
  fill: ${(props) => props.theme.mainColors.primary};
`;

const ModesWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
`;

const SwitcherWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;

const SwitcherLabel = styled.div`
  margin-right: 2rem;
`;

export {
  Wrapper,
  Title,
  Box,
  VocabCard,
  MeaningCard,
  VocabWrapper,
  TileStyled,
  ReadingWrapper,
  MeaningWrapper,
  ButtonsWrapper,
  SeeMoreLink,
  IconStyled,
  ModesWrapper,
  SwitcherWrapper,
  SwitcherLabel
};
