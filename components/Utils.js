import { useRef } from "react";
import styled, { css } from 'styled-components'
import { lightTheme as theme} from '../styles/theme'
import useOutsideClick from "../hooks/useOutsideClick";

const px = (v) => {
  return(v+"px")
}


const Spacer = styled.div`
  height: ${props =>
    props.size && px(props.size)
    || props.small && "8px"
    || props.large && "32px"
    || props.extraLarge && "64px"
    || "16px"};
`


export function OutsideClickDetector(props) {
  const ref = useRef();
  useOutsideClick(ref, props.onOutsideClick)

  return (
    <div ref={ref}>
    {props.children}
    </div>
  )
}

export default Spacer
