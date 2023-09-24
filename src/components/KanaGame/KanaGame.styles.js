import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { breakpointMixin } from '@styles/mixins';

const Wrapper = styled.div`
  text-align: center;
`;

const Title = styled.div`
  margin-bottom: 3rem;
  font-size: 3rem;
  font-weight: ${(props) => props.theme.typography.fontWeight.semibold};
  color: ${(props) => props.theme.mainColors.primary};
`;

const FiltersWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
`;

const GameField = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 0 4rem;
  border: 2px solid ${(props) => props.theme.mainColors.secondary};
  border-radius: ${(props) => props.theme.layout.borderRadius};
  text-align: center;

  ${breakpointMixin.laptop(css`
    width: auto;
    max-width: 50rem;
  `)};
`;

const RandomKana = styled.div`
  padding: 2rem;
  font-size: 9rem;
  font-weight: ${(props) => props.theme.typography.fontWeight.semibold};
`;

const Input = styled.input`
  width: 22rem;
  padding: 2rem;
  border: 4px solid ${(props) => props.theme.colors.darkGray};
  border-radius: ${(props) => props.theme.layout.borderRadius};
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 6rem;
  text-align: center;

  &:focus {
    border-color: ${(props) => props.theme.colors.black};
    outline: none;
  }

  ${(props) => props.isCorrect && css`
    background: #d4ffd4;
  `};

  ${(props) => props.isIncorrect && css`
    background: #ffd3d3;
  `};
`;

const Instructions = styled.div`
  margin-top: 2rem;
  font-size: 1.6rem;
  color: ${(props) => props.theme.colors.darkGray};
  text-align: center;
`;

export {
  Wrapper,
  Title,
  FiltersWrapper,
  GameField,
  RandomKana,
  Input,
  Instructions
};
