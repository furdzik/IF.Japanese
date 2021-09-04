import styled from 'styled-components';

const MainSectionWrapper = styled.div`
  display: block;
`;

const ExamplesWrapper = styled.div`
  display: block;
`;

const ProblemsWrapper = styled.div`
  display: block;
`;

const ShortExplanationWrapper = styled.div`
  margin-top: -2.4rem;
  padding: 1rem;
  border-radius: 0 0 ${(props) => props.theme.layout.borderRadius} ${(props) => props.theme.layout.borderRadius};
  background: ${(props) => props.theme.colors.lightGray};
  font-size: ${(props) => props.theme.typography.fontSize.small};
  color: ${(props) => props.theme.colors.veryDarkGray};
`;

export {
  MainSectionWrapper,
  ExamplesWrapper,
  ProblemsWrapper,
  ShortExplanationWrapper
};
