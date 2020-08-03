import { useState } from "react";
import styled from 'styled-components'

import { Heading1, Heading2, P, A, Rarr, TurnRight} from '../components/Typography'
import { Button, Flip } from '../components/Actions'
import Spacer from "../components/Utils"

const Main = styled.main`
  padding: 1rem;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
`

const ImageContainer = styled.div`
  width: 100%;
  position: relative;
  height: 460px;
`

const POSITIONS = [
  {position: "absolute", top: 0, left: 0, zIndex: 0},
  {position: "absolute", top: 180, left: 300, zIndex: 1},
  {position: "absolute", top: 40, left: 380, zIndex: 1, transform: "rotate(15deg)"},
  {position: "absolute", top: 30, left: 480, zIndex: 1, width: 160, lineHeight: "normal", fontWeight: 500},
]

export default function About() {
  const [showMore, setShowMore] = useState(true);

  return (
    <div>
    <Main>
    <ImageContainer>
      <img
        src="/static/simon-laptop.jpg"
        aria-label="photo showing simon behind laptop"
        width={360}
        style={POSITIONS[0]}
      />
      <img
        src="/static/simon-memoji.png"
        aria-label="memoji showing simon behind laptop"
        width={200}
        style={POSITIONS[1]}
      />
      <img
        src="/static/arrow.svg"
        aria-label="arrow"
        width={80}
        style={POSITIONS[2]}
      />
      <P style={POSITIONS[3]}>I don't always look this serious!</P>

      </ImageContainer>
      <P>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      </P>
    </Main>
    </div>
  )
}
