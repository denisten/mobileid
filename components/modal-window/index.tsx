import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useRef } from 'react';

const Wrapper = styled.div`
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: flex-start;
  position: fixed;
  opacity: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 1000;
  padding: 1.2rem;
  transition: all 0.5s ease-in-out;
  &.closed {
    opacity: 0;
  }
  h4 {
    margin-bottom: 1em;
    text-align: center;
    margin-top: 0.5em;
  }
`;

const ContentWrapper = styled.div`
  max-width: 800px;
  position: relative;
  padding: 1.2rem;
  background: #ffffff;
  background-clip: padding-box;
  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.25);
  margin: auto;
`;

const Content = styled.form`
  position: relative;
  max-width: 690px;
  div {
    display: block;
    width: 100%;
  }
  input {
    font-family: MuseoSans, sans-serif;
    font-size: 16px;
    font-weight: 300;
    line-height: normal;
    margin-bottom: 24px;
    padding: 21px 25px 19px;
    transition: box-shadow 0.3s;
    color: #2e3c40;
    border: 1px solid #e9e9e9;
    border-radius: 4px;
    width: 100%;
  }
  .description {
    font-size: 14px;
    line-height: 1.43;
    display: inline-block;
    padding-left: 10px;
    font-weight: 300;
    text-align: center;
  }
`;

export const ModalWindow: React.FC<IModalWindow> = (props) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { modalIsOpen } = props;

  useEffect(() => {
    if (modalIsOpen) wrapperRef.current.style.display = 'block';
  }, [modalIsOpen]);

  const transitionEndHandler = () => {
    wrapperRef.current.style.display = 'none';
  };

  return (
    <Wrapper
      ref={wrapperRef}
      className={!modalIsOpen ? 'closed' : ''}
      onTransitionEnd={transitionEndHandler}
    >
      <ContentWrapper>
        <div>
          <Content>
            <h4>Заказать обратный звонок</h4>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Ваше имя"
                aria-label="Ваше имя"
              />
            </div>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Ваш номер телефона"
                aria-label="Ваше имя"
              />
            </div>
            <div className="description">
              Нажав кнопку отправить запрос вы подтверждаете свое согласие на
              обработку ваших данных
            </div>
          </Content>
        </div>
      </ContentWrapper>
    </Wrapper>
  );
};

interface IModalWindow {
  modalIsOpen: boolean;
}
