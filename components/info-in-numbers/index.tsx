import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  width: 844px;
  margin: auto;
  font-family: MuseoSansBold, sans-serif;
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
