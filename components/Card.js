import styled, {css} from "styled-components";
import { lightTheme as theme} from '../styles/theme';

const px = (v) => {
  return(v+"px")
}

const Card = styled.div`
  margin: 32px 0px;
  background: var(--bg-level1);
  border: 1px solid var(--border-level1);
  box-shadow: ${theme.shadows.list};
  -webkit-box-shadow: ${theme.shadows.default};
  font-family: Inter, -apple-system, sans-serif;
  padding: 0px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: auto;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    ${({ theme }) => theme.themeLabel === "light" && css`
      box-shadow: ${theme.shadows.listHover};
      -webkit-box-shadow:  ${theme.shadows.listHover};
      border: 1px solid var(--border-level2);
    ` }
    z-index: 10;
  };
  transition: all ${theme.animations.hover};
  @media only screen and (min-width: ${theme.breakpoints[4]}) {
    flex-direction: row;
    align-items: flex-start;
  }
`

export const CardContent = styled.div`
  padding: 16px 24px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .H2 {
    margin-top: 8px;
  }
`

export const CardImage = styled.img`
  object-fit: cover;
  width: 100%;
  max-height: 240px;
  border-radius: 8px 8px 0px 0px;
  @media only screen and (min-width: ${theme.breakpoints[4]}) {
    border-radius: 8px 0px 0px 8px;
    max-width: 280px;
    height: 100%;
  }
`


export default Card
