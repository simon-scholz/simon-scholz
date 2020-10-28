import Link from 'next/link'
import Image from 'next/image'
import { useState } from "react";
import styled from 'styled-components'
import theme from '../../styles/theme';

import { Heading1, Heading2, P, A, Rarr, TurnRight } from '../../components/Typography'
import Spacer from "../../components/Utils"
import CaseStudyHeader from "../../patterns/CaseStudyHeader";

const Main = styled.main`
  padding: 1rem;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
`
const Img = styled(Image)`
  width: 100%;
  padding: 8px;
`

const IMAGES = [1, 7]
const IMAGE_SIZES = [
  {w: 2880, h: 2668},  //1
  {w: 2880, h: 2100},  //2
  {w: 2880, h: 2048},  //3
  {w: 2880, h: 2142},  //4
  {w: 2880, h: 2142},  //5
  {w: 2880, h: 1700},  //6
  {w: 2880, h: 1700}   //7
]

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
        <>
        {console.log("/static/work/p/"+(idx+IMAGES[0]).toString()+"-xl.png")}
        <Img
          src={"/static/work/p/"+(idx+IMAGES[0]).toString()+"-xl.png"}
          alt="Portfolio Screenshot - Project Pitchtable"
          width={IMAGE_SIZES[idx].w}
          height={IMAGE_SIZES[idx].h}
          key={"img_"+idx}
          quality={100}
        />
        </>
      ))}

    <Main>
    <Spacer large />
    <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
    <Link href="/work"><A secondary>View more of my work<Rarr/></A></Link>
    <Link href="/work/cdf"><A>Go to next project<TurnRight/></A></Link>
    </div>
    </Main>
    </div>
  )
}
