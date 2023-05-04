/* eslint-disable @typescript-eslint/no-unsafe-assignment*/
/* eslint-disable @typescript-eslint/no-unsafe-member-access*/
/* eslint-disable @typescript-eslint/no-unsafe-call*/
/* eslint-disable */

import { Table, Text } from "@nextui-org/react";
import consolidateValues from "components/utils/consolidateData";
import { DM_Sans } from "next/font/google";

export type TIPOCompanyFinances = {
  companyFinances: any;
};

const dm_sans = DM_Sans({
  weight: "700",
  subsets: ["latin"],
});

export default function IPOTables(props: TIPOCompanyFinances) {
  const assetsData = consolidateValues(props.companyFinances.assets);
  const ProfitLossData = consolidateValues(props.companyFinances.profit_loss);
  const cashFlowData = consolidateValues(props.companyFinances.cash_flow);

  const rowsCFAssetsRows = Object.keys(assetsData)
    .splice(1)
    .map((record, index) => (
      <Table.Row key={index}>
        <Table.Cell>{record}</Table.Cell>
        {assetsData[record].map((r: string, idx) => (
          <Table.Cell key={idx}>{r}</Table.Cell>
        ))}
      </Table.Row>
    ));
  const rowsCFProfitLossRows = Object.keys(ProfitLossData)
    .splice(1)
    .map((record, index) => (
      <Table.Row key={index}>
        <Table.Cell>{record}</Table.Cell>
        {ProfitLossData[record].map((r: string, idx) => (
          <Table.Cell key={idx}>{r}</Table.Cell>
        ))}
      </Table.Row>
    ));
  const rowsCFCashFlowRows = Object.keys(cashFlowData)
    .splice(1)
    .map((record, index) => (
      <Table.Row key={index}>
        <Table.Cell>{record}</Table.Cell>
        {cashFlowData[record].map((r: string, idx) => (
          <Table.Cell key={idx}>{r}</Table.Cell>
        ))}
      </Table.Row>
    ));

  return (
    <div className="mx-5 flex flex-col gap-30 py-6">
      <div>
        <Text
          className={`mb-20 pl-10 text-center text-[20px] font-[500] leading-[20px] md:text-left md:leading-[24px] md:text-[24] ${dm_sans.className}`}
          css={{ color: "$textDark" }}
        >
          Balance Sheet
        </Text>
        <div className="md:mx-20">
          <Table striped bordered lined>
            <Table.Header>
              <Table.Column>{"As at"}</Table.Column>
              {assetsData["As at"].map((asset, idx) => (
                <Table.Column key={idx}>{asset}</Table.Column>
              ))}
              4v
            </Table.Header>
            <Table.Body>{rowsCFAssetsRows}</Table.Body>
          </Table>
        </div>
      </div>
      <div>
        <Text
          className={`mb-20 pl-10 text-center text-[20px] font-[500] leading-[20px] md:text-left md:leading-[24px] md:text-[24] ${dm_sans.className}`}
          css={{ color: "$textDark" }}
        >
          Profit and Loss
        </Text>
        <div className="md:mx-20">
          <Table striped bordered lined>
            <Table.Header>
              <Table.Column>{"As at"}</Table.Column>
              {ProfitLossData["As at"].map((asset, idx) => (
                <Table.Column key={idx}>{asset}</Table.Column>
              ))}
              4v
            </Table.Header>
            <Table.Body>{rowsCFProfitLossRows}</Table.Body>
          </Table>
        </div>
      </div>
      <div>
        <Text
          className={`mb-20 pl-10 text-center text-[20px] font-[500] leading-[20px] md:text-left md:leading-[24px] md:text-[24] ${dm_sans.className}`}
          css={{ color: "$textDark" }}
        >
          Cash Flow
        </Text>
        <div className="md:mx-20">
          <Table striped bordered lined>
            <Table.Header>
              <Table.Column>{"As at"}</Table.Column>
              {cashFlowData["As at"].map((asset, idx) => (
                <Table.Column key={idx}>{asset}</Table.Column>
              ))}
              4v
            </Table.Header>
            <Table.Body>{rowsCFCashFlowRows}</Table.Body>
          </Table>
        </div>
      </div>
    </div>
  );
}
