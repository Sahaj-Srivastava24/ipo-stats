"use client"

import Logo from "components/components/logo";
import ThemeSwitch from "components/components/theme_switch";
import ROUTES from "components/entities/routes";
import Link from "next/link";
import {Navbar, Button, Text} from "@nextui-org/react";


export default function Header() {

  return (
    <Navbar css={{bgColor: '$backgroundight'}} containerCss={{'@xs': {px: '20px'}, '@sm': {px: '50px'}}} maxWidth='fluid'>
      <Navbar.Brand>
        <Link href={ROUTES.HOME}>
          <Logo />
        </Link>
      </Navbar.Brand>
      <Navbar.Content>
        <Navbar.Item hideIn='xs'>
          <Navbar.Link color="inherit" href={ROUTES.HOME + '#liveIPO'}>
            <Text>Live IPOs</Text>
          </Navbar.Link>
        </Navbar.Item>
        <Navbar.Item hideIn='xs'>
          <Button auto flat as={Link} href={ROUTES.HOME + '#listedIPO'} css={{scrollBehavior: 'smooth'}}>
            <Text>Listed IPOs</Text>
          </Button>
        </Navbar.Item>
        <Navbar.Item hideIn='xs'>
          <Button auto flat as={Link} href={ROUTES.HOME + '#faqs'} css={{scrollBehavior: 'smooth'}}>
            <Text>FAQs</Text>
          </Button>
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
    </Navbar>
  )
}

