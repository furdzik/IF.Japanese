import styled, { css } from 'styled-components';

const CheckboxLabel = styled.label`
  display: flex;
  position: relative;
  align-items: flex-start;
  cursor: pointer;
`;

const CheckboxInput = styled.input`
  display: none;
`;

const CheckboxBox = styled.span`
  display: flex;
  position: relative;
  top: .25rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  margin-right: 1rem;
  height: 1.7rem;
  width: 1.7rem;
  border-radius: 2px;
  border: 2px solid ${(props) => props.theme.colors.primaryColor};
  background: ${(props) => props.theme.colors.white};
  transition: all 0.2s;
  cursor: pointer;
  &::after {
    display: inline-block;
    position: relative;
    top: -2px;
    transform: rotate(-53deg);
    width: 9px;
    height: 6px;
    border-left: 2px solid;
    border-bottom: 2px solid;
    color: ${(props) => props.theme.colors.primaryColor};
    content: '';
    opacity: 0;
  }
  
  ${(props) => props.isActive && css`
    background-color: ${props.theme.colors.white};
    border-color: ${props.theme.colors.primaryColor};
    &:after {
      opacity: 1;
    }
  `};

  ${(props) => props.isDisabled && css`
    border-color: ${props.theme.colors.secondaryColor};
  `};
`;

const LabelText = styled.span`
  display: block;
  cursor: pointer;

  ${(props) => props.isDisabled && css`
    color: ${props.theme.colors.secondaryColor};
  `};
`;

export {
  CheckboxLabel,
  CheckboxInput,
  CheckboxBox,
  LabelText
};
