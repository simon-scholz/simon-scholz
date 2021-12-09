import styled from "styled-components"
import { lightTheme as theme } from '../../../styles/theme';
import Card from '../../../components/Card'

export const ContactPopoutBase = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  width: 100%;

  margin: 0px;
  border: 1px solid var(--border-level1);
  box-shadow: ${theme.shadows.lightFromBelow};
  padding: 16px;
  button {
    margin-bottom: 0px;
  }
  @media only screen and (min-width: ${theme.breakpoints[6]}) {
    position: absolute;
    left: auto;
    bottom: auto;
    right: -9px;
    top: 48px;
    width: 240px;
    box-shadow: ${theme.shadows.default};
  }
`