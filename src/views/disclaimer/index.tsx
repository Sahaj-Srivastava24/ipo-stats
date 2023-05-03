import {Text} from "@nextui-org/react";
import Footer from "components/components/footer";
import Header from "components/components/header";
import {DM_Sans} from "next/font/google";

const dm_sans = DM_Sans({
  weight: '700',
  subsets: ['latin']
})

export default function DisclaimerView() {

  return (
    <>
      <Header />
      <div className="w-full md:ml-[80px]">

        <div className="mb-40">
          <Text className={`text-center md:text-left text-[30px] md:text-[64px] leading-[30px] md:leading-[64px] font-[700] ${dm_sans.className}`} css={{color: '$textDark'}}>Disclaimer</Text>
        </div>
        <div className="mx-30 md:mx-[0px] md:max-w-[60%]">
          <Text className="md:text-left text-[16px] leading-[24px] font-[400] mt-10" css={{color: '$textLight'}}>
            {`
          All the information provided on this website is for general informational purposes
          only and does not constitute investment advice or an offer to sell, or a solicitation
          of an offer to buy any securities. CheckIPO.in does not guarantee the
          information's truth, accuracy, completeness or timeliness and accepts no liability
          (whether in tort, contract or otherwise) for any loss or damage, howsoever arising
          from or in reliance on the content of this website.
          `}
          </Text>

          <Text className="md:text-left text-[16px] leading-[24px] font-[400] mt-10" css={{color: '$textLight'}}>
            {`
          The content on this website is not intended to be, and should not be construed as,
          a recommendation or endorsement of any particular investment or security or as
          a representation that any investment or security is suitable for any particular
          investor.
          `}
          </Text>

          <Text className="md:text-left text-[16px] leading-[24px] font-[400] mt-10" css={{color: '$textLight'}}>
            {`
          Although this website includes links to third-party websites, CheckIPO.in has not
          participated in developing those other sites and does not exert any editorial or
          further control over those websites. Access to and use of such other websites is
          at the user's own risk. CheckIPO.in is not responsible for the truth or accuracy of
          the content of the information contained in those websites. Links to and from this
          website do not constitute an endorsement or recommendation by CheckIPO.in of
          the third parties or their products/services.
          `}
          </Text>

          <Text className="md:text-left text-[16px] leading-[24px] font-[400] mt-10" css={{color: '$textLight'}}>
            {`
          CheckIPO.in does not warrant the security of any information that may be
          provided to any third party and is not responsible for any loss or damage suffered
          due to any access to or interaction with any other websites via this website.
          This website is provided 'as is'. CheckIPO.in expressly excludes any warranty or
          representation of any kind, expressed or implied, including but not limited to any
          implied warranties or implied terms of merchantability, satisfactory quality, fitness
          for purpose or non-infringement. Without prejudice to the foregoing, CheckIPO.in
          does not warrant that the website's operation will be uninterrupted or error-free or
          that the website will be free from any viruses, worms or any other anomalies.
          The information on this website is obtained from sources that are believed to be
          reliable, but we do not guarantee its accuracy, completeness, or timeliness. We
          are not responsible for any errors or omissions or for any actions taken based on
          the information contained on this website.
          `}
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
        </div>
      </div>
      <Footer hideDisclaimer />
    </>
  )
}