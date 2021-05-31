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
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = fData => {
    console.log(fData)
    console.log(typeof fData)

    const data = new FormData()
    for (const key in fData) {
      data.append(key, fData[key])
    }
    
    console.log(data)
    console.log(typeof data)
    
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(async (response) => {
        // let json = await response.json();
        if (response.status == 200) {
          console.log(response)
        } else {
          console.log(response);
        }
      })
      .catch(error => {
        console.log(error);
      })
      // .then(function () {
      //   form.reset();
      //   setTimeout(() => {
      //     result.style.display = "none";
      //   }, 3000);
      // });
  };

  return (
    <OutsideClickDetector onOutsideClick={() => props.close()}>
      <ContactPopoutBase>
        <form onSubmit={handleSubmit(onSubmit)} action="https://api.web3forms.com/submit" method="POST" id="form" style={{ width: "100%" }}>
          <input type="hidden" name="from_name" value="Simonscholzdesignand.dev Mission Control" {...register("from_name")}/>
          <input type="hidden" name="api_key" value="8fefae58-f534-465c-ac3e-dd47ced38841" {...register("apiKey")}/>
          <input type="hidden" name="subject" value="New submission through personal website" {...register("subject")}/>
          <input type="checkbox" name="botcheck" id="" style={{ display: "none" }} {...register("botcheck")}/>
          <FormField>
            <Label htmlFor="email">Email Address</Label>
            <TextField 
            type="email" 
            name="email" 
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
            name="message" 
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
            {sent ? "Sent!" : "Send message"}
          </Button>
        </form>
      </ContactPopoutBase>
    </OutsideClickDetector>
  )
}