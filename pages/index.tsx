import React, { useState } from "react";
import {Header} from "../components/header";
import {About} from "../components/about";
import {InfoInNumbers} from "../components/info-in-numbers";
import {SmallText} from "../components/small-text";
import {AuthInfo} from "../components/auth-info";
import {QuickAuthInfo} from "../components/quick-auth-info";
import {AuthPin} from "../components/auth-pin";
import {Note} from "../components/auth-note";
import {DesktopSlider} from "../components/desktop-slider";
import { Info } from '../components/info';
import styled from 'styled-components';
import { StreamInfo } from '../components/stream-info';
import { FAQ } from '../components/faq';
import { FeedbackQuestion } from '../components/feedback-question';
import { ModalWindow } from '../components/modal-window';

const Img = styled.img.attrs({src: '/static/img/backgrounds/mock.png'})`
  position: absolute;
  top: 4869px;
  right: 0;
  width: 35em;
`
const Wrapper = styled.div`
  position: relative;
`

const HomePage = () => {
      const [modalIsOpen, setModalIsOpen] = useState(false)
  return (
    <Wrapper>
        <Header/>
        <ModalWindow modalIsOpen={modalIsOpen}/>
        <About/>
        <InfoInNumbers/>
        <SmallText/>
        <AuthInfo backgroundColor="#6e7782"/>
        <QuickAuthInfo backgroundColor="#202d3d"/>
        <AuthPin backgroundColor="#e2e5eb"/>
        <Note/>
        <DesktopSlider/>
        <Info/>
        <Img />
        <StreamInfo/>
        <FAQ/>
        <FeedbackQuestion/>
    </Wrapper>
  );
};

export default HomePage;
