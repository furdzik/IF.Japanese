import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 2rem 0;
  background: ${(props) => props.theme.colors.lightGray};
`;

const Title = styled.h1`
  font-size: 2rem;
`;

export {
  Wrapper,
  Title
};
