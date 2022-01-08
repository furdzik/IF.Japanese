import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
`;

const AlternativeBox = styled.div`
  &::before {
    content: '、';
    display: inline-block;
    margin: 0 3rem 0 0;
  }
`;

export {
  Wrapper,
  AlternativeBox
};
