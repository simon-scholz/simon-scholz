import styled, { css } from 'styled-components'
import { lightTheme as theme } from '../styles/theme'

const px = (v) => {
    return (v + "px")
}



export const Label = styled.label`
  font-size: 0.6rem;
  line-height: ${theme.lineHeights.body};
  color: var(--text-label);
  padding: 4px 0px;
`

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const TextField = styled.input`
  width: 100%;
  border: none;
  background: var(--input-bg);
  padding: 12px ${theme.space[3]};
  border-radius: ${theme.space[2]};
  font-size: ${theme.fontSizes[0]};
  &:hover {
    background: var(--input-bg-hover);
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--primary-low-opacity);
  }
`

export const TextArea = styled.textarea`
  width: 100%;
  border: none;
  background: var(--input-bg);
  padding: 12px ${theme.space[3]};
  border-radius: ${theme.space[2]};
  font-size: ${theme.fontSizes[0]};
  line-height: ${theme.lineHeights.body};
  resize: none;
  font-family: sans-serif;
  &:hover {
    background: var(--input-bg-hover);
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--primary-low-opacity);
  }
`
