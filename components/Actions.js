import styled, { css } from 'styled-components'
import theme from '../styles/theme'

const px = (v) => {
  return(v+"px")
}


const buttonBase = css`
  position: relative;
  padding: 6px 16px;
  font-size: 14px;
  line-height: normal;
  font-weight: ${theme.fontWeights.body};
  display: flex;
  flex-direction: row;
  justify-content: center;
  box-sizing: border-box;
  border-radius: 4px;
  font-family: ${theme.fonts.body};
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
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
  display: inline-flex;
  margin: 0;
  padding: 0;
  cursor: pointer;
  font-size: ${theme.fontSizes[1]};
  font-weight: ${theme.fontWeights.body};
  line-height: ${theme.lineHeights.bodyLong};
  letter-spacing: -0.1px;
  color: ${theme.colors.grey};
  transition: opacity 0.3s;
  margin-bottom: 0px;
  color: ${theme.colors.concrete};
  background: ${theme.colors.concrete};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-decoration: none;
  font-weight: 400;
  word-break: break-word;
  hyphens: auto;
  &:hover {
    text-decoration: none;
    background: -webkit-linear-gradient(left, rgba(244,199,62,1) -3.8%, rgba(244,62,62,1) 46.8%, rgba(245,61,195,1) 98.8% );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
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
  props.variant==="cta" && theme.colors["accent-blue"].light
  || theme.colors.smokeDarker
};
border-style: ${props =>
  props.variant==="text" && "hidden"
  || "solid"
};
color: ${props =>
  props.variant==="cta" && theme.colors["text-primary"].dark
  || theme.colors.concrete
};
background: ${props =>
  props.variant==="cta" && theme.colors["accent-blue"].light
  || "none"
};
transition: background color border border-style ${theme.animations.hover};
&:hover {
  background: ${props =>
    props.variant==="cta" && theme.colors["text-primary"].dark
    || "none"
  };
  color: ${props =>
    props.variant==="cta" && theme.colors["accent-blue"].light
    || theme.colors.black
  };
  border: 1px solid ${props =>
    props.variant==="cta" && theme.colors["accent-blue"].light
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
    props.variant==="cta" && theme.colors["text-primary"].dark
    || "none"
  };
  color: ${props =>
    props.variant==="cta" && theme.colors["accent-blue"].light
    || theme.colors.black
  };
  border: 1px solid ${props =>
    props.variant==="cta" && theme.colors["accent-blue"].light
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
      props.variant==="cta" && theme.colors["accent-blue"].light
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
