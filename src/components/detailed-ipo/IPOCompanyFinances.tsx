/* eslint-disable @typescript-eslint/no-unsafe-assignment*/
/* eslint-disable @typescript-eslint/no-unsafe-member-access*/
/* eslint-disable @typescript-eslint/no-unsafe-call*/
/* eslint-disable */

import {Table, Text} from "@nextui-org/react";
import {DM_Sans} from "next/font/google";

export type TIPOCompanyFinances = {
  companyFinances: any
}

const dm_sans = DM_Sans({
  weight: '700',
  subsets: ['latin']
})

export default function IPOCompanyFinances(props: TIPOCompanyFinances) {
  const rowsCFAssetsRows = props.companyFinances.assets.records.map((record, index) => (
    <Table.Row key={index}>
      {Object.values(record).map((r: string, idx) => <Table.Cell key={idx}>{r}</Table.Cell>)}
    </Table.Row>
  ));

  const rowsCFLiabilityRows = props.companyFinances.liabilities.records.map((record, index) => (
    <Table.Row key={index}>
      {Object.values(record).map((r: string, idx) => <Table.Cell key={idx}>{r}</Table.Cell>)}
    </Table.Row>
  ));

  const rowsCFProfitLossRows = props.companyFinances.profit_loss.records.map((record, index) => (
    <Table.Row key={index}>
      {Object.values(record).map((r: string, idx) => <Table.Cell key={idx}>{r}</Table.Cell>)}
    </Table.Row>
  ));

  const rowsCFCashFlowRows = props.companyFinances.cash_flow.records.map((record, index) => (
    <Table.Row key={index}>
      {Object.values(record).map((r: string, idx) => <Table.Cell key={idx}>{r}</Table.Cell>)}
    </Table.Row>
  ));

  return (
    <div className="flex flex-col gap-30 mx-30">
      <div>
        <Text className={`text-center md:text-left text-[24px] md:text-[32px] leading-[24px] md:leading-[32px] font-[700] mb-20 pl-10 ${dm_sans.className}`} css={{color: '$textDark'}}>Liabilities</Text>
        <Table striped bordered lined>
          <Table.Header>
            {props.companyFinances.liabilities.columns.map((asset, idx) => (
              <Table.Column key={idx}>{asset}</Table.Column>
            ))}
          </Table.Header>
          <Table.Body>
            {rowsCFLiabilityRows}
          </Table.Body>
        </Table>
      </div>
      <div>
        <Text className={`text-center md:text-left text-[24px] md:text-[32px] leading-[24px] md:leading-[32px] font-[700] mb-20 pl-10 ${dm_sans.className}`} css={{color: '$textDark'}}>Cash Flow</Text>
        <Table striped bordered lined>
          <Table.Header>
            {props.companyFinances.cash_flow.columns.map((asset, idx) => (
              <Table.Column key={idx}>{asset}</Table.Column>
            ))}
          </Table.Header>
          <Table.Body>
            {rowsCFCashFlowRows}
          </Table.Body>
        </Table>
      </div>
      <div>
        <Text className={`text-center md:text-left text-[24px] md:text-[32px] leading-[24px] md:leading-[32px] font-[700] mb-20 pl-10 ${dm_sans.className}`} css={{color: '$textDark'}}>Assets</Text>
        <Table striped bordered lined>
          <Table.Header>
            {props.companyFinances.assets.columns.map((asset, idx) => (
              <Table.Column key={idx}>{asset}</Table.Column>
            ))}
          </Table.Header>
          <Table.Body>
            {rowsCFAssetsRows}
          </Table.Body>
        </Table>
      </div>
      <div>
        <Text className={`text-center md:text-left text-[24px] md:text-[32px] leading-[24px] md:leading-[32px] font-[700] mb-20 pl-10 ${dm_sans.className}`} css={{color: '$textDark'}}>Profit and Loss</Text>
        <Table striped bordered lined>
          <Table.Header>
            {props.companyFinances.profit_loss.columns.map((asset, idx) => (
              <Table.Column key={idx}>{asset}</Table.Column>
            ))}
          </Table.Header>
          <Table.Body>
            {rowsCFProfitLossRows}
          </Table.Body>
        </Table>
      </div>
    </div>
  )
}