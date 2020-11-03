import styled, { css } from 'styled-components';

const CheckboxListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin: -.5rem;
  padding: 0;
  list-style: none;

  ${(props) => props.isVertical && css`
    display: block;
  `}

  @media print {
    justify-content: left;
  }
`;

const ListItem = styled.li`
  max-width: 100%;
  padding: .5rem;
  cursor: pointer;
`;

export {
  CheckboxListWrapper,
  ListItem
};
