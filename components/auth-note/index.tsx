import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div<INote>`
  width: 868px;
  font-size: 14px;
  letter-spacing: 0;
  color: #202d3d;
  margin: ${(props) => props.margin || '30px auto 0'};
`;

export const Note: React.FC<INote> = (props) => {
  return (
    <Wrapper {...props}>
      * функционал который появится в ближайшее время
    </Wrapper>
  );
};
interface INote {
  margin?: string;
}
