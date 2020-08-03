import styled, { css, withTheme } from "styled-components";
import { Dribbble, Behance, Twitter, Substack } from "../components/SocialIcons";

const clickable = css`
  padding: 16px;
  cursor: pointer;
  .icon {
    fill: ${props => props.theme.colors.blue50};
    fill-opacity: 0.4;
  }
  &:hover {
    .icon {
      /* fill: ${props => props.theme.colors.blue60}; */
      fill-opacity: 1;
      transition: fill-opacity 500ms ease;
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
