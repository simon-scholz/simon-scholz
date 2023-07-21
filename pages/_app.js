import { ThemeProvider } from 'styled-components'
import '../styles/global.css'
import theme from '../styles/theme'
import styled from "styled-components";

import Footer from '../patterns/Footer';
import Header from '../patterns/Header';



const Content = styled.div`
  margin-top: 68px;
`


export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      {/* <Header /> */}
      <Content>
        <Component {...pageProps} />
      </Content>
      <Footer />
    </ThemeProvider>
  )
}
