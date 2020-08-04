import { useState } from "react";
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'

import { Heading1, Heading2, P, A, Rarr, Arrow} from '../components/Typography'
import { Button, Flip } from '../components/Actions'
import Spacer from "../components/Utils"

const Main = styled.main`
  padding: 1rem;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
`

export default function Home() {

  return (
    <div>
    <Head>
      <title>Simon Scholz</title>
    </Head>
    <Main>
        <Heading2>Hey, I'm Simon</Heading2>
        <P>
          I'm a designer who codes.
          I design, build and ship digital products.
          Right now I'm building a design system and various web application interfaces at a soon to be announced FinTech startup.
          I'm based in Munich.
        </P>
      <Spacer small/>
      <Link href="/about"><A>More about me<Rarr/></A></Link>
      <Spacer large/>

      <Heading2>Case studies</Heading2>
      <P style={{marginTop: 0}}>
        I've previously co-founded CDF Technologies, where I led the design and creative direction of multiple B2B FinTech products
        and design systems. Currently I'm working as Head of Design for a soon to be announced FinTech (WealthTech) startup.
        I'm based in Munich. Please do say hello - I look forward to hearing about your project.
      </P>
      <Spacer large />
      <Heading2>Bits and pieces</Heading2>
      <P style={{marginTop: 0}}>
        I've previously co-founded CDF Technologies, where I led the design and creative direction of multiple B2B FinTech products
        and design systems. Currently I'm working as Head of Design for a soon to be announced FinTech (WealthTech) startup.
        I'm based in Munich. Please do say hello - I look forward to hearing about your project.
      </P>
    </Main>
    </div>
  )
}
