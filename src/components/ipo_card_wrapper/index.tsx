import {Button} from "@nextui-org/react"
import IPOCard from "components/components/ipo_card"
import {DM_Sans} from "next/font/google"

const dm_sans = DM_Sans({
  weight: '700',
  subsets: ['latin']
})

export default function IPOCardWrapper(props: {heading: string, data?: any[]}) {

  return (
    <div className="py-20">
      <div className="flex flex-col items-center justify-center pt-[50px] pb-[100px]">
        <div className={`${dm_sans.className} text-[48px] text-[#23262F] leading-[56px]`}>
          {props.heading}
        </div>
        <div className="text-[#777E90] text-[16px] leading-[24px]">
          Stonks is a production-ready library of stackable content blocks built in React Native.
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-[25px] mx-30 md:mx-[80px] lg:mx-[140px]">
        <IPOCard />
        <IPOCard />
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