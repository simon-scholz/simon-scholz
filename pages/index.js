import { useState } from "react";
import Head from 'next/head'
import styled from 'styled-components'
import { CSSTransition } from "react-transition-group";

import { Heading1, Heading2, Heading3, P, A, Rarr, TurnRight} from '../components/Typography'
import { Button, Flip } from '../components/Actions'
import Spacer from "../components/Utils"

const Main = styled.main`
  padding: 1rem;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
`

export default function Home() {
  const [showMore, setShowMore] = useState(true);

  return (
    <div>
    <Head>
      <title>Simon Scholz</title>
    </Head>
    <Main>
        <Heading2>Hi</Heading2>
        <P>
          I'm a designer who codes. I design, build and ship digital products. I am ambitious about creating simple, impactful and delighting user experiences.
        </P>
        <CSSTransition in={showMore} timeout={100} classNames="show-more" unmountOnExit appear >
        {() =>
          <P style={{marginTop: 0}}>
            I've previously co-founded CDF Technologies, where I led the design and creative direction of multiple B2B FinTech products
            and design systems. Currently I'm working as Head of Design for a soon to be announced FinTech (WealthTech) startup.
            I'm based in Munich. Please do say hello - I look forward to hearing about your project.
            {/*If I'm not in front of my computer, I'm probably gone <a href="https://www.strava.com/athletes/1280244" target="_blank">riding.</a>*/}
          </P>
        }
        </CSSTransition>
      <Spacer small/>
      <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
      <Button onClick={() => setShowMore(!showMore)}>Show {showMore ? "less" : "more"}<Flip open={showMore}/></Button>
      </div>
      {/*<div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
      <A>Show more<Rarr/></A>
      <A>Next page<TurnRight/></A>
      </div>*/}
      <Spacer large />
      <Heading2>Case studies</Heading2>
      <P style={{marginTop: 0}}>
        I've previously co-founded CDF Technologies, where I led the design and creative direction of multiple B2B FinTech products
        and design systems. Currently I'm working as Head of Design for a soon to be announced FinTech (WealthTech) startup.
        I'm based in Munich. Please do say hello - I look forward to hearing about your project.
        {/*If I'm not in front of my computer, I'm probably gone <a href="https://www.strava.com/athletes/1280244" target="_blank">riding.</a>*/}
      </P>
      <Heading2>Bits and pieces</Heading2>
      <P style={{marginTop: 0}}>
        I've previously co-founded CDF Technologies, where I led the design and creative direction of multiple B2B FinTech products
        and design systems. Currently I'm working as Head of Design for a soon to be announced FinTech (WealthTech) startup.
        I'm based in Munich. Please do say hello - I look forward to hearing about your project.
        {/*If I'm not in front of my computer, I'm probably gone <a href="https://www.strava.com/athletes/1280244" target="_blank">riding.</a>*/}
      </P>
    </Main>
    </div>
  )
}
