import styled, { css } from 'styled-components';

import { breakpointMixin } from '@styles/mixins';

const shadowColor = 'rgba(0, 0, 0, 0.1)';

const LayerWrapper = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 10000;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .4);
  & > div {
    width: 100%;
    height: 100%;
  }
  ${breakpointMixin.landscapePhone`
    & > div {
      width: auto;
      height: auto;
    }
  `};
  @media print {
    display: block;
    position: absolute;
    top: 0;
    right: auto;
    left: auto;
    bottom: auto;
    z-index: 10000;
    justify-content: unset;
    align-items: unset;
    width: 100%;
    height: 100%;
    background: none;
  }
`;

const ModalWrapper = styled.div`
  position: relative;
  background: ${(props) => props.theme.colors.white};
  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, .2), 0 24px 38px 3px rgba(0, 0, 0, .14), 0 9px 46px 8px rgba(0, 0, 0, .12);

  ${breakpointMixin.laptop`
    min-width: 100rem;
    max-width: 100rem;
  `};

  ${(props) => props.isLoading && css`
    min-height: 10rem;
  `};

  @media print {
    box-shadow: none;
  }
`;

const ModalHeader = styled.div`
  position: relative;
  padding: 2rem 5.2rem 2.5rem 2.5rem;

  ${(props) => props.isOnlyMobile && css`
    padding: 1.5rem 1.55rem;
    box-shadow: 0 2px 7px ${shadowColor}, 0 1px 3px ${shadowColor};
  `};
`;

const Title = styled.div`
  font-size: 2.2rem;
  font-weight: 200;
  line-height: 1.3;
  letter-spacing: -.024rem;

  ${breakpointMixin.landscapePhone`
    font-size: 2.4rem;
  `}
`;

const CloseButton = styled.button`
  display: block;
  position: absolute;
  top: 2.2rem;
  right: 1.3rem;
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  font-size: 3rem;
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;

  @media print {
    display: none;
  }
`;

const ModalContent = styled.div`
  overflow-y: auto;
  max-height: calc(100vh - ${(props) => props.headerFooterHeight}px);
  max-height: calc(calc(var(--vh, 1vh) * 100) - ${(props) => props.headerFooterHeight}px);
  padding: 0 2.4rem 3rem;

  ${breakpointMixin.landscapePhone`
    max-height: 76.6vh;
    max-height: calc(var(--vh, 1vh) * 76.6);
  `};

  @media only screen and (max-height: 500px) {
    max-height: 40vh;
    max-height: calc(var(--vh, 1vh) * 40);
  }

  ${(props) => props.isOnlyMobile && css`
    padding-right: 1.6rem;
    padding-left: 1.6rem;
    padding-bottom: 0;
  `};

  @media print {
    max-height: none;
    overflow: unset;
    padding-left: 0;
    padding-right: 0;
  }
`;

const ModalFooter = styled.div`
  padding: 3.2rem 0;
  text-align: center;

  ${(props) => props.isOnlyMobile && css`
    padding: 1rem 1.55rem;
    box-shadow: 0 -2px 7px ${shadowColor}, 0 -1px 3px ${shadowColor};
  `};
`;

export {
  LayerWrapper,
  ModalWrapper,
  ModalHeader,
  Title,
  CloseButton,
  ModalContent,
  ModalFooter
};
