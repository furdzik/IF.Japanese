import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

import Icon from '@mdi/react';

import Tile from '@components/Tile';
import VerbType from '@components/VerbType';

const ConjugationLink = styled.button`
  color: ${(props) => props.theme.colors.white};
`;

const TranslationsList = styled.ol`
  margin: 0;
  list-style: none;
`;

const TranslationsListItem = styled.li`
  display: flex;
  padding-top: 4rem;
  padding-bottom: 4rem;
  &::before {
    content: '${(props) => props.number}.';
    display: block;
    flex-shrink: 0;
    width: 4rem;
    height: 4rem;
    margin-right: 2rem;
    border-radius: 50%;
    background: ${(props) => props.theme.colors.lightGray};
    line-height: 4rem;
    text-align: center;
  }

  @media print {
    page-break-inside: avoid;
  }
`;

const AdditionalInfo = styled.div`
  margin-top: 1rem;
  font-size: 1.4rem;
  color: #c3c2c2;
`;

const PartOfSpeechWrapper = styled.div`
  display: flex;
  flex-flow: wrap;
  align-items: center;
  gap: .5rem;
  min-height: 2.7rem;
  margin-top: -3rem;
`;

const PartOfSpeechBox = styled.div`
  padding: .2rem .5rem;
  border-radius: ${(props) => props.theme.layout.borderRadius};
  background: ${(props) => props.theme.colors.lightGray};
  font-size: 1.2rem;
  text-transform: lowercase;
  &:last-child {
    margin-right: 0;
  }
`;

const AntonymsBox = styled.div`
  margin-top: 1rem;
  font-size: 1.4rem;
`;

const VerbBox = styled.div`
  margin-top: 2rem;
`;

const VerbTypeInfoBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 2rem;
`;

const VerbTypeVerbWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  order: ${(props) => props.isTransitive ? '1' : '3'}
`;

const StyledTile = styled(Tile)`
  && {
    flex-shrink: 0;
    margin: 0;
  }
`;

const StyledVerbType = styled(VerbType)`
  margin: -1rem 1rem 0;
`;

const StyledIcon = styled(Icon)`
  order: 2;
  margin: 0 2.5rem 0 0;
  color: ${(props) => props.theme.colors.lightGray};
`;

const AntonymsLink = styled(Link)`
  display: inline-block;
  color: ${(props) => props.theme.mainColors.primary};
  font-weight: bold;
  font-size: 1.6rem;
`;

const ExamplesWrapper = styled.div`
  margin-bottom: 6rem;
`;

const OtherFormsWrapper = styled.div`
  margin: 3rem 0;
`;

const ConjugationHeader = styled.span`
  display: inline-block;
  margin-left: 2rem;
  font-size: 1.8rem;
`;

export {
  ConjugationLink,
  TranslationsList,
  TranslationsListItem,
  AdditionalInfo,
  PartOfSpeechWrapper,
  PartOfSpeechBox,
  AntonymsBox,
  VerbBox,
  VerbTypeInfoBox,
  VerbTypeVerbWrapper,
  StyledTile,
  StyledVerbType,
  StyledIcon,
  AntonymsLink,
  ExamplesWrapper,
  OtherFormsWrapper,
  ConjugationHeader
};
