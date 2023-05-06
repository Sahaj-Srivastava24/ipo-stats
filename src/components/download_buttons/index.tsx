import {Card, Text} from "@nextui-org/react";
import imageMappings from "components/entities/imageMappings";
import Image from "next/image";
import Link from "next/link";

export default function DownloadButtons({drhp, rhp}: {drhp: string, rhp: string}) {

  return (
    <div className="flex justify-center gap-30 ">
      <Link href={drhp} target="_blank">
        <Card
          isPressable
          isHoverable
          variant="bordered"
          css={{minWidth: "400px", bg: 'var(--nextui-colors-backgroundLight)'}}
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
          css={{minWidth: "400px", bg: 'var(--nextui-colors-backgroundLight)'}}
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
  )
}