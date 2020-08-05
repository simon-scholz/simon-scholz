import { useState } from "react";
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

const InlineImg = styled.img`
  width: 85%;
  height: 85%;
  margin: 16px;
  @media only screen and (min-width: ${theme.breakpoints[4]}) {
    width: calc(85% / ${props =>
      props.numberImages && props.numberImages
      || 1});
    max-width: 85%;
  }
`

const ImageContainer = styled.div`
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


export default function Branding() {
  return (
    <div>
    <CaseStudyHeader
      title="Various Logo & Branding Work"
      name="Logos & Branding"
      date="2019"
      heroImg="/branding/hero.png"
      path="/work/branding"
    />

    <Main>
    <Heading2>Blockrocket</Heading2>
    <P>
    Logo & branding, iconography, landing page
    </P>
    </Main>
    <ImageContainer>
    <InlineImg src={"/static/work/branding/1_1.png"} numberImages={3} />
    <InlineImg src={"/static/work/branding/1_2.png"} numberImages={3} />
    <InlineImg src={"/static/work/branding/1_3.png"} numberImages={3} />
    </ImageContainer>


    <Main>
    <Heading2>ITSA</Heading2>
    <P>
    Logo
    </P>
    </Main>
    <ImageContainer>
    <InlineImg src={"/static/work/branding/2_1.png"} numberImages={3} />
    <InlineImg src={"/static/work/branding/2_2.png"} numberImages={3} />
    <InlineImg src={"/static/work/branding/2_3.png"} numberImages={3} />
    </ImageContainer>


    <Main>
    <Heading2>Cash on Ledger</Heading2>
    <P>
    Logo Concept
    </P>
    </Main>
    <ImageContainer>
    <InlineImg src={"/static/work/branding/3_1.png"} numberImages={1} />
    </ImageContainer>

    </div>
  )
}
