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

import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';

import OutsideClickHandler from 'react-outside-click-handler';
import { Scrollbars } from 'react-custom-scrollbars';

import { ESC_CODE } from '@config/constants';

import Loader from '@components/ui/Loader';

import {
  calculateViewportHeight,
  checkHeaderFooterHeight,
  throttledCalculateViewportHeight
} from './utils';

import {
  LayerWrapper,
  ModalWrapper,
  ModalHeader,
  Title,
  CloseButton,
  ModalContent,
  ModalFooter
} from './Modal.styles';

const Modal = (props) => {
  const modalHeaderRef = useRef(null);
  const modalFooterRef = useRef(null);
  const [headerFooterHeight, setHeaderFooterHeight] = useState(0);

  const useHandleResize = useCallback(() => {
    checkHeaderFooterHeight(modalHeaderRef, modalFooterRef, setHeaderFooterHeight);
  }, []);

  useEffect(() => {
    checkHeaderFooterHeight(modalHeaderRef, modalFooterRef, setHeaderFooterHeight);
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
                    color={useContext(ThemeContext).colors.secondaryColorHover}
                    size="2.5rem"
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
            <Scrollbars>
              {
                props.spin ? (
                  <Loader />
                ) : props.children
              }
            </Scrollbars>
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
    PropTypes.string,
    PropTypes.node
  ]),
  header: PropTypes.node,
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
