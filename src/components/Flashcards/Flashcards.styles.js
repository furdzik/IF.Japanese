import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';
import Icon from '@mdi/react';

import Tile from '@components/Tile';

const Wrapper = styled.div`
  text-align: center;
`;

const Title = styled.div`
  margin-bottom: 3rem;
  font-size: 3rem;
  font-weight: bold;
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
  align-items: center;
  justify-content: center;
  width: 50rem;
  height: 40rem;
  padding: 3rem;
  border-radius: ${(props) => props.theme.layout.borderRadius};
  background: ${(props) => props.theme.colors.secondaryColor};
`;

const MeaningCard = styled(VocabCard)`
  justify-content: flex-start;
`;

const VocabStyle = css`
  font-size: 5rem;
`;

const VocabWrapper = styled.div`
  ${VocabStyle};
  font-weight: bold;
`;

const TileStyled = styled(Tile)`
  ${VocabStyle};
  padding: 0 2rem;

  ${(props) => !props.known && !props.inProgress && !props.nowLearning && css`
    border: 2px solid #a0a0a0;
  `}
`;

const ReadingWrapper = styled.div`
  font-size: 4rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

const MeaningWrapper = styled.div`
  height: 5.4rem;
  overflow: hidden;
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
  fill: ${(props) => props.theme.colors.primaryColor};
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
  SeeMoreLink,
  IconStyled
};
