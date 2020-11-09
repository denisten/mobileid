import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import {
  ContentWrapper,
  ModalWindowContentWrapper,
} from '../call-me-back-modal';
import { CancelButton, SendButton } from '../buttons';

const MultilineInput = styled.textarea`
  width: 100%;
  min-height: 160px;
  resize: none;
  font-family: MuseoSans, sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: normal;
  margin-bottom: 24px;
  padding: 21px 25px 19px;
  transition: box-shadow 0.3s;
  color: #2e3c40;
  border: 1px solid #e9e9e9;
  border-radius: 4px;
`;
const regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const ConsultMe: React.FC<IConsultMe> = ({
  consultMeHandler,
  cancelHandler,
}) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const inputRef = useRef(null);
  const [hasError, setHasError] = useState(true);

  const emailOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    setEmail(e?.target?.value);
  };
  const onBlur = () =>
    regExp.test(String(email).toLowerCase())
      ? setHasError(false)
      : setHasError(true);

  useEffect(() => {
    setTimeout(() => {
      if (inputRef.current) {
        // @ts-ignore
        inputRef?.current?.focus();
      }
    }, 100);
  }, []);

  return (
    <ContentWrapper>
      <div>
        <ModalWindowContentWrapper onSubmit={(e) => consultMeHandler(e)}>
          <h4>Отправка заявки на получение консультации</h4>
          <div>
            <input
              autoFocus
              ref={inputRef}
              className={hasError ? 'invalid' : ''}
              type="email"
              name="email"
              placeholder="Email"
              aria-label="Email"
              onChange={emailOnChangeHandler}
              onBlur={onBlur}
              value={email}
            />
          </div>
          <div>
            <MultilineInput
              name="message"
              placeholder="Дополнительные сведения"
              maxLength={500}
              aria-label="Дополнительные сведения"
            />
          </div>
          <div className="button-wrapper">
            <SendButton handler={(e: MouseEvent) => consultMeHandler(e)} disableFlag={hasError} />
            <CancelButton handler={cancelHandler} />
          </div>
        </ModalWindowContentWrapper>
      </div>
    </ContentWrapper>
  );
};

interface IConsultMe {
  consultMeHandler: Function;
  cancelHandler: Function;
}
