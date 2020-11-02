import React from 'react';
import styled from 'styled-components';
import { SubTitle, Title } from '../auth-info';
import { ButtonConsult, ButtonDemo } from '../buttons';
import { Note } from '../auth-note';

const Wrapper = styled.div`
  width: 844px;
  margin: 130px auto 50px;
  font-family: MuseoSansMedium, sans-serif;
`;

const InfoTitle = styled(Title)`
  width: 568px;
  height: 64px;
  font-size: 26px;
  color: #001424;
  font-weight: 700;
`;
const Advantages = styled.div`
  display: flex;
  justify-content: space-between;
  width: 844px;
  margin-top: 50px;
  margin-bottom: 50px;
  ul {
    width: 380px;
    height: auto;
    color: #001424;
    margin-top: 15px;
    padding: 0;
    list-style: none;
  }
  li {
    font-size: 18px;
    line-height: inherit;
    padding-bottom: 5px;
    padding-top: 5px;
    position: relative;
    padding-left: 24px;
    color: #2e3c40;
    font-family: MuseoSans, sans-serif;
    font-weight: 300;
  }
  li:before {
    top: 0.8em;
    position: absolute;
    left: 0;
    width: 8px;
    height: 8px;
    margin-top: -4px;
    content: '';
    border-radius: 100%;
    background-color: #000;
  }
`;
const ButtonsWrapper = styled.div`
  width: 800px;
  display: flex;
`;

export const Info = () => {
  return (
    <Wrapper>
      <InfoTitle>
        Автоматическое заполнение профиля и обогащение его персонализированными
        данными с согласия клиента *
      </InfoTitle>
      <Advantages>
        <div>
          <SubTitle>Преимущества для клиента:</SubTitle>
          <ul>
            <li>Не заполняйте длинные анкеты, Мобильный ID заполнит за вас</li>
            <li>Управляйте доступом к своим данным</li>
            <li>Экономия времени при заполнении</li>
          </ul>
        </div>
        <div>
          <SubTitle>Для сервиса:</SubTitle>
          <ul>
            <li>
              Получение персонализированных данных с согласия клиента (телефон,
              паспортные данные, адреса доставки товара и т.п.)
            </li>
            <li>Повышение конверсии</li>
          </ul>
        </div>
      </Advantages>
      <ButtonsWrapper>
        <ButtonConsult margin="0 35px 0 0" />
        <ButtonDemo />
      </ButtonsWrapper>
      <Note margin="50px 0 0 0" />
    </Wrapper>
  );
};