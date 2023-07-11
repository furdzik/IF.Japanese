import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { breakpointMixin } from '@styles/mixins';

import VerbConjugation from '@components/VerbConjugation';

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: .7rem 1rem;

  ${breakpointMixin.smallLaptop(css`
    flex-wrap: nowrap;
  `)};
`;

const Line = (props) => css`
  margin-top: 1rem;
  padding-top: 2rem;
  border-top: .1rem dashed ${props.theme.colors.lightGray};
`;

const BoxGroup = styled.div`
  margin-right: 3rem;
  margin-left: 1rem;
  & + & {
    ${(props) => Line(props)};
  }

  ${(props) => props.showLine && css`
    ${Line(props)};
  `};

  ${breakpointMixin.smallLaptop(css`
    margin-right: 1rem;
  `)};
`;

const VerbConjugationWrapper = styled(VerbConjugation)`
  width: 100%;

  ${breakpointMixin.smallLaptop(css`
    width: 25%;
  `)};
`;

const Label = styled.span`
  display: inline-block;
  margin-bottom: .5rem;
  margin-left: 1rem;
  padding: .3rem;
  border-radius: ${(props) => props.theme.layout.borderRadius};
  background: ${(props) => props.theme.colors.lightGray};
  font-size: 1.3rem;
  color: ${(props) => props.theme.mainColors.primary};
`;

export {
  Box,
  BoxGroup,
  VerbConjugationWrapper,
  Label
};
