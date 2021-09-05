import styled, { css } from 'styled-components';

const MainSectionWrapper = styled.div`
  display: block;
`;

const ExamplesWrapper = styled.div`
  display: block;
  margin-bottom: 6rem;
`;

const ExampleWord = styled.div`
  display: flex;
  margin: 0 0 2rem;
`;

const ExampleElement = styled.span`
  border-radius: ${(props) => props.theme.layout.borderRadius};

  ${(props) => props.isGrammarWord && css`
    margin: 0 .5rem;
    padding: 0 .5rem;
    color: ${props.theme.colors.white};

    ${props.grammarWordIndex === 0 && css`
      background: ${props.theme.colors.neonPink};
    `};
    ${props.grammarWordIndex === 1 && css`
      background: ${props.theme.colors.yellow};
      color: ${props.theme.colors.black};
    `};
    ${props.grammarWordIndex === 2 && css`
      background: ${props.theme.colors.blue};
    `};
    ${props.grammarWordIndex === 3 && css`
      background: ${props.theme.colors.lightBlue};
    `};
    ${props.grammarWordIndex === 4 && css`
      background: ${props.theme.colors.green};
    `};
    ${props.grammarWordIndex === 5 && css`
      background: ${props.theme.colors.lightGreen};
    `};
    ${props.grammarWordIndex === 6 && css`
      background: ${props.theme.colors.violet};
    `};
  `};
`;

const ProblemsWrapper = styled.div`
  display: block;
`;

const ShortExplanationWrapper = styled.div`
  margin-top: -2.4rem;
  margin-bottom: 2rem;
  padding: 1rem;
  border-radius: 0 0 ${(props) => props.theme.layout.borderRadius} ${(props) => props.theme.layout.borderRadius};
  background: ${(props) => props.theme.colors.lightGray};
  font-size: ${(props) => props.theme.typography.fontSize.small};
  color: ${(props) => props.theme.colors.veryDarkGray};
`;

export {
  MainSectionWrapper,
  ExamplesWrapper,
  ExampleWord,
  ExampleElement,
  ProblemsWrapper,
  ShortExplanationWrapper
};
