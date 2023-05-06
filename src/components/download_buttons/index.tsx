import {Card, Text} from "@nextui-org/react";
import imageMappings from "components/entities/imageMappings";
import {DM_Sans} from "next/font/google";
import Image from "next/image";
import Link from "next/link";


const dm_sans = DM_Sans({
  weight: '700',
  subsets: ['latin']
})

export default function DownloadButtons({drhp, rhp}: {drhp: string, rhp: string}) {

  return (
    <div className="mx-20 navLogo:mx-30 md:mx-[80px]">
      <Text className={`text-center md:text-left text-[24px] md:text-[32px] leading-[24px] md:leading-[32px] font-[700] mb-20 pl-10 ${dm_sans.className}`} css={{color: '$textDark'}}>Files Section</Text>
      <div className="flex flex-col md:flex-row justify-center items-center gap-30 ">

        <Link href={drhp} target="_blank">
          <Card
            isPressable
            isHoverable
            variant="bordered"
            css={{minWidth: "350px", bg: 'var(--nextui-colors-backgroundLight)'}}
          >
            <Card.Body>
              <div className="w-full flex flex-col gap-20 justify-center items-center">
                <Image src={imageMappings.logoPDF} alt="pdf logo" height={120} width={80} />
                <Text>Download DRHP</Text>
              </div>
            </Card.Body>
          </Card>
        </Link>

        <Link href={rhp} target="_blank">
          <Card
            isPressable
            isHoverable
            variant="bordered"
            css={{minWidth: "350px", bg: 'var(--nextui-colors-backgroundLight)'}}
          >
            <Card.Body>
              <div className="w-full flex flex-col gap-20 justify-center items-center">
                <Image src={imageMappings.logoPDF} alt="pdf logo" height={120} width={80} />
                <Text>Download RHP</Text>
              </div>
            </Card.Body>
          </Card>
        </Link>
      </div>
    </div>
  )
}