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
    flex-wrap: wrap;
  `}
`;

const BoxItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 18.85rem;
  margin: 0 3rem 3rem;
  border: .2rem solid ${(props) => props.theme.colors.black};
  border-radius: ${(props) => props.theme.layout.borderRadius};
  font-size: 2rem;
  color: ${(props) => props.theme.colors.white};

  &:nth-child(4n+1) {
    background: ${(props) => props.theme.colors.lightGreen};
  }
  &:nth-child(4n+2) {
    background: ${(props) => props.theme.colors.lightViolet};
  }
  &:nth-child(4n+3) {
    background: ${(props) => props.theme.colors.orange};
  }
  &:nth-child(4n+4) {
    background: ${(props) => props.theme.colors.neonPink};
  }
`;

const LinkStyled = styled(Link)`
  display: block;
  width: 100%;
  height: 100%;
  padding: 4rem;
  border: 2px solid ${(props) => props.theme.colors.white};
  font-weight: ${(props) => props.theme.typography.fontWeight.semibold};
`;

export {
  BoxList,
  BoxItem,
  LinkStyled
};
