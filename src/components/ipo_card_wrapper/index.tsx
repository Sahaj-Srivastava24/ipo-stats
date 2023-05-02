import {Button, Text} from "@nextui-org/react"
import IPOCard from "components/components/ipo_card"
import {DM_Sans} from "next/font/google"

const dm_sans = DM_Sans({
  weight: '700',
  subsets: ['latin']
})

// eslint-disable-next-line 
export default function IPOCardWrapper(props: {heading: string, data?: any[]}) {

  return (
    <div className="py-20 md:pt-[50px] md:pb-[50px]">
      <div className="flex flex-col gap-10 items-center justify-center mx-30 pb-30">
        <Text className={`text-center md:text-left text-[42px] md:text-[64px] leading-[30px] md:leading-[64px] font-[700] ${dm_sans.className}`} css={{color: '$textDark'}}>{props.heading}</Text>
        <Text className="text-[16px] leading-[24px] text-center " css={{color: '$textLight'}}>
          Stonks is a production-ready library of stackable content blocks built in React Native.
        </Text>
      </div>
      <div className="grid md:grid-cols-3 gap-[25px] mx-30 md:mx-[80px] lg:mx-[140px]">
        <IPOCard />
        <IPOCard />
        <IPOCard />
      </div>
      <div className="flex justify-center mt-40">
        <Button css={{backgroundColor: '#3772FF !important', borderRadius: '80px'}}>See more</Button>
      </div>
    </div>
  )
}