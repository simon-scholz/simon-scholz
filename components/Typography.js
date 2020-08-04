import styled, { css, keyframes } from 'styled-components'
import theme from '../styles/theme'


const heading = css`
  font-weight: ${theme.fontWeights.heading};
  color: var(--text-primary);
  line-height: ${theme.lineHeights.heading};
  letter-spacing: -0.4px;
`



export const Heading1 = styled.h1`
  ${heading};
  font-size: ${theme.fontSizes[6]};
  @media (max-width: ${theme.breakpoints[4]}) {
    font-size: ${theme.fontSizes[5]};
  }
`

export const Heading2 = styled.h3`
  ${heading};
  font-weight: ${theme.fontWeights.bold};
  font-size: ${theme.fontSizes[3]};
  letter-spacing: -0.6px;
  margin-bottom: ${theme.space[2]};
  margin-top: ${theme.space[5]}
`






  export const P = styled.p`
    font-size: ${theme.fontSizes[1]};
    font-weight: ${theme.fontWeights.body};
    line-height: ${theme.lineHeights.bodyLong};
    letter-spacing: -0.1px;
    color: ${theme.colors.grey};
    transition: opacity 0.3s;
    margin-bottom: 0px;
    a {
      color: ${theme.colors.concrete};
      background: -webkit-linear-gradient(left, ${theme.colors["text-tertiary"].light} 0%, ${theme.colors["text-secondary"].light} 100% );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-decoration: none;
      font-weight: 500;
      word-break: break-word;
      hyphens: auto;
    }
    a:hover {
      text-decoration: none;
      background: -webkit-linear-gradient(left, rgba(244,199,62,1) -3.8%, rgba(244,62,62,1) 46.8%, rgba(245,61,195,1) 98.8% );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    code {
      font-size: ${theme.fontSizes[0]};
      box-shadow: inset 0 0 0 1px var(--border-primary);
    }
    a > code {
      padding: ${theme.space[0]} ${theme.space[1]};
      box-shadow: inset 0 0 0 1px rgba(var(--text-link-rgb), 0.16);
      border-radius: 4px;
      display: inline-block;
      background: rgba(var(--text-link-rgb), 0.12);
      color: var(--text-link);
    }
    a:hover > code {
      background: rgba(var(--text-link-rgb), 0.16);
    }
    &.show-more-enter, .show-more-appear {
      opacity: 0;
      transition: opacity 0.3s;
    }
    &.show-more-enter-active, .show-more-appear-active {
      opacity: 1;
    }
    &.show-more-exit {
      opacity: 1;
    }
    .show-more-exit-active {
      opacity: 0;
      transition: opacity 0.3s;
    }
  `



  const blink = keyframes`
    0% {
      opacity: .2;
    }
    20% {
      opacity: 1;
    }
    100% {
      opacity: .2;
    }
  `

const turn = css`
  .right-arrow-child {
    width: 0.3rem;
    &:nth-child(2) {
      transform: translateX(-4px);
      opacity: 0;
      animation-delay: .2s;
      transition: transform 400ms ease-in-out, opacity 200ms ease-out;
    }
    &:nth-child(3) {
      transform: translateX(-9px);
      opacity: 0;
      transition: transform 400ms ease-in-out, opacity 200ms ease-out;
    }
  }
  &:hover {
    .right-arrow-child {
      display: inline-block;
      height: 3px;
      animation-name: ${blink};
      animation-duration: 1.4s;
      animation-iteration-count: infinite;
      animation-fill-mode: both;
      &:nth-child(1) {
        animation-delay: .2s;
      }
      &:nth-child(2) {
        transform: translateX(0);
        opacity: 1;
        transition: transform 200ms ease-in-out, opacity 200ms ease-out;
        animation-delay: .4s;
      }
      &:nth-child(3) {
        transform: translateX(0);
        opacity: 1;
        transition: transform 200ms ease-in-out, opacity 200ms ease-out;
        animation-delay: .6s;
      }
    }
  }
`


