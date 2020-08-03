import styled, { css } from 'styled-components'
import theme from '../styles/theme'

const px = (v) => {
  return(v+"px")
}


const buttonBase = css`
  position: relative;
  font-size: ${theme.fontSizes[0]};
  line-height: normal;
  font-weight: ${theme.fontWeights.body};
  display: flex;
  flex-direction: row;
  justify-content: center;
  box-sizing: border-box;
  border-radius: 4px;
  font-family: ${theme.fonts.body};
  cursor: pointer;
  padding: ${theme.space[1]} ${theme.space[2]};
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
