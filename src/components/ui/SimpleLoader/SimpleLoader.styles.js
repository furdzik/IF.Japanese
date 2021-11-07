import styled from '@emotion/styled';

const Wrapper = styled.div`
  @keyframes dot-keyframes {
    0% {
      transform: scale(1, 1);
      opacity: .4;
    }

    50% {
      transform: scale(1.2, 1.2);
      opacity: 1;
    }

    100% {
      transform: scale(1, 1);
      opacity: .4;
    }
  }
`;

const Dot = styled.div`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 1rem;
  background: ${(props) => props.theme.mainColors.primary};
  animation: dot-keyframes 1.1s infinite ease-in-out;

  & + & {
    margin-left: .5rem;
  }
  &:nth-child(2) {
    animation-delay: .3s;
  }

  &:nth-child(3) {
    animation-delay: .7s;
  }
`;

export {
  Wrapper,
  Dot
};
