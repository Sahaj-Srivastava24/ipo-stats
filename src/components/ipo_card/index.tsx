import {Container, Spacer} from "@nextui-org/react";
import {type IPO} from "components/entities/live-ipo";
import ROUTES from "components/entities/routes";
import Image from "next/image";
import Link from "next/link";

export default function IPOCard({ipo, cls}: {ipo: IPO, cls?: string}) {

  return (
    <Link href={{pathname: ROUTES.IPO, query: {id: ipo.id}}}>
      <Container
        css={{bg: '$ipoCardBackground', minHeight: '550px', maxWidth: '500px', justifyContent: 'space-between'}}
        className={`rounded-20 pt-[60px] pb-20 flex md:flex-col md:pb-[60px] gap-20 hover:transition-[box-shadow] hover:duration-[200ms] hover:shadow-[0px_64px_64px_-48px_rgba(15,15,15,0.1)]`}>
        <div className={`flex flex-col items-center justify-between ${cls}`}>
          <div className="flex flex-cols justify-between items-center mb-30 min-h-[120px] w-[60%] relative bg-image-bg rounded-[15px]">
            <Image src={ipo.image} alt="Company Logo" fill style={{objectFit: 'contain'}} className="p-20" />
          </div>
          <div className="font-medium text-center leading-24 mb-20 px-20">
            {ipo.companyName}
          </div>
          <div className="text-14 leading-24 text-[#777E90] text-center px-20">
            {ipo.companyDescription}
          </div>
        </div>
        <div className="w-full">
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
        </div>
      </Container>
    </Link>
  )
}