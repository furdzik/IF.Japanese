import styled from 'styled-components';

import { breakpointMixin } from '@styles/mixins';

const List = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0 0 3rem -.8rem;
  padding: 0;
  list-style: none;

  ${breakpointMixin.laptop`
    justify-content: space-between;
    margin-left: -1rem;
    margin-right: -1rem;
  `}

  @media print {
    display: block;
    text-align: justify;
  }
`;

export {
  List
};
