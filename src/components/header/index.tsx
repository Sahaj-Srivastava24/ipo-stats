import Logo from "components/components/logo";
import ThemeSwitch from "components/components/theme_switch";
import ROUTES from "components/entities/routes";
import Link from "next/link";
import {Navbar, Text} from "@nextui-org/react";
import {useRef} from 'react'


export default function Header() {
  const btnRef = useRef<HTMLButtonElement>()
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
          <a href={'#liveIPO'} className='lg:px-10'>
            <Text css={{fontWeight: 600}}>Live IPOs</Text>
          </a>
        </Navbar.Item>
        <Navbar.Item hideIn='xs'>
          <a href={'#listedIPO'} className='lg:px-10'>
            <Text css={{fontWeight: 600}}>Listed IPOs</Text>
          </a>
        </Navbar.Item>
        {/* <Navbar.Item hideIn='xs'>
          <Link href={ROUTES.HOME + '#faqs'} className='lg:px-10'>
            <Text css={{fontWeight: 600}}>FAQs</Text>
          </Link>
        </Navbar.Item> */}
        <Navbar.Item hideIn='xs'>
          <ThemeSwitch />
        </Navbar.Item>
        <Navbar.Item showIn='xs'>
          <div className="flex gap-20">
            <Navbar.Item>
              <ThemeSwitch />
            </Navbar.Item>
            <Navbar.Toggle aria-label="toggle navigation" id='toggle-button' ref={btnRef} />
          </div>
        </Navbar.Item>
      </Navbar.Content>
      <Navbar.Collapse showIn='xs'>
        <Navbar.CollapseItem css={{display: 'flex', justifyContent: 'center'}}>
          <a href='#liveIPO'>
            <Text onClick={() => {
              if (btnRef.current)
                btnRef.current.click()
            }}>Live IPOs</Text>
          </a>
        </Navbar.CollapseItem>
        <Navbar.CollapseItem css={{display: 'flex', justifyContent: 'center'}}>
          <a href='#listedIPO' >
            <Text onClick={() => {
              if (btnRef.current)
                btnRef.current.click()
            }}>Listed IPOs</Text>
          </a>
        </Navbar.CollapseItem>
        {/* <Navbar.CollapseItem css={{display: 'flex', justifyContent: 'center'}}>
          <Link color="inherit" href={ROUTES.HOME + '#faqs'}>
            <Text>Frequency Asked Questions</Text>
          </Link>
        </Navbar.CollapseItem> */}
      </Navbar.Collapse>
    </Navbar >
  )
}

