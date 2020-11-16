import styled from 'styled-components';
import React from 'react';
import { IHandler } from '../about';

const ButtonConsultWrapper = styled.button<IButtonWrapper>`
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
  :disabled {
    background-color: #626d70;
  }
  :hover {
    background-color: #de04fa;
    color: #fff;
  }
  @media (max-width: 767px) {
    margin-right: 0;
    margin-bottom: 30px;
  }
`;

const CustomButtonWrapper = styled(ButtonConsultWrapper)`
  width: auto;
`;

const ButtonDemoWrapper = styled(ButtonConsultWrapper)`
  color: #202d3d;
  background-color: transparent;
  border: 2px solid #bbc1c7;
  font-weight: 700;
`;

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

export const SendButton: React.FC<IButton> = ({
  handler,
  disableFlag = false,
}) => {
  return (
    <CustomButtonWrapper onClick={() => handler()} disabled={disableFlag}>
      Отправить
    </CustomButtonWrapper>
  );
};

export const CancelButton: React.FC<IHandler> = ({ handler }) => {
  return (
    <CustomButtonWrapper onClick={() => handler()}>Отмена</CustomButtonWrapper>
  );
};

export const ButtonCallMeBack: React.FC<IHandler> = ({ handler }) => {
  return (
    <ButtonConsultWrapper onClick={() => handler()}>
      Отправить запрос на звонок
    </ButtonConsultWrapper>
  );
};

export const ButtonDemo: React.FC<IButton> = (props) => {
  return (
    <ButtonDemoWrapper
      {...props}
      onClick={() => window.open(process.env.demoUrl)}
    >
      Демо доступ
    </ButtonDemoWrapper>
  );
};

interface IButton extends IButtonWrapper {
  disableFlag?: boolean;
  handler: Function;
}

interface IButtonWrapper {
  margin?: string;
}
interface IButtonConsult extends IButton {
  handler: Function;
}
