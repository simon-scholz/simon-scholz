import { useState, useEffect, useRef } from "react";
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';

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
  LabelMobile,
  StyledToolbar,
  HoverBackground
} from "./styles";
import Send from '../../components/icons/Send';
import Menu from '../../components/icons/Menu';
import Close from '../../components/icons/Close';
import Moon from '../../components/icons/Moon';
import Sun from '../../components/icons/Sun';
import Toast from "../../components/Toast";

import { HomeIcon, UserIcon, CollectionIcon } from '@heroicons/react/solid'
import Collection from "../../components/icons/Collection";
import { withTheme } from "styled-components";



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
    <Container>
      <StyledToolbar ref={menuRef}>
          <MainItems onMouseEnter={() => setHideActiveElement(false)} onMouseLeave={() => setHideActiveElement(true)}>
          <HoverBackground width={widthActiveElement} x={xActiveElement} hide={hideActiveElement} />
          {MENU_ITEMS.map((item, idx) => (
            <Link key={"linkId_" + idx} href={item.path}>
              <MenuLink
                onMouseEnter={(e) => getPosition(e, activePath === item.path)}
                href={item.path}
                active={activePath === item.path}
                onClick={() => setHideActiveElement(true)}
              >
                {item.label}
              </MenuLink>
            </Link>
          ))}
          </MainItems>
        <IconButton onClick={toggleTheme}>{theme.themeLabel === "light" ? <Moon size={14} /> : <Sun size={14}/>}</IconButton>
          <ContactPopoutContainer>
            <ContactButton variant="cta" hide={mobileExpanded} onClick={() => setContactPopout(!contactPopout)}>Contact</ContactButton>
            {contactPopout &&
              <ContactPopout close={() => setContactPopout(false)}/>
            }
          </ContactPopoutContainer>
        
        </StyledToolbar>
        {/* <HeaderBackground /> */}
        <Toaster position="top-right" containerStyle={{ position: "absolute", top: "80px", right: "12px" }} />
      
    </Container>
  )
}


export default withTheme(Header)



export function ContactPopout(props) {
  const { register, reset, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false)
  
  const onSubmit = async (data) => {
    setLoading(true)
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
        if (data.success) {
          reset()
          document.activeElement.blur();
          toast.custom(
            <Toast
              title="Message successfully sent!"
              subtitle="I'll be in touch with you soon."
            />
          , {duration: 2000})
          props.close()
        } else {
          toast.custom(
          <Toast 
            title="Something went wrong!"
            subtitle={<span>If you still want to get in touch, send me an email to <a href="mailto:simonscholz@outlook.com">simonscholz@outlook.com</a></span>}
            type="error" />
          )
        }
      })
      .catch(error => {
        toast.custom(
          <Toast
            title="Something went wrong!"
            subtitle={<span>If you still want to get in touch, send me an email to <a href="mailto:simonscholz@outlook.com">simonscholz@outlook.com</a></span>}
            type="error" />
        )
      })
      .finally(() => setLoading(false))
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
            style={{ width: "100%" }}
            disabled={loading}
            >
            Send message
          </Button>
        </form>
      </ContactPopoutBase>
    </OutsideClickDetector>
  )
}