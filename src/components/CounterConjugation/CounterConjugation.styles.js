import styled from '@emotion/styled';
// import { css } from '@emotion/react';

const Wrapper = styled.div`
  display: flex;
`;

const Box = styled.div`
  //width: 20rem;
`;

const AlternativeBox = styled.div`
  &::before {
    display: inline-block;
    margin: 0 3rem 0 0;
    content: '、';
  }
`;

export {
  Wrapper,
  Box,
  AlternativeBox
};
