import styled from '@emotion/styled';
import { css } from '@emotion/react';

const CheckboxListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: -.5rem;
  padding: 0;
  list-style: none;

  ${(props) => props.isCentered && css`
    justify-content: center;
  `};

  ${(props) => props.isVertical && css`
    display: block;
  `};

  @media print {
    justify-content: left;
  }
`;

const ListItem = styled.li`
  max-width: 100%;
  padding: .5rem .5rem 0;
  cursor: pointer;
`;

export {
  CheckboxListWrapper,
  ListItem
};
