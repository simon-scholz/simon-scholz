import { useState, useEffect, useRef } from "react";
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Toaster } from 'react-hot-toast';
import { IconButton } from "../../components/Button";


import * as Styled from "./HeaderStyles";
import Send from '../../components/icons/Send';
import Menu from '../../components/icons/Menu';
import Close from '../../components/icons/Close';
import Moon from '../../components/icons/Moon';
import Sun from '../../components/icons/Sun';


import { HomeIcon, UserIcon, CollectionIcon } from '@heroicons/react/solid'
import Collection from "../../components/icons/Collection";
import { withTheme } from "styled-components";

import ContactPopout from "./ContactPopout"


const MENU_ITEMS = [
  { label: "Home", path: "/"},
  {label: "About", path: "/about"},
  { label: "Case Studies", path: "/work"},
]

const Header = ({ toggleTheme, theme }) => {
  const router = useRouter()
  const [mobileExpanded, setMobileExpanded] = useState(false);
  const [contactPopout, setContactPopout] = useState(false);

  let activePath = ''
  let activeRoute = ''
  if (router.pathname === '/') {
    activeRoute = 'Home'
    activePath = '/'
  }
  if (router.pathname.startsWith('/about')) {
    activeRoute = 'About'
    activePath = '/about'
  }
  if (router.pathname.startsWith('/work')) {
    activeRoute = 'Case Studies'
    activePath = '/work'
  }

  useEffect(() => {
    setMobileExpanded(false)
  }, [router])


  
  const [widthActiveElement, setWidthActiveElement] = useState("0px")
  const [xActiveElement, setXActiveElement] = useState("0px")
  const [hideActiveElement, setHideActiveElement] = useState(true)

  const menuRef = useRef()

  const getPosition = (e, isActive) => {
    const parent = menuRef.current.getBoundingClientRect()
    const rect = e.target.getBoundingClientRect()

    const width = rect.width
    const position = rect.left - parent.left

    
    setHideActiveElement(isActive)
    setXActiveElement((position - 10)+"px")
    setWidthActiveElement(width+"px")
  };

  
  
  return(
    <Styled.Container>
      <Styled.StyledToolbar ref={menuRef}>
        <Styled.MainItems onMouseEnter={() => setHideActiveElement(false)} onMouseLeave={() => setHideActiveElement(true)}>
          <Styled.HoverBackground width={widthActiveElement} x={xActiveElement} hide={hideActiveElement} />
          {MENU_ITEMS.map((item, idx) => (
            <Link key={"linkId_" + idx} href={item.path}>
              <Styled.MenuLink
                onMouseEnter={(e) => getPosition(e, activePath === item.path)}
                href={item.path}
                active={activePath === item.path}
                onClick={() => setHideActiveElement(true)}
              >
                {item.label}
              </Styled.MenuLink>
            </Link>
          ))}
        </Styled.MainItems>
        <IconButton onClick={toggleTheme}>{theme.themeLabel === "light" ? <Moon size={14} /> : <Sun size={14}/>}</IconButton>
        <Styled.ContactPopoutContainer>
          <Styled.ContactButton variant="cta" hide={mobileExpanded} onClick={() => setContactPopout(!contactPopout)}>Contact</Styled.ContactButton>
            {contactPopout &&
              <ContactPopout onClose={() => setContactPopout(false)}/>
            }
        </Styled.ContactPopoutContainer>
        
      </Styled.StyledToolbar>
        {/* <HeaderBackground /> */}
        <Toaster position="top-right" containerStyle={{ position: "absolute", top: "80px", right: "12px" }} />
      
    </Styled.Container>
  )
}


export default withTheme(Header)



