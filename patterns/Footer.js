import styled, { css, withTheme } from "styled-components";
import { Dribbble, Behance, Twitter, Substack } from "../components/SocialIcons";
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
  padding: 0.8rem;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-top: 1px solid ${props => props.theme.colors.snowDarker};
`

function Footer() {
  return(
      <Outer>
        <Container>
          <ClickableIcon href="https://dribbble.com/simonscholz" target="_blank"><Dribbble className="icon" /></ClickableIcon>
          <ClickableIcon href="https://www.behance.net/simonscholz1" target="_blank"><Behance className="icon" /></ClickableIcon>
          <ClickableIcon href="https://twitter.com/scholzsimon1" target="_blank"><Twitter className="icon" /></ClickableIcon>
          <ClickableIcon href="https://simonscholz.substack.com/embed" target="_blank"><Substack className="icon" /></ClickableIcon>
        </Container>
      </Outer>
  )
}

export default withTheme(Footer)
