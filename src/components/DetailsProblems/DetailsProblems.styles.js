import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  padding: 3.5rem 4rem;
  border-radius: ${(props) => props.theme.layout.borderRadius};
  background: ${(props) => props.theme.colors.lightRed};
`;

const ProblemsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ProblemsListItem = styled.li`
  display: flex;

  &::before {
    flex-shrink: 0;
    content: '';
    display: inline-block;
    width: 1rem;
    height: 1rem;
    margin-top: .7rem;
    margin-right: 1.5rem;
    border-radius: 50%;
    background: ${(props) => props.theme.mainColors.primary};
  }

  & + & {
    margin-top: 2rem;
  }
`;

const Label = styled.div`
    margin-right: 2rem;
    margin-top: -.2rem;
`;

const BoxWrapper = styled.div`
  margin-bottom: 1rem;

  ${(props) => !props.noFlex && css`
    display: flex;
    align-items: center;
  `};
`;

const Bar = styled.div`

`;

const FrequencyBar = styled.div`
  ${Bar} {

  }
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
