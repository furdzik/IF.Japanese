import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
  margin-top: -1rem;
  margin-bottom: 4rem;
  padding: 1rem 2rem;
  border-radius: ${(props) => props.theme.layout.borderRadius};
  background: ${(props) => props.theme.colors.yellow};
`;
const Message = styled.p`
  margin-bottom: 0;
  margin-left: 2rem;
`;

export {
  Wrapper,
  Message
};
