import Link from 'next/link'
import styled, { css, withTheme } from "styled-components";

import { A } from '../components/Typography'
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
  justify-content: space-between;
  border-top: 1px solid ${props => props.theme.colors.snowDarker};
`

const FooterLink = styled(A)`
  cursor: pointer;
  font-size: ${theme.fontSizes[0]};
  font-weight: ${theme.fontWeights.body};
  line-height: ${theme.lineHeights.bodyLong};
  letter-spacing: -0.1px;
  transition: opacity 0.3s;
  margin-bottom: 0px;
  background: ${theme.colors.concrete};
  -webkit-background-clip: text;
  -moz-background-clip: text;
  color: ${theme.colors.concrete};
  text-decoration: none;
  font-weight: 400;
  word-break: break-word;
  hyphens: auto;
  p {
    margin: 0px;
  }
  &:hover {
    p {
      margin: 0px;
      text-decoration: none;
      background: -webkit-linear-gradient(
        left,
        rgba(244, 199, 62, 1) -3.8%,
        rgba(244, 62, 62, 1) 46.8%,
        rgba(245, 61, 195, 1) 98.8%
      );
      -webkit-background-clip: text;
      -moz-background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-text-fill-color: transparent;
    }
    text-decoration: none;
    background: -webkit-linear-gradient(
      left,
      rgba(244, 199, 62, 1) -3.8%,
      rgba(244, 62, 62, 1) 46.8%,
      rgba(245, 61, 195, 1) 98.8%
    );
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }
`;

function Footer() {
  return (
    <Outer>
      <Container>
        <FooterLink href="mailto:simonscholz@outlook.com">Contact</FooterLink>
        <Link href="/impressum">
          <FooterLink href="/impressum">Impressum – Legal Notice</FooterLink>
        </Link>
      </Container>
    </Outer>
  );
}

export default withTheme(Footer)
