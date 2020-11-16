import React from 'react';
import styled from 'styled-components';
import { Slider } from '../slider';
import {
  Info,
  ISliderWithDescription,
  SimpleSubTitle,
  SimpleTitle,
  SliderWrapper,
} from '../auth-info';

const Wrapper = styled(SliderWrapper)`
  margin: 200px auto;
`;

export const Description = styled.div`
  width: 468px;
  padding: 0;
  display: flex;
  flex-direction: column;
  font-size: 18px;
  margin-top: 25px;
  margin-bottom: 35px;
  font-weight: 300;
  @media (max-width: 1279px) {
    width: auto;
    height: auto;
  }
  @media (max-width: 767px) {
    font-size: 14px;
    line-height: 17px;
  }
`;

export const QuickAuthInfo: React.FC<ISliderWithDescription> = (props) => {
  return (
    <Wrapper {...props}>
      <Info>
        <SimpleTitle>Быстрая авторизация</SimpleTitle>
        <Description>
          При использовании мобильного интернета, клиенту даже не придется
          вводить номер телефона. Оператор определит его автоматически, вход
          осуществляется при выборе клиентом кнопки «Мобильный ID» и
          подтверждением входа в Push-сообщении нажатием кнопки «ОК»
        </Description>
        <SimpleSubTitle>Возможности</SimpleSubTitle>
        <ul>
          <li>Легкий вход и регистрация на сайтах по номеру телефона</li>
          <li>Проверка номера вашего клиента на актуальность</li>
          <li>
            Подтверждение действия, операций, заказа, платежной транзакции через
            клик или ввод ПИН-кода в телефоне
          </li>
        </ul>
      </Info>
      <Slider
        imgArray={[
          '/static/img/slider-2/2.1.png',
          '/static/img/slider-2/2.2.png',
          '/static/img/slider-2/2.3.png',
          '/static/img/slider-2/2.4.png',
        ]}
        resizable={true}
      />
    </Wrapper>
  );
};
