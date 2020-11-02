import React from 'react';
import styled from 'styled-components';

const SmallTextWrapper = styled.div`
  width: 844px;
  padding-right: 276px;
  height: auto;
  font-size: 18px;
  line-height: 24px;
  color: #202d3d;
  margin: 90px auto 160px;
  font-family: MuseoSansMedium, sans-serif;
  @media (max-width: 1279px) {
    padding-left: 30px;
    font-size: 14px;
    line-height: 21px;
  }
  a {
    color: #c000d9;
    text-decoration: none;
  }
`;

export const SmallText = () => {
  return (
    <SmallTextWrapper>
      Решение работает по технологии
      <a href="https://mobileconnect.io/">Mobile Connect</a>, являющейся мировым
      стандартом, поддерживаемым Ассоциацией GSM (GSMA). Функционал уже
      запустили 70 операторов мобильной связи в 38 странах мира. В России
      поддерживается операторами МТС, МегаФон, Билайн, Теле2
    </SmallTextWrapper>
  );
};
