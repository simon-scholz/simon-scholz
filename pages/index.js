import { useState } from "react";
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'

import { Heading1, Heading2, P, A, Rarr, Arrow} from '../components/Typography'
import { Button, Flip } from '../components/Actions'
import Spacer from "../components/Utils"
import CaseStudyCard from "../patterns/CaseStudyCard";

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
      <meta name="description" content="Simon Scholz - Designer, who codes" />
      <meta name="keywords" content="UX, UI, Product Design, Development" />
      <meta name="author" content="Simon Scholz" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <script>
        // Picture element HTML5 shiv
        document.createElement( "picture" );
      </script>
      <script src="picturefill.js" async></script>
    </Head>

    <Main>
        <Heading2>Hey, I'm Simon</Heading2>
        <P>
          I'm a designer who codes.
          I design, build, and ship digital products.
          Right now I'm building a design system and various web application interfaces at a soon to be announced FinTech startup.
          I'm based in Munich.
        </P>
      <Spacer small/>
      <Link href="/about"><A>More about me<Rarr/></A></Link>
      <Spacer large/>

      <Heading2>Case studies</Heading2>
      <P>These are some of my previous projects.</P>
      <Spacer small/>
      <Link href="/work"><A>View more of my work<Rarr/></A></Link>
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
      <Spacer large />

    </Main>
    </div>
  )
}
