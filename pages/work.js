import { useState } from "react";
import styled from 'styled-components'
import theme from '../styles/theme';

import { Heading1, Heading2, P, A } from '../components/Typography'
import CaseStudyCard from "../patterns/CaseStudyCard";


const Main = styled.main`
  padding: 1rem;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  margin-top: 110px;
`



export default function Work() {
  return (
    <Main>
      <Heading2>Case Studies</Heading2>
      <P>
      This page shows some of my previous projects.
      For current work in progress bits and pieces have a look
      at my <a href="https://dribbble.com/simonscholz" target="_blank">Dribbble profile</a> or find me on <a href="https://twitter.com/scholzsimon1" target="_blank">Twitter</a>.
      </P>
      <CaseStudyCard
        title="Pitchtable"
        role="Design and development lead"
        date="2020"
        heroImg="/p/hero.png"
        path="/work/pitchtable"
      />
      <CaseStudyCard
        title="CDF One"
        role="Co-Founder & CTO"
        date="2018 - 2020"
        heroImg="/cdf/hero.png"
        path="/work/cdf"
      />
    </Main>
  )
}
