import React from 'react';
import styled from 'styled-components';
import { Title } from '../auth-info';
import { ButtonConsult } from '../buttons';
import { IHandler } from '../about';

const Wrapper = styled.div`
  width: 844px;
  margin: 280px auto 50px;
  ${Title} {
    font-family: MuseoSansBold, sans-serif;
    font-weight: 900;
    font-size: 64px;
    line-height: 76px;
    color: #202d3d;
    span {
      color: #c000d9;
    }
  }
  p {
    width: 368px;
    font-size: 18px;
    line-height: 24px;
    color: #5a6d73;
    font-family: MuseoSans, sans-serif;
    margin-bottom: 30px;
  }
  @media (max-width: 1279px) {
    width: auto;
    margin: 150px 30px 50px;
  }
  @media (max-width: 767px) {
    text-align: center;
  }
`;
const Description = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  h5 {
    @media (max-width: 1279px) {
      margin-left: 30px;
    }
    @media (max-width: 767px) {
      margin-left: 0;
      font-size: 22px;
    }
  }
  p {
    @media (max-width: 1279px) {
      width: auto;
      margin: 0 30px 30px;
    }
    @media (max-width: 767px) {
      font-size: 17px;
    }
  }
  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    margin-top: 34px;
  }
`;
const ButtonWrapper = styled.div`
  margin-top: 50px;
  @media (max-width: 1279px) {
    margin: 50px auto 0 30px;
  }
  @media (max-width: 767px) {
    margin-top: 30px;
    margin-left: 0;
  }
`;

const StreamInfoTitle = styled.div`
  span {
    color: #c000d9;
  }
  font-size: 26px;
  font-weight: 600;
  font-family: MuseoSansBold, sans-serif;
  @media (max-width: 767px) {
    font-size: 35px;
    line-height: 47px;
  }
`;

export const StreamInfo: React.FC<IHandler> = ({ handler }) => {
  return (
    <Wrapper>
      <StreamInfoTitle>
        Мобильный ID и <span>Stream</span>
      </StreamInfoTitle>
      <Description>
        <div>
          <h5>Удобно</h5>
          <p>
            Позволит быстро войти в приложение и на веб-сайты по номеру телефона
            без необходимости запоминать сложные пароли и отдельные логины для
            разных сервисов
          </p>
          <h5>Доступно</h5>
          <p>
            Мобильный ID доступен всем клиентам вне зависимости от модели
            телефона и Оператора связи
          </p>
          <h5>Надежно</h5>
          <p>
            Высокий уровень защиты персональной информации, которая не
            передается без явного разрешения Клиента в т.ч. посредством
            использования многофакторной аутентификации
          </p>
        </div>
        <div>
          <h5>Гибко</h5>
          <p>
            Универсальный API Mobile Connect - промышленный стандарт мобильной
            авторизации GSMA официально поддерживается ведущими Операторами
            связи во всем мире (уже используют более 100 млн человек)
          </p>
          <h5>Совместимо</h5>
          <p>
            Доступность для Клиента без специального оборудования на смартфонах,
            планшетах и обычных телефонах, не требующих дополнительной настройки
          </p>
          <h5>Эффективно</h5>
          <p>
            Повышение доверия к сервису со стороны клиентов за счет простоты и
            удобства
          </p>
        </div>
      </Description>
      <ButtonWrapper>
        <ButtonConsult handler={handler} />
      </ButtonWrapper>
    </Wrapper>
  );
};
