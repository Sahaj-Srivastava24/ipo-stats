/* eslint-disable @typescript-eslint/no-unsafe-assignment*/
/* eslint-disable @typescript-eslint/no-unsafe-member-access*/
/* eslint-disable @typescript-eslint/no-unsafe-call*/
/* eslint-disable */

import {Table, Text} from "@nextui-org/react";
import underscoreToWord from "components/utils/underscoreToWordCase";
import {DM_Sans} from "next/font/google";

export type TIPODetailsTable = {
  ipoDetails: any
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

  const rowsIPOTentativeTimetables = Object.entries(props.ipoTT).splice(1).map(([property, value]: [string, string], index) => (
    <Table.Row key={index}>
      <Table.Cell>{underscoreToWord(property)}</Table.Cell>
      <Table.Cell>{value}</Table.Cell>
    </Table.Row>
  ));

  return (
    <div className="gap-20 mb-20 flex flex-col justify-between md:flex-row md:mx-30 md:justify-around md:gap-20">
      <div className="w-full">
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
      </div>
      <div className="w-full">
        <Table striped bordered lined>
          <Table.Header>
            <Table.Column>{'IPO Tentative Timetable'}</Table.Column>
            <Table.Column>{''}</Table.Column>
          </Table.Header>
          <Table.Body>
            {rowsIPOTentativeTimetables}
          </Table.Body>
        </Table>
      </div>
    </div>
  )
}