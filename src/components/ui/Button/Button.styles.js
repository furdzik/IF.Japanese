import styled from 'styled-components';

const ButtonWrapper = styled.button`
  padding: .5rem 2rem;
  border-radius: ${(props) => props.theme.layout.borderRadius};
  background: ${(props) => props.theme.mainColors.primary};
  color: ${(props) => props.theme.colors.white};
`;

export {
  ButtonWrapper
};
