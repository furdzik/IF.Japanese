import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 6rem 0;
  border: 2px solid ${(props) => props.theme.colors.secondaryColorHover};
  border-radius: ${(props) => props.theme.layout.borderRadius};
  background: ${(props) => props.theme.colors.lightGray};
`;

const GameField = styled.div`
  text-align: center;
`;

const Input = styled.input`
  width: 22rem;
  padding: 2rem;
  border: 4px solid ${(props) => props.theme.colors.secondaryColorHover};
  border-radius: ${(props) => props.theme.layout.borderRadius};
  font-size: 6rem;
  font-family: 'Noto Sans JP', sans-serif;
  text-align: center;
`;

const RandomKana = styled.div`
  padding: 2rem;
  font-size: 10rem;
  font-weight: bold;
`;

const Instructions = styled.div`
  margin-top: 2rem;
  color: ${(props) => props.theme.colors.secondaryColorHover};
  font-size: 1.6rem;
  text-align: center;
`;

export {
  Wrapper,
  GameField,
  Input,
  RandomKana,
  Instructions
};
