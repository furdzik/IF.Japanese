import styled from 'styled-components';

const FooterWrapper = styled.div`
  padding: 3rem 0;
  background: ${(props) => props.theme.colors.primaryColor};
  cursor: ${(props) => props.theme.colors.white};
`;

export {
  FooterWrapper
};
