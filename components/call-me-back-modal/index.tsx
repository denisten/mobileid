import React, { FormEvent } from 'react';
import styled from 'styled-components';
import { ButtonCallMeBack } from '../buttons';

export const ContentWrapper = styled.div`
  max-width: 800px;
  position: relative;
  padding: 1.2rem;
  background: #ffffff;
  background-clip: padding-box;
  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.25);
  margin: auto;
`;

export const ModalWindowContentWrapper = styled.form`
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
  .invalid {
    border: solid 1px red;
  }
  .description {
    font-size: 14px;
    line-height: 1.43;
    display: inline-block;
    padding-left: 10px;
    font-weight: 300;
    text-align: center;
    margin-top: 1em;
  }
  .button-wrapper {
    display: flex;
    justify-content: space-around;
  }
`;
export const CallMeBack: React.FC<ICallMeBack> = ({ handler }) => {
  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    handler();
  };
  return (
    <ContentWrapper>
      <div>
        <ModalWindowContentWrapper onSubmit={submitHandler}>
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
          <div className="button-wrapper">
            <ButtonCallMeBack handler={handler} />
          </div>
          <div className="description">
            Нажав кнопку отправить запрос вы подтверждаете свое согласие на
            обработку ваших данных
          </div>
        </ModalWindowContentWrapper>
      </div>
    </ContentWrapper>
  );
};

interface ICallMeBack {
  handler: Function;
}
