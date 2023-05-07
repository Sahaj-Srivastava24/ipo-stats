"use client"

import {Button, Text} from "@nextui-org/react"
import IPOCard from "components/components/ipo_card"
import {type IPO} from "components/entities/listed-ipo"
import {DM_Sans} from "next/font/google"
import {useState} from "react"

const dm_sans = DM_Sans({
  weight: '700',
  subsets: ['latin']
})

// eslint-disable-next-line 
export default function IPOCardWrapper(props: {heading: string, subheading: string, ipos: IPO[]}) {
  const wrapperCls = props.ipos.length < 3 ? 'flex mx-30 navLogo:justify-center md:mx-[80px] lg:mx-[140px]' : 'grid md:grid-cols-2 lg:grid-cols-3 gap-[25px] mx-30 md:mx-[80px] lg:mx-[140px]'
  const innerCls = props.ipos.length < 3 ? '' : ''

  const [showButton, setButton] = useState(props.ipos.length > 3)
  const [showAll, setAll] = useState(() => {
    if (props.ipos.length < 3)
      return true
    return false
  })
  const ipos = showAll ? props.ipos : props.ipos.slice(0, 3)

  const handleClick = () => {
    setTimeout(() => {
      setAll(true)
      setButton(false)
    }, 100)
  }

  const IPOList = () => {
    if (props.ipos.length < 0)
      return <Text css={{textAlign: 'center'}}>There are no IPOs for the given category.</Text>

    return (
      <div className={wrapperCls}>
        {ipos.map((ipo, idx) => <IPOCard ipo={ipo} key={idx} cls={innerCls} />)}
      </div>
    )
  }


  return (
    <div className="py-20 md:pt-[50px] md:pb-[50px]">
      <div className="flex flex-col gap-10 items-center justify-center mx-30 pb-30">
        <Text className={`text-center md:text-left text-[42px] md:text-[64px] leading-[30px] md:leading-[64px] font-[700] ${dm_sans.className}`} css={{color: '$textDark'}}>{props.heading}</Text>
        <Text className="text-[16px] leading-[24px] text-center " css={{color: '$textLight'}}>
          {props.subheading}
        </Text>
      </div>
      <IPOList />
      {showButton && (
        <div className="flex justify-center mt-40">
          <Button css={{backgroundColor: '#3772FF !important', borderRadius: '80px'}} onClick={handleClick}>See more</Button>
        </div>
      )}
    </div>
  )
}