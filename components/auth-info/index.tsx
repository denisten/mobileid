import React from 'react';
import styled from 'styled-components';
import { Slider } from '../slider';

export const SliderWrapper = styled.div<IWrapper>`
  background-color: ${(props) => props.backgroundColor};
  position: relative;
  display: flex;
  width: 968px;
  height: auto;
  margin: auto;
  font-family: MuseoSansCyrl, sans-serif;
  line-height: 1.56;
  z-index: 0;
  color: #fff;
  @media (max-width: 1297px) {
    width: auto;
    height: auto;
  }
  ul {
    padding: 0;
    line-height: 28.08px;
    li {
      line-height: 28px;
      list-style: none;
      padding: 5px 0 5px 24px;
      font-size: 18px;
      position: relative;
      @media (max-width: 767px) {
        font-size: 14px;
        padding: 0 0 0 24px;
      }
    }
    li::before {
      position: absolute;
      left: 0;
      width: 8px;
      height: 8px;
      margin-top: -4px;
      content: '';
      border-radius: 100%;
      background-color: #fff;
      top: 50%;
    }
    @media (max-width: 1279px) {
      width: auto;
      height: auto;
    }
  }
  ol {
    display: flex;
    flex-direction: column;
    font-size: 18px;
    padding-left: 24px;
    margin-top: 25px;
    margin-bottom: 35px;
    font-weight: 300;
    justify-content: space-evenly;
    list-style: none;
    counter-reset: numeric-counter;
    @media (max-width: 1279px) {
      width: auto;
      height: auto;
    }
    @media (max-width: 767px) {
      font-size: 14px;
      line-height: 17px;
    }
    li {
      counter-increment: numeric-counter;
      position: relative;
      list-style-type: none;
      display: list-item;
    }
    li:before {
      content: counter(numeric-counter) '.';
      font-weight: 700;
      position: absolute;
      left: -24px;
    }
  }
`;
export const Info = styled.div`
  margin-top: 58px;
  margin-bottom: 58px;
  margin-left: 99px;
  width: 444px;
  @media (max-width: 1279px) {
    width: auto;
    margin: 490px 58px 58px;
  }
`;

export const SimpleTitle = styled.div`
  font-size: 26px;
  font-weight: 600;
  font-family: MuseoSansBold, sans-serif;
  @media (max-width: 1279px) {
    text-align: center;
  }
  @media (max-width: 767px) {
    text-align: center;
    font-size: 21px;
  }
`;
export const Title = styled(SimpleTitle)``;
export const SimpleSubTitle = styled.div`
  font-size: 23px;
  font-weight: 600;
  font-family: MuseoSansBold, sans-serif;
  @media (max-width: 1279px) {
    padding: 0 30px;
    text-align: center;
  }
  @media (max-width: 767px) {
    text-align: center;
    font-size: 18px;
  }
`;
export const SubTitle = styled(SimpleSubTitle)`
  @media (max-width: 767px) {
    font-size: 18px;
  }
`;
const imgArray = [
  '/static/img/slider-1/1.1.png',
  '/static/img/slider-1/1.2.png',
  '/static/img/slider-1/1.3.png',
  '/static/img/slider-1/1.4.png',
  '/static/img/slider-1/1.5.png',
];

export const AuthInfo: React.FC<ISliderWithDescription> = (props) => {
  return (
    <SliderWrapper {...props}>
      <Info>
        <SimpleTitle>Авторизация с вводом номера</SimpleTitle>
        <ol>
          <li>
            Клиент на сайте выбирает как способ входа или регистрации «Мобильный
            ID»
          </li>
          <li>Вводит свой номер и получает на телефон Push - сообщение</li>
          <li>
            На указанный номер придет Push-сообщение с предложением подтвердить
            вход и передачу данных, нажатием кнопки «Ок»
          </li>
        </ol>
        <SimpleSubTitle>Возможности</SimpleSubTitle>
        <ul>
          <li>Минимальное количество шагов</li>
          <li>Безопасность передачи данных</li>
          <li>
            Работает на любых устройствах: компьютер, планшет, смартфон,
            кнопочный телефон
          </li>
        </ul>
      </Info>
      <Slider imgArray={imgArray} resizable={true} />
    </SliderWrapper>
  );
};

export interface ISliderWithDescription {
  backgroundColor: string;
}

interface IWrapper {
  backgroundColor: string;
}
