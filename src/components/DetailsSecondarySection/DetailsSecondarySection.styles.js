import styled from 'styled-components';

const Wrapper = styled.div`
  width: ${(props) => props.width}rem;
  margin-left: auto;
  padding-left: 4rem;
  border-left: 1px dotted ${(props) => props.theme.colors.secondaryColor};
  border-radius: ${(props) => props.theme.layout.borderRadius};
`;

export {
  Wrapper
};
