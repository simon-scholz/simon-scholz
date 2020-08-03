import styled, { withTheme } from "styled-components";

const SocialIcon = styled.img`
  width: 16px;
  margin: ${props => props.theme.space[2]};
  &.path {
    fill: green;
  }
  &.svg {
    .path {
      fill: green;
    }
    &.test {
      fill: green;
    }
    fill: green;
  }
`

function Footer() {
  return(
      <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
      <SocialIcon src="/social/dribbble.svg" alt="dribbble-icon-link" />
      </div>
  )
}

export default withTheme(Footer)
