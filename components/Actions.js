import styled, { css } from 'styled-components'
import { lightTheme as theme} from '../styles/theme'

const px = (v) => {
  return(v+"px")
}


const buttonBase = css`
  position: relative;
  padding: 12px 16px;
  font-size: 14px;
  line-height: 1;
  font-weight: ${theme.fontWeights.body};
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* box-sizing: border-box; */
  border-radius: 4px;
  font-family: ${theme.fonts.body};
  cursor: pointer;
  margin: 8px 0px;
  &:disabled {
    cursor: not-allowed;
  }
  @media only screen and (min-width: ${theme.breakpoints[4]}) {
    padding: 8px 16px;
    margin: 0px 0px;
  }
`


const ButtonContent = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  align-content: center;
  position: relative;
  display: block;
`

export const InlineButton = styled.button`
  border-style: hidden;
  display: inline;
  margin: 0;
  padding: 0;
  cursor: pointer;
  font-size: ${theme.fontSizes[1]};
  font-weight: ${theme.fontWeights.body};
  line-height: ${theme.lineHeights.bodyLong};
  letter-spacing: -0.1px;
  transition: opacity 0.3s;
  margin-bottom: 0px;
  background: ${theme.colors.concrete};
  -webkit-background-clip: text;
  -moz-background-clip: text;
  color: ${theme.colors.concrete};
  text-decoration: none;
  font-weight: 400;
  word-break: break-word;
  hyphens: auto;
  p {
    margin: 0px;
  }
  &:hover {
    p {
      margin: 0px;
      text-decoration: none;
      background: -webkit-linear-gradient(left, rgba(244,199,62,1) -3.8%, rgba(244,62,62,1) 46.8%, rgba(245,61,195,1) 98.8% );
      -webkit-background-clip: text;
      -moz-background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-text-fill-color: transparent;
    }
    text-decoration: none;
    background: -webkit-linear-gradient(left, rgba(244,199,62,1) -3.8%, rgba(244,62,62,1) 46.8%, rgba(245,61,195,1) 98.8% );
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }
`

export const IconButton = styled.button.attrs({
  className: "button-icon-only"
})`
  cursor: pointer;
  background: transparent;
  border-style: hidden;
  color: ${theme.colors.concrete};
  padding: 8px;
  border-radius: 4px;
  &:hover {
    color: ${theme.colors.black};
    background: ${theme.colors.snowDark};
  }
`


export const Button = styled.button`
${buttonBase}
border: 1px solid ${props =>
  props.variant==="cta" && theme.colors.purple
  || theme.colors.smokeDarker
};
border-style: ${props =>
  props.variant==="text" && "hidden"
  || "solid"
};
color: ${props =>
  props.variant==="cta" && theme.colors.white
  || theme.colors.concrete
};
background: ${props =>
  props.variant==="cta" && theme.colors.purple
  || "none"
};
transition: background color border border-style ${theme.animations.hover};
&:hover {
  background: ${props =>
    props.variant==="cta" && theme.colors.purpleDark
    || "none"
  };
  color: ${props =>
    props.variant==="cta" && theme.colors.white
    || theme.colors.black
  };
  border: 1px solid ${props =>
    props.variant==="cta" && theme.colors.purple
    || theme.colors.black
  };
  border-style: ${props =>
    props.variant==="text" && "hidden"
    || "solid"
  };
  transition: background color border border-style ${theme.animations.hover};
}
&:focus {
  outline: none;
  background: ${props =>
    props.variant==="cta" && theme.colors.white
    || "none"
  };
  color: ${props =>
    props.variant==="cta" && theme.colors.purple
    || theme.colors.black
  };
  border: 1px solid ${props =>
    props.variant==="cta" && theme.colors.purple
    || theme.colors.black
  };
  border-style: ${props =>
    props.variant==="text" && "hidden"
    || "solid"
  };
  &:after {
    content: " ";
    position: absolute;
    top: -5px;
    bottom: -5px;
    left: -5px;
    right: -5px;
    border-radius: 7px;
    border: 1.5px solid ${props =>
      props.variant==="cta" && theme.colors.purpleDark
      || theme.colors.black
    };
  }
};
`

export const Flip = styled.span.attrs({
  children: '›',
  className: 'flip-arrow',
})`
  margin-left: ${theme.space[2]};
  transform: ${props =>
    props.open && "rotate(-90deg)"
    || "rotate(90deg)"};
  transition: transform 300ms ease-in-out;
`



export const Label = styled.label`
  font-size: 0.6rem;
  line-height: ${theme.lineHeights.body};
  color: ${theme.colors.grey};
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
  background: ${theme.colors.snowDark};
  padding: 12px ${theme.space[3]};
  border-radius: ${theme.space[2]};
  font-size: ${theme.fontSizes[0]};
  &:hover {
    background: ${theme.colors.snowDarker};
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 122, 255, 0.8);
  }
`

export const TextArea = styled.textarea`
  width: 100%;
  border: none;
  background: ${theme.colors.snowDark};
  padding: 12px ${theme.space[3]};
  border-radius: ${theme.space[2]};
  font-size: ${theme.fontSizes[0]};
  line-height: ${theme.lineHeights.body};
  resize: none;
  font-family: sans-serif;
  &:hover {
    background: ${theme.colors.snowDarker};
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 122, 255, 0.8);
  }
`