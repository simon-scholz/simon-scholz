import { useState } from "react";
import styled from 'styled-components'
import { lightTheme as theme} from '../styles/theme';

import { Heading1, Heading2, P, A } from '../components/Typography'
import CaseStudyCard from "../patterns/CaseStudyCard";
import { InlineButton } from '../components/Button'


const Main = styled.main`
  padding: 1rem;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  margin-top: 40px;
`



export default function Work() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text) => {
      var dummy = document.createElement("input");
      document.body.appendChild(dummy);
      dummy.setAttribute('value', text);
      dummy.select();
      document.execCommand("copy");
      document.body.removeChild(dummy);
      setCopied(true)
    };


  return (
    <Main>
      <Heading2>Case Studies</Heading2>
      <P>
      This page shows some of my previous projects.
        Curious to learn more? Contact me by using the contact form in the top right corner or via <InlineButton onClick={() => copyToClipboard("simonscholz@outlook.com")}><p>simonscholz@outlook.com</p></InlineButton>{copied && <i> (Copied!)</i>}.
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
      <CaseStudyCard
        title="Koch mit Lino"
        role="Indie Maker"
        date="2018"
        heroImg="/lino/hero.png"
        path="/work/lino"
      />
      {/* <CaseStudyCard
        title="Logos & Branding"
        date="2019"
        heroImg="/branding/hero.png"
        path="/work/branding"
      /> */}
    </Main>
  )
}
