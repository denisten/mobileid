import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div<ISliderWrapper>`
  width: ${(props) => props.width || '250px'};
  height: ${(props) => props.height || '501px'};
  position: ${(props) => props.position || 'absolute'};
  right: ${(props) => props.right || '80px'};
  top: ${(props) => props.top || '-105px'};
  background-image: ${(props) =>
    props.removeBackground
      ? 'none'
      : 'url("/static/img/iphone.webp")'};
  background-size: contain;
  box-shadow: ${(props) => props.boxShadow || 'inherit'};
  @media(max-width: 1279px) {
  ${props => props.resizable ? `
    right: 50%;
    top: -105px;
    transform: translateX(50%);` : ''}
  }
  
  @media (max-width: 767px) {
   ${props => !props.resizable ? `
      width: auto;
      max-height: 50vw;` : ''}
    }
  .wrapper {
    overflow: hidden;
    display: flex;
    height: ${(props) => props.imgHeight || '382px'};
    width: ${(props) => props.imgWidth || '218px'};
    top: 62px;
    left: 16px;
    position: ${(props) => props.imgPosition || 'absolute'};
  }
  img {
    opacity: 0;
    position: absolute;
  }
  .active {
    opacity: 1;
    transition-duration: 0.5s;
    transition-property: opacity;
    transition-timing-function: ease-in-out;
  }
`;

const Controllers = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 86px;
  bottom: -40px;
  margin-left: 50%;
  transform: translateX(-50%);
  .active {
    background-color: #c000d9;
  }
`;

const Controller = styled.div<IController>`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: ${(props) => props.controllerColor || '#fff'};
  cursor: pointer;
  transition: background-color 0.3s;
`;

export const Slider: React.FC<ISlider> = ({
  controllerColor,
  imgArray,
  ...props
}) => {
  const timer = useRef(0);
  const [selectedImg, setSelectedImg] = useState(0);
  const handleControllerClick = (id: number) => {
    setSelectedImg(id);
  };
  useEffect(() => {
    timer.current = setTimeout(() => {
      setSelectedImg(prevState => (prevState + 1) % imgArray.length)
    }, 2500)
    return () => clearTimeout(timer.current)
  }, [timer.current])
  return (
    <Wrapper {...props}>
      <div className="wrapper">
        {imgArray.map((img, id) => (
          <img
            src={img}
            alt="slide"
            key={img}
            className={id === selectedImg ? 'active' : ''}
          />
        ))}
      </div>
      <Controllers>
        {imgArray.map((img, id) => (
          <Controller
            controllerColor={controllerColor}
            key={img}
            className={id === selectedImg ? 'active' : ''}
            onClick={() => handleControllerClick(id)}
          />
        ))}
      </Controllers>
    </Wrapper>
  );
};

interface ISlider extends IController, ISliderWrapper {
  imgArray: string[];
}

interface IController {
  controllerColor?: string;
}

interface ISliderWrapper {
  width?: string;
  height?: string;
  position?: string;
  removeBackground?: boolean;
  right?: string;
  top?: string;
  imgWidth?: string;
  imgHeight?: string;
  imgPosition?: string;
  boxShadow?: string;
  resizable: boolean;
}
