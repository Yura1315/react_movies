import React, { ReactNode, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import './index.scss';
const modalRootElement = document.querySelector('#modal');

type ModalPropsType = {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
};

const Modal = ({ children, open, onClose }: ModalPropsType) => {
  const element = useMemo(() => document.createElement('div'), []);
  useEffect(() => {
    modalRootElement?.appendChild(element);

    return () => {
      modalRootElement?.removeChild(element);
    };
  }, [children]);
  if (open) {
    return createPortal(
      <div className="modal__back">
        <div className="modal__body">
          <button className="modal__close" type="button" onClick={onClose}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M17 17L1 1M17 1L1 17" stroke="black" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          {children}
        </div>
      </div>,
      element
    );
  }
  return null;
};

export default Modal;
