import React from 'react';
import styled from 'styled-components';
import { Slider } from '../slider';
import {
  Info,
  ISliderWithDescription, SimpleSubTitle, SimpleTitle,
  SliderWrapper,
  SubTitle,
} from '../auth-info';
import { Description } from '../quick-auth-info';

const Wrapper = styled(SliderWrapper)`
  margin: 200px auto 0 auto;
  color: #001424;
  ul {
    li::before {
      background-color: #001424;
    }
  }
  ${SubTitle} {
    font-family: MuseoSans, sans-serif;
    font-weight: 600;
  }
`;
const imgArray = [
  '/static/img/slider-3/3.1.png',
  '/static/img/slider-3/3.2.png',
  '/static/img/slider-3/3.3.png',
  '/static/img/slider-3/3.4.png',
  '/static/img/slider-3/3.5.png',
];

export const AuthPin: React.FC<ISliderWithDescription> = (props) => {
  return (
    <Wrapper {...props}>
      <Info>
        <SimpleTitle>Авторизация с вводом PIN-кода *</SimpleTitle>
        <Description>
          На сайтах с повышенными требованиями к безопасности, а также где в
          онлайн требуется подтверждение значимых операций, заказа, платежной
          транзакции, реализовано функционал подтверждения с помощью ввода
          ПИН-кода, который создается клиентом и храниться на SIM-карте
          телефона, обеспечивая высокую надежность и защищенность данных
        </Description>
        <SimpleSubTitle>Возможности</SimpleSubTitle>
        <ul>
          <li>Единый PIN-код для всех операций</li>
          <li>
            Передача персонализированных данных с согласия клиента только после
            получения явного подтверждения
          </li>
          <li>
            Проверка персонализированных данных с согласия клиента в онлайн
            сервисе
          </li>
        </ul>
      </Info>
      <Slider imgArray={imgArray} controllerColor="#6e7782" resizable={true}/>
    </Wrapper>
  );
};
