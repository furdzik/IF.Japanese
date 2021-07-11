import styled, { css } from 'styled-components';

import { breakpointMixin } from '@styles/mixins';

import { Link } from 'react-router-dom';
import Icon from '@mdi/react';

import Tile from '@components/ui/Tile';

const Wrapper = styled.div`
  text-align: center;
`;

const Title = styled.div`
  margin-bottom: 3rem;
  font-size: 3rem;
  font-weight: ${(props) => props.theme.typography.fontWeight.semibold};
  color: ${(props) => props.theme.colors.primaryColor};
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
  background: ${(props) => props.theme.colors.secondaryColor};

  ${breakpointMixin.laptop`
    width: 50rem;
  `}
`;

const MeaningCard = styled(VocabCard)`
  position: relative;
  justify-content: flex-start;
`;

const VocabStyle = css`
  font-size: 4rem;

  ${breakpointMixin.laptop`
    font-size: 5rem;
  `}
`;

const VocabWrapper = styled.div`
  ${VocabStyle};
  font-weight: ${(props) => props.theme.typography.fontWeight.semibold};
`;

const TileStyled = styled(Tile)`
  margin: 1rem 0 0;
  padding: 0 2rem;
  font-size: 3.5rem;

  ${(props) => !props.known && !props.inProgress && !props.nowLearning && css`
    border: 2px solid #a0a0a0;
  `}

  ${(props) => props.inProgress && !props.nowLearning && css`
    border: 2px solid #f39c9c;
  `}

  ${breakpointMixin.laptop`
    ${VocabStyle};
  `}
`;

const ReadingWrapper = styled.div`
  margin-top: 1rem;
  font-size: 3.5rem;

  ${breakpointMixin.laptop`
    font-size: 4rem;
  `}
`;

const MeaningWrapper = styled.div`
  overflow: hidden;
  height: 5.4rem;
  margin-top: 2rem;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  position: absolute;
  bottom: 3rem;
  flex-direction: column;
`;

const SeeMoreLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 3rem;
  color: ${(props) => props.theme.colors.primaryColor};
  text-decoration: none;
`;

const IconStyled = styled(Icon)`
  display: inline-block;
  margin-top: .3rem;
  fill: ${(props) => props.theme.colors.primaryColor};
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
  SwitcherWrapper,
  SwitcherLabel
};
