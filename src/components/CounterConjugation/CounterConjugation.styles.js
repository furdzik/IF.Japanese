import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
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
  AlternativeBox
};
