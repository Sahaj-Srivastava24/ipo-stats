import Logo from "components/components/logo";
import {DM_Sans} from "next/font/google";
import {Input, Text} from "@nextui-org/react";
import SearchButton from "components/components/search_button";
import ThemeSwitch from "components/components/theme_switch";


const dm_sans = DM_Sans({
  weight: '700',
  subsets: ['latin']
})

export default function LandingView() {

  return (
    <div className="pb-[140px]">
      <div className="flex justify-between items-center px-[30px] py-[40px] md:px-[85px] md:py-[75px] lg:px-[160px] lg:py-[65px]">
        <Logo />
        <ThemeSwitch />
      </div>

      <div className="mt-[100px] flex gap-[20%] justify-between">
        <div className="ml-[80px] flex flex-col gap-30 justify-around">
          <div className="flex flex-col gap-[10px]">
            <Text className="uppercase font-[700] text-[16px] leading-[16px]" css={{color: '$textLight'}}>
              Save your time with Stonks
            </Text>
            <Text className={`text-[64px] leading-[64px] font-[700] ${dm_sans.className}`} css={{color: '$textDark'}}>
              India’s first IPO platform
            </Text>
            <Text className="text-[16px] leading-[24px] font-[400] mt-10" css={{color: '$textLight'}}>
              Exclusive IPO data platform
            </Text>
          </div>

          <div>
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
        <div className="h-[450px] w-[40%] bg-[#45B26B] rounded-l-[32px]"></div>
      </div>
    </div>
  )
}