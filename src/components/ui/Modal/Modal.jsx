import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import OutsideClickHandler from 'react-outside-click-handler';

import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';

import _throttle from 'lodash/throttle';

import Loader from '@components/ui/Loader';

import { SAFARI_BAR_VH, VIEWPORT_SIZE_CHECKING_DELAY } from '@config/constants';

import {
  LayerWrapper,
  ModalWrapper,
  ModalHeader,
  Title,
  CloseButton,
  ModalContent,
  ModalFooter
} from './Modal.styles';

const ESC_CODE = 27;

// @WORKAROUND: https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
// function calculates css --vh variable (fix to mobile vh unit)
const calculateViewportHeight = () => {
  const vh = window.innerHeight * SAFARI_BAR_VH;
  window.document.documentElement.style.setProperty('--vh', `${vh}px`);
};

const throttledCalculateViewportHeight = _throttle(
  calculateViewportHeight,
  VIEWPORT_SIZE_CHECKING_DELAY
);

const Modal = (props) => {
  const modalHeaderRef = useRef(null);
  const modalFooterRef = useRef(null);
  const [headerFooterHeight, setHeaderFooterHeight] = useState(0);

  const checkHeaderFooterHeight = () => {
    if (modalHeaderRef.current || modalFooterRef.current) {
      const modalHeaderHeight = modalHeaderRef.current ? modalHeaderRef.current.clientHeight : 0;
      const modalFooterHeight = modalFooterRef.current ? modalFooterRef.current.clientHeight : 0;
      setHeaderFooterHeight(
        modalHeaderHeight + modalFooterHeight
      );
    } else {
      setHeaderFooterHeight(0);
    }
  };

  const useHandleResize = useCallback(() => {
    checkHeaderFooterHeight();
  });

  useEffect(() => {
    checkHeaderFooterHeight();
    window.addEventListener('resize', useHandleResize);
    return () => window.removeEventListener('resize', useHandleResize);
  }, []);

  const handleKeyDown = (e) => {
    if (e.keyCode === ESC_CODE) {
      props.onClose();
    }
  };

  const handleModalClick = (e) => e.stopPropagation();

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown, false);
    calculateViewportHeight();
    window.addEventListener('resize', throttledCalculateViewportHeight);

    return () => {
      document.removeEventListener('keydown', handleKeyDown, false);
      window.removeEventListener('resize', throttledCalculateViewportHeight);
    };
  }, []);

  return ReactDOM.createPortal(
    <LayerWrapper>
      <OutsideClickHandler onOutsideClick={props.onClose}>
        <ModalWrapper
          className={props.className}
          isLoading={props.spin}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modalHeaderText"
          aria-describedby="modalContainer"
          onClick={handleModalClick}
        >
          {
            !props.nodeHeader && props.header ? (
              <ModalHeader ref={modalHeaderRef}>
                <Title>{props.header}</Title>
                <CloseButton
                  type="button"
                  onClick={props.onClose}
                >
                  <Icon
                    path={mdiClose}
                    color={useContext(ThemeContext).colorSecondary}
                    size="3rem"
                  />
                </CloseButton>
              </ModalHeader>
            ) : null
          }
          {
            props.nodeHeader ? (
              <ModalHeader ref={modalHeaderRef} isOnlyMobile={props.isOnlyMobile}>
                {props.nodeHeader}
              </ModalHeader>
            ) : null
          }
          <ModalContent
            isOnlyMobile={props.isOnlyMobile}
            headerFooterHeight={headerFooterHeight}
          >
            {
              props.spin ? (
                <Loader />
              ) : props.children
            }
          </ModalContent>
          {
            props.footer ? (
              <ModalFooter
                isOnlyMobile={props.isOnlyMobile}
                ref={modalFooterRef}
              >
                {props.footer}
              </ModalFooter>
            ) : null
          }
        </ModalWrapper>
      </OutsideClickHandler>
    </LayerWrapper>,
    document.body
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  footer: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node
  ]),
  header: PropTypes.string,
  isOnlyMobile: PropTypes.bool,
  onClose: PropTypes.func
};

Modal.defaultProps = {
  className: '',
  header: null,
  isOnlyMobile: false,
  footer: null,
  onClose: () => {}
};

export default Modal;
