import styled from '@emotion/styled';

import { breakpointMixin } from '@styles/mixins';

const Wrapper = styled.div`
  width: 100%;
  margin-left: auto;
  padding: .5rem 1rem .3rem;
  border-radius: ${(props) => props.theme.layout.borderRadius};
  background: ${(props) => props.theme.mainColors.secondary};

  ${breakpointMixin.laptop`
    display: inline-block;
  `};

  @media print {
    display: flex;
    padding: 0;
    background: none;
  }
`;

const LegendList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  font-size: 1.6rem;
  list-style: none;

  ${breakpointMixin.portraitTablet`
    justify-content: space-between;
    font-size: 1.8rem;
  `};
`;

const LegendItem = styled.li`
  width: 50%;

  ${breakpointMixin.portraitTablet`
    width: auto;
  `};

  @media print {
    width: auto;
    & + & {
      margin-left: 2rem;
    }
  }
`;

export {
  Wrapper,
  LegendList,
  LegendItem
};
