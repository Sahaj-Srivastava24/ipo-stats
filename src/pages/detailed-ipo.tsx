import {Text} from "@nextui-org/react";
import IPODetailsTable from "components/components/detailed-ipo/IPODetailsTable";
import IPOTables from "components/components/detailed-ipo/IPOTable";
import Feedback from "components/components/feedback";
import Footer from "components/components/footer";
import Header from "components/components/header";
import {companies} from "components/components/ipo_details/ipo-details-1";
import {DM_Sans} from "next/font/google";
import Image from "next/image";
import {useRouter} from 'next/router'


const dm_sans = DM_Sans({
  weight: '700',
  subsets: ['latin']
})


export default function DetailedIPO() {
  const router = useRouter()
  const data = router.query.id === 'mankind' ? companies[0] : companies[1]

  return (
    <>
      <Header />
      <div className="flex flex-col items-center md:flex-row gap-30 md:gap-10 mx-30 pb-30 mt-30 md:items-center">
        <div className="md:w-[40%] flex items-center justify-center">
          <Image src={data.image} alt="Company Image" width={300} height={200} className="h-200 w-full mx-20 md:mx-0 md:w-300 md:ml-30" />
        </div>
        <div className="flex flex-col items-center gap-10 md:ml-10 md:items-start md:max-w-[60%]">
          <Text className={`text-center md:text-left text-[30px] md:text-[42px] leading-[30px] md:leading-[42px] font-[700] ${dm_sans.className} md:max-w-[60%]`} css={{color: '$textDark'}}>{data.name}</Text>
          <Text className="text-[16px] leading-[24px] md:text-[12px] md:leading-[16px]" css={{color: '$textLight'}}>
            {data.description}
          </Text>
        </div>
      </div >
      <div className="flex flex-col gap-20 mx-20 navLogo:mx-30 md:mx-[80px]">
        <div>
          <Text className={`text-center md:text-left text-[24px] md:text-[32px] leading-[24px] md:leading-[32px] font-[700] mb-20 pl-10 ${dm_sans.className}`} css={{color: '$textDark'}}>IPO Details</Text>
          <IPODetailsTable ipoDetails={data.ipo_details} ipoTT={data.ipo_tentative_timetable} />
        </div>
        <div>
          <Text className={`text-center md:text-left text-[24px] md:text-[32px] leading-[24px] md:leading-[32px] font-[700] mb-20 pl-10 ${dm_sans.className}`} css={{color: '$textDark'}}>Company Financials</Text>
          <IPOTables companyFinances={data.company_financials} />
        </div>
      </div>
      <Footer />
      <Feedback />
    </>
  )
}