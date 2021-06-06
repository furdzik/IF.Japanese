import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: ${(props) => props.theme.layout.containerWidth};
  margin: 0 auto;
  padding: ${(props) => props.theme.layout.padding};
`;

export {
  Wrapper
};
