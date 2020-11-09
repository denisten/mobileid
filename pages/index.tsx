import React, { FormEvent, useEffect, useState } from 'react';
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
import { StreamInfo } from '../components/stream-info';
import { FAQ } from '../components/faq';
import { FeedbackQuestion } from '../components/feedback-question';
import { ModalWindow } from '../components/modal-window';
import {BackgroundImg} from "../components/background-img";
import * as emailJs  from 'emailjs-com';
export enum ModalWindowContent {
    CALL_ME_BACK = 'callMeBack',
    CONSULT_ME = 'consultMe'
}

const HomePage = () => {
      const [modalIsOpen, setModalIsOpen] = useState(false)
      const [modalWindowContent, setModalWindowContent] = useState<ModalWindowContent | null>(null)
      const openModalWindow = () => {
          setModalIsOpen(true)
          setModalWindowContent(ModalWindowContent.CONSULT_ME)
      }
      const closeModalWindow = () => {
          setModalIsOpen(false)
          setModalWindowContent(null)
      }
      const openModalCallMeBack = () => {
        setModalIsOpen(true)
        setModalWindowContent(ModalWindowContent.CALL_ME_BACK)
      }
      const handleConsultMe = (e: FormEvent | MouseEvent) => {
        e?.preventDefault();
        closeModalWindow();
        try {
          emailJs.send("service_wv4dcmn","template_0ivvt26")
        } catch (e) {
          debugger;
        }
  }
  useEffect(() => {
    emailJs.init("user_H3ZxuUJ223G9Qu90RDP4U");
  }, [])
  return (
    <>
          <ModalWindow
            closeModalWindow={closeModalWindow}
            modalIsOpen={modalIsOpen}
            handler={closeModalWindow}
            content={modalWindowContent}
            handleCallMeBackClick={closeModalWindow}
            handleConsultMe={handleConsultMe}
          />
          <Header handler={openModalCallMeBack}/>
          <About handler={openModalWindow}/>
        <InfoInNumbers/>
        <SmallText/>
        <AuthInfo backgroundColor="#6e7782"/>
        <QuickAuthInfo backgroundColor="#202d3d"/>
        <AuthPin backgroundColor="#e2e5eb"/>
        <Note/>
        <DesktopSlider/>
        <Info handler={openModalWindow}/>
        <BackgroundImg />
        <StreamInfo handler={openModalWindow}/>
        <FAQ/>
        <FeedbackQuestion/>
    </>
  );
};

export default HomePage;
