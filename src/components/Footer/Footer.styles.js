import styled from 'styled-components';

const FooterWrapper = styled.div`
  padding: 3rem 0;
  background: ${(props) => props.theme.colors.lightGray};
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.secondaryColorHover};
  text-align: center;
`;

export {
  FooterWrapper
};
