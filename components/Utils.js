import styled, { css } from 'styled-components'
import theme from '../styles/theme'

const px = (v) => {
  return(v+"px")
}


const Spacer = styled.div`
  height: ${props =>
    props.size && px(props.size)
    || props.small && "8px"
    || props.large && "32px"
    || "16px"};
`

export default Spacer
