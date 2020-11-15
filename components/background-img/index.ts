import styled from "styled-components";

export const BackgroundImg = styled.img.attrs({src: '/static/img/backgrounds/mock.png'})`
  position: absolute;
  top: 4869px;
  right: 0;
  width: 35em;
  @media (max-width: 1279px) {
    display: none;
  }
`
