import { useState } from 'react';
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme} from '../styles/theme'
import styled from "styled-components";
import GlobalStyle from "../styles/globalStyles"
import "inter-ui/inter.css";

import Footer from '../patterns/Footer';
import Header from '../patterns/Header';



const Content = styled.div`
  margin-top: 68px;
`


export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState("dark")

  const toggleTheme = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} />
      <Content>
        <Component {...pageProps} />
      </Content>
      <Footer />
    </ThemeProvider>
  )
}
