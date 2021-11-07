import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { Link } from 'react-router-dom';

import { breakpointMixin } from '@styles/mixins';

const MenuWrapper = styled.ul`
  display: flex;
`;

const MenuItem = styled.li`
  display: block;
  margin: 3rem 2rem 3rem 0;
  font-size: 2.3rem;
  font-weight: ${(props) => props.theme.typography.fontWeight.semibold};
  color: ${(props) => props.theme.colors.black};

  &:last-child {
    margin-right: 0;
  }

  ${breakpointMixin.portraitTablet(css`
    margin-right: 3rem;
    font-size: 2.7rem;
  `)};

  @media print {
    margin-top: 0;
  }
`;

const LinkStyled = styled(Link)`
  color: ${(props) => props.theme.colors.black};
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.mainColors.primary};
    transition: ${(props) => props.theme.layout.transition};
  }

  ${(props) => props.active && css`
    color: ${props.theme.mainColors.primary};
  `};

  @media print {
    display: none;

    ${(props) => props.active && css`
      display: block;
    `};
  }
`;

export {
  MenuWrapper,
  MenuItem,
  LinkStyled
};
