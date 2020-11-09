import React, { MouseEvent } from 'react';
import styled from 'styled-components';
import { IHandler } from '../about';
import { ModalWindowContent } from '../../pages';
import { CallMeBack } from '../call-me-back-modal';
import { ConsultMe } from '../consult-me';

const Wrapper = styled.div`
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: flex-start;
  position: fixed;
  opacity: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 1000;
  padding: 1.2rem;
  transition: all 0.3s ease-out;
  visibility: hidden;
  &.open {
    opacity: 1;
    visibility: visible;
  }
  h4 {
    margin-bottom: 1em;
    text-align: center;
    margin-top: 0.5em;
  }
`;
const CloseButton = styled.div`
  position: absolute;
  top: 14px;
  right: 14px;
  border: none;
  padding: 0;
  background-color: transparent;
  display: flex;
  color: #fff;
  cursor: pointer;
`;

const wrapperId = 'modal-window-close-area';

export const ModalWindow: React.FC<IModalWindow> = (props) => {
  const { modalIsOpen, handler, content, handleCallMeBackClick, handleConsultMe, closeModalWindow } = props;
  const closeButtonClickHandler = (e: MouseEvent) => {
    e.stopPropagation();
    handler();
  };

  const wrapperClickHandler = (e: MouseEvent<HTMLDivElement>) => {
    // @ts-ignore
    if (e.target.getAttribute('id') === wrapperId) handler();
  };

  const defineContentElement = (content: ModalWindowContent | null) => {
    switch (content) {
      case ModalWindowContent.CALL_ME_BACK:
        return <CallMeBack handler={handleCallMeBackClick} />;
      case ModalWindowContent.CONSULT_ME:
        return <ConsultMe consultMeHandler={handleConsultMe} cancelHandler={closeModalWindow}/>;
      default:
        return null;
    }
  };

  const contentElement = defineContentElement(content);
  return (
    <Wrapper
      id={wrapperId}
      className={modalIsOpen ? 'open' : ''}
      onClick={wrapperClickHandler}
    >
      <CloseButton onClick={closeButtonClickHandler}>X</CloseButton>
      {contentElement}
    </Wrapper>
  );
};

interface IModalWindow extends IHandler {
  modalIsOpen: boolean;
  content: ModalWindowContent | null;
  handleCallMeBackClick: Function;
  handleConsultMe: Function;
  closeModalWindow: Function;
}
