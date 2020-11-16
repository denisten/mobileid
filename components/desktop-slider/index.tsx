import React from 'react';
import styled from 'styled-components';
import { Slider } from '../slider';

const Wrapper = styled.div`
  width: 868px;
  margin: 142px auto 50px;
  font-family: MuseoSansBold, sans-serif;
  @media (max-width: 767px) {
    width: auto;
  }
`;

const Title = styled.div`
  font-family: MuseoSansBold, sans-serif;
  font-weight: 900;
  width: 868px;
  height: 297px;
  font-size: 48px;
  line-height: 58px;
  color: #001424;
  @media (max-width: 1279px) {
    width: auto;
    height: auto;
    font-size: 30px;
    line-height: 40px;
    padding: 0 30px;
    margin-bottom: 30px;
  }
  @media (max-width: 767px) {
    text-align: center;
    font-size: 25px;
    line-height: 35px;
  }
`;
const SliderWrapper = styled.div`
  position: relative;
  width: 761px;
  height: 428px;
  @media (max-width: 1279px) {
    margin: auto;
  }
  @media (max-width: 767px) {
    width: auto;
    max-height: 50vw;
    margin: 0 30px;
  }
`;

const imgArray = [
  '/static/img/slider-desktop/1.png',
  '/static/img/slider-desktop/2.png',
  '/static/img/slider-desktop/3.png',
  '/static/img/slider-desktop/4.png',
];
export const DesktopSlider = () => {
  return (
    <Wrapper>
      <Title>
        Мобильный ID – межоператорский сервис по авторизации с одним техническим
        подключением и одним договором
      </Title>
      <SliderWrapper>
        <Slider
          boxShadow="0 22px 34px 0 rgba(0,0,0,.16)"
          controllerColor="#6e7782"
          imgPosition="initial"
          imgArray={imgArray}
          imgHeight="428px"
          imgWidth="761px"
          width="761px"
          height="428px"
          removeBackground={true}
          position="initial"
          resizable={false}
        />
      </SliderWrapper>
    </Wrapper>
  );
};
