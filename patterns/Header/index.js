import { useState, useEffect } from "react";
import Link from 'next/link'
import { useRouter } from 'next/router'

import { IconButton } from "../../components/Actions";
import {
  Container,
  Grid,
  MainItems,
  MobileMainItems,
  MobileContainer,
  MenuLink,
  ContactButton,
  ContactPopout,
  HeaderBackground,
  LabelMobile
} from "./styles";
import Send from '../../components/icons/Send';
import Menu from '../../components/icons/Menu';
import Close from '../../components/icons/Close';


const MENU_ITEMS = [
  {label: "Home", path: "/"},
  {label: "About", path: "/about"},
  {label: "Work", path: "/work"},
]

export default function Header() {
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
    activeRoute = 'Work'
    activePath = '/work'
  }

  useEffect(() => {
    setMobileExpanded(false)
  }, [router])

  return(
    <Container>
      <Grid>
        <MainItems>
        {MENU_ITEMS.map((item) => (
          <Link href={item.path}><MenuLink href="#" active={activePath === item.path}>{item.label}</MenuLink></Link>
        ))}
        </MainItems>
        <MobileContainer>
          {mobileExpanded ?
            <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start", width: "100%"}}>
            <IconButton onClick={() => setMobileExpanded(!mobileExpanded)}><Close /></IconButton>
            <MobileMainItems>
            {MENU_ITEMS.map((item) => (
              <Link href={item.path}><MenuLink href="#" active={activePath === item.path}>{item.label}</MenuLink></Link>
            ))}
            </MobileMainItems>
            </div>
            :
            <>
            <IconButton onClick={() => setMobileExpanded(!mobileExpanded)}><Menu /></IconButton>
            <LabelMobile>{activeRoute}</LabelMobile>
            </>
          }
        </MobileContainer>
      <ContactButton variant="cta" hide={mobileExpanded} onClick={() => setContactPopout(!contactPopout)}><Send /><p>Contact</p></ContactButton>
      {contactPopout &&
        <ContactPopout close={() => setContactPopout(false)}/>
      }
      </Grid>
      <HeaderBackground />
    </Container>
  )
}
