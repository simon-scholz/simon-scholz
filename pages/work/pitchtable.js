import Link from 'next/link'
import { useState } from "react";
import styled from 'styled-components'
import theme from '../../styles/theme';

import { Heading1, Heading2, P, A, Rarr } from '../../components/Typography'
import Spacer from "../../components/Utils"
import CaseStudyHeader from "../../patterns/CaseStudyHeader";

const Main = styled.main`
  padding: 1rem;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
`
const Img = styled.img`
  width: 100%;
  padding: 8px;
`

const IMAGES = [1, 7]

export default function Pitchtable() {
  return (
    <div>
    <CaseStudyHeader
      casestudy
      title="Landing Page, API Dashboard and Billing Console"
      name="Pitchtable"
      role="Design and development lead"
      date="2020"
      heroImg="/p/hero.png"
      behanceLink="https://www.behance.net/gallery/101714751/Pitchtableio-User-Interface"
    />
      {Array.apply(null, { length: IMAGES[1]-IMAGES[0]+1 }).map((_, idx) => (
        <Img alt="Portfolio Screenshot - Project Pitchtable" key={"img_"+idx} src={"/static/work/p/"+(idx+IMAGES[0]).toString()+".png"} />
      ))}

    <Main>
    <Spacer large />
    <Link href="/work"><A>View more of my work<Rarr/></A></Link>
    </Main>
    </div>
  )
}
