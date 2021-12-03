import { useState } from "react";
import styled, {css} from "styled-components";
import { lightTheme as theme} from '../../styles/theme';
import * as ToolbarPrimitive from '@radix-ui/react-toolbar';

import { Button } from '../../components/Actions'
import { P, A } from '../../components/Typography'
import Card from '../../components/Card'


export const Container = styled.header`
  position: fixed;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  /* right: 0px; */
  z-index: 4;
  font-weight: 600;
  font-size: 16px;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
  max-width: 700px;
`


export const StyledToolbar = styled(ToolbarPrimitive.Root)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border-radius: 6px;
    background: ${theme.colors.white};
    border: 1px solid ${theme.colors.snowDarker};
    box-shadow: ${theme.shadows.default};
    cursor: default;
    padding: 8px;
`

export const HeaderBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  z-index: -1;
  background: rgb(249, 250, 252, 0.68);
  box-shadow: rgba(0, 0, 0, 0.06) 0px 1px 0px;
  backdrop-filter: saturate(180%) blur(20px);
`

export const ContactPopoutContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

export const ContactButton = styled(Button)`
  padding: 6px 12px;
  font-size: 12px;
  font-weight: 400;
  cursor: default;
  display: ${props =>
    props.hide ? "none" : "flex"};
  flex-direction: row;
  align-items: center;
  p {
    margin: 0px;
    display: none;
  }
  .send-icon {
    margin-right: 0px;
    width: 16px;
  }
  @media only screen and (min-width: ${theme.breakpoints[4]}) {
    p {
      display: flex;
    }
    .send-icon {
      margin-right: 8px;
    }
  }
`

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
  border: 1px solid ${theme.colors.snowDarker};
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
    top: 44px;
    width: 240px;
    box-shadow: ${theme.shadows.default};
  }
`




export const MainItems = styled.div`
  /* width: 100%;
  max-width: 700px; */
  /* margin: 0 auto; */
  display: none;
  flex-direction: row;
  align-items: center;
  @media only screen and (min-width: ${theme.breakpoints[4]}) {
    display: flex;
  }
`

export const MobileMainItems = styled.div`
  width: 100%;
  padding: 8px;
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const MobileContainer = styled.div`
  padding: 8px;
  padding-left: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  @media only screen and (min-width: ${theme.breakpoints[4]}) {
    display: none;
  }
  .button-icon-only {
    margin-left: 10px;
  }
`

export const LabelMobile = styled(P)`
  margin-top: 0px;
  padding-left: 8px;
  font-weight: 500;
  color: ${theme.colors.black}
`

export const HoverBackground = styled.div`
  position: absolute;
  top: 10px;
  bottom: 10px;
  width: ${props => props.width};
  border-radius: 4px;
  background: rgba(128, 90, 213, 0.05);
  transform: translateX(${props => props.x});
  opacity: ${props => props.hide ? "0" : "1"};
  transition: transform ${props => props.hide ? "1ms" : "150ms"}, opacity 50ms;
`

export const MenuLink = styled(A)`
  display: block;
  cursor: default;
  font-size: 12px;
  padding: 6px 12px;
  color: ${props =>
    props.active ? theme.colors.purpleDark : theme.colors.grey
  };
  background: ${props =>
    props.active ? "rgba(128, 90, 213, 0.14)" : "transparent"};
  border-radius: 4px;
  position: relative;
  width: 100%;
  margin-top: 8px;
  @media only screen and (min-width: ${theme.breakpoints[4]}) {
    font-size: 12px;
    width: auto;
    margin-top: 0px;
  }
  &:hover {
    color: ${theme.colors.purpleDark};
  }
  /* ${props => props.active && css`
    &:before {
      position: absolute;
      content: " ";
      width: calc(100% - 4px);
      height: 2px;
      border-radius: 2px;
      top: calc(100% + 2px);
      left: 1px;
      background: ${theme.colors.purpleDark};
    }
  `} */
`