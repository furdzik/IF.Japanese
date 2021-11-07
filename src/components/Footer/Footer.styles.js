import styled from '@emotion/styled';

const FooterWrapper = styled.div`
  margin-top: 5rem;
  padding: 3rem 0;
  background: ${(props) => props.theme.colors.lightGray};
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.darkGray};
  text-align: center;

  @media print {
    display: none;
  }
`;

export {
  FooterWrapper
};