const dash = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`

// captures the interaction on <Larr /> and <Rarr /> components
const arrows = css`
  &:hover {
    .right-arrow-child {
      /* animation: ${blink} 1.4s infinite;
      animation-fill-mode: both;
      &:nth-child(2) {
        animation-delay: .2s;
      } */
    }
    .right-arrow {
      transform: translateX(6px);
      transition: transform 300ms ease-in-out;
      /* animation: ${blink} 1.4s infinite;
      animation-fill-mode: both;
      animation-delay: .4s; */
    }
    .animated-arrow {
      .arrow-tip {
        transform: translateX(0px);
        transition: transform 100ms cubic-bezier(0.165, 0.84, 0.44, 1);
      }
      .arrow-base {
        /* stroke-opacity: 1;
        transition: stroke-opacity ${theme.animations.default}; */
        stroke-dasharray: 12;
        stroke-dashoffset: -12;
        animation: ${dash} 100ms cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
      }
    }
    .left-arrow {
      opacity: 1;
      transform: translateX(-8px);
      transition: transform ${theme.animations.default};
    }
  }
`


const a = css`
  font-size: ${theme.fontSizes[1]};
  font-weight: ${theme.fontWeights.body};
  line-height: ${theme.lineHeights.body};
  letter-spacing: -0.1px;
  color: ${theme.colors["text-link"].light};
  text-decoration: none;
  font-weight: 500;
  word-break: break-word;
  hyphens: auto;
  ${arrows}
  ${turn}
  :hover {
    cursor: pointer;
    text-decoration: none;
  }
`

export const A = styled.a`
  ${a};
  `

export const code = css`
  font-size: ${theme.fontSizes[0]};
  font-family: ${theme.fonts.monospace};
  padding: ${theme.space[0]} ${theme.space[1]};
  border-radius: 4px;
  display: inline-block;
  box-shadow: none;
  background: var(--bg-inset);
  text-shadow: none;
  @media (max-width: ${theme.breakpoints[4]}) {
    font-size: ${theme.fontSizes[0]};
  }
`
export const Code = styled.code`
  ${code};
`


const baseArrowStyles = css`
  position: relative;
  display: inline-block;
  padding-left: 0.4rem;
  font-size: ${theme.fontSizes[2]};
  transition: transform 300ms ease-in-out;
`



const RarrChild = styled.span.attrs({
  children: '›',
  className: 'right-arrow-child',
})`
`


export const Larr = styled.span.attrs({
  children: '‹',
  className: 'left-arrow',
})`
  transform: translateX(-4px);
  ${baseArrowStyles};
`

const Turn = styled.span`
  display: inline-flex;
  flex-direction: row;
  padding-left: 0.6rem;

`

export function TurnRight() {
  return(
    <Turn><RarrChild/><RarrChild/><RarrChild/></Turn>
  )
}


export function Arrow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      fill="none"
      viewBox="0 0 12 12"
    >
      <path
        className="arrow-tip"
        fill="#000"
        d="M6.469 1.414a.75.75 0 10-.938 1.172l.938-1.172zM11 6l.469.586a.75.75 0 000-1.172L11 6zM5.531 9.414a.75.75 0 00.938 1.172L5.53 9.414zm0-6.828l5 4 .938-1.172-5-4-.938 1.172zm5 2.828l-5 4 .938 1.172 5-4-.938-1.172z"
      ></path>
      <path
        className="arrow-base"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        strokeOpacity="0"
        d="M11 6H1"
      ></path>
    </svg>
  );
}


const animatedArrow = css`
  position: relative;
  display: inline-block;
  margin-left: 8px;
  .arrow-base {
    stroke: ${theme.colors.blue50};
    stroke-opacity: 1;
    stroke-dasharray: 12;
    stroke-dashoffset: -12;
    transform: translateX(-1px);
  }
  .arrow-tip {
    fill: ${theme.colors.blue50};
    transform: translateX(-4px);
    transition: transform ${theme.animations.default} ;
  }
`

export const Rarr = styled.span.attrs({
  children: <Arrow />,
  className: 'animated-arrow',
})`
  ${animatedArrow};
`
