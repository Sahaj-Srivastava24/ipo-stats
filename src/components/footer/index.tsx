import Link from "next/link";
import Logo from "../logo";
import {Collapse, Text} from "@nextui-org/react";
import ROUTES from "components/entities/routes";

export default function Footer() {

  return (
    <div className="mx-[80px]">
      <div className="mt-[100px] border-b-2 border-footerDiv pb-10">
        <div className="flex justify-between mb-[40px]">
          <div className="flex gap-[10px]">
            <Logo />
            <div className="min-h-[98%] w-[1px] bg-[#E6E8EC]" />
            <Text className="leading-24 text-14 flex items-center" css={{color: '$textLight'}}>
              Save your time with Stonks
            </Text>
          </div>
          <div className="flex gap-[20px] items-center">
            <Link href={ROUTES.PRIVACY} className="text-[#777E90] text-[14px]">
              <div>
                Privacy Policy
              </div>
            </Link>
            <Link href={ROUTES.DISCLAIMER} className="text-[#777E90] text-[14px]">
              <div>
                Disclaimer
              </div>
            </Link>
          </div>
        </div>
        <div className="text-[#777E90] leading-[20px] text-[12px] flex justify-between px-[0.75em]">
          <div>
            Copyright © 2023. All rights reserved
          </div>
          <div>
            Made with ❤️ in India
          </div>
        </div>
      </div>
      <div>
        <Collapse.Group>
          <Collapse expanded title="Disclaimer" css={{h3: {fontSize: '18px'}}}>
            <Text size={14} className="text-[#777E90]">
              The information provided on this website is for general informational
              purposes only and does not constitute investment advice or a solicitation to buy or
              sell any securities. Investing in securities involves risks, and you should be aware
              of those risks before investing. The value of investments and the income from
              them can go down as well as up, and past performance is not a guide to future
              performance. Please consult a qualified investment advisor or broker before
              making any investment decisions.
              <Link href={ROUTES.DISCLAIMER} className="font-[700] hover:text-[#000000]">See more.</Link>
            </Text>
          </Collapse>
        </Collapse.Group>
      </div>
    </div>
  )
}