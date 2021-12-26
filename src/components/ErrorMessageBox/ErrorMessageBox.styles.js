import styled from '@emotion/styled';
import { css } from '@emotion/react';

const Wrapper = styled.div`
  display: flex;
  margin-top: -1rem;
  margin-bottom: 4rem;
  padding: 1rem 2rem;
  border-radius: ${(props) => props.theme.layout.borderRadius};
  background: ${(props) => props.theme.colors.yellow};

  ${(props) => props.simple && css`
    margin-bottom: 0;
    border-radius: 0;
    background: none;
  `};
`;
const Message = styled.p`
  margin-bottom: 0;
  margin-left: 2rem;
`;

export {
  Wrapper,
  Message
};
