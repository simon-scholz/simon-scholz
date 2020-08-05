import { useState } from "react";
import ReactPlayer from "react-player"
import styled from 'styled-components'
import theme from '../../styles/theme';

import { Heading1, Heading2, P, A, Overline } from '../../components/Typography'
import Spacer from "../../components/Utils"
import CaseStudyHeader from "../../patterns/CaseStudyHeader";

const Main = styled.main`
  padding: 1rem;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 24px;
`
const Img = styled.img`
  width: 100%;
  padding: 8px;
`

const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${theme.colors.snowDark};
  width: 100%;
  justify-content: center;
  padding: 40px 0px;
  @media only screen and (min-width: ${theme.breakpoints[4]}) {
    flex-direction: row;
  }
`
const IMAGES = [1, 7]

export default function Lino() {
  return (
    <div>
    <CaseStudyHeader
      title="App and Chatbot for Fitness and Nutrition"
      name="Koch mit Lino"
      role="Indie Maker"
      date="2018"
      heroImg="/lino/hero.png"
      path="/work/lino"
    />
    <Main>
    <Overline>Long story short</Overline>
    <P>
    The idea of the project was to create an application, which helps users with their individual nutrition geared towards their goals. This was achieved by matching fitness programs (from wearables and fitness-apps) with ideal nutrition through relevant offers from delivery services. Thus enabling the user to adapt his nutrition individually and flexible to his training in an easy and time-saving way.
    </P>
    <P>
    I was part of a 2-person team working on this project from the idea all the way to the implemented MVP. After initial sketches and concepts for a mobile app the concept pivoted towards the implementation of a chatbot.
    </P>
    <Spacer large/>
    </Main>
    <Img src={"/static/work/lino/1.png"} />
    <VideoContainer>
    <Img src={"/static/work/lino/2.png"} style={{width: 210}}/>
    <ReactPlayer
      url="https://vimeo.com/228954700"
      playing={true}
      width={260}
    />
    </VideoContainer>
    <Img src={"/static/work/lino/3.png"} />

    <Main>
    <Overline>Branding</Overline>
    <Heading2>Chatbot Lino</Heading2>
    <P>
    The rising popularity of chatbots and the opportunity to fast-track the MVP development led to a pivot towards the implementation of a chatbot.
    </P>
    <P>
    As chatbots were still relatively new we decided to give our chatbot a personality in order to facilitate adoption. This resulted in a re-branding of the product.
    </P>
    </Main>
    <Img src={"/static/work/lino/4.png"} />


    <Main>
    <Heading2>MVP</Heading2>
    <P>
    The product was implemented using one of the existing chatbot platforms in combination with API calls to an AWS based backend. This enabled us to call different 3rd party APIs (Strava and Fitbit) and query the recipe database.
    </P>
    </Main>
    <VideoContainer>
    <ReactPlayer
      url="https://vimeo.com/353942493"
      playing={true}
      width={260}
    />
    </VideoContainer>


    <Main>
    <Overline>Branding</Overline>
    <Heading2>Landing Page</Heading2>
    </Main>
    <Img src={"/static/work/lino/5.png"} />
    </div>
  )
}
