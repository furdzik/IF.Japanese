import styled from '@emotion/styled';

const Svg = styled.svg`
  animation: rotator 1.5s linear infinite;

  @keyframes rotator {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(100deg);
    }
    100% {
      transform: rotate(270deg);
    }
  }
`;

const Circle = styled.circle`
  transform-origin: center;
  animation: dash 1.5s ease-in-out infinite;
  stroke-dasharray: 140;
  stroke-dashoffset: 0;
  stroke: ${(props) => props.theme.mainColors.primary};

  @keyframes dash {
    0% {
      stroke-dashoffset: 140;
    }
    50% {
      transform: rotate(200deg);
      stroke-dashoffset: 35;
    }
    100% {
      transform: rotate(450deg);
      stroke-dashoffset: 140;
    }
  }
`;

export {
  Svg,
  Circle
};
