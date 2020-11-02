import styled, { css } from 'styled-components';

import VerbConjugation from '@components/VerbConjugation';

const Box = styled.div`
  display: flex;
  padding: .7rem 1rem;
`;

const Line = css`
  margin-top: 1rem;
  padding-top: 2rem;
  border-top: 1px dashed ${(props) => props.theme.colors.lightGray};
`;

const BoxGroup = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
  & + & {
    ${Line}
  }

  ${(props) => props.showLine && css`
    ${Line}
  `}

`;

const VerbConjugationWrapper = styled(VerbConjugation)`
  width: 25%;
`;

const Label = styled.span`
  display: inline-block;
  color: ${(props) => props.theme.colors.primaryColor};
  background: ${(props) => props.theme.colors.lightGray};
  border-radius: ${(props) => props.theme.layout.borderRadius};
  padding: .3rem;
  font-size: 1.3rem;
  margin-bottom: .5rem;
  margin-left: 1rem;
`;

export {
  Box,
  BoxGroup,
  VerbConjugationWrapper,
  Label
};
