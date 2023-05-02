import {DM_Sans} from "next/font/google";
import {Input, Text} from "@nextui-org/react";
import SearchButton from "components/components/search_button";
import Header from "components/components/header";

const dm_sans = DM_Sans({
  weight: '700',
  subsets: ['latin']
})

export default function LandingView() {

  return (
    <div className="pb-[80px] md:pb-[140px]">
      <Header />
      <div className="mt-[100px] flex flex-col md:flex-row gap-[20%] justify-between">
        <div className="mx-[20px] mb-[40px] md:ml-[120px] flex flex-col gap-[30px] justify-around">
          <div className="flex flex-col gap-[10px]">
            <Text className="text-center md:text-left uppercase font-[700] text-[12px] md:text-[16px] leading-[12px] md:leading-[16px]" css={{color: '$textLight'}}>
              Save your time with Stonks
            </Text>
            <Text className={`text-center md:text-left text-[30px] md:text-[64px] leading-[30px] md:leading-[64px] font-[700] ${dm_sans.className}`} css={{color: '$textDark'}}>
              India’s first IPO platform
            </Text>
            <Text className="text-center md:text-left text-[16px] leading-[24px] font-[400] mt-10" css={{color: '$textLight'}}>
              Exclusive IPO data platform
            </Text>
          </div>

          <div className="flex justify-center md:justify-start">
            <Input
              rounded
              bordered
              placeholder="Search a company"
              color="default"
              contentRight={
                <SearchButton />
              }
            />
          </div>
        </div>
        <div className="flex items-center justify-center md:justify-end w-full md:w-[40%]">
          <div className="h-[450px] w-[80%] bg-[#45B26B] rounded-[32px] md:rounded-r-[0px]"></div>
        </div>
      </div>
    </div>
  )
}