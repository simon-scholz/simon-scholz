import { useState, useEffect } from "react";
import Link from 'next/link'
import { useRouter } from 'next/router'

import { IconButton } from "../../components/Actions";
import { Container, Grid, MainItems, MobileMainItems, MobileContainer, MenuLink, ContactButton, HeaderBackground, LabelMobile } from "./styles";
import Send from '../../components/icons/Send';
import Menu from '../../components/icons/Menu';
import Close from '../../components/icons/Close';


const MENU_ITEMS = [
  {label: "Home", path: "/"},
  {label: "About", path: "/about"},
  {label: "Case Studies", path: "/case-studies"},
]

export default function Header() {
  const router = useRouter()
  const [mobileExpanded, setMobileExpanded] = useState(false);

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
  if (router.pathname.startsWith('/case-studies')) {
    activeRoute = 'Case Studies'
    activePath = '/case-studies'
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
      <ContactButton variant="cta" hide={mobileExpanded}><Send /><p>Contact</p></ContactButton>
      </Grid>
      <HeaderBackground />
    </Container>
  )
}