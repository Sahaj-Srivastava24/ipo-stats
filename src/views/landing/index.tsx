import {DM_Sans} from "next/font/google";
import {Input, Text} from "@nextui-org/react";
import SearchButton from "components/components/search_button";
import Header from "components/components/header";
import Illustration from "components/components/illustration";

const dm_sans = DM_Sans({
  weight: '700',
  subsets: ['latin']
})

export default function LandingView() {
  return (
    <div className="pb-[40px] md:pb-[100px]">
      <Header />
      <div className="mt-20 md:mt-[50px] landing:mt-[100px] mx-40 landing:mx-[100px] flex flex-col-reverse md:flex-row gap-[40px] justify-between">
        <div className="flex flex-col gap-[30px] justify-around">
          <div className="flex flex-col gap-[10px]">
            <Text className="text-center md:text-left uppercase font-[700] text-[12px] md:text-[16px] leading-[12px] md:leading-[16px]" css={{color: '$textLight'}}>
              Welcome to
            </Text>
            <Text className={`text-center md:text-left text-[30px] md:text-[64px] leading-[30px] md:leading-[64px] font-[700] ${dm_sans.className}`} css={{color: '$textDark'}}>
              INDIA’S FIRST
            </Text>
            <Text className="text-center md:text-left text-[16px] leading-[24px] font-[400] mt-10" css={{color: '$textLight'}}>
              Exclusive IPO data platform
            </Text>
          </div>

          <div className="flex justify-center md:justify-start">
            <Input
              rounded
              animated={false}
              placeholder="Search a company"
              color="default"
              borderWeight='light'
              contentRight={
                <SearchButton />
              }
            />
          </div>
        </div>
        <div className="flex items-center justify-center w-full md:w-[40%]">
          <Illustration />
        </div>
      </div>
    </div>
  )
}