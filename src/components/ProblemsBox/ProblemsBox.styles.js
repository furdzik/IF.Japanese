import styled from '@emotion/styled';
import { css } from '@emotion/react';

const frequencyMixin = (frequency, Bar, theme) => {
  const bars = [];

  Array
    .from({ length: 10 }, (_, i) => i + 1)
    .forEach((i) => {
      if (i <= frequency) {
        bars.push(css`
        ${Bar}:nth-of-type(${i}) {
          background: ${theme.mainColors.primary};
        }
      `);
      }
    });

  return bars;
};

const Wrapper = styled.div`
  padding: 3.5rem 4rem;
  border-radius: ${(props) => props.theme.layout.borderRadius};
  background: ${(props) => props.theme.colors.lightRed};
`;

const ProblemsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ProblemsListItem = styled.li`
  display: flex;

  &::before {
    display: inline-block;
    flex-shrink: 0;
    width: 1rem;
    height: 1rem;
    margin-top: .7rem;
    margin-right: 1.5rem;
    border-radius: 50%;
    background: ${(props) => props.theme.mainColors.primary};
    content: '';
  }

  & + & {
    margin-top: 2rem;
  }
`;

const Label = styled.div`
  width: 9rem;
  margin-top: -.2rem;
  margin-right: 2rem;
`;

const BoxWrapper = styled.div`
  margin-bottom: 1rem;

  ${(props) => !props.noFlex && css`
    display: flex;
    align-items: center;
  `};
`;

const Bar = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  margin: 0 1px;
  border: 1px solid ${(props) => props.theme.mainColors.primary};
`;

const FrequencyBar = styled.div`
  display: flex;

  ${(props) => props.frequency && css`
    ${frequencyMixin(props.frequency, Bar, props.theme)}
  `};
`;

export {
  Wrapper,
  ProblemsList,
  ProblemsListItem,
  Label,
  BoxWrapper,
  FrequencyBar,
  Bar
};
