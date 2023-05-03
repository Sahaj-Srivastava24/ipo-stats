import {Text} from "@nextui-org/react";
import Footer from "components/components/footer";
import Header from "components/components/header";
import {DM_Sans} from "next/font/google";

const dm_sans = DM_Sans({
  weight: '700',
  subsets: ['latin']
})

export default function PrivacyView() {

  return (
    <>
      <Header />
      <div className="w-full md:ml-[80px]">

        <div className="mb-40">
          <Text className={`text-center md:text-left text-[30px] md:text-[64px] leading-[30px] md:leading-[64px] font-[700] ${dm_sans.className}`} css={{color: '$textDark'}}>Privacy Policy</Text>
        </div>
        <div className="mx-30 md:mx-[0px] md:max-w-[60%]">
          <Text className="md:text-left text-[16px] leading-[24px] font-[400] mt-10" css={{color: '$textLight'}}>
            {`
            This Privacy Policy describes how our website, checkipo.in, collects, uses, and
            shares your personal information when you visit our website or use our services.
            By using our website, you agree to the terms of this Privacy Policy.
            Thank you for choosing CheckIPO.in, doing business as checkipo.in
            (“checkipo.in”, “we”, “us”, or “our”). We are committed to protecting your
            personal information and your right to privacy. If you have any questions or
            concerns about our policy or our practices with regard to your personal
            information, please get in touch with us at contact@checkipo.in.
          `}
          </Text>

          <Text className="md:text-left text-[16px] leading-[24px] font-[400] mt-10" css={{color: '$textLight'}}>
            {`
            When you visit our website https://www.checkipo.in and use our services, you
            trust us with your personal information. We take your privacy very seriously. In
            this privacy notice, we describe our privacy policy. We seek to explain to you in
            the most precise way possible what information we collect, how we use it and
            what rights you have in relation to it. We hope you take some time to read through
            it carefully, as it is important. If there are any terms in this privacy policy that you
            disagree with, please discontinue the use of our Sites and our services.
          `}
          </Text>

          <Text className="md:text-left text-[16px] leading-[24px] font-[400] mt-10" css={{color: '$textLight'}}>
            {`
            This privacy policy applies to all information collected through our website (such
            as https://www.checkipo.in) and/or any related services, sales, marketing or
            events (we refer to them collectively in this privacy policy as the “Sites").
            Please read this privacy policy carefully, as it will help you make informed
            decisions about sharing your personal information with us.
          `}
          </Text>

          <Text className="md:text-left text-[16px] leading-[24px] font-[400] mt-10" css={{color: '$textDark'}}>
            Personal Information We Collect:
          </Text>
          <Text className="md:text-left text-[16px] leading-[24px] font-[400] mt-10" css={{color: '$textLight'}}>
            {`
            Investing in securities involves risks, and you should be aware of those risks
            before investing. The value of investments and the income from them can go
            down as well as up, and past performance is not a guide to future performance.
            We do not guarantee the performance of any investments or the success of any
            investment strategy. Any investment decisions that you make are solely your
            responsibility.
            By using this website, you acknowledge and agree to the terms of this disclaimer.
          `}
          </Text>

          <Text className="md:text-left text-[16px] leading-[24px] font-[400] mt-10" css={{color: '$textDark'}}>
            Use of Personal Information:
          </Text>
          <Text className="md:text-left text-[16px] leading-[24px] font-[400] mt-10" css={{color: '$textLight'}}>
            {`
            We may use your personal information to provide you with information about our
            services, to communicate with you about your account, and to provide customer
            support. We may also use your personal information to improve our services,
            personalise your experience, and comply with legal requirements.
          `}
          </Text>

          <Text className="md:text-left text-[16px] leading-[24px] font-[400] mt-10" css={{color: '$textDark'}}>
            Sharing of Personal Information:
          </Text>
          <Text className="md:text-left text-[16px] leading-[24px] font-[400] mt-10" css={{color: '$textLight'}}>
            {`
            We may share your personal information with our affiliates, service providers, and
            business partners in order to provide you with our services. We may also share
            your personal information if required by law or if we believe that disclosure is
            necessary to protect our rights, property, or safety.
          `}
          </Text>

          <Text className="md:text-left text-[16px] leading-[24px] font-[400] mt-10" css={{color: '$textDark'}}>
            Sharing of Personal Information:
          </Text>
          <Text className="md:text-left text-[16px] leading-[24px] font-[400] mt-10" css={{color: '$textLight'}}>
            {`
            We may share your personal information with our affiliates, service providers, and
            business partners in order to provide you with our services. We may also share
            your personal information if required by law or if we believe that disclosure is
            necessary to protect our rights, property, or safety.
          `}
          </Text>
        </div>
      </div>
      <Footer />
    </>
  )
}