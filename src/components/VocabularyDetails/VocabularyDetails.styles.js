import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { breakpointMixin } from '@styles/mixins';

import Tile from '@components/ui/Tile';

const ConjugationLink = styled.button`
  color: ${(props) => props.theme.colors.white};
`;

const TranslationsList = styled.ol`
  margin: 0;
  list-style: none;

  ${breakpointMixin.laptop`
    margin-top: 0;
    margin-right: 4rem;
  `}
`;

const TranslationsListItem = styled.li`
  display: flex;
  padding-top: 4rem;
  padding-bottom: 4rem;
  &::before {
    display: block;
    flex-shrink: 0;
    width: 4rem;
    height: 4rem;
    margin-right: 2rem;
    border-radius: 50%;
    background: ${(props) => props.theme.colors.lightGray};
    line-height: 4rem;
    text-align: center;
    content: '${(props) => props.number}.';
  }

  @media print {
    page-break-inside: avoid;
  }
`;

const AdditionalInfo = styled.div`
  margin-top: 1rem;
  font-size: 1.4rem;
  color: ${(props) => props.theme.colors.secondaryColor};
`;

const PartOfSpeechWrapper = styled.div`
  min-height: 2.7rem;
  margin-top: -3rem;
`;

const PartOfSpeechBox = styled.div`
  display: inline-block;
  margin-right: 1rem;
  margin-bottom: 1rem;
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
  color: ${(props) => props.theme.colors.secondaryColor};
  text-align: center;
`;

const AntonymsLink = styled(Link)`
  display: inline-block;
  margin-left: 1rem;
  color: ${(props) => props.theme.colors.primaryColor};
`;

const AdditionalExplanationWrapper = styled.div`
  margin-bottom: 6rem;
`;

const OtherFormsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

const KanjiPartsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -4rem;
  padding: 2rem 0 2rem 4rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.lightGray};

  &:last-child {
    margin-bottom: 0;
    border-bottom: none;
  }
`;

const KanjiTags = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  font-size: ${(props) => props.theme.typography.fontSize.small};
`;

const StyledTile = styled(Tile)`
  margin: 0 2rem 0 0;
`;

const KanjiMeaningWrapper = styled.div`
  max-width: 19.5rem;
`;

const KanjiWrapper = styled.div`
  display: flex;
`;

const KanjiMeaning = styled.div`
  margin: -.8rem 0 1rem;
  font-size: ${(props) => props.theme.typography.fontSize.small};
`;

const KanjiReading = styled.div`
  font-size: ${(props) => props.theme.typography.fontSize.extraSmall};
`;

export {
  ConjugationLink,
  TranslationsList,
  TranslationsListItem,
  AdditionalInfo,
  PartOfSpeechWrapper,
  PartOfSpeechBox,
  AntonymsBox,
  AntonymsLink,
  AdditionalExplanationWrapper,
  OtherFormsWrapper,
  KanjiTags,
  KanjiPartsWrapper,
  StyledTile,
  KanjiWrapper,
  KanjiMeaningWrapper,
  KanjiMeaning,
  KanjiReading
};
