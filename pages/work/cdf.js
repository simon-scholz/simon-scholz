import Link from 'next/link'
import { useState } from "react";
import ReactPlayer from "react-player"
import styled from 'styled-components'
import theme from '../../styles/theme';

import { Heading1, Heading2, P, A, Overline, Rarr } from '../../components/Typography'
import Spacer from "../../components/Utils"
import CaseStudyHeader from "../../patterns/CaseStudyHeader";

const Main = styled.div`
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
  height: 80vh;
  max-height: 800px;
  justify-content: center;
  padding: 40px 0px;
  @media only screen and (min-width: ${theme.breakpoints[4]}) {
    flex-direction: row;
  }
`

export default function Cdf() {
  return (
    <div>
    <CaseStudyHeader
      casestudy
      title="Development of a startup relationship management software"
      name="CDF One"
      role="Co-Founder & CTO"
      date="2018 - 2020"
      heroImg="/cdf/hero.png"
    />
    <Main>
    <Overline>Long story short</Overline>
    <P>
    CDF One offers a fully integrated dealflow and startup relationship management tool, which enables investors to make data driven decisions. I co-founded CDF Technologies, which is the company behind the product. In my main role as CTO I was responsible for the product development.
    </P>
    <P>
    The process started with raw sketches and flowcharts in notebooks, went through several iterations of mockups including extensive user testing, continoued through various concept adaptions until the final implementation of a MVP. Afterwards the production version was implemented and is currently live with multiple large B2B customers.
    </P>
    <Spacer large/>
    </Main>
    <Img src={"/static/work/cdf/1.png"} />

    <Main>
    <Overline>#1</Overline>
    <Heading2>Prototyping & Remote User Testing</Heading2>
    <P>
    For this project, I used Sketch's native prototyping to make interactive prototypes, communication, and remote user testing.
    Therefore I'd upload the latest prototype to the Sketch cloud and share the link with the tester. The benefit of this method is that testers do not have to sign up for a new service.
    </P>
    <P>
    Then I'd get on a call with my tester, let them share their screen with the prototype and observe or sometimes instruct them.
    </P>
    <P>
    This method enabled us to receive feedback on the product very early, which resulted in several rounds of concept adaptions
    </P>
    </Main>
    <Img src={"/static/work/cdf/2.png"} />
    <Img src={"/static/work/cdf/3.png"} />

    <Main>
    <Overline>#2</Overline>
    <Heading2>Product Iterations</Heading2>
    <P>
    The second iteration resulted in more whitespace and a cleaner look. Concept wise the focus got shifted on the startup perspective and the tracking of their KPIs.
    </P>
    </Main>
    <Img src={"/static/work/cdf/4.png"} />
    <Img src={"/static/work/cdf/5.png"} />


    <Main>
    <Overline>#3</Overline>
    <Heading2>MVP</Heading2>
    <P>
    The last iteration of user feedback led to the development of an investment process management software as MVP. I used Zeplin to hand off my screens from Sketch in order to implement them in a React web app.
    </P>
    </Main>
    <Img src={"/static/work/cdf/6.png"} />
    <Img src={"/static/work/cdf/7.png"} />
    <VideoContainer>
    <ReactPlayer
      url="https://vimeo.com/354163673"
      playing={true}
      width="100%"
      height="100%"
    />
    </VideoContainer>


    <Main>
    <Overline>#4</Overline>
    <Heading2>Final Product</Heading2>
    <P>
    The Product is live and is being used by multiple large B2B customers.
    </P>
    </Main>
    <Img src={"/static/work/cdf/8.png"} />
    <Img src={"/static/work/cdf/9.png"} />
    <Img src={"/static/work/cdf/10.png"} />
    <VideoContainer>
    <ReactPlayer
      url="https://vimeo.com/444840225"
      playing={true}
      width="100%"
      height="100%"
    />
    </VideoContainer>

    <Main>
    <Overline>Branding</Overline>
    <Heading2>Landing Pages</Heading2>
    </Main>
    <Img src={"/static/work/cdf/11.png"} />

    <Main>
    <Spacer large />
    <Link href="/work"><A>View more of my work<Rarr/></A></Link>
    </Main>
    </div>
  )
}
