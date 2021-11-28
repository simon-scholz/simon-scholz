import { useState } from "react";
import styled from "styled-components";
import theme from '../../styles/theme';

import { Button } from '../../components/Actions'
import { P, A } from '../../components/Typography'
import Card from '../../components/Card'


export const Container = styled.header`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 4;
  font-weight: 600;
  font-size: 16px;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 4px 8px;
  margin: 0px;
  /* height: 56px; */
`

export const Grid = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-template-columns: 1fr auto;
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
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

export const ContactButton = styled(Button)`
  padding: 6px 16px;
  font-size: 14px;
  display: ${props =>
    props.hide ? "none" : "flex"};
  flex-direction: row;
  align-items: center;
  position: absolute;
  margin: 0;
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
  position: absolute;
  right: -6px;
  top: -6px;
  margin: 0px;
  width: 240px;
  border: 1px solid ${theme.colors.snowDarker};
  box-shadow: 1px solid ${theme.shadows.largeHover};
  padding: 16px;
  @media only screen and (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
  button {
    margin-bottom: 0px;
  }
`






export const MainItems = styled.div`
  width: 100%;
  padding: 8px;
  max-width: 700px;
  margin: 0 auto;
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

export const MenuLink = styled(A)`
  font-size: 16px;
  padding: 12px 16px;
  margin-right: 12px;
  color: ${props =>
    props.active ? theme.colors.blue60 : theme.colors.grey
  };
  background: ${props =>
    props.active ? "rgba(0,122,255, 0.1)" : "transparent"};
  border-radius: 4px;
  &:hover {
    color: ${theme.colors.blue60};
    background: rgba(0,122,255, 0.1);
    border-radius: 4px;
  }
  width: 100%;
  margin-top: 8px;
  @media only screen and (min-width: ${theme.breakpoints[4]}) {
    font-size: 14px;
    width: auto;
    margin-top: 0px;
  }
`
