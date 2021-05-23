import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
`;

const Title = styled.div`
  margin-bottom: 3rem;
  font-size: 3rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primaryColor};
`;

const GameField = styled.div`
  width: 50rem;
  margin: 0 auto;
  padding: 0 0 4rem;
  border: 2px solid ${(props) => props.theme.colors.secondaryColor};
  border-radius: ${(props) => props.theme.layout.borderRadius};
  text-align: center;
`;

const RandomKana = styled.div`
  padding: 2rem;
  font-size: 9rem;
  font-weight: bold;
`;

const Input = styled.input`
  width: 22rem;
  padding: 2rem;
  border: 4px solid ${(props) => props.theme.colors.secondaryColorHover};
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
  `}

  ${(props) => props.isIncorrect && css`
    background: #ffd3d3;
  `}
`;

const Instructions = styled.div`
  margin-top: 2rem;
  font-size: 1.6rem;
  color: ${(props) => props.theme.colors.secondaryColorHover};
  text-align: center;
`;

export {
  Wrapper,
  Title,
  GameField,
  RandomKana,
  Input,
  Instructions
};
