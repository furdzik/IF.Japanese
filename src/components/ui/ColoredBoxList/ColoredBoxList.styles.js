import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { breakpointMixin } from '@styles/mixins';

const BoxList = styled.ul`
  margin: 0 -3rem;
  padding: 0;
  text-align: center;
  list-style: none;

  ${breakpointMixin.portraitTablet`
    display: flex;
  `}
`;

const BoxItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
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
  BoxList,
  BoxItem,
  LinkStyled
};
