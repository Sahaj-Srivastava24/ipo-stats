"use client"

import Logo from "components/components/logo";
import ThemeSwitch from "components/components/theme_switch";
import ROUTES from "components/entities/routes";
import Link from "next/link";
import {Navbar, Button, Text} from "@nextui-org/react";


export default function Header() {
  const navCss = {bg: 'transparent'}
  const navContainerCss = {
    bg: 'transparent !important', backdropFilter: 'none !important', '@xs': {px: '20px'}, '@sm': {px: '50px'}
  }

  return (
    <Navbar disableShadow css={navCss} containerCss={navContainerCss} maxWidth='fluid' >
      <Navbar.Brand>
        <Link href={ROUTES.HOME}>
          <Logo />
        </Link>
      </Navbar.Brand>
      <Navbar.Content>
        <Navbar.Item hideIn='xs'>
          <Link href={ROUTES.HOME + '#liveIPO'} className='lg:px-10'>
            <Text css={{fontWeight: 600}}>Live IPOs</Text>
          </Link>
        </Navbar.Item>
        <Navbar.Item hideIn='xs'>
          <Link href={ROUTES.HOME + '#listedIPO'} className='lg:px-10'>
            <Text css={{fontWeight: 600}}>Listed IPOs</Text>
          </Link>
        </Navbar.Item>
        <Navbar.Item hideIn='xs'>
          <Link href={ROUTES.HOME + '#faq'} className='lg:px-10'>
            <Text css={{fontWeight: 600}}>FAQs</Text>
          </Link>
        </Navbar.Item>
        <Navbar.Item hideIn='xs'>
          <ThemeSwitch />
        </Navbar.Item>
        <Navbar.Item showIn='xs'>
          <div className="flex gap-20">
            <Navbar.Item>
              <ThemeSwitch />
            </Navbar.Item>
            <Navbar.Toggle aria-label="toggle navigation" />
          </div>
        </Navbar.Item>
      </Navbar.Content>
      <Navbar.Collapse>
        <Navbar.CollapseItem css={{display: 'flex', justifyContent: 'center'}}>
          <Link color="inherit" href="#">
            <Text>Live IPOs</Text>
          </Link>
        </Navbar.CollapseItem>
        <Navbar.CollapseItem css={{display: 'flex', justifyContent: 'center'}}>
          <Link color="inherit" href="#">
            <Text>Listed IPOs</Text>
          </Link>
        </Navbar.CollapseItem>
        <Navbar.CollapseItem css={{display: 'flex', justifyContent: 'center'}}>
          <Link color="inherit" href="#">
            <Text>Frequency Asked Questions</Text>
          </Link>
        </Navbar.CollapseItem>
      </Navbar.Collapse>
    </Navbar >
  )
}

