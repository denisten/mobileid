import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  width: 844px;
  margin: auto;
  font-family: MuseoSansBold, sans-serif;
  @media (max-width: 1279px) {
    padding-left: 30px;
  }
  @media (max-width: 767px) {
    padding-left: 0;
    width: auto;
    justify-content: space-evenly;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 175px;
  font-family: MuseoSansMedium, sans-serif;
  .number {
    display: flex;
    justify-content: space-between;
    font-size: 66px;
    line-height: normal;
    margin-bottom: 6px;
    font-weight: 900;
  }
  .text {
    font-size: 18px;
    font-weight: 300;
    line-height: 1.56;
    color: #5a6d73;
  }
  @media (max-width: 767px){ 
      margin-right: 0;
    margin-bottom: 80px;
  }
`;

export const InfoInNumbers = () => {
  return (
    <Wrapper>
      <InfoWrapper>
        <span className="number">70</span>
        <span className="text">операторов</span>
      </InfoWrapper>
      <InfoWrapper>
        <span className="number">38</span>
        <span className="text">стран мира</span>
      </InfoWrapper>
    </Wrapper>
  );
};
