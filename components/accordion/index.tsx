import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const Title = styled.div`
  cursor: pointer;
  display: flex;
  position: relative;
  padding: 30px 30px 30px 31px;
  align-items: center;
  :before {
    position: absolute;
    top: 0;
    right: 0;
    width: 10px;
    height: 100%;
    content: '';
    transition: all 0.4s ease;
    transition-delay: 0s;
    background-image: url('/static/img/accordion/down.svg');
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: 10px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  border-top: 1px solid #f2f2f2;
  span {
    font-family: MuseoSansMedium, sans-serif;
    font-size: 18px;
    font-weight: 700;
  }
`;

const Icon = styled.i`
  margin-right: 20px;
  background-image: url('/static/img/accordion/accordion-icon.svg');
  position: absolute;
  top: 50%;
  left: 0;
  width: 15px;
  height: 20px;
  transform: translateY(-50%);
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: contain;
`;
const Description = styled.ul`
  display: block;
  list-style: none;
  padding: 0 0 0 31px;
  font-size: 18px;
  font-weight: 300;
  line-height: 1.56;
  color: #5a6d73;
  margin: 0;
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.4s ease-in-out;
  &.open {
    max-height: 300px;
  }
  li {
    display: block;
    padding: 16px 0;
  }
  div {
    margin-bottom: 20px;
  }
`;

export const Accordion: React.FC<IAccordion> = (props) => {
  const { isOpened, setIsOpened, id, title, description } = props;
  const descRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    isOpened
      ? descRef.current?.classList.add('open')
      : descRef.current?.classList.remove('open');
  }, [isOpened]);

  return (
    <Wrapper>
      <Title onClick={() => setIsOpened(id)}>
        <Icon /> <span>{title}</span>
      </Title>
      <Description ref={descRef}>
        <li>
          {description.map((el) => (
            <div>{el}</div>
          ))}
        </li>
      </Description>
    </Wrapper>
  );
};

interface IAccordion {
  isOpened: boolean;
  setIsOpened: Function;
  id: number;
  title: string;
  description: string[];
}
