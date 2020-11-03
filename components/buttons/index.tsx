import styled from 'styled-components';
import React from 'react';

const ButtonConsultWrapper = styled.div<IButton>`
  font-family: MuseoSansMedium, sans-serif;
  font-size: 18px;
  line-height: 60px;
  display: inline-block;
  width: 287px;
  min-width: 220px;
  height: 60px;
  padding: 0 38px;
  cursor: pointer;
  -webkit-transition: background-color 0.3s ease;
  transition: background-color 0.3s ease;
  text-align: center;
  text-decoration: none;
  color: #fff;
  border: none;
  border-radius: 5px;
  background-color: #c000d9;
  box-shadow: none;
  margin: ${(props) => props.margin};
  :hover {
    background-color: #de04fa;
    color: #fff;
  }
`;

const ButtonDemoWrapper = styled(ButtonConsultWrapper)`
  color: #202d3d;
  background-color: transparent;
  border: 2px solid #bbc1c7;
  font-weight: 700;
`;

const ButtonsCallMeBackWrapper = styled.button`
    font-size: 18px;
    line-height: 60px;
    display: inline-block;
    min-width: 220px;
    height: 60px;
    padding: 0 38px;
    cursor: pointer;
    transition: background-color .3s ease;
    text-align: center;
    text-decoration: none;
    color: #fff;
    border: none;
    border-radius: 5px;
    background-color: #c000d9;
    box-shadow: none;
}`

export const ButtonConsult: React.FC<IButtonConsult> = ({
  handler,
  ...props
}) => {
  return (
    <ButtonConsultWrapper {...props} onClick={() => handler()}>
      Получить консультацию
    </ButtonConsultWrapper>
  );
};

export const ButtonCallMeBack: React.FC<{handler: Function}> = ({handler}) => {
  return (
    <ButtonsCallMeBackWrapper
      onClick={() => handler()}
    >
    Отправить запрос на звонок
    </ButtonsCallMeBackWrapper>
  )
}

export const ButtonDemo: React.FC<IButton> = (props) => {
  return (
    <ButtonDemoWrapper
      {...props}
      onClick={() => window.open('https://store.mobcon.prostream.ru/')}
    >
      Демо доступ
    </ButtonDemoWrapper>
  );
};

interface IButton {
  margin?: string;
}

interface IButtonConsult extends IButton {
  handler: Function;
}
