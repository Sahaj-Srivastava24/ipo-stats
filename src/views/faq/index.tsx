import {Text} from "@nextui-org/react"
import FAQQuestions from "components/components/faq_section/faq_questions"
import FAQTabs from "components/components/faq_section/faq_tabs"
import {DM_Sans} from "next/font/google"
import {useState} from "react"

const dm_sans = DM_Sans({
  weight: '700',
  subsets: ['latin']
})


export default function FAQs() {
  const [tab, setTab] = useState(0)

  return (
    <div className="pt-[120px] mx-[20px] md:mx-[70px]">
      <div className="md:max-w-[60%] mb-[60px]">
        <div className="flex flex-col gap-[10px]">
          <Text className="uppercase font-[700] text-[12px] md:text-[16px] leading-[12px] md:leading-[16px]" css={{color: '$textLight'}}>
            learn how to get started
          </Text>
          <Text className={`text-[30px] md:text-[64px] leading-[30px] md:leading-[64px] font-[700] ${dm_sans.className}`} css={{color: '$textDark'}}>
            Frequently Asked Questions
          </Text>
          <div className="text-[#777E90] text-[16px] leading-[24px] font-[400] mt-10">
            Join Stonks community now to get free updates and also alot of freebies are waiting for you or Contact Support
          </div>
        </div>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-[3fr,8fr]">
        <FAQTabs tab={tab} setTab={setTab} />
        <FAQQuestions />
      </div>
    </div>
  )
}