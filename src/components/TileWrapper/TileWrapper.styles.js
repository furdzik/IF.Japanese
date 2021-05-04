import styled from 'styled-components';

import { breakpointMixin } from '@styles/mixins';

const List = styled.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  align-items: center;
  margin: 0 -1.1rem 3rem;
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
