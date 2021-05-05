import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { breakpointMixin } from '@styles/mixins';

const Tag = styled.span`
  display: inline-block;
  padding: .3rem 1rem;
  border-radius: ${(props) => props.theme.layout.borderRadius};
  background: ${(props) => props.theme.colors.lightGray};
  & + & {
    margin-left: 2rem;
  }
  ${(props) => props.verb && css`
    background: ${props.theme.colors.primaryColor};
    color: ${props.theme.colors.white};
  `}
  ${(props) => props.isCommon && css`
    background: #64ad5b;
    color: ${props.theme.colors.white};
  `}
  ${(props) => props.isJlpt && css`
    background: #7d88a7;
    color: ${props.theme.colors.white};
  `}
`;

const ConjugationLink = styled.button`
  color: ${(props) => props.theme.colors.white};
`;

const SensesList = styled.ol`
  margin: 8rem 0 0 0;
  list-style: none;

  ${breakpointMixin.laptop`
    margin-top: 0;
  `}
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
  margin-top: 1rem;
  font-size: 1.4rem;
  color: ${(props) => props.theme.colors.secondaryColor};
`;

const PartOfSpeechWrapper = styled.div`
  min-height: 2.7rem;
  margin-top: -3rem;
  margin-bottom: 1rem;
`;

const PartOfSpeechBox = styled.div`
  display: inline-block;
  padding: .2rem .5rem;
  border-radius: ${(props) => props.theme.layout.borderRadius};
  background: ${(props) => props.theme.colors.lightGray};
  font-size: 1.2rem;
  text-transform: lowercase;
  & + & {
    margin-left: 1rem;
  }
`;

const AntonymsBox = styled.div`
  margin-top: 1rem;
  font-size: 1.4rem;
  color: ${(props) => props.theme.colors.secondaryColor};
  text-align: center;
`;

const AntonymsLink = styled(Link)`
  color: ${(props) => props.theme.colors.primaryColor};
`;

const AdditionalExplanationWrapper = styled.div`
  margin-bottom: 6rem;
`;

export {
  Tag,
  ConjugationLink,
  SensesList,
  SensesListItem,
  AdditionalInfo,
  PartOfSpeechWrapper,
  PartOfSpeechBox,
  AntonymsBox,
  AntonymsLink,
  AdditionalExplanationWrapper
};
