import { createGlobalStyle } from "styled-components";
import * as React from "react";
import App from 'next/app';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: MuseoSansCyrl,sans-serif;
    line-height: 1;
  }
  @font-face {
    font-family: MuseoSansCyrl;
    src: url('/static/fonts/Museo-Sans-0.woff');
  }
  @font-face {
    font-family: MuseoSansMedium;
    src: url('/static/fonts/Museo-Sans-1.woff');  
  }
  @font-face {
    font-family: MuseoSansBold;
    src: url('/static/fonts/Museo-Sans-2.woff');
  }
  p {
    font-family: MuseoSansCyrl,sans-serif;
    font-size: 18px;
    font-weight: 300;
    line-height: 1.56;
    color: #5a6d73;
  }
  h1 {
    line-height: 1.17;
    font-family: MuseoSansBold,sans-serif;
    color: #202D3D;
    font-size: 75px;
    font-weight: 900;
    margin: 0;
    @media (max-width: 1279px) {
      font-size: 65px;
    }
    @media (max-width: 767px) {
      font-size: 47px;
    }
  }
  img, picture {
    display: block;
    max-width: 100%;
    height: auto;
  }
  h4, h5 {
    margin: 0 0 16px 0;
    color: #2e3c40;
    font-size: 27px;
    line-height: 1.19;    
    font-family: MuseoSansBold,sans-serif;
    font-weight: 900
  }
  h3 {
    color: #2e3c40;
    font-family: MuseoSansBold,sans-serif;
    font-size: 45px;
    line-height: 1.16;
  }
`;

const MyApp = ({ Component, pageProps }: any) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

MyApp.getInitialProps = async (appContext: any) => {
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

export default MyApp;
