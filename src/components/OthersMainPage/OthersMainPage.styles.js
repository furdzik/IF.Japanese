import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ColoredBoxList = styled.ul`
  display: flex;
  margin: 0 -3rem;
  padding: 0;
  list-style: none;
`;

const ColoredBoxItem = styled.li`
  display: flex;
  margin: 0 3rem 3rem;
  border: 2px solid ${(props) => props.theme.colors.black};
  border-radius: ${(props) => props.theme.layout.borderRadius};

  &:nth-child(1n) {
    background: #faf0ab;
  }
  &:nth-child(2n) {
    background: #ffd1f7;
  }
`;

const LinkStyled = styled(Link)`
  display: block;
  padding: 4rem;
  font-weight: bold;
`;

export {
  ColoredBoxList,
  ColoredBoxItem,
  LinkStyled
};
