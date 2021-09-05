import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 3.5rem 4rem;
  border-radius: ${(props) => props.theme.layout.borderRadius};
  background: ${(props) => props.theme.colors.lightYellow};
`;

export {
  Wrapper
};
