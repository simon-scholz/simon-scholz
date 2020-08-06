import Link from 'next/link'
import styled, { css, withTheme } from "styled-components";

import { A } from '../components/Typography'
import { Dribbble, Behance, Twitter, Substack } from "../components/icons/SocialIcons";
import theme from '../styles/theme'

const clickable = css`
  padding: 16px;
  cursor: pointer;
  .icon {
    fill: ${theme.colors.blue50};
    fill-opacity: 0.4;
  }
  &:hover {
    .icon {
      /* fill: ${theme.colors.blue60}; */
      fill-opacity: 1;
      transition: fill-opacity ${theme.animations.hover};
    }
  }
`
const ClickableIcon = styled.a`
  ${clickable}
`
const Outer = styled.div`
  margin-top: 56px;
  bottom: 0px;
  width: 100%;
`

const Container = styled.div`
  padding: 0.6rem;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-top: 1px solid ${props => props.theme.colors.snowDarker};
`

const FooterLink = styled(A)`
  font-size: 0.5rem;
  opacity: 0.4;
  margin-bottom: 4px;
  margin-left: auto;
  &:hover {
    opacity: 1;
    color: ${theme.colors.blue50};
  }
  @media only screen and (min-width: ${theme.breakpoints[7]}) {
    font-size: 0.7rem;
  }
`

function Footer() {
  return(
      <Outer>
        <Container>
          <ClickableIcon href="https://dribbble.com/simonscholz" target="_blank" rel="noopener"><Dribbble className="icon"/></ClickableIcon>
          <ClickableIcon href="https://www.behance.net/simonscholz1" target="_blank" rel="noopener"><Behance className="icon" /></ClickableIcon>
          <ClickableIcon href="https://twitter.com/scholzsimon1" target="_blank" rel="noopener"><Twitter className="icon" /></ClickableIcon>
          <ClickableIcon href="https://simonscholz.substack.com/embed" target="_blank" rel="noopener"><Substack className="icon" /></ClickableIcon>
          <Link href="/impressum"><FooterLink href="/impressum">Impressum – Legal Notice</FooterLink></Link>
        </Container>
      </Outer>
  )
}

export default withTheme(Footer)
