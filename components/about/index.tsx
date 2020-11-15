import React from 'react';
import styled from 'styled-components';
import { ButtonConsult, ButtonDemo } from '../buttons';

const Star = styled.div`
  display: inline-block;
  position: absolute;
  font-size: 32.5px;
  top: 6px;
`;

const Wrapper = styled.div`
  position: relative;
  width: 844px;
  font-size: 64px;
  line-height: 76px;
  color: #202d3d;
  margin: 95px auto 0;
  @media (max-width: 1279px) {
    padding: 0 30px;
    margin-top: 50px;
    font-size: 45px;
    line-height: 57px;
  }
  @media (max-width: 767px) {
    width: auto;
    text-align: center;
    font-size: 30px;
    line-height: 42px;
  }
  h1 {
    line-height: 1.07;
  }
`;
const H1Description = styled.div`
  font-size: 14px;
  line-height: normal;
  letter-spacing: 0;
  color: #202d3d;
  margin-top: 15px;
  font-weight: 400;
  @media (max-width: 767px) {
    width: auto;
    text-align: center;
    font-size: 9px;
  }
`;

const Description = styled.div`
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  width: 560px;
  p {
    font-size: 17px;
    margin: 18px 0 0 0;
  }
`;

export const About= () => {
  return (
    <Wrapper>
      <h1>
        Мобильный{' '}
        <span>
          ID<Star>*</Star>
        </span>
      </h1>
      <H1Description>
        * Услуга предоставляется для юридических лиц.
      </H1Description>
      <Description>
        <p>
          Быстрая и безопасная авторизация на сайтах и приложениях партнеров с
          помощью мобильного телефона
        </p>
        <p>
          Универсальное решение проблемы забытых паролей и логинов, и
          автозаполнению данных.
        </p>
      </Description>
    </Wrapper>
  );
};

export interface IHandler {
  handler: Function;
}
