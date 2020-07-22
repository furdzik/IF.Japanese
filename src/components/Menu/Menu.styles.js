import styled, { css } from 'styled-components';

const MenuWrapper = styled.ul`
  display: flex;
`;

const MenuItem = styled.li`
  display: block;
  font-size: 2.7rem;
  font-weight: bold;
  margin: 3rem 3rem 3rem 0;
  color: ${(props) => props.theme.colors.black};
  a {
    color: ${(props) => props.theme.colors.black};
    text-decoration: none;
    &:hover {
      color: ${(props) => props.theme.colors.primaryColor};
      transition: all 0.3s ease 0s;
    }
  }

  ${(props) => props.active && css`
    color: ${(props) => props.theme.colors.primaryColor};
    a {
      color: ${(props) => props.theme.colors.primaryColor};
    }
  `}

  @media print {
    margin-top: 0;
  }
`;

export {
  MenuWrapper,
  MenuItem
};
