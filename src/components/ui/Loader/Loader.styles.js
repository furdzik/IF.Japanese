import styled, { css } from 'styled-components';

const LoaderWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  background: transparent;
  ${(props) => props.covered && css`
    background: ${props.theme.colors.white};
  `}
  ${(props) => props.fixed && css`
    position: fixed;
  `}
  ${(props) => props.static && css`
    position: static;
  `}
  ${(props) => props.transparent && css`
    background: transparent;
  `}
`;

const Spinner = styled.div`
  text-align: center;
`;

const CenterWrapper = styled.div`
  display: flex;
  position: relative;
  height: 9rem;
  justify-content: center;
  align-items: center;
`;

export {
  LoaderWrapper,
  Spinner,
  CenterWrapper
};
