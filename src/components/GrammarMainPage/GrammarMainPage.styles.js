import styled from 'styled-components';
import { Link } from 'react-router-dom';

const List = styled.ul`
  margin: 0;
  padding: 0;
  border: 2px solid ${(props) => props.theme.colors.lightGray};
  border-radius: ${(props) => props.theme.layout.borderRadius};
  list-style: none;
`;

const ListItem = styled.li`
  padding: 0;
  & + & {
    border-top: 2px solid ${(props) => props.theme.colors.lightGray};
  }
`;

const LinkStyled = styled(Link)`
  display: block;
  padding: 1rem 1.5rem;
  font-size: 2.7rem;

  &:hover {
    color: ${(props) => props.theme.colors.primaryColor};
    transition: all 0.3s ease 0s;
  }
`;

export {
  List,
  ListItem,
  LinkStyled
};
