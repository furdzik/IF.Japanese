import styled, { css } from 'styled-components';

const CheckboxListWrapper = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: -.5rem;
  padding: 0;
  list-style: none;
  width: 100%;

  ${(props) => props.isVertical && css`
    display: block;
  `}

  @media print {
    justify-content: left;
  }
`;

const ListItem = styled.li`
  padding: .5rem;
  max-width: 100%;
  cursor: pointer;
`;

export {
  CheckboxListWrapper,
  ListItem
};
