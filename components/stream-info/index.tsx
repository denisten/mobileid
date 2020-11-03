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
`;
const Description = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;
const ButtonWrapper = styled.div`
  margin-top: 50px;
`;

export const StreamInfo: React.FC<IHandler> = ({ handler }) => {
  return (
    <Wrapper>
      <Title>
        Мобильный ID и <span>Stream</span>
      </Title>
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
