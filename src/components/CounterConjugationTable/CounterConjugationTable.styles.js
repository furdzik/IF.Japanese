import styled from '@emotion/styled';
import { css } from '@emotion/react';

const Table = styled.table`
  width: 100%;
  max-width: 60rem;
  margin: 0 auto;
  border-collapse: separate;
`;

const tdAndThCommonStyles = (props) => css`
  padding: 1rem 2rem;

  &:nth-of-type(1) {
    width: 10rem;
    border-right: .3rem solid ${props.theme.mainColors.primary};
    text-align: center;
  }
`;

const Td = styled.td`
  ${(props) => tdAndThCommonStyles(props)};
`;

const Th = styled.th`
  ${(props) => tdAndThCommonStyles(props)};
  position: sticky;
  top: 0;
  border-bottom: .3rem solid ${(props) => props.theme.mainColors.primary};
  background: white;
  text-align: left;

  &:nth-of-type(1) {
    text-align: center;
  }
`;

const Tr = styled.tr`
  &:not(:last-of-type) {
    & ${Td} {
      border-bottom: .1rem solid ${(props) => props.theme.mainColors.secondary};
    }
  }

  ${(props) => props.question && css`
    background: ${props.theme.colors.lightGray};
  `};
`;

const Number = styled.span`
  display: inline-block;
  width: 4rem;
  padding: .3rem;
  border-radius: ${(props) => props.theme.layout.borderRadius};
  background: ${(props) => props.theme.mainColors.secondary};
  font-weight: ${(props) => props.theme.typography.fontWeight.semibold};

  ${(props) => props.specialPronunciation && css`
    background: #a2dfef;
  `};

  ${(props) => props.specialConjugation && css`
    background: ${props.theme.mainColors.tartary};
  `};
`;

const QuestionWrapper = styled.div`
  display: flex;
`;

export {
  Table,
  Tr,
  Th,
  Td,
  Number,
  QuestionWrapper
};
