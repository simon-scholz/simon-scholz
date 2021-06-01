import styled, { css } from 'styled-components'
import theme from '../styles/theme'
import Card from "./Card"
import Check from "./icons/Check"
import Exclamation from "./icons/Exclamation"
import { P } from "./Typography"

const ToastBase = styled.div`
  font-family: Inter, -apple-system, sans-serif;
  position: relative;
  background: ${theme.colors.white};
  box-shadow: 1px solid ${theme.shadows.largeHover};
  -webkit-box-shadow: ${theme.shadows.default};
  padding: 16px 32px 16px 24px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 16px;
  border: 1px solid ${theme.colors.snowDarker};
  border-radius: 8px;
`

const ToastTextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const Text = styled.p`
  font-size: ${theme.fontSizes[0]};
  font-weight: ${props => props.bold ? theme.fontWeights.bold : theme.fontWeights.body};
  line-height: ${theme.lineHeights.heading};
  color: ${theme.colors.slate};
  transition: opacity 0.3s;
  margin: 0px;
  padding: 4px;
  a {
    color: ${theme.colors.concrete};
    background: ${theme.colors.concrete};
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    text-decoration: none;
    font-weight: 400;
    word-break: break-word;
    hyphens: auto;
  }
  a:hover {
    text-decoration: none;
    background: -webkit-linear-gradient(left, rgba(244,199,62,1) -3.8%, rgba(244,62,62,1) 46.8%, rgba(245,61,195,1) 98.8% );
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }
`


export function Toast({title, subtitle, type}) {
  return (
    <ToastBase>
      {type === "error" ?
        <Exclamation color={theme.colors['accent-red'].light}/>
        :
        <Check color={theme.colors['accent-green'].light}/>
      }
      <ToastTextContent>
        <Text bold>{title}</Text>
        <Text>{subtitle}</Text>
      </ToastTextContent>
    </ToastBase>
  )
}

export default Toast
