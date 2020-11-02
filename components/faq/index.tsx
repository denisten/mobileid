import React from 'react';
import styled from 'styled-components';
import { Accordion } from '../accordion';
import { useState } from 'react';
import { data } from './data';

const Wrapper = styled.div`
  width: 690px;
  margin: 100px auto;
  font-family: MuseoSans, sans-serif;
  list-style: none;
  h3 {
    text-align: center;
    margin-bottom: 30px;
  }
`;

const AccordionWrapper = styled.div`
  div:first-child {
    border-top: none;
  }
`;

const FAQNote = styled.div`
  font-size: 14px;
  letter-spacing: 0;
  color: #202d3d;
  margin-top: 50px;
  font-family: MuseoSans, sans-serif;
`;

const initState = new Array(9).fill(false);
export const FAQ = () => {
  const [state, setState] = useState(initState);

  const handler = (id: number) => {
    const newState = new Array(9).fill(false);
    newState[id] = !state[id];
    setState(newState);
  };

  return (
    <Wrapper>
      <h3>Вопросы и ответы *</h3>
      <AccordionWrapper>
        {state.map((el, id) => (
          <Accordion
            isOpened={state[id]}
            setIsOpened={handler}
            id={id}
            description={data[id].description}
            title={data[id].title}
          />
        ))}
      </AccordionWrapper>
      <FAQNote>
        * Получение дополнительной информации о клиенте при наличии
        соответствующего согласия. Функционал в разработке.
      </FAQNote>
    </Wrapper>
  );
};
