import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #c000d9;
  color: #fff;
  font-size: 25px;
  font-weight: 300;
  @media (max-width: 1279px) {
    padding: 15px;
    font-size: 20px;
  }
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    height: auto;
    text-align: center;
    font-size: 14px;
  }
  a {
    color: #fff;
    text-decoration: underline;
    cursor: pointer;
    font-weight: 300;
    margin-left: 35px;
  }
`;

export const Header: React.FC<IHeader> = ({ handler }) => {
  return (
    <Wrapper>
      Сомневаетесь? Протестируйте до 30 дней бесплатно!
      <a onClick={() => handler()}>Попробовать </a>
    </Wrapper>
  );
};

interface IHeader {
  handler: Function;
}
