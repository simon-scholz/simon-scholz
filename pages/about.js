import { useState } from "react";
import styled from 'styled-components'
import { lightTheme as theme} from '../styles/theme';

import { Heading1, Heading2, P, A, Rarr, TurnRight} from '../components/Typography'
import Spacer from "../components/Utils"
import { InlineButton } from '../components/Actions'


const Main = styled.main`
  padding: 1rem;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  margin-top: 110px;
`

const ImageContainer = styled.div`
  width: 100%;
  position: relative;
  height: 460px;
`

const Img1 = styled.img`
  position: absolute;
  z-index: 0;
  border-radius: 8px;
  top: 0px;
  left: 0px;
  width: 250px;
  @media only screen and (min-width: ${theme.breakpoints[4]}) {
    width: 360px;
    top: 0px;
    left: 0px;
  }
`

const Img2 = styled.img`
  position: absolute;
  z-index: 1;
  top: 150px;
  left: 200px;
  width: 140px;
  @media only screen and (min-width: ${theme.breakpoints[4]}) {
    top: 180px;
    left: 300px;
    width: 200px;
  }
`
const Img3 = styled.img`
  position: absolute;
  z-index: 1;
  top: 274px;
  left: 18px;
  width: 80px;
  transform: scaleX(-1) rotate(110deg);
  @media only screen and (min-width: ${theme.breakpoints[4]}) {
    top: 40px;
    left: 380px;
    transform: rotate(15deg);
  }
`
const StyledP = styled(P)`
  position: absolute;
  z-index: 1;
  width: 160px;
  line-height: normal;
  font-weight: 500;
  top: 330px;
  left: 32px;
  @media only screen and (min-width: ${theme.breakpoints[4]}) {
    top: 30px;
    left: 480px;
  }
`



export default function About() {
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
    <div>
    <Main>
    <ImageContainer>
      <Img1
        src="/static/simon-laptop-1.png"
        aria-label="photo showing simon behind laptop"
        alt="photo showing simon behind laptop"
      />
      <Img2
        src="/static/simon-memoji.png"
        aria-label="memoji showing simon behind laptop"
        alt="memoji showing simon behind laptop"
      />
      <Img3
        src="/static/arrow.svg"
        aria-label="arrow"
        alt="arrow"
      />
      <StyledP>I don't always look this serious!</StyledP>

      </ImageContainer>
      <P>
          👋 I'm a designer who codes. I design, build, and ship digital products. Right now I'm a product manager and UX/UI lead at 360dialog, a global Facebook business solution provider,
          enabling companies of all sizes and from all over the world to use WhatsApp.
      </P>
      
      <P>I've previously co-founded <a href="https://www.cdf.one/" target="_blank" rel="noopener">CDF Technologies</a>, where I led the design and creative direction of multiple B2B FinTech products
      and design systems. Apart from the <a href="https://www.cdf.one/" target="_blank" rel="noopener">CDF One</a> app I designed and implemented <a href="https://pitchtable.io" target="_blank">pitchtable.io</a>.
      </P>
      <P>
      Before CDF I worked as an automotive engineer, specializing in thermal and mechanical load collective simulation of powertrain components.
      </P>
      <P>
      I'm excited to hear about your project! When I'm not answering immediately, I'm probably gone <a href="https://www.strava.com/athletes/1280244" target="_blank" rel="noopener">riding</a>.
      </P>
    </Main>
    </div>
  )
}
