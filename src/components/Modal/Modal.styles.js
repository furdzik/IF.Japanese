import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { breakpointMixin } from '@styles/mixins';

const shadowColor = 'rgba(0 0 0 / .1)';

const LayerWrapper = styled.div`
  position: fixed;
  inset: 0;
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(0 0 0 / .4);
  & > div {
    width: 100%;
    height: 100%;
  }

  ${breakpointMixin.landscapePhone(css`
    & > div {
      width: auto;
      height: auto;
    }
  `)};

  @media print {
    position: absolute;
    inset: 0 auto auto;
    z-index: 10000;
    display: block;
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
  box-shadow: 0 11px 15px -7px rgba(0 0 0 / .2), 0 24px 38px 3px rgba(0 0 0 / .14), 0 9px 46px 8px rgba(0 0 0 / .12);

  ${(props) => breakpointMixin.landscapePhone(css`
    min-width: 48rem;
    max-width: 48rem;
    border-radius: ${props.theme.layout.borderRadius};
  `)};

  ${breakpointMixin.laptop(css`
    min-width: 100rem;
    max-width: 100rem;
  `)};

  ${(props) => props.isLoading && css`
    min-height: 10rem;
  `};

  @media print {
    box-shadow: none;
  }
`;

const ModalHeader = styled.div`
  position: relative;
  padding: 1.7rem 5.2rem 1.7rem 2.5rem;
  background: ${(props) => props.theme.mainColors.secondary};
  color: ${(props) => props.theme.mainColors.primary};

  ${(props) => props.isOnlyMobile && css`
    padding: 1.5rem 1.55rem;
    box-shadow: 0 2px 7px ${shadowColor}, 0 1px 3px ${shadowColor};
  `};

  ${(props) => breakpointMixin.landscapePhone(css`
    border-radius: ${props.theme.layout.borderRadius} ${props.theme.layout.borderRadius} 0 0;
  `)};
`;

const Title = styled.div`
  font-size: 1.8rem;
  font-weight: ${(props) => props.theme.typography.fontWeight.regular};
  line-height: 1.3;
  letter-spacing: -.024rem;

  ${breakpointMixin.landscapePhone(css`
    font-size: 2rem;
  `)};
`;

const CloseButton = styled.button`
  position: absolute;
  top: .8rem;
  right: 1.3rem;
  display: block;
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
  height: calc(100vh - ${(props) => props.headerFooterHeight}px);
  height: calc(calc(var(--vh, 1vh) * 100) - ${(props) => props.headerFooterHeight}px);
  padding: 2rem;

  ${breakpointMixin.landscapePhone(css`
    height: 76.6vh;
    height: calc(var(--vh, 1vh) * 76.6);
  `)};

  @media only screen and (height <= 50rem) {
    height: 40vh;
    height: calc(var(--vh, 1vh) * 40);
  }

  ${(props) => props.isOnlyMobile && css`
    padding-right: 1.6rem;
    padding-bottom: 0;
    padding-left: 1.6rem;
  `};

  @media print {
    overflow: unset;
    max-height: none;
    padding-right: 0;
    padding-left: 0;
  }
`;

const ModalFooter = styled.div`
  padding: 3.2rem 0;
  text-align: center;

  ${(props) => props.isOnlyMobile && css`
    padding: 1rem 1.55rem;
    box-shadow: 0 -.2rem .7rem ${shadowColor}, 0 -.1rem .3rem ${shadowColor};
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
