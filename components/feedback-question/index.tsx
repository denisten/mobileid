import React, { useState } from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
  margin-bottom: 144px;
`;
const TitleWrapper = styled.div`
  font-size: 27px;
  line-height: 20px;
  color: #001424;
  font-family: MuseoSans, sans-serif;
  font-weight: 600;
  text-align: center;
  padding: 0 30px;
`;
const Options = styled.div`
  display: flex;
  justify-content: center;
  font-size: 27px;
  color: #001424;
  margin-top: 45px;
  margin-bottom: 20px;
  font-family: MuseoSansMedium, sans-serif;
  .option {
    cursor: pointer;
    width: 4em;
    text-align: center;
  }
  .yes {
    margin-right: 30px;
  }
`;
const Amount = styled.div`
  display: flex;
  justify-content: center;
  font-size: 27px;
  font-family: MuseoSansMedium, sans-serif;
  color: #001424;
  .option2 {
    cursor: pointer;
    width: 4em;
    text-align: center;
  }
  div:first-child {
    margin-right: 30px;
  }
`;

export const FeedbackQuestion = () => {
  const [likes, setLikes] = useState(24);
  const [dislikes, setDislikes] = useState(4);

  const handleYesClick = () => setLikes(likes + 1);
  const handleNoClick = () => setDislikes(dislikes + 1);
  return (
    <Wrapper>
      <TitleWrapper>Эта страница была полезна?</TitleWrapper>
      <Options>
        <div className="option yes" onClick={handleYesClick}>
          🤩 Да
        </div>
        <div className="option" onClick={handleNoClick}>
          🤨 Нет
        </div>
      </Options>
      <Amount>
        <div className="option2">{likes}</div>
        <div className="option2">{dislikes}</div>
      </Amount>
    </Wrapper>
  );
};
