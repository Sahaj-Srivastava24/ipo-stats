/* eslint-disable @typescript-eslint/no-unsafe-assignment*/
/* eslint-disable @typescript-eslint/no-unsafe-member-access*/
/* eslint-disable @typescript-eslint/no-unsafe-call*/
/* eslint-disable */

import {Table, Text} from "@nextui-org/react";
import underscoreToWord from "components/utils/underscoreToWordCase";
import {DM_Sans} from "next/font/google";

export type TIPODetailsTable = {
  ipoDetails: any
  ipoInvestors: any
  ipoTT: any
}

const dm_sans = DM_Sans({
  weight: '700',
  subsets: ['latin']
})

export default function IPODetailsTable(props: TIPODetailsTable) {
  const rowsIPODetails = Object.entries(props.ipoDetails).splice(1).map(([property, value]: [string, string], index) => (
    <Table.Row key={index}>
      <Table.Cell>{underscoreToWord(property)}</Table.Cell>
      <Table.Cell>{value}</Table.Cell>
    </Table.Row>
  ));

  const rowsIPOAnchorInvestorsDetails = Object.entries(props.ipoInvestors).splice(1).map(([property, value]: [string, string], index) => (
    <Table.Row key={index}>
      <Table.Cell>{underscoreToWord(property)}</Table.Cell>
      <Table.Cell>{value}</Table.Cell>
    </Table.Row>
  ));

  const rowsIPOTentativeTimetables = Object.entries(props.ipoTT).splice(1).map(([property, value]: [string, string], index) => (
    <Table.Row key={index}>
      <Table.Cell>{underscoreToWord(property)}</Table.Cell>
      <Table.Cell>{value}</Table.Cell>
    </Table.Row>
  ));

  return (
    <div className="mx-30">
      <Text className={`text-center md:text-left text-[24px] md:text-[32px] leading-[24px] md:leading-[32px] font-[700] mb-20 pl-10 ${dm_sans.className}`} css={{color: '$textDark'}}>IPO Details</Text>
      <div className="flex flex-col gap-30">
        <Table striped bordered lined>
          <Table.Header>
            <Table.Column>{'IPO Details'}</Table.Column>
            <Table.Column>{''}</Table.Column>
          </Table.Header>
          <Table.Body>
            {rowsIPODetails}
          </Table.Body>
        </Table>
      </div>
      <div className="grid md:grid-cols-2 gap-20 mt-30">
        <div>
          <Table striped bordered lined>
            <Table.Header>
              <Table.Column>{'IPO Anchor Investors Details'}</Table.Column>
              <Table.Column>{''}</Table.Column>
            </Table.Header>
            <Table.Body>
              {rowsIPOAnchorInvestorsDetails}
            </Table.Body>
          </Table>
        </div>
        <div>
          <Table striped bordered lined>
            <Table.Header>
              <Table.Column>{'IPO Anchor Investors Details'}</Table.Column>
              <Table.Column>{''}</Table.Column>
            </Table.Header>
            <Table.Body>
              {rowsIPOTentativeTimetables}
            </Table.Body>
          </Table>
        </div>
      </div>
    </div>
  )
}