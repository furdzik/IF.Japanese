import styled from '@emotion/styled';

const Wrapper = styled.div`
  padding: 2rem 0;
  background: ${(props) => props.theme.colors.lightGray};

  @media print {
    display: none;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
`;

export {
  Wrapper,
  Title
};
