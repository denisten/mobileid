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
import { FeedbackQuestion, IFeedbackQuestion } from '../components/feedback-question';
import { ModalWindow } from '../components/modal-window';
import {BackgroundImg} from "../components/background-img";
import * as emailJs  from 'emailjs-com';
import { connectToDB } from '../utils/connect-to-db';
import { ButtonConsult, ButtonDemo } from '../components/buttons';
import styled from 'styled-components';

const AppWrapper = styled.div`
@media (max-width: 1279px) {
overflow-x: hidden;
}
`

const ButtonsWrapper = styled.div`
  width: 844px;
  display: flex;
  margin: 110px auto;
  @media (max-width: 1279px) {
    padding-left: 30px;
  }
  @media (max-width: 767px) {
    width: auto;
    padding-left: 0;
    margin: 100px auto;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`;

export enum ModalWindowContent {
    CALL_ME_BACK = 'callMeBack',
    CONSULT_ME = 'consultMe'
}

const HomePage: React.FC<IFeedbackQuestion> = (props) => {
  const {likes, dislikes} = props;
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
    <AppWrapper>
          <ModalWindow
            closeModalWindow={closeModalWindow}
            modalIsOpen={modalIsOpen}
            handler={closeModalWindow}
            content={modalWindowContent}
            handleCallMeBackClick={closeModalWindow}
            handleConsultMe={handleConsultMe}
          />
          <Header handler={openModalCallMeBack}/>
          <About/>
      <ButtonsWrapper>
        <ButtonConsult margin="0 85px 0 0" handler={openModalWindow} />
        <ButtonDemo handler={() => window.open(process.env.demoUrl)} />
      </ButtonsWrapper>
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
        <FeedbackQuestion likes={likes} dislikes={dislikes}/>
    </AppWrapper>
  );
};

const initDBData = {
  likes: 0,
  dislikes: 0,
}

export const getServerSideProps = async () : Promise<{ props: IFeedbackQuestion }> => {
  try {
    console.log(process.env)
    const collection = await connectToDB();
    await collection.insertOne({...initDBData})
    const data = await collection.findOne({}, { fields: { _id: 0}});
    if(!data) {
      await collection.insertOne(initDBData);
      return {
        props: initDBData
      }
    } else return {
        props: {
          likes: data.likes,
          dislikes: data.dislikes
        },
      }
  } catch (e) {
    return {
      props: initDBData
    }
  }
}
export default HomePage;
