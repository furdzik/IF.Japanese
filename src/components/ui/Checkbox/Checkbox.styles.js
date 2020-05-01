import styled, { css } from 'styled-components';

const CheckboxLabel = styled.label`
  display: flex;
  position: relative;
  align-items: flex-start;
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
  height: 1.7rem;
  width: 1.7rem;
  border-radius: 2px;
  border: 2px solid ${(props) => props.theme.colors.primaryColor};
  background: ${(props) => props.theme.colors.white};
  transition: all 0.2s;
  margin-right: 1rem;
  cursor: pointer;
  &::after {
    display: inline-block;
    position: relative;
    top: -2px;
    transform: rotate(-53deg);
    width: 11px;
    height: 7px;
    border-left: 2px solid;
    border-bottom: 2px solid;
    color: #ffffff;
    content: '';
    opacity: 0;
  }
  
  ${(props) => props.isActive && css`
    background-color: ${props.theme.colors.primaryColor};
    border-color: ${props.theme.colors.primaryColor};
    &:after {
      opacity: 1;
    }
  `};
  
  ${(props) => props.isInvalid && css`
    border-color: pink;
    ${props.isActive && css`
      background-color: pink;
    `};
  `};

  ${(props) => props.isDisabled && css`
    border-color: ${props.theme.colors.secondaryColor};
  `};
  ${(props) => (props.isInvalid || props.isActive) && props.isDisabled && css`
    border-color: ${props.theme.colors.secondaryColor};
    background-color: ${props.theme.colors.secondaryColor};
  `};
`;

const LabelText = styled.span`
  display: block;

  ${(props) => props.isPrimary && css`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
  `};

  ${(props) => props.isSecondary && css`
    display: block;
    cursor: pointer;

    ${props.isDisabled && css`
      color: ${props.theme.colors.secondaryColor};
    `};
  `};
`;

export {
  CheckboxLabel,
  CheckboxInput,
  CheckboxBox,
  LabelText
};
