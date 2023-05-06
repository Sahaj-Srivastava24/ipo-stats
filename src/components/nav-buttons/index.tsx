import {Card, Text} from "@nextui-org/react";
import ROUTES from "components/entities/routes";
import Link from "next/link";

export default function NavButtons() {

  return (
    <div className="mx-20 navLogo:mx-30 md:mx-[80px] hidden md:block">
      <div className="flex flex-col md:flex-row justify-center items-center gap-30">
        <Link href={ROUTES.HOME + '#liveIPO'}>
          <Card
            isPressable
            isHoverable
            variant="bordered"
            css={{bg: 'var(--nextui-colors-backgroundLight)'}}
          >
            <Card.Body>
              <Text>Live IPOs</Text>
            </Card.Body>
          </Card>
        </Link>

        <Link href={ROUTES.HOME + '#listedIPO'}>
          <Card
            isPressable
            isHoverable
            variant="bordered"
            css={{bg: 'var(--nextui-colors-backgroundLight)'}}
          >
            <Card.Body>
              <Text size='sm' >Listed IPOs</Text>
            </Card.Body>
          </Card>
        </Link>
      </div>
    </div>
  )
}