import React, { useState } from 'react';
import styled from 'styled-components';
import { Routes } from '../../pages/_document';

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
  @media (max-width: 767px) {
    font-size: 20px;
    line-height: 15px;
  }
`;
const Options = styled.div`
  display: flex;
  justify-content: center;
  font-size: 27px;
  color: #001424;
  margin-top: 45px;
  margin-bottom: 20px;
  font-family: MuseoSansMedium, sans-serif;
  @media (max-width: 767px) {
    font-size: 20px;
  }
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
  @media (max-width: 767px) {
    font-size: 20px;
  }
  .option2 {
    cursor: pointer;
    width: 4em;
    text-align: center;
  }
  div:first-child {
    margin-right: 30px;
  }
`;

export const FeedbackQuestion: React.FC<IFeedbackQuestion> = (props) => {
  const [likes, setLikes] = useState(props.likes);
  const [dislikes, setDislikes] = useState(props.dislikes);

  const handleYesClick = async () => {
    const feedback = localStorage.getItem('feedback');
    if (!feedback) {
      await fetch(Routes.updateFeedback, {
        method: 'POST',
        body: JSON.stringify({ likes: likes + 1, dislikes }),
      });
      setLikes(likes + 1);
      localStorage.setItem('feedback', 'like');
    } else if (feedback === 'dislike') {
      await fetch(Routes.updateFeedback, {
        method: 'POST',
        body: JSON.stringify({ likes: likes + 1, dislikes: dislikes - 1 }),
      });
      setLikes(likes + 1);
      setDislikes(dislikes - 1);
      localStorage.setItem('feedback', 'like');
    }
  };

  const handleNoClick = async () => {
    const feedback = localStorage.getItem('feedback');
    if (!feedback) {
      await fetch(Routes.updateFeedback, {
        method: 'POST',
        body: JSON.stringify({ likes, dislikes: dislikes + 1 }),
      });
      setDislikes(dislikes + 1);
      localStorage.setItem('feedback', 'dislike');
    } else if (feedback === 'like') {
      await fetch(Routes.updateFeedback, {
        method: 'POST',
        body: JSON.stringify({ likes: likes - 1, dislikes: dislikes + 1 }),
      });
      setLikes(likes - 1);
      setDislikes(dislikes + 1);
      localStorage.setItem('feedback', 'dislike');
    }
  };

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

export interface IFeedbackQuestion {
  likes: number;
  dislikes: number;
}
