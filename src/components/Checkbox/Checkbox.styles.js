import styled from '@emotion/styled';
import { css } from '@emotion/react';

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const CheckboxInput = styled.input`
  display: none;
`;

const CheckboxBox = styled.span`
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  width: 1.7rem;
  height: 1.7rem;
  margin-right: 1rem;
  border: .2rem solid ${(props) => props.theme.mainColors.primary};
  border-radius: .2rem;
  background: ${(props) => props.theme.colors.white};
  transition: ${(props) => props.theme.layout.transition};
  cursor: pointer;
  &::after {
    content: '';
    display: inline-block;
    transform: rotate(-53deg);
    width: .9rem;
    height: .6rem;
    margin-top: -.3rem;
    border-bottom: .2rem solid;
    border-left: .2rem solid;
    color: ${(props) => props.theme.mainColors.primary};
    opacity: 0;
  }

  ${(props) => props.isActive && css`
    background-color: ${props.theme.colors.white};
    border-color: ${props.theme.mainColors.primary};
    &:after {
      opacity: 1;
    }
  `};

  ${(props) => props.isDisabled && css`
    border-color: ${props.theme.mainColors.secondary};
  `};
`;

const LabelText = styled.span`
  display: block;
  cursor: pointer;

  ${(props) => props.isDisabled && css`
    color: ${props.theme.mainColors.secondary};
  `};
`;

export {
  CheckboxLabel,
  CheckboxInput,
  CheckboxBox,
  LabelText
};
