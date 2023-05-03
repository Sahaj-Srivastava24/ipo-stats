import {Container, Spacer} from "@nextui-org/react";
import {type IPO} from "components/entities/live-ipo";
import Image from "next/image";

export default function IPOCard({ipo}: {ipo: IPO}) {

  return (
    <Container
      css={{bg: '$ipoCardBackground'}}
      className="rounded-20 pt-[60px] pb-50 hover:transition-[box-shadow] hover:duration-[200ms] hover:shadow-[0px_64px_64px_-48px_rgba(15,15,15,0.1)]">
      <div className="flex flex-cols justify-center items-center mb-30 min-h-[120px]">
        <Image src={ipo.image} alt="Company Logo" width={100} height={120} />
      </div>
      <div className="font-medium text-center leading-24 mb-20 px-20">
        {ipo.companyName}
      </div>
      <div className="text-14 leading-24 text-[#777E90] text-center px-20">
        {ipo.companyDescription}
      </div>
      <Spacer y={2} />
      <div className="flex justify-between text-14 leading-24 text-[#777E90] md:px-20">
        <div className="font-bold">IPO Date</div>
        <div className="text-right">{ipo.ipoDate}</div>
      </div>
      <div className="flex justify-between text-14 leading-24 text-[#777E90] md:px-20">
        <div className="font-bold">Price</div>
        <div className="text-right">{ipo.price}</div>
      </div>
      <div className="flex justify-between text-14 leading-24 text-[#777E90] md:px-20">
        <div className="font-bold">Lot Size</div>
        <div className="text-right">{ipo.lotSize}</div>
      </div>
    </Container>
  )
}