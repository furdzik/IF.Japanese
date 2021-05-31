import styled, { css } from 'styled-components';

import { breakpointMixin } from '@styles/mixins';

const MenuWrapper = styled.ul`
  display: flex;
`;

const MenuItem = styled.li`
  display: block;
  margin: 3rem 2rem 3rem 0;
  font-size: 2rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.black};

  @media print {
    display: none;
    margin-top: 0;
  }

  a {
    color: ${(props) => props.theme.colors.black};
    text-decoration: none;
    &:hover {
      color: ${(props) => props.theme.colors.primaryColor};
      transition: all 0.3s ease 0s;
    }
  }

  ${(props) => props.active && css`
    color: ${props.theme.colors.primaryColor};
    a {
      color: ${props.theme.colors.primaryColor};
    }

    @media print {
      display: block;
    }
  `}

  ${breakpointMixin.landscapeTablet`
    margin-right: 3rem;
    font-size: 2.7rem;
  `}
`;

export {
  MenuWrapper,
  MenuItem
};
