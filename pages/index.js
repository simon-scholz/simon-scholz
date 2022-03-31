import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'

import { Heading2, P, A, Rarr } from '../components/Typography'
import Spacer from "../components/Utils"
import CaseStudyCard from "../patterns/CaseStudyCard";
import WorkList from "../patterns/WorkList";

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
        <link
          rel="preload"
          href="/fonts/JetBrains-Mono/JetBrainsMono-Regular.woff2"
          as="font"
          crossOrigin=""
        />
      <title>Simon Scholz</title>
      <meta name="description" content="Simon Scholz - Designer, who codes" />
      <meta name="keywords" content="UX, UI, Product Design, Development" />
      <meta name="author" content="Simon Scholz" />
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
        <script async data-no-cookie data-respect-dnt data-api="/_hive" src="/bee.js"></script>



    </Head>

    <Main>
        <Heading2>Hey, I'm Simon</Heading2>
        <P>
          I design, build, and ship digital products.
          Right now I'm a product manager and UX/UI lead at 360dialog, a global Facebook business solution provider, 
          enabling companies of all sizes and from all over the world to use WhatsApp.
        </P>
      <Spacer small/>
      <Link href="/about"><A>More about me<Rarr/></A></Link>
      <Spacer extraLarge/>

      <Heading2>Work</Heading2>
      <WorkList /> 
      <Spacer extraLarge />


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
