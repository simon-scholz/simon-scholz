import { useState, useEffect } from "react";
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useForm } from "react-hook-form";

import Spacer, { OutsideClickDetector } from '../../components/Utils'
import { Button, IconButton, TextField, TextArea, Label, FormField } from "../../components/Actions";
import {
  Container,
  Grid,
  MainItems,
  MobileMainItems,
  MobileContainer,
  MenuLink,
  ContactPopoutContainer,
  ContactPopoutBase,
  ContactButton,
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
  const [contactPopout, setContactPopout] = useState(true);

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
        {MENU_ITEMS.map((item, idx) => (
          <Link key={"linkId_"+idx} href={item.path}><MenuLink href={item.path} active={activePath === item.path}>{item.label}</MenuLink></Link>
        ))}
        </MainItems>
        <MobileContainer>
          {mobileExpanded ?
            <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start", width: "100%"}}>
            <IconButton onClick={() => setMobileExpanded(!mobileExpanded)}><Close /></IconButton>
            <MobileMainItems>
            {MENU_ITEMS.map((item) => (
              <Link href={item.path}><MenuLink href={item.path} active={activePath === item.path}>{item.label}</MenuLink></Link>
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
        <ContactPopoutContainer>
          <ContactButton variant="cta" hide={mobileExpanded} onClick={() => setContactPopout(!contactPopout)}><Send /><p>Contact</p></ContactButton>
          {contactPopout &&
            <ContactPopout close={() => setContactPopout(false)}/>
          }
        </ContactPopoutContainer>
      </Grid>
      <HeaderBackground />
    </Container>
  )
}


export function ContactPopout(props) {
  const [sent, setSent] = useState(false);
  const { register, reset, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = async (data) => {
    await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(data, null, 2)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        if (data.success) {
          setSent(true)
          reset()
          document.activeElement.blur();
        } else {
          console.log("error")
          // show error toast with email
        }
      })
      .catch(error => {
        console.log("clientError")
        console.log(error);
      })
  };

  return (
    <OutsideClickDetector onOutsideClick={() => props.close()}>
      <ContactPopoutBase>
        <form onSubmit={handleSubmit(onSubmit)} action="https://api.web3forms.com/submit" method="POST" id="form" style={{ width: "100%" }}>
          <input type="hidden" value="8fefae58-f534-465c-ac3e-dd47ced38841" {...register("apikey")} />
          <input type="hidden" value="Simonscholzdesignand.dev Mission Control" {...register("from_name")}/>
          <input type="hidden" value="New submission through personal website" {...register("subject")}/>
          <input type="checkbox" id="" style={{ display: "none" }} {...register("botcheck")}></input>
          <FormField>
            <Label htmlFor="email">Email Address</Label>
            <TextField 
            type="email" 
            id="email" 
            placeholder="you@company.com" 
            {...register("email", { required: true })}
            error={errors.email}
            />
          </FormField>
          <Spacer />
          <FormField>
            <Label htmlFor="message">Your Message</Label>
            <TextArea 
            rows="5"  
            id="message" 
            placeholder="Your Message"
            {...register("message", { required: true })}
            error={errors.message}
            />
          </FormField>
          <Spacer />
          <Button
            type="submit"
            variant="cta"
            style={{ width: "100%" }}>
            {sent ? "Message sent!" : "Send message"}
          </Button>
        </form>
      </ContactPopoutBase>
    </OutsideClickDetector>
  )
}