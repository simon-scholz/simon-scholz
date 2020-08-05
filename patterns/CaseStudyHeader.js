import Link from 'next/link'
import styled from "styled-components";
import theme from '../styles/theme';

import { Heading1, P, Overline, A, Rarr} from '../components/Typography'
import Card, { CardContent, CardImage } from "../components/Card";
import Spacer from "../components/Utils";

const Title = styled(Heading1)`
  margin-top: ${theme.space[2]}
`

const StyledP = styled(P)`
  margin: 0px;
  font-size: ${theme.fontSizes[1]};
  color: ${theme.colors.darkGrey};
  font-weight: ${theme.fontWeights.body};
  b {
    font-weight: ${theme.fontWeights.subheading};
  }
`

const HeroImg = styled.img`
  width: 100%;
  max-height: 620px;
  object-fit: cover;
`


const Main = styled.main`
  padding: 1rem;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  margin-top: 32px;
  margin-bottom: 48px;
`


function CaseStudyHeader(props) {
    return(
      <>
      <HeroImg src={"/static/work"+props.heroImg} />
      <Main>
      <Overline>{props.casestudy ? "Case Study" : "Selected Work"}</Overline>
      <Title>{props.title}</Title>
      <StyledP><b>Name: </b>{props.name}</StyledP>
      {props.role && <StyledP><b>Role: </b>{props.role}</StyledP>}
      <StyledP><b>Date: </b>{props.date}</StyledP>
      {props.behanceLink &&
        <>
        <Spacer large />
        <A href={props.behanceLink} target="_blank">View on Behance<Rarr/></A>
        </>
      }
      </Main>
      </>
    )
}

export default CaseStudyHeader;
