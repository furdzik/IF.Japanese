import styled, { css } from 'styled-components';

const VocabularyDetailsWrapper = styled.div`
  overflow: hidden;
`;

const WordHeader = styled.div`
  margin-bottom: 3rem;
  padding: 1.6rem 2rem;
  border-radius: ${(props) => props.theme.layout.borderRadius};
  background: ${(props) => props.theme.colors.secondaryColor};
  font-size: 2rem;
  font-weight: bold;

  ${(props) => props.known && css`
    background: ${props.theme.colors.primaryColor};
    color: ${props.theme.colors.white};
  `}
  ${(props) => props.inProgress && css`
    background: repeating-linear-gradient(45deg, #ef8888, #fba5a5 2px, ${props.theme.colors.tartaryColor} 4px, ${props.theme.colors.tartaryColor} 6px);
    color: ${props.theme.colors.white};
    text-shadow: -1px 1px 8px #750101;
  `}
`;

const WordHeaderSeparator = styled.span`
  display: inline-block;
  margin: 0 2rem;
`;

const TagsWrapper = styled.div`
  display: flex;
  margin-bottom: 4rem;
`;

const Tag = styled.span`
  display: inline-block;
  padding: .3rem 1rem;
  border-radius: ${(props) => props.theme.layout.borderRadius};
  background: ${(props) => props.theme.colors.lightGray};
  & + & {
    margin-left: 2rem;
  }
`;

const Content = styled.div`
  margin: 0 3rem;
`;

const MeaningHeader = styled.h2`
  margin-bottom: 5rem;
`;

const SensesWrapper = styled.div`

`;

const SensesList = styled.ol`
  margin: 0;
  list-style: none;
`;

const SensesListItem = styled.li`
  display: flex;
  margin-top: 4rem;
  margin-bottom: 7rem;
  &::before {
    display: block;
    width: 4rem;
    height: 4rem;
    margin-right: 2rem;
    border-radius: 50%;
    background: ${(props) => props.theme.colors.lightGray};
    line-height: 4rem;
    text-align: center;
    content: '${(props) => props.number}.';
  }
`;

const AdditionalInfo = styled.div`
  color: ${(props) => props.theme.colors.secondaryColor};
`;

const PartOfSpeechWrapper = styled.div`
  margin-top: -3rem;
  margin-bottom: 1rem;
`;

const PartOfSpeechBox = styled.div`
  display: inline-block;
  padding: .2rem .5rem;
  border-radius: ${(props) => props.theme.layout.borderRadius};
  background: ${(props) => props.theme.colors.lightGray};
  font-size: 1.2rem;
  & + & {
    margin-left: 1rem;
  }
`;

export {
  VocabularyDetailsWrapper,
  WordHeader,
  WordHeaderSeparator,
  TagsWrapper,
  Tag,
  Content,
  MeaningHeader,
  SensesWrapper,
  SensesList,
  SensesListItem,
  AdditionalInfo,
  PartOfSpeechWrapper,
  PartOfSpeechBox
};
