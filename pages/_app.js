import { ThemeProvider } from 'styled-components'
import Link from 'next/link'
import '../styles/global.css'
import theme from '../styles/theme'
import styled from "styled-components";

import { P, A } from '../components/Typography'
import Footer from '../patterns/Footer';

export function CornerLinks() {
  return(
    <>
    <Link href="/" ><A style={{position: "absolute", top: 8, left: 16}} href="#">Simon Scholz</A></Link>
    <A style={{position: "absolute", top: 8, right: 16}} href="mailto:simonscholz@outlook.com">E-Mail</A>
    </>
  )
}

const Header = styled.header`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 4;
  font-weight: 600;
  font-size: 16px;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: row;
  padding: 4px 8px;
  margin: 0px;
`

const HeaderBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  z-index: -1;
  background: red;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 1px 0px;
  backdrop-filter: saturate(180%) blur(20px);
`

export function TopMenu() {
  return(
    <Header>
      <HeaderBackground>
      </HeaderBackground>
    </Header>
  )
}

const Content = styled.div`
  margin-top: 40px;
`

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Content>
        <Component {...pageProps} />
      </Content>
      <Footer />
    </ThemeProvider>
  )
}
